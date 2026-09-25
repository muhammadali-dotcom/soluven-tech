"use client";

import { useEffect, useRef } from "react";

type Rgb = [number, number, number];

const CELL = 14; // px per marching-squares cell
const LEVELS = 9;
const FRAME_INTERVAL = 33; // ~30fps is plenty for slow drift.

// Marching squares: for each corner case, the cell edges each segment joins.
// Edges: 0 top, 1 right, 2 bottom, 3 left. Corner bits: tl 8, tr 4, br 2, bl 1.
const SEGMENTS: [number, number][][] = [
  [],
  [[3, 2]],
  [[2, 1]],
  [[3, 1]],
  [[0, 1]],
  [[3, 0], [2, 1]],
  [[0, 2]],
  [[3, 0]],
  [[3, 0]],
  [[0, 2]],
  [[0, 1], [3, 2]],
  [[0, 1]],
  [[3, 1]],
  [[2, 1]],
  [[3, 2]],
  [],
];

function readColor(name: string, fallback: string): Rgb {
  const value =
    getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
  const hex = value.replace("#", "");
  const full = hex.length === 3 ? hex.split("").map((c) => c + c).join("") : hex;
  const n = parseInt(full, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

/** Layered sine waves: a smooth terrain that drifts slowly over time. */
function field(u: number, v: number, t: number) {
  return (
    Math.sin(u * 1.3 + t * 0.9) * Math.cos(v * 1.1 - t * 0.7) +
    0.6 * Math.sin((u + v) * 0.9 + t * 0.5) +
    0.4 * Math.cos(u * 2.1 - v * 1.7 + t * 1.1) +
    0.25 * Math.sin(v * 2.9 + u * 0.4 - t * 0.6)
  );
}

/**
 * Topographic contour lines in brand blue and green that slowly reshape.
 * Decorative only: pauses off-screen, holds a single frame under reduced
 * motion, and only follows the pointer on fine-pointer devices.
 */
export function HeroContours({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const desktop = window.matchMedia("(min-width: 1024px)");
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const blue = readColor("--soluven-blue", "#63cbf8");
    const green = readColor("--soluven-green", "#7ed957");
    const cream = readColor("--soluven-cream", "#fff8ee");

    const styles = Array.from({ length: LEVELS }, (_, i) => {
      const [r, g, b] = i % 4 === 3 ? cream : i % 2 === 0 ? blue : green;
      const alpha = i % 4 === 3 ? 0.22 : i % 2 === 0 ? 0.5 : 0.4;
      return { color: `rgba(${r},${g},${b},${alpha})`, width: i % 3 === 0 ? 1.25 : 1 };
    });
    const levels = Array.from({ length: LEVELS }, (_, i) => -1.6 + (3.2 * (i + 0.5)) / LEVELS);

    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let values = new Float32Array(0);
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

    const render = (time: number) => {
      if (!width || !height) return;
      mx += (mxTarget - mx) * 0.05;
      my += (myTarget - my) * 0.05;

      // The CSS mask hides the left third on desktop, so don't compute it.
      const x0 = desktop.matches ? Math.floor((width * 0.35) / CELL) * CELL : 0;
      cols = Math.ceil((width - x0) / CELL);
      rows = Math.ceil(height / CELL);
      const stride = cols + 1;
      if (values.length !== stride * (rows + 1)) values = new Float32Array(stride * (rows + 1));

      const t = time * 0.00012;
      const scale = 3.2 / Math.min(width, height);
      for (let j = 0; j <= rows; j++) {
        for (let i = 0; i <= cols; i++) {
          const u = (x0 + i * CELL) * scale + mx * 0.15;
          const v = j * CELL * scale + my * 0.1;
          values[j * stride + i] = field(u, v, t);
        }
      }

      ctx.clearRect(0, 0, width, height);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      for (let l = 0; l < LEVELS; l++) {
        const level = levels[l];
        ctx.beginPath();
        for (let j = 0; j < rows; j++) {
          for (let i = 0; i < cols; i++) {
            const tl = values[j * stride + i];
            const tr = values[j * stride + i + 1];
            const br = values[(j + 1) * stride + i + 1];
            const bl = values[(j + 1) * stride + i];
            const index =
              (tl > level ? 8 : 0) | (tr > level ? 4 : 0) | (br > level ? 2 : 0) | (bl > level ? 1 : 0);
            const segments = SEGMENTS[index];
            if (!segments.length) continue;

            const cx = x0 + i * CELL;
            const cy = j * CELL;
            const edge = (e: number): [number, number] => {
              switch (e) {
                case 0:
                  return [cx + CELL * ((level - tl) / (tr - tl)), cy];
                case 1:
                  return [cx + CELL, cy + CELL * ((level - tr) / (br - tr))];
                case 2:
                  return [cx + CELL * ((level - bl) / (br - bl)), cy + CELL];
                default:
                  return [cx, cy + CELL * ((level - tl) / (bl - tl))];
              }
            };
            for (const [a, b] of segments) {
              const [ax, ay] = edge(a);
              const [bx, by] = edge(b);
              ctx.moveTo(ax, ay);
              ctx.lineTo(bx, by);
            }
          }
        }
        ctx.strokeStyle = styles[l].color;
        ctx.lineWidth = styles[l].width;
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
