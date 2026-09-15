import { FadeIn } from "@/components/motion/FadeIn";

const values = [
  { title: "Curiosity", description: "Always learning." },
  { title: "Quality", description: "Build it properly." },
  { title: "Transparency", description: "No unnecessary complexity." },
  { title: "Impact", description: "Technology should solve a problem." },
];

export function MissionVisionValues() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-20 md:px-[85px] md:py-28">
      <div className="grid gap-8 sm:grid-cols-2">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
            Our Mission
          </p>
          <p className="mt-4 font-[family-name:var(--font-heading)] text-xl font-semibold leading-snug md:text-2xl">
            To make high-quality technology accessible to businesses of every
            size.
          </p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
            Our Vision
          </p>
          <p className="mt-4 font-[family-name:var(--font-heading)] text-xl font-semibold leading-snug md:text-2xl">
            To become a trusted technology partner for ambitious businesses.
          </p>
        </FadeIn>
      </div>

      <FadeIn delay={0.1}>
        <p className="mt-16 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Our Values
        </p>
      </FadeIn>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value, index) => (
          <FadeIn key={value.title} delay={0.1 + index * 0.05}>
            <div className="h-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold">
                {value.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-muted)]">{value.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
