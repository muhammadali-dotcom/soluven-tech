import { contactEmail, whatsappLink } from "@/lib/constants";

const linkClasses = "underline underline-offset-4";

export function FormSubmitError({
  rateLimited = false,
  className = "",
}: {
  rateLimited?: boolean;
  className?: string;
}) {
  const fallback = whatsappLink ? (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={linkClasses}>
      message us on WhatsApp
    </a>
  ) : (
    <a href={`mailto:${contactEmail}`} className={linkClasses}>
      email us at {contactEmail}
    </a>
  );

  return (
    <p role="alert" className={className}>
      {rateLimited ? "You've sent a few requests already. Please wait a bit, or " : "Something went wrong. Please try again, or "}
      {fallback} instead.
    </p>
  );
}
