import ImageCompressor from "@/app/components/tools/ImageCompressor";
import {
  ShieldCheck,
  Zap,
  Lock,
  MonitorSmartphone,
} from "lucide-react";

export const metadata = {
  title:
    "Free Image Compressor Online | Compress JPG, PNG & WebP | ToolsNestX",
  description:
    "Compress JPG, PNG and WebP images online without losing quality. Fast, secure and completely free browser-based image compressor.",
  keywords: [
    "image compressor",
    "compress image online",
    "jpg compressor",
    "png compressor",
    "webp compressor",
    "reduce image size",
    "free image compressor",
    "online image optimizer",
    "compress photos",
    "ToolsNestX",
  ],
};

export default function ImageCompressorPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

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

              Compress Images Online

            </h1>

             <div className="h-3 bg-black" />

            <p className="mx-auto mt-8 max-w-8xl text-lg leading-8 text-gray-400">

              Compress JPG, PNG and WebP images online without sacrificing
              quality. Reduce image size instantly using our fast,
              browser-based image compressor. No installation. No signup.
              Completely free.

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

            <ImageCompressor />

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

              Everything You Need To Compress Images

            </h2>

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              ToolsNestX Image Compressor combines speed, security and quality
              into one simple online tool. Compress your images in seconds
              without downloading any software.

            </p>

          </div>

           <div className="h-5 bg-black" />

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                High Quality Compression

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Reduce image file size while keeping excellent visual quality
                for websites, presentations and social media.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Lightning Fast

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Compress images within seconds using optimized browser-based
                technology.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Privacy Protected

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Your images remain private. Files are processed securely and
                are never permanently stored.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Supports Popular Formats

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Compress JPG, PNG and WebP images without compatibility
                problems.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                No Installation

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Everything runs directly inside your browser. No software,
                plugins or registration required.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Completely Free

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Use Image Compressor as often as you like without paying
                anything.

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

              Compress Images In Three Simple Steps

            </h2>

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Compressing images takes less than a minute.

            </p>

             <div className="h-5 bg-black" />

          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

                1

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Upload

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Choose a JPG, PNG or WebP image from your computer or mobile
                device.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">

                2

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                Compress

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Click the Compress button and allow ToolsNestX to optimize your
                image automatically.

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

                Download your optimized image instantly and use it anywhere.

              </p>

            </div>

          </div>

        </div>

      </section>

        <div className="h-5 bg-black" />

            {/* ================= WHY USE IMAGE COMPRESSOR ================= */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-screen-2xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-[8px] text-blue-400">

              WHY CHOOSE US

            </span>

            <h2 className="mt-6 text-4xl font-black">

              Why Use Our Image Compressor?

            </h2>

             <div className="h-2 bg-black" />

            <p className="mx-auto mt-6 max-w-8xl text-lg leading-8 text-gray-400">

              Whether you're optimizing images for websites, social media,
              presentations or email attachments, ToolsNestX helps you reduce
              file size while maintaining excellent image quality.

            </p>

             <div className="h-3 bg-black" />

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Faster Website Loading

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Large images are one of the biggest reasons websites load
                slowly. Compressing your images reduces page size, improves
                loading speed and provides a better experience for visitors.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Save Storage Space

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Smaller image files require less storage on your computer,
                mobile phone or cloud services without noticeably affecting
                image quality.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Share Images Faster

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Compressed images upload faster to email, WhatsApp, Facebook,
                Instagram and other online platforms while using less internet
                bandwidth.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">

                Secure & Browser Based

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                Everything works directly in your browser. There is no software
                installation, no account creation and no complicated setup.

              </p>

            </div>

          </div>

           <div className="h-10 bg-black" />

          {/* SEO Content */}

          <div className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-10">

            <h3 className="text-3xl font-bold">

              Compress Images Without Losing Quality

            </h3>

            <p className="mt-6 leading-8 text-gray-400">

              Image compression is an essential part of modern digital
              workflows. Large image files consume more storage space, take
              longer to upload and can slow down websites significantly.
              Compressing images helps reduce file size while preserving visual
              quality, making them easier to share, upload and publish online.

            </p>

            <p className="mt-6 leading-8 text-gray-400">

              ToolsNestX Image Compressor allows you to optimize JPG, PNG and
              WebP images quickly and securely. Everything happens directly
              inside your browser, meaning you don't need to install software or
              create an account. Whether you're a student, blogger, designer,
              developer, business owner or casual user, our free image
              compressor helps you save time while improving productivity.

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

             <div className="h-5 bg-black" />

          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">

              <h3 className="text-3xl font-bold text-blue-400">

                JPG

              </h3>

              <p className="mt-4 text-gray-400">

                Perfect for photos and everyday images.

              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">

              <h3 className="text-3xl font-bold text-blue-400">

                PNG

              </h3>

              <p className="mt-4 text-gray-400">

                Best for transparent graphics and logos.

              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">

              <h3 className="text-3xl font-bold text-blue-400">

                WebP

              </h3>

              <p className="mt-4 text-gray-400">

                Modern image format with excellent compression.

              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">

              <h3 className="text-3xl font-bold text-blue-400">

                More Soon

              </h3>

              <p className="mt-4 text-gray-400">

                We continuously add support for more formats.

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
              Image Compressor.
            </p>

             <div className="h-5 bg-black" />

          </div>

          <div className="mt-16 space-y-6">

            {[
              {
                q: "Is Image Compressor completely free?",
                a: "Yes. ToolsNestX Image Compressor is 100% free with no hidden charges or subscriptions.",
              },
              {
                q: "Which image formats are supported?",
                a: "Currently JPG, PNG and WebP images are supported.",
              },
              {
                q: "Will image quality decrease?",
                a: "Our compressor is optimized to reduce file size while keeping the best possible visual quality.",
              },
              {
                q: "Do I need to install software?",
                a: "No. Everything works directly inside your browser.",
              },
              {
                q: "Are my images secure?",
                a: "Yes. Your images remain private and are processed securely.",
              },
              {
                q: "Can I use this tool on mobile?",
                a: "Absolutely. ToolsNestX works perfectly on desktop, tablet and mobile devices.",
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

             <div className="h-5 bg-black" />

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

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
                Image Resizer
              </h3>
              <p className="mt-4 text-gray-400">
                Resize images without losing quality.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500/30 hover:-translate-y-1">
              <h3 className="text-xl font-bold">
                Image Cropper
              </h3>
              <p className="mt-4 text-gray-400">
                Crop images for social media and websites.
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

              ToolsNestX offers powerful browser-based tools for PDF editing,
              image optimization, text utilities, developers and everyday
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