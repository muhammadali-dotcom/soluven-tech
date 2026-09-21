import Link from "next/link";
import {
  ArrowRight,
  Users,
  Target,
  BarChart2,
  TrendingUp,
  Search,
  Share2,
  Mail,
  Eye,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";

const benefits = [
  { icon: Users,    label: "Focused on\nreal customers", tone: "green" },
  { icon: BarChart2, label: "Clear monthly\nreporting",       tone: "blue"  },
  { icon: Target,   label: "Built around\nyour goals",       tone: "green" },
] as const;

const funnelSteps = [
  { label: "Reach",     value: "125,400" },
  { label: "Visits",    value: "24,320"  },
  { label: "Leads",     value: "2,480"   },
  { label: "Customers", value: "412"     },
] as const;

const channels = [
  { icon: Search, label: "Search", value: "12,480", pct: "62%", bar: 62 },
  { icon: Share2,  label: "Social", value: "7,230",  pct: "48%", bar: 48 },
  { icon: Mail,    label: "Email",  value: "4,610",  pct: "35%", bar: 35 },
] as const;

/* Minimal sparkline path for the traffic chart */
const chartPoints = "0,68 36,60 72,52 108,44 144,36 180,28 216,18 252,8";

export function DigitalMarketingHero() {
  return (
    <section className="website-dev-hero dm-hero overflow-hidden bg-[var(--soluven-cream)]">
      <div className="mx-auto grid min-h-[calc(100svh-78px)] max-w-[1280px] items-center gap-8 px-6 py-9 md:px-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-10 lg:py-10 xl:px-16">

        {/* ── LEFT ── */}
        <div className="relative z-10 max-w-[460px] animate-hero-enter">
          <Link
            href="/services"
            className="inline-flex items-center text-sm font-bold text-[#14272B] underline decoration-transparent underline-offset-4 transition-colors hover:text-[var(--soluven-blue)] hover:decoration-current"
          >
            ← All services
          </Link>

          <p className="mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.42em] text-[var(--soluven-blue)] max-md:mt-6 max-sm:tracking-[0.28em]">
            Digital marketing
            <span aria-hidden className="h-px w-8 bg-[var(--soluven-blue)] opacity-50" />
          </p>

          <h1 className="mt-4 max-w-[460px] font-[family-name:var(--font-heading)] text-[30px] font-extrabold leading-[1.1] text-[#14272B] md:text-[34px] lg:text-[38px] xl:text-[42px]">
            Turn attention<br />into real growth.
          </h1>

          <p className="mt-4 max-w-[420px] text-sm font-medium leading-[1.55] text-[#526672] md:text-[15px]">
            We build focused digital campaigns that bring the right people to your business and turn clicks into leads, customers and measurable results.
          </p>

          <div className="mt-5 border-l-[3px] border-[var(--soluven-green)] pl-4">
            <p className="text-sm font-semibold leading-relaxed text-[#526672] md:text-[15px]">
              Because your marketing should grow your business, not just your numbers.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[var(--soluven-blue)] px-6 text-sm font-extrabold text-[#14272B] shadow-[0_18px_40px_rgba(99,203,248,0.28)] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14272B]"
            >
              Plan my campaign
              <ArrowRight size={16} strokeWidth={2.6} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/why-soluven"
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-[rgba(20,39,43,0.2)] bg-white/25 px-6 text-sm font-extrabold text-[#14272B] transition-colors hover:bg-white/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14272B]"
            >
              See how we work
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {benefits.map(({ icon: Icon, label, tone }) => (
              <div key={label} className="flex items-center gap-2.5">
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${tone === "green" ? "bg-[#7ED957]/20 text-[#13a865]" : "bg-[#63CBF8]/18 text-[#00a8d9]"}`}>
                  <Icon aria-hidden size={15} strokeWidth={2.3} />
                </span>
                <span className="whitespace-pre-line text-xs font-bold leading-tight text-[#14272B]">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Analytics Dashboard Mockup ── */}
        <div className="relative min-h-[540px] animate-hero-enter [animation-delay:120ms] max-lg:min-h-[500px] max-sm:min-h-[380px]">

          {/* Background glow orbs */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute right-[-5%] top-[-10%] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(99,203,248,0.12)_0%,transparent_70%)]" />
            <div className="absolute bottom-[-5%] right-[15%] h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(126,217,87,0.1)_0%,transparent_70%)]" />
            {/* Arc line */}
            <svg className="absolute right-[5%] top-0 h-full w-[60%]" viewBox="0 0 300 500" fill="none">
              <path d="M280 -20 Q340 250 200 520" stroke="#7ED957" strokeWidth="1.5" strokeOpacity="0.35" />
              <circle cx="280" cy="-20" r="5" fill="#7ED957" fillOpacity="0.6" />
            </svg>
          </div>

          {/* Top floating pills */}
          <div className="absolute left-[5%] top-[2%] z-20 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-lg shadow-black/5 backdrop-blur-md">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#7ED957]/20 text-[#13a865]">
              <Target size={16} strokeWidth={2.5} />
            </span>
            <div>
              <p className="text-sm font-bold text-[#14272B]">Campaign live</p>
              <p className="text-xs text-gray-400">Reaching the right people</p>
            </div>
          </div>

          <div className="absolute right-[0%] top-[2%] z-20 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-lg shadow-black/5 backdrop-blur-md">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#63CBF8]/20 text-[#00a8d9]">
              <Users size={16} strokeWidth={2.5} />
            </span>
            <div>
              <p className="text-sm font-bold text-[#14272B]">Qualified leads</p>
              <p className="text-xs font-bold text-[#13a865]">+38% this month</p>
            </div>
          </div>

          {/* Main Dashboard Card */}
          <div
            className="absolute left-[3%] right-[-2%] top-[14%] z-10 rounded-2xl bg-white p-5 shadow-[0_20px_60px_rgba(20,39,43,0.1)]"
          >
            {/* Dashboard header */}
            <div className="mb-4 flex items-start justify-between">
              <div>
                <p className="text-base font-extrabold text-[#14272B]">Campaign performance</p>
                <p className="text-xs text-gray-400">From visibility to valuable customers</p>
              </div>
              <button type="button" className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-500">
                Last 30 days <ChevronDown size={12} />
              </button>
            </div>

            {/* Funnel steps */}
            <div className="mb-5 flex items-center gap-1">
              {funnelSteps.map(({ label, value }, i) => (
                <div key={label} className="flex items-center gap-1">
                  <div className="flex flex-col items-center">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#63CBF8]/15 text-[#00a8d9]">
                      {i === 0 && <Eye size={13} strokeWidth={2.3} />}
                      {i === 1 && <Users size={13} strokeWidth={2.3} />}
                      {i === 2 && <Target size={13} strokeWidth={2.3} />}
                      {i === 3 && <Users size={13} strokeWidth={2.3} />}
                    </span>
                    <p className="mt-1 text-xs text-gray-400">{label}</p>
                    <p className="text-sm font-extrabold text-[#14272B]">{value}</p>
                  </div>
                  {i < funnelSteps.length - 1 && (
                    <ArrowRight size={14} className="mb-3 shrink-0 text-gray-300" strokeWidth={1.5} />
                  )}
                </div>
              ))}
            </div>

            {/* Two column: traffic chart + top channels */}
            <div className="grid grid-cols-2 gap-4">
              {/* Traffic chart */}
              <div className="rounded-xl bg-[#F8F6F0] p-4">
                <p className="text-xs text-gray-400">Website traffic</p>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-lg font-extrabold text-[#14272B]">24,320</span>
                  <span className="flex items-center gap-0.5 text-xs font-bold text-[#13a865]">
                    <TrendingUp size={11} /> 56%
                  </span>
                </div>
                <p className="mb-3 text-[10px] text-gray-400">+56% vs last month</p>
                {/* Sparkline */}
                <div className="relative h-[72px] w-full overflow-hidden">
                  <svg viewBox="0 0 252 76" className="h-full w-full" preserveAspectRatio="none">
                    {/* Filled area */}
                    <defs>
                      <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#7ED957" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#7ED957" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <polygon
                      points={`0,76 ${chartPoints} 252,76`}
                      fill="url(#chartFill)"
                    />
                    <polyline
                      points={chartPoints}
                      fill="none"
                      stroke="#7ED957"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* End dot */}
                    <circle cx="252" cy="8" r="4" fill="#7ED957" />
                    {/* X axis labels */}
                    {["Jun 1","Jun 8","Jun 15","Jun 22","Jun 30"].map((l, i) => (
                      <text key={l} x={i * 63} y="76" fontSize="7" fill="#9ca3af">{l}</text>
                    ))}
                    {/* Y axis labels */}
                    {["30k","20k","10k","0"].map((l, i) => (
                      <text key={l} x="0" y={8 + i * 22} fontSize="7" fill="#9ca3af">{l}</text>
                    ))}
                  </svg>
                  {/* Tooltip */}
                  <div className="absolute right-0 top-0 rounded-lg bg-[#7ED957] px-2 py-1 text-[9px] font-bold text-white shadow">
                    +56%<br /><span className="font-normal opacity-80">vs last month</span>
                  </div>
                </div>
              </div>

              {/* Top channels */}
              <div className="flex flex-col gap-3 rounded-xl bg-[#F8F6F0] p-4">
                <p className="text-xs font-bold text-[#14272B]">Top performing channels</p>
                {channels.map(({ icon: Icon, label, value, pct, bar }) => (
                  <div key={label} className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#63CBF8]/15 text-[#00a8d9]">
                          <Icon size={10} strokeWidth={2.3} />
                        </span>
                        <span className="text-[11px] font-semibold text-[#14272B]">{label}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-[11px] font-bold text-[#14272B]">{value}</span>
                        <span className="flex items-center gap-0.5 text-[10px] font-bold text-[#13a865]">
                          <ArrowUpRight size={9} /> {pct}
                        </span>
                      </div>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-gray-200">
                      <div
                        className="h-full rounded-full bg-[var(--soluven-blue)]"
                        style={{ width: `${bar}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom floating pills */}
          <div className="absolute bottom-[3%] left-[3%] z-20 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-lg shadow-black/5 backdrop-blur-md">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#7ED957]/20 text-[#13a865]">
              <TrendingUp size={15} strokeWidth={2.5} />
            </span>
            <div>
              <p className="text-sm font-bold text-[#14272B]">4.8× return</p>
              <p className="text-xs text-gray-400">Campaign performance</p>
            </div>
          </div>

          <div className="absolute bottom-[3%] right-[0%] z-20 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-lg shadow-black/5 backdrop-blur-md">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#63CBF8]/20 text-[#00a8d9]">
              <BarChart2 size={15} strokeWidth={2.5} />
            </span>
            <div>
              <p className="text-sm font-bold text-[#14272B]">Clear reporting</p>
              <p className="text-xs text-gray-400">Know what drives growth</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
