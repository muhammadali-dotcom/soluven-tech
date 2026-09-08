import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Manifesto } from "@/components/sections/Manifesto";
import { WhatWeBelieve } from "@/components/sections/WhatWeBelieve";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Work } from "@/components/sections/Work";
import { Process } from "@/components/sections/Process";
import { Faq } from "@/components/sections/Faq";
import { CtaBanner } from "@/components/sections/CtaBanner";
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
      <Work />
      <Process />
      <Faq />
      <CtaBanner />
    </>
  );
}
