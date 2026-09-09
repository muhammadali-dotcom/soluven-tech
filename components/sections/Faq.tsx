import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/faq";
import { FadeIn } from "@/components/motion/FadeIn";
import { JsonLd, faqJsonLd } from "@/lib/seo";

export function Faq() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-20 md:px-16 md:py-28">
      <JsonLd data={faqJsonLd(faqItems)} />
      <FadeIn>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Chapter 05 · Questions
        </p>
      </FadeIn>
      <FadeIn delay={0.05}>
        <h2 className="mt-6 max-w-2xl font-[family-name:var(--font-heading)] text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          Before you reach out.
        </h2>
      </FadeIn>

      <div className="mt-12 max-w-3xl divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
        {faqItems.map((item, index) => (
          <FadeIn key={item.question} delay={index * 0.05}>
            <details className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-[family-name:var(--font-heading)] text-lg font-semibold">
                {item.question}
                <ChevronDown
                  aria-hidden="true"
                  size={20}
                  className="shrink-0 text-[var(--color-muted)] transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <p className="mt-3 max-w-2xl text-[var(--color-muted)]">
                {item.answer}
              </p>
            </details>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
