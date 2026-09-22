import Link from "next/link";
import { Envelope } from "@phosphor-icons/react/dist/ssr";
import { contactEmail, whatsappLink, socialLinks } from "@/lib/constants";
import { navLinks } from "./nav-links";
import { Logo } from "@/components/ui/Logo";
import { services } from "@/data/services";
import {
  WhatsAppIcon,
  FacebookIcon,
  InstagramIcon,
} from "@/components/icons/BrandIcons";
import {
  TextHoverEffect,
  FooterBackgroundGradient,
  FooterFadeIn,
} from "@/components/ui/hover-footer";
import { BackToTopButton } from "@/components/ui/back-to-top-button";

const socialIcons = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
};

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--color-border)]">
      {/* ── Top section: keeps the site's cream/light colors ────────────── */}
      <div className="bg-[var(--color-background)] text-[var(--color-ink)]">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 md:px-[85px]">

          {/* Brand */}
          <FooterFadeIn index={0}>
            <Logo />
            <p className="mt-3 max-w-xs text-sm text-[var(--color-muted)]">
              Building solutions for the future you see.
            </p>
          </FooterFadeIn>

          {/* Explore links */}
          <FooterFadeIn index={1}>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]">
              Explore
            </p>
            <nav aria-label="Footer" className="mt-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm font-semibold underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current hover:text-[var(--soluven-blue)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </FooterFadeIn>

          {/* Services links */}
          <FooterFadeIn index={2}>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]">
              Services
            </p>
            <nav aria-label="Footer services" className="mt-4 flex flex-col gap-2">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="w-fit text-sm font-semibold underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current hover:text-[var(--soluven-blue)]"
                >
                  {service.name}
                </Link>
              ))}
            </nav>
          </FooterFadeIn>

          {/* Contact */}
          <FooterFadeIn index={3}>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]">
              Contact
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <a
                href={`mailto:${contactEmail}`}
                className="flex items-center gap-2 font-semibold hover:text-[var(--soluven-blue)]"
              >
                <Envelope size={16} aria-hidden="true" />
                {contactEmail}
              </a>
              {whatsappLink && (
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-semibold hover:text-[var(--soluven-blue)]"
                >
                  <WhatsAppIcon size={16} aria-hidden="true" />
                  WhatsApp
                </a>
              )}
            </div>
          </FooterFadeIn>
        </div>
      </div>

      {/* ── Dark island: text effect lives here on a contrasting bg ─────── */}
      {/* section-dark flips all CSS tokens to ink-on-cream automatically  */}
      <div className="section-dark relative overflow-hidden bg-[var(--color-background)]">
        {/* Radial gradient backdrop, works properly on dark bg */}
        <FooterBackgroundGradient />

        {/* Bottom bar: social left | copyright right, sits ABOVE the text */}
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 pt-10 md:px-[85px]">
          <hr className="border-t border-[var(--color-border)]" />
          <div className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-[var(--color-muted)] sm:flex-row">
            {/* Social icons */}
            <div className="flex items-center gap-5">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-[var(--color-ink)] transition-colors hover:text-[var(--soluven-blue)]"
                  >
                    <Icon size={20} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
            {/* Copyright + back to top */}
            <div className="flex items-center gap-4">
              <p>© {new Date().getFullYear()} Soluven. All rights reserved.</p>
              <BackToTopButton />
            </div>
          </div>
        </div>

        {/* Giant hover text, full width, contained inside the dark island */}
        <Link
          href="/"
          aria-label="Soluven home"
          className="relative z-10 hidden lg:flex h-[26rem] -mt-8 -mb-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--soluven-blue)]"
        >
          <TextHoverEffect text="Soluven" />
        </Link>

        {/* Mobile fallback: plain wordmark instead of the SVG effect */}
        <Link
          href="/"
          aria-label="Soluven home"
          className="lg:hidden relative z-10 block py-10 text-center text-4xl font-extrabold uppercase tracking-widest text-[var(--color-ink)] opacity-20 select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--soluven-blue)]"
        >
          Soluven
        </Link>
      </div>
    </footer>
  );
}
