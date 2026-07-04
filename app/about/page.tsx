import Link from "next/link";

export const metadata = {
  title: "About FileNestX",
  description:
    "Learn more about FileNestX and our mission to provide free online tools for everyone.",
};

export default function Page() {
  return (
    <main className="bg-black text-white">
     <div className="mx-auto w-full max-w-screen-2xl px-6">
      {/* ================= HERO ================= */}

<section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#050505] via-[#0b0b0b] to-black py-28">

  <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[150px]" />

  <div className="mx-auto w-full max-w-screen-2xl px-6">

    <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
      🚀 Free Online Productivity Platform
    </span>

    <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
      About{" "}
      <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
        FileNestX
      </span>
    </h1>

    <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-gray-400">

      FileNestX is a modern all-in-one online toolkit designed to help
      students, professionals, developers, creators and businesses complete
      everyday digital tasks directly in their browser.

      <br />
      <br />

      Whether you need PDF utilities, image processing, text generators or
      developer tools, FileNestX delivers everything through a clean,
      lightning-fast and secure experience — completely free.

    </p>

    <div className="mt-12 flex flex-wrap justify-center gap-5">

      <Link
        href="/"
        className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
      >
        Explore Tools
      </Link>

      <Link
        href="/contact"
        className="rounded-xl border border-white/20 px-8 py-4 font-semibold transition hover:border-blue-500 hover:bg-white/5"
      >
        Contact Us
      </Link>

    </div>

  </div>

</section>

{/* ================= OUR STORY ================= */}

<section className="bg-black py-24">

 <div className="mx-auto w-full max-w-screen-2xl px-6">

    <div>

      <span className="text-blue-500 font-semibold uppercase tracking-widest">
        Our Story
      </span>

      <h2 className="mt-4 text-5xl font-bold">
        Why We Created
        <br />
        FileNestX
      </h2>

    </div>

    <div>

      <p className="leading-9 text-gray-400">

        We noticed that many online tools were either overloaded with ads,
        limited behind subscriptions or required unnecessary software
        installations.

      </p>

      <p className="mt-8 leading-9 text-gray-400">

        FileNestX was built with one simple goal:

        <span className="font-semibold text-white">
          {" "}to provide powerful online tools that anyone can access
          instantly without downloading software or creating an account.
        </span>

      </p>

      <p className="mt-8 leading-9 text-gray-400">

        Every tool is designed to save time, improve productivity and make
        everyday digital tasks simple for everyone.

      </p>

    </div>

  </div>

</section>

{/* ================= OUR VISION ================= */}

<section className="bg-black pb-24">

  <div className="mx-auto w-full max-w-screen-2xl px-6">

    <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-[#111] to-[#090909] p-12">

      <span className="font-semibold uppercase tracking-widest text-blue-500">
        Our Vision
      </span>

      <h2 className="mt-5 text-4xl font-bold">
        Building The Future Of Free Online Tools
      </h2>

      <p className="mt-8 max-w-4xl leading-9 text-gray-400">

        Our vision is to become one of the world's most trusted online
        productivity platforms by offering hundreds of free browser-based
        utilities for PDFs, Images, Text and Developers.

        <br />
        <br />

        We continuously improve FileNestX with better performance,
        stronger privacy, modern design and new features so users can
        accomplish more without complexity.

      </p>

    </div>

  </div>

</section>
{/* ================= WHAT WE OFFER ================= */}

<section className="bg-black py-24">

  <div className="mx-auto w-full max-w-screen-2xl px-6">

    <div className="text-center">

      <span className="font-semibold uppercase tracking-widest text-blue-500">
        Our Services
      </span>

      <h2 className="mt-4 text-5xl font-bold">
        Everything You Need
      </h2>

      <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-400">
        FileNestX provides a growing collection of powerful online tools
        designed to simplify your daily digital tasks.
      </p>

    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      <div className="rounded-3xl border border-white/10 bg-[#111] p-8 transition hover:-translate-y-2 hover:border-blue-500">

        <div className="text-5xl">📄</div>

        <h3 className="mt-6 text-2xl font-bold">
          PDF Tools
        </h3>

        <p className="mt-4 leading-8 text-gray-400">
          Merge, Split, Compress, Convert, Protect, Unlock,
          Rotate and manage PDF files online.
        </p>

      </div>

      <div className="rounded-3xl border border-white/10 bg-[#111] p-8 transition hover:-translate-y-2 hover:border-blue-500">

        <div className="text-5xl">🖼️</div>

        <h3 className="mt-6 text-2xl font-bold">
          Image Tools
        </h3>

        <p className="mt-4 leading-8 text-gray-400">
          Compress, Resize, Crop, Convert, Rotate,
          Watermark and optimize images instantly.
        </p>

      </div>

      <div className="rounded-3xl border border-white/10 bg-[#111] p-8 transition hover:-translate-y-2 hover:border-blue-500">

        <div className="text-5xl">📝</div>

        <h3 className="mt-6 text-2xl font-bold">
          Text Utilities
        </h3>

        <p className="mt-4 leading-8 text-gray-400">
          Word Counter, Case Converter,
          Lorem Ipsum Generator and more.
        </p>

      </div>

      <div className="rounded-3xl border border-white/10 bg-[#111] p-8 transition hover:-translate-y-2 hover:border-blue-500">

        <div className="text-5xl">💻</div>

        <h3 className="mt-6 text-2xl font-bold">
          Developer Tools
        </h3>

        <p className="mt-4 leading-8 text-gray-400">
          Base64, JSON Formatter,
          UUID Generator, Hash Generator and many more.
        </p>

      </div>

      <div className="rounded-3xl border border-white/10 bg-[#111] p-8 transition hover:-translate-y-2 hover:border-blue-500">

        <div className="text-5xl">⚡</div>

        <h3 className="mt-6 text-2xl font-bold">
          Fast Processing
        </h3>

        <p className="mt-4 leading-8 text-gray-400">
          Experience lightning-fast browser processing
          without waiting for uploads.
        </p>

      </div>

      <div className="rounded-3xl border border-white/10 bg-[#111] p-8 transition hover:-translate-y-2 hover:border-blue-500">

        <div className="text-5xl">🔒</div>

        <h3 className="mt-6 text-2xl font-bold">
          Privacy First
        </h3>

        <p className="mt-4 leading-8 text-gray-400">
          Your files remain secure.
          Most tools process data directly inside your browser.
        </p>

      </div>

    </div>

  </div>

</section>



{/* ================= STATS ================= */}

<section className="bg-black py-24">

 <div className="mx-auto w-full max-w-screen-2xl px-6">

    <div className="grid gap-10 text-center md:grid-cols-4">

      <div>
        <h2 className="text-5xl font-bold text-blue-500">
          25+
        </h2>

        <p className="mt-4 text-gray-400">
          Online Tools
        </p>

      </div>

      <div>

        <h2 className="text-5xl font-bold text-blue-500">
          100%
        </h2>

        <p className="mt-4 text-gray-400">
          Free Forever
        </p>

      </div>

      <div>

        <h2 className="text-5xl font-bold text-blue-500">
          24/7
        </h2>

        <p className="mt-4 text-gray-400">
          Available
        </p>

      </div>

      <div>

        <h2 className="text-5xl font-bold text-blue-500">
          ∞
        </h2>

        <p className="mt-4 text-gray-400">
          Future Growth
        </p>

      </div>

    </div>

  </div>

</section>
      {/* Why Choose */}
      <section className="px-6 py-24">
        <div className="mx-auto w-full max-w-screen-2xl">

          <div className="text-center">
            <h2 className="text-4xl font-bold">
              Why Choose <span className="text-blue-500">FileNestX?</span>
            </h2>

            <p className="mt-5 text-lg text-gray-400">
              We focus on speed, simplicity and privacy so everyone can work
              more efficiently.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-[#111] p-7 hover:border-blue-500 transition">
              <div className="text-4xl">⚡</div>
              <h3 className="mt-5 text-xl font-semibold">
                Lightning Fast
              </h3>
              <p className="mt-3 text-gray-400">
                Optimized tools that finish your tasks within seconds.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#111] p-7 hover:border-blue-500 transition">
              <div className="text-4xl">🔒</div>
              <h3 className="mt-5 text-xl font-semibold">
                Secure Processing
              </h3>
              <p className="mt-3 text-gray-400">
                Most tools work directly inside your browser for better privacy.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#111] p-7 hover:border-blue-500 transition">
              <div className="text-4xl">💯</div>
              <h3 className="mt-5 text-xl font-semibold">
                Completely Free
              </h3>
              <p className="mt-3 text-gray-400">
                No subscriptions, hidden fees or account required.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#111] p-7 hover:border-blue-500 transition">
              <div className="text-4xl">📱</div>
              <h3 className="mt-5 text-xl font-semibold">
                Responsive Design
              </h3>
              <p className="mt-3 text-gray-400">
                Works beautifully on desktop, tablet and mobile devices.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#111] p-7 hover:border-blue-500 transition">
              <div className="text-4xl">🚀</div>
              <h3 className="mt-5 text-xl font-semibold">
                Constant Updates
              </h3>
              <p className="mt-3 text-gray-400">
                We continuously add new online tools and improve performance.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#111] p-7 hover:border-blue-500 transition">
              <div className="text-4xl">🌍</div>
              <h3 className="mt-5 text-xl font-semibold">
                Available Anywhere
              </h3>
              <p className="mt-3 text-gray-400">
                Access your favorite tools from any device with an internet connection.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Statistics */}

      <section className="px-6 pb-24">
        <div className="mx-auto w-full max-w-screen-2xl">

          <div className="grid gap-8 md:grid-cols-4">

            <div className="rounded-3xl border border-white/10 bg-[#111] p-8 text-center">
              <h3 className="text-5xl font-bold text-blue-500">
                50+
              </h3>
              <p className="mt-3 text-gray-400">
                Online Tools
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#111] p-8 text-center">
              <h3 className="text-5xl font-bold text-blue-500">
                100%
              </h3>
              <p className="mt-3 text-gray-400">
                Free Access
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#111] p-8 text-center">
              <h3 className="text-5xl font-bold text-blue-500">
                24/7
              </h3>
              <p className="mt-3 text-gray-400">
                Available
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#111] p-8 text-center">
              <h3 className="text-5xl font-bold text-blue-500">
                Secure
              </h3>
              <p className="mt-3 text-gray-400">
                Privacy Focused
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Vision */}

      <section className="px-6 pb-24">
        <div className="mx-auto w-full max-w-screen-2xl rounded-3xl border border-white/10 bg-[#111] p-10">

          <h2 className="text-4xl font-bold">
            Our Vision
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            We believe powerful online tools should be accessible to everyone.
            Our vision is to become one of the world's most trusted platforms
            for free productivity tools by delivering speed, simplicity and
            innovation.
          </p>

        </div>
      </section>

      {/* Mission */}

      <section className="px-6 pb-24">
        <div className="mx-auto w-full max-w-screen-2xl rounded-3xl border border-blue-500/20 bg-gradient-to-r from-[#111] to-[#181818] p-10">

          <h2 className="text-4xl font-bold">
            Our Mission
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            Our mission is to provide high-quality online tools that save time,
            increase productivity and eliminate unnecessary software
            installations. Every tool is designed to be simple, reliable and
            completely free for everyone.
          </p>

        </div>
      </section>

      {/* CTA */}

      <section className="px-6 pb-24">
        <div className="mx-auto w-full max-w-screen-2xl rounded-[32px] bg-gradient-to-r from-blue-600 to-blue-500 p-14 text-center">

          <h2 className="text-5xl font-bold">
            Ready to Boost Your Productivity?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
            Explore dozens of powerful online tools built to simplify your
            daily workflow.
          </p>

          <Link
            href="/"
            className="mt-10 inline-flex rounded-xl bg-white px-8 py-4 text-lg font-bold text-black transition hover:scale-105"
          >
            Explore Tools →
          </Link>

        </div>
      </section>
     </div>
    </main>
  );
}