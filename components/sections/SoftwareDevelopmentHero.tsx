import Link from "next/link";
import {
  Check,
  CheckCircle2,
  Code2,
  FlaskConical,
  GitBranch,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const trustPoints = [
  { label: "Built around your workflow", icon: Workflow, tone: "cyan" },
  { label: "Clean, maintainable code", icon: Code2, tone: "green" },
  { label: "Automated testing", icon: FlaskConical, tone: "cyan" },
] as const;

const featureCards = [
  { label: "Clean architecture", icon: Code2, className: "sd-card-arch", tone: "green" },
  { label: "Automated testing", icon: FlaskConical, className: "sd-card-testing", tone: "cyan" },
  { label: "CI/CD ready", icon: GitBranch, className: "sd-card-cicd", tone: "green" },
  { label: "99.9% uptime", icon: ShieldCheck, className: "sd-card-uptime", tone: "cyan" },
] as const;

export function SoftwareDevelopmentHero() {
  return (
    <section className="website-dev-hero software-dev-hero overflow-hidden bg-[var(--soluven-cream)]">
      <div className="mx-auto grid min-h-[calc(100svh-78px)] max-w-[1280px] items-center gap-8 px-6 py-9 md:px-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-10 lg:py-10 xl:px-16">
        <div className="relative z-10 max-w-[460px] animate-hero-enter">
          <Link
            href="/services"
            className="inline-flex items-center text-sm font-bold text-[#14272B] underline decoration-transparent underline-offset-4 transition-colors hover:text-[var(--soluven-blue)] hover:decoration-current"
          >
            ← All services
          </Link>

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.42em] text-[#526672] max-md:mt-6 max-sm:tracking-[0.28em]">
            Software development
          </p>

          <h1 className="mt-4 max-w-[460px] font-[family-name:var(--font-heading)] text-[28px] font-extrabold leading-[1.12] text-[#14272B] md:text-[32px] lg:text-[36px] xl:text-[38px]">
            Software shaped around your work.
          </h1>

          <p className="mt-4 max-w-[460px] text-sm font-medium leading-[1.5] text-[#526672] md:text-[15px]">
            Purpose-built products and internal systems that solve the problems generic tools
            cannot.
          </p>

          <p className="mt-3 max-w-[450px] border-l-2 border-[#14272B]/30 pl-3 text-sm font-medium leading-[1.5] text-[#526672] md:text-[15px]">
            Founders and teams who need a product or internal tool built around how they actually
            work.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[var(--soluven-blue)] px-6 text-sm font-extrabold text-[#14272B] shadow-[0_18px_40px_rgba(99,203,248,0.28)] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14272B]"
            >
              Discuss your product →
            </Link>
            <Link
              href="/why-soluven"
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-[rgba(20,39,43,0.2)] bg-white/25 px-6 text-sm font-extrabold text-[#14272B] transition-colors hover:bg-white/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14272B]"
            >
              See how we work
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {trustPoints.map(({ label, icon: Icon, tone }) => (
              <div key={label} className="flex items-center gap-2.5">
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                    tone === "green"
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

        <div className="sd-stage relative min-h-[600px] animate-hero-enter [animation-delay:120ms] max-lg:min-h-[500px] max-sm:min-h-[380px]">
          <div aria-hidden="true" className="wd-orb wd-orb-cyan" />
          <div aria-hidden="true" className="wd-orb wd-orb-green" />
          <div aria-hidden="true" className="wd-orb wd-orb-small" />
          <div aria-hidden="true" className="wd-arc" />

          <div className="sd-editor">
            <div className="sd-editor-titlebar">
              <span className="sd-dot sd-dot-red" />
              <span className="sd-dot sd-dot-yellow" />
              <span className="sd-dot sd-dot-green" />
            </div>
            <div className="sd-editor-tabs">
              <span className="sd-tab sd-tab-active">app.ts</span>
              <span className="sd-tab">api.ts</span>
              <span className="sd-tab">schema.ts</span>
            </div>
            <div className="sd-editor-body">
              <div className="sd-line">
                <span className="sd-ln">1</span>
                <span className="sd-kw">import</span> <span className="sd-var">{"{ createApp }"}</span>{" "}
                <span className="sd-kw">from</span> <span className="sd-str">&apos;core&apos;</span>;
              </div>
              <div className="sd-line">
                <span className="sd-ln">2</span>
              </div>
              <div className="sd-line">
                <span className="sd-ln">3</span>
                <span className="sd-kw">export function</span> <span className="sd-fn">buildWorkflow</span>
                <span className="sd-punct">(</span>
                <span className="sd-var">input</span>
                <span className="sd-punct">) {"{"}</span>
              </div>
              <div className="sd-line sd-indent">
                <span className="sd-ln">4</span>
                <span className="sd-kw">const</span> <span className="sd-var">result</span>{" "}
                <span className="sd-punct">=</span> <span className="sd-fn">process</span>
                <span className="sd-punct">(</span>
                <span className="sd-var">input</span>
                <span className="sd-punct">);</span>
              </div>
              <div className="sd-line sd-indent">
                <span className="sd-ln">5</span>
                <span className="sd-kw">return</span> <span className="sd-var">result</span>
                <span className="sd-punct">;</span>
              </div>
              <div className="sd-line">
                <span className="sd-ln">6</span>
                <span className="sd-punct">{"}"}</span>
              </div>
            </div>
            <div className="sd-editor-terminal">
              <Check aria-hidden="true" size={13} />
              <span>Build succeeded in 1.4s</span>
            </div>
          </div>

          {featureCards.map(({ label, icon: Icon, className, tone }) => (
            <div key={label} className={`wd-floating-card ${className}`}>
              <span className={`wd-card-icon ${tone}`}>
                <Icon aria-hidden="true" size={20} strokeWidth={2.4} />
              </span>
              <span className="wd-card-copy">
                <strong>{label}</strong>
                <i />
                <i />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
