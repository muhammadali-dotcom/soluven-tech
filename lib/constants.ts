export const siteConfig = {
  name: "Soluven",
  tagline: "Building solutions for the future you see.",
  description:
    "Soluven builds high-performing websites, ecommerce experiences and custom software for ambitious businesses.",
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
