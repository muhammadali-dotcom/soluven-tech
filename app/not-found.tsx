import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { LinkButton } from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${siteConfig.name} - Page not found`,
  robots: { index: false },
};

const headline = ["We build a lot", "of things. This page", "isn't one of them. Yet."];

export default function NotFound() {
  return (
    <section className="section-dark relative flex min-h-[calc(100svh-78px)] flex-col overflow-hidden bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="mx-auto grid w-full max-w-[1280px] flex-1 items-center gap-14 px-6 py-16 md:px-[85px] md:py-20 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2.5 rounded-md border border-[var(--color-border)] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
            <span aria-hidden="true" className="h-1.5 w-1.5 bg-[var(--soluven-blue)]" />
            404
          </p>

          <h1 className="mt-7 font-[family-name:var(--font-heading)] text-[clamp(1.85rem,3.7vw,3.5rem)] font-extrabold uppercase leading-[1.02] tracking-[-0.02em]">
            {headline.map((line, index) => (
              <span key={index} className="block overflow-hidden pb-[0.06em]">
                <span
                  className={`hero-line-rise text-balance ${
                    index === headline.length - 1 ? "text-[var(--soluven-blue)]" : ""
                  }`}
                  style={{ "--line-delay": `${index * 120}ms` } as CSSProperties}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-[480px] text-base leading-[1.6] text-[var(--color-text-muted)] md:text-lg">
            The link may be broken or the page may have moved. If there&apos;s
            something you wish was here, tell us and we&apos;ll build it.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <LinkButton href="/">Back to home</LinkButton>
            <LinkButton href="/contact" variant="secondary">
              Start a project
            </LinkButton>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="/soluven_icon.png"
            alt=""
            width={520}
            height={520}
            priority
            className="h-auto w-full max-w-[320px] animate-hero-enter lg:max-w-[520px]"
          />
        </div>
      </div>
    </section>
  );
}
