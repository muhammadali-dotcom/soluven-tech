import type { Metadata } from "next";
import { buildMetadata, breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Why Soluven",
  description:
    "Why work with Soluven: a small, direct team building maintainable web, mobile, and ecommerce products with clear scope and pricing.",
  path: "/why-soluven",
});

const reasons = [
  {
    title: "Direct access, no layers",
    description:
      "You work with the people actually building your product — not an account manager relaying messages.",
  },
  {
    title: "Clear scope, clear pricing",
    description:
      "We scope the work before any commitment, so you know what you're getting and what it costs.",
  },
  {
    title: "Built to last",
    description:
      "Code and systems built to hold up in production and be maintained afterward, not just to demo well once.",
  },
  {
    title: "Modern, considered stack",
    description:
      "Tools chosen for what will serve your business long-term — typically Next.js and TypeScript, or Shopify and a custom stack for ecommerce — not whatever's trending.",
  },
];

export default function WhySoluvenPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-[85px] md:py-24">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Why Soluven", url: `${siteConfig.url}/why-soluven` },
        ])}
      />
      <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold md:text-4xl">
        Why Soluven
      </h1>
      {/* TODO: refine once user provides final positioning copy */}
      <p className="mt-6 max-w-2xl text-base text-[var(--color-text-muted)]">
        There are a lot of ways to get a website or product built. Here&apos;s
        what working with Soluven actually looks like.
      </p>

      <div className="mt-16 grid gap-8 sm:grid-cols-2">
        {reasons.map((reason) => (
          <div
            key={reason.title}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
          >
            <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold">
              {reason.title}
            </h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
