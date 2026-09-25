import type { Metadata } from "next";
import { buildMetadata, breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/motion/FadeIn";

export const metadata: Metadata = buildMetadata({
  title: "Why Soluven",
  description:
    "We focus on building the right thing, with clear communication, thoughtful decisions, and technology that serves a purpose.",
  path: "/why-soluven",
});

const differentiators = [
  {
    number: "01",
    title: "We Think Before We Build",
    description:
      "We take time to understand the problem before jumping into development.",
  },
  {
    number: "02",
    title: "You Work With The People Building It",
    description:
      "No unnecessary layers or confusing handoffs. Communication stays direct.",
  },
  {
    number: "03",
    title: "We Keep Things Clear",
    description:
      "Clear scope, realistic expectations, and straightforward communication from start to finish.",
  },
  {
    number: "04",
    title: "We Build For The Long Term",
    description:
      "We care about maintainability, reliability, and what happens after launch, not just getting something out the door.",
  },
];

export default function WhySoluvenPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Why Soluven", url: `${siteConfig.url}/why-soluven` },
        ])}
      />

      <PageHero
        theme="dark"
        motion="fan"
        background="alignment"
        eyebrow="The Soluven difference"
        headline={["You'll always know", "what's happening", "and why."]}
        description="Hiring a developer shouldn't feel like a gamble. We keep scope clear, talk to you directly and build things that keep working long after launch."
        primaryCta={{ label: "Start a project", href: "/contact" }}
        secondaryCta={{ label: "See our work", href: "/portfolio" }}
        items={[
          { title: "Think first", label: "Problem before code" },
          { title: "Direct access", label: "No handoffs" },
          { title: "Clear scope", label: "No surprises" },
          { title: "Built to last", label: "Beyond launch day" },
        ]}
      />

      {/* 2. What Makes Us Different */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-ink)]">
        <div className="page-container py-20 md:py-28">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--soluven-cream)]/50">
              What Makes Us Different
            </p>
          </FadeIn>
          <div className="mt-10 divide-y divide-[var(--soluven-cream)]/10 border-t border-[var(--soluven-cream)]/10">
            {differentiators.map((item, index) => (
              <FadeIn key={item.number} delay={index * 0.05}>
                <div className="flex flex-col gap-2 py-8 sm:flex-row sm:items-start sm:gap-10">
                  <span className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--soluven-blue)] sm:w-16 sm:shrink-0">
                    {item.number}
                  </span>
                  <div>
                    <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--soluven-cream)]">
                      {item.title}
                    </h2>
                    <p className="mt-2 max-w-xl text-[var(--soluven-cream)]/60">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Commitment */}
      <section className="border-t border-[var(--color-border)]">
        <div className="page-container py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                Our Commitment
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
                Built around your goals.
              </h2>
            </FadeIn>
            <FadeIn delay={0.05}>
              <p className="text-base leading-relaxed text-[var(--color-muted)]">
                Every project is different. We don&apos;t believe in forcing
                businesses into predefined solutions. We listen, understand the
                context, and shape our approach around what actually makes sense
                for you.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
