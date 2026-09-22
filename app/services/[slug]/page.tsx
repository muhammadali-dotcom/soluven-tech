import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/data/services";
import { serviceIcons } from "@/lib/service-icons";
import { serviceIllustrations } from "@/components/icons/ServiceIllustrations";
import { WebsiteDevelopmentHero } from "@/components/sections/WebsiteDevelopmentHero";
import { EcommerceHero } from "@/components/sections/EcommerceHero";
import { MobileAppHero } from "@/components/sections/MobileAppHero";
import { SoftwareDevelopmentHero } from "@/components/sections/SoftwareDevelopmentHero";
import { LogoDesignHero } from "@/components/sections/LogoDesignHero";
import { DigitalMarketingHero } from "@/components/sections/DigitalMarketingHero";
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
  const Icon = serviceIcons[service.slug];
  const Illustration = serviceIllustrations[service.slug];

  if (service.slug === "website-development") {
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
        <WebsiteDevelopmentHero />
        <WhatWeBuild items={service.included} />
        <HowWeWork />
        <CtaBanner />
      </>
    );
  }

  if (service.slug === "ecommerce") {
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
        <EcommerceHero />
        <WhatWeBuild items={service.included} />
        <HowWeWork />
        <CtaBanner />
      </>
    );
  }

  if (service.slug === "mobile-app-development") {
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
        <MobileAppHero />
        <WhatWeBuild items={service.included} />
        <HowWeWork />
        <CtaBanner />
      </>
    );
  }

  if (service.slug === "software-development") {
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
        <SoftwareDevelopmentHero />
        <WhatWeBuild items={service.included} />
        <HowWeWork />
        <CtaBanner />
      </>
    );
  }

  if (service.slug === "logo-design") {
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
        <LogoDesignHero />
        <WhatWeBuild items={service.included} />
        <HowWeWork />
        <CtaBanner />
      </>
    );
  }

  if (service.slug === "digital-marketing") {
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
        <DigitalMarketingHero />
        <WhatWeBuild items={service.included} />
        <HowWeWork />
        <CtaBanner />
      </>
    );
  }

  return (
    <>
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-[85px] md:py-24">
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Home", url: siteConfig.url },
            { name: "Services", url: `${siteConfig.url}/services` },
            { name: service.name, url: `${siteConfig.url}/services/${service.slug}` },
          ])}
        />
        <JsonLd data={serviceJsonLd(service)} />

        <Link
          href="/services"
          className="text-sm font-semibold underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current hover:text-[var(--soluven-blue)]"
        >
          ← All services
        </Link>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            {Icon && (
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]">
                <Icon aria-hidden="true" size={24} className="text-[var(--soluven-blue)]" />
              </div>
            )}
            <h1 className="mt-6 font-[family-name:var(--font-heading)] text-3xl font-bold md:text-4xl">
              {service.heading}
            </h1>
            <p className="mt-6 text-base text-[var(--color-text-muted)]">
              {service.description}
            </p>
            {service.whoItsFor && (
              <p className="mt-6 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm font-semibold text-[var(--color-text-muted)]">
                {service.whoItsFor}
              </p>
            )}
            <Link
              href="/contact"
              className="mt-8 inline-block w-fit rounded-md bg-[var(--color-blue)] px-6 py-3 font-semibold text-[var(--color-ink)] transition-colors hover:bg-[var(--color-blue-hover)]"
            >
              {service.ctaLabel}
            </Link>
          </div>
          {Illustration && (
            <div className="flex items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
              <Illustration aria-hidden="true" className="w-full max-w-sm" />
            </div>
          )}
        </div>
      </div>

      <WhatWeBuild items={service.included} />
      <HowWeWork />
      <CtaBanner />
    </>
  );
}
