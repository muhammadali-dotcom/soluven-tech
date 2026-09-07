import Image from "next/image";
import type { PortfolioProject } from "@/data/portfolio";

export function PortfolioGrid({
  projects,
}: {
  projects: PortfolioProject[];
}) {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {projects.map((project) => (
        <div
          key={project.slug}
          className="overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm"
        >
          <div className="relative aspect-[16/10] w-full">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 border-b border-[var(--color-border)] bg-[var(--color-surface)] text-center">
                <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                  Case study coming soon
                </span>
                <span className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--color-text)]">
                  {project.title}
                </span>
              </div>
            )}
          </div>

          <div className="p-6">
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              {project.description}
            </p>
            {project.outcome && (
              <p className="mt-3 text-sm font-semibold text-[var(--color-blue)]">
                {project.outcome}
              </p>
            )}
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs font-semibold uppercase tracking-wide"
                >
                  {tech}
                </li>
              ))}
            </ul>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-[var(--color-blue)] hover:underline"
              >
                View project
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
