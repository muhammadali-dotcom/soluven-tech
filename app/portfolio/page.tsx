import type { Metadata } from "next";
import { Projects } from "@/components/sections/Projects";
import { portfolioProjects } from "@/data/portfolio";
import { buildMetadata, breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/motion/FadeIn";

export const metadata: Metadata = buildMetadata({
  title: "Our Work",
  description:
    "Real projects showing how Soluven approaches web, ecommerce, and custom software.",
  path: "/portfolio",
});

// Short descriptors for the hero's project row; each links to its card below.
const heroLabels: Record<string, string> = {
  ems: "Workforce platform",
  querybridge: "AI SQL tool",
  roomtalk: "Real-time chat",
  expenzo: "Expense tracker",
};

const steps = [
  { label: "Problem" },
  { label: "Understand" },
  { label: "Design" },
  { label: "Build" },
  { label: "Refine" },
];

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Our Work", url: `${siteConfig.url}/portfolio` },
        ])}
      />

      <PageHero
        theme="dark"
        motion="fan"
        background="contours"
        eyebrow="Our work"
        headline={["Things we've", "actually", "built."]}
        description="Real products we've designed and engineered, each one built to solve a specific problem. Explore how they work and the code behind them."
        primaryCta={{ label: "Start a project", href: "/contact" }}
        secondaryCta={{ label: "See our services", href: "/services" }}
        items={portfolioProjects.map((project) => ({
          title: project.title.split(":")[0],
          label: heroLabels[project.slug] ?? project.category,
          href: `#${project.slug}`,
        }))}
      />

      {/* Projects sit in the narrower content column; the intro above is the page hero. */}
      <section className="page-container pb-16 md:pb-24">
        <Projects projects={portfolioProjects} />

        <p className="mt-16 text-sm text-[var(--color-muted)]">
          These are independent builds. Client work will join this page as
          engagements are delivered.
        </p>
      </section>

      {/* 2. How We Approach — dark */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-ink)]">
        <div className="page-container py-20 md:py-28">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--soluven-cream)]/50">
              How We Approach Projects
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-heading)] text-2xl font-semibold leading-tight tracking-tight text-[var(--soluven-cream)] md:text-3xl">
              Every project starts with a problem.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-12 flex flex-wrap items-center gap-y-4">
              {steps.map((step, index) => (
                <div key={step.label} className="flex items-center">
                  <span className="rounded-md border border-[var(--soluven-cream)]/15 bg-[var(--soluven-cream)]/5 px-5 py-2.5 font-[family-name:var(--font-heading)] text-sm font-semibold text-[var(--soluven-cream)]">
                    {step.label}
                  </span>
                  {index < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="mx-3 text-lg font-light text-[var(--soluven-blue)]"
                    >
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="mt-10 max-w-xl text-base leading-relaxed text-[var(--soluven-cream)]/60">
              We focus on understanding the problem first, then choose the
              technology and approach that make the most sense for the product.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
