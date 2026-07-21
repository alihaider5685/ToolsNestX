import ImageResizer from "@/app/components/tools/ImageResizer";
import { generateToolMetadata } from "@/lib/seo";
import type { Metadata } from "next";
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
    "Free Image Resizer Online | Resize JPG, PNG & WebP Images | ToolsNestX",

  description:
    "Resize JPG, JPEG, PNG and WebP images online instantly. Change image dimensions without losing quality using our free browser-based image resizer.",

  keywords: [
    "image resizer",
    "resize image",
    "resize images online",
    "online image resizer",
    "free image resizer",
    "change image size",
    "resize jpg",
    "jpg resizer",
    "resize png",
    "png resizer",
    "resize webp",
    "webp resizer",
    "photo resizer",
    "picture resizer",
    "image dimensions",
    "resize photos",
    "resize images free",
    "resize image without losing quality",
    "browser image resizer",
    "image size changer",
  ],

  path: "/tools/image-resizer",
});

export default function ImageResizerPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      <ToolSchema
        name="Image Resizer"
        description="Resize JPG, JPEG, PNG and WebP images online instantly."
        path="/tools/image-resizer"
      />

      <BreadcrumbSchema
        name="Image Resizer"
        path="/tools/image-resizer"
      />

      {/* ================= HERO ================= */}

      <section className="relative px-6 pt-24 pb-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[130px]" />
        </div>

        <div className="mx-auto max-w-screen-2xl">
          <div className="text-center">

            <div className="h-3 bg-black" />

            <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300">
              Image Tools
            </span>

            <h1 className="mt-8 text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">
              Resize Images Online
            </h1>

            <div className="h-3 bg-black" />

            <p className="mx-auto mt-8 max-w-8xl text-lg leading-8 text-gray-400">
              Resize JPG, PNG and WebP images instantly without losing quality.
              Change image width and height directly in your browser. No signup.
              No installation. Completely free.
            </p>

          </div>

          <div className="h-5 bg-black" />

          {/* Trust Badges */}

          <div className="mt-14 flex flex-wrap items-center justify-center gap-4">

            <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 transition hover:border-blue-500/40 hover:bg-white/10">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium">
                  100% Secure
                </span>
              </div>
            </div>

            <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 transition hover:border-blue-500/40 hover:bg-white/10">
              <div className="flex items-center gap-3">
                <Zap className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium">
                  Lightning Fast
                </span>
              </div>
            </div>

            <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 transition hover:border-blue-500/40 hover:bg-white/10">
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium">
                  Privacy Protected
                </span>
              </div>
            </div>

            <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 transition hover:border-blue-500/40 hover:bg-white/10">
              <div className="flex items-center gap-3">
                <MonitorSmartphone className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium">
                  Works on Any Device
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="h-5 bg-black" />

      {/* ================= TOOL ================= */}

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-screen-2xl">

          <div className="rounded-3xl border border-white/10 bg-[#0b0b0b] p-8 shadow-[0_0_50px_rgba(59,130,246,.08)]">
            <ImageResizer />
          </div>

        </div>
      </section>

      <div className="h-10 bg-black" />

      {/* ================= ADVERTISEMENT ================= */}

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-screen-2xl">

          <div className="rounded-3xl border border-dashed border-white/10 bg-white/[0.03] p-8">

            <div className="flex h-28 items-center justify-center rounded-2xl bg-black/40 text-sm tracking-wide text-gray-500">
              Google AdSense (728 × 90)
            </div>

          </div>

        </div>
      </section>
            <div className="h-10 bg-black" />

      {/* ================= FEATURES ================= */}

      <section className="px-6 py-24">
        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-[8px] text-blue-400">
              FEATURES
            </span>

            <h2 className="mt-6 text-4xl font-black">
              Everything You Need To Resize Images
            </h2>

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">
              Resize images quickly and accurately with our powerful browser-based
              image resizer. Perfect for websites, social media, documents and
              professional projects.
            </p>
          </div>

          <div className="h-5 bg-black" />

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-bold">
                Custom Dimensions
              </h3>
              <p className="mt-5 leading-8 text-gray-400">
                Set exact width and height values to resize images for any
                platform or project.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-bold">
                High Quality Output
              </h3>
              <p className="mt-5 leading-8 text-gray-400">
                Resize images while maintaining sharp details and excellent
                visual quality.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-bold">
                Lightning Fast
              </h3>
              <p className="mt-5 leading-8 text-gray-400">
                Resize images within seconds directly inside your browser.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-bold">
                Supports Popular Formats
              </h3>
              <p className="mt-5 leading-8 text-gray-400">
                Resize JPG, PNG and WebP images without compatibility issues.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-bold">
                No Installation Required
              </h3>
              <p className="mt-5 leading-8 text-gray-400">
                Everything runs online in your browser. No software downloads
                or setup required.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-bold">
                Completely Free
              </h3>
              <p className="mt-5 leading-8 text-gray-400">
                Resize unlimited images without paying anything.
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

            <h2 className="mt-6 text-4xl font-black">
              Resize Images In Three Simple Steps
            </h2>

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">
              Resize your images in less than a minute.
            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mt-20 grid gap-10 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">
                1
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                Upload
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                Upload a JPG, PNG or WebP image from your device.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">
                2
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                Resize
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                Enter your preferred width and height dimensions.
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
                Download your resized image instantly and use it anywhere.
              </p>
            </div>

          </div>

        </div>
      </section>
            <div className="h-5 bg-black" />

      {/* ================= WHY USE IMAGE RESIZER ================= */}

      <section className="px-6 py-24">
        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-[8px] text-blue-400">
              WHY CHOOSE US
            </span>

            <h2 className="mt-6 text-4xl font-black">
              Why Use Our Image Resizer?
            </h2>

            <div className="h-2 bg-black" />

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">
              Whether you're preparing images for websites, social media,
              e-commerce stores, presentations or personal projects, our
              Image Resizer makes the process fast and simple.
            </p>

          </div>

          <div className="h-3 bg-black" />

          <div className="mt-20 grid gap-8 md:grid-cols-2">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-bold">
                Perfect Dimensions
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                Resize images to exact dimensions required by websites,
                social media platforms and online marketplaces.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-bold">
                Faster Uploads
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                Properly sized images upload faster and improve workflow
                efficiency across platforms.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-bold">
                Better Website Performance
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                Optimized image dimensions help websites load faster and
                provide a better user experience.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-bold">
                Secure & Browser Based
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                Everything happens inside your browser. No software
                installation or account registration required.
              </p>
            </div>

          </div>

          <div className="h-10 bg-black" />

          {/* SEO Content */}

          <div className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-10">

            <h3 className="text-3xl font-bold">
              Resize Images Online Without Losing Quality
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              Image resizing is essential for websites, blogs, social media,
              online stores and digital marketing campaigns. Large images
              often don't fit platform requirements and can slow down page
              loading speeds. Resizing allows you to adjust image dimensions
              while maintaining excellent visual quality.
            </p>

            <p className="mt-6 leading-8 text-gray-400">
              ToolsNestX Image Resizer helps you resize JPG, PNG and WebP
              images directly in your browser. No software installation,
              account creation or technical knowledge is required. Simply
              upload your image, choose dimensions and download the resized
              version instantly.
            </p>

          </div>

        </div>
      </section>

      <div className="h-5 bg-black" />

      {/* ================= SUPPORTED FORMATS ================= */}

      <section className="px-6 py-24">
        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-[8px] text-blue-400">
              SUPPORTED FORMATS
            </span>

            <h2 className="mt-6 text-4xl font-black">
              Supported Image Formats
            </h2>

          </div>

          <div className="h-5 bg-black" />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
              <h3 className="text-3xl font-bold text-blue-400">
                JPG
              </h3>

              <p className="mt-4 text-gray-400">
                Ideal for photos and everyday images.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
              <h3 className="text-3xl font-bold text-blue-400">
                PNG
              </h3>

              <p className="mt-4 text-gray-400">
                Perfect for transparent graphics and logos.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
              <h3 className="text-3xl font-bold text-blue-400">
                WebP
              </h3>

              <p className="mt-4 text-gray-400">
                Modern image format with excellent quality and efficiency.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
              <h3 className="text-3xl font-bold text-blue-400">
                More Soon
              </h3>

              <p className="mt-4 text-gray-400">
                Additional image formats will be added in future updates.
              </p>
            </div>

          </div>

        </div>
      </section>
            <div className="h-5 bg-black" />

      {/* ================= FAQ ================= */}

      <section className="px-6 py-24">
        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-[8px] text-blue-400">
              FAQ
            </span>

            <h2 className="mt-6 text-4xl font-black">
              Frequently Asked Questions
            </h2>

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">
              Find answers to the most common questions about our free online
              Image Resizer.
            </p>

          </div>

          <div className="h-5 bg-black" />

          <div className="mt-16 space-y-6">

            {[
              {
                q: "Is Image Resizer completely free?",
                a: "Yes. ToolsNestX Image Resizer is 100% free with no hidden fees or subscriptions.",
              },
              {
                q: "Which image formats are supported?",
                a: "Currently JPG, PNG and WebP image formats are supported.",
              },
              {
                q: "Will image quality be affected?",
                a: "Our tool is designed to maintain the best possible quality while resizing images.",
              },
              {
                q: "Do I need to install any software?",
                a: "No. Everything works directly inside your browser.",
              },
              {
                q: "Are my images secure?",
                a: "Yes. Your images are processed locally and remain private.",
              },
              {
                q: "Can I use this tool on mobile devices?",
                a: "Absolutely. Image Resizer works on desktop, tablet and mobile devices.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-blue-500/30"
              >
                <summary className="cursor-pointer list-none text-lg font-semibold">
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

      <div className="h-5 bg-black" />

      {/* ================= RELATED TOOLS ================= */}

      <section className="px-6 py-24">
        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-[8px] text-blue-400">
              MORE TOOLS
            </span>

            <h2 className="mt-6 text-4xl font-black">
              Related Image Tools
            </h2>

          </div>

          <div className="h-5 bg-black" />

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/30 hover:-translate-y-1">
              <h3 className="text-xl font-bold">
                Image Compressor
              </h3>

              <p className="mt-4 text-gray-400">
                Reduce image file size while maintaining quality.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/30 hover:-translate-y-1">
              <h3 className="text-xl font-bold">
                Image Converter
              </h3>

              <p className="mt-4 text-gray-400">
                Convert images between JPG, PNG and WebP formats.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/30 hover:-translate-y-1">
              <h3 className="text-xl font-bold">
                Image Cropper
              </h3>

              <p className="mt-4 text-gray-400">
                Crop images for social media, websites and projects.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/30 hover:-translate-y-1">
              <h3 className="text-xl font-bold">
                PDF Tools
              </h3>

              <p className="mt-4 text-gray-400">
                Merge, split and convert PDF files online.
              </p>
            </div>

          </div>

        </div>
      </section>

      <div className="h-10 bg-black" />

      {/* ================= BOTTOM AD ================= */}

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-screen-2xl">

          <div className="flex h-32 items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/[0.03] text-gray-500">
            Google AdSense (Responsive)
          </div>

        </div>
      </section>

      <div className="h-10 bg-black" />

      {/* ================= CTA ================= */}

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-screen-2xl">

          <div className="rounded-[40px] border border-blue-500/20 bg-gradient-to-br from-blue-600/15 via-[#0b0b0b] to-cyan-500/10 p-14 text-center">

            <h2 className="text-4xl font-black">
              Explore More Free Online Tools
            </h2>

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">
              ToolsNestX provides powerful browser-based tools for image editing,
              PDF management, developer utilities, text tools and everyday
              productivity — all completely free.
            </p>

            <button className="mt-10 rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:bg-blue-500">
              Browse All Tools
            </button>

          </div>

        </div>
      </section>

      <div className="h-15 bg-black" />

    </main>
  );
}