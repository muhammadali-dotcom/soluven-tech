import { Lightbulb, LayoutGrid, Hammer, Rocket, type LucideIcon } from "lucide-react";
import { processSteps } from "@/data/process";
import { FadeIn } from "@/components/motion/FadeIn";

const stepIcons: Record<string, LucideIcon> = {
  "01": Lightbulb,
  "02": LayoutGrid,
  "03": Hammer,
  "04": Rocket,
};

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-[1280px] px-6 py-20 md:px-16 md:py-28 scroll-mt-24">
      <FadeIn>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Chapter 05 · How we work
        </p>
      </FadeIn>
      <FadeIn delay={0.05}>
        <h2 className="mt-6 max-w-2xl font-[family-name:var(--font-heading)] text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          Clear from the first conversation.
        </h2>
      </FadeIn>

      <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 top-4 hidden h-px bg-[var(--color-border)] lg:block"
        />
        {processSteps.map((step, index) => {
          const Icon = stepIcons[step.number];
          return (
          <FadeIn key={step.number} delay={index * 0.1}>
            <div className="relative pt-4">
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-2 w-2 -translate-y-1/2 rounded-full bg-[var(--soluven-blue)] lg:top-4"
              />
              <div className="flex items-center gap-2">
                <p className="font-[family-name:var(--font-heading)] text-sm font-semibold text-[var(--soluven-blue)]">
                  {step.number}
                </p>
                {Icon && (
                  <Icon aria-hidden="true" size={16} className="text-[var(--soluven-blue)]" />
                )}
              </div>
              <h3 className="mt-2 font-[family-name:var(--font-heading)] text-xl font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                {step.description}
              </p>
            </div>
          </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
