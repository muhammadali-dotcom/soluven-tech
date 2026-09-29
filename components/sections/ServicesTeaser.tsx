import Link from "next/link";
import Image from "next/image";
import { coreServices, growthServices } from "@/data/services";
import { FadeIn } from "@/components/motion/FadeIn";
import { serviceIllustrations } from "@/components/icons/ServiceIllustrations";


// Short, lowercase names for the growth services sentence.
const growthLabels: Record<string, string> = {
  "mobile-app-development": "mobile apps",
  "logo-design": "branding",
  seo: "SEO",
  "digital-marketing": "digital marketing",
  "social-media-marketing": "social media",
};

export function ServicesTeaser() {
  return (
    <section className="page-container py-20 md:py-28">
      <FadeIn>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
          What we do
        </p>
      </FadeIn>
      <FadeIn delay={0.05}>
        <h2 className="mt-6 max-w-2xl font-[family-name:var(--font-heading)] text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
          Websites, stores, and software, built to work together.
        </h2>
      </FadeIn>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {coreServices.map((service) => {
          const Illustration = serviceIllustrations[service.slug];
          return (
            <FadeIn key={service.slug} delay={0.05}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)] transition-colors duration-300 hover:border-[var(--soluven-blue)]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--soluven-cream)]">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      sizes="(min-width: 1280px) 555px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    Illustration && (
                      <div className="flex h-full w-full items-center justify-center">
                        <Illustration aria-hidden="true" className="h-40 w-40" />
                      </div>
                    )
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-[family-name:var(--font-heading)] text-lg font-semibold">
                    {service.name}
                  </p>
                  <p className="mt-2 text-sm text-[var(--color-muted)]">{service.summary}</p>
                  <span className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-semibold underline decoration-current underline-offset-4">
                    Learn more
                  </span>
                </div>
              </Link>
            </FadeIn>
          );
        })}
      </div>

      <p className="mt-8 max-w-2xl text-sm text-[var(--color-muted)]">
        We also support growth with{" "}
        {growthServices.map((service, index) => (
          <span key={service.slug}>
            <Link
              href={`/services/${service.slug}`}
              className="font-semibold text-[var(--color-ink)] underline decoration-[var(--color-border)] underline-offset-4 hover:decoration-current"
            >
              {growthLabels[service.slug] ?? service.name}
            </Link>
            {index < growthServices.length - 2 ? ", " : index === growthServices.length - 2 ? " and " : "."}
          </span>
        ))}
      </p>

      <Link
        href="/services"
        className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold underline decoration-current underline-offset-4"
      >
        See all services →
      </Link>
    </section>
  );
}
