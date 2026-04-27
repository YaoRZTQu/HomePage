import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { cn } from "@/lib/utils";

type MdxContentProps = {
  source: string;
  className?: string;
};

const components = {
  a: ({ href = "", children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isInternal = href.startsWith("/");

    if (isInternal) {
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} target="_blank" rel="noreferrer" {...props}>
        {children}
      </a>
    );
  },
};

export function MdxContent({ source, className }: MdxContentProps) {
  return (
    <div className={cn("mdx-content", className)}>
      <MDXRemote source={source} components={components} />
    </div>
  );
}
