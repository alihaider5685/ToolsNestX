import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Rocket,
  Globe,
} from "lucide-react";

export const metadata = {
  title: "About FileNestX",
  description:
    "Learn more about FileNestX, our mission, vision and the free online productivity tools we provide.",
};

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-black text-white">

      {/* Background */}

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

      <section className="relative">

        <div className="mx-auto flex min-h-screen max-w-screen-2xl flex-col items-center justify-center px-6 pt-28 pb-24 text-center">

          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-6 py-2 text-sm font-semibold text-blue-300 backdrop-blur-xl">

            <Sparkles size={16} />

            Free Online Productivity Platform

          </div>

          {/* Heading */}

          <h1 className="mt-10 max-w-6xl text-5xl font-black leading-tight md:text-7xl lg:text-8xl">

            About{" "}

            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">

              FileNestX

            </span>

          </h1>

          {/* Description */}

          <p className="mt-10 max-w-4xl text-xl leading-10 text-gray-400">

            FileNestX is a modern all-in-one online toolkit created for
            students, developers, professionals, businesses and creators.

            Our goal is simple — provide beautiful, fast and completely free
            browser-based tools that save time and improve productivity.

          </p>

          <p className="mt-8 max-w-4xl text-lg leading-9 text-gray-500">

            Whether you need PDF tools, image utilities, text generators or
            developer resources, FileNestX delivers everything through a clean,
            secure and lightning-fast experience with no installation and no
            registration required.

          </p>

          {/* Buttons */}

          <div className="mt-14 flex flex-wrap justify-center gap-5">

            <Link
              href="/"
              className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 px-8 py-4 text-lg font-semibold shadow-[0_0_40px_rgba(59,130,246,.45)] transition hover:scale-105"
            >
              Explore Tools

              <ArrowRight
                size={20}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/contact"
              className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-lg font-semibold backdrop-blur-xl transition hover:border-blue-500 hover:bg-white/10"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>


  {/* ================= OUR STORY ================= */}

<section className="relative py-28">

  <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center px-6">

    <div className="w-full max-w-6xl text-center">

      <p className="mb-5 text-sm font-bold uppercase tracking-[8px] text-blue-500">
        OUR STORY
      </p>

      <h2 className="text-5xl font-black leading-tight md:text-6xl lg:text-7xl">
        Why We Created{" "}
        <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
          FileNestX
        </span>
      </h2>

      <p className="mx-auto mt-10 max-w-6xl text-xl leading-10 text-gray-400">
        We noticed that many online tools were overloaded with advertisements,
        locked behind subscriptions, or required unnecessary software
        installation before users could even begin their work.
      </p>

      <p className="mx-auto mt-8 max-w-6xl text-xl leading-10 text-gray-400">
        Our goal was simple: create one modern platform where anyone can
        instantly access powerful browser-based tools without downloads,
        registrations or hidden costs.
      </p>

      <p className="mx-auto mt-8 max-w-6xl text-xl leading-10 text-gray-400">
        Today, FileNestX continues to grow with one mission —
        <span className="font-semibold text-white">
          {" "}
          making productivity faster, simpler and completely free for everyone.
        </span>
      </p>

    </div>

  </div>

</section>

<div className="h-5 bg-black" />

{/* ================= VISION ================= */}

<section className="relative pb-28">

  <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center px-6">


    <div className="mx-auto flex w-full max-w-6xl flex-col items-center rounded-[36px] border border-blue-500/20 bg-gradient-to-br from-[#0b1222] to-[#111] px-8 py-20 text-center backdrop-blur-xl md:px-16">


  <p className="mb-5 text-sm font-bold uppercase tracking-[8px] text-blue-500">
    OUR VISION
  </p>

  <h2 className="text-center text-5xl font-black leading-tight md:text-6xl lg:text-7xl">
    Building The Future Of{" "}
    <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
      Free Online Tools
    </span>
  </h2>

  <p className="mx-auto mt-10 max-w-4xl text-center text-xl leading-10 text-gray-400">
    Our vision is to become one of the world's most trusted online
    productivity platforms by providing high-quality browser-based tools
    that are simple, secure and completely free.
  </p>

</div>

  </div>

</section>

<div className="h-8 bg-black" />

      {/* ================= MISSION ================= */}

      <section className="pb-28">
        <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center px-6">

          <div className="rounded-[36px] border border-white/10 bg-white/5 p-12 backdrop-blur-xl">

            <div className="mx-auto w-full max-w-4xl text-center">

              <span className="text-sm font-bold uppercase tracking-[0.35em] text-blue-500">
                OUR MISSION
              </span>

              <h2 className="mt-5 text-4xl font-black md:text-5xl">
                Helping Millions Work{" "}
                <span className="text-blue-500">
                  Smarter Every Day
                </span>
              </h2>

              <p className="mt-8 text-lg leading-9 text-gray-400">
                We continuously improve FileNestX by adding new tools,
                optimizing performance and delivering a smooth experience that
                saves time and increases productivity for everyone.
              </p>

            </div>

          </div>

        </div>
      </section>

