import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { ServicesTeaser } from "@/components/sections/ServicesTeaser";
import { WhySoluvenTeaser } from "@/components/sections/WhySoluvenTeaser";
import { WhoWeWorkWith } from "@/components/sections/WhoWeWorkWith";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { WorkTeaser } from "@/components/sections/WorkTeaser";
import { ProjectWizard } from "@/components/sections/ProjectWizard";
import { Faq } from "@/components/sections/Faq";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Websites, online stores and custom software",
  description:
    "Soluven builds high-performing websites, ecommerce experiences and custom software for ambitious businesses.",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <ServicesTeaser />
      <WhySoluvenTeaser tone="dark" />
      <WhoWeWorkWith />
      <HowWeWork tone="dark" />
      <WorkTeaser />
      <ProjectWizard tone="dark" />
      <Faq />
      <CtaBanner />
    </>
  );
}
