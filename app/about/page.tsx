import type { Metadata } from "next";
import { buildMetadata, breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";
import { FadeIn } from "@/components/motion/FadeIn";
import { LinkButton } from "@/components/ui/Button";
import { AboutHero } from "@/components/sections/AboutHero";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Soluven is a technology studio built around a simple idea: good technology should solve real problems. Learn about our story, principles, and vision.",
  path: "/about",
});

const principles = [
  {
    number: "01",
    title: "Purpose",
    description: "Everything we build should have a reason behind it.",
  },
  {
    number: "02",
    title: "Simplicity",
    description: "Complex problems don't always need complicated solutions.",
  },
  {
    number: "03",
    title: "Ownership",
    description: "We care about the product beyond simply delivering it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "About", url: `${siteConfig.url}/about` },
        ])}
      />

      {/* 1. Hero — dark with beams */}
      <AboutHero />

      {/* 2. Our Story — cream */}
      <section className="border-t border-[var(--color-border)]">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-[85px] md:py-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                Our Story
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-2xl font-semibold leading-tight tracking-tight text-[var(--color-ink)] md:text-3xl">
                Why Soluven exists
              </h2>
            </FadeIn>
            <FadeIn delay={0.05}>
              <p className="text-base leading-relaxed text-[var(--color-muted)]">
                Soluven was created with a desire to approach technology
                differently — focusing less on simply delivering features and
                more on understanding why something needs to be built in the
                first place. We believe the best solutions come from combining
                curiosity, creativity, and engineering.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. Our Principles — dark */}
      <section className="section-dark bg-[var(--color-background)] text-[var(--color-ink)]">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-[85px] md:py-28">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Our Principles
            </p>
          </FadeIn>
          <div className="mt-10 divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
            {principles.map((principle, index) => (
              <FadeIn key={principle.number} delay={index * 0.05}>
                <div className="flex flex-col gap-2 py-8 sm:flex-row sm:items-start sm:gap-10">
                  <span className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--soluven-blue)] sm:w-16 sm:shrink-0">
                    {principle.number}
                  </span>
                  <div>
                    <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--color-ink)]">
                      {principle.title}
                    </h2>
                    <p className="mt-2 max-w-xl text-[var(--color-muted)]">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Vision — cream */}
      <section className="border-t border-[var(--color-border)]">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-[85px] md:py-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                Our Vision
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-2xl font-semibold leading-tight tracking-tight text-[var(--color-ink)] md:text-3xl">
                Where we&apos;re going
              </h2>
            </FadeIn>
            <FadeIn delay={0.05}>
              <p className="text-base leading-relaxed text-[var(--color-muted)]">
                We want to build Soluven into a technology company known for
                creating thoughtful, useful, and lasting digital products —
                while helping businesses turn ideas into something real.
              </p>
              <div className="mt-8">
                <LinkButton href="/contact" variant="primary">
                  Let&apos;s build something meaningful &rarr;
                </LinkButton>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
