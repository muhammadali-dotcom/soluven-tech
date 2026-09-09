"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "./nav-links";
import { LinkButton } from "@/components/ui/Button";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="md:hidden">
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="p-2"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-full flex flex-col gap-1 border-t border-[var(--color-border)] bg-[var(--color-background)] p-4"
          >
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href}>
                  <div className="flex items-center justify-between rounded-md px-3 py-2">
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="font-semibold"
                    >
                      {link.label}
                    </Link>
                    <button
                      type="button"
                      aria-label={
                        expanded === link.href ? "Collapse services" : "Expand services"
                      }
                      aria-expanded={expanded === link.href}
                      onClick={() =>
                        setExpanded((current) => (current === link.href ? null : link.href))
                      }
                      className="p-1"
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${
                          expanded === link.href ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                  {expanded === link.href && (
                    <div className="ml-3 flex flex-col gap-1 border-l border-[var(--color-border)] pl-3">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="rounded-md px-3 py-2 text-sm font-semibold hover:bg-[var(--color-surface)]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 font-semibold hover:bg-[var(--color-surface)]"
                >
                  {link.label}
                </Link>
              ),
            )}
            <LinkButton
              href="/contact"
              variant="primary"
              className="mt-2"
              onClick={() => setOpen(false)}
            >
              Start a project
            </LinkButton>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
