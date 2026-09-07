import { Card } from "@/components/ui/Card";
import type { PortfolioProject } from "@/data/portfolio";

export function PortfolioGrid({
  projects,
}: {
  projects: PortfolioProject[];
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Card key={project.slug}>
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">
            {project.description}
          </p>
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
        </Card>
      ))}
    </div>
  );
}
