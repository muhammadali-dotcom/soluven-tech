import { processSteps } from "@/data/process";
import { Reveal } from "@/components/ui/Reveal";

export function Process() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-16 md:px-16 md:py-24">
      <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold md:text-4xl">
        How we work
      </h2>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step) => (
          <Reveal key={step.number}>
            <div className="border-t border-[var(--color-border)] pt-4">
              <p className="font-[family-name:var(--font-heading)] text-sm font-semibold text-[var(--color-blue)]">
                {step.number}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-heading)] text-xl font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                {step.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
