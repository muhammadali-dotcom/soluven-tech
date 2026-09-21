import Link from "next/link";
import { ArrowRight, Pencil, ShieldCheck, FileText, Lightbulb, Sparkles, BarChart2, File } from "lucide-react";

/* ── Inline SVG logo that works at any size ─────────────── */
function SolLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
      {/* S-ribbon shape made from two abstract arcs */}
      <path
        d="M55 16 C70 16 72 38 55 40 C38 42 38 64 20 64"
        stroke="#63CBF8" strokeWidth="12" strokeLinecap="round" fill="none"
      />
      <path
        d="M55 16 C70 16 72 38 55 40 C38 42 38 64 20 64"
        stroke="#7ED957" strokeWidth="12" strokeLinecap="round" fill="none"
        strokeDasharray="40 100" strokeDashoffset="0"
        opacity="0.85"
      />
    </svg>
  );
}

export function LogoDesignHero() {
  return (
    <section className="website-dev-hero logo-design-hero overflow-hidden bg-[var(--soluven-cream)]">
      {/* background glow blobs */}
      <div aria-hidden className="pointer-events-none absolute right-0 top-0 h-full w-1/2">
        <div className="absolute right-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(99,203,248,0.12)_0%,transparent_70%)]" />
        <div className="absolute bottom-[-10%] right-[20%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(126,217,87,0.1)_0%,transparent_70%)]" />
        {/* arc line */}
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 700" fill="none">
          <path d="M500 -50 Q620 350 480 750" stroke="#7ED957" strokeWidth="1.5" strokeOpacity="0.35" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-78px)] max-w-[1280px] items-center gap-8 px-6 py-9 md:px-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-10 lg:py-10 xl:px-16">

        {/* ── LEFT COLUMN ── */}
        <div className="relative z-10 max-w-[460px] animate-hero-enter">
          <Link
            href="/services"
            className="inline-flex items-center text-sm font-bold text-[#14272B] underline decoration-transparent underline-offset-4 transition-colors hover:text-[var(--soluven-blue)] hover:decoration-current"
          >
            ← All services
          </Link>

          <p className="mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.42em] text-[var(--soluven-blue)] max-md:mt-6 max-sm:tracking-[0.28em]">
            Logo design
            <span aria-hidden className="ld-eyebrow-line" />
          </p>

          <h1 className="mt-4 max-w-[460px] font-[family-name:var(--font-heading)] text-[30px] font-extrabold leading-[1.12] text-[#14272B] md:text-[34px] lg:text-[38px] xl:text-[42px]">
            A logo people<br />remember.
          </h1>

          <p className="mt-4 max-w-[460px] text-sm font-medium leading-[1.5] text-[#526672] md:text-[15px]">
            We design distinctive, meaningful logos that capture your story, build recognition and give your business an identity people can trust.
          </p>

          <div className="mt-5 border-l-[3px] border-[var(--soluven-green)] pl-4">
            <p className="text-sm font-semibold leading-relaxed text-[#526672] md:text-[15px]">
              Because looking professional starts with being unforgettable.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[var(--soluven-blue)] px-6 text-sm font-extrabold text-[#14272B] shadow-[0_18px_40px_rgba(99,203,248,0.28)] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14272B]"
            >
              Create my logo
              <ArrowRight size={16} strokeWidth={2.6} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/work"
              className="inline-flex min-h-11 items-center rounded-xl border border-[rgba(20,39,43,0.2)] bg-white/25 px-6 text-sm font-extrabold text-[#14272B] transition-colors hover:bg-white/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14272B]"
            >
              View our work
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { icon: Sparkles, label: "Unique to\nyour brand",  color: "green" },
              { icon: BarChart2, label: "Clear creative\nprocess",   color: "blue"  },
              { icon: FileText,  label: "Full ownership\n& source files", color: "green" },
            ].map(({ icon: Icon, label, color }) => (
              <div key={label} className="flex items-center gap-2.5">
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${color === "green" ? "bg-[#7ED957]/20 text-[#13a865]" : "bg-[#63CBF8]/18 text-[#00a8d9]"}`}>
                  <Icon size={15} strokeWidth={2.3} aria-hidden />
                </span>
                <span className="whitespace-pre-line text-[11px] font-bold leading-tight text-[#14272B]">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT COLUMN: Brand Board Stage ── */}
        <div className="ld-stage relative min-h-[540px] animate-hero-enter [animation-delay:120ms] max-lg:min-h-[500px] max-sm:min-h-[380px] flex items-center justify-center">

          {/* ── Floating notification pills ── */}
          {/* Top-left: Concept approved */}
          <div className="absolute -top-2 left-0 z-30 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-lg shadow-black/5 backdrop-blur-md">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#7ED957]/20 text-[#13a865]">
              <Pencil size={16} strokeWidth={2.5} />
            </span>
            <div>
              <p className="flex items-center gap-1.5 text-sm font-bold text-[#14272B]">
                Concept approved
                <span className="inline-block h-2 w-2 rounded-full bg-[var(--soluven-green)]" />
              </p>
              <p className="text-xs text-gray-400">Built around your story.</p>
            </div>
          </div>

          {/* Top-right: Brand ready */}
          <div className="absolute -top-2 right-0 z-30 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-lg shadow-black/5 backdrop-blur-md">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#63CBF8]/20 text-[#00a8d9]">
              <ShieldCheck size={16} strokeWidth={2.5} />
            </span>
            <div>
              <p className="text-sm font-bold text-[#14272B]">Brand ready</p>
              <p className="text-xs text-gray-400">Clear. Distinctive. Yours.</p>
            </div>
          </div>

          {/* Main Board */}
          <div
            className="relative w-full max-w-[620px] rounded-2xl bg-[#F8F6F0] p-6 md:p-8"
            style={{ boxShadow: "0 32px 80px rgba(20,39,43,0.1), 0 4px 16px rgba(0,0,0,0.04)" }}
          >
            {/* Logo Evolution Row */}
            <div className="mb-6 flex items-center justify-between border-b border-black/5 pb-6">
              {/* Concept */}
              <div className="flex flex-col items-center gap-2">
                <div className="relative flex h-20 w-20 items-center justify-center">
                  {/* sketch grid lines */}
                  <svg className="absolute inset-0 h-full w-full opacity-20" viewBox="0 0 80 80">
                    <line x1="0" y1="15" x2="80" y2="65" stroke="#14272B" strokeWidth="0.6" />
                    <line x1="15" y1="0" x2="65" y2="80" stroke="#14272B" strokeWidth="0.6" />
                    <rect x="8" y="8" width="64" height="64" fill="none" stroke="#14272B" strokeWidth="0.6" strokeDasharray="3 3" />
                  </svg>
                  <SolLogo className="h-12 w-12 opacity-30 grayscale" />
                </div>
                <span className="font-serif text-xs italic text-gray-400">Concept</span>
              </div>

              <ArrowRight size={18} strokeWidth={1.2} className="shrink-0 text-gray-300" />

              {/* Refine */}
              <div className="flex flex-col items-center gap-2">
                <div className="relative flex h-20 w-20 items-center justify-center">
                  {/* blueprint circle */}
                  <svg className="absolute inset-[-15%] h-[130%] w-[130%] opacity-40" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="44" fill="none" stroke="#63CBF8" strokeWidth="0.8" />
                    <circle cx="50" cy="50" r="2" fill="#63CBF8" />
                    <line x1="50" y1="6" x2="50" y2="94" stroke="#63CBF8" strokeWidth="0.4" />
                    <line x1="6" y1="50" x2="94" y2="50" stroke="#63CBF8" strokeWidth="0.4" />
                    <circle cx="50" cy="6"  r="1.5" fill="#63CBF8" />
                    <circle cx="50" cy="94" r="1.5" fill="#63CBF8" />
                    <circle cx="6"  cy="50" r="1.5" fill="#63CBF8" />
                    <circle cx="94" cy="50" r="1.5" fill="#63CBF8" />
                  </svg>
                  <SolLogo className="h-12 w-12 opacity-70" />
                </div>
                <span className="font-serif text-xs italic text-gray-400">Refine</span>
              </div>

              <ArrowRight size={18} strokeWidth={1.2} className="shrink-0 text-gray-300" />

              {/* Final */}
              <div className="relative flex flex-col items-center gap-2">
                <div className="flex h-20 w-20 items-center justify-center drop-shadow-md">
                  <SolLogo className="h-14 w-14" />
                </div>
                <span className="font-serif text-xs italic text-gray-600">Final</span>
                <span className="absolute -right-16 top-10 rotate-[-14deg] whitespace-nowrap font-serif text-[10px] italic text-gray-400 leading-tight">
                  A stronger<br />brighter you.
                </span>
              </div>
            </div>

            {/* Bottom Row: palette + typography + cards */}
            <div className="flex items-end justify-between">
              {/* Colour Palette */}
              <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                  <div className="h-8 w-8 rounded-full bg-[#63CBF8] shadow-sm" />
                  <div className="h-8 w-8 rounded-full bg-[#7ED957] shadow-sm" />
                  <div className="h-8 w-8 rounded-full bg-[#14272B] shadow-sm" />
                  <div className="h-8 w-8 rounded-full border border-black/8 bg-[var(--soluven-cream)] shadow-sm" />
                </div>
                <span className="font-serif text-[11px] italic text-gray-400">Colour Palette</span>
              </div>

              {/* Typography */}
              <div className="flex flex-col">
                <span className="text-4xl font-light text-[#14272B] leading-none">Aa</span>
                <span className="mt-1 text-[11px] font-bold text-[#14272B]">Plus Jakarta Sans</span>
                <span className="mt-1.5 text-[8px] font-bold uppercase tracking-[0.18em] text-gray-400">Clear · Modern · Trusted</span>
              </div>

              {/* Overlapping Business Cards */}
              <div className="relative h-[90px] w-[160px] shrink-0">
                {/* dark card */}
                <div
                  className="absolute bottom-0 right-0 flex h-[78px] w-[148px] items-center justify-between rounded-lg bg-[#14272B] px-4 shadow-xl"
                  style={{ transform: "rotate(-6deg)" }}
                >
                  <SolLogo className="h-7 w-7" />
                  <div className="flex flex-col items-end">
                    <span className="text-[11px] font-bold tracking-[0.2em] text-white">SOLUVEN</span>
                    <span className="text-[7px] tracking-widest text-gray-400 mt-0.5 uppercase">A brighter tomorrow</span>
                  </div>
                </div>
                {/* light card */}
                <div
                  className="absolute -top-4 right-4 flex h-[78px] w-[148px] items-center justify-between rounded-lg border border-black/5 bg-white px-4 shadow-md"
                  style={{ transform: "rotate(4deg)" }}
                >
                  <SolLogo className="h-7 w-7" />
                  <div className="flex flex-col items-end">
                    <span className="text-[11px] font-bold tracking-[0.15em] text-[#14272B]">SOLUVEN</span>
                    <span className="text-[7px] text-gray-400 mt-0.5">A brighter tomorrow.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom-left: 3 strong concepts */}
          <div className="absolute -bottom-2 left-0 z-30 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-lg shadow-black/5 backdrop-blur-md">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#7ED957]/20 text-[#13a865]">
              <Lightbulb size={15} strokeWidth={2.5} />
            </span>
            <div>
              <p className="text-sm font-bold text-[#14272B]">3 strong concepts</p>
              <div className="mt-1 flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#63CBF8]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#7ED957]" />
                <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
              </div>
            </div>
          </div>

          {/* Bottom-right: Files ready */}
          <div className="absolute -bottom-2 right-0 z-30 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-lg shadow-black/5 backdrop-blur-md">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#63CBF8]/20 text-[#00a8d9]">
              <File size={15} strokeWidth={2.5} />
            </span>
            <div>
              <p className="text-sm font-bold text-[#14272B]">Files ready</p>
              <p className="text-xs text-gray-400">Web, print &amp; social.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
