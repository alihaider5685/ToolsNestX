import { BookOpen } from "lucide-react";
import Link from "next/link";
import { blogs } from "@/lib/blogs";

export const metadata = {
  title: "Blog | ToolsNestX",
  description:
    "Explore tutorials, guides, tips, and best practices for using online tools with ToolsNestX.",
};

export default function BlogPage() {
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

      {/* Hero */}
      <section className="relative overflow-hidden">

        <div className="mx-auto flex min-h-[70vh] max-w-screen-2xl items-center justify-center px-6 py-28">

          <div className="max-w-4xl text-center">

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-6 py-2 text-sm font-semibold text-blue-300 backdrop-blur-xl">
              <BookOpen size={16} />
              ToolsNestX Blog
            </div>

            <h1 className="mt-10 text-5xl font-black leading-tight md:text-7xl">

              Learn With

              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {" "}ToolsNestX
              </span>

            </h1>

            <p className="mx-auto mt-8 max-w-8xl text-xl leading-10 text-gray-400">
              Discover detailed tutorials, productivity tips, developer
              guides, and step-by-step articles for every tool available on
              ToolsNestX.
            </p>

          </div>

        </div>

      </section>
      {/* ================= BLOG CARDS ================= */}

<section className="px-6 pb-28">
  <div className="mx-auto max-w-screen-2xl">

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {blogs.map((blog) => (
        <Link
          key={blog.slug}
          href={`/blog/${blog.slug}`}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500"
        >
          <div className="mb-4 inline-flex rounded-full bg-blue-500/10 px-3 py-1 text-sm font-semibold text-blue-400">
            {blog.category}
          </div>

          <h2 className="text-2xl font-bold transition group-hover:text-blue-400">
            {blog.title}
          </h2>

          <p className="mt-4 leading-8 text-gray-400">
            {blog.description}
          </p>

          <div className="mt-8 flex items-center justify-between text-sm text-gray-500">
            <span>{blog.readTime}</span>
            <span>{blog.publishedAt}</span>
          </div>
        </Link>
      ))}

    </div>

  </div>

<div className="h-10 bg-black" />

</section>

    </main>
  );
}