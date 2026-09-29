import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { buildMetadata, breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { contactEmail, siteConfig } from "@/lib/constants";
import { CookieSettingsButton } from "@/components/layout/CookieSettingsButton";

export const metadata: Metadata = buildMetadata({
  title: "Privacy policy",
  description:
    "What personal information Soluven collects through this website, why, who it's shared with, how long it's kept and how to ask us to change or delete it.",
  path: "/privacy",
});

// Keep this page in step with what the site actually does (app/api/contact,
// lib/rate-limit.ts, lib/consent.ts, app/cookie-policy/page.tsx).

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

const email = (
  <a href={`mailto:${contactEmail}`} className={linkClasses}>
    {contactEmail}
  </a>
);

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Privacy policy", url: `${siteConfig.url}/privacy` },
        ])}
      />

      <section className="mx-auto max-w-[1280px] px-6 pt-16 md:px-[85px] md:pt-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Legal
        </p>
        <h1 className="mt-4 max-w-2xl font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Privacy policy
        </h1>
        <p className="mt-5 text-sm text-[var(--color-muted)]">Last updated 29 September 2026</p>
      </section>

      <section className="page-container flex flex-col gap-12 py-16 md:py-24">
        <Section title="Who we are">
          <p className={bodyClasses}>
            This website is run by {siteConfig.legalName} (&quot;Soluven&quot;, &quot;we&quot;),
            a studio that builds websites, online stores and custom software. If you have any
            question about your information, email us at {email}.
          </p>
        </Section>

        <Section title="What we collect">
          <ul className={`${bodyClasses} list-disc space-y-2 pl-5`}>
            <li>
              <strong className="text-[var(--color-ink)]">What you send us.</strong> When you use
              the contact form or the project planner, we receive your name, email address and
              message, plus anything optional you add, such as your company, budget or project
              details.
            </li>
            <li>
              <strong className="text-[var(--color-ink)]">Technical data.</strong> Your IP address
              is used briefly to stop spam submissions and is not stored by us. Our hosting provider
              keeps standard server logs, such as request times and browser type, to run and
              secure the site.
            </li>
            <li>
              <strong className="text-[var(--color-ink)]">Cookies and browser storage.</strong>{" "}
              A few small items remember your choices. Our{" "}
              <Link href="/cookie-policy" className={linkClasses}>
                cookie policy
              </Link>{" "}
              lists each one.
            </li>
          </ul>
        </Section>

        <Section title="How we use it">
          <p className={bodyClasses}>
            We use what you send us only to reply to your enquiry and, if you choose, to talk
            about a project with you. We don&apos;t sell your information, add you to marketing
            lists or use it to make automated decisions about you.
          </p>
        </Section>

        <Section title="Analytics and marketing">
          <p className={bodyClasses}>
            We don&apos;t currently run any analytics or marketing tools. If we add them later,
            they&apos;ll only load after you agree to them in the cookie banner, and we&apos;ll
            update this page and the cookie policy.
          </p>
        </Section>

        <Section title="Who we share it with">
          {/* TODO: name the email provider here once ARCHITECTURE.md's contact backend item is decided. */}
          <p className={bodyClasses}>
            We only share your information with the services that help us run this site: our
            hosting provider (Vercel) and the email service we use to receive messages. We
            don&apos;t share it with anyone else unless the law requires us to.
          </p>
        </Section>

        <Section title="How long we keep it">
          <p className={bodyClasses}>
            We keep your messages for as long as we need them to handle your enquiry and any
            project that follows, then delete them. You can ask us to delete them sooner at any
            time.
          </p>
        </Section>

        <Section title="Your choices">
          <p className={bodyClasses}>
            You can ask us what information we hold about you, and ask us to correct or delete it,
            by emailing {email}. You can also change your cookie choices at any time.
          </p>
          <CookieSettingsButton className="mt-5 inline-flex items-center justify-center rounded-md border border-[var(--color-border)] px-6 py-3 font-semibold text-[var(--color-text)] transition-colors hover:bg-[var(--color-surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ink)]" />
        </Section>

        <Section title="Links to other sites">
          <p className={bodyClasses}>
            Our site links to WhatsApp, Facebook, Instagram and some project pages hosted
            elsewhere. Those sites have their own privacy policies, and we&apos;re not responsible
            for how they handle your information.
          </p>
        </Section>

        <Section title="Changes to this policy">
          <p className={bodyClasses}>
            If we change how we handle your information, we&apos;ll update this page and the date
            at the top.
          </p>
        </Section>
      </section>
    </>
  );
}
