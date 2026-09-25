"use client";

import { useEffect, useRef } from "react";

type Rgb = [number, number, number];

const FRAME_INTERVAL = 33; // ~30fps is plenty for slow weaving.
const WARP_GAP = 22; // px between vertical threads
const WEFT_GAP = 26; // px between horizontal threads
const SAMPLE = 6; // px between points along a thread
const ROW_TIME = 1100; // ms to weave one row
const HOLD = 2000; // ms the finished cloth stays
const FADE = 1500; // ms to unravel before starting again
const CROSS = 6; // half-length of a warp piece passing over a weft

function readColor(name: string, fallback: string): Rgb {
  const value =
    getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
  const hex = value.replace("#", "");
  const full = hex.length === 3 ? hex.split("").map((c) => c + c).join("") : hex;
  const n = parseInt(full, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

/**
 * Fine threads woven row by row into a plain weave, then unravelled and woven
 * again: craftsmanship, done properly. Decorative only: pauses off-screen and
 * shows the finished cloth, still, under reduced motion.
 */
export function HeroWeave({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktop = window.matchMedia("(min-width: 1024px)");
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const blue = readColor("--soluven-blue", "#63cbf8");
    const green = readColor("--soluven-green", "#7ed957");
    const cream = readColor("--soluven-cream", "#fff8ee");
    const ink = readColor("--soluven-ink", "#16242a");
    const warpColor = `rgba(${cream.join(",")},0.2)`;
    const weftColors = [`rgba(${blue.join(",")},0.65)`, `rgba(${green.join(",")},0.55)`];
    // The section background, used as a halo so the upper thread visibly covers the lower.
    const halo = `rgb(${ink.join(",")})`;

    let width = 0;
    let height = 0;
    let x0 = 0;
    let x1 = 0;
    let y0 = 0;
    let warps: number[] = [];
    let wefts: number[] = [];
    let raf = 0;
    let visible = false;
    let start = 0;
    let lastFrame = 0;

    const layout = () => {
      const wide = desktop.matches;
      x0 = width * (wide ? 0.45 : 0.04);
      x1 = width * (wide ? 0.95 : 0.96);
      y0 = height * (wide ? 0.14 : 0.1);
      const y1 = height * (wide ? 0.86 : 0.9);
      warps = [];
      for (let x = x0; x <= x1; x += WARP_GAP) warps.push(x);
      wefts = [];
      for (let y = y0; y <= y1; y += WEFT_GAP) wefts.push(y);
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      if (!width || !height) return;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      layout();
    };

    // Gentle, slow undulation so the cloth breathes.
    const warpX = (j: number, y: number, t: number) =>
      warps[j] + 2.5 * Math.sin(y * 0.02 + t * 0.0006 + j * 0.7);
    const weftY = (i: number, x: number, t: number) =>
      wefts[i] + 2.5 * Math.sin(x * 0.018 + t * 0.0005 + i * 1.3);

    const render = (time: number, complete = false) => {
      if (!width || !height || !warps.length || !wefts.length) return;
      const rows = wefts.length;
      const build = rows * ROW_TIME;
      const cycle = build + HOLD + FADE;
      const p = complete ? build : time % cycle;
      const woven = Math.min(rows, p / ROW_TIME); // e.g. 7.4 = 7 rows done, 8th 40% across
      const fade = p > build + HOLD ? 1 - (p - build - HOLD) / FADE : 1;
      const t = complete ? 0 : time;

      ctx.clearRect(0, 0, width, height);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      // 1. The loom: every warp thread, always present.
      ctx.globalAlpha = 1;
      ctx.beginPath();
      for (let j = 0; j < warps.length; j++) {
        ctx.moveTo(warpX(j, y0 - 20, t), y0 - 20);
        for (let y = y0 - 20; y <= wefts[rows - 1] + 20; y += SAMPLE) ctx.lineTo(warpX(j, y, t), y);
      }
      ctx.strokeStyle = warpColor;
      ctx.lineWidth = 1;
      ctx.stroke();

      // 2. Woven rows, each passing over the warps (halo first, then the thread).
      ctx.globalAlpha = Math.max(0, fade);
      let shuttle: [number, number] | null = null;
      const rowEnds: number[] = [];
      for (let i = 0; i < Math.ceil(woven); i++) {
        const share = Math.min(1, woven - i);
        const end = x0 + (x1 - x0) * share;
        rowEnds.push(end);
        ctx.beginPath();
        ctx.moveTo(x0, weftY(i, x0, t));
        for (let x = x0 + SAMPLE; x < end; x += SAMPLE) ctx.lineTo(x, weftY(i, x, t));
        ctx.lineTo(end, weftY(i, end, t));
        ctx.strokeStyle = halo;
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.strokeStyle = weftColors[i % 2];
        ctx.lineWidth = 1.4;
        ctx.stroke();
        if (share < 1) shuttle = [end, weftY(i, end, t)];
      }

      // 3. Plain weave: at alternate crossings the warp passes over the weft.
      const pieces: [number, number, number, number][] = [];
      for (let i = 0; i < rowEnds.length; i++) {
        for (let j = (i % 2); j < warps.length; j += 2) {
          if (warps[j] > rowEnds[i]) break;
          const y = weftY(i, warps[j], t);
          pieces.push([warpX(j, y - CROSS, t), y - CROSS, warpX(j, y + CROSS, t), y + CROSS]);
        }
      }
      ctx.beginPath();
      for (const [ax, ay, bx, by] of pieces) {
        ctx.moveTo(ax, ay);
        ctx.lineTo(bx, by);
      }
      ctx.strokeStyle = halo;
      ctx.lineWidth = 4;
      ctx.stroke();
      ctx.strokeStyle = warpColor;
      ctx.lineWidth = 1;
      ctx.stroke();

      // 4. The shuttle carrying the current row.
      if (shuttle) {
        ctx.beginPath();
        ctx.arc(shuttle[0], shuttle[1], 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${cream.join(",")},0.9)`;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const tick = (now: number) => {
      if (!start) start = now;
      if (now - lastFrame >= FRAME_INTERVAL) {
        lastFrame = now;
        render(now - start);
      }
      raf = visible ? requestAnimationFrame(tick) : 0;
    };

    resize();
    render(0, reduceMotion);

    const resizeObserver = new ResizeObserver(() => {
      resize();
      render(start ? performance.now() - start : 0, reduceMotion);
    });
    resizeObserver.observe(canvas);

    if (reduceMotion) {
      return () => resizeObserver.disconnect();
    }

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !raf) raf = requestAnimationFrame(tick);
    });
    intersectionObserver.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
