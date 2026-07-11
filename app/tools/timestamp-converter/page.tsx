import TimestampConverter from "@/app/components/tools/TimestampConverter";
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
    "Free Unix Timestamp Converter Online | Timestamp to Date & Date to Timestamp | ToolsNestX",

  description:
    "Convert Unix timestamps to human-readable dates and convert dates to Unix timestamps instantly. Free, fast, secure and browser-based timestamp converter.",

  keywords: [
    "timestamp converter",
    "unix timestamp converter",
    "epoch converter",
    "timestamp to date",
    "date to timestamp",
    "unix time converter",
    "epoch time converter",
    "online timestamp converter",
    "free timestamp converter",
    "convert unix timestamp",
    "convert timestamp",
    "timestamp calculator",
    "unix epoch",
    "epoch timestamp",
    "current unix timestamp",
    "unix date converter",
    "developer timestamp tool",
    "api timestamp converter",
    "browser timestamp converter",
    "timestamp utility",
    "time converter",
    "date converter",
    "unix time",
    "epoch calculator",
    "timestamp generator",
    "timestamp online",
    "best timestamp converter",
    "unix tools",
    "developer tools",
    "toolsnestx timestamp converter",
  ],

  path: "/tools/timestamp-converter",
});

export default function TimestampConverterPage() {
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

              Timestamp Converter

            </h1>

            <div className="h-3 bg-black" />

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Convert Unix timestamps into human-readable dates and convert
              dates back into Unix timestamps instantly. Ideal for developers,
              system administrators, API testing and database management.
              Everything runs securely inside your browser.

            </p>

          </div>

          <div className="h-5 bg-black" />

          {/* ================= TRUST BADGES ================= */}

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">

            <div className="flex items-center gap-3 rounded-full border border-blue-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-blue-500/40 hover:bg-white/10">

              <ShieldCheck className="h-5 w-5 text-blue-400" />

              <span className="text-sm font-medium text-gray-200">

                Accurate Conversion

              </span>

            </div>

            <div className="flex items-center gap-3 rounded-full border border-blue-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-blue-500/40 hover:bg-white/10">

              <Zap className="h-5 w-5 text-blue-400" />

              <span className="text-sm font-medium text-gray-200">

                Instant Results

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

            <TimestampConverter />

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

              Why Choose Our Timestamp Converter?

            </h2>

            <p className="mx-auto mt-5 max-w-8xl text-lg leading-8 text-gray-400">

              Convert Unix timestamps and human-readable dates instantly with
              accurate results. Designed for developers, system administrators
              and anyone working with APIs, databases or server logs.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Two-Way Conversion

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Convert Unix timestamps into readable dates and convert dates back into Unix timestamps instantly.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Instant Results

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Get accurate conversions immediately without refreshing the page or installing software.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Browser-Based Privacy

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Every conversion is processed locally in your browser to keep your information private.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Developer Friendly

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Perfect for debugging APIs, reading server logs, working with databases and backend development.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Universal Compatibility

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Works smoothly on Windows, macOS, Linux, Android and iPhone browsers.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Completely Free

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Use the Timestamp Converter as often as you need without registration or hidden charges.

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

              Convert Timestamps In 3 Easy Steps

            </h2>

            <div className="h-5 bg-black" />

          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

                1

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Enter Your Value

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Enter a Unix timestamp or choose a date and time you want to convert.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

                2

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Choose Conversion Type

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Convert from Unix timestamp to a readable date or convert a date back into a Unix timestamp.

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

                Copy the converted value and use it in your applications, APIs, databases or server logs.

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

              Why Use Our Timestamp Converter?

            </h2>

          </div>

          <div className="h-5 bg-black" />

          <div className="mx-auto max-w-8xl space-y-8 text-lg leading-9 text-gray-400">

            <p>

              ToolsNestX Timestamp Converter helps developers, system
              administrators and technical users quickly convert Unix
              timestamps into human-readable dates and convert dates back into
              Unix timestamps. This makes it easy to interpret time values
              stored in databases, APIs and server logs.

            </p>

            <p>

              Whether you're debugging an application, analyzing log files,
              working with REST APIs or storing timestamps in databases, our
              converter provides accurate two-way conversions in just a few
              seconds. It supports both seconds-based Unix timestamps and
              standard date and time formats used in modern applications.

            </p>

            <p>

              Your privacy is fully protected because every conversion happens
              directly inside your browser. No timestamps or date information
              are transmitted to external servers, making ToolsNestX a secure,
              reliable and completely free Timestamp Converter for developers,
              students and IT professionals.

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

              Find answers to the most common questions about our free Timestamp Converter.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mx-auto mt-16 max-w-5xl space-y-5">

            {[
              {
                q: "Is Timestamp Converter free to use?",
                a: "Yes. ToolsNestX Timestamp Converter is completely free with unlimited conversions.",
              },
              {
                q: "Can I convert Unix timestamps into readable dates?",
                a: "Yes. The tool instantly converts Unix timestamps into human-readable date and time formats.",
              },
              {
                q: "Can I convert dates back into Unix timestamps?",
                a: "Absolutely. You can convert standard date and time values into Unix timestamps with one click.",
              },
              {
                q: "Is my data uploaded to a server?",
                a: "No. All conversions happen locally inside your browser, keeping your data private.",
              },
              {
                q: "Who should use this tool?",
                a: "Developers, system administrators, DevOps engineers, database administrators and students can all benefit from this tool.",
              },
              {
                q: "Does this tool support API and database development?",
                a: "Yes. It is ideal for API testing, database records, log analysis and software development workflows.",
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

                Hash Generator

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Generate MD5, SHA-1, SHA-256 and SHA-512 hashes instantly.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                UUID Generator

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Generate secure UUID Version 4 identifiers for your applications.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                URL Encoder & Decoder

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Encode and decode URLs safely for APIs and web development.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                JSON Formatter

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Beautify and validate JSON with clean formatting.

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

              Ready To Convert Timestamps?

            </h2>

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Convert Unix timestamps and human-readable dates instantly with
              ToolsNestX. Fast, accurate, secure and completely free.

            </p>

            <button className="mt-10 rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:bg-blue-500">

              Convert Timestamp Now

            </button>

          </div>

        </div>

      </section>

      <div className="h-15 bg-black" />

    </main>
  );
}