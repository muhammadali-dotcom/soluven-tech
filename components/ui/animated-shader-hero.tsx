"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";

// Types for component props — adapted for Next.js (href instead of onClick, ReactNode headlines)
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
class WebGLRenderer {
  private canvas: HTMLCanvasElement;
  private gl: WebGL2RenderingContext;
  private program: WebGLProgram | null = null;
  private vs: WebGLShader | null = null;
  private fs: WebGLShader | null = null;
  private buffer: WebGLBuffer | null = null;
  private uniforms: Record<string, WebGLUniformLocation | null> = {};
  private scale: number;
  private shaderSource: string;
  private mouseMove = [0, 0];
  private mouseCoords = [0, 0];
  private pointerCoords = [0, 0];
  private nbrOfPointers = 0;

  private vertexSrc = `#version 300 es
precision highp float;
in vec4 position;
void main(){gl_Position=position;}`;

  private vertices = [-1, 1, -1, -1, 1, 1, 1, -1];

  constructor(canvas: HTMLCanvasElement, scale: number) {
    this.canvas = canvas;
    this.scale = scale;
    this.gl = canvas.getContext("webgl2")!;
    this.gl.viewport(0, 0, canvas.width * scale, canvas.height * scale);
    this.shaderSource = SHADER_SOURCE;
  }

  updateShader(source: string) {
    this.reset();
    this.shaderSource = source;
    this.setup();
    this.init();
  }

  updateMove(d: number[]) { this.mouseMove = d; }
  updateMouse(c: number[]) { this.mouseCoords = c; }
  updatePointerCoords(c: number[]) { this.pointerCoords = c; }
  updatePointerCount(n: number) { this.nbrOfPointers = n; }

  updateScale(scale: number) {
    this.scale = scale;
    this.gl.viewport(0, 0, this.canvas.width * scale, this.canvas.height * scale);
  }

  compile(shader: WebGLShader, source: string) {
    const gl = this.gl;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error("Shader compile error:", gl.getShaderInfoLog(shader));
    }
  }

  test(source: string) {
    const gl = this.gl;
    const s = gl.createShader(gl.FRAGMENT_SHADER)!;
    gl.shaderSource(s, source);
    gl.compileShader(s);
    const ok = gl.getShaderParameter(s, gl.COMPILE_STATUS);
    const log = ok ? null : gl.getShaderInfoLog(s);
    gl.deleteShader(s);
    return log;
  }

  reset() {
    const gl = this.gl;
    if (this.program && !gl.getProgramParameter(this.program, gl.DELETE_STATUS)) {
      if (this.vs) { gl.detachShader(this.program, this.vs); gl.deleteShader(this.vs); }
      if (this.fs) { gl.detachShader(this.program, this.fs); gl.deleteShader(this.fs); }
      gl.deleteProgram(this.program);
    }
  }

  setup() {
    const gl = this.gl;
    this.vs = gl.createShader(gl.VERTEX_SHADER)!;
    this.fs = gl.createShader(gl.FRAGMENT_SHADER)!;
    this.compile(this.vs, this.vertexSrc);
    this.compile(this.fs, this.shaderSource);
    this.program = gl.createProgram()!;
    gl.attachShader(this.program, this.vs);
    gl.attachShader(this.program, this.fs);
    gl.linkProgram(this.program);
    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(this.program));
    }
  }

  init() {
    const gl = this.gl;
    const p = this.program!;
    this.buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
    const pos = gl.getAttribLocation(p, "position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);
    this.uniforms = {
      resolution: gl.getUniformLocation(p, "resolution"),
      time: gl.getUniformLocation(p, "time"),
      move: gl.getUniformLocation(p, "move"),
      touch: gl.getUniformLocation(p, "touch"),
      pointerCount: gl.getUniformLocation(p, "pointerCount"),
      pointers: gl.getUniformLocation(p, "pointers"),
    };
  }

  render(now = 0) {
    const gl = this.gl;
    const p = this.program;
    if (!p || gl.getProgramParameter(p, gl.DELETE_STATUS)) return;
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(p);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
    gl.uniform2f(this.uniforms.resolution, this.canvas.width, this.canvas.height);
    gl.uniform1f(this.uniforms.time, now * 1e-3);
    gl.uniform2f(this.uniforms.move, this.mouseMove[0], this.mouseMove[1]);
    gl.uniform2f(this.uniforms.touch, this.mouseCoords[0], this.mouseCoords[1]);
    gl.uniform1i(this.uniforms.pointerCount, this.nbrOfPointers);
    gl.uniform2fv(this.uniforms.pointers, this.pointerCoords);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }
}

