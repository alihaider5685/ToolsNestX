import UrlEncoderDecoder from "@/app/components/tools/UrlEncoderDecoder";
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
    "Free URL Encoder & Decoder Online | Encode & Decode URLs | ToolsNestX",

  description:
    "Encode and decode URLs online for free. Convert special characters into URL-safe format and decode encoded URLs instantly with our secure browser-based tool.",

  keywords: [
    "url encoder",
    "url decoder",
    "url encode",
    "url decode",
    "encode url",
    "decode url",
    "online url encoder",
    "online url decoder",
    "free url encoder",
    "free url decoder",
    "url encoding tool",
    "url decoding tool",
    "url converter",
    "percent encoding",
    "url escape",
    "url unescape",
    "encode special characters",
    "decode encoded url",
    "url parser",
    "developer tools",
    "web developer tools",
    "api tools",
    "browser url encoder",
    "browser url decoder",
    "javascript url encode",
    "javascript url decode",
    "best url encoder",
    "url utilities",
    "url encoding online",
    "toolsnestx url encoder",
  ],

  path: "/tools/url-encoder-decoder",
});


export default function UrlEncoderDecoderPage() {
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

              URL Encoder & Decoder

            </h1>

            <div className="h-3 bg-black" />

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Encode or decode URLs instantly with our free online URL
              Encoder & Decoder. Safely convert special characters into
              URL-friendly format or restore encoded URLs back to their
              original text. Fast, secure and completely browser-based.

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

                Instant Conversion

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

            <UrlEncoderDecoder />

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

              Why Choose Our URL Encoder & Decoder?

            </h2>

            <p className="mx-auto mt-5 max-w-8xl text-lg leading-8 text-gray-400">

              Encode and decode URLs instantly while preserving accuracy.
              Perfect for developers, SEO experts, API testing and web
              applications that require properly formatted URLs.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Fast URL Encoding

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Convert special characters into URL-safe encoded values within seconds.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Accurate URL Decoding

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Decode encoded URLs back into readable text without losing information.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Privacy First

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Your data stays on your device because everything runs locally inside your browser.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Developer Friendly

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Ideal for web development, REST APIs, query strings and URL parameters.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Cross-Platform Support

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Works perfectly on Windows, macOS, Linux, Android and iPhone browsers.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Free Forever

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Encode and decode unlimited URLs without registration or hidden fees.

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

              Encode or Decode URLs In 3 Easy Steps

            </h2>

            <div className="h-5 bg-black" />

          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

                1

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Paste Your URL

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Paste the URL or text you want to encode or decode into the input box.

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

                Choose the required mode and click the Convert button for instant results.

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

                Copy the converted URL and use it in websites, APIs, applications or query strings.

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

              Why Use Our URL Encoder & Decoder?

            </h2>

          </div>

          <div className="h-5 bg-black" />

          <div className="mx-auto max-w-8xl space-y-8 text-lg leading-9 text-gray-400">

            <p>

              ToolsNestX URL Encoder & Decoder makes it easy to safely convert
              URLs for web applications, APIs and online services. URL encoding
              replaces reserved and special characters with percent-encoded
              values, ensuring URLs remain valid and compatible across browsers
              and servers.

            </p>

            <p>

              Whether you're working with query parameters, REST APIs, form
              submissions, redirects or SEO-friendly URLs, this tool provides
              fast and accurate encoding and decoding. It helps developers avoid
              broken links and ensures that special characters are transmitted
              correctly over the web.

            </p>

            <p>

              Your privacy is fully protected because every conversion is
              performed directly inside your browser. No URLs or text are
              uploaded to external servers, making ToolsNestX a secure, reliable
              and completely free URL Encoder & Decoder for developers,
              marketers and everyday users.

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

              Find answers to the most common questions about our free URL Encoder & Decoder.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mx-auto mt-16 max-w-5xl space-y-5">

            {[
              {
                q: "Is URL Encoder & Decoder free?",
                a: "Yes. ToolsNestX URL Encoder & Decoder is completely free with unlimited usage.",
              },
              {
                q: "What is URL encoding used for?",
                a: "URL encoding converts reserved and special characters into a format that can be safely transmitted in URLs, query strings and web requests.",
              },
              {
                q: "Will decoding restore the original text?",
                a: "Yes. Standard URL-encoded text is accurately decoded back to its original readable format.",
              },
              {
                q: "Is my data uploaded to a server?",
                a: "No. Everything is processed locally inside your browser to keep your information private.",
              },
              {
                q: "Can I use this tool on mobile devices?",
                a: "Yes. It works on desktops, tablets and smartphones without installing any software.",
              },
              {
                q: "Who should use this tool?",
                a: "Developers, SEO professionals, digital marketers, students and anyone working with URLs or APIs can benefit from this tool.",
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

                JSON Minifier

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Compress JSON by removing unnecessary spaces and formatting.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                Base64 Encoder & Decoder

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Encode and decode Base64 text instantly using your browser.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                HTML Formatter

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Beautify HTML code with proper indentation for better readability.

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

              Ready To Encode or Decode URLs?

            </h2>

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Encode and decode URLs instantly with ToolsNestX. Fast, secure,
              accurate and completely free for developers, marketers and
              everyday users.

            </p>

            <button className="mt-10 rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:bg-blue-500">

              Convert URL Now

            </button>

          </div>

        </div>

      </section>

      <div className="h-15 bg-black" />

    </main>
  );
}