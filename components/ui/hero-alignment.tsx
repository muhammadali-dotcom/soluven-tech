"use client";

import { useEffect, useRef } from "react";

type Rgb = [number, number, number];

type Fragment = {
  // Ordered state: a dash on one of the parallel rules.
  ox: number;
  oy: number;
  // Scattered state: a drifting home position and spin.
  hx: number;
  hy: number;
  angle: number;
  spin: number;
  phase: number;
  length: number;
  style: number;
};

const FRAME_INTERVAL = 33; // ~30fps is plenty for slow drift.
const CYCLE = 12000; // ms: scattered → align → hold → scatter
const GAP = 8;

function readColor(name: string, fallback: string): Rgb {
  const value =
    getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
  const hex = value.replace("#", "");
  const full = hex.length === 3 ? hex.split("").map((c) => c + c).join("") : hex;
  const n = parseInt(full, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

// Deterministic pseudo-random so the layout is stable between resizes.
function random(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

const ease = (x: number) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);

/** 0 = scattered, 1 = aligned, for a fragment delayed by `lag` (0..1). */
function alignment(time: number, lag: number) {
  const p = (((time - lag * 1400) % CYCLE) + CYCLE) % CYCLE / CYCLE;
  if (p < 0.25) return 0; // scattered
  if (p < 0.45) return ease((p - 0.25) / 0.2); // aligning
  if (p < 0.75) return 1; // hold in order
  if (p < 0.95) return 1 - ease((p - 0.75) / 0.2); // loosening
  return 0;
}

/**
 * Short line fragments that drift at random, then settle into calm parallel
 * rules and loosen again: confusion becoming clarity. Decorative only: pauses
 * off-screen and shows the ordered state, still, under reduced motion.
 */
export function HeroAlignment({ className = "" }: { className?: string }) {
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
    const styles = [
      `rgba(${blue.join(",")},0.6)`,
      `rgba(${green.join(",")},0.5)`,
      `rgba(${cream.join(",")},0.22)`,
    ];

    let width = 0;
    let height = 0;
    let fragments: Fragment[] = [];
    let raf = 0;
    let visible = false;
    let start = 0;
    let lastFrame = 0;

    const layout = () => {
      // The CSS mask hides the left third on desktop, so start the field after it.
      const x0 = desktop.matches ? width * 0.36 : 0;
      const rows = desktop.matches ? 11 : 9;
      const top = height * 0.16;
      const span = height * 0.68;
      fragments = [];
      let seed = 1;
      for (let r = 0; r < rows; r++) {
        const y = top + (span * r) / (rows - 1);
        let x = x0 + random(seed++) * 20;
        while (x < width + 10) {
          const length = 16 + random(seed++) * 30;
          fragments.push({
            ox: x + length / 2,
            oy: y,
            hx: x0 + random(seed++) * (width - x0),
            hy: height * 0.06 + random(seed++) * height * 0.88,
            angle: random(seed++) * Math.PI,
            spin: (random(seed++) - 0.5) * 0.0006,
            phase: random(seed++) * Math.PI * 2,
            length,
            style: fragments.length % 5 === 4 ? 2 : fragments.length % 2,
          });
          x += length + GAP;
        }
      }
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

    const render = (time: number, still = false) => {
      if (!width || !height) return;
      ctx.clearRect(0, 0, width, height);
      ctx.lineCap = "round";
      ctx.lineWidth = 1.4;

      for (let s = 0; s < styles.length; s++) {
        ctx.beginPath();
        for (const f of fragments) {
          if (f.style !== s) continue;
          // Stagger by position so the order sweeps across from left to right.
          const k = still ? 1 : alignment(time, (f.ox - width * 0.36) / width);
          const driftX = Math.sin(time * 0.0004 + f.phase) * 18;
          const driftY = Math.cos(time * 0.00033 + f.phase) * 14;
          const x = (f.hx + driftX) * (1 - k) + f.ox * k;
          const y = (f.hy + driftY) * (1 - k) + f.oy * k;
          // Rotate toward horizontal along the shortest turn (lines have no direction).
          let a = (f.angle + time * f.spin) % Math.PI;
          if (a > Math.PI / 2) a -= Math.PI;
          if (a < -Math.PI / 2) a += Math.PI;
          const angle = a * (1 - k);
          const dx = (Math.cos(angle) * f.length) / 2;
          const dy = (Math.sin(angle) * f.length) / 2;
          ctx.moveTo(x - dx, y - dy);
          ctx.lineTo(x + dx, y + dy);
        }
        ctx.strokeStyle = styles[s];
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
