"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Button from "@/app/components/common/Button";
import { ArrowRight, Sparkles } from "lucide-react";
import { ChevronDown } from "lucide-react";

/* ---------------- Scroll Reveal Wrapper ---------------- */
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

const whyChoose = [
  { emoji: "⚡", title: "Lightning Fast", desc: "Optimized tools that finish your tasks within seconds." },
  { emoji: "🔒", title: "Secure Processing", desc: "Your files stay inside your browser whenever possible for maximum privacy." },
  { emoji: "💯", title: "Completely Free", desc: "No subscriptions, hidden fees or premium paywalls." },
  { emoji: "📱", title: "Responsive Design", desc: "Works beautifully on desktop, tablet and mobile devices." },
  { emoji: "🚀", title: "Constant Updates", desc: "We continuously improve ToolsNestX and release new tools." },
  { emoji: "🌍", title: "Available Anywhere", desc: "Access your favorite tools from anywhere with an internet connection." },
];

const stats = [
  { value: "30+", label: "Professional Tools" },
  { value: "100%", label: "Free To Use" },
  { value: "24/7", label: "Available Online" },
  { value: "∞", label: "Future Growth" },
];

const faqs = [
  { q: "Is ToolsNestX completely free?", a: "Yes. Every available tool can be used without subscriptions or hidden charges." },
  { q: "Do I need an account?", a: "No. Most tools work instantly without registration." },
  { q: "Are my files secure?", a: "Yes. Privacy is one of our highest priorities and most tools process data directly inside your browser." },
  { q: "Will new tools be added?", a: "Absolutely. We regularly release new tools and improve existing ones." },
];


export default function AboutContent() {
  const [openFaq, setOpenFaq] = useState<number>(-1);
  return (
    <main className="overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-black to-[#06152d]" />
        <div
          className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)]
          bg-[size:80px_80px]
          opacity-20
        "
        />
        <div className="animate-glow-pulse absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[170px]" />
      </div>

      {/* ================= HERO ================= */}
      <section className="relative">
        <div className="mx-auto flex min-h-screen max-w-screen-2xl flex-col items-center justify-center px-6 pt-28 pb-24 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-6 py-2 text-sm font-semibold text-blue-300 backdrop-blur-xl">
              <Sparkles size={16} className="animate-wiggle" />
              Free Online Productivity Platform
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-10 max-w-6xl text-5xl font-black leading-tight md:text-7xl lg:text-8xl">
              About{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                ToolsNestX
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-10 max-w-4xl text-xl leading-10 text-gray-400">
              ToolsNestX is a modern all-in-one online toolkit created for
              students, developers, professionals, businesses and creators.
              Our goal is simple — provide beautiful, fast and completely free
              browser-based tools that save time and improve productivity.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <p className="mt-8 max-w-4xl text-lg leading-9 text-gray-500">
              Whether you need PDF tools, image utilities, text generators or
              developer resources, ToolsNestX delivers everything through a
              clean, secure and lightning-fast experience with no installation
              and no registration required.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-12 flex flex-wrap justify-center gap-5">
              <Button href="/" icon={<ArrowRight size={16} />}>
                Explore Tools
              </Button>
              <Button href="/contact" variant="secondary">
                Contact Us
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="relative py-28">
        <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center px-6">
          <div className="w-full max-w-6xl text-center">
            <Reveal>
              <p className="mb-5 text-sm font-bold uppercase tracking-[8px] text-blue-500">
                OUR STORY
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="text-5xl font-black leading-tight md:text-6xl lg:text-7xl">
                Why We Created{" "}
                <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  ToolsNestX
                </span>
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p className="mx-auto mt-10 max-w-6xl text-xl leading-10 text-gray-400">
                We noticed that many online tools were overloaded with
                advertisements, locked behind subscriptions, or required
                unnecessary software installation before users could even
                begin their work.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <p className="mx-auto mt-8 max-w-6xl text-xl leading-10 text-gray-400">
                Our goal was simple: create one modern platform where anyone
                can instantly access powerful browser-based tools without
                downloads, registrations or hidden costs.
              </p>
            </Reveal>

            <Reveal delay={400}>
              <p className="mx-auto mt-8 max-w-6xl text-xl leading-10 text-gray-400">
                Today, ToolsNestX continues to grow with one mission —
                <span className="font-semibold text-white">
                  {" "}
                  making productivity faster, simpler and completely free for
                  everyone.
                </span>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="h-5 bg-black" />

      {/* ================= VISION ================= */}
      <section className="relative pb-28">
        <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center px-6">
          <Reveal className="w-full flex justify-center">
            <div className="mx-auto flex w-full max-w-6xl flex-col items-center rounded-[36px] border border-blue-500/20 bg-gradient-to-br from-[#0b1222] to-[#111] px-8 py-20 text-center backdrop-blur-xl transition-transform duration-500 hover:-translate-y-1 md:px-16">
              <p className="mb-5 text-sm font-bold uppercase tracking-[8px] text-blue-500">
                OUR VISION
              </p>

              <h2 className="text-center text-5xl font-black leading-tight md:text-6xl lg:text-7xl">
                Building The Future Of{" "}
                <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Free Online Tools
                </span>
              </h2>

              <p className="mx-auto mt-10 max-w-4xl text-center text-xl leading-10 text-gray-400">
                Our vision is to become one of the world's most trusted online
                productivity platforms by providing high-quality browser-based
                tools that are simple, secure and completely free.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="h-8 bg-black" />

      {/* ================= MISSION ================= */}
      <section className="pb-28">
        <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center px-6">
          <Reveal className="w-full flex justify-center">
            <div className="rounded-[36px] border border-white/10 bg-white/5 p-12 backdrop-blur-xl transition-transform duration-500 hover:-translate-y-1">
              <div className="mx-auto w-full max-w-4xl text-center">
                <span className="text-sm font-bold uppercase tracking-[0.35em] text-blue-500">
                  OUR MISSION
                </span>

                <h2 className="mt-5 text-4xl font-black md:text-5xl">
                  Helping Millions Work{" "}
                  <span className="text-blue-500">Smarter Every Day</span>
                </h2>

                <p className="mt-8 text-lg leading-9 text-gray-400">
                  We continuously improve ToolsNestX by adding new tools,
                  optimizing performance and delivering a smooth experience
                  that saves time and increases productivity for everyone.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="h-8 bg-black" />

      {/* ================= STATS ================= */}
      <section className="pb-28">
        <div className="w-full max-w-9xl text-center">
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100}>
                <div className="rounded-[30px] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500">
                  <h3 className="text-6xl font-black text-blue-500">
                    {stat.value}
                  </h3>
                  <p className="mt-4 text-xl text-gray-400">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="h-8 bg-black" />

      {/* ================= WHY CHOOSE ================= */}
      <section className="pb-28">
        <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center px-6">
          <div className="mx-auto mb-20 max-w-4xl text-center">
            <Reveal>
              <span className="text-sm font-bold uppercase tracking-[0.35em] text-blue-500">
                WHY CHOOSE US
              </span>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="mt-5 text-4xl font-black md:text-6xl">
                Why Choose <span className="text-blue-500">ToolsNestX</span>?
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-400">
                We focus on speed, simplicity and privacy so everyone can work
                more efficiently.
              </p>
            </Reveal>

            <div className="h-5 bg-black" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {whyChoose.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 120}>
                <div className="group rounded-[28px] border border-white/10 bg-[#111] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500">
                  <div className="mb-5 text-5xl transition-transform duration-300 group-hover:scale-110">
                    {item.emoji}
                  </div>
                  <h3 className="text-3xl font-bold">{item.title}</h3>
                  <p className="mt-5 text-lg leading-8 text-gray-400">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="h-5 bg-black" />

      {/* ================= CTA ================= */}
      <section className="pb-28">
        <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center px-6">
          <Reveal className="w-full flex justify-center">
            <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 px-10 py-20 text-center">
              <h2 className="mx-auto max-w-4xl text-5xl font-black leading-tight md:text-6xl">
                Ready To Boost Your Productivity?
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-blue-100">
                Join thousands of users who rely on ToolsNestX for fast,
                secure, and completely free online tools. Start using
                powerful browser utilities today.
              </p>

              <div className="mt-12 flex flex-wrap justify-center gap-5">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-lg font-bold text-black transition-all duration-300 hover:scale-105"
                >
                  Explore Tools
                  <ArrowRight size={20} />
                </Link>

                <Link
                  href="/contact"
                  className="rounded-2xl border border-white/30 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:scale-105"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="h-5 bg-black" />

   {/* ================= FAQ ================= */}
