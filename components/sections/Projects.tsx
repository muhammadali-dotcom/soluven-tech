import Link from "next/link";
import Image from "next/image";
import type { PortfolioProject } from "@/data/portfolio";
import { services } from "@/data/services";
import { FadeIn } from "@/components/motion/FadeIn";
import { ProjectVisual } from "@/components/sections/ProjectVisual";
import { ProjectDetailDialog } from "@/components/sections/ProjectDetailDialog";

const accentByCategory: Record<PortfolioProject["category"], string> = {
  ecommerce: "--soluven-green",
  software: "--soluven-blue",
};

export function Projects({ projects }: { projects: PortfolioProject[] }) {
  return (
    <div className="flex flex-col gap-16 md:gap-20">
      {projects.map((project, index) => {
        const relatedService = services.find(
          (service) => service.slug === project.relatedService,
        );
        const accent = accentByCategory[project.category];
        const flip = index % 2 === 1;

        return (
          <FadeIn key={project.slug} delay={index * 0.05}>
            <article className="group grid gap-8 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-shadow duration-300 hover:shadow-xl lg:grid-cols-2 lg:items-stretch lg:gap-0">
              <div
                className={`flex flex-col justify-center p-8 md:p-12 ${flip ? "lg:order-2" : "lg:order-1"}`}
              >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] text-[var(--color-muted)]">
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 rounded-full"
                    style={{ background: `var(${accent})` }}
                  />
                  {project.category} concept · 0{index + 1}
                </div>
                <h3 className="mt-5 max-w-md font-[family-name:var(--font-heading)] text-xl font-semibold leading-tight tracking-tight md:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-4 max-w-md text-[var(--color-muted)]">{project.description}</p>

                <ProjectDetailDialog project={project} />

                {relatedService && (
                  <Link
                    href={`/services/${relatedService.slug}`}
                    className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[var(--color-muted)] underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current hover:text-[var(--soluven-blue)]"
                  >
                    Built with our {relatedService.name} work →
                  </Link>
                )}
              </div>

              <div
                className={`relative min-h-[280px] w-full overflow-hidden ${flip ? "lg:order-1" : "lg:order-2"}`}
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <ProjectVisual project={project} />
                )}
              </div>
            </article>
          </FadeIn>
        );
      })}
    </div>
  );
}
