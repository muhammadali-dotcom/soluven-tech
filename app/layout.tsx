import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { PageLoader } from "@/components/sections/PageLoader";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { JsonLd, organizationJsonLd, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      className={`${sora.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd data={organizationJsonLd()} />
        <PageLoader />
        <ScrollProgress />
        <Header />
        <main id="content" className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
