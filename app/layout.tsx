import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";


export const metadata: Metadata = {
  title: {
    default: "ToolsNestX - Free Online Tools",
    template: "%s | ToolsNestX",
  },

  description:
    "Free online tools for PDF, Images, Text and Developers. Fast, secure and easy-to-use browser-based utilities.",

  keywords: [
    "online tools",
    "pdf tools",
    "image tools",
    "developer tools",
    "text tools",
    "json formatter",
    "word counter",
    "uuid generator",
    "base64 encoder",
    "regex tester",
    "ToolsNestX",
  ],

  authors: [{ name: "ToolsNestX" }],

  openGraph: {
    title: "ToolsNestX - Free Online Tools",
    description:
      "Free online tools for PDF, Images, Text and Developers.",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "ToolsNestX - Free Online Tools",
    description:
      "Free online tools for PDF, Images, Text and Developers.",
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

        <Navbar />

        {children}

        <Footer />

        <Analytics />

      </body>
    </html>
  );
}