import Link from "next/link";
import { AnimatedHeadline } from "@/components/ui/animated-headline";
import {
  Bell,
  Home,
  Layers,
  Search,
  Smartphone,
  Star,
  Store,
  User,
  WifiOff,
} from "lucide-react";

const trustPoints = [
  { label: "Built for iOS & Android", icon: Smartphone, tone: "green" },
  { label: "Feels native, not templated", icon: Layers, tone: "cyan" },
  { label: "Ready for the App Store", icon: Store, tone: "green" },
] as const;

const featureCards = [
  { label: "Push notifications", icon: Bell, className: "ma-card-push", tone: "green" },
  { label: "Offline mode", icon: WifiOff, className: "ma-card-offline", tone: "cyan" },
  { label: "App Store ready", icon: Store, className: "ma-card-store", tone: "green" },
  { label: "5.0 rating", icon: Star, className: "ma-card-rating", tone: "cyan" },
] as const;

export function MobileAppHero() {
  return (
    <section className="website-dev-hero mobile-app-hero overflow-hidden bg-[var(--soluven-cream)]">
      <div className="mx-auto grid min-h-[calc(100svh-78px)] max-w-[1280px] items-center gap-8 px-6 py-9 md:px-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-10 lg:py-10 xl:px-16">
        <div className="relative z-10 max-w-[460px] animate-hero-enter">
          <Link
            href="/services"
            className="inline-flex items-center text-sm font-bold text-[#14272B] underline decoration-transparent underline-offset-4 transition-colors hover:text-[var(--soluven-blue)] hover:decoration-current"
          >
            ← All services
          </Link>

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.42em] text-[var(--soluven-green)] max-md:mt-6 max-sm:tracking-[0.28em]">
            Mobile app development
          </p>

          <h1 className="mt-4 max-w-[460px] font-[family-name:var(--font-heading)] text-[28px] font-extrabold leading-[1.12] text-[#14272B] md:text-[32px] lg:text-[36px] xl:text-[38px]">
            <AnimatedHeadline
              bgClass="bg-[var(--soluven-cream)]"
              textClass="text-[#14272B]"
            >
              Apps built for daily use.
            </AnimatedHeadline>
          </h1>

          <p className="mt-4 max-w-[460px] text-sm font-medium leading-[1.5] text-[#526672] md:text-[15px]">
            Native and cross-platform mobile apps designed for daily use, not just a launch-day
            demo.
          </p>

          <p className="mt-3 max-w-[450px] border-l-2 border-[var(--soluven-green)] pl-3 text-sm font-medium leading-[1.5] text-[#526672] md:text-[15px]">
            Teams taking a product mobile-first or extending an existing platform to iOS and
            Android.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[var(--soluven-blue)] px-6 text-sm font-extrabold text-[#14272B] shadow-[0_18px_40px_rgba(99,203,248,0.28)] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14272B]"
            >
              Build your app →
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

        <div className="ma-stage relative min-h-[600px] animate-hero-enter [animation-delay:120ms] max-lg:min-h-[500px] max-sm:min-h-[380px]">
          <div aria-hidden="true" className="wd-orb wd-orb-cyan" />
          <div aria-hidden="true" className="wd-orb wd-orb-green" />
          <div aria-hidden="true" className="wd-orb wd-orb-small" />
          <div aria-hidden="true" className="wd-arc" />

          <div className="ma-phone">
            <div className="wd-phone-notch" />
            <div className="ma-phone-screen">
              <div className="ma-app-status">9:41</div>
              <div className="ma-app-header">
                <span className="ma-app-avatar" />
                <span className="ma-app-greeting">
                  <strong>Hi, Alex</strong>
                  <em>Welcome back</em>
                </span>
                <Bell aria-hidden="true" size={16} className="ma-app-bell" />
              </div>
              <div className="ma-app-search">
                <Search aria-hidden="true" size={13} />
                Search
              </div>
              <div className="ma-app-card ma-app-card-primary">
                <span className="ma-app-card-label">Today&apos;s activity</span>
                <span className="ma-app-card-value">2,481 steps</span>
                <span className="ma-app-progress">
                  <i />
                </span>
              </div>
              <div className="ma-app-row">
                <div className="ma-app-card">
                  <User aria-hidden="true" size={16} />
                  <span>Profile</span>
                </div>
                <div className="ma-app-card">
                  <Layers aria-hidden="true" size={16} />
                  <span>Activity</span>
                </div>
              </div>
              <div className="ma-app-tabbar">
                <Home aria-hidden="true" size={16} className="ma-tab-active" />
                <Search aria-hidden="true" size={16} />
                <Bell aria-hidden="true" size={16} />
                <User aria-hidden="true" size={16} />
              </div>
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
