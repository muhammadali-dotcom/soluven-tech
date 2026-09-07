import Link from "next/link";
import { contactEmail, whatsappLink, socialLinks } from "@/lib/constants";
import { navLinks } from "./nav-links";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-6 py-12 md:flex-row md:items-start md:justify-between md:px-16">
        <div>
          <p className="font-[family-name:var(--font-heading)] text-lg font-bold">
            Soluven
          </p>
          <p className="mt-2 max-w-xs text-sm text-[var(--color-text-muted)]">
            Web, mobile, ecommerce, and consulting for local and
            international clients.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold hover:text-[var(--color-blue)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2 text-sm">
          <a
            href={`mailto:${contactEmail}`}
            className="font-semibold hover:text-[var(--color-blue)]"
          >
            {contactEmail}
          </a>
          {whatsappLink && (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-[var(--color-blue)]"
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
              className="font-semibold hover:text-[var(--color-blue)]"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>

      <p className="border-t border-[var(--color-border)] py-4 text-center text-xs text-[var(--color-text-muted)]">
        © {new Date().getFullYear()} Soluven. All rights reserved.
      </p>
    </footer>
  );
}
