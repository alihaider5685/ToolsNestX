"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Image as ImageIcon,
  RefreshCw,
  FileText,
  Scissors,
  Type,
  QrCode,
  Braces,
  Lock,
  Link2,
  Hash,
  Clock3,
  ShieldCheck,
  Code2,
  Palette,
  Database,
} from "lucide-react";

export default function ToolCard() {
  const [selectedCategory, setSelectedCategory] = useState("All Tools");
  const tools = [
    {
      name: "Image Compressor",
      href: "/tools/image-compressor",
      icon: ImageIcon,
      color: "from-blue-500 to-cyan-400",
      desc: "Compress images without losing quality.",
      category: "Image Tools"
    },
    {
      name: "Image Converter",
      href: "/tools/image-convertor",
      icon: RefreshCw,
      color: "from-sky-500 to-blue-400",
      desc: "Convert images into different formats.",
      category: "Image Tools"
    },
    {
      name: "PDF Merger",
      href: "/tools/pdf-merger",
      icon: FileText,
      color: "from-red-500 to-orange-400",
      desc: "Merge multiple PDF files quickly.",
      category: "PDF Tools"
    },
    {
      name: "PDF Splitter",
      href: "/tools/pdf-splitter",
      icon: Scissors,
      color: "from-orange-500 to-yellow-400",
      desc: "Split PDF pages instantly.",
      category: "PDF Tools"
    },
    {
      name: "Word Counter",
      href: "/tools/word-counter",
      icon: Type,
      color: "from-green-500 to-emerald-400",
      desc: "Count words and characters.",
      category: "Text Tools"
    },
    {
      name: "QR Generator",
      href: "/tools/qr-generator",
      icon: QrCode,
      color: "from-purple-500 to-pink-400",
      desc: "Generate QR codes online.",
    },
    {
      name: "JSON Formatter",
      href: "/tools/json-formatter",
      icon: Braces,
      color: "from-cyan-500 to-blue-400",
      desc: "Beautify and format JSON.",
      category: "Developer Tools"
    },
    {
      name: "Base64 Encoder",
      href: "/tools/base64-encoder",
      icon: Lock,
      color: "from-indigo-500 to-purple-400",
      desc: "Encode and decode Base64.",
      category: "Developer Tools"
    },
    {
      name: "Text Case Converter",
      href: "/tools/text-case-converter",
      icon: Type,
      color: "from-emerald-500 to-green-400",
      desc: "Convert text cases instantly.",
      category: "Text Tools"
    },
    {
      name: "Lorem Ipsum Generator",
      href: "/tools/lorem-ipsum-generator",
      icon: FileText,
      color: "from-pink-500 to-rose-400",
      desc: "Generate placeholder text.",
      category: "Text Tools"
    },
    {
      name: "URL Encoder / Decoder",
      href: "/tools/url-encoder-decoder",
      icon: Link2,
      color: "from-violet-500 to-fuchsia-400",
      desc: "Encode or decode URLs.",
      category: "Developer Tools"
    },
    {
      name: "UUID Generator",
      href: "/tools/uuid-generator",
      icon: ShieldCheck,
      color: "from-teal-500 to-cyan-400",
      desc: "Generate secure UUIDs.",
      category: "Developer Tools"
    },
        {
      name: "Hash Generator",
      href: "/tools/hash-generator",
      icon: Hash,
      color: "from-yellow-500 to-orange-400",
      desc: "Generate hash values.",
      category: "Developer Tools"
    },
    {
      name: "Timestamp Converter",
      href: "/tools/timestamp-converter",
      icon: Clock3,
      color: "from-lime-500 to-green-400",
      desc: "Convert timestamps easily.",
      category: "Developer Tools"
    },
    {
      name: "JWT Decoder",
      href: "/tools/jwt-decoder",
      icon: ShieldCheck,
      color: "from-purple-500 to-indigo-400",
      desc: "Decode JWT tokens.",
      category: "Developer Tools"
    },
    {
      name: "Regex Tester",
      href: "/tools/regex-tester",
      icon: Code2,
      color: "from-pink-500 to-purple-400",
      desc: "Test regular expressions.",
      category: "Developer Tools"
    },
    {
      name: "HTML Encoder / Decoder",
      href: "/tools/html-encoder-decoder",
      icon: Code2,
      color: "from-blue-500 to-indigo-400",
      desc: "Encode and decode HTML.",
      category: "Developer Tools"
    },
    {
      name: "CSS Minifier",
      href: "/tools/css-minifier",
      icon: Palette,
      color: "from-rose-500 to-pink-400",
      desc: "Minify CSS code.",
      category: "Developer Tools"
    },
    {
      name: "JS Minifier",
      href: "/tools/js-minifier",
      icon: Code2,
      color: "from-yellow-500 to-amber-400",
      desc: "Minify JavaScript.",
      category: "Developer Tools"
    },
    {
      name: "SQL Formatter",
      href: "/tools/sql-formatter",
      icon: Database,
      color: "from-green-500 to-teal-400",
      desc: "Format SQL queries.",
      category: "Developer Tools"
    },
    {
      name: "Remove Duplicate Lines",
      href: "/tools/remove-duplicate-lines",
      icon: FileText,
      color: "from-red-500 to-pink-400",
      desc: "Remove duplicate lines.",
      category: "Text Tools"
    },
    {
      name: "Sort Lines",
      href: "/tools/sort-lines",
      icon: FileText,
      color: "from-cyan-500 to-sky-400",
      desc: "Sort text lines instantly.",
      category: "Text Tools"
    },
    {
      name: "Reverse Text",
      href: "/tools/reverse-text",
      icon: RefreshCw,
      color: "from-orange-500 to-red-400",
      desc: "Reverse text quickly.",
      category: "Text Tools"
    },
    {
      name: "Slug Generator",
      href: "/tools/slug-generator",
      icon: Link2,
      color: "from-violet-500 to-purple-400",
      desc: "Create SEO-friendly slugs.",
      category: "Text Tools"
    },
    {
      name: "JSON Validator",
      href: "/tools/json-validator",
      icon: Braces,
      color: "from-blue-500 to-cyan-400",
      desc: "Validate JSON data.",
      category: "Developer Tools"
    },
    {
      name: "URL Parser",
      href: "/tools/url-parser",
      icon: Link2,
      color: "from-green-500 to-cyan-400",
      desc: "Parse URL components.",
      category: "Developer Tools"
    },
    {
      name: "HTML Minifier",
      href: "/tools/html-minifier",
      icon: Code2,
      color: "from-pink-500 to-red-400",
      desc: "Minify HTML code.",
      category: "Developer Tools"
    },
    {
      name: "XML Formatter",
      href: "/tools/xml-formatter",
      icon: Database,
      color: "from-indigo-500 to-blue-400",
      desc: "Format XML documents.",
      category: "Developer Tools"
    },
  ];
  const categories = [
  "All Tools",
  "Image Tools",
  "PDF Tools",
  "Text Tools",
  "Developer Tools",
 ];
 const filteredTools =
  selectedCategory === "All Tools"
    ? tools
    : tools.filter((tool) => tool.category === selectedCategory);

  return (
  <section id="tools" className="bg-black px-6 py-24">
    <div className="mx-auto w-full max-w-screen-2xl">

      {/* Header */}
<div className="mb-16 flex flex-col items-center text-center">
  <h2 className="text-4xl font-bold text-white md:text-5xl">
    Explore All Tools
  </h2>

  <div className="h-5 bg-black" />

 <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
  {categories.map((category) => (
    <button
      key={category}
      onClick={() => setSelectedCategory(category)}
      className={`group relative overflow-hidden rounded-full border px-7 py-3 text-[16px] font-semibold tracking-tight transition-all duration-300 ease-out
        ${
          selectedCategory === category
            ? "border-blue-500 bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30"
            : "border-white/10 bg-white/[0.04] text-gray-300 hover:border-blue-500/50 hover:bg-white/[0.08] hover:text-white"
        }`}
    >
      <span className="relative z-10 whitespace-nowrap">
        {category}
      </span>

      {selectedCategory !== category && (
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      )}
    </button>
  ))}
</div>

<div className="h-5 bg-black" />

  <p className="mt-4 max-w-2xl text-center text-gray-400">
    Powerful online tools for PDFs, images, text processing and developers.
  </p>
</div>

 <div className="h-5 bg-black" />


      {/* Tools Grid */}
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">

        {filteredTools.map((tool) => {
          const Icon = tool.icon;

          return (
            <Link
              key={tool.name}
              href={tool.href}
             className="group flex h-[190px] flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-[#171717] to-[#0b0b0b] px-8 py-7 transition-all duration-300 ..."
            >
              {/* Icon */}
              <div
                className={`mb-6 ml-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${tool.color} shadow-lg`}
                 >
                
                <Icon size={28} className="text-white" />
              </div>

              {/* Tool Name */}
              <h3 className="text-xl font-bold text-white">
               {tool.name}
                 </h3>

              {/* Description */}
             <p className="mt-3 text-sm leading-7 text-gray-400">
                 {tool.desc}
                </p>

              {/* CTA */}
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

    </div>
  </section>
);
}