"use client";

import { contactEmail } from "@/lib/constants";

// Replaces the root layout when it fails, so global CSS and fonts are not
// available here. Brand colors are inlined from DESIGN.md.
export default function GlobalError({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "0 24px",
          background: "#fff8ee",
          color: "#16242a",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <title>Something went wrong | Soluven Tech</title>
        <main style={{ maxWidth: 640, margin: "0 auto" }}>
          <h1 style={{ fontSize: 32, lineHeight: 1.2 }}>Something went wrong on our side.</h1>
          <p style={{ fontSize: 18, color: "#637075" }}>
            Please try again. If it keeps happening, email us at {contactEmail}.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={() => retry()}
              style={{
                background: "#63cbf8",
                color: "#16242a",
                border: 0,
                borderRadius: 6,
                padding: "12px 24px",
                fontWeight: 600,
                fontSize: 16,
                cursor: "pointer",
              }}
            >
              Try again
            </button>
            {/* A full page load is intended here: the app shell itself failed. */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/" style={{ color: "#16242a", padding: "12px 0", fontWeight: 600 }}>
              Back to home
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
