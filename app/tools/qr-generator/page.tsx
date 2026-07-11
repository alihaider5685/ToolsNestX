import QRGenerator from "@/app/components/tools/QRCodeGenerator";
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
    "Free QR Code Generator Online | Create Custom QR Codes | ToolsNestX",

  description:
    "Generate QR codes online for URLs, text, email, phone numbers, Wi-Fi and more. Free, fast, secure and browser-based QR code generator.",

  keywords: [
    "qr code generator",
    "qr generator",
    "create qr code",
    "free qr code generator",
    "online qr generator",
    "custom qr code",
    "generate qr code",
    "wifi qr code",
    "url qr code",
    "text qr code",
    "email qr code",
    "phone qr code",
    "vcard qr code",
    "business qr code",
    "website qr code",
    "qr code maker",
    "qr creator",
    "dynamic qr code",
    "static qr code",
    "download qr code",
    "high quality qr code",
    "qr code online",
    "barcode generator",
    "free qr maker",
    "best qr code generator",
    "secure qr generator",
    "browser qr generator",
    "qr code tool",
    "qr code creator",
    "toolsnestx qr generator",
  ],

  path: "/tools/qr-generator",
});


export default function QRGeneratorPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* ================= HERO ================= */}

      <section className="px-6 pt-24 pb-16">

        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <div className="h-5 bg-black" />

            <span className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 text-sm font-semibold text-green-300">

              QR Tools

            </span>

            <div className="h-3 bg-black" />

            <h1 className="mt-8 text-4xl font-extrabold md:text-5xl">

              QR Code Generator

            </h1>

            <div className="h-3 bg-black" />

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Generate QR Codes instantly for websites, text, WiFi, phone
              numbers and more. Fast, secure and completely free with no
              registration required.

            </p>

          </div>

          <div className="h-5 bg-black" />

          {/* ================= TRUST BADGES ================= */}

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">

            <div className="flex items-center gap-3 rounded-full border border-green-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-green-500/40 hover:bg-white/10">

              <ShieldCheck className="h-5 w-5 text-green-400" />

              <span className="text-sm font-medium text-gray-200">

                100% Secure

              </span>

            </div>

            <div className="flex items-center gap-3 rounded-full border border-green-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-green-500/40 hover:bg-white/10">

              <Zap className="h-5 w-5 text-green-400" />

              <span className="text-sm font-medium text-gray-200">

                Instant Generation

              </span>

            </div>

            <div className="flex items-center gap-3 rounded-full border border-green-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-green-500/40 hover:bg-white/10">

              <Lock className="h-5 w-5 text-green-400" />

              <span className="text-sm font-medium text-gray-200">

                Privacy Protected

              </span>

            </div>

            <div className="flex items-center gap-3 rounded-full border border-green-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-green-500/40 hover:bg-white/10">

              <MonitorSmartphone className="h-5 w-5 text-green-400" />

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

          <div className="rounded-3xl border border-white/10 bg-[#0b0b0b] p-8 shadow-[0_0_40px_rgba(34,197,94,.08)]">

            <QRGenerator />

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

            <span className="text-sm font-bold uppercase tracking-[8px] text-green-400">

              FEATURES

            </span>

            <h2 className="mt-6 text-4xl font-bold">

              Why Choose Our QR Code Generator?

            </h2>

            <p className="mx-auto mt-5 max-w-8xl text-lg leading-8 text-gray-400">

              Create high-quality QR Codes instantly for websites, text,
              contact information, WiFi and much more.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Instant QR Generation

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Generate QR Codes within seconds without waiting.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                High Resolution

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Download sharp QR Codes suitable for print and digital use.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Multiple Uses

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Create QR Codes for URLs, emails, phone numbers, WiFi and plain text.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Privacy First

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Your information is processed securely inside your browser.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Works Everywhere

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Compatible with desktops, tablets and smartphones.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Completely Free

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Generate unlimited QR Codes without paying anything.

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

            <span className="text-sm font-bold uppercase tracking-[8px] text-green-400">

              HOW TO USE

            </span>

            <h2 className="mt-6 text-4xl font-bold">

              Generate QR Codes In 3 Easy Steps

            </h2>

            <div className="h-5 bg-black" />

          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-2xl font-bold">

                1

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Enter Your Content

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Enter a website URL, text, phone number, email address, WiFi credentials or other supported content.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-2xl font-bold">

                2

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Generate QR Code

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Click the Generate button and your QR Code will be created instantly.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-2xl font-bold">

                3

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Download & Share

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Download your QR Code and use it on websites, business cards, flyers or social media.

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

            <span className="text-sm font-bold uppercase tracking-[8px] text-green-400">

              WHY USE

            </span>

            <h2 className="mt-6 text-4xl font-bold">

              Why Use Our QR Code Generator?

            </h2>

          </div>

          <div className="h-5 bg-black" />

          <div className="mx-auto max-w-8xl space-y-8 text-lg leading-9 text-gray-400">

            <p>

              ToolsNestX QR Code Generator helps you create professional,
              high-quality QR Codes in just a few seconds. Whether you want to
              share a website, contact information, phone number, email address,
              WiFi network or plain text, everything can be converted into a QR
              Code instantly.

            </p>

            <p>

              Our QR Code Generator works entirely inside your browser, so no
              software installation or registration is required. Simply enter
              your information, generate the QR Code and download it in high
              quality for both digital and print use.

            </p>

            <p>

              Your privacy is important to us. Your data is processed securely,
              and no personal information is permanently stored. ToolsNestX makes
              QR Code generation fast, reliable and completely free for everyone.

            </p>

          </div>

        </div>

      </section>

      <div className="h-10 bg-black" />
            {/* ================= FAQ ================= */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-[8px] text-green-400">

              FAQ

            </span>

            <h2 className="mt-6 text-4xl font-bold">

              Frequently Asked Questions

            </h2>

            <p className="mx-auto mt-5 max-w-8xl text-lg leading-8 text-gray-400">

              Everything you need to know about our free online QR Code Generator.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mx-auto mt-16 max-w-5xl space-y-5">

            {[
              {
                q: "Is the QR Code Generator free?",
                a: "Yes. ToolsNestX QR Code Generator is completely free with unlimited usage.",
              },
              {
                q: "Can I generate QR Codes for URLs?",
                a: "Yes. You can generate QR Codes for websites, URLs, blogs and landing pages.",
              },
              {
                q: "Can I create WiFi QR Codes?",
                a: "Yes. You can generate QR Codes for WiFi networks so users can connect instantly.",
              },
              {
                q: "Are my QR Codes permanent?",
                a: "Yes. Once downloaded, your QR Codes remain usable forever as long as the original content remains available.",
              },
              {
                q: "Does it work on mobile devices?",
                a: "Yes. ToolsNestX QR Generator works perfectly on desktop, tablet and mobile devices.",
              },
              {
                q: "Do I need to install software?",
                a: "No. Everything works directly inside your web browser with no installation required.",
              },
            ].map((item) => (

              <details
                key={item.q}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-green-500/30"
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

            <span className="text-sm font-bold uppercase tracking-[8px] text-green-400">

              RELATED TOOLS

            </span>

            <h2 className="mt-6 text-4xl font-bold">

              Explore More ToolsNestX Tools

            </h2>

          </div>

          <div className="h-5 bg-black" />

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-green-500/40">

              <h3 className="text-2xl font-bold">

                Image Compressor

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Compress JPG, PNG and WebP images online.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-green-500/40">

              <h3 className="text-2xl font-bold">

                Image Converter

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Convert images between popular formats instantly.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-green-500/40">

              <h3 className="text-2xl font-bold">

                PDF Merger

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Merge multiple PDF files into one document.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-green-500/40">

              <h3 className="text-2xl font-bold">

                PDF Splitter

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Split PDF documents into separate files easily.

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

          <div className="rounded-[40px] border border-green-500/20 bg-gradient-to-b from-green-500/10 to-transparent p-16 text-center">

            <h2 className="text-4xl font-bold">

              Ready To Generate Your QR Code?

            </h2>

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Create professional QR Codes for websites, WiFi, contact details,
              emails and more in seconds. Fast, secure and completely free.

            </p>

            <button className="mt-10 rounded-2xl bg-green-600 px-8 py-4 text-lg font-semibold transition hover:bg-green-500">

              Generate QR Code

            </button>

          </div>

        </div>

      </section>

      <div className="h-15 bg-black" />

    </main>
  );
}