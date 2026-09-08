import { Box, BarChart3, PieChart, CheckCircle2, Circle, Code2, Menu } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { TiltCard } from "@/components/motion/TiltCard";
import { FadeIn } from "@/components/motion/FadeIn";
import { Logo } from "@/components/ui/Logo";

const floatingLabels = [
  { label: "Websites", className: "left-[-4%] top-[8%]" },
  { label: "Ecommerce", className: "right-[-4%] top-[46%]" },
  { label: "Software", className: "left-[2%] bottom-[6%]" },
];

const statTiles = [Box, BarChart3, PieChart];

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
          <div className="absolute inset-[12%] rounded-full border border-[var(--color-blue)]/20" />

          <svg
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M50 0 C 72 2, 92 14, 99 34"
              fill="none"
              stroke="var(--soluven-blue)"
              strokeOpacity="0.35"
              strokeWidth="0.5"
            />
            <path
              d="M1 40 C -2 55, 4 68, 16 78"
              fill="none"
              stroke="var(--soluven-blue)"
              strokeOpacity="0.35"
              strokeWidth="0.5"
            />
            <circle cx="50" cy="0" r="1.3" fill="var(--soluven-blue)" />
            <circle cx="99" cy="34" r="1.3" fill="var(--soluven-blue)" />
            <circle cx="1" cy="40" r="1.3" fill="var(--soluven-blue)" />
          </svg>

          {/* Main browser card, centered with clear margin */}
          <TiltCard className="absolute inset-[14%] rounded-2xl border border-[var(--color-border)] bg-[var(--soluven-ink)] p-5 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-400/80" />
                <span className="h-2 w-2 rounded-full bg-amber-400/80" />
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: "var(--soluven-green)" }}
                />
              </div>
              <div className="flex items-center gap-2">
                <Logo size={14} withWordmark={false} />
                <div className="hidden gap-1.5 sm:flex">
                  <span className="h-1.5 w-4 rounded-full bg-white/15" />
                  <span className="h-1.5 w-4 rounded-full bg-white/15" />
                  <span className="h-1.5 w-6 rounded-full bg-white/15" />
                </div>
              </div>
            </div>

            <h2 className="mt-6 font-[family-name:var(--font-heading)] text-xl font-semibold leading-tight text-white sm:text-2xl">
              Ideas into
              <br />
              impact
            </h2>
            <div className="mt-4 h-1.5 w-full rounded-full bg-white/15" />
            <div className="mt-2 h-1.5 w-3/4 rounded-full bg-white/15" />
            <div
              className="mt-4 h-2 w-16 rounded-full"
              style={{ background: "var(--soluven-green)" }}
            />

            <div className="mt-6 grid grid-cols-3 gap-2">
              {statTiles.map((Icon, index) => (
                <div key={index} className="rounded-lg bg-white/10 p-2.5">
                  <Icon size={14} className="text-[var(--soluven-blue)]" />
                  <div className="mt-2 h-1 w-full rounded-full bg-white/20" />
                </div>
              ))}
            </div>
          </TiltCard>

          {/* Code / activity mini-card, clear of the main card */}
          <div className="absolute right-[-6%] top-[2%] w-28 rounded-xl border border-[var(--color-border)] bg-[var(--soluven-ink)] p-3 shadow-lg">
            <Code2 size={14} className="text-white/70" />
            <div className="mt-2 h-1.5 w-full rounded-full bg-white/15" />
            <div
              className="mt-1.5 h-1.5 w-2/3 rounded-full"
              style={{ background: "var(--soluven-green)" }}
            />
          </div>

          {/* LIVE pill */}
          <span className="absolute right-[-8%] top-[28%] flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-1 text-xs font-semibold shadow-sm">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--soluven-green)" }}
            />
            Live
          </span>

          {/* Phone mockup, tucked against the card's bottom-right, staying inside bounds */}
          <div className="absolute bottom-[4%] right-[-4%] w-24 rounded-2xl border border-[var(--color-border)] bg-[var(--soluven-ink)] p-2 shadow-xl">
            <div className="flex items-center justify-between px-0.5">
              <span className="text-[7px] font-bold uppercase tracking-wide text-white/70">
                Soluven
              </span>
              <Menu size={9} className="text-white/50" />
            </div>
            <div className="mt-1.5 grid grid-cols-2 gap-1">
              <div className="aspect-square rounded-md bg-gradient-to-br from-[var(--soluven-blue)]/50 to-[var(--soluven-green)]/40" />
              <div className="aspect-square rounded-md bg-gradient-to-br from-[var(--soluven-green)]/50 to-[var(--soluven-blue)]/40" />
              <div className="aspect-square rounded-md bg-white/15" />
              <div className="aspect-square rounded-md bg-white/15" />
            </div>
            <div
              className="mt-1.5 h-1.5 w-full rounded-full"
              style={{ background: "var(--soluven-blue)" }}
            />
          </div>

          {/* Checklist card, tucked against the card's bottom-left */}
          <div className="absolute bottom-[4%] left-[-4%] w-28 space-y-2 rounded-xl border border-[var(--color-border)] bg-[var(--soluven-ink)] p-3 shadow-lg">
            {[
              { label: "Idea", done: true },
              { label: "Build", done: true },
              { label: "Launch", done: false },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                {item.done ? (
                  <CheckCircle2
                    size={12}
                    style={{ color: "var(--soluven-green)" }}
                  />
                ) : (
                  <Circle size={12} className="text-white/40" />
                )}
                <span className="h-1 flex-1 rounded-full bg-white/15" />
              </div>
            ))}
          </div>

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
