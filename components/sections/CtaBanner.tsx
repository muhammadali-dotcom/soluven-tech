import { LinkButton } from "@/components/ui/Button";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { FadeIn } from "@/components/motion/FadeIn";
import { contactEmail } from "@/lib/constants";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-[var(--soluven-ink)] py-24 text-center text-[var(--soluven-cream)] md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--soluven-green) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-2xl px-6 md:px-16">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Your next move
          </p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="mt-6 font-[family-name:var(--font-heading)] text-4xl font-semibold tracking-tight md:text-5xl">
            You see the future.{" "}
            <span style={{ color: "var(--soluven-blue)" }}>
              Let&apos;s build towards it.
            </span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mx-auto mt-4 max-w-lg text-white/70">
            Tell us what you are working on. We&apos;ll help you find the
            clearest way forward.
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="mt-10 flex justify-center">
            <MagneticButton>
              <LinkButton href={`mailto:${contactEmail}`} variant="primary">
                {contactEmail}
              </LinkButton>
            </MagneticButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
