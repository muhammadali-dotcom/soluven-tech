import { stats } from "@/data/stats";
import { Reveal } from "@/components/ui/Reveal";

export function StatsStrip() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
      <Reveal>
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-6 py-12 sm:grid-cols-3 md:px-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="font-[family-name:var(--font-heading)] text-4xl font-bold md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
