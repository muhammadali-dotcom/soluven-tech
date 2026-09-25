import type { CSSProperties } from "react";
import Link from "next/link";
import type { ServiceHeroContent } from "@/data/services";
import { HeroRibbons } from "@/components/ui/hero-ribbons";

type ServiceHeroProps = ServiceHeroContent & {
  ctaLabel: string;
};

export function ServiceHero({ eyebrow, headline, description, facts, ctaLabel }: ServiceHeroProps) {
  const [line1, line2, line3] = headline;

  return (
    <section className="section-dark relative isolate flex min-h-[calc(100svh-78px)] flex-col overflow-hidden bg-[var(--color-background)] text-[var(--color-text)]">
      <HeroRibbons className="service-hero-ribbons" />

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-1 flex-col px-6 pb-10 pt-8 md:px-[85px] md:pb-12 md:pt-10">
        <Link
          href="/services"
          className="w-fit text-sm font-semibold text-[var(--color-text-muted)] underline decoration-transparent underline-offset-4 transition-colors hover:text-[var(--soluven-blue)] hover:decoration-current"
        >
          ← All services
        </Link>

        <div className="my-auto max-w-[1000px] animate-hero-enter py-12 md:py-16">
          <p className="inline-flex items-center gap-2.5 rounded-md border border-[var(--color-border)] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
            <span aria-hidden="true" className="h-1.5 w-1.5 bg-[var(--soluven-blue)]" />
            {eyebrow}
          </p>

          <h1 className="mt-7 font-[family-name:var(--font-heading)] text-[clamp(1.85rem,3.7vw,3.75rem)] font-extrabold uppercase leading-[1.02] tracking-[-0.02em]">
            <span className="block text-balance">{line1}</span>
            <span className="block text-balance">{line2}</span>
            <span className="block text-balance text-[var(--soluven-blue)]">{line3}</span>
          </h1>

          <p className="mt-6 max-w-[520px] text-base leading-[1.6] text-[var(--color-text-muted)] md:text-lg">
            {description}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-[var(--soluven-blue)] px-6 text-sm font-bold text-[var(--soluven-ink)] transition-colors hover:bg-[var(--soluven-cream)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--soluven-blue)]"
            >
              {ctaLabel}
            </Link>
            <Link
              href="/why-soluven"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-[var(--color-border)] px-6 text-sm font-bold text-[var(--color-text)] transition-colors hover:border-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--soluven-blue)]"
            >
              See how we work
            </Link>
          </div>
        </div>

        <ul className="grid max-w-[1000px] grid-cols-2 gap-x-6 gap-y-7 lg:grid-cols-4 lg:gap-9">
          {facts.map(({ title, label }, index) => (
            <li
              key={title}
              className="service-hero-fact relative border-t border-[var(--color-border)] pt-4"
              style={{ "--fact-delay": `${300 + index * 120}ms` } as CSSProperties}
            >
              <p className="font-[family-name:var(--font-heading)] text-base font-bold md:text-lg">
                {title}
              </p>
              <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-muted)] md:text-xs">
                {label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