// ── Pointer Handler ─────────────────────────────────────
class PointerHandler {
  private scale: number;
  private active = false;
  private pointers = new Map<number, number[]>();
  private lastCoords = [0, 0];
  private moves = [0, 0];

  constructor(el: HTMLCanvasElement, scale: number) {
    this.scale = scale;
    const map = (el: HTMLCanvasElement, s: number, x: number, y: number) =>
      [x * s, el.height - y * s];

    el.addEventListener("pointerdown", (e) => {
      this.active = true;
      this.pointers.set(e.pointerId, map(el, this.scale, e.clientX, e.clientY));
    });
    el.addEventListener("pointerup", (e) => {
      if (this.count === 1) this.lastCoords = this.first;
      this.pointers.delete(e.pointerId);
      this.active = this.pointers.size > 0;
    });
    el.addEventListener("pointerleave", (e) => {
      if (this.count === 1) this.lastCoords = this.first;
      this.pointers.delete(e.pointerId);
      this.active = this.pointers.size > 0;
    });
    el.addEventListener("pointermove", (e) => {
      if (!this.active) return;
      this.lastCoords = [e.clientX, e.clientY];
      this.pointers.set(e.pointerId, map(el, this.scale, e.clientX, e.clientY));
      this.moves = [this.moves[0] + e.movementX, this.moves[1] + e.movementY];
    });
  }

  updateScale(s: number) { this.scale = s; }
  get count() { return this.pointers.size; }
  get move() { return this.moves; }
  get coords() { return this.pointers.size > 0 ? Array.from(this.pointers.values()).flat() : [0, 0]; }
  get first() { return this.pointers.values().next().value || this.lastCoords; }
}

// ── Shader Background Hook ──────────────────────────────
function useShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number | null>(null);
  const rendererRef = useRef<WebGLRenderer | null>(null);
  const pointersRef = useRef<PointerHandler | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.max(1, 0.5 * window.devicePixelRatio);
    rendererRef.current = new WebGLRenderer(canvas, dpr);
    pointersRef.current = new PointerHandler(canvas, dpr);
    rendererRef.current.setup();
    rendererRef.current.init();

    const resize = () => {
      if (!canvasRef.current) return;
      canvasRef.current.width = window.innerWidth * dpr;
      canvasRef.current.height = window.innerHeight * dpr;
      rendererRef.current?.updateScale(dpr);
    };
    resize();

    if (rendererRef.current.test(SHADER_SOURCE) === null) {
      rendererRef.current.updateShader(SHADER_SOURCE);
    }

    const loop = (now: number) => {
      const r = rendererRef.current;
      const p = pointersRef.current;
      if (!r || !p) return;
      r.updateMouse(p.first);
      r.updatePointerCount(p.count);
      r.updatePointerCoords(p.coords);
      r.updateMove(p.move);
      r.render(now);
      animFrameRef.current = requestAnimationFrame(loop);
    };
    loop(0);

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      rendererRef.current?.reset();
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
        className="absolute inset-0 w-full h-full object-contain touch-none"
        style={{ background: "var(--soluven-ink)" }}
      />

      {/* Content overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white px-4 pt-16">
        {/* Trust Badge */}
        {trustBadge && (
          <div className="mb-8 anim-down">
            <div className="flex items-center gap-2 px-6 py-2 bg-[var(--soluven-ink)]/60 backdrop-blur-md border border-[var(--color-border)] rounded-full text-sm font-medium">
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
    col+=.00125/d*(cos(sin(i)*vec3(0.5,2.0,1.5))+1.);
    float b=noise(i+p+bg*1.731);
    col+=.002*b/length(max(p,vec2(b*p.x*.02,p.y)));
    col=mix(col,vec3(bg*.05,bg*.15,bg*.2),d);
  }
  O=vec4(col,1);
}`;