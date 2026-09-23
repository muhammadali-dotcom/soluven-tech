// Shared by the contact form, the project wizard and /api/contact so the
// client and server agree on what a valid submission is.

export type ContactField = "name" | "email" | "message";

export type ContactData = {
  name: string;
  email: string;
  message: string;
  company?: string;
  category?: string;
  budget?: string;
  timeline?: string;
  projectType?: string[];
};

export type ContactValidationResult =
  | { ok: true; data: ContactData }
  | { ok: false; errors: Partial<Record<ContactField, string>> };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const MAX_LENGTH = {
  name: 100,
  email: 254,
  message: 5000,
  optional: 200,
} as const;

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function optionalString(value: unknown): string | undefined {
  const text = asString(value).slice(0, MAX_LENGTH.optional);
  return text || undefined;
}

export function validateContact(input: unknown): ContactValidationResult {
  const body = (input && typeof input === "object" ? input : {}) as Record<string, unknown>;
  const errors: Partial<Record<ContactField, string>> = {};

  const name = asString(body.name);
  const email = asString(body.email);
  const message = asString(body.message);

  if (!name) errors.name = "Please enter your name.";
  else if (name.length > MAX_LENGTH.name) errors.name = `Keep your name under ${MAX_LENGTH.name} characters.`;

  if (!email) errors.email = "Please enter your email.";
  else if (email.length > MAX_LENGTH.email || !EMAIL_PATTERN.test(email))
    errors.email = "Please enter a valid email, like you@company.com.";

  if (!message) errors.message = "Please tell us a little about your project.";
  else if (message.length > MAX_LENGTH.message)
    errors.message = `Keep your message under ${MAX_LENGTH.message} characters.`;

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  const rawTypes = Array.isArray(body.projectType) ? body.projectType : [body.projectType];
  const projectType = rawTypes
    .map(optionalString)
    .filter((value): value is string => Boolean(value))
    .slice(0, 10);

  return {
    ok: true,
    data: {
      name,
      email,
      message,
      company: optionalString(body.company),
      category: optionalString(body.category),
      budget: optionalString(body.budget),
      timeline: optionalString(body.timeline),
      projectType: projectType.length > 0 ? projectType : undefined,
    },
  };
}
