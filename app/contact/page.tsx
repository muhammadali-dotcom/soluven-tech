import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { buildMetadata, breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { contactEmail, whatsappLink, siteConfig } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Tell Soluven about your website, online store or custom software project. A real person replies, usually within one business day.",
  path: "/contact",
});

const nextSteps = [
  { title: "Tell us what you need", text: "Share your goals, ideas or challenges." },
  {
    title: "We review the right approach",
    text: "Our team looks at your needs and suggests a clear path.",
  },
  { title: "You receive a clear next step", text: "We'll get back to you with practical next steps." },
];

const eyebrowClasses =
  "text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-muted)]";
const contactLinkClasses =
  "font-semibold text-[var(--color-ink)] underline decoration-[var(--color-border)] underline-offset-4 transition-colors hover:decoration-current";

export default function ContactPage() {
  return (
    <div className="bg-[var(--color-background)]">
      <div className="mx-auto max-w-[1280px] px-6 py-12 md:px-[85px] md:py-16">
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Home", url: siteConfig.url },
            { name: "Contact", url: `${siteConfig.url}/contact` },
          ])}
        />

        <section
          aria-labelledby="contact-heading"
          className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
        >
          <div>
            <p className={eyebrowClasses}>Contact</p>
            <h1
              id="contact-heading"
              className="mt-4 max-w-xl font-[family-name:var(--font-heading)] text-4xl font-extrabold leading-[1.04] text-[var(--color-ink)] md:text-5xl"
            >
              Let&apos;s turn it into something real.
            </h1>
            <p className="mt-5 max-w-md text-base leading-7 text-[var(--color-text-muted)]">
              Tell us what you&apos;re building, what feels stuck or what you want to improve.
              We&apos;ll listen, simplify the next steps and help you move forward with confidence.
            </p>

            <p className={`mt-10 ${eyebrowClasses}`}>What happens next</p>
            <ol className="mt-4 border-b border-[var(--color-border)]">
              {nextSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="flex gap-4 border-t border-[var(--color-border)] py-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[var(--soluven-blue)] font-[family-name:var(--font-heading)] text-sm font-bold text-[var(--color-blue-deep)]">
                    0{index + 1}
                  </span>
                  <div>
                    <h2 className="text-base font-bold text-[var(--color-ink)]">{step.title}</h2>
                    <p className="mt-1 text-sm leading-5 text-[var(--color-text-muted)]">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <dl className="mt-8 grid gap-4 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-[var(--color-muted)]">Prefer email?</dt>
                <dd className="mt-1 break-words">
                  <a href={`mailto:${contactEmail}`} className={contactLinkClasses}>
                    {contactEmail}
                  </a>
                </dd>
              </div>
              {whatsappLink && (
                <div>
                  <dt className="text-[var(--color-muted)]">Fast chat</dt>
                  <dd className="mt-1">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={contactLinkClasses}
                    >
                      WhatsApp
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          </div>

          <div className="rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:p-8 lg:p-10">
            <div className="mb-6">
              <p className={eyebrowClasses}>Project brief</p>
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-2xl font-extrabold leading-tight text-[var(--color-ink)] md:text-3xl">
                Start with a few details.
              </h2>
              <p className="mt-2 text-base leading-6 text-[var(--color-text-muted)]">
                You don&apos;t need a perfect brief. Just tell us what&apos;s on your mind.
              </p>
              <p className="mt-3 flex items-center gap-2 text-sm text-[var(--color-muted)]">
                <span aria-hidden="true" className="h-2 w-2 shrink-0 bg-[var(--soluven-green)]" />
                Usually replies within 1 business day
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </div>
    </div>
  );
}
