import type { Metadata } from "next";
import { contactEmail, siteConfig, socialLinks, whatsappNumber } from "./constants";

export function buildMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  // Pages set their own openGraph object, which replaces the root one, so the
  // shared preview card from app/opengraph-image.tsx is attached explicitly.
  const image = {
    url: `${siteConfig.url}/opengraph-image`,
    width: 1200,
    height: 630,
    alt: `${siteConfig.name}: ${siteConfig.tagline}`,
  };

  return {
    title: `${siteConfig.name} - ${title}`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${siteConfig.name} - ${title}`,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteConfig.name} - ${title}`,
      description,
      images: [image.url],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/soluven_icon.png`,
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    email: contactEmail,
    sameAs: socialLinks.map((link) => link.href),
    areaServed: [{ "@type": "Country", name: "Pakistan" }, "Worldwide"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: contactEmail,
      ...(whatsappNumber ? { telephone: `+${whatsappNumber.replace(/^\+/, "")}` } : {}),
      availableLanguage: ["English", "Urdu"],
    },
  };
}

export function serviceJsonLd(service: {
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
