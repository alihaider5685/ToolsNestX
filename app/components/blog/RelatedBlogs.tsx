import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogs } from "@/lib/blogs";

type Props = {
  currentSlug: string;
};

export default function RelatedBlogs({ currentSlug }: Props) {
  const currentBlog = blogs.find((blog) => blog.slug === currentSlug);

  if (!currentBlog) return null;

  const relatedBlogs = blogs.filter((blog) =>
    currentBlog.related.includes(blog.slug)
  );

  if (relatedBlogs.length === 0) return null;

  return (
    <section className="mt-28">

      {/* Heading */}

      <div className="mb-12">

        <p className="text-sm font-bold uppercase tracking-[6px] text-blue-500">
          KEEP READING
        </p>

        <h2 className="mt-4 text-4xl font-black">
          Related Articles
        </h2>

        <div className="h-2 bg-black" />

        <p className="mt-4 max-w-2xl text-lg text-gray-400">
          Continue learning with more helpful guides from ToolsNestX.
        </p>

        <div className="h-3 bg-black" />

      </div>

      {/* Cards */}

      <div className="grid gap-8 md:grid-cols-2">

        {relatedBlogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            className="group rounded-[28px] border border-white/10 bg-[#111] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500"
          >
            <div className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-xs font-semibold text-blue-400">
              {blog.category}
            </div>

            <h3 className="mt-6 text-2xl font-bold transition group-hover:text-blue-400">
              {blog.title}
            </h3>

            <p className="mt-5 line-clamp-3 leading-8 text-gray-400">
              {blog.description}
            </p>

            <div className="mt-8 flex items-center gap-2 font-semibold text-blue-400">
              Read Article

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
          </Link>
        ))}

      </div>

      <div className="h-5 bg-black" />

    </section>
  );
}