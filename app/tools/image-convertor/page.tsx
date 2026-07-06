import ImageConverter from "@/app/components/tools/ImageUploader";

import {
  ShieldCheck,
  Zap,
  Lock,
  MonitorSmartphone,
} from "lucide-react";

export const metadata = {
  title: "Free Image Converter Online | FileNestX",
  description:
    "Convert JPG, PNG, WebP, BMP and other image formats online for free. Fast, secure and browser-based image converter.",
};

export default function ImageConverterPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* ================= HERO ================= */}

      <section className="px-6 pt-24 pb-16">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <div className="h-5 bg-black" />

            <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300">

              Image Tools

            </span>

            <div className="h-3 bg-black" />

            <h1 className="mt-8 text-4xl font-extrabold md:text-5xl">

              Convert Images Online

            </h1>

            <div className="h-3 bg-black" />

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Convert JPG, PNG, WebP, BMP and other image formats online for
              free. Fast, secure and works directly in your browser without
              installing software.

            </p>

          </div>

          <div className="h-5 bg-black" />

          {/* ================= TRUST BADGES ================= */}

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">

            <div className="flex items-center gap-3 rounded-full border border-blue-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-blue-500/40 hover:bg-white/10">

              <ShieldCheck className="h-5 w-5 text-blue-400" />

              <span className="text-sm font-medium text-gray-200">

                100% Secure

              </span>

            </div>

            <div className="flex items-center gap-3 rounded-full border border-blue-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition hover:border-blue-500/40 hover:bg-white/10">

              <Zap className="h-5 w-5 text-blue-400" />

              <span className="text-sm font-medium text-gray-200">

                Lightning Fast

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

      <div className="h-4 bg-black" />

            {/* ================= TOOL ================= */}

      <section className="px-6 pb-20">

        <div className="mx-auto max-w-screen-2xl">

          <div className="rounded-3xl border border-white/10 bg-[#0b0b0b] p-8 shadow-[0_0_40px_rgba(59,130,246,.08)]">

            <ImageConverter />

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

      <div className="h-7 bg-black" />

      {/* ================= FEATURES ================= */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-[8px] text-blue-400">

              FEATURES

            </span>

            <h2 className="mt-6 text-4xl font-bold">

              Why Choose Our Image Converter?

            </h2>

            <p className="mx-auto mt-5 max-w-8xl text-lg leading-8 text-gray-400">

              Convert images between popular formats in seconds while preserving
              excellent image quality. Fast, secure and completely free.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Multiple Formats

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Convert JPG, PNG, WebP, BMP and other popular image formats in
                seconds.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                High Quality Output

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Maintain excellent image quality after conversion with optimized
                processing.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Fast Conversion

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Convert your images within seconds directly inside your browser.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Privacy First

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Your uploaded images remain private and are never permanently
                stored.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Browser Based

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                No software installation required. Everything works online on
                desktop and mobile.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Completely Free

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Convert unlimited images for free without creating an account.

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

              Convert Images In 3 Easy Steps

            </h2>

            <div className="h-5 bg-black" />

          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

                1

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Upload Image

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Select an image from your computer, tablet or mobile device.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

                2

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Choose Output Format

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Select the image format you want such as JPG, PNG or WebP.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

                3

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Download

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Download your converted image instantly with just one click.

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

              Why Use Our Image Converter?

            </h2>

            <p className="mx-auto mt-5 max-w-8xl text-lg leading-8 text-gray-400">

              FileNestX Image Converter helps you convert images between
              different formats quickly without sacrificing quality.
              Everything works directly inside your browser, making image
              conversion simple, secure and accessible from any device.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="grid gap-8 lg:grid-cols-2">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Convert Without Quality Loss

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Our converter is designed to preserve image quality while
                changing formats, making it ideal for websites, social media,
                documents and presentations.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                No Software Required

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Everything runs online. Simply upload your image, choose the
                desired format and download the converted file in seconds.

              </p>

            </div>

          </div>

          <div className="h-5 bg-black" />

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">

            <p className="leading-8 text-gray-400">

              Whether you're preparing images for websites, blogs, online
              stores or social media platforms, FileNestX Image Converter
              provides a fast and reliable solution. It supports the most
              commonly used image formats while maintaining excellent output
              quality and keeping your files secure throughout the process.

            </p>

          </div>

        </div>

      </section>

      <div className="h-10 bg-black" />

      {/* ================= SUPPORTED FORMATS ================= */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-[8px] text-blue-400">

              SUPPORTED FORMATS

            </span>

            <h2 className="mt-6 text-4xl font-bold">

              Convert Between Popular Image Formats

            </h2>

          </div>

          <div className="h-5 bg-black" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">

            {[
              "JPG",
              "PNG",
              "WEBP",
              "BMP",
              "GIF",
              "TIFF",
            ].map((format) => (

              <div
                key={format}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center transition hover:border-blue-500/40"
              >

                <h3 className="text-2xl font-bold text-blue-400">

                  {format}

                </h3>

              </div>

            ))}

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

            <div className="h-2 bg-black" />

            <p className="mx-auto mt-5 max-w-8xl text-lg leading-8 text-gray-400">

              Everything you need to know about our free online Image
              Converter.

            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mx-auto mt-16 max-w-5xl space-y-5">

            {[
              {
                q: "Is Image Converter free?",
                a: "Yes. FileNestX Image Converter is completely free and does not require registration.",
              },
              {
                q: "Which image formats can I convert?",
                a: "You can convert between popular formats including JPG, PNG, WebP, BMP, GIF and TIFF.",
              },
              {
                q: "Will my image quality be reduced?",
                a: "Our converter is optimized to preserve image quality while converting to another format.",
              },
              {
                q: "Do I need to install software?",
                a: "No. Everything works directly in your web browser.",
              },
              {
                q: "Are my images secure?",
                a: "Yes. Your files are processed securely and are never permanently stored.",
              },
              {
                q: "Can I use it on mobile devices?",
                a: "Absolutely. The tool works perfectly on desktop, tablet and mobile browsers.",
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

              Explore More Image Tools

            </h2>

          </div>

          <div className="h-5 bg-black" />

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                Image Compressor

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Reduce image size without losing quality.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                PDF Merger

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Combine multiple PDF files into one document.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                PDF Splitter

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Split PDF pages into separate files instantly.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/40">

              <h3 className="text-2xl font-bold">

                QR Generator

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Create high-quality QR Codes for free.

              </p>

            </div>

          </div>

        </div>

      </section>

      <div className="h-10 bg-black" />

      {/* ================= BOTTOM AD ================= */}

      <section className="px-6 pb-20">

        <div className="mx-auto max-w-screen-2xl">

          <div className="flex h-32 items-center justify-center rounded-3xl border border-dashed border-gray-700 bg-white/[0.02] text-gray-500">

            Google AdSense (Responsive)

          </div>

        </div>

      </section>

      <div className="h-10 bg-black" />

      {/* ================= CTA ================= */}

      <section className="px-6 pb-28">

        <div className="mx-auto max-w-screen-2xl">

          <div className="rounded-[40px] border border-blue-500/20 bg-gradient-to-b from-blue-500/10 to-transparent p-16 text-center">

            <h2 className="text-4xl font-bold">

              Ready To Convert Your Images?

            </h2>

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Convert JPG, PNG, WebP, BMP and more in just a few clicks.
              Fast, secure and completely free with FileNestX.

            </p>

            <button className="mt-10 rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:bg-blue-500">

              Start Converting Images

            </button>

          </div>

        </div>

      </section>

      <div className="h-15 bg-black" />

    </main>
  );
}
