import Link from "next/link";
import { ArrowRight, Command, Cpu, Layers3, Sparkles } from "lucide-react";
import { Container } from "@/components/container";

const signals = [
  { label: "Systems", icon: Layers3 },
  { label: "Interfaces", icon: Command },
  { label: "AI tooling", icon: Cpu },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(circle_at_50%_12%,rgba(255,255,255,0.88),rgba(244,242,236,0)_62%)] dark:bg-[radial-gradient(circle_at_50%_12%,rgba(55,52,45,0.55),rgba(17,17,15,0)_62%)]" />
      <Container className="flex min-h-[calc(100vh-5rem)] flex-col justify-center py-12 sm:py-16">
        <section className="mx-auto w-full max-w-4xl text-center">
          <p className="mx-auto mb-7 inline-flex items-center gap-2 rounded-md border border-border bg-surface/80 px-3 py-1.5 text-[12px] font-medium uppercase text-muted shadow-sm shadow-black/5 backdrop-blur">
            <Sparkles className="size-3.5 text-accent" />
            Personal operating system
          </p>
          <h1 className="mx-auto max-w-3xl text-[40px] font-semibold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
            Build quietly.
            <br />
            Think clearly.
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-muted sm:text-lg">
            Timeload 的个人主页。项目、文章和实验都放在各自页面，这里只保留一个清晰入口。
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              查看项目
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background/70 px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-soft"
            >
              阅读文章
            </Link>
          </div>

          <div className="mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-2 rounded-lg border border-border bg-surface/78 p-2 shadow-sm shadow-black/5 backdrop-blur">
            {signals.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex min-h-24 flex-col items-center justify-center gap-3 rounded-md bg-background/55 px-2">
                  <Icon className="size-5 text-accent" />
                  <span className="text-[13px] font-medium text-muted">{item.label}</span>
                </div>
              );
            })}
          </div>

          <div className="mx-auto mt-10 flex max-w-2xl items-center justify-between border-t border-border pt-5 text-[13px] text-muted">
            <span>Selected work</span>
            <span>Notes archive</span>
            <span>Contact</span>
          </div>
        </section>
      </Container>
    </div>
  );
}
