import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { services } from "@/data/services";

export function ServicesGrid() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-16 md:px-16 md:py-24">
      <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold md:text-4xl">
        What we do
      </h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <Link key={service.slug} href="/services">
            <Card className="h-full transition-shadow hover:shadow-md">
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold">
                {service.name}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                {service.summary}
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
