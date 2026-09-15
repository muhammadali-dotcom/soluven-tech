import { FadeIn } from "@/components/motion/FadeIn";

const stages = [
  {
    title: "Startups",
    description: "Turn your idea into a working product.",
  },
  {
    title: "Small Businesses",
    description: "Build a professional digital presence.",
  },
  {
    title: "Growing Companies",
    description: "Automate processes and scale your systems.",
  },
  {
    title: "Established Businesses",
    description: "Modernize existing software and digital operations.",
  },
];

const industries = [
  "Healthcare",
  "Real Estate",
  "E-commerce",
  "Education",
  "Logistics",
  "Finance",
  "Professional Services",
];

export function WhoWeWorkWith() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-20 md:px-[85px] md:py-28">
      <FadeIn>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Who we work with
        </p>
      </FadeIn>
      <FadeIn delay={0.05}>
        <h2 className="mt-6 max-w-2xl font-[family-name:var(--font-heading)] text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
          Built for businesses at every stage.
        </h2>
      </FadeIn>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stages.map((stage, index) => (
          <FadeIn key={stage.title} delay={index * 0.05}>
            <div className="h-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold">
                {stage.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-muted)]">{stage.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.2}>
        <p className="mt-16 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Industries we serve
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {industries.map((industry) => (
            <span
              key={industry}
              className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm font-semibold"
            >
              {industry}
            </span>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
