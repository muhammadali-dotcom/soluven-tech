import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteConfig } from "@/lib/constants";

export const alt = `${siteConfig.name}: ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const icon = await readFile(join(process.cwd(), "public/soluven_icon.png"), "base64");

// Link preview card for WhatsApp, LinkedIn, X, etc. Colors from DESIGN.md.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#16242a",
          color: "#fff8ee",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <img src={`data:image/png;base64,${icon}`} width={96} height={96} alt="" />
          <div style={{ fontSize: 44, fontWeight: 700 }}>{siteConfig.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1, maxWidth: 960 }}>
            {siteConfig.tagline}
          </div>
          <div style={{ fontSize: 30, color: "#63cbf8" }}>
            Websites, ecommerce and custom software
          </div>
        </div>
      </div>
    ),
    size,
  );
}
