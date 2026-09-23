import { NextResponse } from "next/server";
import { validateContact } from "@/lib/contact-validation";
import { rateLimit } from "@/lib/rate-limit";

function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

// TODO(open item, REQUIREMENTS.md / ARCHITECTURE.md): no email/notification
// service is wired up yet; provider TBD (e.g. Resend, Formspree). This
// currently validates the submission and discards it.
export async function POST(request: Request) {
  try {
    const { allowed, retryAfterSeconds } = rateLimit(`contact:${clientIp(request)}`);
    if (!allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429, headers: { "Retry-After": String(retryAfterSeconds) } },
      );
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    // Honeypot: real visitors never see or fill the "website" field.
    if (body && typeof body === "object" && (body as Record<string, unknown>).website) {
      return NextResponse.json({ ok: true });
    }

    const result = validateContact(body);
    if (!result.ok) {
      return NextResponse.json(
        { error: "Please check the highlighted fields.", fields: result.errors },
        { status: 400 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
