import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ToolsNestX.online",
      lastModified: new Date(),
    },
    {
      url: "https://ToolsNestX.online/about",
      lastModified: new Date(),
    },
    {
      url: "https://ToolsNestX.online/contact",
      lastModified: new Date(),
    },
    {
      url: "https://ToolsNestX.online/privacy-policy",
      lastModified: new Date(),
    },
    {
      url: "https://ToolsNestX.online/terms-and-conditions",
      lastModified: new Date(),
    },
  ];
}