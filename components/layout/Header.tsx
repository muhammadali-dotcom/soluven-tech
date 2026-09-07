import Link from "next/link";
import Image from "next/image";
import { navLinks } from "./nav-links";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="relative border-b border-[var(--color-border)]">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 md:px-16">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/Soluvenlogo.png"
            alt="Soluven"
            width={2172}
            height={724}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <nav aria-label="Primary" className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-semibold text-[var(--color-text)] underline decoration-transparent underline-offset-4 transition-colors hover:decoration-[var(--color-text)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
