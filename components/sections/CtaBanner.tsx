import { LinkButton } from "@/components/ui/Button";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { FadeIn } from "@/components/motion/FadeIn";
import { AnimatedGridBackground } from "@/components/ui/animated-grid-background";
import Text3DFlip from "@/components/ui/text-3d-flip";

export function CtaBanner() {
  return (
    <section className="section-dark border-y border-[var(--color-border)]">
      <AnimatedGridBackground className="py-24 md:py-32">
        <div className="relative mx-auto max-w-2xl px-6 text-center md:px-[85px]">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
              Build with us
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="mt-6 font-[family-name:var(--font-heading)] text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Have an idea that&apos;s still just{" "}
              <Text3DFlip
                as="span"
                className="inline-flex"
                textClassName="text-[var(--soluven-blue)]"
                flipTextClassName="text-[var(--soluven-blue)]"
              >
                an idea?
              </Text3DFlip>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mx-auto mt-4 max-w-lg text-white/60">
              Let&apos;s turn it into something people can use.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <MagneticButton>
                <LinkButton href="/contact" variant="primary">
                  Start a Project →
                </LinkButton>
              </MagneticButton>
              <MagneticButton>
                <LinkButton href="/portfolio" variant="secondary">
                  See our work
                </LinkButton>
              </MagneticButton>
            </div>
          </FadeIn>
        </div>
      </AnimatedGridBackground>
    </section>
  );
}
