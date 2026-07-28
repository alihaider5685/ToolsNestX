import { MetadataRoute } from "next";
import { tools } from "@/lib/tools";
import { blogs } from "@/lib/blogs";

const baseUrl = "https://toolsnestx.online";

// IMPORTANT: Do NOT use `new Date()` / "now" here.
// If every page shows today's date on every build, Google eventually
// stops trusting the freshness signal since nothing ever "looks" static.
//
// Instead, set a fixed date per page and only bump it when that page's
// actual content changes. SITE_UPDATED is the fallback for pages/tools
// that don't track their own update date yet — update it manually
// whenever you ship a meaningful content change across the site.
const SITE_UPDATED = new Date("2026-07-01");

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: SITE_UPDATED,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: SITE_UPDATED,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: SITE_UPDATED,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: SITE_UPDATED,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: SITE_UPDATED,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: SITE_UPDATED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // All Tool Pages
  const toolPages: MetadataRoute.Sitemap = tools.map((tool) => ({
    url: `${baseUrl}${tool.href}`,
    lastModified: SITE_UPDATED,
    changeFrequency: "weekly",
    priority: tool.featured ? 0.9 : 0.8,
  }));

  // All Blog Pages — these already track real dates per post, so they
  // stay untouched and keep using the post's own updatedAt/publishedAt.
  const blogPages: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.updatedAt || blog.publishedAt),
    changeFrequency: "monthly",
    priority: blog.featured ? 0.9 : 0.8,
  }));

  return [
    ...pages,
    ...toolPages,
    ...blogPages,
  ];
}