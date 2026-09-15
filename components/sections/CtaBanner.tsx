import { LinkButton } from "@/components/ui/Button";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { FadeIn } from "@/components/motion/FadeIn";

export function CtaBanner() {
  return (
    <section className="section-dark relative overflow-hidden border-y border-[var(--color-border)] bg-[var(--color-background)] py-24 text-center text-[var(--color-ink)] md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--soluven-green) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-2xl px-6 md:px-[85px]">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
            Build with us
          </p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="mt-6 font-[family-name:var(--font-heading)] text-2xl font-semibold tracking-tight md:text-3xl">
            Have an idea that&apos;s still just{" "}
            <span style={{ color: "var(--soluven-blue)" }}>an idea?</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mx-auto mt-4 max-w-lg text-[var(--color-muted)]">
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
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
