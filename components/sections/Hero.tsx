import { LinkButton } from "@/components/ui/Button";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { TiltCard } from "@/components/motion/TiltCard";
import { FadeIn } from "@/components/motion/FadeIn";

const floatingLabels = [
  { label: "Websites", className: "left-[-2%] top-[10%]" },
  { label: "Ecommerce", className: "right-[-4%] top-[42%]" },
  { label: "Software", className: "left-[4%] bottom-[8%]" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto grid max-w-[1280px] gap-16 px-6 py-20 md:px-16 md:py-28 lg:grid-cols-2 lg:items-center">
        <div>
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--color-muted)]">
              Digital solutions studio
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="mt-6 max-w-xl font-[family-name:var(--font-heading)] text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Building solutions{" "}
              <span style={{ color: "var(--soluven-blue)" }}>
                for the future you see.
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-8 max-w-lg text-lg text-[var(--color-muted)]">
              We turn ambitious ideas into websites, ecommerce experiences
              and custom software built to move your business forward.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <MagneticButton>
                <LinkButton href="/contact" variant="primary">
                  Tell us your idea
                </LinkButton>
              </MagneticButton>
              <a
                href="#services"
                className="font-semibold underline decoration-[var(--soluven-blue)] underline-offset-4"
              >
                Explore our approach
              </a>
            </div>
          </FadeIn>
        </div>

        <div
          aria-hidden="true"
          className="relative mx-auto aspect-square w-full max-w-[420px] sm:max-w-[460px]"
        >
          <div className="absolute inset-0 rounded-full border border-[var(--color-blue)]/20" />
          <div className="absolute inset-[14%] rounded-full border border-[var(--color-blue)]/15" />

          <svg
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M50 0 C 72 2, 92 14, 99 34"
              fill="none"
              stroke="var(--soluven-blue)"
              strokeOpacity="0.3"
              strokeWidth="0.5"
            />
            <path
              d="M1 40 C -2 55, 4 68, 16 78"
              fill="none"
              stroke="var(--soluven-blue)"
              strokeOpacity="0.3"
              strokeWidth="0.5"
            />
            <circle cx="50" cy="0" r="1.3" fill="var(--soluven-blue)" />
            <circle cx="99" cy="34" r="1.3" fill="var(--soluven-blue)" />
            <circle cx="1" cy="40" r="1.3" fill="var(--soluven-blue)" />
          </svg>

          {/* Abstract floating brand form — no fake UI, mood over mockup */}
          <TiltCard className="absolute inset-[12%] flex items-center justify-center">
            <div className="relative h-full w-full">
              <div
                className="absolute left-[8%] top-[10%] h-[65%] w-[65%] rounded-full opacity-90 blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle at 35% 35%, var(--soluven-blue) 0%, transparent 70%)",
                }}
              />
              <div
                className="absolute bottom-[8%] right-[6%] h-[60%] w-[60%] rounded-full opacity-90 mix-blend-multiply blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle at 65% 65%, var(--soluven-green) 0%, transparent 70%)",
                }}
              />
              <div
                className="absolute inset-[18%] rounded-[40%] shadow-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, var(--soluven-blue) 0%, var(--soluven-green) 100%)",
                }}
              />
              <div className="absolute inset-[18%] flex flex-col justify-between rounded-[40%] p-5">
                <span className="w-fit rounded-full bg-[var(--soluven-cream)]/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[var(--soluven-ink)]">
                  From idea
                </span>
                <span
                  className="w-fit rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[var(--soluven-ink)]"
                  style={{ background: "var(--soluven-cream)" }}
                >
                  Live
                </span>
              </div>
            </div>
          </TiltCard>

          {floatingLabels.map((item) => (
            <span
              key={item.label}
              className={`absolute hidden rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-1.5 text-xs font-semibold shadow-sm sm:block ${item.className}`}
            >
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
