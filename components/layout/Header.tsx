"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navLinks } from "./nav-links";
import { MobileNav } from "./MobileNav";
import { Logo } from "@/components/ui/Logo";
import { LinkButton } from "@/components/ui/Button";
import { MagneticButton } from "@/components/motion/MagneticButton";

const anchorLinks = navLinks.filter((link) => link.href.startsWith("/#"));

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24);

      if (pathname !== "/") return;
      let current = "";
      for (const link of anchorLinks) {
        const section = document.getElementById(link.href.slice(2));
        if (section && section.getBoundingClientRect().top <= 120) {
          current = link.href;
        }
      }
      setActiveHash(current);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  function isActive(href: string) {
    if (href.startsWith("/#")) return pathname === "/" && activeHash === href;
    return pathname === href;
  }

  return (
    <header
      id="top"
      className={`sticky top-0 z-40 border-b transition-all duration-300 ${
        scrolled
          ? "border-[var(--color-border)] bg-[var(--color-background)]/80 backdrop-blur-md"
          : "border-transparent bg-[var(--color-background)]"
      }`}
    >
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[var(--soluven-blue)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[var(--color-ink)]"
      >
        Skip to content
      </a>
      <div
        className={`mx-auto flex max-w-[1280px] items-center justify-between px-6 transition-all duration-300 md:px-16 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <Link href="/" aria-label="Soluven home" className="flex items-center">
          <Logo size={scrolled ? 24 : 30} />
        </Link>

        <nav aria-label="Primary" className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`font-semibold underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current ${
                isActive(link.href) ? "text-[var(--soluven-blue)]" : "text-[var(--color-ink)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <span aria-hidden="true" className="h-6 w-px bg-[var(--color-border)]" />
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
