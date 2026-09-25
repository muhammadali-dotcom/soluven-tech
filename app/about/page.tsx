import type { Metadata } from "next";
import { Manifesto } from "@/components/sections/Manifesto";
import { MissionVisionValues } from "@/components/sections/MissionVisionValues";
import { WhatWeBelieve } from "@/components/sections/WhatWeBelieve";
import { buildMetadata, breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";
import { PageHero } from "@/components/sections/PageHero";

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

      <PageHero
        theme="dark"
        motion="fan"
        background="weave"
        eyebrow="About Soluven"
        headline={["A small team", "that cares how", "it turns out."]}
        description="Soluven is a digital studio that turns ideas and everyday business problems into websites, apps and software people actually use."
        primaryCta={{ label: "Start a project", href: "/contact" }}
        secondaryCta={{ label: "Why Soluven", href: "/why-soluven" }}
        items={[
          { title: "Pakistan & worldwide", label: "Where we work" },
          { title: "Web, apps, software", label: "What we build" },
          { title: "Direct contact", label: "You talk to the builders" },
          { title: "Plain English", label: "Clear scope, no jargon" },
        ]}
      />

      {/* 2. Mission / Vision / Values — dark */}
      <MissionVisionValues />

      {/* 3. Manifesto — blue (brand accent, unchanged) */}
      <Manifesto />

      {/* 4. What We Believe — cream */}
      <WhatWeBelieve />
    </>
  );
}
