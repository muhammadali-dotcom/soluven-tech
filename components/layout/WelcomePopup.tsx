"use client";

import { useEffect, useRef, useState, type FocusEvent } from "react";
import { Pause, Play, X } from "@phosphor-icons/react";
import { LinkButton } from "@/components/ui/Button";
import { popupHooks } from "@/data/popup-hooks";

const STORAGE_KEY = "soluven-welcome-v3";
const HIDE_FOR_MS = 7 * 24 * 60 * 60 * 1000;
const DELAY_AFTER_LOADER_MS = 1000;
const ROTATE_MS = 6000;

function dismissedRecently(): boolean {
  try {
    const at = Number(localStorage.getItem(STORAGE_KEY));
    return Number.isFinite(at) && at > 0 && Date.now() - at < HIDE_FOR_MS;
  } catch {
    // Storage blocked: stay quiet rather than show the popup on every page.
    return true;
  }
}

// Tells the cookie banner the welcome popup is finished (closed or skipped),
// so the two never appear at the same time.
function markWelcomeDone() {
  document.documentElement.dataset.welcomeDone = "1";
  window.dispatchEvent(new Event("soluven:welcome-done"));
}

function rememberDismissal() {
  try {
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
  } catch {
    // Nothing to do if storage is unavailable.
  }
}

// Welcome popup: rotates a few real, sourced insights, each with one link, and
// never asks for anything. Shown after the page loader, at most once a week,
// never on /contact.
export function WelcomePopup() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  // Decided once per full page load, so it can't pop up over the cookie banner
  // after a later client-side navigation.
  useEffect(() => {
    if (window.location.pathname === "/contact" || dismissedRecently()) {
      markWelcomeDone();
      return;
    }

    let timer: ReturnType<typeof setTimeout> | undefined;
    const schedule = () => {
      timer = setTimeout(() => setOpen(true), DELAY_AFTER_LOADER_MS);
    };

    if (document.documentElement.dataset.loaderDone) {
      schedule();
      return () => clearTimeout(timer);
    }
    window.addEventListener("soluven:loader-done", schedule, { once: true });
    return () => {
      window.removeEventListener("soluven:loader-done", schedule);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (open && !dialogRef.current?.open) dialogRef.current?.showModal();
  }, [open]);

  if (!open) return null;

  const close = () => dialogRef.current?.close();

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="welcome-popup-title"
      onClose={() => {
        rememberDismissal();
        setOpen(false);
        markWelcomeDone();
      }}
      onClick={(event) => {
        if (event.target === dialogRef.current) close();
      }}
      className="section-dark m-auto w-[min(520px,calc(100vw-2rem))] rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] p-0 text-[var(--color-ink)] opacity-100 transition-opacity duration-200 backdrop:bg-[var(--soluven-ink)]/55 starting:opacity-0 max-sm:mb-0 max-sm:mt-auto max-sm:w-full max-sm:max-w-full max-sm:rounded-b-none"
    >
      <div className="relative p-6 md:p-8">
        <button
          type="button"
          aria-label="Close"
          onClick={close}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-md border border-[var(--color-border)] transition-colors hover:bg-[var(--color-surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ink)]"
        >
          <X aria-hidden="true" size={16} />
        </button>

        <h2
          id="welcome-popup-title"
          className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]"
        >
          Did you know
        </h2>

        <InsightCarousel onDone={close} />
      </div>
    </dialog>
  );
}

function InsightCarousel({ onDone }: { onDone: () => void }) {
  const [index, setIndex] = useState(0);
  // Only mounted client-side once the dialog opens, so window is available.
  const [reducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [paused, setPaused] = useState(false);
  // Keyboard focus on a slide holds it still, so a focused link can't vanish.
  const [focused, setFocused] = useState(false);
  const playing = !reducedMotion && !paused && !focused;

  // Re-armed on every slide change, so a dot click restarts the 6s count.
  useEffect(() => {
    if (!playing) return;
    const id = setTimeout(() => setIndex((i) => (i + 1) % popupHooks.length), ROTATE_MS);
    return () => clearTimeout(id);
  }, [playing, index]);

  const onBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
  };

  return (
    <>
      {/* Slides share one grid cell, so the popup is always as tall as the
          tallest insight and never jumps as they rotate. */}
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Insights"
        aria-live={playing ? "off" : "polite"}
        onFocus={() => setFocused(true)}
        onBlur={onBlur}
        className="grid"
      >
        {popupHooks.map((hook, i) => {
          const active = i === index;
          return (
            <div
              key={hook.stat}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${popupHooks.length}`}
              inert={!active}
              className={`col-start-1 row-start-1 transition-[opacity,visibility] duration-300 ${
                active ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              <p
                aria-hidden="true"
                className="mt-4 font-[family-name:var(--font-heading)] text-6xl font-bold leading-none tracking-tight text-[var(--soluven-blue)] md:text-7xl"
              >
                {hook.stat}
              </p>
              <p className="mt-3 pr-6 font-[family-name:var(--font-heading)] text-lg font-semibold leading-snug">
                <span className="sr-only">{hook.stat} </span>
                {hook.statement}
              </p>
              <p className="mt-2 text-xs text-[var(--color-muted)]">Source: {hook.source}</p>

              <div className="mt-6 border-t border-[var(--color-border)] pt-6">
                <p className="text-base font-semibold">{hook.question}</p>
                <LinkButton href={hook.cta.href} onClick={onDone} className="mt-4">
                  {hook.cta.label}
                </LinkButton>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex items-center">
          {popupHooks.map((hook, i) => (
            <button
              key={hook.stat}
              type="button"
              aria-label={`Show insight ${i + 1} of ${popupHooks.length}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className="flex h-6 w-6 items-center justify-center rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-ink)]"
            >
              <span
                aria-hidden="true"
                className={`h-2 w-2 rounded-full ${
                  i === index ? "bg-[var(--color-ink)]" : "bg-[var(--color-border)]"
                }`}
              />
            </button>
          ))}
          {!reducedMotion && (
            <button
              type="button"
              aria-label={paused ? "Play insights" : "Pause insights"}
              onClick={() => setPaused((p) => !p)}
              className="ml-2 flex h-7 w-7 items-center justify-center rounded-md border border-[var(--color-border)] transition-colors hover:bg-[var(--color-surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ink)]"
            >
              {paused ? <Play aria-hidden="true" size={12} /> : <Pause aria-hidden="true" size={12} />}
            </button>
          )}
        </div>
        <button
          type="button"
          onClick={onDone}
          className="text-sm font-semibold text-[var(--color-muted)] underline decoration-transparent underline-offset-4 hover:decoration-current"
        >
          Maybe later
        </button>
      </div>
    </>
  );
}
