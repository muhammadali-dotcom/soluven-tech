import { FadeIn } from "@/components/motion/FadeIn";
import { ProgressLine } from "@/components/motion/ProgressLine";

const values = [
  { title: "Curiosity", description: "Always learning." },
  { title: "Quality", description: "Build it properly." },
  { title: "Transparency", description: "No unnecessary complexity." },
  { title: "Impact", description: "Technology should solve a problem." },
];

export function MissionVisionValues() {
  return (
    <section className="border-t border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-ink)]">
      <div className="page-container py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
              <span className="text-[var(--color-blue-deep)]">Today</span> / Our mission
            </p>
            <p className="mt-5 font-[family-name:var(--font-heading)] text-2xl font-semibold leading-tight tracking-tight text-[var(--color-ink)] md:text-4xl">
              To make high-quality technology accessible to businesses of{" "}
              <span className="text-[var(--color-blue-deep)]">every size.</span>
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
              <span className="text-[var(--color-blue-deep)]">Tomorrow</span> / Our vision
            </p>
            <p className="mt-5 font-[family-name:var(--font-heading)] text-2xl font-semibold leading-tight tracking-tight text-[var(--color-ink)] md:text-4xl">
              To become a trusted technology partner for{" "}
              <span className="underline decoration-[var(--soluven-green)] decoration-[3px] underline-offset-[6px]">ambitious businesses.</span>
            </p>
          </FadeIn>
        </div>

        <div className="mt-12 md:mt-16">
          <div aria-hidden="true" className="flex items-center">
            <span className="h-2.5 w-2.5 shrink-0 bg-[var(--color-blue-deep)]" />
            <div className="flex-1">
              <ProgressLine
                trackClassName="bg-[var(--soluven-ink)]/15"
                fillClassName="bg-[var(--color-blue-deep)]"
              />
            </div>
            <span className="h-2.5 w-2.5 shrink-0 border border-[var(--color-blue-deep)]" />
          </div>
          <div className="mt-3 flex justify-between text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
            <span>Now</span>
            <span>Next</span>
          </div>
        </div>

        <FadeIn delay={0.1}>
          <p className="mt-16 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
            Our Values
          </p>
        </FadeIn>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {values.map((value, index) => (
            <FadeIn key={value.title} delay={0.1 + index * 0.05}>
              <div className="h-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--color-ink)]">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-muted)]">
                  {value.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
