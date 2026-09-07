import { LinkButton } from "@/components/ui/Button";

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-16 md:px-16 md:py-24">
      <div className="rounded-2xl bg-[var(--color-text)] px-8 py-16 text-center md:py-24">
        <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-white md:text-5xl">
          Have a project in mind?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-white/70">
          Tell us what you&apos;re building — we&apos;ll get back to you
          quickly.
        </p>
        <LinkButton href="/contact" variant="primary" className="mt-8">
          Get in touch
        </LinkButton>
      </div>
    </section>
  );
}
