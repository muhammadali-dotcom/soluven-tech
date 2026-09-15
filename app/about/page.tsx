import type { Metadata } from "next";
import { Manifesto } from "@/components/sections/Manifesto";
import { MissionVisionValues } from "@/components/sections/MissionVisionValues";
import { WhatWeBelieve } from "@/components/sections/WhatWeBelieve";
import { buildMetadata, breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Soluven is a software house building web, mobile, and ecommerce products for local and international clients.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-[85px] md:py-24">
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Home", url: siteConfig.url },
            { name: "About", url: `${siteConfig.url}/about` },
          ])}
        />
        <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold md:text-4xl">
          About Soluven
        </h1>
        <p className="mt-6 max-w-2xl font-[family-name:var(--font-heading)] text-xl font-semibold leading-snug md:text-2xl">
          We build technology with a purpose.
        </p>
        <p className="mt-4 max-w-2xl text-base text-[var(--color-text-muted)]">
          Soluven is a digital solutions studio focused on helping businesses
          turn ideas and challenges into practical digital products.
        </p>
      </div>
      <MissionVisionValues />
      <Manifesto />
      <WhatWeBelieve />
    </>
  );
}
