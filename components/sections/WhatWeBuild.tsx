import { FadeIn } from "@/components/motion/FadeIn";
import type { ServiceBuild } from "@/data/services";

export function WhatWeBuild({ items }: { items: ServiceBuild[] }) {
  return (
    <section className="page-container py-20 md:py-28">
      <FadeIn>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
          What we build
        </p>
      </FadeIn>
      <FadeIn delay={0.05}>
        <h2 className="mt-6 max-w-2xl font-[family-name:var(--font-heading)] text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
          Sound familiar? Here&rsquo;s what we build for it.
        </h2>
      </FadeIn>

      <ol className="mt-12 border-b border-[var(--color-border)]">
        {items.map(({ problem, name, how }, index) => (
          <li key={name} className="border-t border-[var(--color-border)]">
            <FadeIn
              delay={index * 0.05}
              className="grid grid-cols-[2.25rem_1fr] gap-x-3 py-7 md:grid-cols-[3rem_minmax(0,3fr)_minmax(0,2fr)] md:gap-x-8 md:py-9"
            >
              <span
                aria-hidden="true"
                className="pt-1 font-[family-name:var(--font-heading)] text-sm font-bold tabular-nums text-[var(--soluven-blue)]"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="font-[family-name:var(--font-heading)] text-xl font-semibold leading-snug tracking-tight text-balance md:text-2xl">
                &ldquo;{problem.replaceAll("'", "\u2019")}&rdquo;
              </p>
              <div className="col-start-2 mt-4 md:col-start-3 md:mt-1">
                <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-text)]">
                  {name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)] md:text-base">
                  {how}
                </p>
              </div>
            </FadeIn>
          </li>
        ))}
      </ol>
    </section>
  );
}
