import { FadeIn } from "@/components/motion/FadeIn";
import { Projects } from "@/components/sections/Projects";
import { portfolioProjects } from "@/data/portfolio";

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-[1280px] px-6 py-20 md:px-16 md:py-28 scroll-mt-24">
      <FadeIn>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Chapter 04 · Selected directions
        </p>
      </FadeIn>
      <FadeIn delay={0.05}>
        <h2 className="mt-6 max-w-2xl font-[family-name:var(--font-heading)] text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          Ideas made tangible.
        </h2>
      </FadeIn>
      <FadeIn delay={0.08}>
        <p className="mt-4 max-w-xl text-[var(--color-muted)]">
          Concepts showing how Soluven can shape different kinds of
          digital businesses.
        </p>
      </FadeIn>
      <div className="mt-12">
        <Projects projects={portfolioProjects} />
      </div>
    </section>
  );
}
