import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import { FadeIn } from "@/components/motion/FadeIn";

const featuredSlugs = ["website-development", "ecommerce", "software-development"];
const featuredServices = featuredSlugs
  .map((slug) => services.find((service) => service.slug === slug))
  .filter((service): service is (typeof services)[number] => Boolean(service));

export function ServicesTeaser() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-20 md:px-[85px] md:py-28">
      <FadeIn>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
          What we do
        </p>
      </FadeIn>
      <FadeIn delay={0.05}>
        <h2 className="mt-6 max-w-2xl font-[family-name:var(--font-heading)] text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
          Websites, stores, and software — built to work together.
        </h2>
      </FadeIn>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {featuredServices.map((service) => (
          <FadeIn key={service.slug} delay={0.05}>
            <Link
              href={`/services/${service.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--soluven-cream)]">
                {service.image && (
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="font-[family-name:var(--font-heading)] text-lg font-semibold">
                  {service.name}
                </p>
                <p className="mt-2 text-sm text-[var(--color-muted)]">{service.summary}</p>
                <span className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-semibold underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-current group-hover:text-[var(--soluven-blue)]">
                  Learn more →
                </span>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>

      <Link
        href="/services"
        className="mt-8 inline-flex w-fit items-center gap-1.5 text-sm font-semibold underline decoration-current underline-offset-4"
      >
        See all 8 services →
      </Link>
    </section>
  );
}
