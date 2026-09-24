import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { PageLoader } from "@/components/sections/PageLoader";
import { WelcomePopup } from "@/components/layout/WelcomePopup";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { JsonLd, organizationJsonLd, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";

// Self-hosted (latin subset, variable weight) rather than next/font/google, so
// builds don't depend on fetching from Google Fonts at build time.
const sora = localFont({
  src: "./fonts/Sora-Variable.woff2",
  variable: "--font-sora",
  weight: "100 800",
  display: "swap",
});

const manrope = localFont({
  src: "./fonts/Manrope-Variable.woff2",
  variable: "--font-manrope",
  weight: "200 800",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  ...buildMetadata({
    title: "Building solutions for the future you see",
    description:
      "Soluven builds high-performing websites, ecommerce experiences and custom software for ambitious businesses.",
  }),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${sora.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd data={organizationJsonLd()} />
        <PageLoader />
        <WelcomePopup />
        <CookieConsent />
        <ScrollProgress />
        <Header />
        <main id="content" className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
