import TextCaseConverter from "@/app/components/tools/TextCaseConverter";
import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";

import {
  ShieldCheck,
  Zap,
  Lock,
  MonitorSmartphone,
} from "lucide-react";

export const metadata: Metadata = generateToolMetadata({
  title:
    "Free Text Case Converter Online | Uppercase, Lowercase & Title Case | ToolsNestX",

  description:
    "Convert text to uppercase, lowercase, title case, sentence case and more instantly with our free online Text Case Converter.",

  keywords: [
    "text case converter",
    "uppercase converter",
    "lowercase converter",
    "title case converter",
    "sentence case converter",
    "camel case converter",
    "pascal case converter",
    "snake case converter",
    "kebab case converter",
    "convert text case",
    "change text case",
    "online text case converter",
    "free text case converter",
    "capitalize text",
    "text formatter",
    "text utility",
    "developer tools",
    "writing tools",
    "case converter",
    "toolsnestx text case converter",
  ],

  path: "/tools/text-case-converter",
});

export default function TextCaseConverterPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* ================= HERO ================= */}

      <section className="px-6 pt-24 pb-16">

        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <div className="h-5 bg-black" />

            <span className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-sm font-semibold text-purple-300">

              Text Tools

            </span>

            <div className="h-3 bg-black" />

            <h1 className="mt-8 text-4xl font-extrabold md:text-5xl">

              Text Case Converter

            </h1>

            <div className="h-3 bg-black" />

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Convert text between UPPERCASE, lowercase, Title Case,
              Sentence case and more instantly. Fast, accurate and completely
              free for writers, students, developers and professionals.

            </p>

          </div>

          <div className="h-5 bg-black" />

          {/* ================= TRUST BADGES ================= */}

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">

            <div className="flex items-center gap-3 rounded-full border border-purple-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-purple-500/40 hover:bg-white/10">

              <ShieldCheck className="h-5 w-5 text-purple-400" />

              <span className="text-sm font-medium text-gray-200">

                100% Secure

              </span>

            </div>

            <div className="flex items-center gap-3 rounded-full border border-purple-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-purple-500/40 hover:bg-white/10">

              <Zap className="h-5 w-5 text-purple-400" />

              <span className="text-sm font-medium text-gray-200">

                Instant Conversion

              </span>

            </div>

            <div className="flex items-center gap-3 rounded-full border border-purple-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-purple-500/40 hover:bg-white/10">

              <Lock className="h-5 w-5 text-purple-400" />

              <span className="text-sm font-medium text-gray-200">

                Privacy Protected

              </span>

            </div>

            <div className="flex items-center gap-3 rounded-full border border-purple-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-purple-500/40 hover:bg-white/10">

              <MonitorSmartphone className="h-5 w-5 text-purple-400" />

              <span className="text-sm font-medium text-gray-200">

                Works on Any Device

              </span>

            </div>

          </div>

        </div>

      </section>

       <div className="h-5 bg-black" />

            {/* ================= TOOL ================= */}

      <section className="px-6 pb-20">

        <div className="mx-auto max-w-screen-2xl">

          <div className="rounded-3xl border border-white/10 bg-[#0b0b0b] p-8 shadow-[0_0_40px_rgba(168,85,247,.08)]">

            <TextCaseConverter />

          </div>

        </div>

      </section>

      <div className="h-15 bg-black" />

      {/* ================= ADVERTISEMENT ================= */}

      <section className="px-6 pb-20">

        <div className="mx-auto max-w-screen-2xl">

          <div className="flex h-32 items-center justify-center rounded-3xl border border-dashed border-gray-700 bg-white/[0.02] text-gray-500">

            Google AdSense (728 × 90)

          </div>

        </div>

      </section>

      <div className="h-15 bg-black" />

      {/* ================= FEATURES ================= */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-[8px] text-purple-400">

              FEATURES

            </span>

            <h2 className="mt-6 text-4xl font-bold">

              Why Choose Our Text Case Converter?

            </h2>

            <p className="mx-auto mt-5 max-w-8xl text-lg leading-8 text-gray-400">

              Instantly convert text into different letter cases without
              changing the original content. Ideal for writers, students,
              developers and content creators.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Uppercase Conversion

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Convert all letters to uppercase instantly with one click.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Lowercase Conversion

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Change all text into lowercase quickly and accurately.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Title Case

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Capitalize the first letter of every important word automatically.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Sentence Case

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Convert text into proper sentence case for professional writing.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Instant Results

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Text updates immediately without page reloads or waiting.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Completely Free

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Convert text between different cases as many times as you want for free.

              </p>

            </div>

          </div>

        </div>

      </section>

      <div className="h-10 bg-black" />
            {/* ================= HOW TO USE ================= */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-[8px] text-purple-400">

              HOW TO USE

            </span>

            <h2 className="mt-6 text-4xl font-bold">

              Convert Text In 3 Easy Steps

            </h2>

            <div className="h-5 bg-black" />

          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-600 text-2xl font-bold">

                1

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Paste Your Text

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Type or paste the text you want to convert into the editor.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-600 text-2xl font-bold">

                2

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Select a Case

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Choose Uppercase, Lowercase, Title Case, Sentence Case or another available option.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-600 text-2xl font-bold">

                3

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Copy Your Result

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Copy the converted text instantly and use it anywhere you need.

              </p>

            </div>

          </div>

        </div>

      </section>

      <div className="h-10 bg-black" />

      {/* ================= WHY USE ================= */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-[8px] text-purple-400">

              WHY USE

            </span>

            <h2 className="mt-6 text-4xl font-bold">

              Why Use Our Text Case Converter?

            </h2>

          </div>

          <div className="h-5 bg-black" />

          <div className="mx-auto max-w-8xl space-y-8 text-lg leading-9 text-gray-400">

            <p>

              ToolsNestX Text Case Converter helps you quickly transform text
              into different letter cases without editing each word manually.
              Whether you need UPPERCASE, lowercase, Title Case or Sentence
              Case, everything is converted instantly with a single click.

            </p>

            <p>

              This tool is useful for students, writers, bloggers, marketers,
              developers and professionals who regularly edit documents,
              articles, reports, emails and website content. It saves time,
              improves consistency and eliminates manual formatting mistakes.

            </p>

            <p>

              Everything works directly inside your browser, meaning your text
              stays private and secure. No software installation, account or
              subscription is required. ToolsNestX provides a fast, accurate and
              completely free Text Case Converter for everyone.

            </p>

          </div>

        </div>

      </section>

      <div className="h-10 bg-black" />
            {/* ================= FAQ ================= */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-[8px] text-purple-400">

              FAQ

            </span>

            <h2 className="mt-6 text-4xl font-bold">

              Frequently Asked Questions

            </h2>

            <p className="mx-auto mt-5 max-w-8xl text-lg leading-8 text-gray-400">

              Everything you need to know about our free online Text Case Converter.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mx-auto mt-16 max-w-5xl space-y-5">

            {[
              {
                q: "Is the Text Case Converter free?",
                a: "Yes. ToolsNestX Text Case Converter is completely free with unlimited usage.",
              },
              {
                q: "Which text cases are supported?",
                a: "You can convert text into UPPERCASE, lowercase, Title Case, Sentence Case and other supported formats.",
              },
              {
                q: "Is my text stored on your servers?",
                a: "No. Your text is processed directly inside your browser and is never permanently stored.",
              },
              {
                q: "Can I use it on mobile devices?",
                a: "Yes. The tool works perfectly on desktop, tablet and smartphone browsers.",
              },
              {
                q: "Do I need to install any software?",
                a: "No. Everything works online without downloading or installing anything.",
              },
              {
                q: "Who can use this tool?",
                a: "Students, writers, bloggers, marketers, developers and professionals can use it to format text quickly.",
              },
            ].map((item) => (

              <details
                key={item.q}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-purple-500/30"
              >

                <summary className="cursor-pointer text-lg font-semibold">

                  {item.q}

                </summary>

                <p className="mt-5 leading-8 text-gray-400">

                  {item.a}

                </p>

              </details>

            ))}

          </div>

        </div>

      </section>

      <div className="h-10 bg-black" />

      {/* ================= RELATED TOOLS ================= */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-[8px] text-purple-400">

              RELATED TOOLS

            </span>

            <h2 className="mt-6 text-4xl font-bold">

              Explore More Text Tools

            </h2>

          </div>

          <div className="h-5 bg-black" />

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-purple-500/40">

              <h3 className="text-2xl font-bold">

                Word Counter

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Count words, characters, sentences and paragraphs instantly.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-purple-500/40">

              <h3 className="text-2xl font-bold">

                Text Compare

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Compare two pieces of text and find differences quickly.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-purple-500/40">

              <h3 className="text-2xl font-bold">

                JSON Formatter

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Beautify, validate and format JSON data online.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-purple-500/40">

              <h3 className="text-2xl font-bold">

                QR Generator

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Generate high-quality QR Codes for websites, WiFi and more.

              </p>

            </div>

          </div>

        </div>

      </section>

      <div className="h-15 bg-black" />

      {/* ================= BOTTOM AD ================= */}

      <section className="px-6 pb-20">

        <div className="mx-auto max-w-screen-2xl">

          <div className="flex h-32 items-center justify-center rounded-3xl border border-dashed border-gray-700 bg-white/[0.02] text-gray-500">

            Google AdSense (Responsive)

          </div>

        </div>

      </section>

      <div className="h-15 bg-black" />

      {/* ================= CTA ================= */}

      <section className="px-6 pb-28">

        <div className="mx-auto max-w-screen-2xl">

          <div className="rounded-[40px] border border-purple-500/20 bg-gradient-to-b from-purple-500/10 to-transparent p-16 text-center">

            <h2 className="text-4xl font-bold">

              Ready To Convert Your Text?

            </h2>

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Convert text into uppercase, lowercase, Title Case and Sentence
              Case instantly with ToolsNestX. Fast, secure, accurate and
              completely free.

            </p>

            <button className="mt-10 rounded-2xl bg-purple-600 px-8 py-4 text-lg font-semibold transition hover:bg-purple-500">

              Convert Text Now

            </button>

          </div>

        </div>

      </section>

      <div className="h-15 bg-black" />

    </main>
  );
}