import PDFMerger from "@/app/components/tools/PDFUploader";

import {
  ShieldCheck,
  Zap,
  Lock,
  MonitorSmartphone,
} from "lucide-react";

export const metadata = {
  title: "Free PDF Merger Online | FileNestX",
  description:
    "Merge multiple PDF files into one document online for free. Fast, secure and browser-based PDF Merger.",
};

export default function PDFMergerPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* ================= HERO ================= */}

      <section className="px-6 pt-24 pb-16">

        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <div className="h-5 bg-black" />

            <span className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-sm font-semibold text-red-300">

              PDF Tools

            </span>

            <div className="h-3 bg-black" />

            <h1 className="mt-8 text-4xl font-extrabold md:text-5xl">

              Merge PDF Files Online

            </h1>

            <div className="h-3 bg-black" />

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Combine multiple PDF files into a single document quickly and
              securely. Free online PDF Merger that works directly inside your
              browser without installing any software.

            </p>

          </div>

          <div className="h-5 bg-black" />

          {/* ================= TRUST BADGES ================= */}

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">

            <div className="flex items-center gap-3 rounded-full border border-red-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-red-500/40 hover:bg-white/10">

              <ShieldCheck className="h-5 w-5 text-red-400" />

              <span className="text-sm font-medium text-gray-200">

                100% Secure

              </span>

            </div>

            <div className="flex items-center gap-3 rounded-full border border-red-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-red-500/40 hover:bg-white/10">

              <Zap className="h-5 w-5 text-red-400" />

              <span className="text-sm font-medium text-gray-200">

                Lightning Fast

              </span>

            </div>

            <div className="flex items-center gap-3 rounded-full border border-red-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-red-500/40 hover:bg-white/10">

              <Lock className="h-5 w-5 text-red-400" />

              <span className="text-sm font-medium text-gray-200">

                Privacy Protected

              </span>

            </div>

            <div className="flex items-center gap-3 rounded-full border border-red-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-red-500/40 hover:bg-white/10">

              <MonitorSmartphone className="h-5 w-5 text-red-400" />

              <span className="text-sm font-medium text-gray-200">

                Works on Any Device

              </span>

            </div>

          </div>

        </div>

      </section>

      <div className="h-5 bg-black" />

            {/* ================= TOOL ================= */}

      <section className="px-6 pb-20">

        <div className="mx-auto max-w-screen-2xl">

          <div className="rounded-3xl border border-white/10 bg-[#0b0b0b] p-8 shadow-[0_0_40px_rgba(239,68,68,.08)]">

            <PDFMerger />

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

      <div className="h-10 bg-black" />

      {/* ================= FEATURES ================= */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-[8px] text-red-400">

              FEATURES

            </span>

            <h2 className="mt-6 text-4xl font-bold">

              Why Choose Our PDF Merger?

            </h2>

            <div className="h-2 bg-black" />

            <p className="mx-auto mt-5 max-w-8xl text-lg leading-8 text-gray-400">

              Merge multiple PDF documents into one file quickly, securely and
              without losing quality.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Merge Unlimited PDFs

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Combine multiple PDF documents into a single organized file.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Fast Processing

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Merge files within seconds using our high-speed browser-based
                PDF engine.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Original Quality

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Your PDF pages remain clear and retain their original quality.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Secure File Handling

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Your uploaded files are processed securely and never stored
                permanently.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Browser Based

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                No software installation required. Everything works directly in
                your web browser.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Completely Free

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Merge PDF files as many times as you want without paying
                anything.

              </p>

            </div>

          </div>

        </div>

      </section>

      <div className="h-10 bg-black" />
            {/* ================= HOW TO USE ================= */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-[8px] text-red-400">

              HOW TO USE

            </span>

            <h2 className="mt-6 text-4xl font-bold">

              Merge PDF Files In 3 Easy Steps

            </h2>

            <div className="h-5 bg-black" />

          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-2xl font-bold">

                1

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Upload PDF Files

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Select two or more PDF files from your computer or mobile device.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-2xl font-bold">

                2

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Arrange Files

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Change the order of your PDF files before merging them into one document.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-2xl font-bold">

                3

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Merge & Download

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Click Merge PDF and download your newly combined document instantly.

              </p>

            </div>

          </div>

        </div>

      </section>

      <div className="h-10 bg-black" />

      {/* ================= WHY USE PDF MERGER ================= */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-[8px] text-red-400">

              WHY USE

            </span>

            <h2 className="mt-6 text-4xl font-bold">

              Why Use Our PDF Merger?

            </h2>

          </div>

          <div className="h-5 bg-black" />

          <div className="mx-auto max-w-8xl space-y-8 text-lg leading-9 text-gray-400">

            <p>

              FileNestX PDF Merger allows you to combine multiple PDF files into
              a single organized document without installing any software. Whether
              you're merging invoices, contracts, reports, resumes, assignments
              or scanned documents, everything happens securely inside your web
              browser.

            </p>

            <p>

              Our online PDF Merger is designed for speed, simplicity and privacy.
              Upload your PDF files, arrange them in your preferred order and
              merge them with a single click. The original formatting, fonts,
              images and page quality are preserved during the process.

            </p>

            <p>

              Since everything works directly in your browser, your files remain
              private and protected. No registration is required, no watermarks
              are added and you can merge PDF files completely free whenever you
              need.

            </p>

          </div>

        </div>

      </section>

      <div className="h-5 bg-black" />
            {/* ================= FAQ ================= */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-[8px] text-red-400">

              FAQ

            </span>

            <h2 className="mt-6 text-4xl font-bold">

              Frequently Asked Questions

            </h2>

           <div className="h-2 bg-black" />

            <p className="mx-auto mt-5 max-w-8xl text-lg leading-8 text-gray-400">

              Everything you need to know about our free online PDF Merger.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mx-auto mt-16 max-w-5xl space-y-5">

            {[
              {
                q: "Is PDF Merger free to use?",
                a: "Yes. FileNestX PDF Merger is completely free with no registration required.",
              },
              {
                q: "Will my PDF quality change?",
                a: "No. Your pages, fonts, images and formatting remain unchanged after merging.",
              },
              {
                q: "Are my files secure?",
                a: "Yes. Your PDF files are processed securely and are never permanently stored.",
              },
              {
                q: "Can I merge more than two PDF files?",
                a: "Absolutely. Upload multiple PDF files and combine them into a single document.",
              },
              {
                q: "Does it work on mobile devices?",
                a: "Yes. FileNestX PDF Merger works on desktop, tablet and mobile browsers.",
              },
              {
                q: "Do I need to install any software?",
                a: "No. Everything works online directly inside your browser.",
              },
            ].map((item) => (

              <details
                key={item.q}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-red-500/30"
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

            <span className="text-sm font-bold uppercase tracking-[8px] text-red-400">

              RELATED TOOLS

            </span>

            <h2 className="mt-6 text-4xl font-bold">

              Explore More FileNestX Tools

            </h2>

          </div>

          <div className="h-5 bg-black" />

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-red-500/40">

              <h3 className="text-2xl font-bold">

                PDF Splitter

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Split PDF documents into separate files instantly.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-red-500/40">

              <h3 className="text-2xl font-bold">

                Image Compressor

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Reduce image size without losing quality.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-red-500/40">

              <h3 className="text-2xl font-bold">

                Image Converter

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Convert images between popular formats.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-red-500/40">

              <h3 className="text-2xl font-bold">

                QR Generator

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Generate high-quality QR Codes for free.

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

          <div className="rounded-[40px] border border-red-500/20 bg-gradient-to-b from-red-500/10 to-transparent p-16 text-center">

            <h2 className="text-4xl font-bold">

              Ready To Merge Your PDF Files?

            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">

              Combine multiple PDF documents into one secure file in seconds.
              Fast, private and completely free with FileNestX.

            </p>

            <button className="mt-10 rounded-2xl bg-red-600 px-8 py-4 text-lg font-semibold transition hover:bg-red-500">

              Merge PDF Files

            </button>

          </div>

        </div>

      </section>

      <div className="h-15 bg-black" />

    </main>
  );
}
