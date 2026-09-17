import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";
import { contactEmail, whatsappLink, socialLinks } from "@/lib/constants";
import { navLinks } from "./nav-links";
import { Logo } from "@/components/ui/Logo";
import { services } from "@/data/services";
import { WhatsAppIcon, FacebookIcon, InstagramIcon } from "@/components/icons/BrandIcons";

const socialIcons = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
};

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-ink)]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 md:px-[85px]">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-[var(--color-muted)]">
            Building solutions for the future you see.
          </p>
        </div>

        <div>
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
        </div>

        <div>
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
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]">
            Contact
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            <a
              href={`mailto:${contactEmail}`}
              className="flex items-center gap-2 font-semibold hover:text-[var(--soluven-blue)]"
            >
              <Mail size={16} aria-hidden="true" />
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
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-[var(--color-ink)] hover:text-[var(--soluven-blue)]"
                  >
                    <Icon size={20} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--color-border)] px-6 py-6 md:px-[85px]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-3 text-center text-xs text-[var(--color-muted)] sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p>© {new Date().getFullYear()} Soluven. All rights reserved.</p>
          </div>
          <a
            href="#top"
            className="flex items-center gap-1.5 font-semibold hover:text-[var(--soluven-blue)]"
          >
            Back to top
            <ArrowUp size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
