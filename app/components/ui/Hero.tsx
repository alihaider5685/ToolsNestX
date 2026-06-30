import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center bg-black px-6 text-center text-white">
      <span className="mb-4 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
        🚀 28+ Free Online Tools
      </span>

      <h1 className="max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl">
        All Your Online Tools
        <span className="block text-blue-500">
          In One Place
        </span>
      </h1>

      <p className="mt-6 max-w-3xl text-lg text-gray-400">
        Free online tools for PDF, Images, Text and Developers.
        Fast, secure and easy to use directly in your browser.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="#tools"
          className="rounded-xl bg-blue-600 px-8 py-3 font-semibold transition hover:bg-blue-700"
        >
          Explore Tools
        </Link>

        <Link
          href="/about"
          className="rounded-xl border border-gray-700 px-8 py-3 font-semibold transition hover:border-blue-500"
        >
          Learn More
        </Link>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
        <span>✓ No Registration</span>
        <span>✓ Fast Processing</span>
        <span>✓ Mobile Friendly</span>
        <span>✓ Free Forever</span>
      </div>
    </section>
  );
}

