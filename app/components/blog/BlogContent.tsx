import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import "highlight.js/styles/github-dark.css";

type Props = {
  content: string;
};

export default function BlogContent({ content }: Props) {
  return (
    <article
  className="
    prose
    prose-invert
    prose-lg
    max-w-4xl
    mx-auto
    mt-12

    prose-headings:text-white
    prose-headings:font-black

    prose-p:text-gray-300
    prose-p:leading-8

    prose-a:text-blue-400

    prose-strong:text-white

    prose-ul:text-gray-300
    prose-ol:text-gray-300

    prose-li:marker:text-blue-500
  "
  >
      <div
        className="
          prose
          prose-invert
          prose-lg
          max-w-none

          prose-headings:scroll-mt-24
          prose-headings:font-extrabold
          prose-headings:text-white

          prose-h2:mt-16
          prose-h2:mb-6
          prose-h2:border-l-4
          prose-h2:border-cyan-500
          prose-h2:pl-4

          prose-h3:mt-12
          prose-h3:mb-4

          prose-p:leading-9
          prose-p:text-gray-300

          prose-a:text-cyan-400
          prose-a:no-underline
          hover:prose-a:text-cyan-300

          prose-strong:text-white

          prose-ul:my-6
          prose-ol:my-6

          prose-li:marker:text-cyan-400
          prose-li:text-gray-300

          prose-blockquote:border-cyan-500
          prose-blockquote:bg-cyan-500/10
          prose-blockquote:px-6
          prose-blockquote:py-3
          prose-blockquote:rounded-xl
          prose-blockquote:text-cyan-100

          prose-code:text-cyan-300
          prose-code:before:hidden
          prose-code:after:hidden

          prose-pre:rounded-2xl
          prose-pre:border
          prose-pre:border-white/10
          prose-pre:bg-[#0f172a]

          prose-table:border
          prose-table:border-white/10

          prose-th:border
          prose-th:border-white/10

          prose-td:border
          prose-td:border-white/10
        "
      >
        <ReactMarkdown
  remarkPlugins={[remarkGfm]}
  rehypePlugins={[rehypeHighlight]}
  components={{
    h2: ({ children }) => (
      <h2 className="mt-14 mb-6 border-l-4 border-blue-500 pl-4 text-4xl font-extrabold text-white">
        {children}
      </h2>
    ),

    h3: ({ children }) => (
      <h3 className="mt-10 mb-4 text-2xl font-bold text-blue-400">
        {children}
      </h3>
    ),

    p: ({ children }) => (
      <p className="mb-6 text-lg leading-8 text-gray-300">
        {children}
      </p>
    ),

    ul: ({ children }) => (
      <ul className="mb-6 ml-6 list-disc space-y-3 text-gray-300">
        {children}
      </ul>
    ),

    ol: ({ children }) => (
      <ol className="mb-6 ml-6 list-decimal space-y-3 text-gray-300">
        {children}
      </ol>
    ),

    blockquote: ({ children }) => (
      <blockquote className="my-8 rounded-xl border-l-4 border-blue-500 bg-blue-500/10 p-6 italic text-blue-200">
        {children}
      </blockquote>
    ),

    code(props) {
      const { children, className } = props;

      return (
        <code
          className={`${className ?? ""} rounded bg-gray-800 px-1.5 py-1 text-blue-300`}
        >
          {children}
        </code>
      );
    },
  }}
>
  {content}
</ReactMarkdown>
      </div>
    </article>

  );
}