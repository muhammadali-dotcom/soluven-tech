"use client";

import { openCookieSettings } from "@/lib/consent";

// Reopens the cookie banner on its preferences view (footer, cookie policy page).
export function CookieSettingsButton({ className = "" }: { className?: string }) {
  return (
    <button type="button" onClick={openCookieSettings} className={className}>
      Cookie settings
    </button>
  );
}
