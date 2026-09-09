import type { Metadata } from "next";
import { Projects } from "@/components/sections/Projects";
import { portfolioProjects } from "@/data/portfolio";
import { buildMetadata, breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio",
  description:
    "Concept projects showing what Soluven can build across web, ecommerce, and custom software.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-16 md:py-24">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Portfolio", url: `${siteConfig.url}/portfolio` },
        ])}
      />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold md:text-5xl">
        Portfolio
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
        Concept projects showing how we&apos;d approach real problems.
      </p>

      <div className="mt-12">
        <Projects projects={portfolioProjects} />
      </div>
    </div>
  );
}
