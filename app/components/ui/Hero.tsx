
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden bg-black px-6 text-center text-white">
      
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[250px] w-[250px] rounded-full bg-indigo-600/10 blur-[100px]" />

      <div className="relative z-10 max-w-6xl">
        
        <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-400">
          🚀 28+ Free Online Tools
        </span>

        <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl lg:text-8xl">
          All Your
          <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Online Tools
          </span>
          In One Place
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-400 md:text-xl">
          Access powerful PDF, Image, Text and Developer tools.
          Fast, secure and completely free to use directly in your browser.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="#tools"
            className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-blue-700 hover:shadow-[0_0_30px_rgba(37,99,235,0.45)]"
          >
            Explore Tools
          </a>

          <Link
            href="/about"
            className="rounded-xl border border-gray-700 px-8 py-4 font-semibold transition hover:border-blue-500 hover:bg-white/5"
          >
            Learn More
          </Link>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
          <span>✓ No Registration</span>
          <span>✓ Fast Processing</span>
          <span>✓ Mobile Friendly</span>
          <span>✓ Free Forever</span>
        </div>
      </div>
    </section>
  );
}


