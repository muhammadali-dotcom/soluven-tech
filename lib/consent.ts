// Cookie consent, stored in a first-party cookie so the choice survives across
// visits. Any analytics or marketing script must check getConsent() (or listen
// for "soluven:consent-changed") before it loads.

export type ConsentCategory = "analytics" | "marketing";

export type Consent = {
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
  version: 1;
};

const COOKIE_NAME = "soluven_consent";
const MAX_AGE_SECONDS = 180 * 24 * 60 * 60;

export function getConsent(): Consent | null {
  const match = document.cookie.split("; ").find((row) => row.startsWith(`${COOKIE_NAME}=`));
  if (!match) return null;
  try {
    const parsed = JSON.parse(decodeURIComponent(match.slice(COOKIE_NAME.length + 1)));
    if (parsed?.version !== 1) return null;
    return {
      analytics: parsed.analytics === true,
      marketing: parsed.marketing === true,
      updatedAt: String(parsed.updatedAt),
      version: 1,
    };
  } catch {
    return null;
  }
}

export function saveConsent(choice: Record<ConsentCategory, boolean>): Consent {
  const consent: Consent = { ...choice, updatedAt: new Date().toISOString(), version: 1 };
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(JSON.stringify(consent))}; path=/; max-age=${MAX_AGE_SECONDS}; SameSite=Lax${secure}`;
  window.dispatchEvent(new CustomEvent("soluven:consent-changed", { detail: consent }));
  return consent;
}

export function openCookieSettings() {
  window.dispatchEvent(new Event("soluven:open-cookie-settings"));
}
