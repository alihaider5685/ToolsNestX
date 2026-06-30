import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "FileNestX - Free Online Tools",
    template: "%s | FileNestX",
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
    "filenestx",
  ],

  authors: [{ name: "FileNestX" }],

  openGraph: {
    title: "FileNestX - Free Online Tools",
    description:
      "Free online tools for PDF, Images, Text and Developers.",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "FileNestX - Free Online Tools",
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
      <body>{children}</body>
    </html>
  );
}