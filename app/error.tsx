"use client";

import { Button, LinkButton } from "@/components/ui/Button";

// Never render error.message here: visitors only ever see a friendly message.
export default function Error({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return (
    <section className="mx-auto flex max-w-[1280px] flex-col items-start px-6 py-24 md:px-[85px] md:py-32">
      <h1 className="max-w-2xl font-[family-name:var(--font-heading)] text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
        Something went wrong on our side.
      </h1>
      <p className="mt-6 max-w-xl text-lg text-[var(--color-text-muted)]">
        Please try again. If it keeps happening, get in touch and we&apos;ll sort it out.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Button type="button" onClick={() => retry()}>
          Try again
        </Button>
        <LinkButton href="/" variant="secondary">
          Back to home
        </LinkButton>
        <LinkButton href="/contact" variant="secondary">
          Contact us
        </LinkButton>
      </div>
    </section>
  );
}
