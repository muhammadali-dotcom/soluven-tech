export const siteConfig = {
  name: "Soluven",
  description:
    "Soluven is a software house offering web development, mobile app development, ecommerce setup, and consulting services to local and international clients.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://soluven.com",
};

// TODO: confirmed email address — using a placeholder until provided.
export const contactEmail = "hello@soluven.com";

// TODO(open item, REQUIREMENTS.md): WhatsApp business number not yet provided.
export const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || null;
export const whatsappLink = whatsappNumber
  ? `https://wa.me/${whatsappNumber}`
  : null;

// TODO(open item, REQUIREMENTS.md): confirm which social accounts exist.
export const socialLinks: { label: string; href: string }[] = [];
