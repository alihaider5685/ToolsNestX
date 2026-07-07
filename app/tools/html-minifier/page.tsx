import HtmlMinifier from "@/app/components/tools/HtmlMinifier";

import {
  ShieldCheck,
  Zap,
  Lock,
  MonitorSmartphone,
} from "lucide-react";

export const metadata = {
  title: "Free HTML Minifier Online | Minify HTML Code Instantly | FileNestX",
  description:
    "Minify HTML online for free with FileNestX. Remove unnecessary whitespace, comments and formatting from HTML code to reduce file size and improve website performance using our fast, secure and browser-based HTML Minifier.",
};

export default function HtmlMinifierPage() {
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

              HTML Minifier

            </h1>

            <div className="h-3 bg-black" />

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Minify HTML code instantly by removing unnecessary whitespace,
              comments and formatting while preserving the original structure
              and functionality. Reduce HTML file size, improve page loading
              speed and optimize websites with our fast, secure and
              browser-based HTML Minifier.

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

            <HtmlMinifier />

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

              Why Choose Our HTML Minifier?

            </h2>

            <p className="mx-auto mt-5 max-w-8xl text-lg leading-8 text-gray-400">

              Optimize HTML code by removing unnecessary characters without
              affecting functionality. Reduce file size, improve loading speed
              and prepare production-ready HTML for websites and web
              applications.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Efficient HTML Compression

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Remove unnecessary whitespace, line breaks and comments from
                HTML code while preserving its original structure and
                functionality for production-ready output.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Faster Website Loading

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Reduce HTML file size to help improve page loading speed,
                optimize bandwidth usage and deliver a better browsing
                experience across desktop and mobile devices.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Browser-Based Processing

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Minify HTML directly inside your browser without uploading code
                to external servers, helping protect your source code while
                delivering instant results.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Production Ready Output

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Generate compact HTML that is ready for deployment in websites,
                landing pages, web applications and static site projects
                without changing page behavior.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Perfect For Developers

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Optimize HTML templates, components and static pages before
                deployment to improve performance and maintain clean production
                builds with minimal effort.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Free & Unlimited

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Minify unlimited HTML code without creating an account,
                installing software or paying subscription fees. FileNestX
                keeps the tool completely free for everyone.

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

              Minify HTML In 3 Easy Steps

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

            Copy and paste your HTML code into the editor. The tool accepts
            both small HTML snippets and complete web page source code.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

            2

          </div>

          <h3 className="mt-8 text-2xl font-bold">

            Minify the Code

          </h3>

          <p className="mt-5 max-w-8xl leading-8 text-gray-400">

            Click the Minify button to instantly remove unnecessary whitespace,
            comments and formatting while preserving the original HTML
            structure and functionality.

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

            Copy the optimized HTML and use it in your website, landing page
            or web application to improve loading performance and reduce file
            size.

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

          Why Use Our HTML Minifier?

        </h2>

      </div>

      <div className="h-5 bg-black" />

      <div className="mx-auto max-w-8xl space-y-8 text-lg leading-9 text-gray-400">

        <p>

          HTML is the foundation of every website, and unnecessary whitespace,
          comments and formatting can increase file size without adding any
          functional value. An HTML Minifier removes these extra characters
          while preserving the structure and behavior of your code, resulting
          in smaller files that load more efficiently. Faster HTML delivery can
          contribute to improved user experience, reduced bandwidth usage and
          better overall website performance.

        </p>

        <p>

          Whether you're developing static websites, modern web applications,
          landing pages or email templates, minifying HTML is a common
          optimization step before deployment. Compact HTML works well alongside
          minified CSS and JavaScript, helping create lightweight production
          builds that are easier to serve and quicker for browsers to process.
          Developers and performance-focused teams often include HTML
          minification as part of their deployment workflow.

        </p>

        <p>

          FileNestX HTML Minifier performs every operation directly inside your
          browser, helping keep your source code private throughout the entire
          process. No software installation, account registration or file
          uploads are required. Simply paste your HTML, generate an optimized
          version instantly and deploy clean, production-ready code with
          confidence.

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

              Find answers to the most common questions about compressing and
              optimizing HTML with our free online HTML Minifier.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mx-auto mt-16 max-w-5xl space-y-5">

            {[
              {
                q: "Is the HTML Minifier free to use?",
                a: "Yes. FileNestX HTML Minifier is completely free and allows you to minify unlimited HTML code without registration or subscription fees.",
              },
              {
                q: "What does an HTML Minifier do?",
                a: "An HTML Minifier removes unnecessary whitespace, comments and formatting from HTML while preserving the original structure and functionality of the code.",
              },
              {
                q: "Will minifying HTML change how my website works?",
                a: "No. A properly minified HTML document behaves exactly like the original version. Only unnecessary characters are removed to reduce file size.",
              },
              {
                q: "Is my HTML code uploaded to your servers?",
                a: "No. All HTML minification is performed directly inside your browser, helping keep your source code private and secure.",
              },
              {
                q: "Who should use an HTML Minifier?",
                a: "Web developers, frontend engineers, designers, students and anyone optimizing website performance can benefit from reducing HTML file size before deployment.",
              },
              {
                q: "Can I minify large HTML files?",
                a: "Yes. The tool supports both small HTML snippets and large HTML documents. Performance depends on your browser and available system resources.",
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

              Explore More HTML & Developer Tools

            </h2>

          </div>

          <div className="h-5 bg-black" />

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                HTML Encoder & Decoder

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Encode and decode HTML entities safely for web pages and applications.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                HTML Beautifier

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Format messy HTML into clean, readable and properly indented code.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                CSS Minifier

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Compress CSS files by removing unnecessary characters to improve loading speed.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                JavaScript Formatter

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Beautify JavaScript code for improved readability and easier debugging.

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

              Minify HTML for Faster Websites

            </h2>

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Compress HTML, reduce file size and improve website performance
              with FileNestX HTML Minifier. Fast, secure, browser-based and
              completely free for developers, designers and website owners.

            </p>

            <button className="mt-10 rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:bg-blue-500">

              Minify HTML Now

            </button>

          </div>

        </div>

      </section>

      <div className="h-15 bg-black" />

    </main>
  );
}      