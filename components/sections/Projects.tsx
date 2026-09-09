import Link from "next/link";
import Image from "next/image";
import type { PortfolioProject } from "@/data/portfolio";
import { services } from "@/data/services";
import { FadeIn } from "@/components/motion/FadeIn";
import { CursorLabel } from "@/components/motion/CursorLabel";

export function Projects({ projects }: { projects: PortfolioProject[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => {
        const relatedService = services.find(
          (service) => service.slug === project.relatedService,
        );

        return (
          <FadeIn key={project.slug} delay={index * 0.1}>
            <div className="group flex h-full flex-col overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm">
              <CursorLabel label="View concept">
                <a
                  href={project.link ?? "#"}
                  aria-label={`View ${project.title} concept`}
                  className="block"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div
                        className={`flex h-full w-full items-center justify-center ${
                          project.category === "ecommerce"
                            ? "bg-gradient-to-br from-[var(--soluven-cream)] to-[var(--soluven-green)]/30"
                            : "bg-gradient-to-br from-[var(--soluven-cream)] to-[var(--soluven-blue)]/30"
                        } transition-transform duration-500 group-hover:scale-105`}
                      >
                        <span className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--color-ink)]">
                          {project.title}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 pb-0">
                    <span className="inline-block rounded-full border border-[var(--color-border)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                      {project.category} · Concept
                    </span>
                    <h3 className="mt-3 font-[family-name:var(--font-heading)] text-xl font-semibold transition-transform duration-300 group-hover:translate-x-1">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--color-muted)]">
                      {project.description}
                    </p>

                    <dl className="mt-5 space-y-3 border-t border-[var(--color-border)] pt-4 text-sm">
                      <div>
                        <dt className="font-semibold">Problem</dt>
                        <dd className="mt-1 text-[var(--color-muted)]">{project.problem}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold">Approach</dt>
                        <dd className="mt-1 text-[var(--color-muted)]">{project.approach}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold">Outcome</dt>
                        <dd className="mt-1 text-[var(--color-muted)]">{project.outcome}</dd>
                      </div>
                    </dl>
                  </div>
                </a>
              </CursorLabel>

              {relatedService && (
                <div className="p-6 pt-4">
                  <Link
                    href={`/services#${relatedService.slug}`}
                    className="text-sm font-semibold underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current hover:text-[var(--soluven-blue)]"
                  >
                    Built with our {relatedService.name} work →
                  </Link>
                </div>
              )}
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}
