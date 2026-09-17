import Link from "next/link";
import {
  BarChart3,
  CheckCircle2,
  FileText,
  Home,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  Target,
  Zap,
} from "lucide-react";

const trustPoints = [
  { label: "Clear communication", icon: MessageCircle, tone: "cyan" },
  { label: "Built around your goals", icon: Target, tone: "green" },
  { label: "No confusing process", icon: FileText, tone: "cyan" },
] as const;

const featureCards = [
  { label: "New enquiry", icon: Mail, className: "wd-card-enquiry", tone: "green" },
  { label: "Fast loading", icon: Zap, className: "wd-card-speed", tone: "cyan" },
  { label: "Mobile ready", icon: Phone, className: "wd-card-mobile", tone: "green" },
  { label: "Designed to convert", icon: BarChart3, className: "wd-card-convert", tone: "cyan" },
] as const;

export function WebsiteDevelopmentHero() {
  return (
    <section className="website-dev-hero overflow-hidden bg-[var(--soluven-cream)]">
      <div className="mx-auto grid min-h-[calc(100svh-78px)] max-w-[1280px] items-center gap-8 px-6 py-9 md:px-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-10 lg:py-10 xl:px-16">
        <div className="relative z-10 max-w-[540px] animate-hero-enter">
          <Link
            href="/services"
            className="inline-flex items-center text-sm font-bold text-[#14272B] underline decoration-transparent underline-offset-4 transition-colors hover:text-[var(--soluven-blue)] hover:decoration-current"
          >
            ← All services
          </Link>

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.42em] text-[var(--soluven-blue)] max-md:mt-6 max-sm:tracking-[0.28em]">
            Website development
          </p>

          <h1 className="mt-4 max-w-[460px] font-[family-name:var(--font-heading)] text-[28px] font-extrabold leading-[1.12] text-[#14272B] md:text-[32px] lg:text-[36px] xl:text-[38px]">
            Your website should bring customers, not lose them.
          </h1>

          <p className="mt-4 max-w-[460px] text-sm font-medium leading-[1.5] text-[#526672] md:text-[15px]">
            We build fast, clear and credible websites that help people trust your business,
            understand your value and take the next step.
          </p>

          <p className="mt-3 max-w-[450px] text-sm font-medium leading-[1.5] text-[#526672] md:text-[15px]">
            Because your business deserves more than a website that simply exists.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[var(--soluven-blue)] px-6 text-sm font-extrabold text-[#14272B] shadow-[0_18px_40px_rgba(99,203,248,0.28)] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14272B]"
            >
              Build my website →
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
                <span className="text-xs font-bold leading-tight text-[#14272B]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="website-device-stage relative min-h-[540px] animate-hero-enter [animation-delay:120ms] max-lg:min-h-[500px] max-sm:min-h-[380px]">
          <div aria-hidden="true" className="wd-orb wd-orb-cyan" />
          <div aria-hidden="true" className="wd-orb wd-orb-green" />
          <div aria-hidden="true" className="wd-orb wd-orb-small" />
          <div aria-hidden="true" className="wd-arc" />

          <div className="wd-laptop">
            <div className="wd-laptop-camera" />
            <div className="wd-laptop-screen">
              <BusinessWebsiteMockup compact={false} />
            </div>
            <div className="wd-laptop-base" />
          </div>

          <div className="wd-phone">
            <div className="wd-phone-notch" />
            <div className="wd-phone-screen">
              <BusinessWebsiteMockup compact />
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

function BusinessWebsiteMockup({ compact }: { compact: boolean }) {
  if (compact) {
    return (
      <div className="wd-site wd-site-mobile">
        <div className="wd-site-nav">
          <strong>Bloom &amp; Co.</strong>
          <Menu aria-hidden="true" size={18} />
        </div>
        <p className="wd-site-eyebrow">Plants for brighter spaces</p>
        <h2>Beautiful spaces happier people</h2>
        <p>Indoor plants, styling and care for homes and businesses.</p>
        <button type="button">Get a Quote →</button>
        <div className="wd-plant-card">
          <PlantScene />
        </div>
        <em>Greener tomorrows</em>
      </div>
    );
  }

  return (
    <div className="wd-site">
      <div className="wd-site-nav">
        <strong>Bloom &amp; Co.</strong>
        <span>Home</span>
        <span>About</span>
        <span>Services</span>
        <span>Gallery</span>
        <span>Contact</span>
        <button type="button">Get a Quote</button>
      </div>
      <div className="wd-site-hero">
        <div>
          <p className="wd-site-eyebrow">Plants for brighter spaces</p>
          <h2>Beautiful spaces happier people</h2>
          <p>Indoor plants, styling and care for homes and businesses.</p>
          <div className="wd-site-actions">
            <button type="button">Get a Quote →</button>
            <button type="button">Our Services</button>
          </div>
        </div>
        <div className="wd-site-visual">
          <PlantScene />
          <em>Greener tomorrows</em>
        </div>
      </div>
      <div className="wd-site-points">
        <span>
          <CheckCircle2 aria-hidden="true" size={20} /> Stylish plant setups
        </span>
        <span>
          <Home aria-hidden="true" size={20} /> Healthy spaces
        </span>
        <span>
          <CheckCircle2 aria-hidden="true" size={20} /> Sustainable &amp; local
        </span>
      </div>
    </div>
  );
}

function PlantScene() {
  return (
    <div className="wd-plant-scene" aria-hidden="true">
      <span className="wd-blob blob-one" />
      <span className="wd-blob blob-two" />
      <span className="wd-blob blob-three" />
    </div>
  );
}
