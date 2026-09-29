import { coreServices, growthServices } from "@/data/services";

const toLinks = (list: typeof coreServices) =>
  list.map((service) => ({ href: `/services/${service.slug}`, label: service.name }));

export const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    groups: [
      { label: "Core services", items: toLinks(coreServices) },
      { label: "Growth services", items: toLinks(growthServices) },
    ],
  },
  { href: "/portfolio", label: "Work" },
  { href: "/why-soluven", label: "Why Soluven" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
