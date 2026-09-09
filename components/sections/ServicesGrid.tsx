import Link from "next/link";
import { services, type ServiceVariant } from "@/data/services";
import { serviceIcons } from "@/lib/service-icons";
import { FadeIn } from "@/components/motion/FadeIn";

const variantClasses: Record<ServiceVariant, string> = {
  blue: "bg-[var(--soluven-blue)]/15 border-[var(--soluven-blue)]/30",
  green: "bg-[var(--soluven-green)]/15 border-[var(--soluven-green)]/30",
  ink: "bg-[var(--color-background)] border-[var(--soluven-blue)] border-b-4 border-b-[var(--soluven-green)]",
};

export function ServicesGrid() {
  return (
    <section id="services" className="mx-auto max-w-[1280px] px-6 py-20 md:px-16 md:py-28 scroll-mt-24">
      <FadeIn>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Chapter 03 · What we build
        </p>
      </FadeIn>
      <FadeIn delay={0.05}>
        <h2 className="mt-6 max-w-2xl font-[family-name:var(--font-heading)] text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          Eight capabilities. One clear outcome.
        </h2>
      </FadeIn>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => {
          const Icon = serviceIcons[service.slug];
          return (
          <FadeIn key={service.slug} delay={index * 0.08} className="h-full">
            <article
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
                <h3 className="mt-4 font-[family-name:var(--font-heading)] text-2xl font-semibold">
                  {service.heading}
                </h3>
                <p className="mt-3 text-sm text-[var(--color-muted)]">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2 text-sm font-semibold">
                  {service.included.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <Link
                href={`/services/${service.slug}`}
                className="mt-8 inline-block w-fit font-semibold underline decoration-current underline-offset-4"
              >
                {service.ctaLabel}
              </Link>
            </article>
          </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
