import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { sectionToneClasses, type SectionTone } from "@/lib/section-tone";

export function WhySoluvenTeaser({ tone = "dark" }: { tone?: SectionTone }) {
  return (
    <section className={sectionToneClasses[tone]}>
      <div className="page-container py-14 md:py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Why Soluven
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
              Building something isn&apos;t enough.
            </h2>
          </FadeIn>
          <FadeIn delay={0.05}>
            <p className="text-base leading-relaxed text-[var(--color-muted)]">
              We focus on building the right thing — with clear communication,
              thoughtful decisions, and technology that serves a purpose. Not
              every studio thinks this way.
            </p>
            <Link
              href="/why-soluven"
              className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold underline decoration-current underline-offset-4 transition-colors hover:text-[var(--soluven-blue)]"
            >
              See what makes us different →
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
