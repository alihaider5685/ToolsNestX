import UrlParser from "@/app/components/tools/UrlParser";
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
    "Free URL Parser Online | Analyze URL Components | ToolsNestX",

  description:
    "Parse and analyze URLs online for free. Extract protocol, hostname, port, path, query parameters and fragments instantly with our secure browser-based URL Parser.",

  keywords: [
    "url parser",
    "parse url",
    "url analyzer",
    "url components",
    "url breakdown",
    "online url parser",
    "free url parser",
    "url inspector",
    "url checker",
    "url validator",
    "url decoder",
    "url encoder",
    "query string parser",
    "url query parser",
    "url parameters",
    "url path parser",
    "hostname parser",
    "developer url tools",
    "web developer tools",
    "api url parser",
    "browser url parser",
    "url utilities",
    "http url parser",
    "https url parser",
    "url analysis tool",
    "url debugging tool",
    "url online tool",
    "best url parser",
    "url parser online",
    "toolsnestx url parser",
  ],

  path: "/tools/url-parser",
});

export default function UrlParserPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ToolSchema
  name="URL Parser"
  description="Parse URLs online and extract protocol, hostname, path, query parameters and fragments instantly."
  path="/tools/url-parser"
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

              URL Parser

            </h1>

            <div className="h-3 bg-black" />

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Parse and analyze URLs instantly with our free online URL Parser.
              Extract individual URL components including the protocol,
              hostname, port, pathname, query parameters and fragment to better
              understand, debug and validate web addresses.

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

                Instant Parsing

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

            <UrlParser />

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

              Why Choose Our URL Parser?

            </h2>

            <p className="mx-auto mt-5 max-w-8xl text-lg leading-8 text-gray-400">

              Analyze URLs with precision by extracting every important
              component including the protocol, domain, subdomain, port,
              pathname, query parameters and fragment. Ideal for developers,
              SEO professionals and web analysts.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {/* Feature Cards will continue in Part 2 */}

                      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Parse Every URL Component

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Instantly extract important URL components including the
                protocol, hostname, subdomain, port, pathname, query string
                and fragment from any web address.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Analyze Query Parameters

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                View individual query parameters in an organized format to make
                debugging URLs, tracking campaigns and testing API endpoints
                faster and more efficient.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Browser-Based Processing

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Parse URLs directly inside your browser without sending them to
                external servers, helping protect sensitive links while
                delivering instant results.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Ideal For Developers

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Quickly inspect URLs during web development, API integration,
                routing configuration and application debugging without using
                additional software.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Helpful For SEO Analysis

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Understand URL structures, analyze tracking parameters and
                review website links for cleaner navigation, better indexing
                and improved search engine optimization.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Free & Unlimited

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Parse unlimited URLs without creating an account, installing
                software or paying subscription fees. ToolsNestX keeps the tool
                completely free for everyone.

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

              Parse a URL In 3 Easy Steps

            </h2>

            <div className="h-5 bg-black" />

          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-3">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

            1

          </div>

          <h3 className="mt-8 text-2xl font-bold">

            Paste the URL

          </h3>

          <p className="mt-5 max-w-8xl leading-8 text-gray-400">

            Copy and paste the complete URL into the input field. The tool
            supports standard HTTP, HTTPS and other valid URL formats for
            accurate parsing.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

            2

          </div>

          <h3 className="mt-8 text-2xl font-bold">

            Parse the URL

          </h3>

          <p className="mt-5 max-w-8xl leading-8 text-gray-400">

            Click the Parse button to instantly extract every important URL
            component, including the protocol, hostname, pathname, query
            parameters and fragment.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

            3

          </div>

          <h3 className="mt-8 text-2xl font-bold">

            Review the Results

          </h3>

          <p className="mt-5 max-w-8xl leading-8 text-gray-400">

            Examine each extracted component and use the parsed information for
            debugging, SEO analysis, API testing or website development.

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

          Why Use Our URL Parser?

        </h2>

      </div>

      <div className="h-5 bg-black" />

      <div className="mx-auto max-w-8xl space-y-8 text-lg leading-9 text-gray-400">

        <p>

          URLs contain valuable information that helps browsers, servers and
          applications locate and deliver web content. Understanding the
          individual parts of a URL—including the protocol, hostname, port,
          pathname, query string and fragment—is essential for debugging,
          development and website management. Our URL Parser instantly breaks
          down complex URLs into clearly organized components, making analysis
          faster and more accurate.

        </p>

        <p>

          Developers frequently use URL parsing when testing APIs, configuring
          routing, handling redirects and validating application links. SEO
          professionals also benefit by analyzing URL structures, campaign
          tracking parameters and canonical links to maintain clean,
          search-engine-friendly website architecture. A well-organized URL
          improves usability, simplifies troubleshooting and supports better
          website performance.

        </p>

        <p>

          ToolsNestX URL Parser performs all processing directly inside your
          browser, helping keep your URLs private without sending data to
          external servers. No software installation, registration or technical
          setup is required. Simply paste a URL, parse it instantly and review
          every component with confidence from any desktop or mobile device.

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

              Find answers to the most common questions about parsing and
              analyzing URLs with our free online URL Parser.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mx-auto mt-16 max-w-5xl space-y-5">

            {[
              {
                q: "Is the URL Parser free to use?",
                a: "Yes. ToolsNestX URL Parser is completely free and lets you analyze unlimited URLs without creating an account or paying subscription fees.",
              },
              {
                q: "What information can a URL Parser extract?",
                a: "The tool extracts important URL components including the protocol, hostname, subdomain, port, pathname, query parameters and fragment for easy analysis.",
              },
              {
                q: "Is my URL uploaded to your servers?",
                a: "No. All URL parsing takes place directly inside your browser, helping keep your links private and secure throughout the process.",
              },
              {
                q: "Who should use a URL Parser?",
                a: "Developers, SEO professionals, QA engineers, marketers, students and website administrators can all benefit from analyzing URL structures quickly and accurately.",
              },
              {
                q: "Can I parse URLs with query parameters?",
                a: "Yes. The tool identifies and displays query parameters separately, making it easier to inspect tracking values, API requests and dynamic URLs.",
              },
              {
                q: "Does the tool modify my URL?",
                a: "No. The URL Parser only analyzes and displays the individual components of your URL. Your original URL remains completely unchanged.",
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

              Explore More URL & Developer Tools

            </h2>

          </div>

          <div className="h-5 bg-black" />

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                URL Encoder & Decoder

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Encode and decode URLs safely for web applications, APIs and query strings.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                Slug Generator

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Create clean, readable and SEO-friendly URL slugs from any text instantly.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                JSON Validator

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Verify JSON syntax and identify formatting errors before deployment.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                Base64 Encoder & Decoder

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Encode and decode Base64 data quickly using your browser.

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

              Parse and Analyze URLs Instantly

            </h2>

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Break down any URL into its individual components, inspect query
              parameters and better understand web addresses with ToolsNestX.
              Fast, secure, browser-based and completely free.

            </p>

            <button className="mt-10 rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:bg-blue-500">

              Parse URL Now

            </button>

          </div>

        </div>

      </section>

      <div className="h-15 bg-black" />

    </main>
  );
}

          