import type { Metadata } from "next";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-[1280px] flex-col items-start px-6 py-24 md:px-[85px] md:py-32">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
        404
      </p>
      <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-heading)] text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
        We couldn&apos;t find that page.
      </h1>
      <p className="mt-6 max-w-xl text-lg text-[var(--color-text-muted)]">
        The link may be broken or the page may have moved. Here are a few good places to pick things up.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <LinkButton href="/">Back to home</LinkButton>
        <LinkButton href="/services" variant="secondary">
          Our services
        </LinkButton>
        <LinkButton href="/contact" variant="secondary">
          Contact us
        </LinkButton>
      </div>
    </section>
  );
}
