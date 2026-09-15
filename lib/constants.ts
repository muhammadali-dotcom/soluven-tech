export const siteConfig = {
  name: "Soluven Tech",
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

export const socialLinks: {
  label: string;
  href: string;
  icon: "facebook" | "instagram";
}[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1Db6oNytZL/?mibextid=wwXIfr",
    icon: "facebook",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/soluventech?stkn=dXQ2M3pvZmdibXk1&utm_source=qr",
    icon: "instagram",
  },
];
