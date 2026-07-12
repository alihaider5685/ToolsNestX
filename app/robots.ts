import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://fileneestx.online/";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: `$https://fileneestx.online//sitemap.xml`,

    host: baseUrl,
  };
}