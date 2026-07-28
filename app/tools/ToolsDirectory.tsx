"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search, ArrowRight, Sparkles, X } from "lucide-react";
import { tools } from "@/lib/tools";

const CATEGORY_ORDER = [
  "All Tools",
  "PDF Tools",
  "Image Tools",
  "Text Tools",
  "Developer Tools",
];

const QUICK_SEARCHES = ["PDF", "Image", "JSON", "Password", "QR Code"];

export default function ToolsDirectory() {
  const searchParams = useSearchParams();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const [selectedCategory, setSelectedCategory] = useState("All Tools");

  // Support the site's SearchAction schema: /tools?search=xyz
  // Lazy-initialized once from the URL instead of syncing via an effect.
  const [query, setQuery] = useState(() => searchParams.get("search") || "");

  // Press "/" anywhere on the page to jump into the search box, like
  // most modern tool directories (GitHub, Linear, etc).
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const target = e.target as HTMLElement;
      const isTyping =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable;

      if (e.key === "/" && !isTyping) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const categories = useMemo(() => {
    const counts: Record<string, number> = { "All Tools": tools.length };

    tools.forEach((tool) => {
      counts[tool.category] = (counts[tool.category] || 0) + 1;
    });

    return CATEGORY_ORDER.filter(
      (category) => category === "All Tools" || counts[category] > 0
    ).map((category) => ({
      name: category,
      count: counts[category] || 0,
    }));
  }, []);

  const filteredTools = useMemo(() => {
    const q = query.trim().toLowerCase();

    return tools.filter((tool) => {
      const matchesCategory =
        selectedCategory === "All Tools" || tool.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!q) return true;

      const haystack = [
        tool.name,
        tool.desc,
        tool.category,
        ...(tool.keywords || []),
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(q);
    });
  }, [query, selectedCategory]);

  return (
    <section className="px-6 pb-24">
      <div className="mx-auto w-full max-w-screen-2xl">
        {/* ================= SEARCH ================= */}

        <div className="flex justify-center px-4">
          <div className="w-full max-w-[600px]">
            <div
              className={`group relative flex items-center rounded-2xl border bg-white/[0.04] backdrop-blur-xl transition-all duration-300 ${
                query
                  ? "border-blue-500/60 shadow-lg shadow-blue-500/10"
                  : "border-white/10 hover:border-white/20"
              } focus-within:border-blue-500/60 focus-within:bg-white/[0.06] focus-within:shadow-lg focus-within:shadow-blue-500/10`}
            >
              <Search
                size={19}
                className="pointer-events-none ml-5 shrink-0 text-gray-500 transition-colors group-focus-within:text-blue-400"
              />

              <input
                ref={searchInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search tools... e.g. PDF, JSON, image compressor"
                className="h-14 w-full bg-transparent px-3.5 text-[15px] text-white placeholder:text-gray-500 outline-none"
              />

              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="mr-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-gray-500 transition hover:bg-white/10 hover:text-white"
                >
                  <X size={16} />
                </button>
              ) : (
                <kbd className="mr-4 hidden shrink-0 items-center rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[11px] font-medium text-gray-500 sm:flex">
                  /
                </kbd>
              )}
            </div>

            <div className="h-3 bg-black" />

            {/* Quick searches */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs font-medium text-gray-500">
                Popular:
              </span>

              {QUICK_SEARCHES.map((term) => (
                <button
                  key={term}
                  type="button"
                  onClick={() => setQuery(term)}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
                    query.toLowerCase() === term.toLowerCase()
                      ? "border-blue-500/50 bg-blue-500/10 text-blue-300"
                      : "border-white/10 bg-white/[0.03] text-gray-400 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="h-10 bg-black" />

        {/* ================= CATEGORY FILTERS ================= */}

        <div className="flex flex-wrap items-center justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`group relative overflow-hidden rounded-full border px-6 py-3 text-[15px] font-semibold tracking-tight transition-all duration-300 ease-out ${
                selectedCategory === category.name
                  ? "border-blue-500 bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30"
                  : "border-white/10 bg-white/[0.04] text-gray-300 hover:border-blue-500/50 hover:bg-white/[0.08] hover:text-white"
              }`}
            >
              <span className="relative z-10 whitespace-nowrap">
                {category.name}{" "}
                <span
                  className={
                    selectedCategory === category.name
                      ? "text-blue-100"
                      : "text-gray-500"
                  }
                >
                  ({category.count})
                </span>
              </span>
            </button>
          ))}
        </div>

        <div className="h-4 bg-black" />

        {/* ================= RESULTS COUNT ================= */}

        <p className="text-center text-sm text-gray-500">
          Showing{" "}
          <span className="font-semibold text-gray-300">
            {filteredTools.length}
          </span>{" "}
          of {tools.length} tools
        </p>

        <div className="h-10 bg-black" />

        {/* ================= TOOLS GRID ================= */}

        {filteredTools.length > 0 ? (
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {filteredTools.map((tool) => {
              const Icon = tool.icon;

              return (
                <Link
                  key={tool.slug}
                  href={tool.href}
                  className="group relative flex h-[210px] flex-col rounded-3xl border border-white/10 bg-[#171717] px-7 py-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  {tool.featured && (
                    <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-1 text-[11px] font-semibold text-blue-300">
                      <Sparkles size={11} />
                      Popular
                    </span>
                  )}

                  <div
                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${tool.color} shadow-lg`}
                  >
                    <Icon size={26} className="text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {tool.name}
                  </h3>

                  <p className="mt-2.5 line-clamp-2 text-sm leading-6 text-gray-400">
                    {tool.desc}
                  </p>

                  <div className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-blue-400">
                    Open Tool
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="mx-auto flex max-w-md flex-col items-center rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-16 text-center">
            <Search size={32} className="text-gray-600" />
            <p className="mt-5 text-lg font-semibold text-white">
              No tools found
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Try a different keyword or choose another category.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setSelectedCategory("All Tools");
              }}
              className="mt-6 rounded-xl border border-white/10 bg-white/[0.05] px-5 py-2.5 text-sm font-semibold text-white transition hover:border-blue-500/40 hover:bg-white/[0.08]"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}