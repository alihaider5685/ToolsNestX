import Link from "next/link";
import { ChevronRight, House } from "lucide-react";

type Props = {
  title: string;
};

export default function BlogBreadcrumb({ title }: Props) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-12 flex flex-wrap items-center gap-2 text-sm text-gray-400"
    >
      <Link
        href="/"
        className="flex items-center gap-2 transition hover:text-blue-400"
      >
        <House size={16} />
        Home
      </Link>

      <ChevronRight size={16} />

      <Link
        href="/blog"
        className="transition hover:text-blue-400"
      >
        Blog
      </Link>

      <ChevronRight size={16} />

      <span className="max-w-[300px] truncate text-white">
        {title}
      </span>
    </nav>
  );
}