import type { CSSProperties } from "react";
import Link from "next/link";
import { HeroAlignment } from "@/components/ui/hero-alignment";
import { HeroContours } from "@/components/ui/hero-contours";
import { HeroRibbons } from "@/components/ui/hero-ribbons";
import { HeroWeave } from "@/components/ui/hero-weave";

type HeroLink = { label: string; href: string };

export type PageHeroItem = {
  title: string;
  label: string;
  href?: string;
};

type PageHeroProps = {
  /** Dark for service pages, light for company pages (Work, About, Why Soluven). */
  theme: "dark" | "light";
  /** "sweep" + fade for service pages; "fan" + line-by-line headline rise for company pages. */
  motion?: "sweep" | "fan";
  /** Animated backdrop: ribbons (services), contours (Work), alignment (Why Soluven), weave (About). */
  background?: "ribbons" | "contours" | "alignment" | "weave";
  backLink?: HeroLink;
  eyebrow: string;
  /** Three display lines; the last one is set in the accent color. */
  headline: [string, string, string];
  description: string;
  primaryCta: HeroLink;
  secondaryCta: HeroLink;
  items: PageHeroItem[];
};

const themes = {
  dark: {
    section: "section-dark",
    ribbons: "service-hero-ribbons",
    accent: "text-[var(--soluven-blue)]",
    linkHover: "hover:text-[var(--soluven-blue)]",
    primaryHover: "hover:bg-[var(--soluven-cream)]",
    focus: "focus-visible:outline-[var(--soluven-blue)]",
  },
  light: {
    section: "border-b border-[var(--color-border)]",
    ribbons: "service-hero-ribbons page-hero-ribbons--light",
    accent: "text-[var(--color-blue-deep)]",
    linkHover: "hover:text-[var(--color-blue-deep)]",
    primaryHover: "hover:bg-[var(--color-blue-hover)]",
    focus: "focus-visible:outline-[var(--soluven-ink)]",
  },
};

export function PageHero({
  theme,
  motion = "sweep",
  background = "ribbons",
  backLink,
  eyebrow,
  headline,
  description,
  primaryCta,
  secondaryCta,
  items,
}: PageHeroProps) {
  const [line1, line2, line3] = headline;
  const t = themes[theme];

  return (
    <section
      className={`${t.section} ${
        motion === "fan" && theme === "dark" ? "border-b border-[var(--color-border)]" : ""
      } relative isolate flex min-h-[calc(100svh-78px)] flex-col overflow-hidden bg-[var(--color-background)] text-[var(--color-text)]`}
    >
      {background === "contours" ? (
        <HeroContours className={t.ribbons} />
      ) : background === "alignment" ? (
        <HeroAlignment className={t.ribbons} />
      ) : background === "weave" ? (
        <HeroWeave className={t.ribbons} />
      ) : (
        <HeroRibbons className={t.ribbons} shape={motion} tone={theme} />
      )}

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-1 flex-col px-6 pb-10 pt-8 md:px-[85px] md:pb-12 md:pt-10">
        {backLink && (
          <Link
            href={backLink.href}
            className={`w-fit text-sm font-semibold text-[var(--color-text-muted)] underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current ${t.linkHover}`}
          >
            ← {backLink.label}
          </Link>
        )}

        <div className="my-auto max-w-[1000px] animate-hero-enter py-12 md:py-16">
          <p className="inline-flex items-center gap-2.5 rounded-md border border-[var(--color-border)] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
            <span aria-hidden="true" className="h-1.5 w-1.5 bg-[var(--soluven-blue)]" />
            {eyebrow}
          </p>

          <h1 className="mt-7 font-[family-name:var(--font-heading)] text-[clamp(1.85rem,3.7vw,3.75rem)] font-extrabold uppercase leading-[1.02] tracking-[-0.02em]">
            {[line1, line2, line3].map((line, index) => {
              const color = index === 2 ? t.accent : "";
              // Fan heroes reveal each line from below; sweep heroes use the block fade.
              return motion === "fan" ? (
                <span key={index} className="block overflow-hidden pb-[0.06em]">
                  <span
                    className={`hero-line-rise text-balance ${color}`}
                    style={{ "--line-delay": `${index * 120}ms` } as CSSProperties}
                  >
                    {line}
                  </span>
                </span>
              ) : (
                <span key={index} className={`block text-balance ${color}`}>
                  {line}
                </span>
              );
            })}
          </h1>

          <p className="mt-6 max-w-[520px] text-base leading-[1.6] text-[var(--color-text-muted)] md:text-lg">
            {description}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href={primaryCta.href}
              className={`inline-flex min-h-12 items-center justify-center rounded-md bg-[var(--soluven-blue)] px-6 text-sm font-bold text-[var(--soluven-ink)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${t.primaryHover} ${t.focus}`}
            >
              {primaryCta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className={`inline-flex min-h-12 items-center justify-center rounded-md border border-[var(--color-border)] px-6 text-sm font-bold text-[var(--color-text)] transition-colors hover:border-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${t.focus}`}
            >
              {secondaryCta.label}
            </Link>
          </div>
        </div>

        <ul className="grid max-w-[1000px] grid-cols-2 gap-x-6 gap-y-7 lg:grid-cols-4 lg:gap-9">
          {items.map(({ title, label, href }, index) => {
            const content = (
              <>
                <p className="font-[family-name:var(--font-heading)] text-base font-bold md:text-lg">
                  {title}
                </p>
                <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-muted)] md:text-xs">
                  {label}
                </p>
              </>
            );
            return (
              <li
                key={title}
                className="service-hero-fact relative border-t border-[var(--color-border)] pt-4"
                style={{ "--fact-delay": `${300 + index * 120}ms` } as CSSProperties}
              >
                {href ? (
                  <Link
                    href={href}
                    className={`block transition-colors ${t.linkHover} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${t.focus}`}
                  >
                    {content}
                  </Link>
                ) : (
                  content
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
