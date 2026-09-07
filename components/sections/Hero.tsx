import { LinkButton } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-20 md:px-16 md:py-32">
      <h1 className="max-w-3xl font-[family-name:var(--font-heading)] text-5xl font-bold leading-tight md:text-6xl">
        Software that ships, and works.
      </h1>
      <p className="mt-6 max-w-xl text-lg text-[var(--color-text-muted)] md:text-xl">
        Soluven builds web, mobile, and ecommerce products for startups and
        businesses — local and international — plus technical consulting for
        teams that need experienced guidance.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <LinkButton href="/contact" variant="primary">
          Start a project
        </LinkButton>
        <LinkButton href="/portfolio" variant="secondary">
          See our work
        </LinkButton>
      </div>
    </section>
  );
}
