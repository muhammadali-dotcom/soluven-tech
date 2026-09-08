import { FadeIn } from "@/components/motion/FadeIn";

export function WhatWeBelieve() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-20 md:px-16 md:py-28">
      <FadeIn>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Chapter 02 · What we believe
        </p>
      </FadeIn>
      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <FadeIn>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Your vision deserves more than a template.
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
        </FadeIn>
      </div>
    </section>
  );
}
