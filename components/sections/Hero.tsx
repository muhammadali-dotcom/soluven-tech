import { LinkButton } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[32rem] w-[32rem] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-blue) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 py-24 md:px-16 md:py-40">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
          Web · Mobile · Ecommerce · Consulting
        </p>
        <h1 className="mt-6 max-w-4xl font-[family-name:var(--font-heading)] text-6xl font-bold leading-[1.05] tracking-tight md:text-8xl">
          Software that ships.
        </h1>
        <p className="mt-8 max-w-xl text-lg text-[var(--color-text-muted)] md:text-xl">
          Soluven builds web, mobile, and ecommerce products for startups and
          businesses — local and international — plus technical consulting
          for teams that need experienced guidance.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <LinkButton href="/contact" variant="primary">
            Start a project
          </LinkButton>
          <LinkButton href="/portfolio" variant="secondary">
            See our work
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
