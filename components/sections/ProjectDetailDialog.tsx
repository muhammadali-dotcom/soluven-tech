"use client";

import { useRef } from "react";
import { ArrowRight, X } from "lucide-react";
import type { PortfolioProject } from "@/data/portfolio";

export function ProjectDetailDialog({ project }: { project: PortfolioProject }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = `${project.slug}-dialog-title`;

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold underline decoration-current underline-offset-4"
      >
        Explore the thinking
        <ArrowRight aria-hidden="true" size={14} />
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        className="w-[min(680px,calc(100vw-2rem))] rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-0 text-[var(--color-ink)] shadow-2xl backdrop:bg-[var(--soluven-ink)]/55 backdrop:backdrop-blur-sm"
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current?.close();
        }}
      >
        <div className="flex items-center justify-between border-b border-[var(--color-border)] px-6 py-5 md:px-8">
          <strong id={titleId} className="font-[family-name:var(--font-heading)] text-base font-semibold">
            {project.title}
          </strong>
          <button
            type="button"
            aria-label="Close concept details"
            onClick={() => dialogRef.current?.close()}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] transition-colors hover:bg-[var(--color-background)]"
          >
            <X aria-hidden="true" size={16} />
          </button>
        </div>
        <div className="grid gap-6 px-6 py-7 sm:grid-cols-3 md:px-8">
          <div>
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[var(--soluven-blue)]">
              Problem
            </span>
            <p className="text-sm leading-relaxed text-[var(--color-muted)]">{project.problem}</p>
          </div>
          <div>
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[var(--soluven-blue)]">
              Approach
            </span>
            <p className="text-sm leading-relaxed text-[var(--color-muted)]">{project.approach}</p>
          </div>
          <div>
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[var(--soluven-blue)]">
              Outcome
            </span>
            <p className="text-sm leading-relaxed text-[var(--color-muted)]">{project.outcome}</p>
          </div>
        </div>
      </dialog>
    </>
  );
}
