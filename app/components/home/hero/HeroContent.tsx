"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">

      {/* Badge */}

      <div className="mb-8 inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 backdrop-blur-xl">

        <span className="text-sm font-medium text-blue-300">
          🚀 28+ Free Online Tools
        </span>

      </div>

      {/* Heading */}

      <h1 className="max-w-5xl text-5xl font-black leading-tight tracking-tight text-white md:text-7xl lg:text-8xl">

        All Your{" "}

        <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">

          Online Tools

        </span>

        <br />

        In One Place

      </h1>

      {/* Description */}

      <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400 md:text-xl">

        Powerful PDF, Image, Text and Developer tools.
        Fast, secure and completely free to use directly
        in your browser.

      </p>

      {/* Buttons */}

      <div className="mt-10 flex flex-wrap justify-center gap-5">

        <a
          href="#tools"
          className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 font-semibold text-white shadow-[0_0_40px_rgba(37,99,235,.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-105"
        >
          Explore Tools

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>

        <Link
          href="/about"
          className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-blue-500 hover:bg-white/10"
        >
          Learn More
        </Link>

      </div>
            {/* Feature Pills */}

      <div className="mt-16 flex flex-wrap justify-center gap-4">

        <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:bg-white/10">
          <span className="text-sm font-medium text-gray-300">
            ⚡ Fast Processing
          </span>
        </div>

        <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl transition-all duration-300 hover:border-green-500/40 hover:bg-white/10">
          <span className="text-sm font-medium text-gray-300">
            🔒 Secure
          </span>
        </div>

        <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:bg-white/10">
          <span className="text-sm font-medium text-gray-300">
            📱 Mobile Friendly
          </span>
        </div>

        <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/40 hover:bg-white/10">
          <span className="text-sm font-medium text-gray-300">
            💙 Free Forever
          </span>
        </div>

      </div>

    </div>
  );
}