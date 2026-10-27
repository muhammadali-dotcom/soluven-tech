import Link from "next/link";
import Image from "next/image";
import { portfolioProjects, type PortfolioProject } from "@/data/portfolio";
import { services } from "@/data/services";
import { FadeIn } from "@/components/motion/FadeIn";
import { sectionToneClasses, type SectionTone } from "@/lib/section-tone";
import { ProjectVisual } from "@/components/sections/ProjectVisual";

const linkClasses =
  "inline-flex w-fit items-center gap-1.5 text-sm font-semibold underline decoration-current underline-offset-4 transition-colors hover:text-[var(--color-blue-deep)]";

function ShowcaseRow({ project, index }: { project: PortfolioProject; index: number }) {
  const [name, subtitle] = project.title.split(":").map((part) => part.trim());
  const relatedService = services.find((s) => s.slug === project.relatedService);
  const meta = [`0${index + 1}`, relatedService?.name, "Independent build"]
    .filter(Boolean)
    .join(" · ");

  return (
    <article className="grid items-center gap-8 border-t border-[var(--color-border)] py-12 md:grid-cols-[1.15fr_1fr] md:gap-12 md:py-16">
      {/* Even rows put the screenshot on the right. */}
      <div
        className={`relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)] ${
          index % 2 === 1 ? "md:order-2" : ""
        }`}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`${name} screenshot`}
            fill
            sizes="(min-width: 768px) 480px, 100vw"
            className="object-cover object-left-top"
          />
        ) : (
          <ProjectVisual project={project} />
        )}
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-muted)]">
          {meta}
        </p>
        <h3 className="mt-4 font-[family-name:var(--font-heading)] text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
          {name}
        </h3>
        {subtitle && <p className="mt-1 text-sm text-[var(--color-muted)]">{subtitle}</p>}
        <p className="mt-5 text-base leading-relaxed text-[var(--color-ink)]">{project.outcome}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Built with">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="border border-[var(--color-border)] px-2.5 py-1 text-xs font-semibold text-[var(--color-ink)]"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          <Link href={`/portfolio#${project.slug}`} className={linkClasses}>
            View project →
          </Link>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className={linkClasses}>
              View code →
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function WorkTeaser({ tone = "cream" }: { tone?: SectionTone }) {
  return (
    <section className={sectionToneClasses[tone]}>
      <div className="page-container py-14 md:py-20 lg:py-28">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
            Selected work
          </p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="mt-6 max-w-2xl font-[family-name:var(--font-heading)] text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
            Products we&apos;ve built.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-4 max-w-2xl text-base text-[var(--color-muted)]">
            Independent products we designed and engineered end to end. Client
            work will join as engagements are delivered.
          </p>
        </FadeIn>

        <div className="mt-12 border-b border-[var(--color-border)]">
          {portfolioProjects
            .filter((project) => project.featured)
            .map((project, index) => (
              <FadeIn key={project.slug}>
                <ShowcaseRow project={project} index={index} />
              </FadeIn>
            ))}
        </div>

        <Link
          href="/portfolio"
          className="mt-8 inline-flex w-fit items-center gap-1.5 text-sm font-semibold underline decoration-current underline-offset-4"
        >
          See all work →
        </Link>
      </div>
    </section>
  );
}
