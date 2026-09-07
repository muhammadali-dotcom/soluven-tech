import { LinkButton } from "@/components/ui/Button";

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-16 md:px-16 md:py-24">
      <div className="rounded-2xl bg-[var(--color-green)] px-8 py-12 text-center md:py-16">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold md:text-4xl">
          Have a project in mind?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[var(--color-text)]/80">
          Tell us what you&apos;re building — we&apos;ll get back to you
          quickly.
        </p>
        <LinkButton
          href="/contact"
          variant="secondary"
          className="mt-8 border-[var(--color-text)] bg-[var(--color-background)]"
        >
          Get in touch
        </LinkButton>
      </div>
    </section>
  );
}
