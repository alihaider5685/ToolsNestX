import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://fileneestx.vercel.app/";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: `$https://fileneestx.vercel.app//sitemap.xml`,

    host: baseUrl,
  };
}