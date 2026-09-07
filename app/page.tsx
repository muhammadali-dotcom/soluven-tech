import { Hero } from "@/components/sections/Hero";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { portfolioProjects } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";

export default function HomePage() {
  const featured = portfolioProjects.filter((project) => project.featured);

  return (
    <>
      <Hero />
      <StatsStrip />
      <ServicesGrid />
      <section className="mx-auto max-w-[1280px] px-6 py-16 md:px-16 md:py-24">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold md:text-4xl">
          Featured work
        </h2>
        <Reveal className="mt-10">
          <PortfolioGrid projects={featured} />
        </Reveal>
      </section>
      <Process />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
