import JsonMinifier from "@/app/components/tools/JsMinifier";
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
    "Free JavaScript Minifier Online | Minify & Compress JS Code | ToolsNestX",

  description:
    "Minify and compress JavaScript code online for free. Remove unnecessary spaces, comments and line breaks to optimize your JS files for faster website performance.",

  keywords: [
    "javascript minifier",
    "js minifier",
    "minify javascript",
    "compress javascript",
    "compress js",
    "javascript compressor",
    "js compressor",
    "online javascript minifier",
    "online js minifier",
    "free javascript minifier",
    "free js minifier",
    "javascript optimizer",
    "js optimizer",
    "javascript code minifier",
    "js code minifier",
    "javascript cleaner",
    "remove javascript comments",
    "optimize javascript",
    "reduce javascript size",
    "developer javascript tools",
    "web developer tools",
    "frontend developer tools",
    "browser javascript minifier",
    "javascript performance",
    "website optimization",
    "minify js online",
    "javascript utility",
    "best javascript minifier",
    "js code compressor",
    "toolsnestx javascript minifier",
  ],

  path: "/tools/js-minifier",
});

export default function JsonMinifierPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ToolSchema
  name="JS Minifier"
  description="Minify JavaScript code online to reduce file size and improve website performance."
  path="/tools/js-minifier"
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

              JSON Minifier

            </h1>

            <div className="h-3 bg-black" />

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Compress JSON instantly by removing unnecessary spaces,
              line breaks and indentation. Create lightweight JSON for APIs,
              websites and applications quickly, securely and completely free.

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

                Lightning Fast

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

            <JsonMinifier />

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

              Why Choose Our JSON Minifier?

            </h2>

            <p className="mx-auto mt-5 max-w-8xl text-lg leading-8 text-gray-400">

              Compress JSON instantly while preserving its structure. Perfect
              for developers, APIs, websites and applications that require
              lightweight JSON data.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Reduce JSON Size

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Remove unnecessary spaces, tabs and line breaks to create compact JSON.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Faster Data Transfer

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Smaller JSON files improve loading speed for APIs and web applications.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Privacy First

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Your JSON is processed locally inside your browser and never uploaded.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Developer Friendly

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Perfect for REST APIs, configuration files, databases and frontend development.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Instant Processing

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Minify even large JSON documents in seconds with no waiting time.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Completely Free

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Compress unlimited JSON files online without registration or hidden costs.

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

              Minify JSON In 3 Easy Steps

            </h2>

            <div className="h-5 bg-black" />

          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

                1

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Paste JSON

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Paste your formatted or unformatted JSON into the editor.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

                2

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Click Minify

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Press the Minify button to instantly remove unnecessary spaces and formatting.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

                3

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Copy or Download

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Copy the compressed JSON or download it for use in your application.

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

              Why Use Our JSON Minifier?

            </h2>

          </div>

          <div className="h-5 bg-black" />

          <div className="mx-auto max-w-8xl space-y-8 text-lg leading-9 text-gray-400">

            <p>

              ToolsNestX JSON Minifier helps developers compress JSON data by
              removing unnecessary whitespace, indentation and line breaks while
              preserving the original data structure. Smaller JSON files reduce
              bandwidth usage and improve loading speed for websites, APIs and
              applications.

            </p>

            <p>

              Whether you're optimizing API responses, configuration files,
              database exports or frontend assets, this tool creates compact JSON
              that is easier to transmit and store. The process is fast,
              accurate and requires no software installation.

            </p>

            <p>

              Your privacy is always protected. All JSON processing happens
              locally inside your browser, meaning your data never leaves your
              device. ToolsNestX provides a secure, reliable and completely free
              JSON Minifier for developers and technical users.

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

              Find answers to common questions about our free JSON Minifier tool.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mx-auto mt-16 max-w-5xl space-y-5">

            {[
              {
                q: "Is JSON Minifier free to use?",
                a: "Yes. ToolsNestX JSON Minifier is completely free with unlimited usage.",
              },
              {
                q: "Does minifying JSON change the data?",
                a: "No. Only whitespace, indentation and unnecessary formatting are removed. The JSON data itself remains unchanged.",
              },
              {
                q: "Can I minify large JSON files?",
                a: "Yes. You can compress both small and large JSON documents directly in your browser.",
              },
              {
                q: "Is my JSON data secure?",
                a: "Yes. Your JSON never leaves your device because everything is processed locally in your browser.",
              },
              {
                q: "Can I use this tool on mobile?",
                a: "Absolutely. JSON Minifier works on desktops, tablets and smartphones.",
              },
              {
                q: "Who should use JSON Minifier?",
                a: "Developers, API testers, database administrators, students and anyone working with JSON data.",
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

                Beautify and validate JSON for easier reading and debugging.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                Base64 Encoder

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Encode text into Base64 format instantly.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                Base64 Decoder

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Decode Base64 strings into readable text.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                URL Encoder

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Encode and decode URLs safely for web applications.

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

              Ready To Minify Your JSON?

            </h2>

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Compress JSON instantly with ToolsNestX. Fast, secure, lightweight
              and completely free for developers and professionals.

            </p>

            <button className="mt-10 rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:bg-blue-500">

              Minify JSON Now

            </button>

          </div>

        </div>

      </section>

      <div className="h-15 bg-black" />

    </main>
  );
}