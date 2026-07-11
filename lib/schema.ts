export const siteUrl = "https://www.toolsnestx.com";

export const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ToolsNestX",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  sameAs: [],
};

export const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ToolsNestX",
  url: siteUrl,
  description:
    "Free online tools for images, PDFs, text processing and developers.",
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/tools?search={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export function toolSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description,
    url: `${siteUrl}${path}`,
  };
}

export function breadcrumbSchema({
  name,
  path,
}: {
  name: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tools",
        item: `${siteUrl}/tools`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name,
        item: `${siteUrl}${path}`,
      },
    ],
  };
}