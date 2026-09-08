"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "./nav-links";
import { MobileNav } from "./MobileNav";
import { Logo } from "@/components/ui/Logo";
import { LinkButton } from "@/components/ui/Button";
import { MagneticButton } from "@/components/motion/MagneticButton";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-all duration-300 ${
        scrolled
          ? "border-[var(--color-border)] bg-[var(--color-background)]/80 backdrop-blur-md"
          : "border-transparent bg-[var(--color-background)]"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1280px] items-center justify-between px-6 transition-all duration-300 md:px-16 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <Link href="/" aria-label="Soluven home" className="flex items-center">
          <Logo size={scrolled ? 26 : 30} />
        </Link>

        <nav aria-label="Primary" className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-semibold text-[var(--color-ink)] underline decoration-transparent underline-offset-4 transition-colors hover:decoration-[var(--color-ink)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <MagneticButton>
            <LinkButton href="/contact" variant="primary">
              Start a project
            </LinkButton>
          </MagneticButton>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
