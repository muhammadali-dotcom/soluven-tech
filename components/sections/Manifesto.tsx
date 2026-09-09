import { ProgressLine } from "@/components/motion/ProgressLine";
import { FadeIn } from "@/components/motion/FadeIn";
import { HeroLogoMark } from "@/components/sections/HeroLogoMark";

export function Manifesto() {
  return (
    <section className="relative overflow-hidden bg-[var(--soluven-blue)] py-24 md:py-32">
      <HeroLogoMark
        strokeA="var(--soluven-cream)"
        strokeB="var(--soluven-cream)"
        opacityClass="opacity-[0.15]"
      />
      <div className="relative mx-auto max-w-[1000px] px-6 md:px-16">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--soluven-ink)]/70">
            Chapter 01 · The idea
          </p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <p className="mt-8 font-[family-name:var(--font-heading)] text-3xl font-semibold leading-tight tracking-tight text-[var(--soluven-ink)] md:text-5xl">
            The best digital products do not begin with technology. They{" "}
            <span className="bg-[var(--soluven-cream)] px-2 text-[var(--soluven-ink)]">
              begin with a clear view of what should exist next.
            </span>
          </p>
        </FadeIn>
        <div className="mt-16">
          <ProgressLine />
          <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-[var(--soluven-ink)]/70">
            Scroll to build the picture
          </p>
        </div>
      </div>
    </section>
  );
}
