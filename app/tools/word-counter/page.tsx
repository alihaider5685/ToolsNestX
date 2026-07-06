import WordCounter from "@/app/components/tools/WordCounter";

import {
  ShieldCheck,
  Zap,
  Lock,
  MonitorSmartphone,
} from "lucide-react";

export const metadata = {
  title: "Free Word Counter Online | FileNestX",
  description:
    "Count words, characters, sentences and paragraphs instantly. Free online Word Counter for writers, students, bloggers and professionals.",
};

export default function WordCounterPage() {
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

              Word Counter

            </h1>

            <div className="h-3 bg-black" />

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Count words, characters, sentences and paragraphs instantly.
              Perfect for writers, students, bloggers, SEO experts and
              professionals. Fast, accurate and completely free.

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

                Real-Time Counting

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

            <WordCounter />

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

              Why Choose Our Word Counter?

            </h2>

            <p className="mx-auto mt-5 max-w-8xl text-lg leading-8 text-gray-400">

              Analyze your text instantly with accurate word, character,
              sentence and paragraph counts. Perfect for writing, blogging,
              SEO and academic work.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Live Word Count

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Word count updates instantly as you type or paste text.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Character Counter

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Count characters with and without spaces for accurate limits.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Sentence Analysis

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Instantly count sentences and paragraphs in your document.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Perfect For SEO

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Optimize blog posts and articles with accurate content length.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                No Installation

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Works directly inside your browser on any device.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Completely Free

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Use the Word Counter unlimited times without paying anything.

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

              Count Words In 3 Easy Steps

            </h2>

            <div className="h-5 bg-black" />

          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-600 text-2xl font-bold">

                1

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Enter Your Text

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Type, paste or upload your text into the Word Counter.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-600 text-2xl font-bold">

                2

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                View Live Statistics

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Instantly see the number of words, characters, sentences and paragraphs.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-600 text-2xl font-bold">

                3

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Edit & Optimize

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Improve your content until it reaches the perfect length.

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

              Why Use Our Word Counter?

            </h2>

          </div>

          <div className="h-5 bg-black" />

          <div className="mx-auto max-w-8xl space-y-8 text-lg leading-9 text-gray-400">

            <p>

              FileNestX Word Counter helps you analyze your writing in real time
              by counting words, characters, sentences and paragraphs instantly.
              Whether you're writing an article, essay, blog post, email or
              social media content, you'll always know the exact length of your
              text.

            </p>

            <p>

              Writers, students, teachers, marketers and SEO professionals use
              word counters every day to meet writing requirements and optimize
              content. Our tool updates automatically while you type, saving time
              and improving productivity.

            </p>

            <p>

              Since everything works directly inside your browser, your text
              remains private and secure. No registration, no downloads and no
              hidden costs—just a fast, reliable and completely free Word
              Counter.

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

              Everything you need to know about our free online Word Counter.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mx-auto mt-16 max-w-5xl space-y-5">

            {[
              {
                q: "Is the Word Counter free?",
                a: "Yes. FileNestX Word Counter is completely free with unlimited usage.",
              },
              {
                q: "Does it count characters too?",
                a: "Yes. It counts words, characters, characters without spaces, sentences and paragraphs.",
              },
              {
                q: "Does the counter update automatically?",
                a: "Yes. Results update instantly while you type or paste text.",
              },
              {
                q: "Is my text stored?",
                a: "No. Your text stays inside your browser and is never permanently stored.",
              },
              {
                q: "Can I use it on mobile?",
                a: "Yes. It works perfectly on desktop, tablet and smartphone browsers.",
              },
              {
                q: "Who can use this tool?",
                a: "Students, writers, bloggers, SEO experts, marketers and anyone who writes text online.",
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

                Text Compare

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Compare two text files and find differences instantly.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-purple-500/40">

              <h3 className="text-2xl font-bold">

                JSON Formatter

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Format and beautify JSON data online.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-purple-500/40">

              <h3 className="text-2xl font-bold">

                Base64 Encoder

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Encode and decode Base64 text quickly.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-purple-500/40">

              <h3 className="text-2xl font-bold">

                QR Generator

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Generate high-quality QR Codes for free.

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

              Ready To Analyze Your Text?

            </h2>

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Count words, characters, sentences and paragraphs instantly with
              FileNestX. Fast, accurate, secure and completely free.

            </p>

            <button className="mt-10 rounded-2xl bg-purple-600 px-8 py-4 text-lg font-semibold transition hover:bg-purple-500">

              Start Counting

            </button>

          </div>

        </div>

      </section>

      <div className="h-15 bg-black" />

    </main>
  );
}