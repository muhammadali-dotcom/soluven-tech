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
    <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-16 md:py-24">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Contact", url: `${siteConfig.url}/contact` },
        ])}
      />
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold md:text-5xl">
        Get in touch
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
        Tell us about your project, or reach out directly.
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
