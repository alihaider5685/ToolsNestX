import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ToolsNestX.com",
      lastModified: new Date(),
    },
    {
      url: "https://ToolsNestX.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://ToolsNestX.com/contact",
      lastModified: new Date(),
    },
    {
      url: "https://ToolsNestX.com/privacy-policy",
      lastModified: new Date(),
    },
    {
      url: "https://ToolsNestX.com/terms-and-conditions",
      lastModified: new Date(),
    },
  ];
}