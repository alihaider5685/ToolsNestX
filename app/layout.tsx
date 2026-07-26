import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from '@next/third-parties/google'

import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

import { organization, website } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://toolsnestx.online"),

  title: {
    default: "ToolsNestX - Free Online Tools",
    template: "%s | ToolsNestX",
  },

  description:
    "Free online tools for PDF, Images, Text and Developers. Fast, secure and easy-to-use browser-based utilities.",

keywords: [
  // Brand
  "ToolsNestX",

  // Core / Broad
  "free online tools",
  "online tools",
  "pdf tools",
  "image tools",
  "text tools",
  "developer tools",
  "browser based tools",
  "free utilities",
  "all in one online tools",

  // Low competition - intent based
  "free online tools no signup",
  "online tools without registration",
  "online tools no installation required",
  "free tools for developers online",
  "free online tools for students",
  "unlimited free online tools",
  "online tools for daily use",

  // PDF Tools
  "pdf merger",
  "pdf splitter",
  "merge pdf online free",
  "split pdf online free no signup",
  "compress pdf online free",
  "pdf to word converter free",
  "combine multiple pdf files online",

  // Image Tools
  "image compressor",
  "image converter",
  "compress image online free without losing quality",
  "convert image to webp online",
  "resize image online free",
  "png to jpg converter online free",
  "bulk image compressor online",

  // Text Tools
  "word counter",
  "text case converter",
  "reverse text",
  "sort lines",
  "remove duplicate lines",
  "lorem ipsum generator",
  "character counter online free",
  "uppercase to lowercase converter online",
  "remove extra spaces from text online",
  "text diff checker online",

  // Developer Tools
  "password generator",
  "qr code generator",
  "json formatter",
  "json validator",
  "base64 encoder",
  "base64 decoder",
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

  // Low competition - developer long-tail
  "json formatter and validator online free",
  "free jwt token decoder online",
  "online regex tester with explanation",
  "generate random uuid online free",
  "sha256 hash generator online free",
  "unix timestamp to date converter online",
  "css and js minifier free tool",
  "url encode decode online free tool",
  "generate strong random password online free",
  "qr code generator without watermark free",
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
    url: "https://toolsnestx.online",
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

      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4042434207039023"
     crossOrigin ="anonymous"></script>
     </head>

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

         <GoogleAnalytics gaId="G-YNHHXNFRH8" />

      </body>
    </html>
  )
}
