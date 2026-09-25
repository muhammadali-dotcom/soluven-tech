"use client";

import { useEffect, useRef } from "react";

type Rgb = [number, number, number];

type Ribbon = {
  sy: number;
  ey: number;
  f1x: number;
  f1y: number;
  f2x: number;
  f2y: number;
  phase: number;
  width: number;
  alpha: number;
  green: boolean;
};

const RIBBON_COUNT = 7;
const FRAME_INTERVAL = 33; // ~30fps is plenty for slow drift.

const ribbons: Ribbon[] = Array.from({ length: RIBBON_COUNT }, (_, i) => ({
  sy: 0.05 + (i / (RIBBON_COUNT - 1)) * 0.9,
  ey: 0.05 + ((i + 0.6) / (RIBBON_COUNT - 1)) * 0.85,
  f1x: 0.00018 + i * 0.000045,
  f1y: 0.00029 - i * 0.000022,
  f2x: 0.00024 - i * 0.00002,
  f2y: 0.00021 + i * 0.00004,
  phase: i * ((Math.PI * 2) / RIBBON_COUNT),
  width: 1.2 + (i % 3) * 0.6,
  alpha: 0.7 - (i % 3) * 0.15,
  green: i % 2 === 1,
}));

function readColor(name: string, fallback: string): Rgb {
  const value =
    getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
  const hex = value.replace("#", "");
  const full = hex.length === 3 ? hex.split("").map((c) => c + c).join("") : hex;
  const n = parseInt(full, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

/**
 * Slow-moving bezier lines in the brand blue and green, drawn on a 2D canvas.
 * Decorative only: pauses off-screen, holds a single frame under reduced
 * motion, and only follows the pointer on fine-pointer devices.
 */
export function HeroRibbons({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const blue = readColor("--soluven-blue", "#63cbf8");
    const green = readColor("--soluven-green", "#7ed957");

    let width = 0;
    let height = 0;
    let raf = 0;
    let visible = false;
    let start = 0;
    let lastFrame = 0;
    let mx = 0;
    let my = 0;
    let mxTarget = 0;
    let myTarget = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      if (!width || !height) return;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const render = (t: number) => {
      if (!width || !height) return;
      mx += (mxTarget - mx) * 0.05;
      my += (myTarget - my) * 0.05;
      const px = mx * 14;
      const py = my * 8;

      ctx.clearRect(0, 0, width, height);
      ctx.lineCap = "round";
      for (const r of ribbons) {
        const sx = width * 0.32 + px;
        const sy = height * r.sy + py;
        const ex = width * 1.08 + px;
        const ey = height * r.ey + py;
        const c1x = width * (0.57 + 0.12 * Math.sin(t * r.f1x + r.phase)) + px;
        const c1y = height * (r.sy + 0.18 * Math.cos(t * r.f1y + r.phase)) + py;
        const c2x = width * (0.97 + 0.14 * Math.sin(t * r.f2x + r.phase + 1)) + px;
        const c2y = height * (r.sy + 0.2 * Math.cos(t * r.f2y + r.phase + 1)) + py;

        const [cr, cg, cb] = r.green ? green : blue;
        const stroke = ctx.createLinearGradient(sx, sy, ex, ey);
        stroke.addColorStop(0, `rgba(${cr},${cg},${cb},0)`);
        stroke.addColorStop(0.5, `rgba(${cr},${cg},${cb},${r.alpha})`);
        stroke.addColorStop(1, `rgba(${cr},${cg},${cb},0)`);
        ctx.strokeStyle = stroke;
        ctx.lineWidth = r.width;
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.bezierCurveTo(c1x, c1y, c2x, c2y, ex, ey);
        ctx.stroke();
      }
    };

    const tick = (now: number) => {
      if (!start) start = now;
      if (now - lastFrame >= FRAME_INTERVAL) {
        lastFrame = now;
        render(now - start);
      }
      raf = visible ? requestAnimationFrame(tick) : 0;
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width) return;
      mxTarget = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      myTarget = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    resize();
    render(0);

    const resizeObserver = new ResizeObserver(() => {
      resize();
      render(start ? performance.now() - start : 0);
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

    if (finePointer) window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
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
