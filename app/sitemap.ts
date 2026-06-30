import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://filenestx.com",
      lastModified: new Date(),
    },
    {
      url: "https://filenestx.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://filenestx.com/contact",
      lastModified: new Date(),
    },
    {
      url: "https://filenestx.com/privacy-policy",
      lastModified: new Date(),
    },
    {
      url: "https://filenestx.com/terms-and-conditions",
      lastModified: new Date(),
    },
  ];
}