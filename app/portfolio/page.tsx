import type { Metadata } from "next";
import { Projects } from "@/components/sections/Projects";
import { portfolioProjects } from "@/data/portfolio";
import { buildMetadata, breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Our Work",
  description:
    "Real projects showing how Soluven approaches web, ecommerce, and custom software.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-[85px] md:py-24">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Our Work", url: `${siteConfig.url}/portfolio` },
        ])}
      />

      {/* Page intro */}
      <div className="mb-14 md:mb-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Our Work
        </p>
        <h1 className="mt-4 max-w-2xl font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Things we&apos;ve built.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--color-muted)]">
          A look at the products and tools we&apos;ve designed and engineered
          — each one built to solve a specific problem.
        </p>
      </div>

      <Projects projects={portfolioProjects} />

      {/* Disclaimer footnote */}
      <p className="mt-16 text-sm text-[var(--color-muted)]">
        These are independent builds. Client work will join this page as
        engagements are delivered.
      </p>
    </div>
  );
}
