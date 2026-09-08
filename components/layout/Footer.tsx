import Link from "next/link";
import { contactEmail, whatsappLink, socialLinks } from "@/lib/constants";
import { navLinks } from "./nav-links";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--color-border)] bg-[var(--color-ink)] text-[var(--soluven-cream)]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-6 py-16 md:flex-row md:items-start md:justify-between md:px-16">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-white/60">
            Building solutions for the future you see.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2 text-sm">
          <a
            href={`mailto:${contactEmail}`}
            className="font-semibold hover:text-[var(--soluven-blue)]"
          >
            {contactEmail}
          </a>
          {whatsappLink && (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-[var(--soluven-blue)]"
            >
              WhatsApp
            </a>
          )}
          {socialLinks.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-[var(--soluven-blue)]"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        <p>© {new Date().getFullYear()} Soluven. All rights reserved.</p>
        <p className="mt-1">Concept website — built to demonstrate what Soluven can build for you.</p>
      </div>
    </footer>
  );
}
