"use client";

import { ArrowUp } from "lucide-react";

function handleClick() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
}

export function BackToTopButton() {
  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Back to top"
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-ink)] transition-colors hover:border-[var(--soluven-blue)] hover:text-[var(--soluven-blue)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ink)]"
    >
      <ArrowUp size={16} aria-hidden="true" />
    </button>
  );
}
