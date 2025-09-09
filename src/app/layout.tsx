import type { Metadata } from "next";
import { Inter, Source_Sans_3, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { DefaultSeo } from "next-seo";
import { seoConfig } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Solutions for Public Institutions & Regulated Industries | AZQYRA",
  description: "Discreet, production-grade AI systems that cut costs, enhance service quality, and accelerate delivery. Built for compliance, speed, and scale.",
  metadataBase: new URL("https://azqyra.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://azqyra.com",
    siteName: "AZQYRA",
    title: "AI Solutions for Public Institutions & Regulated Industries | AZQYRA",
    description: "Discreet, production-grade AI systems that cut costs, enhance service quality, and accelerate delivery. Built for compliance, speed, and scale.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "AZQYRA - AI Solutions for Public Institutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Solutions for Public Institutions & Regulated Industries | AZQYRA",
    description: "Discreet, production-grade AI systems that cut costs, enhance service quality, and accelerate delivery. Built for compliance, speed, and scale.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add verification codes when available
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSans.variable} ${ibmPlexMono.variable}`}>
      <body className="body antialiased">
        <DefaultSeo {...seoConfig} />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}

