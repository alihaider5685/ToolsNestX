import PDFSplitter from "@/app/components/tools/PDFSplitter";
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
    "Free PDF Splitter Online | Split PDF Pages Instantly | ToolsNestX",

  description:
    "Split PDF files into separate pages or extract specific page ranges online for free. Fast, secure, and browser-based PDF splitter with no registration required.",

  keywords: [
    "pdf splitter",
    "split pdf",
    "split pdf online",
    "extract pdf pages",
    "separate pdf",
    "pdf page splitter",
    "online pdf splitter",
    "free pdf splitter",
    "split pdf pages",
    "extract pages from pdf",
    "split large pdf",
    "pdf page extractor",
    "split pdf document",
    "browser pdf splitter",
    "split pdf free",
    "pdf organizer",
    "pdf tools",
    "pdf editor online",
    "extract selected pages",
    "pdf page remover",
    "split scanned pdf",
    "secure pdf splitter",
    "fast pdf splitter",
    "best pdf splitter",
    "split document online",
    "pdf page separator",
    "online document splitter",
    "pdf file splitter",
    "split multiple pdf pages",
    "toolsnestx pdf splitter",
  ],

  path: "/tools/pdf-splitter",
});


export default function PDFSplitterPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ToolSchema
  name="PDF Splitter"
  description="Split PDF pages online for free. Extract specific pages or divide PDF documents quickly and securely."
  path="/tools/pdf-splitter"
/>
<BreadcrumbSchema
  name="PDF Splitter"
  path="/tools/pdf-splitter"
/>

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

              Split PDF Files Online

            </h1>

            <div className="h-3 bg-black" />

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Extract specific pages or split large PDF documents into smaller
              files. Fast, secure and completely free with no software
              installation required.

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

            <PDFSplitter />

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

              Why Choose Our PDF Splitter?

            </h2>

            <p className="mx-auto mt-5 max-w-8xl text-lg leading-8 text-gray-400">

              Extract individual pages or split large PDF documents into
              smaller files quickly, securely and without losing quality.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Split Large PDFs

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Break large PDF documents into smaller files within seconds.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Extract Specific Pages

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Save only the pages you need instead of the entire document.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Original Quality

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                All pages keep their original formatting, images and quality.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Secure Processing

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Your PDF files are processed securely and are never stored.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Browser Based

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Split PDF files online without installing any software.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Completely Free

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Use our PDF Splitter unlimited times at no cost.

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

              Split PDF Files In 3 Easy Steps

            </h2>

            <div className="h-5 bg-black" />

          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-2xl font-bold">

                1

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Upload PDF

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Select the PDF document you want to split from your device.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-2xl font-bold">

                2

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Choose Pages

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Select the pages or page ranges you want to extract.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-2xl font-bold">

                3

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Download

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Download your new PDF file instantly after splitting.

              </p>

            </div>

          </div>

        </div>

      </section>

      <div className="h-10 bg-black" />

      {/* ================= WHY USE PDF SPLITTER ================= */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-[8px] text-red-400">

              WHY USE

            </span>

            <h2 className="mt-6 text-4xl font-bold">

              Why Use Our PDF Splitter?

            </h2>

          </div>

          <div className="h-5 bg-black" />

          <div className="mx-auto max-w-8xl space-y-8 text-lg leading-9 text-gray-400">

            <p>

              ToolsNestX PDF Splitter makes it easy to extract individual pages
              or divide large PDF documents into smaller files without losing
              formatting or quality. Everything works directly in your browser,
              so there's no need to install software.

            </p>

            <p>

              Whether you're separating invoices, reports, contracts,
              presentations, assignments or scanned documents, our PDF Splitter
              gives you complete control over which pages to keep. The process
              is fast, simple and secure.

            </p>

            <p>

              Your privacy is our priority. Files are processed securely and are
              never permanently stored. You can split PDF files as often as you
              like, completely free and without creating an account.

            </p>

          </div>

        </div>

      </section>

      <div className="h-10 bg-black" />
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

            <p className="mx-auto mt-5 max-w-8xl text-lg leading-8 text-gray-400">

              Everything you need to know about our free online PDF Splitter.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mx-auto mt-16 max-w-5xl space-y-5">

            {[
              {
                q: "Is PDF Splitter free?",
                a: "Yes. ToolsNestX PDF Splitter is completely free and does not require registration.",
              },
              {
                q: "Can I extract only specific pages?",
                a: "Yes. You can choose individual pages or page ranges before splitting your PDF.",
              },
              {
                q: "Will my PDF quality change?",
                a: "No. All pages keep their original formatting, fonts and image quality.",
              },
              {
                q: "Are my PDF files secure?",
                a: "Yes. Your files are processed securely and are never permanently stored.",
              },
              {
                q: "Does it work on mobile devices?",
                a: "Absolutely. ToolsNestX PDF Splitter works on desktop, tablet and mobile browsers.",
              },
              {
                q: "Do I need to install software?",
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

              Explore More PDF Tools

            </h2>


          </div>

          <div className="h-5 bg-black" />

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-red-500/40">

              <h3 className="text-2xl font-bold">

                PDF Merger

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Combine multiple PDF files into one document.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-red-500/40">

              <h3 className="text-2xl font-bold">

                Image Compressor

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Reduce image size while maintaining quality.

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

                Create QR Codes instantly for free.

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

              Ready To Split Your PDF?

            </h2>

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Extract pages or split large PDF documents into smaller files in
              seconds. Fast, secure and completely free with ToolsNestX.

            </p>

            <button className="mt-10 rounded-2xl bg-red-600 px-8 py-4 text-lg font-semibold transition hover:bg-red-500">

              Split PDF Now

            </button>

          </div>

        </div>

      </section>

      <div className="h-15 bg-black" />

    </main>
  );
}