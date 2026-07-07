import XmlFormatter from "@/app/components/tools/XmlFormatter";

import {
  ShieldCheck,
  Zap,
  Lock,
  MonitorSmartphone,
} from "lucide-react";

export const metadata = {
  title: "Free XML Formatter Online | Beautify XML Instantly | FileNestX",
  description:
    "Format and beautify XML online for free with FileNestX. Improve XML readability with proper indentation and clean formatting using our fast, secure and browser-based XML Formatter.",
};

export default function XmlFormatterPage() {
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

              XML Formatter

            </h1>

            <div className="h-3 bg-black" />

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Format and beautify XML instantly with our free online XML
              Formatter. Organize XML using proper indentation and clean
              formatting to improve readability, simplify debugging and make
              structured data easier to manage for developers and IT
              professionals.

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

                Instant Formatting

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

            <XmlFormatter />

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

              Why Choose Our XML Formatter?

            </h2>

            <p className="mx-auto mt-5 max-w-8xl text-lg leading-8 text-gray-400">

              Beautify XML with clean indentation and structured formatting to
              improve readability, simplify debugging and prepare XML documents
              for development, APIs and data exchange.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Clean XML Formatting

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Beautify XML documents with consistent indentation and proper
                formatting, making complex XML structures easier to read,
                understand and maintain.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Improved Readability

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Transform compact or unformatted XML into a clean, organized
                layout that simplifies debugging, reviewing and editing XML
                documents of any size.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Browser-Based Formatting

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Format XML directly inside your browser without uploading files
                to external servers, helping keep your data private while
                delivering fast and reliable results.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Ideal For Developers

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Prepare XML for APIs, configuration files, RSS feeds, SOAP
                services and application development with properly formatted
                and easy-to-read code.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Handles Large XML Files

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Format everything from small XML snippets to large structured
                XML documents while maintaining a consistent layout for easier
                navigation and editing.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Free & Unlimited

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Format unlimited XML code without creating an account,
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

              Format XML In 3 Easy Steps

            </h2>

            <div className="h-5 bg-black" />

          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-3">

        

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

            1

          </div>

          <h3 className="mt-8 text-2xl font-bold">

            Paste Your XML

          </h3>

          <p className="mt-5 max-w-8xl leading-8 text-gray-400">

            Copy and paste your XML into the editor. The tool supports both
            small XML snippets and large XML documents for quick and reliable
            formatting.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

            2

          </div>

          <h3 className="mt-8 text-2xl font-bold">

            Format the XML

          </h3>

          <p className="mt-5 max-w-8xl leading-8 text-gray-400">

            Click the Format button to automatically organize your XML with
            proper indentation, consistent spacing and a clean hierarchical
            structure.

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

            Review the formatted XML and copy the beautified output for use in
            APIs, configuration files, web services or application
            development.

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

          Why Use Our XML Formatter?

        </h2>

      </div>

      <div className="h-5 bg-black" />

      <div className="mx-auto max-w-8xl space-y-8 text-lg leading-9 text-gray-400">

        <p>

          XML is widely used for structured data, configuration files, web
          services, RSS feeds and enterprise applications. When XML is stored
          in a compact or minified format, it can become difficult to read,
          troubleshoot and maintain. Our XML Formatter automatically applies
          consistent indentation and formatting, making even complex XML
          documents easier to understand and work with.

        </p>

        <p>

          Developers, system administrators and data engineers regularly work
          with XML when integrating APIs, exchanging information between
          systems or managing application configurations. Properly formatted
          XML simplifies debugging, improves collaboration and helps identify
          nested elements, attributes and document structure much more quickly.
          A well-formatted XML document is also easier to review before
          deployment or integration.

        </p>

        <p>

          FileNestX XML Formatter performs every formatting operation directly
          inside your browser, helping keep your XML data private without
          uploading it to external servers. No software installation,
          registration or configuration is required. Simply paste your XML,
          format it instantly and continue working with clean, readable and
          professionally structured XML documents.

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

              Find answers to the most common questions about formatting XML
              with our free online XML Formatter.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mx-auto mt-16 max-w-5xl space-y-5">

            {[
              {
                q: "Is the XML Formatter free to use?",
                a: "Yes. FileNestX XML Formatter is completely free and lets you format unlimited XML documents without creating an account or paying subscription fees.",
              },
              {
                q: "What does an XML Formatter do?",
                a: "An XML Formatter organizes XML using proper indentation and spacing, making the document easier to read, review and maintain without changing its content.",
              },
              {
                q: "Will formatting XML modify my data?",
                a: "No. Formatting only improves the visual layout of the XML document. The data structure, elements and values remain unchanged.",
              },
              {
                q: "Is my XML uploaded to your servers?",
                a: "No. All XML formatting is performed directly inside your browser, helping keep your XML data private and secure throughout the process.",
              },
              {
                q: "Who should use an XML Formatter?",
                a: "Developers, system administrators, API engineers, students and anyone working with XML files can use this tool to improve readability and simplify debugging.",
              },
              {
                q: "Can I format large XML documents?",
                a: "Yes. The tool supports both small XML snippets and large XML documents. Performance depends on your browser and available device resources.",
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

              Explore More XML & Developer Tools

            </h2>

          </div>

          <div className="h-5 bg-black" />

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                XML Validator

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Validate XML syntax and identify structural issues before deployment.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                XML to JSON

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Convert XML documents into JSON format for modern applications and APIs.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                JSON Formatter

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Beautify JSON with proper indentation for improved readability and debugging.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                HTML Formatter

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Format HTML code with clean indentation for easier editing and maintenance.

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

              Format XML Instantly With FileNestX

            </h2>

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Beautify XML documents with proper indentation, improve readability
              and simplify debugging using FileNestX XML Formatter. Fast,
              secure, browser-based and completely free for developers, system
              administrators and IT professionals.

            </p>

            <button className="mt-10 rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:bg-blue-500">

              Format XML Now

            </button>

          </div>

        </div>

      </section>

      <div className="h-15 bg-black" />

    </main>
  );
}