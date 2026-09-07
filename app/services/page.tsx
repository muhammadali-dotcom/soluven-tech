import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { services } from "@/data/services";
import { buildMetadata, breadcrumbJsonLd, serviceJsonLd, JsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Web development, mobile app development, ecommerce setup, and technical consulting from Soluven.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-16 md:py-24">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Services", url: `${siteConfig.url}/services` },
        ])}
      />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold md:text-5xl">
        Services
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
        The full range of what we do, from first line of code to launch.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {services.map((service) => (
          <Card key={service.slug}>
            <JsonLd data={serviceJsonLd(service)} />
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold">
              {service.name}
            </h2>
            <p className="mt-3 text-[var(--color-text-muted)]">
              {service.description}
            </p>
            <ul className="mt-4 space-y-1 text-sm">
              {service.included.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}
