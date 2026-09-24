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

function ProjectLinks({
  project,
  relatedService,
}: {
  project: PortfolioProject;
  relatedService: (typeof services)[number] | undefined;
}) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
      {relatedService && (
        <Link
          href={`/services/${relatedService.slug}`}
          className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[var(--color-muted)] underline decoration-transparent underline-offset-4 transition-colors hover:text-[var(--soluven-blue)] hover:decoration-current"
        >
          Related service: {relatedService.name}&nbsp;→
        </Link>
      )}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[var(--color-muted)] underline decoration-transparent underline-offset-4 transition-colors hover:text-[var(--soluven-blue)] hover:decoration-current"
        >
          View code →
        </a>
      )}
    </div>
  );
}

function FeaturedProject({ project }: { project: PortfolioProject }) {
  const accent = accentByCategory[project.category];
  const relatedService = services.find((s) => s.slug === project.relatedService);

  return (
    <FadeIn>
      <article className="overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]">
        {/* Text */}
        <div className="p-8 md:p-12 lg:p-14">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] text-[var(--color-muted)]">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full"
              style={{ background: `var(${accent})` }}
            />
            {project.category} project · Featured
          </div>
          <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-heading)] text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl">
            {project.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
            {project.description}
          </p>
          <ProjectDetailDialog project={project} />
          <ProjectLinks project={project} relatedService={relatedService} />
        </div>

        {/* Full image — no cropping */}
        <div className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-8 pb-8 md:px-12 lg:px-14">
          {project.image ? (
            <div className="overflow-hidden rounded-md border border-[var(--color-border)]">
              <Image
                src={project.image}
                alt={project.title}
                width={1600}
                height={800}
                className="h-auto w-full"
                priority
              />
            </div>
          ) : (
            <div className="overflow-hidden rounded-md border border-[var(--color-border)]">
              <ProjectVisual project={project} />
            </div>
          )}
        </div>
      </article>
    </FadeIn>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: PortfolioProject;
  index: number;
}) {
  const accent = accentByCategory[project.category];
  const relatedService = services.find((s) => s.slug === project.relatedService);

  return (
    <FadeIn delay={index * 0.05}>
      <article className="flex h-full flex-col overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]">
        {/* Text */}
        <div className="flex flex-1 flex-col p-7">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] text-[var(--color-muted)]">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full"
              style={{ background: `var(${accent})` }}
            />
            {project.category} project
          </div>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-lg font-semibold leading-tight tracking-tight md:text-xl">
            {project.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
            {project.description}
          </p>
          <div className="mt-auto">
            <ProjectDetailDialog project={project} />
            <ProjectLinks project={project} relatedService={relatedService} />
          </div>
        </div>

        {/* Full image — no cropping */}
        <div className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-7 pb-7">
          {project.image ? (
            <div className="overflow-hidden rounded-md border border-[var(--color-border)]">
              <Image
                src={project.image}
                alt={project.title}
                width={1280}
                height={1046}
                className="h-auto w-full"
              />
            </div>
          ) : (
            <div className="overflow-hidden rounded-md border border-[var(--color-border)]">
              <ProjectVisual project={project} />
            </div>
          )}
        </div>
      </article>
    </FadeIn>
  );
}

export function Projects({ projects }: { projects: PortfolioProject[] }) {
  const [featured, ...rest] = projects;

  return (
    <div className="flex flex-col gap-10 md:gap-14">
      {featured && <FeaturedProject project={featured} />}

      {rest.length > 0 && (
        <div className="grid gap-8 sm:grid-cols-2 lg:gap-10">
          {rest.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}
