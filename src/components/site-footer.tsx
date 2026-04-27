import { Container } from "@/components/container";

export function SiteFooter() {
  return (
    <footer className="pb-5">
      <Container className="pt-8">
        <div className="glass-panel flex flex-col gap-4 rounded-lg px-4 py-4 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} Timeload. Built with Next.js and MDX.</p>
            <p>Writing, building, and learning in public.</p>
          </div>
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button inline-flex w-fit items-center rounded-md border border-border/70 px-3 py-1.5 text-muted hover:text-foreground"
          >
            蜀ICP备2024092839号-1
          </a>
        </div>
      </Container>
    </footer>
  );
}