<section className="pb-28">
  <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center px-6">
    <div className="mx-auto mb-20 max-w-4xl text-center">
      <Reveal>
        <span className="text-sm font-bold uppercase tracking-[0.35em] text-blue-500">
          FAQ
        </span>
      </Reveal>

      <Reveal delay={100}>
        <h2 className="mt-5 text-4xl font-black md:text-6xl">
          Frequently Asked Questions
        </h2>
      </Reveal>

      <Reveal delay={200}>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-400">
          Everything you need to know about ToolsNestX.
        </p>
      </Reveal>

      <div className="h-5 bg-black" />
    </div>

    <div className="grid gap-8 lg:grid-cols-2">
      {faqs.map((item, i) => {
        const isOpen = openFaq === i;

        return (
          <Reveal key={item.q} delay={(i % 2) * 150}>
            <div
              onClick={() => setOpenFaq(isOpen ? -1 : i)}
              className={`cursor-pointer rounded-[28px] border p-8 backdrop-blur-xl transition-all duration-300 ${
                isOpen
                  ? "border-blue-500/60 bg-white/[0.07] shadow-[0_0_40px_-10px_rgba(37,99,235,0.4)] -translate-y-1"
                  : "border-white/10 bg-white/5 hover:-translate-y-1 hover:border-blue-500/40"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-bold">{item.q}</h3>
                <ChevronDown
                  size={24}
                  className={`shrink-0 text-blue-400 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>

              <div
                className={`grid transition-all duration-300 ease-out ${
                  isOpen
                    ? "mt-5 grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-lg leading-8 text-gray-400">{item.a}</p>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  </div>
</section>

<style>{`
  @keyframes wiggle {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-12deg); }
    75% { transform: rotate(12deg); }
  }
  .animate-wiggle {
    animation: wiggle 2.2s ease-in-out infinite;
  }

  @keyframes glowPulse {
    0%, 100% { opacity: 1; transform: translateX(-50%) scale(1); }
    50% { opacity: 0.65; transform: translateX(-50%) scale(1.08); }
  }
  .animate-glow-pulse {
    animation: glowPulse 7s ease-in-out infinite;
  }
`}</style>
    </main>
  );
}