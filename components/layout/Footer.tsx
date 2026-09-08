import Link from "next/link";
import { Mail, MessageCircle, ArrowUp } from "lucide-react";
import { contactEmail, whatsappLink, socialLinks } from "@/lib/constants";
import { navLinks } from "./nav-links";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-ink)]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-3 md:px-16">
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
                <MessageCircle size={16} aria-hidden="true" />
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
      </div>

      <div className="border-t border-[var(--color-border)] px-6 py-6 md:px-16">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-3 text-center text-xs text-[var(--color-muted)] sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p>© {new Date().getFullYear()} Soluven. All rights reserved.</p>
            <p className="mt-1">Concept website — built to demonstrate what Soluven can build for you.</p>
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
