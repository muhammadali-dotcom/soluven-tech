import { FadeIn } from "@/components/motion/FadeIn";

const pillars = ["Strategy", "Design", "Engineering"];

export function WhatWeBelieve() {
  return (
    <section className="page-container py-20 md:py-28">
      <FadeIn>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
          What we believe
        </p>
      </FadeIn>
      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <FadeIn>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
            Your vision deserves{" "}
            <span className="bg-[var(--soluven-blue)]/25 px-1">more than a template.</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-base leading-relaxed text-[var(--color-muted)]">
            Good digital work does more than look impressive. It makes your
            offer clearer, your business easier to run and your next stage
            of growth possible.
            <br />
            <br />
            That is why strategy, design and engineering work as one team
            at Soluven.
          </p>

          <ol className="mt-10 border-b border-[var(--color-border)]">
            {pillars.map((label, index) => (
              <li
                key={label}
                className="flex items-baseline gap-6 border-t border-[var(--color-border)] py-4"
              >
                <span className="w-8 font-[family-name:var(--font-heading)] text-sm font-bold text-[var(--color-muted)]">
                  0{index + 1}
                </span>
                <span className="font-[family-name:var(--font-heading)] text-lg font-semibold">
                  {label}
                </span>
              </li>
            ))}
            <li className="flex items-baseline gap-6 border-t border-[var(--color-border)] py-4">
              <span
                aria-hidden="true"
                className="w-8 font-[family-name:var(--font-heading)] text-sm font-bold text-[var(--color-blue-deep)]"
              >
                =
              </span>
              <span className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--color-blue-deep)]">
                One team
              </span>
            </li>
          </ol>
        </FadeIn>
      </div>
    </section>
  );
}
