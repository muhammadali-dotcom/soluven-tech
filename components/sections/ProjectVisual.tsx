import { ShoppingCart, Code2 } from "lucide-react";
import type { PortfolioProject } from "@/data/portfolio";

const categoryIcons: Record<PortfolioProject["category"], typeof ShoppingCart> = {
  ecommerce: ShoppingCart,
  software: Code2,
};

export function ProjectVisual({ project }: { project: PortfolioProject }) {
  const Icon = categoryIcons[project.category];
  const isEcommerce = project.category === "ecommerce";

  return (
    <div
      aria-hidden="true"
      className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[var(--soluven-cream)]"
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(color-mix(in srgb, var(--soluven-ink) 12%, transparent) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />
      <div
        className="absolute -left-10 -top-10 h-40 w-40 rounded-full opacity-70 blur-2xl"
        style={{
          background: `radial-gradient(circle, var(${
            isEcommerce ? "--soluven-green" : "--soluven-blue"
          }) 0%, transparent 70%)`,
        }}
      />
      <div
        className="absolute -bottom-12 -right-12 h-48 w-48 rounded-full opacity-70 mix-blend-multiply blur-2xl"
        style={{
          background: `radial-gradient(circle, var(${
            isEcommerce ? "--soluven-blue" : "--soluven-green"
          }) 0%, transparent 70%)`,
        }}
      />
      <Icon
        size={72}
        strokeWidth={1.25}
        className="relative text-[var(--soluven-ink)]/25"
      />
      <span className="absolute bottom-4 right-4 font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wide text-[var(--soluven-ink)]/40">
        {project.title}
      </span>
    </div>
  );
}
