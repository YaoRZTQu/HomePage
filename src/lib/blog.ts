import fs from "node:fs";
import path from "node:path";
import { cache } from "react";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  published: boolean;
};

export type BlogPost = BlogFrontmatter & {
  slug: string;
  content: string;
  readingTime: string;
};

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function parseFrontmatter(data: Record<string, unknown>, slug: string): BlogFrontmatter {
  const title = typeof data.title === "string" ? data.title : slug;
  const description = typeof data.description === "string" ? data.description : "";
  const date = typeof data.date === "string" ? data.date : new Date().toISOString();
  const tags = isStringArray(data.tags) ? data.tags : [];
  const published = typeof data.published === "boolean" ? data.published : true;

  return {
    title,
    description,
    date,
    tags,
    published,
  };
}

function getPostFiles() {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .sort();
}

function readPost(fileName: string): BlogPost {
  const slug = fileName.replace(/\.mdx$/, "");
  const filePath = path.join(BLOG_DIR, fileName);
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);
  const frontmatter = parseFrontmatter(data, slug);

  return {
    slug,
    content,
    readingTime: readingTime(content).text,
    ...frontmatter,
  };
}

export const getAllPosts = cache((): BlogPost[] => {
  return getPostFiles()
    .map(readPost)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
});

export const getPublishedPosts = cache((): BlogPost[] => {
  return getAllPosts().filter((post) => post.published);
});

export const getPostBySlug = cache((slug: string): BlogPost | null => {
  const normalizedSlug = slug.replace(/\.mdx$/, "");
  return getAllPosts().find((post) => post.slug === normalizedSlug) ?? null;
});

export const getAllTags = cache((): string[] => {
  return Array.from(new Set(getPublishedPosts().flatMap((post) => post.tags))).sort((a, b) =>
    a.localeCompare(b),
  );
});
