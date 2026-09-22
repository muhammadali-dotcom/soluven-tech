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
      <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold md:text-4xl">
        Our Work
      </h1>
      <p className="mt-4 max-w-2xl text-base text-[var(--color-text-muted)]">
        Real, independently built projects showing how we approach web,
        ecommerce, and custom software challenges.
      </p>
      <p className="mt-3 max-w-2xl text-sm text-[var(--color-text-muted)]">
        These are independent builds, not client case studies yet; client
        work will join this page as engagements are delivered.
      </p>

      <div className="mt-12">
        <Projects projects={portfolioProjects} />
      </div>
    </div>
  );
}
