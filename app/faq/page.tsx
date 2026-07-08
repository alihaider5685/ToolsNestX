import Link from "next/link";
import Button from "@/app/components/common/Button";
import { Search, HelpCircle, ArrowRight } from "lucide-react";
export const metadata = {
  title: "FAQ | ToolsNestX",
  description:
    "Frequently Asked Questions about ToolsNestX online tools.",
};

export default function FAQPage() {
  return (
    <main className="overflow-hidden bg-black text-white">

      {/* ================= BACKGROUND ================= */}

      <div className="fixed inset-0 -z-10 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-black to-[#06152d]" />

        <div
          className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)]
          bg-[size:80px_80px]
          opacity-20
        "
        />

        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[170px]" />
      </div>


      {/* ================= HERO ================= */}

<section className="relative overflow-hidden">

  {/* Background Glow */}
  <div className="absolute left-1/2 top-20 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[180px]" />

  <div className="mx-auto flex min-h-[80vh] max-w-screen-2xl items-center justify-center px-6 py-32">

    <div className="mx-auto max-w-5xl text-center">

      {/* Badge */}

      <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-6 py-2 text-sm font-semibold text-blue-300 backdrop-blur-xl">

        <HelpCircle size={18} />

        Frequently Asked Questions

      </div>

      {/* Heading */}

      <h1 className="mt-10 text-5xl font-black leading-tight md:text-7xl lg:text-8xl">

        Got{" "}

        <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Questions?
        </span>

      </h1>

      {/* Description */}

      <p className="mx-auto mt-10 max-w-3xl text-xl leading-10 text-gray-400">

        Everything you need to know about ToolsNestX,
        our tools, privacy, security and how our platform works.

      </p>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-500">

        Can't find your answer? Contact us anytime and we'll be happy
        to help.

      </p>

     {/* Buttons */}

  <div className="mt-14 flex flex-wrap justify-center gap-5">
  <Button
    href="/contact"
    icon={<ArrowRight size={18} />}
  >
    Contact Support
  </Button>

  <Button
    href="/"
    variant="secondary"
    icon={<ArrowRight size={18} />}
  >
    Explore Tools
  </Button>
    </div>

    </div>

  </div>

</section>
{/* ================= FAQ SECTION ================= */}

<section className="px-6 py-28">

  <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center px-6">

    {/* Section Heading */}

    <div className="mx-auto max-w-4xl text-center">

      <p className="mb-5 text-sm font-bold uppercase tracking-[8px] text-blue-500">
        POPULAR QUESTIONS
      </p>

      <h2 className="text-5xl font-black leading-tight md:text-6xl">

        Find Your{" "}

        <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Answers
        </span>

      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-xl leading-10 text-gray-400">

        Here are the most common questions users ask before using
        ToolsNestX.

      </p>

    </div>

    {/* FAQ Cards */}

    <div className="mx-auto mt-20 max-w-5xl space-y-6">

      {/* FAQ 1 */}

      <div className="rounded-[28px] border border-white/10 bg-[#111] p-8 transition hover:border-blue-500">

        <h3 className="text-2xl font-bold">

          Is ToolsNestX completely free?

        </h3>

        <p className="mt-5 text-lg leading-9 text-gray-400">

          Yes. Every tool available on ToolsNestX can be used completely
          free without subscriptions or hidden charges.

        </p>

      </div>

      {/* FAQ 2 */}

      <div className="rounded-[28px] border border-white/10 bg-[#111] p-8 transition hover:border-blue-500">

        <h3 className="text-2xl font-bold">

          Do I need to create an account?

        </h3>

        <p className="mt-5 text-lg leading-9 text-gray-400">

          No. Most ToolsNestX tools work instantly inside your browser.
          No registration is required.

        </p>

      </div>

      {/* FAQ 3 */}

      <div className="rounded-[28px] border border-white/10 bg-[#111] p-8 transition hover:border-blue-500">

        <h3 className="text-2xl font-bold">

          Are my files secure?

        </h3>

        <p className="mt-5 text-lg leading-9 text-gray-400">

          Absolutely. Your files are processed securely and are never
          permanently stored on our servers.

        </p>

      </div>

      {/* FAQ 4 */}

      <div className="rounded-[28px] border border-white/10 bg-[#111] p-8 transition hover:border-blue-500">

        <h3 className="text-2xl font-bold">

          Which devices are supported?

        </h3>

        <p className="mt-5 text-lg leading-9 text-gray-400">

          ToolsNestX works perfectly on desktop, laptop, tablet and
          mobile browsers.

        </p>

      </div>

      {/* FAQ 5 */}

      <div className="rounded-[28px] border border-white/10 bg-[#111] p-8 transition hover:border-blue-500">

        <h3 className="text-2xl font-bold">

          Will more tools be added?

        </h3>

        <p className="mt-5 text-lg leading-9 text-gray-400">

          Yes. We continuously release new productivity tools and improve
          existing ones based on user feedback.

        </p>

      </div>

    </div>

  </div>

</section>

<div className="h-9 bg-black" />

{/* ================= CTA SECTION ================= */}

<section className="px-6 py-28">

  <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center px-6">

    <div className="overflow-hidden rounded-[40px] border border-blue-500/20 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-12 md:p-20 text-center">

      <p className="text-sm font-bold uppercase tracking-[8px] text-blue-100">
        STILL NEED HELP?
      </p>

      <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl">

        We're Always Happy To Help

      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-xl leading-10 text-blue-100">

        Can't find the answer you're looking for? Our team is ready to
        help you with anything related to ToolsNestX.

      </p>

      <div className="mt-12 flex flex-wrap justify-center gap-5">
  <Button
    href="/contact"
    className="bg-white text-blue-700 hover:bg-gray-100"
    icon={<ArrowRight size={18} />}
  >
    Contact Support
  </Button>

  <Button
    href="/"
    variant="secondary"
    icon={<ArrowRight size={18} />}
  >
    Explore Tools
  </Button>
</div>

    </div>

  </div>

</section>

<div className="h-9 bg-black" />

{/* ================= QUICK STATS ================= */}

<section className="px-6 pb-32">

  <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-4">

    <div className="rounded-[28px] border border-white/10 bg-[#111] p-10 text-center">
      <h3 className="text-6xl font-black text-blue-500">50+</h3>
      <p className="mt-4 text-xl text-gray-400">
        Productivity Tools
      </p>
    </div>

    <div className="rounded-[28px] border border-white/10 bg-[#111] p-10 text-center">
      <h3 className="text-6xl font-black text-blue-500">100%</h3>
      <p className="mt-4 text-xl text-gray-400">
        Free Forever
      </p>
    </div>

    <div className="rounded-[28px] border border-white/10 bg-[#111] p-10 text-center">
      <h3 className="text-6xl font-black text-blue-500">24/7</h3>
      <p className="mt-4 text-xl text-gray-400">
        Always Available
      </p>
    </div>

    <div className="rounded-[28px] border border-white/10 bg-[#111] p-10 text-center">
      <h3 className="text-6xl font-black text-blue-500">Secure</h3>
      <p className="mt-4 text-xl text-gray-400">
        Privacy Focused
      </p>
    </div>

  </div>

</section>

<div className="h-10 bg-black" />

    </main>
  );
}
