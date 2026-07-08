import JsonValidator from "@/app/components/tools/JsonValidator";

import {
  ShieldCheck,
  Zap,
  Lock,
  MonitorSmartphone,
} from "lucide-react";

export const metadata = {
  title: "Free JSON Validator Online | Validate JSON Instantly | ToolsNestX",
  description:
    "Validate JSON online for free with ToolsNestX. Detect syntax errors, verify JSON structure and ensure valid JSON instantly using our fast, secure and browser-based JSON Validator.",
};

export default function JsonValidatorPage() {
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

              JSON Validator

            </h1>

            <div className="h-3 bg-black" />

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Validate JSON instantly and detect syntax errors before they
              cause problems in your applications. Verify JSON structure,
              identify invalid formatting and ensure your data is valid using
              our fast, secure and browser-based JSON Validator.

            </p>

          </div>

          <div className="h-5 bg-black" />

          {/* ================= TRUST BADGES ================= */}

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">

            <div className="flex items-center gap-3 rounded-full border border-blue-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-blue-500/40 hover:bg-white/10">

              <ShieldCheck className="h-5 w-5 text-blue-400" />

              <span className="text-sm font-medium text-gray-200">

                Safe Validation

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

            <JsonValidator />

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

              Why Choose Our JSON Validator?

            </h2>

            <p className="mx-auto mt-5 max-w-8xl text-lg leading-8 text-gray-400">

              Validate JSON with confidence using accurate syntax checking,
              instant error detection and browser-based processing. Perfect for
              developers, API testing and configuration file validation.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {/* Feature Cards will continue in Part 2 */}
      
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Accurate JSON Validation

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Instantly verify whether your JSON is valid by checking its
                syntax, structure and formatting. Quickly identify errors before
                using JSON in APIs, applications or configuration files.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Instant Error Detection

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Detect missing commas, unmatched brackets, invalid quotation
                marks and other common JSON syntax errors immediately, helping
                you debug data more efficiently.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Browser-Based Validation

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Validate JSON entirely inside your browser without uploading
                sensitive data to external servers, ensuring privacy and fast
                performance for every validation.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Perfect For API Development

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Validate request payloads, API responses, configuration files
                and structured data before deployment to reduce errors and
                improve development workflows.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Supports Large JSON Files

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Validate both small JSON snippets and large structured
                documents, making the tool suitable for everyday development as
                well as enterprise-level projects.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Free & Unlimited

              </h3>

              <p className="mt-5 max-w-8xl leading-8 text-gray-400">

                Validate unlimited JSON data without creating an account,
                installing software or paying subscription fees. ToolsNestX
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

              Validate JSON In 3 Easy Steps

            </h2>

            <div className="h-5 bg-black" />

          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-3">


        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

            1

          </div>

          <h3 className="mt-8 text-2xl font-bold">

            Paste Your JSON

          </h3>

          <p className="mt-5 max-w-8xl leading-8 text-gray-400">

            Copy and paste your JSON data into the editor. The tool accepts both
            small JSON snippets and large structured JSON documents.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

            2

          </div>

          <h3 className="mt-8 text-2xl font-bold">

            Validate JSON

          </h3>

          <p className="mt-5 max-w-8xl leading-8 text-gray-400">

            Click the Validate button to instantly check your JSON syntax,
            detect formatting issues and identify any structural errors.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

            3

          </div>

          <h3 className="mt-8 text-2xl font-bold">

            Review the Result

          </h3>

          <p className="mt-5 max-w-8xl leading-8 text-gray-400">

            Review the validation result and fix any reported errors before
            using the JSON in APIs, applications or configuration files.

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

          Why Use Our JSON Validator?

        </h2>

      </div>

      <div className="h-5 bg-black" />

      <div className="mx-auto max-w-8xl space-y-8 text-lg leading-9 text-gray-400">

        <p>

          JSON has become one of the most widely used data formats for web
          applications, REST APIs, configuration files and cloud services.
          Even a small syntax mistake, such as a missing comma, an extra
          bracket or incorrect quotation marks, can prevent an application
          from working correctly. Our JSON Validator helps you detect these
          issues instantly, allowing you to fix problems before deployment and
          avoid unnecessary debugging.

        </p>

        <p>

          Whether you're developing APIs, working with JavaScript frameworks,
          configuring applications or exchanging structured data between
          systems, validating JSON is an essential part of the development
          process. A reliable JSON Validator improves productivity by catching
          syntax errors early, reducing troubleshooting time and ensuring your
          data follows the official JSON specification before it is used in
          production.

        </p>

        <p>

          ToolsNestX JSON Validator performs all validation directly inside your
          browser, helping keep your data private throughout the entire
          process. No files are uploaded, no software installation is required
          and no registration is needed. Simply paste your JSON, validate it
          instantly and continue working with confidence using clean, valid and
          production-ready JSON data.

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

              Find answers to the most common questions about validating JSON
              with our free online JSON Validator.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mx-auto mt-16 max-w-5xl space-y-5">

            {[
              {
                q: "Is the JSON Validator free to use?",
                a: "Yes. ToolsNestX JSON Validator is completely free and allows you to validate unlimited JSON data without creating an account.",
              },
              {
                q: "What does a JSON Validator do?",
                a: "A JSON Validator checks whether your JSON follows the correct syntax and structure. It helps identify formatting mistakes such as missing commas, invalid brackets and incorrect quotation marks.",
              },
              {
                q: "Is my JSON uploaded to your servers?",
                a: "No. All validation happens directly inside your browser, helping keep your JSON data private and secure at all times.",
              },
              {
                q: "Can I validate large JSON files?",
                a: "Yes. The tool supports both small JSON snippets and large structured JSON documents. Performance depends on your browser and available device memory.",
              },
              {
                q: "Who should use this JSON Validator?",
                a: "Developers, API engineers, students, DevOps professionals and anyone working with JSON data can use this tool to verify data before deployment or integration.",
              },
              {
                q: "Does the validator modify my JSON?",
                a: "No. The tool only validates your JSON and reports whether it is valid or contains syntax errors. Your original data remains unchanged unless you edit it yourself.",
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

              Explore More JSON & Developer Tools

            </h2>

          </div>

          <div className="h-5 bg-black" />

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                JSON Formatter

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Beautify and format JSON into a clean, readable structure instantly.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                JSON Minifier

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Compress JSON by removing unnecessary whitespace without changing the data.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                JSON to CSV

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Convert structured JSON data into CSV format for spreadsheets and analysis.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                JSON to XML

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Transform JSON into XML format for data exchange and integrations.

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

              Validate JSON With Confidence

            </h2>

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Verify JSON syntax, detect errors instantly and ensure your data is
              valid before using it in APIs, applications or configuration files.
              Fast, secure, browser-based and completely free with ToolsNestX.

            </p>

            <button className="mt-10 rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:bg-blue-500">

              Validate JSON Now

            </button>

          </div>

        </div>

      </section>

      <div className="h-15 bg-black" />

    </main>
  );
}