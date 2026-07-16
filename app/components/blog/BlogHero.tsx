import { CalendarDays, Clock3, User } from "lucide-react";
import Image from "next/image";

type Props = {
  category: string;
  title: string;
  description: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  image: string;
};

export default function BlogHero({
  category,
  title,
  description,
  author,
  publishedAt,
  updatedAt,
  readTime,
  image,
}: Props) {
  return (
    <section className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 -z-10 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[180px]" />

      <div className="mx-auto flex max-w-7xl max-w-screen-2xl flex-col items-center px-6 py-12 text-center md:py-20">
        {/* Category */}

        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-semibold text-cyan-400">
          {category}
        </span>

        {/* Title */}

        <h1 className="mt-8 text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
          {title}
        </h1>

       <div className="h-5 bg-black" />

        {/* Description */}

        <p className="mt-8 text-lg leading-8 text-gray-400 md:text-xl">
          {description}
        </p>

        <div className="h-5 bg-black" />

        {/* Meta */}

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <User size={16} />
            <span>{author}</span>
          </div>
         
       <div className="mt-12 w-full max-w-6xl">
     <Image
    src={image}
    alt={title}
    width={1200}
    height={675}
    priority
    className="w-full rounded-3xl border border-white/10 object-cover shadow-2xl"
  />
   </div>

          <div className="flex items-center gap-2">
            <CalendarDays size={16} />
            <span>Published {publishedAt}</span>
          </div>

          <div className="flex items-center gap-2">
            <CalendarDays size={16} />
            <span>Updated {updatedAt}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock3 size={16} />
            <span>{readTime}</span>
          </div>
        </div>
      </div>

     <div className="h-5 bg-black" />

    </section>

  );
}