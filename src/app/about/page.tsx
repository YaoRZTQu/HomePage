import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "About",
  description: "A short introduction.",
};

export default function AboutPage() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-medium text-accent">About</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">关于我</h1>
        <div className="mt-8 space-y-6 text-lg leading-8 text-muted">
          <p>
            这里先放一段占位介绍：我是一名关注软件工程、产品体验和个人知识系统的创作者。这个页面之后可以替换成更具体的经历、技能、价值观和联系方式。
          </p>
          <p>
            我喜欢把复杂问题拆成可以持续推进的小块，也相信好的工具和清晰的文字能让长期项目变得更轻松。
          </p>
        </div>
      </div>
    </Container>
  );
}
