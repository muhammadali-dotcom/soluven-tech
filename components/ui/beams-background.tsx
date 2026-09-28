"use client";

import { useEffect, useRef } from "react";

type Rgb = [number, number, number];

const BEAM_COUNT = 30;
const BLUR = 35; // px, applied per beam where canvas filters are supported

interface Beam {
  x: number;
  y: number;
  width: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  color: Rgb;
  pulse: number;
  pulseSpeed: number;
}

const opacityMap = {
  subtle: 0.7,
  medium: 0.85,
  strong: 1,
};

function readColor(name: string, fallback: string): Rgb {
  const value =
    getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
  const hex = value.replace("#", "");
  const full = hex.length === 3 ? hex.split("").map((c) => c + c).join("") : hex;
  const n = parseInt(full, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function createBeam(width: number, height: number, color: Rgb): Beam {
  return {
    x: Math.random() * width * 1.5 - width * 0.25,
    y: Math.random() * height * 1.5 - height * 0.25,
    width: 30 + Math.random() * 60,
    length: height * 2.5,
    angle: -35 + Math.random() * 10,
    speed: 0.6 + Math.random() * 1.2,
    opacity: 0.12 + Math.random() * 0.16,
    color,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.02 + Math.random() * 0.03,
  };
}

/**
 * Soft beams of brand-colored light drifting upward behind the hero copy.
 * Decorative only: pauses off-screen and holds a still frame under reduced motion.
 */
export function BeamsBackground({
  className = "",
  intensity = "strong",
}: {
  className?: string;
  intensity?: "subtle" | "medium" | "strong";
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const palette = [
      readColor("--soluven-blue", "#63cbf8"),
      readColor("--soluven-green", "#7ed957"),
    ];

    let width = 0;
    let height = 0;
    let beams: Beam[] = [];
    let raf = 0;
    let visible = false;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      if (!width || !height) return;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      beams = Array.from({ length: BEAM_COUNT }, (_, i) =>
        createBeam(width, height, palette[i % palette.length]),
      );
    };

    const resetBeam = (beam: Beam, index: number) => {
      const column = index % 3;
      const spacing = width / 3;
      beam.y = height + 100;
      beam.x = column * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.5;
      beam.width = 100 + Math.random() * 100;
      beam.speed = 0.5 + Math.random() * 0.4;
      beam.opacity = 0.2 + Math.random() * 0.1;
    };

    const drawBeam = (beam: Beam) => {
      ctx.save();
      ctx.translate(beam.x, beam.y);
      ctx.rotate((beam.angle * Math.PI) / 180);

      const alpha = beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.2) * opacityMap[intensity];
      const rgb = beam.color.join(",");
      const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);
      gradient.addColorStop(0, `rgba(${rgb},0)`);
      gradient.addColorStop(0.1, `rgba(${rgb},${alpha * 0.5})`);
      gradient.addColorStop(0.4, `rgba(${rgb},${alpha})`);
      gradient.addColorStop(0.6, `rgba(${rgb},${alpha})`);
      gradient.addColorStop(0.9, `rgba(${rgb},${alpha * 0.5})`);
      gradient.addColorStop(1, `rgba(${rgb},0)`);

      ctx.fillStyle = gradient;
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
      ctx.restore();
    };

    const render = (advance: boolean) => {
      if (!width || !height) return;
      ctx.clearRect(0, 0, width, height);
      ctx.filter = `blur(${BLUR}px)`;
      beams.forEach((beam, index) => {
        if (advance) {
          beam.y -= beam.speed;
          beam.pulse += beam.pulseSpeed;
          if (beam.y + beam.length < -100) resetBeam(beam, index);
        }
        drawBeam(beam);
      });
      ctx.filter = "none";
    };

    const tick = () => {
      render(true);
      raf = visible ? requestAnimationFrame(tick) : 0;
    };

    resize();
    render(false);

    const resizeObserver = new ResizeObserver(() => {
      resize();
      render(false);
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
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={{ filter: "blur(15px)" }}
    />
  );
}
