import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { portfolioProjects } from "@/data/portfolio";

export default function HomePage() {
  const featured = portfolioProjects.filter((project) => project.featured);

  return (
    <>
      <Hero />
      <ServicesGrid />
      <section className="mx-auto max-w-[1280px] px-6 py-16 md:px-16 md:py-24">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold md:text-4xl">
          Featured work
        </h2>
        <div className="mt-10">
          <PortfolioGrid projects={featured} />
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
