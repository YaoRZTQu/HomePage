import { Container } from "@/components/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-3 py-8 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Timeload. Built with Next.js and MDX.</p>
        <p>Writing, building, and learning in public.</p>
      </Container>
    </footer>
  );
}
