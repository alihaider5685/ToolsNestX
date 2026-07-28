import { notFound } from "next/navigation";
import { blogs } from "@/lib/blogs";

import BlogHero from "@/app/components/blog/BlogHero";
import BlogBreadcrumb from "@/app/components/blog/BlogBreadcrumb";
import BlogContent from "@/app/components/blog/BlogContent";
import BlogCTA from "@/app/components/blog/BlogCTA";
import AuthorBox from "@/app/components/blog/AuthorBox";
import RelatedBlogs from "@/app/components/blog/RelatedBlogs";
import BlogFAQ from "@/app/components/blog/BlogFAQ";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

const SITE_URL = "https://toolsnestx.online";
const SITE_NAME = "ToolsNestX";

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found | ToolsNestX",
    };
  }

  const url = `${SITE_URL}/blog/${blog.slug}`;
  const image = blog.image ? `${SITE_URL}${blog.image}` : `${SITE_URL}/og-image.png`;

  return {
    title: `${blog.title} | ToolsNestX`,
    description: blog.description,
    keywords: blog.keywords,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: blog.title,
      description: blog.description,
      url,
      siteName: SITE_NAME,
      type: "article",
      publishedTime: blog.publishedAt,
      modifiedTime: blog.updatedAt || blog.publishedAt,
      authors: [blog.author],
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [image],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

const faqSchema =
  blog.faq && blog.faq.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: blog.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-screen-2xl px-6 pt-10">
        <BlogBreadcrumb title={blog.title} />
      </div>

      {faqSchema && (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(faqSchema),
    }}
  />
)}

      <BlogHero
        category={blog.category}
        title={blog.title}
        description={blog.description}
        author={blog.author}
        publishedAt={blog.publishedAt}
        updatedAt={blog.updatedAt}
        readTime={blog.readTime}
        image={blog.image}
      />

      <section className="pb-24">
        <div className="mx-auto max-w-screen-2xl px-6">
          <BlogContent content={blog.content} />


    {blog.faq && blog.faq.length > 0 && (
      <div className="mt-20">
    <BlogFAQ faqs={blog.faq} />
  </div>
  )}

<div className="mt-20">
  <BlogCTA toolUrl={blog.toolUrl} />
</div>

<div className="mt-20">
  <RelatedBlogs currentSlug={blog.slug} />
</div>

          <div className="mt-20">
            <AuthorBox author={blog.author} />
          </div>
          
        </div>
      </section>
    </main>
  );
}