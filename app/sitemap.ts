import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    ...services.map((service) => `/services/${service.slug}`),
    "/portfolio",
    "/why-soluven",
    "/about",
    "/faq",
    "/contact",
    "/privacy",
    "/terms",
    "/cookie-policy",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));
}
