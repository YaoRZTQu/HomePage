import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PostCard } from "@/components/post-card";
import { getAllTags, getPublishedPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes and essays about software, product thinking, and learning.",
};

export default function BlogPage() {
  const posts = getPublishedPosts();
  const tags = getAllTags();

  return (
    <Container className="py-14 sm:py-20">
      <header className="max-w-3xl">
        <p className="text-sm font-medium text-accent">Blog</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">写作与技术笔记</h1>
        <p className="mt-5 text-lg leading-8 text-muted">这里会放一些关于工程实践、产品判断、工具链和长期学习的文章。</p>
        {tags.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="glass-button rounded-md border border-border px-3 py-1 text-xs font-medium text-muted">
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </header>
      <section className="mt-10">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </section>
    </Container>
  );
}
