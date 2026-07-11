import RemoveDuplicateLines from "@/app/components/tools/RemoveDuplicateLines";
import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";
import ToolSchema from "@/app/components/seo/ToolSchema";
import BreadcrumbSchema from "@/app/components/seo/BreadcrumbSchema";
import {
  ShieldCheck,
  Zap,
  Lock,
  MonitorSmartphone,
} from "lucide-react";

export const metadata: Metadata = generateToolMetadata({
  title:
    "Free Remove Duplicate Lines Online | Remove Duplicate Text | ToolsNestX",

  description:
    "Remove duplicate lines from text instantly. Clean lists, logs and large text files online for free.",

  keywords: [
    "remove duplicate lines",
    "duplicate remover",
    "remove duplicate text",
    "text cleaner",
    "unique lines",
    "remove duplicate strings",
    "text utility",
    "online duplicate remover",
    "free duplicate remover",
    "developer text tools",
    "toolsnestx duplicate remover",
  ],

  path: "/tools/remove-duplicate-lines",
});

export default function RemoveDuplicateLinesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ToolSchema
  name="Remove Duplicate Lines"
  description="Remove duplicate lines from text instantly online while preserving unique content."
  path="/tools/remove-duplicate-lines"
/>
<BreadcrumbSchema
  name="Remove Duplicate Lines"
  path="/tools/remove-duplicate-lines"
