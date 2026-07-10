import Image from "next/image";

type Props = {
  author: string;
};

export default function AuthorBox({ author }: Props) {
  return (
    <section className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8">
      <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:text-left">
        
          <Image
              src="/images/authors/toolsnestx-team.png"
             alt="ToolsNestX Team"
              width={96}
              height={96}
             className="rounded-full"
             />

        <div className="flex-1">
          <p className="text-sm uppercase tracking-widest text-blue-400">
            Author
          </p>

          <h3 className="mt-2 text-2xl font-bold text-white">
            {author}
          </h3>

          <p className="mt-3 leading-7 text-gray-400">
            The ToolsNestX Team creates practical, accurate, and easy-to-follow
            guides to help users solve everyday problems with online tools.
            Every article is written with a focus on clarity, performance, and
            SEO best practices.
          </p>
        </div>
      </div>

     <div className="h-4 bg-black" />

    </section>
  );
}