import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/container";
import { MdxContent } from "@/components/mdx-content";
import { getPostBySlug, getPublishedPosts } from "@/lib/blog";

const dateFormatter = new Intl.DateTimeFormat("zh-CN", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || !post.published) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <Container className="py-12 sm:py-16">
      <Link href="/blog" className="glass-button inline-flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-semibold text-accent">
        <ArrowLeft className="size-4" />
        返回博客
      </Link>
      <article className="mt-10 max-w-3xl">
        <header className="border-b border-border pb-8">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted">
            <time dateTime={post.date}>{dateFormatter.format(new Date(post.date))}</time>
            <span aria-hidden="true">/</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">{post.title}</h1>
          <p className="mt-5 text-lg leading-8 text-muted">{post.description}</p>
          {post.tags.length > 0 ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="glass-button rounded-md border border-border px-3 py-1 text-xs font-medium text-muted">
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </header>
        <MdxContent source={post.content} className="mt-10" />
      </article>
    </Container>
  );
}
