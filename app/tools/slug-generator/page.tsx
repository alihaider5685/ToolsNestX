import SlugGenerator from "@/app/components/tools/SlugGenerator";
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
    "Free Slug Generator Online | Create SEO Friendly URLs | ToolsNestX",

  description:
    "Generate clean SEO-friendly URL slugs from any text. Convert titles into optimized URLs instantly with our free Slug Generator.",

  keywords: [
    "slug generator",
    "url slug generator",
    "seo slug",
    "slug creator",
    "generate slug",
    "seo url",
    "friendly url",
    "url generator",
    "blog slug generator",
    "wordpress slug",
    "online slug generator",
    "free slug generator",
    "seo tools",
    "developer tools",
    "toolsnestx slug generator",
  ],

  path: "/tools/slug-generator",
});

export default function SlugGeneratorPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ToolSchema
  name="Slug Generator"
  description="Generate clean, SEO-friendly URL slugs from any text instantly and for free."
  path="/tools/slug-generator"
/>
<BreadcrumbSchema
  name="Slug Generator"
  path="/tools/slug-generator"
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

              Slug Generator

            </h1>

            <div className="h-3 bg-black" />

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Generate clean, readable and SEO-friendly URL slugs instantly.
              Convert titles, headings and text into optimized slugs by
              removing special characters, replacing spaces with hyphens and
              creating URLs that are easy for both users and search engines to
              understand.

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

                Instant Generation

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

            <SlugGenerator />

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

              Why Choose Our Slug Generator?

            </h2>

            <p className="mx-auto mt-5 max-w-8xl text-lg leading-8 text-gray-400">

              Create SEO-friendly URL slugs in seconds. Convert titles and text
              into clean, readable URLs that improve usability, consistency and
              search engine optimization for websites and web applications.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {/* Feature Cards will continue in Part 2 */}

                      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                SEO-Friendly URL Slugs

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Convert titles and text into clean, search engine-friendly URL
                slugs that improve readability, consistency and website
                structure for better SEO performance.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Automatic Text Cleaning

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Remove special characters, punctuation and unnecessary spaces
                automatically while replacing spaces with hyphens to create
                clean, standardized URL slugs.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Browser-Based Processing

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Generate slugs entirely inside your browser without uploading
                your content, helping keep your titles and text private while
                delivering instant results.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Consistent URL Structure

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Create uniform URL formats across blogs, landing pages,
                products and documentation to maintain a professional and
                organized website structure.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Perfect For Websites

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Ideal for bloggers, developers, marketers and eCommerce store
                owners who need optimized slugs for articles, categories,
                products and other website pages.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Free & Unlimited

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Generate unlimited SEO-friendly URL slugs without creating an
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

              Generate a Slug In 3 Easy Steps

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

            Enter Your Text

          </h3>

          <p className="mt-5 max-w-8xl leading-8 text-gray-400">

            Type or paste your title, heading or any text into the input field.
            The tool accepts everything from short phrases to longer page
            titles.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

            2

          </div>

          <h3 className="mt-8 text-2xl font-bold">

            Generate the Slug

          </h3>

          <p className="mt-5 max-w-8xl leading-8 text-gray-400">

            Click the Generate button to instantly convert your text into a
            clean, lowercase and SEO-friendly URL slug with proper formatting.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

            3

          </div>

          <h3 className="mt-8 text-2xl font-bold">

            Copy & Use

          </h3>

          <p className="mt-5 max-w-8xl leading-8 text-gray-400">

            Copy the generated slug and use it for blog posts, product pages,
            categories, landing pages or any URL that requires a clean,
            user-friendly structure.

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

          Why Use Our Slug Generator?

        </h2>

      </div>

      <div className="h-5 bg-black" />

      <div className="mx-auto max-w-8xl space-y-8 text-lg leading-9 text-gray-400">

        <p>

          A well-structured URL plays an important role in both user experience
          and search engine optimization. Long URLs filled with spaces, special
          characters or unnecessary symbols can look unprofessional and become
          difficult to share. Our Slug Generator transforms titles and text into
          clean, readable URL slugs that follow modern SEO best practices,
          making your links easier for visitors to understand and search engines
          to crawl.

        </p>

        <p>

          Whether you're publishing blog articles, creating product pages,
          managing categories or building documentation, consistent URL
          formatting helps maintain a professional website structure. Clean
          slugs improve readability, simplify navigation and create a more
          organized content hierarchy across your entire website. Developers,
          marketers and content creators all benefit from using standardized URL
          slugs for better content management.

        </p>

        <p>

          ToolsNestX Slug Generator processes everything directly inside your
          browser, helping keep your content private while generating optimized
          slugs instantly. No uploads, software installations or account
          registration are required. Simply enter your text, generate the slug
          and copy the result for immediate use in your website, CMS or web
          application.

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

              Find answers to common questions about generating SEO-friendly URL
              slugs with our free online Slug Generator.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mx-auto mt-16 max-w-5xl space-y-5">

            {[
              {
                q: "Is the Slug Generator free to use?",
                a: "Yes. ToolsNestX Slug Generator is completely free and allows you to generate unlimited SEO-friendly URL slugs without creating an account.",
              },
              {
                q: "What is a URL slug?",
                a: "A URL slug is the readable part of a web address that appears after the domain name. It helps describe the page content and improves both usability and search engine optimization.",
              },
              {
                q: "Will the tool remove special characters?",
                a: "Yes. The Slug Generator automatically removes unnecessary special characters, converts text to lowercase and replaces spaces with hyphens to create clean URL slugs.",
              },
              {
                q: "Is my text uploaded to your servers?",
                a: "No. Everything is processed directly inside your browser, helping keep your content private and secure throughout the entire process.",
              },
              {
                q: "Who should use this Slug Generator?",
                a: "Bloggers, developers, SEO professionals, marketers, content creators and eCommerce store owners can all use this tool to create consistent, search engine-friendly URLs.",
              },
              {
                q: "Can I generate slugs for blog posts and product pages?",
                a: "Yes. The tool works perfectly for blog articles, product pages, landing pages, categories, documentation and almost any webpage that requires a clean, optimized URL.",
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

                URL Encoder & Decoder

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Encode and decode URLs safely for web applications and APIs.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                URL Parser

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Parse URLs into individual components for easier analysis and debugging.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                Text Case Converter

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Convert text between uppercase, lowercase, title case and more.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                HTML Encoder & Decoder

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Encode and decode HTML entities quickly and securely in your browser.

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

              Generate SEO-Friendly URL Slugs Instantly

            </h2>

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Create clean, readable and search engine-friendly URL slugs for
              blog posts, product pages, landing pages and websites. Fast,
              secure, browser-based and completely free with ToolsNestX.

            </p>

            <button className="mt-10 rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:bg-blue-500">

              Generate Slug Now

            </button>

          </div>

        </div>

      </section>

      <div className="h-15 bg-black" />

    </main>
  );
}
