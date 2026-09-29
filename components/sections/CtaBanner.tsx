import { LinkButton } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import Text3DFlip from "@/components/ui/text-3d-flip";

export function CtaBanner() {
  return (
    <section className="section-dark border-y border-[var(--color-border)]">
      <div className="bg-[var(--color-background)] py-24 md:py-32">
        <div className="relative mx-auto max-w-2xl px-6 text-center md:px-[85px]">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Build with us
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="mt-6 font-[family-name:var(--font-heading)] text-2xl font-semibold tracking-tight text-[var(--color-text)] md:text-3xl">
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
            <p className="mx-auto mt-4 max-w-lg text-[var(--color-text-muted)]">
              Let&apos;s turn it into something people can use.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <LinkButton href="/contact" variant="primary">
                Start a Project →
              </LinkButton>
              <LinkButton href="/portfolio" variant="secondary">
                See our work
              </LinkButton>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
