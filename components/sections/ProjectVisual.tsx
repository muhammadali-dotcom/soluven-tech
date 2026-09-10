import type { PortfolioProject } from "@/data/portfolio";

const accentByCategory: Record<PortfolioProject["category"], string> = {
  ecommerce: "--soluven-green",
  software: "--soluven-blue",
};

function ChromeBar({ accent }: { accent: string }) {
  return (
    <div className="flex items-center gap-1.5 px-4 pt-4">
      <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[var(--soluven-blue)]/60" />
      <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[var(--soluven-green)]/60" />
      <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[var(--soluven-ink)]/20" />
      <div className="ml-4 flex flex-1 items-center gap-2">
        <span aria-hidden="true" className="h-px w-8 bg-[var(--soluven-ink)]/20" />
        <span aria-hidden="true" className="h-px w-8 bg-[var(--soluven-ink)]/20" />
      </div>
      <span
        aria-hidden="true"
        className="h-3 w-10 rounded-full"
        style={{ background: `var(${accent})` }}
      />
    </div>
  );
}

function BrowserFrame({ accent }: { accent: string }) {
  return (
    <div className="w-[82%] max-w-[280px] rounded-xl border border-[var(--color-border)] bg-[var(--soluven-cream)] pb-4 shadow-xl transition-transform duration-500 group-hover:-translate-y-1">
      <ChromeBar accent={accent} />
      <div className="mt-3 grid grid-cols-2 gap-2 px-4">
        <div
          className="col-span-2 h-16 rounded-lg"
          style={{ background: `linear-gradient(135deg, var(${accent}) 0%, transparent 100%)`, opacity: 0.35 }}
        />
        <div className="h-10 rounded-lg bg-[var(--soluven-ink)]/[0.06]" />
        <div className="h-10 rounded-lg bg-[var(--soluven-ink)]/[0.06]" />
      </div>
    </div>
  );
}

function OpsFrame({ accent }: { accent: string }) {
  return (
    <div className="w-[82%] max-w-[280px] rounded-xl border border-[var(--color-border)] bg-[var(--soluven-cream)] pb-4 shadow-xl transition-transform duration-500 group-hover:-translate-y-1">
      <ChromeBar accent={accent} />
      <div className="mt-3 grid grid-cols-[44px_1fr] gap-2 px-4">
        <div className="row-span-3 h-full min-h-[92px] rounded-lg bg-[var(--soluven-ink)]" />
        <div
          className="h-6 rounded-md"
          style={{ background: `var(${accent})`, opacity: 0.4 }}
        />
        <div className="h-6 rounded-md bg-[var(--soluven-ink)]/[0.06]" />
        <div className="h-6 rounded-md bg-[var(--soluven-ink)]/[0.06]" />
      </div>
    </div>
  );
}

function MobileFrame({ accent }: { accent: string }) {
  return (
    <div className="w-[54%] max-w-[190px] rounded-[2rem] border-[6px] border-[var(--soluven-ink)] bg-[var(--soluven-cream)] p-3 shadow-xl transition-transform duration-500 group-hover:-translate-y-1">
      <div className="mx-auto mb-3 h-2.5 w-12 rounded-full bg-[var(--soluven-ink)]" />
      <div
        className="h-20 rounded-2xl"
        style={{ background: `linear-gradient(135deg, var(${accent}) 0%, transparent 100%)`, opacity: 0.4 }}
      />
      <div className="mt-2.5 h-9 rounded-xl bg-[var(--soluven-ink)]/[0.06]" />
      <div className="mt-2.5 h-9 rounded-xl bg-[var(--soluven-ink)]/[0.06]" />
    </div>
  );
}

export function ProjectVisual({ project }: { project: PortfolioProject }) {
  const accent = accentByCategory[project.category];

  return (
    <div
      aria-hidden="true"
      className="relative flex h-full min-h-[280px] w-full items-center justify-center overflow-hidden bg-[var(--color-surface)]"
    >
      <div
        className="absolute -left-10 -top-10 h-40 w-40 rounded-full opacity-70 blur-2xl"
        style={{ background: `radial-gradient(circle, var(${accent}) 0%, transparent 70%)` }}
      />
      <div
        className="absolute -bottom-12 -right-12 h-48 w-48 rounded-full opacity-60 mix-blend-multiply blur-2xl"
        style={{
          background: `radial-gradient(circle, var(${
            accent === "--soluven-blue" ? "--soluven-green" : "--soluven-blue"
          }) 0%, transparent 70%)`,
        }}
      />
      {project.visual === "browser" && <BrowserFrame accent={accent} />}
      {project.visual === "ops" && <OpsFrame accent={accent} />}
      {project.visual === "mobile" && <MobileFrame accent={accent} />}
    </div>
  );
}
