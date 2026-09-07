import { NextResponse } from "next/server";

// TODO(open item, REQUIREMENTS.md / ARCHITECTURE.md): no email/notification
// service is wired up yet — provider TBD (e.g. Resend, Formspree). This
// currently just validates and logs the submission.
export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body as {
    name?: string;
    email?: string;
    message?: string;
  };

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  console.log("Contact form submission:", { name, email, message });

  return NextResponse.json({ ok: true });
}
