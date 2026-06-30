import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-2xl font-bold text-white">
          File<span className="text-blue-500">NestX</span>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <Link
          href="/"
          className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
        >
          Explore Tools
        </Link>
      </div>
    </nav>
  );
}