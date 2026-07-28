import { Suspense } from "react";
import type { Metadata } from "next";
import Script from "next/script";
import { LayoutGrid, ShieldCheck, Zap, Lock } from "lucide-react";

import { generateToolMetadata } from "@/lib/seo";
import { tools } from "@/lib/tools";
import ToolsDirectory from "@/app/tools/ToolsDirectory";

const SITE_URL = "https://toolsnestx.online";

export const metadata: Metadata = generateToolMetadata({
  title: "All Free Online Tools | PDF, Image, Text & Developer Tools | ToolsNestX",

  description:
    "Browse every free online tool on ToolsNestX — PDF, image, text and developer utilities. Fast, secure and browser-based. No signup, no installation required.",

  keywords: [
    "free online tools",
    "all online tools",
    "toolsnestx tools",
    "pdf tools online",
    "image tools online",
    "text tools online",
    "developer tools online",
    "free utilities online",
    "browser based tools",
    "online tools directory",
  ],

  path: "/tools",
});

export default function ToolsPage() {
  // ItemList structured data so search engines understand this page
  // is a directory of every tool the site offers.
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "All ToolsNestX Tools",
    description:
      "Browse every free online tool on ToolsNestX — PDF, image, text and developer utilities.",
    url: `${SITE_URL}/tools`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: tools.map((tool, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: tool.name,
        url: `${SITE_URL}${tool.href}`,
      })),
    },
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Script
        id="tools-collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema),
        }}
      />

      <div className="h-5 bg-black" />

      {/* ================= HERO ================= */}

      <section className="px-6 pt-24 pb-16">
        <div className="mx-auto max-w-screen-2xl">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300">
              <LayoutGrid size={14} />
              {tools.length} Free Tools
            </span>

            <div className="h-3 bg-black" />

            <h1 className="mt-8 text-4xl font-extrabold md:text-5xl">
              All Online Tools
            </h1>

            <div className="h-3 bg-black" />

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">
              Every PDF, image, text and developer tool on ToolsNestX in one
              place. Fast, private and completely free — right in your
              browser.
            </p>
          </div>

          <div className="h-10 bg-black" />

          {/* ================= TRUST BADGES ================= */}

          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-3 rounded-full border border-blue-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl">
              <ShieldCheck className="h-5 w-5 text-blue-400" />
              <span className="text-sm font-medium text-gray-200">
                100% Secure
              </span>
            </div>

            <div className="flex items-center gap-3 rounded-full border border-blue-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl">
              <Zap className="h-5 w-5 text-blue-400" />
              <span className="text-sm font-medium text-gray-200">
                Instant Results
              </span>
            </div>

            <div className="flex items-center gap-3 rounded-full border border-blue-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl">
              <Lock className="h-5 w-5 text-blue-400" />
              <span className="text-sm font-medium text-gray-200">
                No Signup Needed
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="h-10 bg-black" />

      {/* ================= DIRECTORY (search + filter + grid) ================= */}

      <Suspense fallback={<DirectoryFallback />}>
        <ToolsDirectory />
      </Suspense>
    </main>
  );
}

function DirectoryFallback() {
  return (
    <section className="px-6 pb-24">
      <div className="mx-auto grid w-full max-w-screen-2xl item-center grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="h-[210px] animate-pulse rounded-3xl border border-white/10 bg-white/[0.03]"
          />
        ))}
      </div>

    </section>

  );
}