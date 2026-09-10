import { Compass, PenTool, Code2, Users } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

const pillars = [
  { label: "Strategy", icon: Compass },
  { label: "Design", icon: PenTool },
  { label: "Engineering", icon: Code2 },
];

export function WhatWeBelieve() {
  return (
    <section className="relative mx-auto max-w-[1280px] overflow-hidden px-6 py-20 md:px-16 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 hidden h-[26rem] w-[26rem] -translate-y-1/2 translate-x-1/4 rounded-full border border-dashed border-[var(--color-border)] lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-24 top-1/4 hidden h-2 w-2 rounded-full bg-[var(--soluven-green)] lg:block"
      />

      <FadeIn>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Chapter 02 · What we believe
        </p>
      </FadeIn>
      <div className="relative mt-8 grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <FadeIn>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Your vision deserves{" "}
            <span className="bg-[var(--soluven-blue)]/25 px-1">more than</span>{" "}
            <span className="bg-[var(--soluven-green)]/25 px-1">a template.</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-lg leading-relaxed text-[var(--color-muted)]">
            Good digital work does more than look impressive. It makes your
            offer clearer, your business easier to run and your next stage
            of growth possible.
            <br />
            <br />
            That is why strategy, design and engineering work as one team
            at Soluven.
          </p>

          <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
            {pillars.map(({ label, icon: Icon }, index) => (
              <div key={label} className="flex items-center gap-4 sm:contents">
                <div className="flex flex-1 flex-col items-start gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
                  <span className="font-[family-name:var(--font-heading)] text-3xl font-bold leading-none text-[var(--color-ink)]/15">
                    0{index + 1}
                  </span>
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full border"
                    style={{
                      backgroundColor: "color-mix(in srgb, var(--soluven-blue) 22%, transparent)",
                      borderColor: "color-mix(in srgb, var(--soluven-blue) 45%, transparent)",
                    }}
                  >
                    <Icon aria-hidden="true" size={18} className="text-[var(--soluven-ink)]" />
                  </div>
                  <span className="text-sm font-semibold">{label}</span>
                </div>
                <div
                  aria-hidden="true"
                  className={`h-8 w-0.5 shrink-0 sm:h-0.5 sm:w-8 ${
                    index === 0 ? "bg-[var(--soluven-blue)]" : "bg-[var(--soluven-green)]"
                  }`}
                />
              </div>
            ))}

            <div className="flex flex-col items-center gap-2">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[var(--soluven-ink)]">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 rounded-full bg-[var(--soluven-green)] opacity-40 blur-xl"
                />
                <Users aria-hidden="true" size={22} className="text-[var(--soluven-cream)]" />
              </div>
              <span className="text-sm font-semibold">One team</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
