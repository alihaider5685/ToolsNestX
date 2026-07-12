import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://toolsnestx.online",
      lastModified: new Date(),
    },
    {
      url: "https://toolsnestx.online/about",
      lastModified: new Date(),
    },
    {
      url: "https://toolsnestx.online/contact",
      lastModified: new Date(),
    },
    {
      url: "https://toolsnestx.online/privacy-policy",
      lastModified: new Date(),
    },
    {
      url: "https://toolsnestx.online/terms-and-conditions",
      lastModified: new Date(),
    },
  ];
}