import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Manifesto } from "@/components/sections/Manifesto";
import { WhatWeBelieve } from "@/components/sections/WhatWeBelieve";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { Faq } from "@/components/sections/Faq";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FadeIn } from "@/components/motion/FadeIn";
import { portfolioProjects } from "@/data/portfolio";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Building solutions for the future you see",
  description:
    "Soluven builds high-performing websites, ecommerce experiences and custom software for ambitious businesses.",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Manifesto />
      <WhatWeBelieve />
      <ServicesGrid />
      <section id="work" className="mx-auto max-w-[1280px] px-6 py-20 md:px-16 md:py-28 scroll-mt-24">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
            Chapter 04 · Selected directions
          </p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="mt-6 max-w-2xl font-[family-name:var(--font-heading)] text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Ideas made tangible.
          </h2>
        </FadeIn>
        <FadeIn delay={0.08}>
          <p className="mt-4 max-w-xl text-[var(--color-muted)]">
            Concepts showing how Soluven can shape different kinds of
            digital businesses.
          </p>
        </FadeIn>
        <div className="mt-12">
          <Projects projects={portfolioProjects} />
        </div>
      </section>
      <Process />
      <Faq />
      <CtaBanner />
    </>
  );
}
