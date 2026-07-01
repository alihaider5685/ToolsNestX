

"use client";

import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { useState } from "react";

export default function ToolCard() {
  const [search, setSearch] = useState("");

  const tools = [
    { name: "Image Compressor", href: "/tools/image-compressor" },
    { name: "Image Converter", href: "/tools/image-convertor" },
    { name: "PDF Merger", href: "/tools/pdf-merger" },
    { name: "PDF Splitter", href: "/tools/pdf-splitter" },
    { name: "Word Counter", href: "/tools/word-counter" },
    { name: "QR Generator", href: "/tools/qr-generator" },
    { name: "JSON Formatter", href: "/tools/json-formatter" },
    { name: "Base64 Encoder", href: "/tools/base64-encoder" },
    { name: "Text Case Converter", href: "/tools/text-case-converter" },
    { name: "Lorem Ipsum Generator", href: "/tools/lorem-ipsum-generator" },
    { name: "URL Encoder / Decoder", href: "/tools/url-encoder-decoder" },
    { name: "UUID Generator", href: "/tools/uuid-generator" },
    { name: "Hash Generator", href: "/tools/hash-generator" },
    { name: "Timestamp Converter", href: "/tools/timestamp-converter" },
    { name: "JWT Decoder", href: "/tools/jwt-decoder" },
    { name: "Regex Tester", href: "/tools/regex-tester" },
    { name: "HTML Encoder / Decoder", href: "/tools/html-encoder-decoder" },
    { name: "CSS Minifier", href: "/tools/css-minifier" },
    { name: "JS Minifier", href: "/tools/js-minifier" },
    { name: "SQL Formatter", href: "/tools/sql-formatter" },
    { name: "Remove Duplicate Lines", href: "/tools/remove-duplicate-lines" },
    { name: "Sort Lines", href: "/tools/sort-lines" },
    { name: "Reverse Text", href: "/tools/reverse-text" },
    { name: "Slug Generator", href: "/tools/slug-generator" },
    { name: "JSON Validator", href: "/tools/json-validator" },
    { name: "URL Parser", href: "/tools/url-parser" },
    { name: "HTML Minifier", href: "/tools/html-minifier" },
    { name: "XML Formatter", href: "/tools/xml-formatter" },
  ];

  const filteredTools = tools.filter((tool) =>
    tool.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section
      id="tools"
      className="bg-black px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="text-center">
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            Free Online Tools
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Explore Our Tools
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Fast, secure and easy-to-use online tools for images,
            PDFs, text processing and developers.
          </p>

          <div className="mt-6">
            <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm text-green-400">
              {tools.length}+ Tools Available
            </span>
          </div>
        </div>
        
{/* Search Section */}
<div className="mx-auto mt-16 mb-20 max-w-3xl">
  <div className="rounded-3xl border border-gray-800 bg-gradient-to-b from-[#141414] to-[#0d0d0d] p-8 shadow-[0_0_40px_rgba(37,99,235,0.08)]">

    <h3 className="mb-6 text-center text-lg font-semibold text-white">
      Find Your Tool Instantly
    </h3>

    <div className="relative">
      <Search
        size={22}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
      />

      <input
        type="text"
        placeholder="Search Image Compressor, PDF Merger, JSON Formatter..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-2xl border border-gray-700 bg-black py-5 pl-14 pr-5 text-white outline-none transition-all duration-300 focus:border-blue-500 focus:shadow-[0_0_30px_rgba(37,99,235,0.35)]"
      />
    </div>

    <div className="mt-6 flex flex-wrap justify-center gap-3">
      <span className="rounded-full bg-[#181818] px-4 py-2 text-sm text-gray-400">
        Image Compressor
      </span>

      <span className="rounded-full bg-[#181818] px-4 py-2 text-sm text-gray-400">
        PDF Merger
      </span>

      <span className="rounded-full bg-[#181818] px-4 py-2 text-sm text-gray-400">
        JSON Formatter
      </span>

      <span className="rounded-full bg-[#181818] px-4 py-2 text-sm text-gray-400">
        QR Generator
      </span>
    </div>

  </div>
</div>
```

      {/* Cards */}
        {filteredTools.length === 0 ? (
          <div className="text-center text-gray-400">
            No tools found.
          </div>
        ) : (
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {filteredTools.map((tool, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-gray-800 bg-gradient-to-b from-[#141414] to-[#0c0c0c] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,0.25)]"
              >
                <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
                  Online Tool
                </span>

                <h3 className="mt-5 text-xl font-bold text-white">
                  {tool.name}
                </h3>

                <p className="mt-3 text-gray-400">
                  Fast, secure and browser-based utility tool.
                </p>

                <Link
                  href={tool.href}
                  className="mt-6 inline-flex items-center gap-2 font-medium text-blue-500 transition-all duration-300 group-hover:gap-3"
                >
                  Open Tool
                  <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
