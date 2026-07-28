import { tools } from "@/lib/tools";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ToolCard() {
  const featuredTools = tools.filter((tool) => tool.featured);

  return (
    <section id="tools" className="bg-black px-6 py-24">
      <div className="mx-auto w-full max-w-screen-2xl">

        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Explore Our Most Popular Tools
          </h2>

          <div className="h-5 bg-black" />

          <p className="mt-4 max-w-2xl text-center text-gray-400">
            Powerful online tools for PDFs, images, text processing and
            developers — completely free, no signup needed.
          </p>
        </div>

        <div className="h-5 bg-black" />

        {/* Featured Tools Grid */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">

          {featuredTools.map((tool) => {
            const Icon = tool.icon;

            return (
              <Link
                key={tool.name}
                href={tool.href}
                className="group flex h-[190px] flex-col rounded-3xl border border-white/10 bg-[#171717] px-8 py-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10"
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

        <div className="h-14 bg-black" />

        {/* View All CTA */}
        <div className="flex justify-center">
          <Link
            href="/tools"
            className="group inline-flex items-center gap-3 rounded-full border border-blue-500/30 bg-blue-500/10 px-8 py-4 text-base font-semibold text-blue-300 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/60 hover:bg-blue-500/20 hover:text-white"
          >
            <Sparkles size={18} />
            Explore All {tools.length} Tools
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

      </div>
    </section>
  );
}