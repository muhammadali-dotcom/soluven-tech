import Link from "next/link";
import { AppWindow, ShoppingCart, Code2, Lightbulb } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { TiltCard } from "@/components/motion/TiltCard";
import { FadeIn } from "@/components/motion/FadeIn";
import { HeroLogoMark } from "@/components/sections/HeroLogoMark";

const capabilityCards = [
  { label: "Websites", Icon: AppWindow, dot: "--soluven-blue", className: "left-[-4%] top-[4%]" },
  { label: "Ecommerce", Icon: ShoppingCart, dot: "--soluven-green", className: "right-[-6%] top-[38%]" },
  { label: "Software", Icon: Code2, dot: "--soluven-green", className: "left-[0%] bottom-[2%]" },
];

export function Hero() {
  return (
    <section className="section-dark relative overflow-hidden bg-[var(--color-background)] text-[var(--color-ink)]">
      <HeroLogoMark />
      <div className="relative mx-auto grid max-w-[1280px] gap-16 px-6 py-20 md:px-[85px] md:py-28 lg:grid-cols-2 lg:items-center">
        <div>
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--color-muted)]">
              Digital solutions studio
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="mt-4 max-w-xl font-[family-name:var(--font-heading)] text-3xl font-bold leading-[1.05] tracking-tight md:text-4xl">
              Building solutions{" "}
              <span style={{ color: "var(--soluven-blue)" }}>
                for the future you see.
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-5 max-w-lg text-sm text-[var(--color-muted)]">
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
              <Link
                href="/services"
                className="font-semibold underline decoration-[var(--soluven-blue)] underline-offset-4"
              >
                Explore our approach
              </Link>
            </div>
          </FadeIn>
        </div>

        <div
          aria-hidden="true"
          className="relative mx-auto aspect-square w-full max-w-[420px] sm:max-w-[460px]"
        >
          <div
            className="absolute inset-0 rounded-full opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(color-mix(in srgb, var(--color-ink) 18%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--color-ink) 18%, transparent) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          <div className="absolute inset-0 rounded-full border border-[var(--color-blue)]/20" />
          <div className="absolute inset-[14%] rounded-full border border-dashed border-[var(--color-blue)]/15" />

          {/* Circuit-style connector lines from each card to a bend point on the ring */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M18 4 L18 22 L50 22 L50 0"
              fill="none"
              stroke="var(--soluven-blue)"
              strokeOpacity="0.4"
              strokeWidth="0.6"
              strokeLinejoin="round"
            />
            <path
              d="M96 38 L78 38 L78 20 L93.3 20"
              fill="none"
              stroke="var(--soluven-green)"
              strokeOpacity="0.4"
              strokeWidth="0.6"
              strokeLinejoin="round"
            />
            <path
              d="M8 96 L8 82 L28 82 L28 92 L6.7 92"
              fill="none"
              stroke="var(--soluven-green)"
              strokeOpacity="0.4"
              strokeWidth="0.6"
              strokeLinejoin="round"
            />
            <circle cx="18" cy="4" r="1.4" fill="var(--soluven-blue)" />
            <circle cx="96" cy="38" r="1.4" fill="var(--soluven-green)" />
            <circle cx="8" cy="96" r="1.4" fill="var(--soluven-green)" />
          </svg>

          {/* Slowly rotating accent dots — same drift animation as HeroLogoMark, for a subtle "live system" feel */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full animate-logo-drift"
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="0" r="1.6" fill="var(--soluven-blue)" />
            <circle cx="6.7" cy="75" r="1.6" fill="var(--soluven-green)" />
            <circle cx="93.3" cy="75" r="1.6" fill="var(--soluven-blue)" />
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
                className="absolute inset-[26%] rounded-[24%] shadow-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, var(--soluven-blue) 0%, var(--soluven-green) 100%)",
                }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-[26%] rounded-[24%]"
                style={{
                  background:
                    "radial-gradient(circle at 70% 20%, rgba(255,255,255,0.5), transparent 60%)",
                }}
              />
              <div className="absolute inset-[26%] flex flex-col items-center justify-between rounded-[24%] p-4">
                <span className="w-fit rounded-full bg-[var(--soluven-cream)]/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[var(--soluven-ink)]">
                  From idea
                </span>
                <Lightbulb
                  aria-hidden="true"
                  size={28}
                  strokeWidth={1.5}
                  className="text-[var(--soluven-cream)]"
                />
                <span
                  className="inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[var(--soluven-ink)]"
                  style={{ background: "var(--soluven-cream)" }}
                >
                  Live
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: "var(--soluven-green)" }}
                  />
                </span>
              </div>
            </div>
          </TiltCard>

          {capabilityCards.map(({ label, Icon, dot, className }) => (
            <div
              key={label}
              className={`absolute hidden w-[150px] rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-3 shadow-lg sm:block ${className}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex h-8 w-8 items-center justify-center rounded-md border border-[var(--color-border)]">
                  <Icon aria-hidden="true" size={16} />
                </div>
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full"
                  style={{ background: `var(${dot})` }}
                />
              </div>
              <p className="mt-2.5 text-xs font-semibold">{label}</p>
              <div className="mt-2.5 space-y-1.5">
                <span aria-hidden="true" className="block h-1 w-full rounded-full bg-[var(--color-border)]" />
                <span aria-hidden="true" className="block h-1 w-2/3 rounded-full bg-[var(--color-border)]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
