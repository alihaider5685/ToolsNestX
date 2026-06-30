
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
    <section id="tools" className="bg-black px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl font-bold text-white">
          Popular Tools
        </h2>

        <p className="mt-3 text-center text-gray-400">
          Browse and search our collection of free online tools.
        </p>

        <div className="mt-4 text-center">
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            {tools.length}+ Tools Available
          </span>
        </div>

        <div className="mx-auto mt-10 mb-12 max-w-xl">
          <input
            type="text"
            placeholder="Search tools..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-800 bg-[#111] px-5 py-4 text-white outline-none transition focus:border-blue-500"
          />
        </div>

        {filteredTools.length === 0 ? (
          <div className="text-center text-gray-400">
            No tools found.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {filteredTools.map((tool, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-800 bg-[#111] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.35)]"
              >
                <h3 className="text-xl font-semibold text-white">
                  {tool.name}
                </h3>

                <p className="mt-3 text-gray-400">
                  Fast, free and secure online tool.
                </p>

                <Link
                  href={tool.href}
                  className="mt-6 inline-flex items-center gap-2 text-blue-500 hover:text-blue-400"
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
