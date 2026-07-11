import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

import { organization, website } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.toolsnestx.com"),

  title: {
    default: "ToolsNestX - Free Online Tools",
    template: "%s | ToolsNestX",
  },

  description:
    "Free online tools for PDF, Images, Text and Developers. Fast, secure and easy-to-use browser-based utilities.",

  keywords: [
  "free online tools",
  "online tools",
  "pdf tools",
  "image tools",
  "text tools",
  "developer tools",
  "password generator",
  "qr code generator",
  "image compressor",
  "image converter",
  "pdf merger",
  "pdf splitter",
  "word counter",
  "text case converter",
  "json formatter",
  "json validator",
  "base64 encoder",
  "url encoder",
  "url decoder",
  "uuid generator",
  "hash generator",
  "timestamp converter",
  "jwt decoder",
  "regex tester",
  "html encoder",
  "html decoder",
  "css minifier",
  "javascript minifier",
  "sql formatter",
  "xml formatter",
  "url parser",
  "html minifier",
  "slug generator",
  "reverse text",
  "sort lines",
  "remove duplicate lines",
  "lorem ipsum generator",
  "browser based tools",
  "free utilities",
  "ToolsNestX",
],

  authors: [{ name: "ToolsNestX" }],

  creator: "ToolsNestX",

  publisher: "ToolsNestX",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "ToolsNestX - Free Online Tools",
    description:
      "Free online tools for PDF, Images, Text and Developers.",
    url: "https://www.toolsnestx.com",
    siteName: "ToolsNestX",
    type: "website",
    locale: "en_US",
     images: [
    {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "ToolsNestX",
    },
  ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ToolsNestX - Free Online Tools",
    description:
      "Free online tools for PDF, Images, Text and Developers.",
       images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organization),
          }}
        />

        {/* Website Schema */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(website),
          }}
        />

        <Navbar />

        {children}

        <Footer />

        <Analytics />
      </body>
    </html>
  );
}