import SortLines from "@/app/components/tools/SortLines";
import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";
import ToolSchema from "@/app/components/seo/ToolSchema";
import {
  ShieldCheck,
  Zap,
  Lock,
  MonitorSmartphone,
} from "lucide-react";

export const metadata: Metadata = generateToolMetadata({
  title:
    "Free Sort Lines Online | Alphabetically Sort Text | ToolsNestX",

  description:
    "Sort text lines alphabetically in ascending or descending order instantly with our free online Sort Lines tool.",

  keywords: [
    "sort lines",
    "sort text",
    "alphabetical sorter",
    "sort words",
    "sort list",
    "sort strings",
    "online text sorter",
    "text sorting tool",
    "developer text tools",
    "toolsnestx sort lines",
  ],

  path: "/tools/sort-lines",
});

export default function SortLinesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ToolSchema
  name="Sort Lines"
  description="Sort text lines alphabetically or numerically online quickly and for free."
  path="/tools/sort-lines"
/>

      {/* ================= HERO ================= */}

      <section className="px-6 pt-24 pb-16">

        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <div className="h-5 bg-black" />

            <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300">

              Developer Tools

            </span>

            <div className="h-3 bg-black" />

            <h1 className="mt-8 text-4xl font-extrabold md:text-5xl">

              Sort Lines

            </h1>

            <div className="h-3 bg-black" />

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Sort text lines instantly in ascending or descending order with
              our free online Sort Lines tool. Organize lists, keywords, code,
              names and text entries quickly using a fast, secure and
              browser-based line sorting tool.

            </p>

          </div>

          <div className="h-5 bg-black" />

          {/* ================= TRUST BADGES ================= */}

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">

            <div className="flex items-center gap-3 rounded-full border border-blue-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-blue-500/40 hover:bg-white/10">

              <ShieldCheck className="h-5 w-5 text-blue-400" />

              <span className="text-sm font-medium text-gray-200">

                Safe Processing

              </span>

            </div>

            <div className="flex items-center gap-3 rounded-full border border-blue-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-blue-500/40 hover:bg-white/10">

              <Zap className="h-5 w-5 text-blue-400" />

              <span className="text-sm font-medium text-gray-200">

                Instant Sorting

              </span>

            </div>

            <div className="flex items-center gap-3 rounded-full border border-blue-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-blue-500/40 hover:bg-white/10">

              <Lock className="h-5 w-5 text-blue-400" />

              <span className="text-sm font-medium text-gray-200">

                Browser Based

              </span>

            </div>

            <div className="flex items-center gap-3 rounded-full border border-blue-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-blue-500/40 hover:bg-white/10">

              <MonitorSmartphone className="h-5 w-5 text-blue-400" />

              <span className="text-sm font-medium text-gray-200">

                Works Everywhere

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

            <SortLines />

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

              Why Choose Our Sort Lines Tool?

            </h2>

            <p className="mx-auto mt-5 max-w-8xl text-lg leading-8 text-gray-400">

              Organize text lines in seconds with automatic alphabetical
              sorting. Perfect for developers, writers, students and anyone
              working with lists, keywords or large blocks of text.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {/* Feature Cards will continue in Part 2 */}

                <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Alphabetical Sorting

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Sort text lines instantly in ascending or descending alphabetical
                order. Perfect for organizing names, keywords, lists, tags and
                any line-based text with a single click.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Handles Large Text Lists

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Process hundreds or even thousands of text lines quickly,
                making it easy to organize datasets, log files, configuration
                entries and other large collections of text.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Browser-Based Processing

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Your text is sorted directly inside your browser without being
                uploaded to external servers, helping keep your data private
                while delivering instant results.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Clean & Organized Output

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Generate neatly ordered text that's easier to review, compare,
                search and reuse in documents, spreadsheets, source code and
                other projects.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Perfect For Developers

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Quickly organize environment variables, CSS classes, import
                statements, configuration values, keywords and other
                developer-focused text with consistent ordering.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Free & Unlimited

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Sort text lines as often as you need without creating an
                account, installing software or paying subscription fees.
                ToolsNestX keeps the tool completely free.

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

              Sort Text Lines In 3 Easy Steps

            </h2>

            <div className="h-5 bg-black" />

          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-3">

            {/* Steps will continue in Part 3 */}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

            1

          </div>

          <h3 className="mt-8 text-2xl font-bold">

            Paste Your Text

          </h3>

          <p className="mt-5 max-w-8xl leading-8 text-gray-400">

            Copy and paste your text into the editor. Each line will be treated
            as a separate entry, making it easy to organize lists of any size.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

            2

          </div>

          <h3 className="mt-8 text-2xl font-bold">

            Choose Sort Order

          </h3>

          <p className="mt-5 max-w-8xl leading-8 text-gray-400">

            Select ascending or descending order based on your requirements,
            then click the Sort button to organize every line automatically.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

            3

          </div>

          <h3 className="mt-8 text-2xl font-bold">

            Copy the Sorted Result

          </h3>

          <p className="mt-5 max-w-8xl leading-8 text-gray-400">

            Copy or download the sorted text and use it in documents,
            spreadsheets, code editors or any project that requires organized
            line-based content.

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

          Why Use Our Sort Lines Tool?

        </h2>

      </div>

      <div className="h-5 bg-black" />

      <div className="mx-auto max-w-8xl space-y-8 text-lg leading-9 text-gray-400">

        <p>

          Sorting text manually can be slow and error-prone, especially when
          working with long lists of names, keywords, product IDs, email
          addresses or configuration values. Our Sort Lines tool automatically
          arranges every line in alphabetical order, helping you organize
          information within seconds. Whether you're preparing documents,
          cleaning datasets or managing development resources, sorted content is
          much easier to read and maintain.

        </p>

        <p>

          Developers, writers, students and data professionals frequently work
          with line-based text that benefits from consistent ordering. Sorting
          lines improves readability, simplifies comparisons and makes duplicate
          entries easier to identify. It is particularly useful when organizing
          source code, environment variables, translation files, keyword lists,
          inventory records and many other structured text collections.

        </p>

        <p>

          ToolsNestX Sort Lines processes everything directly inside your
          browser, ensuring your text remains private throughout the entire
          process. No uploads, software installations or account registration
          are required. Simply paste your text, choose the preferred sort order
          and generate clean, well-organized output instantly from any desktop
          or mobile device.

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

              Find answers to the most common questions about sorting text lines
              with our free online Sort Lines tool.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mx-auto mt-16 max-w-5xl space-y-5">

            {[
              {
                q: "Is the Sort Lines tool free to use?",
                a: "Yes. ToolsNestX Sort Lines is completely free and allows you to sort unlimited text without creating an account.",
              },
              {
                q: "Can I sort lines in ascending and descending order?",
                a: "Yes. The tool supports both ascending and descending alphabetical sorting, allowing you to organize text the way you need.",
              },
              {
                q: "Is my text uploaded to your servers?",
                a: "No. Your text is processed entirely inside your browser, helping keep your information private and secure.",
              },
              {
                q: "Can I sort large lists of text?",
                a: "Yes. The tool efficiently handles both small text snippets and large collections containing hundreds or thousands of lines.",
              },
              {
                q: "Who can benefit from using Sort Lines?",
                a: "Developers, students, writers, SEO professionals, data analysts and anyone working with line-based text can use this tool to organize information quickly.",
              },
              {
                q: "Which types of text can I sort?",
                a: "You can sort names, keywords, email addresses, product IDs, code snippets, configuration values, URLs and almost any line-based text.",
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

              Explore More Text & Developer Tools

            </h2>

          </div>

          <div className="h-5 bg-black" />

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                Remove Duplicate Lines

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Remove duplicate entries from line-based text with a single click.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                Text Case Converter

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Convert text to uppercase, lowercase, title case and more instantly.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                Word Counter

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Count words, characters, sentences and paragraphs accurately.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                Slug Generator

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Create clean, SEO-friendly URL slugs from any text instantly.

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

              Sort Text Lines In Seconds

            </h2>

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Organize names, keywords, code, lists and other line-based text
              instantly with ToolsNestX. Fast, secure, browser-based and
              completely free—no installation or registration required.

            </p>

            <button className="mt-10 rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:bg-blue-500">

              Sort Lines Now

            </button>

          </div>

        </div>

      </section>

      <div className="h-15 bg-black" />

    </main>
  );
}