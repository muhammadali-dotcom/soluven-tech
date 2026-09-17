import Link from "next/link";
import {
  ArrowRight,
  Gem,
  Grid3x3,
  Images,
  Palette,
  ShieldCheck,
  Shapes,
  Sparkles,
  Type,
  Zap,
} from "lucide-react";

const benefits = [
  { label: "Unique & custom designs", icon: Gem },
  { label: "Fast & reliable process", icon: Zap },
  { label: "Full ownership & source files", icon: ShieldCheck },
] as const;

const brandSystemItems = [
  { label: "Logo", icon: Sparkles, active: true },
  { label: "Typography", icon: Type, active: false },
  { label: "Colors", icon: Palette, active: false },
  { label: "Icons", icon: Grid3x3, active: false },
  { label: "Guidelines", icon: Images, active: false },
] as const;

export function LogoDesignHero() {
  return (
    <section className="website-dev-hero logo-design-hero overflow-hidden bg-[var(--soluven-cream)]">
      <div className="mx-auto grid min-h-[calc(100svh-78px)] max-w-[1280px] items-center gap-8 px-6 py-9 md:px-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-10 lg:py-10 xl:px-16">
        <div className="relative z-10 max-w-[460px] animate-hero-enter">
          <Link
            href="/services"
            className="inline-flex items-center text-sm font-bold text-[#14272B] underline decoration-transparent underline-offset-4 transition-colors hover:text-[var(--soluven-blue)] hover:decoration-current"
          >
            ← All services
          </Link>

          <p className="ld-eyebrow mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.42em] text-[var(--soluven-blue)] max-md:mt-6 max-sm:tracking-[0.28em]">
            Logo design
            <span aria-hidden="true" className="ld-eyebrow-line" />
          </p>

          <h1 className="mt-4 max-w-[460px] font-[family-name:var(--font-heading)] text-[30px] font-extrabold leading-[1.12] text-[#14272B] md:text-[34px] lg:text-[38px] xl:text-[42px]">
            A logo people
            <br />
            <span className="text-[var(--soluven-blue)]">remember.</span>
          </h1>

          <p className="mt-4 max-w-[460px] text-sm font-medium leading-[1.5] text-[#526672] md:text-[15px]">
            We design modern, meaningful logos that capture your brand&apos;s story and make a
            lasting impression.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[var(--soluven-blue)] px-6 text-sm font-extrabold text-[#14272B] shadow-[0_18px_40px_rgba(99,203,248,0.28)] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14272B]"
            >
              Start your project
              <ArrowRight
                aria-hidden="true"
                size={16}
                strokeWidth={2.6}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/work"
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-[rgba(20,39,43,0.2)] bg-white/25 px-6 text-sm font-extrabold text-[#14272B] transition-colors hover:bg-white/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14272B]"
            >
              View our work
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {benefits.map(({ label, icon: Icon }, index) => (
              <div key={label} className="flex items-center gap-2.5">
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                    index === 1
                      ? "bg-[#7ED957]/20 text-[#13a865]"
                      : "bg-[#63CBF8]/18 text-[#00a8d9]"
                  }`}
                >
                  <Icon aria-hidden="true" size={15} strokeWidth={2.3} />
                </span>
                <span className="text-xs font-bold leading-tight text-[#14272B]">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="ld-stage relative min-h-[600px] animate-hero-enter [animation-delay:120ms] max-lg:min-h-[500px] max-sm:min-h-[380px]">
          <div aria-hidden="true" className="wd-orb wd-orb-cyan" />
          <div aria-hidden="true" className="wd-orb wd-orb-green" />
          <div aria-hidden="true" className="ld-orbit" />
          <div aria-hidden="true" className="ld-grid" />
          <span aria-hidden="true" className="ld-node ld-node-a" />
          <span aria-hidden="true" className="ld-node ld-node-b" />
          <span aria-hidden="true" className="ld-node ld-node-c" />
          <span aria-hidden="true" className="ld-node ld-node-d" />

          <div className="ld-logo-mark" aria-hidden="true">
            <span className="ld-ribbon ld-ribbon-blue" />
            <span className="ld-ribbon ld-ribbon-green" />
          </div>

          <div className="ld-card ld-card-shape">
            <div className="ld-card-head">
              <Shapes aria-hidden="true" size={16} className="text-[#00a8d9]" />
              <strong>Shape</strong>
            </div>
            <p>Curves. Balance. Harmony.</p>
            <div className="ld-shape-row">
              <i className="ld-shape-circle" />
              <i className="ld-shape-tri" />
              <i className="ld-shape-square" />
              <i className="ld-shape-blob" />
            </div>
          </div>

          <div className="ld-card ld-card-type">
            <div className="ld-card-head">
              <span className="ld-type-glyph">Aa</span>
              <strong>Type</strong>
            </div>
            <p>Clean. Modern. Bold.</p>
            <div className="ld-type-bars">
              <i className="ld-bar-blue" />
              <i className="ld-bar-ink" />
              <i className="ld-bar-muted" />
            </div>
          </div>

          <div className="ld-card ld-card-concept">
            <div className="ld-concept-cell ld-concept-rough">
              <span className="ld-rough-mark" />
              <em>Concept</em>
            </div>
            <ArrowRight aria-hidden="true" size={14} className="ld-concept-arrow" />
            <div className="ld-concept-cell ld-concept-final">
              <span className="ld-final-mark" />
              <em>Final</em>
            </div>
          </div>

          <div className="ld-card ld-card-color">
            <div className="ld-card-head">
              <strong>Color</strong>
            </div>
            <div className="ld-color-row">
              <i className="ld-color-ink" />
              <i className="ld-color-blue" />
              <i className="ld-color-green" />
            </div>
            <p>Fresh. Trust. Growth.</p>
          </div>

          <div className="ld-card ld-card-grid">
            <div className="ld-card-head">
              <strong>Grid</strong>
            </div>
            <div className="ld-grid-glyph">
              {Array.from({ length: 9 }).map((_, i) => (
                <i key={i} />
              ))}
            </div>
            <p>Structure. Precision. Scale.</p>
          </div>

          <div className="ld-card ld-card-system">
            <div className="ld-system-head">
              <strong>Brand System</strong>
              <span className="ld-system-dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
            </div>
            <ul className="ld-system-list">
              {brandSystemItems.map(({ label, icon: Icon, active }) => (
                <li key={label} className={active ? "is-active" : undefined}>
                  <Icon aria-hidden="true" size={14} />
                  <span>{label}</span>
                  {active && <ArrowRight aria-hidden="true" size={12} className="ml-auto" />}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
