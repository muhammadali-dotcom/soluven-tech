import type { Metadata } from "next";
import Link from "next/link";
import { coreServices, growthServices } from "@/data/services";
import { serviceIcons } from "@/lib/service-icons";
import { serviceIllustrations } from "@/components/icons/ServiceIllustrations";
import { buildMetadata, breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";
import { ServicesShowcase } from "@/components/sections/ServicesShowcase";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Website development, online stores and custom software from Soluven, plus mobile apps, branding, SEO, digital marketing and social media to help them grow.",
  path: "/services",
});


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

      <div className="page-container pb-16 md:pb-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-blue-deep)]">
          Core services
        </p>
        <p className="mt-2 max-w-2xl text-base text-[var(--color-text-muted)]">
          What we&apos;re best at: the technical work at the heart of every project.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 sm:[&>*:last-child:nth-child(odd)]:col-span-2">
          {coreServices.map((service) => {
            const Illustration = serviceIllustrations[service.slug];
            return (
              <Reveal key={service.slug} className="h-full">
                <div
                  className="flex h-full flex-col rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-[var(--color-ink)] transition-colors duration-300 hover:border-[var(--soluven-blue)]"
                >
                  {Illustration && (
                    <div className="flex items-center justify-center rounded-sm border border-[var(--color-border)] bg-[var(--color-background)] p-4">
                      <Illustration aria-hidden="true" className="h-32 w-32" />
                    </div>
                  )}
                  <h2 className="mt-6 font-[family-name:var(--font-heading)] text-xl font-semibold">
                    {service.name}
                  </h2>
                  <p className="mt-2 text-[var(--color-muted)]">{service.summary}</p>
                  <ul className="mt-6 space-y-2">
                    {service.included.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm font-semibold"
                      >
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 shrink-0 bg-[var(--color-ink)]"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-8 inline-flex w-fit items-center gap-1.5 font-semibold underline decoration-current underline-offset-4"
                  >
                    Explore service →
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-16 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Growth services
        </p>
        <p className="mt-2 max-w-2xl text-base text-[var(--color-text-muted)]">
          Supporting services that help your product get found and grow.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 sm:[&>*:last-child:nth-child(odd)]:col-span-2">
          {growthServices.map((service, index) => {
            const Icon = serviceIcons[service.slug];
            return (
              <Reveal key={service.slug} className="h-full">
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col justify-between rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-[var(--color-ink)] transition-colors duration-300 hover:border-[var(--soluven-blue)]"
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
