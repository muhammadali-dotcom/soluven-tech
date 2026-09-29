import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { buildMetadata, breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { contactEmail, siteConfig } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Terms of use",
  description:
    "The terms for using the Soluven website: how you can use it, who owns the content, and the limits of what the site promises.",
  path: "/terms",
});

const headingClasses =
  "font-[family-name:var(--font-heading)] text-xl font-semibold tracking-tight md:text-2xl";
const bodyClasses = "mt-3 text-base leading-relaxed text-[var(--color-muted)]";
const linkClasses = "font-semibold text-[var(--color-ink)] underline underline-offset-4";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="max-w-2xl">
      <h2 className={headingClasses}>{title}</h2>
      {children}
    </div>
  );
}

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Terms of use", url: `${siteConfig.url}/terms` },
        ])}
      />

      <section className="mx-auto max-w-[1280px] px-6 pt-16 md:px-[85px] md:pt-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Legal
        </p>
        <h1 className="mt-4 max-w-2xl font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Terms of use
        </h1>
        <p className="mt-5 text-sm text-[var(--color-muted)]">Last updated 29 September 2026</p>
      </section>

      <section className="page-container flex flex-col gap-12 py-16 md:py-24">
        <Section title="About these terms">
          <p className={bodyClasses}>
            These terms cover your use of this website, run by {siteConfig.legalName}{" "}
            (&quot;Soluven&quot;, &quot;we&quot;). By using the site, you agree to them. Any project
            we work on together is covered by a separate written agreement, not by these terms.
          </p>
        </Section>

        <Section title="Using the site">
          <p className={bodyClasses}>
            You&apos;re welcome to browse the site and get in touch with us. Please don&apos;t use
            it for anything unlawful, try to disrupt or break into it, copy it in bulk with
            automated tools, or send spam or misleading messages through the contact form.
          </p>
        </Section>

        <Section title="Our content">
          <p className={bodyClasses}>
            The text, design, logo, illustrations and project showcases on this site belong to
            Soluven unless we say otherwise. You can share links to any page. Please ask us before
            copying or reusing our content anywhere else.
          </p>
        </Section>

        <Section title="Information on the site">
          <p className={bodyClasses}>
            Service descriptions and &quot;from&quot; prices are a general guide, not an offer.
            The scope and price of any project are confirmed in writing before work starts. The
            projects on our{" "}
            <Link href="/portfolio" className={linkClasses}>
              work page
            </Link>{" "}
            are independent products we built, not client case studies.
          </p>
        </Section>

        <Section title="Links to other sites">
          <p className={bodyClasses}>
            We link to other websites, such as WhatsApp, Facebook, Instagram and project pages
            hosted elsewhere. We don&apos;t control those sites and aren&apos;t responsible for
            their content or how they work.
          </p>
        </Section>

        <Section title="No guarantees">
          <p className={bodyClasses}>
            We work to keep the site accurate and available, but we provide it as it is. We
            can&apos;t promise it will always be error free or online.
          </p>
        </Section>

        <Section title="Limitation of liability">
          <p className={bodyClasses}>
            To the extent the law allows, we&apos;re not liable for any loss or damage that comes
            from using this site or relying on its content.
          </p>
        </Section>

        <Section title="Changes to these terms">
          <p className={bodyClasses}>
            We may update these terms from time to time. When we do, we&apos;ll change the date at
            the top of this page.
          </p>
        </Section>

        <Section title="Contact">
          <p className={bodyClasses}>
            Questions about these terms? Email us at{" "}
            <a href={`mailto:${contactEmail}`} className={linkClasses}>
              {contactEmail}
            </a>
            .
          </p>
        </Section>
      </section>
    </>
  );
}
