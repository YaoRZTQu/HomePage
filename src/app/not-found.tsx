import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] items-center py-16">
      <div className="max-w-xl">
        <p className="text-sm font-medium text-accent">404</p>
        <h1 className="mt-3 text-4xl font-semibold">页面不存在</h1>
        <p className="mt-5 text-lg leading-8 text-muted">这个地址没有对应的页面。你可以回到首页，或者去博客看看最新文章。</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="glass-button rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground">
            返回首页
          </Link>
          <Link href="/blog" className="glass-button rounded-md border border-border px-5 py-3 text-sm font-semibold">
            查看博客
          </Link>
        </div>
      </div>
    </Container>
  );
}
