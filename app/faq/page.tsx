"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/app/components/common/Button";
import { Search, HelpCircle, ArrowRight, ChevronDown, Sparkles } from "lucide-react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Is ToolsNestX completely free?",
      a: "Yes. Every tool available on ToolsNestX can be used completely free without subscriptions or hidden charges. There are no premium tiers or paywalls blocking core features.",
    },
    {
      q: "Do I need to create an account?",
      a: "No. Most ToolsNestX tools work instantly inside your browser. No registration, no email verification, and no login is required to start using any tool.",
    },
    {
      q: "Are my files secure?",
      a: "Absolutely. Your files are processed securely and are never permanently stored on our servers. Files are automatically deleted shortly after processing is complete.",
    },
    {
      q: "Which devices are supported?",
      a: "ToolsNestX works perfectly on desktop, laptop, tablet and mobile browsers. Our responsive design adapts to any screen size without losing functionality.",
    },
    {
      q: "Will more tools be added?",
      a: "Yes. We continuously release new productivity tools and improve existing ones based on user feedback. Check back regularly or subscribe to our updates.",
    },
    {
      q: "Do I need to install any software?",
      a: "No installation is needed at all. ToolsNestX runs entirely in your web browser, so you can start using any tool right away without downloading anything.",
    },
    {
      q: "Is there a limit on how many times I can use a tool?",
      a: "No. You can use any tool as many times as you like, completely free, with no daily limits or usage restrictions.",
    },
    {
      q: "Can I use ToolsNestX for commercial purposes?",
      a: "Yes, our tools can be used for both personal and commercial projects without any additional licensing fees.",
    },
    {
      q: "What browsers are supported?",
      a: "ToolsNestX works smoothly on all modern browsers including Chrome, Firefox, Safari, and Edge. For the best experience, we recommend keeping your browser updated.",
    },
    {
      q: "Do you show ads or sell my data?",
      a: "We respect your privacy. We do not sell your personal data to third parties. Our platform is designed to be lightweight, fast, and privacy-focused.",
    },
    {
      q: "How can I report a bug or issue?",
      a: "You can reach out to us directly through our Contact page. Our team reviews every report and works quickly to fix issues.",
    },
    {
      q: "Can I suggest a new tool?",
      a: "Of course! We love hearing from our users. Send us your tool ideas through the Contact page and we'll consider adding them in future updates.",
    },
  ];

  return (
    <main className="overflow-hidden bg-black text-white">
      {/* ================= BACKGROUND ================= */}

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
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[170px] animate-pulse-slow" />
      </div>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-20 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[180px]" />

        <div className="mx-auto flex min-h-[80vh] max-w-screen-2xl items-center justify-center px-6 py-32">
          <div className="mx-auto max-w-5xl text-center animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-6 py-2 text-sm font-semibold text-blue-300 backdrop-blur-xl">
              <HelpCircle size={18} className="animate-wiggle" />
              Frequently Asked Questions
            </div>

            {/* Heading */}
            <h1 className="mt-10 text-5xl font-black leading-tight md:text-7xl lg:text-8xl">
              Got{" "}
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Questions?
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-10 max-w-3xl text-xl leading-10 text-gray-400">
              Everything you need to know about ToolsNestX, our tools,
              privacy, security and how our platform works.
            </p>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-500">

              Can't find your answer? Contact us anytime and we'll be happy
              to help.
            </p>

            {/* Buttons */}
            <div className="mt-14 flex flex-wrap justify-center gap-5">
              <Button href="/contact" icon={<ArrowRight size={18} />}>
                Contact Support
              </Button>
              <Button href="/" variant="secondary" icon={<ArrowRight size={18} />}>
                Explore Tools
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}

      <section className="px-6 py-28">

        <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center px-6">

          {/* Section Heading */}

          <div className="mx-auto max-w-4xl text-center animate-fade-up">
            <p className="mb-5 text-sm font-bold uppercase tracking-[8px] text-blue-500">
              POPULAR QUESTIONS
            </p>
            <h2 className="text-5xl font-black leading-tight md:text-6xl">
              Find Your{" "}
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Answers
              </span>
            </h2>
            <p className="mx-auto mt-8 max-w-3xl text-xl leading-10 text-gray-400">
              Here are the most common questions users ask before using
              ToolsNestX.
            </p>
          </div>

          {/* FAQ Accordion */}

          <div className="mx-auto mt-20 max-w-5xl w-full space-y-6">
            {faqs.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  style={{ animationDelay: `${i * 60}ms` }}
                  className={`
                    animate-fade-up cursor-pointer rounded-[28px] border p-8
                    transition-all duration-300 ease-out
                    ${isOpen
                      ? "border-blue-500 bg-[#0d1526] shadow-[0_0_40px_-10px_rgba(37,99,235,0.4)]"
                      : "border-white/10 bg-[#111] hover:border-blue-500/60 hover:bg-[#141414]"}
                  `}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-bold">{item.q}</h3>
                    <ChevronDown
                      size={26}
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
                      <p className="text-lg leading-9 text-gray-400">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="h-9 bg-black" />

      {/* ================= CTA SECTION ================= */}
      <section className="px-6 py-28">
        <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center px-6">
          <div className="animate-fade-up overflow-hidden rounded-[40px] border border-blue-500/20 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-12 text-center md:p-20">
            <p className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-[8px] text-blue-100">
              <Sparkles size={16} className="animate-wiggle" />
              STILL NEED HELP?
            </p>

            <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl">
              We're Always Happy To Help
            </h2>

            <p className="mx-auto mt-8 max-w-7xl text-xl leading-10 text-blue-100">
              Can't find the answer you're looking for? Our team is ready to
              help you with anything related to ToolsNestX.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">
              <Button
                href="/contact"
                className="bg-white text-blue-700 hover:bg-gray-100"
                icon={<ArrowRight size={18} />}
              >
                Contact Support
              </Button>
              <Button href="/" variant="secondary" icon={<ArrowRight size={18} />}>
                Explore Tools
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="h-9 bg-black" />

      {/* ================= QUICK STATS ================= */}

      <section className="px-6 pb-32">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-4">
          {[
            { value: "50+", label: "Productivity Tools" },
            { value: "100%", label: "Free Forever" },
            { value: "24/7", label: "Always Available" },
            { value: "Secure", label: "Privacy Focused" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{ animationDelay: `${i * 100}ms` }}
              className="animate-fade-up rounded-[28px] border border-white/10 bg-[#111] p-10 text-center transition-transform duration-300 hover:-translate-y-2 hover:border-blue-500"
            >
              <h3 className="text-6xl font-black text-blue-500">{stat.value}</h3>
              <p className="mt-4 text-xl text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="h-10 bg-black" />

      {/* ================= ANIMATION KEYFRAMES ================= */}

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fadeUp 0.7s ease-out both;
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
        }
        .animate-wiggle {
          animation: wiggle 2.5s ease-in-out infinite;
        }

        @keyframes pulseSlow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.35; }
        }
        .animate-pulse-slow {
          animation: pulseSlow 6s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}


