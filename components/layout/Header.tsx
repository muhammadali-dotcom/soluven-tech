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
            width={36}
            height={36}
            priority
          />
          <span className="font-[family-name:var(--font-heading)] text-lg font-bold">
            Soluven
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-semibold hover:text-[var(--color-blue)]"
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
