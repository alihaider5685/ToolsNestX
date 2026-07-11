"use client";
import { useState } from "react";
import { tools } from "@/lib/tools";
import Link from "next/link";
import { ArrowRight } from "lucide-react";


export default function ToolCard() {
  const [selectedCategory, setSelectedCategory] = useState("All Tools");

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