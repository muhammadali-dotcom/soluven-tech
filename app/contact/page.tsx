import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { buildMetadata, breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { contactEmail, whatsappLink, socialLinks, siteConfig } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with Soluven about a web, mobile, ecommerce, or consulting project.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-[85px] md:py-24">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Contact", url: `${siteConfig.url}/contact` },
        ])}
      />
      <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold md:text-4xl">
        Let&apos;s build something useful.
      </h1>
      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
        Have an idea?
      </p>
      <p className="mt-2 max-w-2xl text-base text-[var(--color-text-muted)]">
        Tell us what you&apos;re trying to build, what problem you&apos;re
        facing, or what you want to improve.
      </p>

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        <ContactForm />

        <div className="flex flex-col gap-4">
          <a
            href={`mailto:${contactEmail}`}
            className="font-semibold hover:text-[var(--color-blue)]"
          >
            {contactEmail}
          </a>
          {whatsappLink ? (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-[var(--color-blue)]"
            >
              Chat on WhatsApp
            </a>
          ) : (
            <p className="text-sm text-[var(--color-text-muted)]">
              WhatsApp link pending (business number TBD).
            </p>
          )}
          {socialLinks.length > 0 ? (
            socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:text-[var(--color-blue)]"
              >
                {social.label}
              </a>
            ))
          ) : (
            <p className="text-sm text-[var(--color-text-muted)]">
              Social links pending (accounts TBD).
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
