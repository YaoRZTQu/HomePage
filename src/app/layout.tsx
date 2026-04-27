import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Timeload - Personal Homepage",
    template: "%s | Timeload",
  },
  description: "A personal homepage and blog about software, systems, and thoughtful building.",
  openGraph: {
    title: "Timeload - Personal Homepage",
    description: "A personal homepage and blog about software, systems, and thoughtful building.",
    url: "https://example.com",
    siteName: "Timeload",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Timeload - Personal Homepage",
    description: "A personal homepage and blog about software, systems, and thoughtful building.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="flex min-h-full flex-col font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
