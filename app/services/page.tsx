import type { Metadata } from "next";
import { services } from "@/data/services";
import { buildMetadata, breadcrumbJsonLd, serviceJsonLd, JsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";

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

      <div className="mt-16 flex flex-col gap-16">
        {services.map((service, index) => (
          <Reveal key={service.slug}>
            <section
              id={service.slug}
              className={`scroll-mt-24 grid gap-8 border-t border-[var(--color-border)] pt-12 md:grid-cols-2 ${
                index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <JsonLd data={serviceJsonLd(service)} />
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">
                  {service.name}
                </h2>
                <p className="mt-4 text-lg text-[var(--color-text-muted)]">
                  {service.description}
                </p>
                {service.whoItsFor && (
                  <p className="mt-4 border-l-2 border-[var(--color-border)] pl-4 text-sm font-semibold text-[var(--color-text-muted)]">
                    {service.whoItsFor}
                  </p>
                )}
              </div>
              <ul className="space-y-3 self-start">
                {service.included.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm font-semibold"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
