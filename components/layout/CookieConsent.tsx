"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { getConsent, saveConsent, type ConsentCategory } from "@/lib/consent";

const DELAY_AFTER_WELCOME_MS = 600;
// Smaller than the default Button padding so the card stays compact.
const compactButton = "!px-4 !py-2 text-sm";

type View = "hidden" | "summary" | "customize";
type Choices = Record<ConsentCategory, boolean>;

const categories: { id: ConsentCategory; name: string; description: string }[] = [
  {
    id: "analytics",
    name: "Analytics",
    description: "Help us understand how visitors use the site so we can improve it.",
  },
  {
    id: "marketing",
    name: "Marketing",
    description: "Used to measure and personalise our advertising on other sites.",
  },
];

// Non-blocking consent card, bottom-right on desktop and full width on phones.
// Appears once the welcome popup is closed or skipped, and can be reopened from
// the footer's "Cookie settings".
export function CookieConsent() {
  const cardRef = useRef<HTMLElement>(null);
  const [view, setView] = useState<View>("hidden");
  const [choices, setChoices] = useState<Choices>({ analytics: false, marketing: false });

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    const show = () => {
      timer = setTimeout(() => setView("summary"), DELAY_AFTER_WELCOME_MS);
    };

    if (!getConsent()) {
      if (document.documentElement.dataset.welcomeDone) show();
      else window.addEventListener("soluven:welcome-done", show, { once: true });
    }

    const openSettings = () => {
      clearTimeout(timer);
      const saved = getConsent();
      setChoices({ analytics: saved?.analytics ?? false, marketing: saved?.marketing ?? false });
      setView("customize");
    };
    window.addEventListener("soluven:open-cookie-settings", openSettings);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("soluven:welcome-done", show);
      window.removeEventListener("soluven:open-cookie-settings", openSettings);
    };
  }, []);

  // Lift the WhatsApp button above the card while it's open.
  useEffect(() => {
    const card = cardRef.current;
    if (view === "hidden" || !card) return;
    const root = document.documentElement;
    const observer = new ResizeObserver(() => {
      root.style.setProperty("--cookie-banner-offset", `${card.offsetHeight + 16}px`);
    });
    observer.observe(card);
    return () => {
      observer.disconnect();
      root.style.removeProperty("--cookie-banner-offset");
    };
  }, [view]);

  if (view === "hidden") return null;

  const save = (choice: Choices) => {
    saveConsent(choice);
    setView("hidden");
  };

  return (
    <section
      ref={cardRef}
      role="region"
      aria-labelledby="cookie-consent-title"
      className="section-dark fixed inset-x-0 bottom-0 z-50 rounded-t-lg border-t border-[var(--color-border)] bg-[var(--color-background)] p-5 text-[var(--color-ink)] opacity-100 transition-[opacity,translate] duration-300 starting:translate-y-2 starting:opacity-0 sm:inset-x-auto sm:bottom-6 sm:right-6 sm:w-[360px] sm:rounded-lg sm:border"
    >
      {view === "summary" ? (
        <>
          <h2
            id="cookie-consent-title"
            className="font-[family-name:var(--font-heading)] text-base font-semibold"
          >
            We use cookies
          </h2>
          <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-muted)]">
            We use essential cookies to run this site. With your permission we&apos;d also use
            analytics and marketing cookies. Read our{" "}
            <Link href="/cookie-policy" className="font-semibold text-[var(--color-ink)] underline underline-offset-4">
              cookie policy
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Button type="button" onClick={() => save({ analytics: true, marketing: true })} className={compactButton}>
              Accept all
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={() => save({ analytics: false, marketing: false })}
              className={compactButton}
            >
              Reject all
            </Button>
            <button
              type="button"
              onClick={() => setView("customize")}
              className="px-1 text-sm font-semibold underline underline-offset-4"
            >
              Customize
            </button>
          </div>
        </>
      ) : (
        <>
          <h2
            id="cookie-consent-title"
            className="font-[family-name:var(--font-heading)] text-base font-semibold"
          >
            Cookie preferences
          </h2>
          <ul className="mt-3 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            <li className="flex items-start justify-between gap-4 py-2.5">
              <div>
                <p className="text-sm font-semibold">Necessary</p>
                <p className="mt-1 text-xs text-[var(--color-muted)]">
                  Needed for the site to work, like remembering this choice.
                </p>
              </div>
              <span className="shrink-0 text-xs font-semibold text-[var(--color-muted)]">Always on</span>
            </li>
            {categories.map((category) => (
              <li key={category.id} className="flex items-start justify-between gap-4 py-2.5">
                <div>
                  <p id={`cookie-${category.id}`} className="text-sm font-semibold">
                    {category.name}
                  </p>
                  <p className="mt-1 text-xs text-[var(--color-muted)]">{category.description}</p>
                </div>
                <Switch
                  labelledBy={`cookie-${category.id}`}
                  checked={choices[category.id]}
                  onChange={(checked) => setChoices((c) => ({ ...c, [category.id]: checked }))}
                />
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Button type="button" onClick={() => save(choices)} className={compactButton}>
              Save preferences
            </Button>
            <button
              type="button"
              onClick={() => setView("summary")}
              className="px-1 text-sm font-semibold underline underline-offset-4"
            >
              Back
            </button>
          </div>
        </>
      )}
    </section>
  );
}

function Switch({
  labelledBy,
  checked,
  onChange,
}: {
  labelledBy: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-labelledby={labelledBy}
      onClick={() => onChange(!checked)}
      className={`flex h-6 w-11 shrink-0 items-center rounded-full border px-0.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ink)] ${
        checked
          ? "justify-end border-[var(--soluven-blue)] bg-[var(--soluven-blue)]"
          : "justify-start border-[var(--color-border)] bg-[var(--color-surface)]"
      }`}
    >
      <span
        aria-hidden="true"
        className={`h-4 w-4 rounded-full ${checked ? "bg-[var(--soluven-ink)]" : "bg-[var(--color-ink)]"}`}
      />
    </button>
  );
}
