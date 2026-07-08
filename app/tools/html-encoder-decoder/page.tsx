import HtmlEncoderDecoder from "@/app/components/tools/HtmlEncoderDecoder";

import {
  ShieldCheck,
  Zap,
  Lock,
  MonitorSmartphone,
} from "lucide-react";

export const metadata = {
  title: "Free HTML Encoder & Decoder Online | ToolsNestX",
  description:
    "Encode HTML entities and decode HTML text instantly with our free online HTML Encoder & Decoder. Fast, secure and browser-based.",
};

export default function HtmlEncoderDecoderPage() {
  return (
    <main className="min-h-screen bg-black text-white">

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

              HTML Encoder & Decoder

            </h1>

            <div className="h-3 bg-black" />

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Encode HTML special characters into safe HTML entities or decode
              HTML entities back into readable text instantly. Perfect for web
              developers, content creators and anyone working with HTML,
              XML and web applications.

            </p>

          </div>

          <div className="h-5 bg-black" />

          {/* ================= TRUST BADGES ================= */}

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">

            <div className="flex items-center gap-3 rounded-full border border-blue-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-blue-500/40 hover:bg-white/10">

              <ShieldCheck className="h-5 w-5 text-blue-400" />

              <span className="text-sm font-medium text-gray-200">

                Safe Encoding

              </span>

            </div>

            <div className="flex items-center gap-3 rounded-full border border-blue-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-blue-500/40 hover:bg-white/10">

              <Zap className="h-5 w-5 text-blue-400" />

              <span className="text-sm font-medium text-gray-200">

                Instant Conversion

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

            <HtmlEncoderDecoder />

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

              Why Choose Our HTML Encoder & Decoder?

            </h2>

            <p className="mx-auto mt-5 max-w-8xl text-lg leading-8 text-gray-400">

              Encode HTML special characters into safe entities and decode HTML
              entities back into readable text instantly. Designed for web
              developers, CMS users and anyone working with HTML or XML.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Two-Way Conversion

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Encode HTML entities and decode them back into plain text from a single tool.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Instant Processing

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Convert HTML text immediately with fast and accurate browser-based processing.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Safe Browser Processing

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Your HTML content never leaves your device because everything runs locally.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Developer Friendly

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Useful for HTML, XML, CMS platforms, email templates and web application development.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Cross-Platform

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Works seamlessly on Windows, macOS, Linux, Android and iPhone browsers.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Completely Free

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Encode and decode unlimited HTML text online without registration or hidden costs.

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

              Encode or Decode HTML In 3 Easy Steps

            </h2>

            <div className="h-5 bg-black" />

          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

                1

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Paste Your HTML

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Enter or paste HTML code or HTML entities into the input field for processing.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

                2

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Select Encode or Decode

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Choose whether you want to convert special characters into HTML entities or decode them back into readable text.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

                3

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Copy the Result

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Copy the converted output and use it safely in websites, emails, XML files or web applications.

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

              Why Use Our HTML Encoder & Decoder?

            </h2>

          </div>

          <div className="h-5 bg-black" />

          <div className="mx-auto max-w-8xl space-y-8 text-lg leading-9 text-gray-400">

            <p>

              ToolsNestX HTML Encoder & Decoder helps developers safely convert
              HTML special characters into HTML entities and decode HTML
              entities back into readable text. This is especially useful when
              displaying user-generated content, preventing HTML rendering or
              preparing code snippets for websites, blogs and documentation.

            </p>

            <p>

              Whether you're building websites, working with XML documents,
              creating email templates or managing CMS content, this tool makes
              HTML encoding and decoding fast, accurate and effortless. It
              correctly handles common characters such as ampersands, quotation
              marks, angle brackets and many other HTML entities.

            </p>

            <p>

              Privacy always comes first. Every conversion is performed locally
              inside your browser, meaning your HTML content is never uploaded
              to external servers. ToolsNestX HTML Encoder & Decoder provides a
              secure, reliable and completely free solution for developers,
              designers, students and content creators.

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

              Find answers to the most common questions about our free HTML Encoder & Decoder.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mx-auto mt-16 max-w-5xl space-y-5">

            {[
              {
                q: "Is HTML Encoder & Decoder free to use?",
                a: "Yes. ToolsNestX HTML Encoder & Decoder is completely free with unlimited conversions.",
              },
              {
                q: "What is HTML encoding?",
                a: "HTML encoding converts special characters such as <, >, &, quotes and apostrophes into HTML entities so they display correctly without being interpreted as HTML code.",
              },
              {
                q: "What does HTML decoding do?",
                a: "HTML decoding converts HTML entities back into their original readable characters, making encoded content easier to read and edit.",
              },
              {
                q: "Is my HTML uploaded to your servers?",
                a: "No. All encoding and decoding happen locally inside your browser, so your content remains private.",
              },
              {
                q: "Who should use this tool?",
                a: "Web developers, frontend engineers, CMS users, email template designers, students and content creators can all benefit from this tool.",
              },
              {
                q: "Can I encode large HTML snippets?",
                a: "Yes. The tool supports both small text and larger HTML code blocks, depending on your browser's available memory.",
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

                Base64 Encoder & Decoder

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Encode and decode Base64 text quickly for web and API development.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                URL Encoder & Decoder

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Safely encode and decode URLs for websites, APIs and query strings.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                JSON Formatter

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Beautify and validate JSON with clean formatting for developers.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                Regex Tester

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Test and debug regular expressions with instant matching results.

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

              Ready To Encode or Decode HTML?

            </h2>

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Encode HTML entities and decode HTML text instantly with
              ToolsNestX. Fast, secure, browser-based and completely free.

            </p>

            <button className="mt-10 rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:bg-blue-500">

              Encode HTML Now

            </button>

          </div>

        </div>

      </section>

      <div className="h-15 bg-black" />

    </main>
  );
}