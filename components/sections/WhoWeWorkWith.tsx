import Link from "next/link";
import {
  Rocket,
  Storefront,
  ChartLineUp,
  Buildings,
  ArrowRight,
  Heartbeat,
  House,
  ShoppingCart,
  GraduationCap,
  Package,
  ChartLine,
  Users,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { FadeIn } from "@/components/motion/FadeIn";

type Accent = "blue" | "green";

type Stage = {
  number: string;
  title: string;
  icon: Icon;
  description: string;
  outcome: string;
  accent: Accent;
  badge?: string;
  emphasized?: boolean;
};

const stages: Stage[] = [
  {
    number: "01",
    title: "Startups",
    icon: Rocket,
    description: "Turn a promising idea into a product people can use and believe in.",
    outcome: "Launch with confidence",
    accent: "blue",
  },
  {
    number: "02",
    title: "Small businesses",
    icon: Storefront,
    description: "Build a credible digital presence that helps the right customers choose you.",
    outcome: "Win more trust",
    accent: "blue",
  },
  {
    number: "03",
    title: "Growing companies",
    icon: ChartLineUp,
    description: "Connect your systems, remove repetitive work and make growth easier to manage.",
    outcome: "Scale without chaos",
    accent: "green",
    badge: "Ready to scale",
    emphasized: true,
  },
  {
    number: "04",
    title: "Established businesses",
    icon: Buildings,
    description: "Modernise outdated software and create smoother digital operations.",
    outcome: "Move forward faster",
    accent: "green",
  },
];

const industries: { label: string; icon: Icon }[] = [
  { label: "Healthcare", icon: Heartbeat },
  { label: "Real estate", icon: House },
  { label: "E-commerce", icon: ShoppingCart },
  { label: "Education", icon: GraduationCap },
  { label: "Logistics", icon: Package },
  { label: "Finance", icon: ChartLine },
  { label: "Professional services", icon: Users },
];

const accentClasses: Record<Accent, { text: string; ring: string; iconBg: string; pillBg: string }> = {
  blue: {
    text: "text-[var(--soluven-blue)]",
    ring: "border-[var(--soluven-blue)]",
    iconBg: "bg-[var(--soluven-blue)]/15",
    pillBg: "bg-[var(--soluven-blue)]/15",
  },
  green: {
    text: "text-[var(--soluven-green)]",
    ring: "border-[var(--soluven-green)]",
    iconBg: "bg-[var(--soluven-green)]/15",
    pillBg: "bg-[var(--soluven-green)]/15",
  },
};

export function WhoWeWorkWith() {
  return (
    <section
      aria-labelledby="who-we-work-with-heading"
      className="page-container py-20 md:py-28"
    >
      <FadeIn>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Who we work with
        </p>
      </FadeIn>
      <FadeIn delay={0.05}>
        <h2
          id="who-we-work-with-heading"
          className="mt-6 max-w-3xl font-[family-name:var(--font-heading)] text-3xl font-bold leading-tight tracking-tight text-[var(--color-ink)] md:text-4xl"
        >
          Built for where you are. Ready for where you&apos;re going.
        </h2>
      </FadeIn>
      <FadeIn delay={0.1}>
        <p className="mt-4 max-w-2xl text-base text-[var(--color-text-muted)]">
          From the first idea to the next stage of growth, we build the digital tools your
          business needs to move forward with confidence.
        </p>
      </FadeIn>

      <div className="relative mt-14">
        <div className="grid gap-6 sm:grid-cols-2">
          {stages.map((stage, index) => {
            const accent = accentClasses[stage.accent];
            const Icon = stage.icon;
            return (
              <FadeIn key={stage.title} delay={index * 0.05}>
                <div className="flex h-full flex-col">
                  <div className="relative z-10 mb-3 flex h-9 w-9 items-center justify-center rounded-full border-2 bg-[var(--color-background)] text-sm font-semibold text-[var(--color-ink)]"
                    style={{ borderColor: stage.accent === "blue" ? "var(--soluven-blue)" : "var(--soluven-green)" }}
                  >
                    {stage.number}
                  </div>
                  <Link
                    href="/portfolio"
                    className={`group relative flex flex-1 flex-col rounded-lg border bg-[var(--color-background)] p-5 transition-colors duration-300 ${
                      stage.emphasized
                        ? "border-[var(--soluven-green)]"
                        : stage.accent === "blue"
                          ? "border-[var(--color-border)] hover:border-[var(--soluven-blue)]"
                          : "border-[var(--color-border)] hover:border-[var(--soluven-green)]"
                    }`}
                  >
                    {stage.badge && (
                      <span className="absolute right-4 top-4 max-w-[calc(100%-4.5rem)] truncate rounded-full bg-[var(--soluven-green)]/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--soluven-green)]">
                        {stage.badge}
                      </span>
                    )}
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full ${accent.iconBg}`}>
                      <Icon aria-hidden="true" size={18} className={accent.text} />
                    </div>
                    <h3 className="mt-3 font-[family-name:var(--font-heading)] text-base font-semibold text-[var(--color-ink)]">
                      {stage.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                      {stage.description}
                    </p>
                    <span
                      className={`mt-3 inline-block w-fit rounded-full px-3 py-1 text-xs font-semibold text-[var(--color-ink)] ${accent.pillBg}`}
                    >
                      {stage.outcome}
                    </span>
                    <span className="mt-auto flex h-9 w-9 items-center justify-center self-end rounded-full border border-[var(--color-border)]">
                      <ArrowRight aria-hidden="true" size={16} className="text-[var(--color-ink)]" />
                    </span>
                  </Link>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>

      <FadeIn delay={0.2}>
        <div className="mt-16 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Industries we serve
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {industries.map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-semibold text-[var(--color-ink)]"
                >
                  <Icon aria-hidden="true" size={16} className="text-[var(--color-muted)]" />
                  {label}
                </span>
              ))}
            </div>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[var(--soluven-blue)] underline decoration-current underline-offset-4"
          >
            Explore our work
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
