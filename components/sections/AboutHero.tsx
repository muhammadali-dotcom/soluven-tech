"use client";

import { BeamsBackground } from "@/components/ui/beams-background";

export function AboutHero() {
  return (
    <section
      className="relative isolate flex min-h-[60svh] flex-col overflow-hidden"
      style={{ backgroundColor: "var(--soluven-ink)" }}
    >
      {/* Wrap in a div that clips the canvas blur so it doesn't spill outside */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <BeamsBackground intensity="subtle" />
      </div>

      {/* Ink overlay to knock the beams back and ensure text contrast */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{ backgroundColor: "rgba(22,36,42,0.55)" }}
      />

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-1 flex-col justify-center px-6 py-20 md:px-[85px] md:py-28">
        <p
          className="animate-hero-enter text-sm font-semibold uppercase tracking-[0.2em]"
          style={{
            animationDelay: "0ms",
            color: "color-mix(in srgb, var(--soluven-cream) 55%, transparent)",
          }}
        >
          About Soluven
        </p>

        <h1
          className="animate-hero-enter mt-6 max-w-2xl font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight tracking-tight md:text-5xl"
          style={{
            animationDelay: "80ms",
            color: "var(--soluven-cream)",
          }}
        >
          We build with purpose.
        </h1>

        <p
          className="animate-hero-enter mt-6 max-w-2xl text-base leading-relaxed"
          style={{
            animationDelay: "160ms",
            color: "color-mix(in srgb, var(--soluven-cream) 70%, transparent)",
          }}
        >
          Soluven is a technology studio built around a simple idea: good
          technology should solve real problems. We bring together thoughtful
          design, practical engineering, and a human approach to turn ideas
          into meaningful digital experiences.
        </p>
      </div>
    </section>
  );
}