<div className="h-8 bg-black" />

            {/* ================= STATS ================= */}

      <section className="pb-28">
        <div className="w-full max-w-9xl text-center">
          
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-[30px] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">
              <h3 className="text-6xl font-black text-blue-500">25+</h3>
              <p className="mt-4 text-xl text-gray-400">
                Professional Tools
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">
              <h3 className="text-6xl font-black text-blue-500">100%</h3>
              <p className="mt-4 text-xl text-gray-400">
                Free To Use
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">
              <h3 className="text-6xl font-black text-blue-500">24/7</h3>
              <p className="mt-4 text-xl text-gray-400">
                Available Online
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">
              <h3 className="text-6xl font-black text-blue-500">∞</h3>
              <p className="mt-4 text-xl text-gray-400">
                Future Growth
              </p>
            </div>

          </div>

        </div>
      </section>

      <div className="h-8 bg-black" />

      {/* ================= WHY CHOOSE ================= */}

      <section className="pb-28">

        <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center px-6">

          <div className="mx-auto mb-20 max-w-4xl text-center">

            <span className="text-sm font-bold uppercase tracking-[0.35em] text-blue-500">
              WHY CHOOSE US
            </span>


            <h2 className="mt-5 text-4xl font-black md:text-6xl">
              Why Choose{" "}
              <span className="text-blue-500">
                FileNestX
              </span>
              ?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-400">
              We focus on speed, simplicity and privacy so everyone can work
              more efficiently.
            </p>

           <div className="h-5 bg-black" />

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            <div className="rounded-[28px] border border-white/10 bg-[#111] p-8 transition hover:border-blue-500">
              <div className="mb-5 text-5xl">⚡</div>

              <h3 className="text-3xl font-bold">
                Lightning Fast
              </h3>

              <p className="mt-5 text-lg leading-8 text-gray-400">
                Optimized tools that finish your tasks within seconds.
              </p>

            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#111] p-8 transition hover:border-blue-500">

              <div className="mb-5 text-5xl">🔒</div>

              <h3 className="text-3xl font-bold">
                Secure Processing
              </h3>

              <p className="mt-5 text-lg leading-8 text-gray-400">
                Your files stay inside your browser whenever possible for
                maximum privacy.
              </p>

            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#111] p-8 transition hover:border-blue-500">

              <div className="mb-5 text-5xl">💯</div>

              <h3 className="text-3xl font-bold">
                Completely Free
              </h3>

              <p className="mt-5 text-lg leading-8 text-gray-400">
                No subscriptions, hidden fees or premium paywalls.
              </p>

            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#111] p-8 transition hover:border-blue-500">

              <div className="mb-5 text-5xl">📱</div>

              <h3 className="text-3xl font-bold">
                Responsive Design
              </h3>

              <p className="mt-5 text-lg leading-8 text-gray-400">
                Works beautifully on desktop, tablet and mobile devices.
              </p>

            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#111] p-8 transition hover:border-blue-500">

              <div className="mb-5 text-5xl">🚀</div>

              <h3 className="text-3xl font-bold">
                Constant Updates
              </h3>

              <p className="mt-5 text-lg leading-8 text-gray-400">
                We continuously improve FileNestX and release new tools.
              </p>

            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#111] p-8 transition hover:border-blue-500">

              <div className="mb-5 text-5xl">🌍</div>

              <h3 className="text-3xl font-bold">
                Available Anywhere
              </h3>

              <p className="mt-5 text-lg leading-8 text-gray-400">
                Access your favorite tools from anywhere with an internet
                connection.
              </p>

            </div>

          </div>

        </div>

      </section>

<div className="h-5 bg-black" />

            {/* ================= CTA ================= */}

      <section className="pb-28">

        <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center px-6">

          <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 px-10 py-20 text-center">

            <h2 className="mx-auto max-w-4xl text-5xl font-black leading-tight md:text-6xl">

              Ready To Boost Your Productivity?

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-blue-100">

              Join thousands of users who rely on FileNestX for fast, secure,
              and completely free online tools. Start using powerful browser
              utilities today.

            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-lg font-bold text-black transition hover:scale-105"
              >
                Explore Tools

                <ArrowRight size={20} />

              </Link>

              <Link
                href="/contact"
                className="rounded-2xl border border-white/30 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>

      </section>

      <div className="h-5 bg-black" />

      {/* ================= FAQ ================= */}

      <section className="pb-28">

        <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center px-6">

          <div className="mx-auto mb-20 max-w-4xl text-center">

            <span className="text-sm font-bold uppercase tracking-[0.35em] text-blue-500">
              FAQ
            </span>

            <h2 className="mt-5 text-4xl font-black md:text-6xl">

              Frequently Asked Questions

            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-400">

              Everything you need to know about FileNestX.

            </p>

            <div className="h-5 bg-black" />

          </div>

          <div className="grid gap-8 lg:grid-cols-2">

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

              <h3 className="text-2xl font-bold">
                Is FileNestX completely free?
              </h3>

              <p className="mt-5 text-lg leading-8 text-gray-400">
                Yes. Every available tool can be used without subscriptions or
                hidden charges.
              </p>

            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

              <h3 className="text-2xl font-bold">
                Do I need an account?
              </h3>

              <p className="mt-5 text-lg leading-8 text-gray-400">
                No. Most tools work instantly without registration.
              </p>

            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

              <h3 className="text-2xl font-bold">
                Are my files secure?
              </h3>

              <p className="mt-5 text-lg leading-8 text-gray-400">
                Yes. Privacy is one of our highest priorities and most tools
                process data directly inside your browser.
              </p>

            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

              <h3 className="text-2xl font-bold">
                Will new tools be added?
              </h3>

              <p className="mt-5 text-lg leading-8 text-gray-400">
                Absolutely. We regularly release new tools and improve existing
                ones.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>

  );
}