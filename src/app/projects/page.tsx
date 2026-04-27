import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects and experiments.",
};

const projects = [
  {
    name: "Personal Knowledge Base",
    description: "本地优先的知识库实验，用于收集阅读笔记、项目记录和长期研究主题。",
    status: "In progress",
  },
  {
    name: "Writing System",
    description: "围绕技术博客、短笔记和复盘文章搭建的一套轻量写作工作流。",
    status: "Prototype",
  },
  {
    name: "Design Engineering Notes",
    description: "关于界面、产品判断、前端实现细节的公开笔记合集。",
    status: "Active",
  },
];

export default function ProjectsPage() {
  return (
    <Container className="py-14 sm:py-20">
      <header className="max-w-3xl">
        <p className="text-sm font-medium text-accent">Projects</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">项目展示</h1>
        <p className="mt-5 text-lg leading-8 text-muted">先放三个占位项目，后续可以替换成真实链接、截图、技术栈和项目复盘。</p>
      </header>
      <section className="mt-10 grid gap-5 md:grid-cols-3">
        {projects.map((project) => (
          <article key={project.name} className="glass-card rounded-lg border border-border bg-surface/70 p-6">
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-xl font-semibold">{project.name}</h2>
              <ExternalLink className="mt-1 size-4 text-muted" />
            </div>
            <p className="mt-4 leading-7 text-muted">{project.description}</p>
            <p className="mt-6 text-sm font-medium text-accent">{project.status}</p>
          </article>
        ))}
      </section>
    </Container>
  );
}
