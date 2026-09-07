"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "./nav-links";

export function MobileNav() {
  const [open, setOpen] = useState(false);

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
      {open && (
        <nav
          aria-label="Mobile"
          className="absolute left-0 right-0 top-full flex flex-col gap-1 border-t border-[var(--color-border)] bg-[var(--color-background)] p-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 font-semibold hover:bg-[var(--color-surface)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
