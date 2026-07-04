
"use client";

import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Zap,
  Heart,
} from "lucide-react";

const features = [
  {
    title: "Fast Processing",
    icon: Zap,
  },
  {
    title: "Secure",
    icon: ShieldCheck,
  },
  {
    title: "Mobile Friendly",
    icon: Smartphone,
  },
  {
    title: "Free Forever",
    icon: Heart,
  },
];




export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">

      {/* Premium Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#030303] via-[#07111d] to-[#020202]" />

      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)]
          bg-[size:80px_80px]
          opacity-30
        "
      />

      {/* Main Glow */}

      <div className="absolute left-1/2 top-44 h-[760px] w-[760px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[190px]" />

      <div className="absolute -left-28 top-56 h-[420px] w-[420px] rounded-full bg-blue-500/15 blur-[160px]" />

      <div className="absolute -right-28 bottom-24 h-[420px] w-[420px] rounded-full bg-cyan-500/15 blur-[160px]" />

      <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
      {/* Floating Glass */}

      <div className="absolute left-12 top-60 hidden h-28 w-28 rotate-12 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl xl:block" />

      <div className="absolute right-16 top-72 hidden h-24 w-24 -rotate-12 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl xl:block" />

     <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-screen-2xl flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
        {/* Badge */}

        <div className="rounded-full border border-blue-500/30 bg-blue-500/10 px-6 py-2 text-sm font-semibold text-blue-300 backdrop-blur-xl">

          🚀 28+ Professional Online Tools

        </div>

        {/* Heading */}

        <h1 className="mt-8 max-w-6xl text-5xl font-black leading-[1.02] tracking-tight md:text-7xl lg:text-[88px]">

          All Your

          <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">

            Online Tools

          </span>

          In One Place

        </h1>

        {/* Description */}

        <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-400 md:text-xl">

          Compress images, merge PDFs, format JSON, generate QR codes,
          convert files and use powerful online tools directly in your
          browser with no installation, no signup and completely free.

        </p>
               {/* Buttons */}

<div className="mt-16 mb-4 flex flex-wrap justify-center gap-5">

  <a
    href="#tools"
    className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-[0_0_35px_rgba(59,130,246,.45)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_60px_rgba(59,130,246,.65)]"
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

<div className="pt-12 flex flex-wrap items-center justify-center gap-4">

  {features.map((feature) => {
    const Icon = feature.icon;

    return (
      <div
        key={feature.title}
        className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/10"
      >
        <Icon
          size={18}
          className="text-blue-400 transition-transform duration-300 group-hover:scale-110"
        />

        <span className="text-sm font-medium text-gray-300">
          {feature.title}
        </span>

      </div>
    );
  })}

</div>

</div>

{/* Bottom Decorative Glow */}

<div className="pointer-events-none absolute bottom-24 left-20 hidden xl:block">
  <div className="h-20 w-20 rounded-full bg-blue-500/20 blur-2xl" />
</div>

<div className="pointer-events-none absolute bottom-20 right-20 hidden xl:block">
  <div className="h-20 w-20 rounded-full bg-cyan-500/20 blur-2xl" />
</div>

</section>
);
}