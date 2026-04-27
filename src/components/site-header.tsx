import Link from "next/link";
import { Code2, Mail } from "lucide-react";
import { Container } from "@/components/container";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-transparent pt-3">
      <Container className="px-3 sm:px-6 lg:px-8">
        <div className="glass-panel flex h-[52px] items-center justify-between gap-3 rounded-lg px-3 sm:px-4">
          <Link href="/" className="text-sm font-semibold text-foreground">
            Timeload
          </Link>
          <nav className="flex items-center gap-1 text-[13px] text-muted">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="glass-button rounded-md px-2 py-1.5 transition-colors hover:bg-soft hover:text-foreground sm:px-3"
              >
                {item.label}
              </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-1 sm:flex">
            <a
              href="https://github.com/"
              aria-label="Code profile"
              className="glass-button rounded-md p-2 text-muted transition-colors hover:bg-soft hover:text-foreground"
            >
              <Code2 className="size-4" />
            </a>
            <a
              href="mailto:hello@example.com"
              aria-label="Email"
              className="glass-button rounded-md p-2 text-muted transition-colors hover:bg-soft hover:text-foreground"
            >
              <Mail className="size-4" />
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
