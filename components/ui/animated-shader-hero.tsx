"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";

// Types for component props, adapted for Next.js (href instead of onClick, ReactNode headlines)
interface HeroProps {
  trustBadge?: {
    text: string;
    icons?: string[];
  };
  headline: {
    line1: React.ReactNode;
    line2?: React.ReactNode;
  };
  subtitle: string;
  buttons?: {
    primary?: {
      text: string;
      href?: string;
      onClick?: () => void;
    };
    secondary?: {
      text: string;
      href?: string;
      onClick?: () => void;
    };
  };
  className?: string;
}

// ── WebGL Renderer ──────────────────────────────────────
const VERTEX_SOURCE = `#version 300 es
precision highp float;
in vec4 position;
void main(){gl_Position=position;}`;

class WebGLRenderer {
  private canvas: HTMLCanvasElement;
  private gl: WebGL2RenderingContext;
  private program: WebGLProgram | null = null;
  private shaders: WebGLShader[] = [];
  private buffer: WebGLBuffer | null = null;
  private resolution: WebGLUniformLocation | null = null;
  private time: WebGLUniformLocation | null = null;

  constructor(canvas: HTMLCanvasElement, gl: WebGL2RenderingContext) {
    this.canvas = canvas;
    this.gl = gl;
  }

  // Returns false when the GPU can't compile or link the shader, so the
  // caller can fall back to the static background instead of crashing.
  setup(fragmentSource: string): boolean {
    const gl = this.gl;
    const program = gl.createProgram();
    if (!program) return false;
    this.program = program;

    const sources = [
      [gl.VERTEX_SHADER, VERTEX_SOURCE],
      [gl.FRAGMENT_SHADER, fragmentSource],
    ] as const;
    for (const [type, source] of sources) {
      const shader = gl.createShader(type);
      if (!shader) return false;
      this.shaders.push(shader);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        if (process.env.NODE_ENV !== "production") {
          console.error("Shader compile error:", gl.getShaderInfoLog(shader));
        }
        return false;
      }
      gl.attachShader(program, shader);
    }

    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      if (process.env.NODE_ENV !== "production") {
        console.error("Shader link error:", gl.getProgramInfoLog(program));
      }
      return false;
    }

    this.buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    this.resolution = gl.getUniformLocation(program, "resolution");
    this.time = gl.getUniformLocation(program, "time");
    return true;
  }

  resize(width: number, height: number) {
    this.canvas.width = width;
    this.canvas.height = height;
    this.gl.viewport(0, 0, width, height);
  }

  render(seconds: number) {
    const gl = this.gl;
    if (!this.program) return;
    gl.useProgram(this.program);
    gl.uniform2f(this.resolution, this.canvas.width, this.canvas.height);
    gl.uniform1f(this.time, seconds);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  dispose() {
    const gl = this.gl;
    for (const shader of this.shaders) gl.deleteShader(shader);
    if (this.program) gl.deleteProgram(this.program);
    if (this.buffer) gl.deleteBuffer(this.buffer);
    this.shaders = [];
    this.program = null;
    this.buffer = null;
  }
}

// ── Shader Background Hook ──────────────────────────────
// Cap on rendered pixels; the canvas is stretched with CSS and the clouds are
// soft, so the lower internal resolution isn't visible.
const MAX_PIXELS = 1_200_000;
// Render-scale steps for adaptive quality on slow GPUs.
const QUALITY_STEPS = [1, 0.6, 0.4];
const SLOW_FRAME_MS = 22;
const SAMPLE_FRAMES = 60;
// Frames skipped before sampling, so page load and hydration don't count as a slow GPU.
const WARMUP_FRAMES = 45;
// Point in the animation shown as a still when the visitor prefers reduced motion.
const STATIC_FRAME_SECONDS = 8;

function useShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // WebGL2 can be missing, e.g. on Windows machines with blocklisted GPU
    // drivers, hardware acceleration off, or over Remote Desktop. The hero
    // then keeps its static background rather than taking the page down.
    const gl = canvas.getContext("webgl2");
    if (!gl) return;
    const renderer = new WebGLRenderer(canvas, gl);
    if (!renderer.setup(SHADER_SOURCE)) {
      renderer.dispose();
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let quality = 0;
    let frame: number | null = null;
    let visible = true;
    let lost = false;
    let sampleStart = 0;
    let sampleCount = 0;

    const resize = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const scale =
        Math.min(1, Math.sqrt(MAX_PIXELS / Math.max(1, width * height))) * QUALITY_STEPS[quality];
      renderer.resize(Math.max(1, Math.round(width * scale)), Math.max(1, Math.round(height * scale)));
    };

    const draw = (now: number) => {
      renderer.render(now / 1000);

      // Weak GPUs (common on Windows laptops) get a lower internal
      // resolution instead of a choppy animation that also slows scrolling.
      if (quality < QUALITY_STEPS.length - 1) {
        if (sampleCount === 0) sampleStart = now;
        sampleCount += 1;
        if (sampleCount === SAMPLE_FRAMES) {
          if ((now - sampleStart) / (SAMPLE_FRAMES - 1) > SLOW_FRAME_MS) {
            quality += 1;
            resize();
          }
          sampleCount = 0;
        }
      }

      frame = requestAnimationFrame(draw);
    };

    const start = () => {
      if (frame !== null || lost || !visible || reducedMotion) return;
      sampleCount = -WARMUP_FRAMES;
      frame = requestAnimationFrame(draw);
    };
    const stop = () => {
      if (frame !== null) cancelAnimationFrame(frame);
      frame = null;
    };

    const renderStill = () => {
      if (reducedMotion && !lost) renderer.render(STATIC_FRAME_SECONDS);
    };

    resize();
    renderStill();
    start();

    // Stop rendering while the hero is scrolled out of view.
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });
    observer.observe(canvas);

    const onResize = () => {
      resize();
      renderStill();
    };
    const onContextLost = () => {
      lost = true;
      stop();
    };
    window.addEventListener("resize", onResize);
    canvas.addEventListener("webglcontextlost", onContextLost);

    return () => {
      stop();
      observer.disconnect();
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("webglcontextlost", onContextLost);
      if (!lost) renderer.dispose();
    };
  }, []);

  return canvasRef;
}

