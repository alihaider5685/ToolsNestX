import type { Metadata } from "next";

const SITE_NAME = "ToolsNestX";
const SITE_URL = "https://toolsnestx.online";

type SEOProps = {
  title: string;
  description: string;
  keywords?: string[];
  path: string;
  image?: string;
};

export function generateToolMetadata({
  title,
  description,
  keywords = [],
  path,
  image = "/og-image.png",
}: SEOProps): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    metadataBase: new URL(SITE_URL),

    title,

    description,

    keywords,

    alternates: {
      canonical: url,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}