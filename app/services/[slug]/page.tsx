import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { WhatWeBuild } from "@/components/sections/WhatWeBuild";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { buildMetadata, breadcrumbJsonLd, serviceJsonLd, JsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};

  return buildMetadata({
    title: service.name,
    description: service.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Services", url: `${siteConfig.url}/services` },
          { name: service.name, url: `${siteConfig.url}/services/${service.slug}` },
        ])}
      />
      <JsonLd data={serviceJsonLd(service)} />
      <ServiceHero {...service.hero} ctaLabel={service.ctaLabel} />
      <WhatWeBuild items={service.builds} />
      <HowWeWork
        steps={service.process}
        eyebrow="How it works"
        heading="What working with us looks like."
      />
      <CtaBanner />
    </>
  );
}
