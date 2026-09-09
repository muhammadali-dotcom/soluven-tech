import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/data/services";
import { serviceIcons } from "@/lib/service-icons";
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

  return (
    <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-16 md:py-24">
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
          <h1 className="mt-6 font-[family-name:var(--font-heading)] text-4xl font-bold md:text-5xl">
            {service.heading}
          </h1>
          <p className="mt-6 text-lg text-[var(--color-text-muted)]">
            {service.description}
          </p>
          {service.whoItsFor && (
            <p className="mt-6 border-l-2 border-[var(--color-border)] pl-4 text-sm font-semibold text-[var(--color-text-muted)]">
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
      </div>
    </div>
  );
}
