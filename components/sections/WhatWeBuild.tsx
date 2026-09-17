import { CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

export function WhatWeBuild({ items }: { items: string[] }) {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-20 md:px-[85px] md:py-28">
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

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <FadeIn key={item} delay={index * 0.05}>
            <div className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-4">
              <CheckCircle2
                aria-hidden="true"
                size={22}
                className="shrink-0 text-[var(--soluven-blue)]"
              />
              <span className="text-sm font-semibold">{item}</span>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
