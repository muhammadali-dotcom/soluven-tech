"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { Logo } from "@/components/ui/Logo";
import { FadeIn } from "@/components/motion/FadeIn";

export function ServicesShowcase() {
  const [active, setActive] = useState(0);
  const service = services[active];
  const accent = active % 2 === 1 ? "--soluven-blue" : "--soluven-green";

  return (
    <section id="services" className="mx-auto max-w-[1280px] px-6 py-20 md:px-[85px] md:py-28 scroll-mt-24">
      <FadeIn>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
          What we build
        </p>
      </FadeIn>
      <FadeIn delay={0.05}>
        <h2 className="mt-6 max-w-2xl font-[family-name:var(--font-heading)] text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
          Eight capabilities. One clear outcome.
        </h2>
      </FadeIn>

      <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-start">
        {/* Left: service list */}
        <div className="grid gap-x-6 sm:grid-cols-2">
          {services.map((item, index) => (
            <button
              key={item.slug}
              type="button"
              onClick={() => setActive(index)}
              aria-current={index === active}
              className={`flex flex-col gap-2 border-b border-[var(--color-border)] p-4 text-left transition-colors first:border-t sm:first:border-t sm:[&:nth-child(2)]:border-t ${
                index === active
                  ? "border-l-4 border-l-[var(--soluven-blue)] bg-[var(--soluven-blue)]/10"
                  : "border-l-4 border-l-transparent hover:bg-[var(--color-surface)]"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-baseline gap-3">
                  <span
                    className={`font-[family-name:var(--font-heading)] text-xl font-bold ${
                      index === active ? "text-[var(--soluven-blue)]" : "text-[var(--color-muted)]"
                    }`}
                  >
                    0{index + 1}
                  </span>
                  <span className="font-[family-name:var(--font-heading)] text-base font-semibold leading-snug">
                    {item.heading}
                  </span>
                </div>
                <ArrowRight
                  aria-hidden="true"
                  size={18}
                  className="mt-1 shrink-0 text-[var(--color-muted)]"
                />
              </div>
              <p className="pl-9 text-sm text-[var(--color-muted)]">{item.summary}</p>
            </button>
          ))}
        </div>

        {/* Right: preview panel */}
        <div className="section-dark rounded-2xl bg-[var(--color-background)] p-6 text-[var(--color-ink)] md:p-8">
          <div className="flex items-center justify-between">
            <span className="font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-widest">
              <span style={{ color: `var(${accent})` }}>0{active + 1}</span> / {service.name}
            </span>
            <div className="flex items-center gap-1.5">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full"
                style={{ background: `var(${accent})` }}
              />
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[var(--color-border)]" />
            </div>
          </div>

          <div className="relative mt-6 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--soluven-cream)] pb-16 pt-4">
            <div className="flex items-center gap-1.5 px-4">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[var(--soluven-blue)]/60" />
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[var(--soluven-green)]/60" />
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[var(--soluven-ink)]/20" />
              <div className="ml-4 flex flex-1 items-center gap-2">
                <span aria-hidden="true" className="h-px w-8 bg-[var(--soluven-ink)]/20" />
                <span aria-hidden="true" className="h-px w-8 bg-[var(--soluven-ink)]/20" />
                <span aria-hidden="true" className="h-px w-8 bg-[var(--soluven-ink)]/20" />
              </div>
              <span
                aria-hidden="true"
                className="h-3 w-10 rounded-full"
                style={{ background: `var(${accent})` }}
              />
            </div>

            <div className="relative mt-6 px-6">
              <Logo size={16} />
              <p className="mt-4 max-w-[70%] font-[family-name:var(--font-heading)] text-base font-semibold leading-snug text-[var(--soluven-ink)] sm:text-lg">
                {service.heading.replace(/\.$/, "").split(" ").slice(0, -2).join(" ")}{" "}
                <span style={{ color: `var(${accent})` }}>
                  {service.heading.replace(/\.$/, "").split(" ").slice(-2).join(" ")}
                </span>
              </p>
              <span
                aria-hidden="true"
                className="mt-4 inline-block h-6 w-20 rounded-full"
                style={{ background: `var(${accent})` }}
              />
              <div
                aria-hidden="true"
                className="absolute -right-6 top-0 h-24 w-24 rounded-full opacity-70 blur-2xl"
                style={{ background: `radial-gradient(circle, var(${accent}) 0%, transparent 70%)` }}
              />
            </div>

            {/* Overlapping phone mockup */}
            <div
              aria-hidden="true"
              className="absolute -bottom-6 right-4 hidden h-32 w-16 rounded-lg border border-[var(--color-border)] bg-[var(--soluven-cream)] shadow-lg sm:block"
            >
              <div className="flex items-center justify-center pt-1.5">
                <Logo size={9} withWordmark={false} />
              </div>
              <p className="mt-2 px-1.5 font-[family-name:var(--font-heading)] text-[8px] font-semibold leading-tight text-[var(--soluven-ink)]">
                {service.name}
              </p>
              <span
                aria-hidden="true"
                className="mt-1.5 block h-1.5 w-8 rounded-full"
                style={{ background: `var(${accent})`, marginLeft: "6px" }}
              />
            </div>
          </div>

          <p className="mt-6 text-sm text-[var(--color-text-muted)]">{service.summary}</p>
          <Link
            href={`/services/${service.slug}`}
            className="mt-3 inline-flex w-fit items-center gap-1.5 text-sm font-semibold underline decoration-current underline-offset-4"
          >
            {service.ctaLabel}
            <ArrowRight aria-hidden="true" size={14} />
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-[var(--color-border)] pt-6">
            {services.map((item, index) => (
              <button
                key={item.slug}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show ${item.name}`}
                aria-current={index === active}
                className="flex flex-col items-center gap-1 text-xs font-semibold"
              >
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full border text-[10px] transition-colors ${
                    index === active
                      ? "border-[var(--soluven-blue)] bg-[var(--soluven-blue)] text-[var(--soluven-ink)]"
                      : "border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--soluven-blue)]"
                  }`}
                >
                  0{index + 1}
                </span>
                <span
                  className={`h-0.5 w-4 rounded-full ${
                    index === active ? "bg-[var(--soluven-blue)]" : "bg-transparent"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
