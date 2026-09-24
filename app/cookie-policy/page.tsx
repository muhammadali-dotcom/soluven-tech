import type { Metadata } from "next";
import { buildMetadata, breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { contactEmail, siteConfig } from "@/lib/constants";
import { CookieSettingsButton } from "@/components/layout/CookieSettingsButton";

export const metadata: Metadata = buildMetadata({
  title: "Cookie policy",
  description:
    "How Soluven uses cookies and browser storage, what each one does, how long it lasts, and how to change your choices.",
  path: "/cookie-policy",
});

// Keep this table in step with what the site actually stores (lib/consent.ts,
// components/layout/WelcomePopup.tsx, components/sections/PageLoader.tsx).
const storedItems = [
  {
    name: "soluven_consent",
    type: "Cookie",
    purpose: "Remembers your cookie choices so we don't ask again.",
    duration: "180 days",
  },
  {
    name: "soluven-welcome-v3",
    type: "Local storage",
    purpose: "Remembers that you closed the welcome popup.",
    duration: "7 days",
  },
  {
    name: "soluven-loaded",
    type: "Session storage",
    purpose: "Shows the loading screen only once per visit.",
    duration: "Until you close the tab",
  },
];

const headingClasses =
  "font-[family-name:var(--font-heading)] text-xl font-semibold tracking-tight md:text-2xl";
const bodyClasses = "mt-3 text-base leading-relaxed text-[var(--color-muted)]";

export default function CookiePolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Cookie policy", url: `${siteConfig.url}/cookie-policy` },
        ])}
      />

      <section className="mx-auto max-w-[1280px] px-6 pt-16 md:px-[85px] md:pt-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Legal
        </p>
        <h1 className="mt-4 max-w-2xl font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Cookie policy
        </h1>
        <p className="mt-5 text-sm text-[var(--color-muted)]">Last updated 24 September 2026</p>
      </section>

      <section className="page-container flex flex-col gap-12 py-16 md:py-24">
        <div className="max-w-2xl">
          <h2 className={headingClasses}>What cookies are</h2>
          <p className={bodyClasses}>
            Cookies are small text files a website saves in your browser. Sites also use similar
            browser storage (local storage and session storage) to remember things between pages or
            visits. This page covers both.
          </p>
        </div>

        <div className="max-w-2xl">
          <h2 className={headingClasses}>How we use them</h2>
          <p className={bodyClasses}>
            We keep this to a minimum. Everything we store today is necessary for the site to work
            the way you&apos;d expect, and none of it is used to track you or show you ads.
          </p>
        </div>

        <div>
          <h2 className={headingClasses}>What we store</h2>
          <div className="mt-5 overflow-x-auto rounded-lg border border-[var(--color-border)]">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-[var(--color-surface)]">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">Name</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Type</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Purpose</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
                {storedItems.map((item) => (
                  <tr key={item.name}>
                    <td className="px-4 py-3 font-mono text-xs">{item.name}</td>
                    <td className="px-4 py-3">{item.type}</td>
                    <td className="px-4 py-3 text-[var(--color-muted)]">{item.purpose}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{item.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-[var(--color-muted)]">All of these are necessary and are always on.</p>
        </div>

        <div className="max-w-2xl">
          <h2 className={headingClasses}>Analytics and marketing cookies</h2>
          <p className={bodyClasses}>
            We don&apos;t currently use any analytics or marketing cookies. If we add them in the
            future, they&apos;ll only load after you accept them, and we&apos;ll list them on this
            page.
          </p>
        </div>

        <div className="max-w-2xl">
          <h2 className={headingClasses}>Links to other sites</h2>
          <p className={bodyClasses}>
            Our site links to WhatsApp, Facebook and Instagram. Those services may set their own
            cookies once you visit them, under their own policies.
          </p>
        </div>

        <div className="max-w-2xl">
          <h2 className={headingClasses}>Changing your choice</h2>
          <p className={bodyClasses}>
            You can change your cookie choices at any time. You can also clear or block cookies in
            your browser settings, though some parts of the site may not work as expected.
          </p>
          <CookieSettingsButton className="mt-5 inline-flex items-center justify-center rounded-md border border-[var(--color-border)] px-6 py-3 font-semibold text-[var(--color-text)] transition-colors hover:bg-[var(--color-surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ink)]" />
        </div>

        <div className="max-w-2xl">
          <h2 className={headingClasses}>Contact</h2>
          <p className={bodyClasses}>
            Questions about this policy? Email us at{" "}
            <a href={`mailto:${contactEmail}`} className="font-semibold text-[var(--color-ink)] underline underline-offset-4">
              {contactEmail}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
