import LoremIpsumGenerator from "@/app/components/tools/LoremIpsumGenerator";
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
    "Free Lorem Ipsum Generator Online | Generate Placeholder Text | ToolsNestX",

  description:
    "Generate Lorem Ipsum placeholder text instantly. Create paragraphs, sentences or words for web design, apps and mockups.",

  keywords: [
    "lorem ipsum generator",
    "placeholder text",
    "dummy text generator",
    "lorem ipsum",
    "generate lorem ipsum",
    "online lorem ipsum generator",
    "free lorem ipsum",
    "paragraph generator",
    "dummy content",
    "web design text",
    "placeholder generator",
    "latin text",
    "website mockup text",
    "ui placeholder text",
    "toolsnestx lorem ipsum",
  ],

  path: "/tools/lorem-ipsum-generator",
});


export default function LoremIpsumGeneratorPage() {
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

              Lorem Ipsum Generator

            </h1>

            <div className="h-3 bg-black" />

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Generate Lorem Ipsum placeholder text instantly for websites,
              UI mockups, apps, graphic design, printing and publishing.
              Create words, sentences or paragraphs in one click.

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

                Instant Generation

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

            <LoremIpsumGenerator />

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

              Why Choose Our Lorem Ipsum Generator?

            </h2>

            <p className="mx-auto mt-5 max-w-8xl text-lg leading-8 text-gray-400">

              Generate professional placeholder text in seconds for websites,
              mobile apps, UI mockups, design projects and publishing work.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Paragraph Generator

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Generate multiple Lorem Ipsum paragraphs instantly with one click.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Sentence Generator

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Create the exact number of placeholder sentences you need.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Word Generator

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Generate Lorem Ipsum words for buttons, headings and short content.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Perfect For Designers

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Ideal for UI/UX design, Figma, Photoshop and website mockups.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Instant Copy

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Copy generated placeholder text immediately without extra steps.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Completely Free

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Generate unlimited Lorem Ipsum text online at no cost.

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

              Generate Lorem Ipsum In 3 Easy Steps

            </h2>

            <div className="h-5 bg-black" />

          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-600 text-2xl font-bold">

                1

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Choose Quantity

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Select how many paragraphs, sentences or words you want to generate.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-600 text-2xl font-bold">

                2

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Generate Text

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Click the Generate button to instantly create Lorem Ipsum placeholder text.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-600 text-2xl font-bold">

                3

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Copy & Use

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Copy the generated text and use it in your website, app, document or design project.

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

              Why Use Our Lorem Ipsum Generator?

            </h2>

          </div>

          <div className="h-5 bg-black" />

          <div className="mx-auto max-w-8xl space-y-8 text-lg leading-9 text-gray-400">

            <p>

              ToolsNestX Lorem Ipsum Generator helps designers, developers and
              content creators quickly generate professional placeholder text.
              Whether you're building a website, designing a mobile app or
              creating a print layout, Lorem Ipsum makes it easy to visualize
              content before the final copy is ready.

            </p>

            <p>

              Our generator allows you to create paragraphs, sentences or
              individual words in seconds. This saves valuable time during UI/UX
              design, wireframing, prototyping and content planning while
              keeping your layouts clean and realistic.

            </p>

            <p>

              Everything works directly inside your browser, so no software
              installation or registration is required. Your generated text is
              available instantly and can be copied with ease, making ToolsNestX
              a fast, reliable and completely free Lorem Ipsum Generator.

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

              Everything you need to know about our free online Lorem Ipsum Generator.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mx-auto mt-16 max-w-5xl space-y-5">

            {[
              {
                q: "Is the Lorem Ipsum Generator free?",
                a: "Yes. ToolsNestX Lorem Ipsum Generator is completely free with unlimited usage.",
              },
              {
                q: "Can I generate paragraphs and sentences?",
                a: "Yes. You can generate words, sentences and paragraphs depending on your needs.",
              },
              {
                q: "Can I use the generated text commercially?",
                a: "Yes. Lorem Ipsum is placeholder text and can be used in websites, applications, mockups and design projects.",
              },
              {
                q: "Do I need to install any software?",
                a: "No. Everything works directly in your browser without downloads or installation.",
              },
              {
                q: "Can I use it on my phone?",
                a: "Yes. The generator works perfectly on desktop, tablet and mobile devices.",
              },
              {
                q: "Who should use Lorem Ipsum?",
                a: "Designers, developers, writers, agencies, students and publishers commonly use Lorem Ipsum for layout and prototype designs.",
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

                Text Case Converter

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Convert text into uppercase, lowercase, title case and more.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-purple-500/40">

              <h3 className="text-2xl font-bold">

                Text Compare

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Compare two text files and highlight differences instantly.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-purple-500/40">

              <h3 className="text-2xl font-bold">

                JSON Formatter

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Beautify and validate JSON data online for free.

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

              Ready To Generate Placeholder Text?

            </h2>

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Create professional Lorem Ipsum paragraphs, sentences and words
              instantly with ToolsNestXs. Fast, secure and completely free.

            </p>

            <button className="mt-10 rounded-2xl bg-purple-600 px-8 py-4 text-lg font-semibold transition hover:bg-purple-500">

              Generate Lorem Ipsum

            </button>

          </div>

        </div>

      </section>

      <div className="h-15 bg-black" />

    </main>
  );
}