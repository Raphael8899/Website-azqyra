import { DefaultSeoProps } from "next-seo";

export const seoConfig: DefaultSeoProps = {
  titleTemplate: "%s | AZQYRA",
  defaultTitle: "AI Solutions for Public Institutions & Regulated Industries | AZQYRA",
  description: "Discreet, production-grade AI systems that cut costs, enhance service quality, and accelerate delivery. Built for compliance, speed, and scale.",
  canonical: "https://azqyra.com",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://azqyra.com",
    siteName: "AZQYRA",
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
    handle: "@azqyra",
    site: "@azqyra",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "theme-color",
      content: "#0A1B3C",
    },
    {
      name: "msapplication-TileColor",
      content: "#0A1B3C",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.svg",
      type: "image/svg+xml",
    },
    {
      rel: "icon",
      href: "/favicon.ico",
      sizes: "any",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
  ],
};