/>

      {/* ================= HERO ================= */}

      <section className="px-6 pt-24 pb-16">

        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <div className="h-5 bg-black" />

            <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300">

              Text Tools

            </span>

            <div className="h-3 bg-black" />

            <h1 className="mt-8 text-4xl font-extrabold md:text-5xl">

              Remove Duplicate Lines

            </h1>

            <div className="h-3 bg-black" />

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Remove duplicate lines from text instantly. Clean repeated
              entries from lists, datasets, logs and documents with one click.
              Fast, accurate, secure and completely free.

            </p>

          </div>

          <div className="h-5 bg-black" />

          {/* ================= TRUST BADGES ================= */}

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">

            <div className="flex items-center gap-3 rounded-full border border-blue-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-blue-500/40 hover:bg-white/10">

              <ShieldCheck className="h-5 w-5 text-blue-400" />

              <span className="text-sm font-medium text-gray-200">

                100% Secure

              </span>

            </div>

            <div className="flex items-center gap-3 rounded-full border border-blue-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-blue-500/40 hover:bg-white/10">

              <Zap className="h-5 w-5 text-blue-400" />

              <span className="text-sm font-medium text-gray-200">

                Instant Processing

              </span>

            </div>

            <div className="flex items-center gap-3 rounded-full border border-blue-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-blue-500/40 hover:bg-white/10">

              <Lock className="h-5 w-5 text-blue-400" />

              <span className="text-sm font-medium text-gray-200">

                Privacy Protected

              </span>

            </div>

            <div className="flex items-center gap-3 rounded-full border border-blue-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-blue-500/40 hover:bg-white/10">

              <MonitorSmartphone className="h-5 w-5 text-blue-400" />

              <span className="text-sm font-medium text-gray-200">

                Works on Any Device

              </span>

            </div>

          </div>

        </div>

      </section>

      <div className="h-10 bg-black" />

      {/* ================= TOOL ================= */}

      <section className="px-6 pb-20">

        <div className="mx-auto max-w-screen-2xl">

          <div className="rounded-3xl border border-white/10 bg-[#0b0b0b] p-8 shadow-[0_0_40px_rgba(59,130,246,.08)]">

            <RemoveDuplicateLines />

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

            <span className="text-sm font-bold uppercase tracking-[8px] text-blue-400">

              FEATURES

            </span>

            <h2 className="mt-6 text-4xl font-bold">

              Why Choose Our Remove Duplicate Lines Tool?

            </h2>

            <p className="mx-auto mt-5 max-w-8xl text-lg leading-8 text-gray-400">

              Quickly clean duplicate lines from text, lists and datasets.
              Perfect for developers, students, writers and data processing
              tasks.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Remove Duplicate Lines

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Instantly remove repeated lines while keeping unique entries.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Fast Processing

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Process large text blocks within seconds directly in your browser.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Privacy First

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Your text is processed locally and never stored on our servers.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Preserve Unique Data

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Keep only unique lines while removing all duplicate entries automatically.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Works Everywhere

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Compatible with Windows, Mac, Linux, Android and iPhone browsers.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Completely Free

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Remove duplicate lines as many times as you want without limits.

              </p>

            </div>

          </div>

        </div>

      </section>

      <div className="h-5 bg-black" />
            {/* ================= HOW TO USE ================= */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-[8px] text-blue-400">

              HOW TO USE

            </span>

            <h2 className="mt-6 text-4xl font-bold">

              Remove Duplicate Lines In 3 Easy Steps

            </h2>

            <div className="h-5 bg-black" />

          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

                1

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Paste Your Text

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Paste or type the text containing duplicate lines into the input box.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

                2

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Remove Duplicates

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Click the Remove Duplicate Lines button to clean your text instantly.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

                3

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Copy Clean Text

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Copy the cleaned text and use it in documents, code, spreadsheets or anywhere else.

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

            <span className="text-sm font-bold uppercase tracking-[8px] text-blue-400">

              WHY USE

            </span>

            <h2 className="mt-6 text-4xl font-bold">

              Why Use Our Remove Duplicate Lines Tool?

            </h2>

          </div>

          <div className="h-5 bg-black" />

          <div className="mx-auto max-w-8xl space-y-8 text-lg leading-9 text-gray-400">

            <p>

              ToolsNestX Remove Duplicate Lines helps you eliminate repeated
              lines from text instantly while preserving unique entries. It is
              an excellent tool for cleaning datasets, organizing lists,
              preparing reports and managing structured information with ease.

            </p>

            <p>

              Whether you're working with programming logs, CSV files, email
              lists, keyword collections or plain text documents, this tool
              quickly removes duplicate lines without requiring software
              installation or technical knowledge.

            </p>

            <p>

              Everything runs securely inside your browser, ensuring your data
              remains private. No files are uploaded or stored, making
              ToolsNestX a fast, reliable and completely free solution for
              removing duplicate lines from text.

            </p>

          </div>

        </div>

      </section>

      <div className="h-10 bg-black" />
            {/* ================= FAQ ================= */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-[8px] text-blue-400">

              FAQ

            </span>

            <h2 className="mt-6 text-4xl font-bold">

              Frequently Asked Questions

            </h2>

            <p className="mx-auto mt-5 max-w-8xl text-lg leading-8 text-gray-400">

              Find answers to the most common questions about our Remove Duplicate Lines tool.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mx-auto mt-16 max-w-5xl space-y-5">

            {[
              {
                q: "Is Remove Duplicate Lines free?",
                a: "Yes. ToolsNestX Remove Duplicate Lines tool is completely free with unlimited usage.",
              },
              {
                q: "Does it remove only duplicate lines?",
                a: "Yes. The tool removes repeated lines while keeping the first occurrence of every unique line.",
              },
              {
                q: "Can I clean large text files?",
                a: "Yes. You can process long lists, logs, datasets and documents within seconds.",
              },
              {
                q: "Is my text uploaded to a server?",
                a: "No. Your text is processed directly inside your browser for maximum privacy.",
              },
              {
                q: "Can I use this tool on mobile devices?",
                a: "Yes. It works perfectly on desktops, tablets and smartphones.",
              },
              {
                q: "Who should use this tool?",
                a: "Developers, students, data analysts, writers and anyone working with text lists can benefit from this tool.",
              },
            ].map((item) => (

              <details
                key={item.q}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-blue-500/30"
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

            <span className="text-sm font-bold uppercase tracking-[8px] text-blue-400">

              RELATED TOOLS

            </span>

            <h2 className="mt-6 text-4xl font-bold">

              Explore More Text Tools

            </h2>

          </div>

          <div className="h-5 bg-black" />

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                Reverse Text

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Reverse words, sentences and complete paragraphs instantly.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                Word Counter

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Count words, characters and paragraphs with ease.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                Text Case Converter

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Convert text between uppercase, lowercase and title case.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                Lorem Ipsum Generator

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Generate placeholder text for websites, apps and mockups.

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

          <div className="rounded-[40px] border border-blue-500/20 bg-gradient-to-b from-blue-500/10 to-transparent p-16 text-center">

            <h2 className="text-4xl font-bold">

              Ready To Clean Your Text?

            </h2>

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Remove duplicate lines instantly with ToolsNestX. Fast, accurate,
              secure and completely free for unlimited use.

            </p>

            <button className="mt-10 rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:bg-blue-500">

              Remove Duplicate Lines

            </button>

          </div>

        </div>

      </section>

      <div className="h-15 bg-black" />

    </main>
  );
}