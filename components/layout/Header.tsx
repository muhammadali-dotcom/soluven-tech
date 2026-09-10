"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenDropdown(null);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function isActive(href: string) {
    if (href.startsWith("/#")) return pathname === "/" && activeHash === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  function openNow(href: string) {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenDropdown(href);
  }

  function closeSoon() {
    closeTimeout.current = setTimeout(() => setOpenDropdown(null), 120);
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
        className={`mx-auto flex max-w-[1280px] items-center justify-between px-6 transition-all duration-300 md:px-[85px] ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <Link href="/" aria-label="Soluven home" className="flex items-center">
          <Logo size={scrolled ? 24 : 30} />
        </Link>

        <nav aria-label="Primary" className="hidden gap-8 md:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => openNow(link.href)}
                onMouseLeave={closeSoon}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={openDropdown === link.href}
                  onClick={() =>
                    setOpenDropdown((current) => (current === link.href ? null : link.href))
                  }
                  className={`flex items-center gap-1 font-semibold underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current ${
                    isActive(link.href) ? "text-[var(--soluven-blue)]" : "text-[var(--color-ink)]"
                  }`}
                >
                  {link.label}
                  <ChevronDown
                    aria-hidden="true"
                    size={16}
                    className={`transition-transform duration-200 ${
                      openDropdown === link.href ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openDropdown === link.href && (
                    <motion.div
                      role="menu"
                      aria-label={link.label}
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full z-50 mt-3 w-64 rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] p-2 shadow-lg"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          role="menuitem"
                          onClick={() => setOpenDropdown(null)}
                          className={`block rounded-md px-3 py-2 text-sm font-semibold transition-colors hover:bg-[var(--color-surface)] ${
                            pathname === child.href
                              ? "text-[var(--soluven-blue)]"
                              : "text-[var(--color-ink)]"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
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
            ),
          )}
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
