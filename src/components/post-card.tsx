import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

type PostCardProps = {
  post: BlogPost;
};

const dateFormatter = new Intl.DateTimeFormat("zh-CN", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="group border-b border-border py-6 last:border-b-0">
      <div className="mb-2 flex flex-wrap items-center gap-2 text-[13px] text-muted">
        <time dateTime={post.date}>{dateFormatter.format(new Date(post.date))}</time>
        <span aria-hidden="true">/</span>
        <span>{post.readingTime}</span>
      </div>
      <h2 className="text-lg font-semibold text-foreground">
        <Link href={`/blog/${post.slug}`} className="transition-colors group-hover:text-accent">
          {post.title}
        </Link>
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{post.description}</p>
      {post.tags.length > 0 ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-md border border-border px-2 py-1 text-xs font-medium text-muted">
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}
