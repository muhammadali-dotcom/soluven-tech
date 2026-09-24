import { FadeIn } from "@/components/motion/FadeIn";

export function WhatWeBuild({ items }: { items: string[] }) {
  return (
    <section className="page-container py-20 md:py-28">
      <FadeIn>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
          What we build
        </p>
      </FadeIn>
      <FadeIn delay={0.05}>
        <h2 className="mt-6 max-w-2xl font-[family-name:var(--font-heading)] text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
          Built around what your business actually needs.
        </h2>
      </FadeIn>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {items.map((item, index) => (
          <FadeIn key={item} delay={index * 0.05}>
            <div className="flex items-baseline gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-4">
              <span
                aria-hidden="true"
                className="shrink-0 font-[family-name:var(--font-heading)] text-sm font-bold tabular-nums text-[var(--soluven-blue)]"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-semibold">{item}</span>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
