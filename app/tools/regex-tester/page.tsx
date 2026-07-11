import RegexTester from "@/app/components/tools/RegexTester";
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
    "Free Regex Tester Online | Test & Debug Regular Expressions | ToolsNestX",

  description:
    "Test, debug and validate regular expressions online with real-time matching. Free browser-based Regex Tester for developers, programmers and students.",

  keywords: [
    "regex tester",
    "regular expression tester",
    "regex validator",
    "regex checker",
    "regex debugger",
    "regex online",
    "online regex tester",
    "free regex tester",
    "regex tool",
    "regex editor",
    "regex parser",
    "regex generator",
    "regular expression checker",
    "test regex",
    "regex match",
    "regex pattern tester",
    "regex expression",
    "regex utility",
    "developer regex tools",
    "javascript regex tester",
    "python regex tester",
    "php regex tester",
    "java regex tester",
    "regex syntax checker",
    "regex playground",
    "regex matching tool",
    "regex learning tool",
    "browser regex tester",
    "best regex tester",
    "toolsnestx regex tester",
  ],

  path: "/tools/regex-tester",
});


export default function RegexTesterPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ToolSchema
  name="Regex Tester"
  description="Test, validate and debug regular expressions online with instant matching results."
  path="/tools/regex-tester"
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

              Regex Tester

            </h1>

            <div className="h-3 bg-black" />

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Test, validate and debug regular expressions with instant
              real-time matching. Easily verify regex patterns, highlight
              matches and improve pattern accuracy for web development,
              scripting and data processing directly in your browser.

            </p>

          </div>

          <div className="h-5 bg-black" />

          {/* ================= TRUST BADGES ================= */}

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">

            <div className="flex items-center gap-3 rounded-full border border-blue-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-blue-500/40 hover:bg-white/10">

              <ShieldCheck className="h-5 w-5 text-blue-400" />

              <span className="text-sm font-medium text-gray-200">

                Accurate Matching

              </span>

            </div>

            <div className="flex items-center gap-3 rounded-full border border-blue-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-blue-500/40 hover:bg-white/10">

              <Zap className="h-5 w-5 text-blue-400" />

              <span className="text-sm font-medium text-gray-200">

                Real-Time Results

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

                Cross Platform

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

            <RegexTester />

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

              Why Choose Our Regex Tester?

            </h2>

            <p className="mx-auto mt-5 max-w-8xl text-lg leading-8 text-gray-400">

              Test and debug regular expressions with live matching, instant
              validation and easy-to-read results. Ideal for developers,
              testers and anyone working with text processing.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Live Pattern Matching

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Test regular expressions instantly and view matching results as you type.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Instant Validation

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Quickly identify invalid patterns and fix syntax errors without extra tools.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Browser-Based Privacy

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                All regex testing happens locally in your browser, keeping your text completely private.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Developer Friendly

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Perfect for JavaScript, Python, PHP, Java, .NET and many other programming languages.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Cross-Platform

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Use the Regex Tester on Windows, macOS, Linux, Android and iOS without installing software.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Completely Free

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Test unlimited regular expressions online with no registration or hidden fees.

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

              Test Regular Expressions In 3 Easy Steps

            </h2>

            <div className="h-5 bg-black" />

          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

                1

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Enter Your Pattern

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Type or paste your regular expression into the pattern field, including any flags if needed.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

                2

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Add Test Text

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Paste the text you want to search so matching results can be highlighted instantly.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

                3

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Review Results

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                View matched text, captured groups and validation results to improve your regular expression.

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

              Why Use Our Regex Tester?

            </h2>

          </div>

          <div className="h-5 bg-black" />

          <div className="mx-auto max-w-8xl space-y-8 text-lg leading-9 text-gray-400">

            <p>

              ToolsNestX Regex Tester helps developers quickly create, test and
              debug regular expressions without switching between different
              tools. Whether you are validating email addresses, matching URLs,
              extracting phone numbers or filtering custom text patterns, our
              Regex Tester provides fast and accurate results directly inside
              your browser.

            </p>

            <p>

              Regular expressions are widely used in JavaScript, Python, PHP,
              Java, C#, Go and many other programming languages for searching,
              validating and transforming text. Our tool highlights matching
              results in real time, making it easier to identify mistakes,
              optimize complex expressions and improve overall development
              productivity.

            </p>

            <p>

              Your privacy is always protected because every regular expression
              test runs locally in your browser. No patterns or sample text are
              transmitted to external servers, making ToolsNestX Regex Tester a
              secure, reliable and completely free solution for developers,
              QA engineers, students and IT professionals.

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

              Find answers to the most common questions about our free Regex Tester.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mx-auto mt-16 max-w-5xl space-y-5">

            {[
              {
                q: "Is Regex Tester free to use?",
                a: "Yes. ToolsNestX Regex Tester is completely free with unlimited regex testing.",
              },
              {
                q: "Which regular expression syntax is supported?",
                a: "The tool is designed for standard JavaScript-compatible regular expressions and common regex patterns used across many programming languages.",
              },
              {
                q: "Is my text uploaded to your servers?",
                a: "No. All pattern matching and validation happen locally in your browser to protect your privacy.",
              },
              {
                q: "Can I test complex regular expressions?",
                a: "Yes. You can test simple and advanced regex patterns, including groups, quantifiers, character classes and flags.",
              },
              {
                q: "Who should use this tool?",
                a: "Developers, QA engineers, students, DevOps teams and anyone working with text validation or data extraction.",
              },
              {
                q: "Can I use this tool for debugging regex patterns?",
                a: "Absolutely. It is ideal for identifying syntax errors, verifying matches and improving complex regular expressions.",
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

              Explore More Developer Tools

            </h2>

          </div>

          <div className="h-5 bg-black" />

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                JSON Formatter

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Beautify and validate JSON with clean, readable formatting.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                JWT Decoder

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Decode JWT tokens and inspect their header and payload instantly.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                Base64 Encoder & Decoder

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Encode and decode Base64 text quickly for development tasks.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                Hash Generator

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Generate secure MD5, SHA-1, SHA-256 and SHA-512 hashes online.

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

              Ready To Test Your Regular Expressions?

            </h2>

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Validate, debug and optimize regular expressions instantly with
              ToolsNestX Regex Tester. Fast, secure, browser-based and completely free.

            </p>

            <button className="mt-10 rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:bg-blue-500">

              Test Regex Now

            </button>

          </div>

        </div>

      </section>

      <div className="h-15 bg-black" />

    </main>
  );
}