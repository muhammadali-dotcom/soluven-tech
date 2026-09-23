import type { Metadata } from "next";
import { Manifesto } from "@/components/sections/Manifesto";
import { MissionVisionValues } from "@/components/sections/MissionVisionValues";
import { WhatWeBelieve } from "@/components/sections/WhatWeBelieve";
import { buildMetadata, breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";
import { FadeIn } from "@/components/motion/FadeIn";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Soluven is a software house building web, mobile, and ecommerce products for local and international clients.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "About", url: `${siteConfig.url}/about` },
        ])}
      />

      {/* 1. Hero — cream */}
      <section className="mx-auto max-w-[1280px] px-6 py-16 md:px-[85px] md:py-24">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
            About Soluven
          </p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            We build technology with a purpose.
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
            Soluven is a digital solutions studio focused on helping businesses
            turn ideas and challenges into practical digital products.
          </p>
        </FadeIn>
      </section>

      {/* 2. Mission / Vision / Values — dark */}
      <MissionVisionValues />

      {/* 3. Manifesto — blue (brand accent, unchanged) */}
      <Manifesto />

      {/* 4. What We Believe — cream */}
      <WhatWeBelieve />
    </>
  );
}
