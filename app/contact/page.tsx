import type { Metadata } from "next";
import { ChatCircle, Check, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { ContactForm } from "@/components/sections/ContactForm";
import { buildMetadata, breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { contactEmail, whatsappLink, siteConfig } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with Soluven about a web, mobile, ecommerce, or consulting project.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="bg-[#FFF8EE]">
      <div className="mx-auto max-w-[1280px] px-6 py-12 md:px-[85px] md:py-16">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Contact", url: `${siteConfig.url}/contact` },
        ])}
      />

      <section className="relative isolate overflow-hidden" aria-labelledby="contact-heading">
        <div
          aria-hidden="true"
          className="absolute left-[30%] top-2 hidden h-36 w-36 rounded-full border border-[#63CBF8] lg:block"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-10 right-2 hidden h-28 w-28 rounded-full border border-dashed border-[#7ED957] xl:block"
        />

        <div className="relative grid gap-6 lg:grid-cols-[0.38fr_0.62fr]">
          <div className="rounded-[24px] border border-white bg-[#FFFCF5] p-6 shadow-[0_18px_45px_rgba(20,39,43,0.08)] md:p-8 lg:p-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                HAVE AN IDEA?
              </p>
              <h1
                id="contact-heading"
                className="mt-4 max-w-xl font-[family-name:var(--font-heading)] text-4xl font-extrabold leading-[1.04] tracking-normal text-[#14272B] md:text-5xl"
              >
                Let&apos;s turn it into something real.
              </h1>
              <p className="mt-5 max-w-md text-base leading-7 text-[var(--color-text-muted)]">
                Tell us what you&apos;re building, what feels stuck or what you
                want to improve. We&apos;ll listen, simplify the next steps and
                help you move forward with confidence.
              </p>

              <div className="relative mt-7 grid gap-5">
                <div
                  aria-hidden="true"
                  className="absolute bottom-8 left-5 top-8 w-px bg-[#7ED957]"
                />
                {[
                  {
                    number: "01",
                    title: "Tell us what you need",
                    text: "Share your goals, ideas or challenges.",
                    color: "bg-[#DDF5FF]",
                  },
                  {
                    number: "02",
                    title: "We review the right approach",
                    text: "Our team looks at your needs and suggests a clear path.",
                    color: "bg-[#DCF8D3]",
                  },
                  {
                    number: "03",
                    title: "You receive a clear next step",
                    text: "We'll get back to you with practical next steps.",
                    color: "bg-[#DCF8D3]",
                  },
                ].map((step) => (
                  <div key={step.number} className="relative flex gap-4">
                    <span
                      className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#7ED957] ${step.color} text-sm font-bold text-[#14272B]`}
                    >
                      {step.number}
                    </span>
                    <div>
                      <h2 className="text-base font-bold text-[#14272B]">
                        {step.title}
                      </h2>
                      <p className="mt-1 text-sm leading-5 text-[var(--color-text-muted)]">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[18px] border border-[#7ED957]/30 bg-[#EEFBEA] p-5">
                <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#14272B]">
                  What happens next?
                </h2>
                <p className="mt-2 text-sm leading-5 text-[var(--color-text-muted)]">
                  A real person reviews your message. No automated sales
                  pressure.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Clear communication", "No confusing process"].map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-[#7ED957]/40 bg-[#FFFFFF] px-3 py-1.5 text-xs font-semibold text-[#14272B]"
                    >
                      <Check size={14} weight="bold" className="text-[#7ED957]" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 border-t border-[var(--color-border)] pt-5 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#DDF5FF] text-[#14272B]">
                  <EnvelopeSimple size={22} />
                </span>
                <div>
                  <p className="text-sm font-bold text-[#14272B]">Prefer email?</p>
                <a
                  href={`mailto:${contactEmail}`}
                    className="mt-1 block break-words text-sm font-semibold text-[var(--color-blue)]"
                >
                  {contactEmail}
                </a>
              </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#DCF8D3] text-[#14272B]">
                  <ChatCircle size={22} />
                </span>
                <div>
                  <p className="text-sm font-bold text-[#14272B]">Fast chat</p>
                {whatsappLink ? (
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                      className="mt-1 block text-sm font-semibold text-[var(--color-blue)]"
                  >
                    WhatsApp
                  </a>
                ) : (
                    <p className="mt-1 text-sm leading-5 text-[var(--color-text-muted)]">
                    WhatsApp link pending (business number TBD).
                  </p>
                )}
              </div>
              </div>
            </div>
          </div>

          <div className="rounded-[24px] border border-[var(--color-border)] bg-[#FFFFFF] p-6 shadow-[0_20px_55px_rgba(20,39,43,0.1)] md:p-8 lg:p-10">
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  Project brief
                </p>
                <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-extrabold leading-tight text-[#14272B] md:text-4xl">
                  Start with a few details.
                </h2>
                <p className="mt-2 text-base leading-6 text-[var(--color-text-muted)]">
                  You don&apos;t need a perfect brief. Just tell us what&apos;s
                  on your mind.
                </p>
              </div>
              <p className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--color-border)] bg-[#FFFCF5] px-4 py-2 text-xs font-semibold text-[#14272B]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#7ED957]" />
                Usually replies within 1 business day
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
