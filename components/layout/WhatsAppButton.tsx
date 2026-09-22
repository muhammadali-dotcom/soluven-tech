import { whatsappLink } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/icons/BrandIcons";

export function WhatsAppButton() {
  if (!whatsappLink) return null;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--soluven-green)] text-[var(--color-ink)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ink)]"
    >
      <WhatsAppIcon aria-hidden="true" size={28} />
    </a>
  );
}
