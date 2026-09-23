import Link from "next/link";
import Image from "next/image";
import { portfolioProjects } from "@/data/portfolio";
import { FadeIn } from "@/components/motion/FadeIn";
import { ProjectVisual } from "@/components/sections/ProjectVisual";

export function WorkTeaser() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-20 md:px-[85px] md:py-28">
      <FadeIn>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Selected work
        </p>
      </FadeIn>
      <FadeIn delay={0.05}>
        <h2 className="mt-6 max-w-2xl font-[family-name:var(--font-heading)] text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
          Projects we&apos;ve shipped.
        </h2>
      </FadeIn>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {portfolioProjects.filter((project) => project.featured).map((project) => (
          <FadeIn key={project.slug} delay={0.05}>
            <div className="group flex h-full flex-col overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <ProjectVisual project={project} />
                )}
              </div>
              <div className="p-6">
                <p className="font-[family-name:var(--font-heading)] text-lg font-semibold">
                  {project.title}
                </p>
                <p className="mt-2 text-sm text-[var(--color-muted)]">{project.description}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <Link
        href="/portfolio"
        className="mt-8 inline-flex w-fit items-center gap-1.5 text-sm font-semibold underline decoration-current underline-offset-4"
      >
        See all work →
      </Link>
    </section>
  );
}
