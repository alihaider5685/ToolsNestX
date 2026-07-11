import CssMinifier from "@/app/components/tools/CssMinifier";
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
    "Free CSS Minifier Online | Minify & Compress CSS Code | ToolsNestX",

  description:
    "Minify and compress CSS code online for free. Remove unnecessary spaces, comments and line breaks to optimize your stylesheets for faster website performance.",

  keywords: [
    "css minifier",
    "minify css",
    "compress css",
    "css compressor",
    "css optimizer",
    "online css minifier",
    "free css minifier",
    "css code minifier",
    "css code compressor",
    "minify stylesheet",
    "css cleaner",
    "css formatter",
    "css beautifier",
    "css optimization",
    "reduce css size",
    "optimize css",
    "remove css whitespace",
    "remove css comments",
    "developer css tools",
    "web developer tools",
    "browser css minifier",
    "css online tool",
    "css code optimizer",
    "frontend developer tools",
    "website optimization",
    "css performance",
    "best css minifier",
    "css utility",
    "css minify online",
    "toolsnestx css minifier",
  ],

  path: "/tools/css-minifier",
});

export default function CssMinifierPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ToolSchema
  name="CSS Minifier"
  description="Minify CSS code online by removing unnecessary spaces, comments and formatting."
  path="/tools/css-minifier"
/>
<BreadcrumbSchema
  name="CSS Minifier"
  path="/tools/css-minifier"
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

              CSS Minifier

            </h1>

            <div className="h-3 bg-black" />

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Minify CSS instantly by removing unnecessary spaces, comments,
              line breaks and formatting while preserving functionality.
              Optimize your stylesheets, reduce file size and improve website
              loading speed with our fast, secure and browser-based CSS
              Minifier.

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

                Instant Minification

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

            <CssMinifier />

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

              Why Choose Our CSS Minifier?

            </h2>

            <p className="mx-auto mt-5 max-w-8xl text-lg leading-8 text-gray-400">

              Compress CSS code instantly without affecting functionality.
              Remove unnecessary characters, improve loading speed and prepare
              production-ready stylesheets directly in your browser.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {/* Feature Cards will continue in Part 2 */}

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Smaller CSS Files

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Remove unnecessary whitespace, comments and formatting to
                significantly reduce CSS file size while keeping every style
                rule intact. Smaller files load faster and consume less
                bandwidth.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Faster Website Performance

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Optimized stylesheets help browsers download and render pages
                more efficiently, contributing to faster loading times and a
                smoother browsing experience across desktop and mobile devices.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Browser-Based Processing

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Your CSS is processed entirely inside your browser. Nothing is
                uploaded to external servers, giving you a fast, private and
                secure way to optimize your stylesheets.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Production Ready Output

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Generate compact, optimized CSS that is ready for deployment in
                websites, web applications, landing pages and other production
                environments without additional cleanup.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Works With Any CSS

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Minify plain CSS, framework-generated stylesheets and custom
                code created for modern frontend projects. Compatible with any
                valid CSS syntax.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Free & Unlimited

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Compress CSS as many times as you need without creating an
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

              Minify CSS In 3 Easy Steps

            </h2>

            <div className="h-5 bg-black" />

          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

                1

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Paste Your CSS

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Copy and paste your CSS code into the editor. The tool supports
                everything from small snippets to large production stylesheets.

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

                Press the Minify button to remove unnecessary whitespace, comments,
                line breaks and formatting while preserving valid CSS rules.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

                3

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Copy the Minified CSS

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Copy or download the optimized CSS and use it directly in your
                website or web application for improved performance.

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

          Why Use Our CSS Minifier?

        </h2>

      </div>

      <div className="h-5 bg-black" />

      <div className="mx-auto max-w-8xl space-y-8 text-lg leading-9 text-gray-400">

        <p>

          CSS files created during development often contain indentation,
          comments, blank lines and extra spaces that improve readability for
          developers but increase file size. A CSS Minifier removes these
          unnecessary characters without changing how the stylesheet behaves.
          The result is a smaller, cleaner CSS file that loads more quickly,
          helping websites deliver a faster experience to visitors while
          reducing bandwidth usage.

        </p>

        <p>

          Optimized CSS is an important part of modern web performance.
          Smaller stylesheets are downloaded faster, parsed more efficiently by
          browsers and can contribute to improved page speed and Core Web
          Vitals. Whether you're building a personal portfolio, business
          website, eCommerce store or enterprise application, minifying CSS is
          a simple optimization that benefits both developers and end users.

        </p>

        <p>

          ToolsNestX CSS Minifier performs every operation directly inside your
          browser, ensuring your stylesheet remains private throughout the
          process. There's no software to install, no account required and no
          waiting for uploads. Simply paste your CSS, generate the optimized
          version instantly and deploy it with confidence on any modern web
          project.

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

              Find answers to the most common questions about our free CSS Minifier.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mx-auto mt-16 max-w-5xl space-y-5">

            {[
              {
                q: "Is CSS Minifier free to use?",
                a: "Yes. ToolsNestX CSS Minifier is completely free and allows unlimited CSS minification without registration.",
              },
              {
                q: "Does CSS minification change how my website looks?",
                a: "No. CSS minification only removes unnecessary characters such as whitespace, comments and line breaks. The appearance and functionality of your website remain unchanged.",
              },
              {
                q: "Is my CSS uploaded to your servers?",
                a: "No. Everything is processed locally inside your browser, ensuring your CSS code remains private and secure.",
              },
              {
                q: "Can I minify large CSS files?",
                a: "Yes. The tool supports both small CSS snippets and large production stylesheets. Performance depends only on your browser and available device memory.",
              },
              {
                q: "Why should I minify CSS?",
                a: "Minifying CSS reduces file size, improves page loading speed, lowers bandwidth usage and helps optimize website performance for visitors.",
              },
              {
                q: "Who can use this CSS Minifier?",
                a: "Frontend developers, web designers, agencies, students and anyone working with CSS can use this tool to generate optimized production-ready stylesheets.",
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

                HTML Minifier

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Compress HTML by removing unnecessary whitespace and formatting.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                SQL Formatter

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Format SQL queries with proper indentation for improved readability.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                JSON Formatter

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Beautify, validate and format JSON with clean, readable output.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                HTML Encoder & Decoder

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Encode and decode HTML entities safely inside your browser.

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

              Ready To Minify Your CSS?

            </h2>

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Compress your CSS instantly with ToolsNestX. Reduce stylesheet size,
              improve website performance and generate production-ready CSS
              directly in your browser—fast, secure and completely free.

            </p>

            <button className="mt-10 rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:bg-blue-500">

              Minify CSS Now

            </button>

          </div>

        </div>

      </section>

      <div className="h-15 bg-black" />

    </main>
  );
}

    