// ── Hero Component ──────────────────────────────────────
export default function AnimatedShaderHero({
  trustBadge,
  headline,
  subtitle,
  buttons,
  className = "",
}: HeroProps) {
  const canvasRef = useShaderBackground();

  return (
    <div className={`relative w-full h-screen overflow-hidden bg-[var(--soluven-ink)] ${className}`}>
      {/* Inline keyframes for entry animations */}
      <style jsx>{`
        @keyframes hero-fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero-fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .anim-down  { animation: hero-fade-in-down 0.8s ease-out forwards; }
        .anim-up    { animation: hero-fade-in-up 0.8s ease-out forwards; opacity: 0; }
        .d200 { animation-delay: .2s; }
        .d400 { animation-delay: .4s; }
        .d600 { animation-delay: .6s; }
        .d800 { animation-delay: .8s; }
      `}</style>

      {/* WebGL canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: "var(--soluven-ink)" }}
      />

      {/* Content overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white px-4 pt-16">
        {/* Trust Badge */}
        {trustBadge && (
          <div className="mb-8 anim-down">
            <div className="flex items-center gap-2 px-6 py-2 bg-[var(--soluven-ink)] border border-[var(--color-border)] rounded-md text-sm font-medium">
              {trustBadge.icons && (
                <div className="flex text-[var(--soluven-green)]">
                  {trustBadge.icons.map((icon, i) => (
                    <span key={i}>{icon}</span>
                  ))}
                </div>
              )}
              <span className="text-[var(--soluven-cream)]">{trustBadge.text}</span>
            </div>
          </div>
        )}

        <div className="text-center space-y-6 max-w-5xl mx-auto">
          {/* Headlines */}
          <div className="space-y-1 font-[family-name:var(--font-heading)] leading-[1.05] tracking-tight">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--soluven-cream)] anim-up d200">
              {headline.line1}
            </h1>
            {headline.line2 && (
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--soluven-blue)] anim-up d400">
                {headline.line2}
              </h1>
            )}
          </div>

          {/* Subtitle */}
          <div className="max-w-3xl mx-auto anim-up d600 mt-6">
            <p className="text-base md:text-lg lg:text-xl text-[var(--color-muted)] font-medium leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* CTA Buttons */}
          {buttons && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 anim-up d800">
              {buttons.primary && (
                buttons.primary.href ? (
                  <Link
                    href={buttons.primary.href}
                    className="inline-flex h-12 items-center justify-center rounded-md bg-[var(--soluven-blue)] px-8 font-semibold text-[var(--soluven-ink)] transition-colors hover:bg-[var(--color-blue-hover)]"
                  >
                    {buttons.primary.text}
                  </Link>
                ) : (
                  <button
                    onClick={buttons.primary.onClick}
                    className="inline-flex h-12 items-center justify-center rounded-md bg-[var(--soluven-blue)] px-8 font-semibold text-[var(--soluven-ink)] transition-colors hover:bg-[var(--color-blue-hover)]"
                  >
                    {buttons.primary.text}
                  </button>
                )
              )}
              {buttons.secondary && (
                buttons.secondary.href ? (
                  <Link
                    href={buttons.secondary.href}
                    target={buttons.secondary.href.startsWith("http") ? "_blank" : undefined}
                    rel={buttons.secondary.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex h-12 items-center justify-center rounded-md border border-[var(--soluven-cream)] bg-transparent px-8 font-semibold text-[var(--soluven-cream)] transition-colors hover:bg-[var(--soluven-cream)]/10"
                  >
                    {buttons.secondary.text}
                  </Link>
                ) : (
                  <button
                    onClick={buttons.secondary.onClick}
                    className="inline-flex h-12 items-center justify-center rounded-md border border-[var(--soluven-cream)] bg-transparent px-8 font-semibold text-[var(--soluven-cream)] transition-colors hover:bg-[var(--soluven-cream)]/10"
                  >
                    {buttons.secondary.text}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Fragment shader — cosmic cloud adapted to Soluven blue/green palette ──
const SHADER_SOURCE = `#version 300 es
precision highp float;
out vec4 O;
uniform vec2 resolution;
uniform float time;
#define FC gl_FragCoord.xy
#define T time
#define R resolution
#define MN min(R.x,R.y)
float rnd(vec2 p) {
  p=fract(p*vec2(12.9898,78.233));
  p+=dot(p,p+34.56);
  return fract(p.x*p.y);
}
float noise(in vec2 p) {
  vec2 i=floor(p), f=fract(p), u=f*f*(3.-2.*f);
  float a=rnd(i), b=rnd(i+vec2(1,0)), c=rnd(i+vec2(0,1)), d=rnd(i+1.);
  return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);
}
float fbm(vec2 p) {
  float t=.0, a=1.; mat2 m=mat2(1.,-.5,.2,1.2);
  for (int i=0; i<5; i++) {
    t+=a*noise(p);
    p*=2.*m;
    a*=.5;
  }
  return t;
}
float clouds(vec2 p) {
  float d=1., t=.0;
  for (float i=.0; i<3.; i++) {
    float a=d*fbm(i*10.+p.x*.2+.2*(1.+i)*p.y+d+i*i+p);
    t=mix(t,d,a);
    d=a;
    p*=2./(i+1.);
  }
  return t;
}
void main(void) {
  vec2 uv=(FC-.5*R)/MN, st=uv*vec2(2,1);
  vec3 col=vec3(0);
  float bg=clouds(vec2(st.x+T*.5,-st.y));
  uv*=1.-.3*(sin(T*.2)*.5+.5);
  for (float i=1.; i<12.; i++) {
    uv+=.1*cos(i*vec2(.1+.01*i,.8)+i*i+T*.5+.1*uv.x);
    vec2 p=uv;
    float d=length(p);
    col+=.00125/max(d,1e-3)*(cos(sin(i)*vec3(0.5,2.0,1.5))+1.);
    float b=noise(i+p+bg*1.731);
    col+=.002*b/max(length(max(p,vec2(b*p.x*.02,p.y))),1e-3);
    col=mix(col,vec3(bg*.05,bg*.15,bg*.2),d);
  }
  O=vec4(col,1);
}`;