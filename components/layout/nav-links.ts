import { services } from "@/data/services";

export const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    children: services.map((service) => ({
      href: `/services/${service.slug}`,
      label: service.name,
    })),
  },
  { href: "/portfolio", label: "Work" },
  { href: "/why-soluven", label: "Why Soluven" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];
