import type { Metadata } from "next";
import Link from "next/link";
import { services, type ServiceVariant } from "@/data/services";
import { serviceIcons } from "@/lib/service-icons";
import { buildMetadata, breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";
import { ServicesShowcase } from "@/components/sections/ServicesShowcase";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Website development, e-commerce, software, mobile apps, logo design, digital marketing, social media marketing, and SEO from Soluven.",
  path: "/services",
});

const variantClasses: Record<ServiceVariant, string> = {
  blue: "bg-[var(--soluven-blue)]/15 border-[var(--soluven-blue)]/30",
  green: "bg-[var(--soluven-green)]/15 border-[var(--soluven-green)]/30",
  ink: "bg-[var(--color-background)] border-[var(--soluven-blue)] border-b-4 border-b-[var(--soluven-green)]",
};

export default function ServicesPage() {
  return (
    <>
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-[85px] md:py-24">
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Home", url: siteConfig.url },
            { name: "Services", url: `${siteConfig.url}/services` },
          ])}
        />
        <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold md:text-4xl">
          Services
        </h1>
        <p className="mt-4 max-w-2xl text-base text-[var(--color-text-muted)]">
          The full range of what we do, from first line of code to launch.
        </p>
      </div>

      <ServicesShowcase />

      <div className="mx-auto max-w-[1280px] px-6 pb-16 md:px-[85px] md:pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.slug];
            return (
            <Reveal key={service.slug} className="h-full">
              <Link
                href={`/services/${service.slug}`}
                className={`group flex h-full flex-col justify-between rounded-lg border p-8 text-[var(--color-ink)] transition-transform duration-300 hover:-translate-y-1 ${variantClasses[service.variant]}`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-[family-name:var(--font-heading)] text-sm font-semibold text-[var(--color-muted)]">
                      0{index + 1}
                    </span>
                    {Icon && (
                      <Icon
                        aria-hidden="true"
                        size={22}
                        className="text-[var(--color-muted)]"
                      />
                    )}
                  </div>
                  <h2 className="mt-4 font-[family-name:var(--font-heading)] text-lg font-semibold">
                    {service.name}
                  </h2>
                  <p className="mt-3 text-sm text-[var(--color-muted)]">
                    {service.summary}
                  </p>
                </div>
                <span className="mt-8 inline-block w-fit font-semibold underline decoration-current underline-offset-4">
                  Learn more →
                </span>
              </Link>
            </Reveal>
            );
          })}
        </div>
      </div>
    </>
  );
}
