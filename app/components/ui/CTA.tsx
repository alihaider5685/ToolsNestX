
import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-bold text-white md:text-5xl">
          Ready to Explore Powerful Online Tools?
        </h2>

        <p className="mt-6 text-lg text-blue-100">
          Access PDF, Image, Text and Developer tools for free.
          Fast, secure and available directly in your browser.
        </p>

        <Link
          href="#tools"
          className="mt-10 inline-block rounded-xl bg-white px-8 py-4 text-lg font-semibold text-blue-700 transition hover:scale-105"
        >
          Explore All Tools
        </Link>
      </div>
    </section>
  );
}

