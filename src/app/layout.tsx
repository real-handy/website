import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "realhandy.tech",
  description: "Fractional CTO, mentoring, coaching from proven 0 to 1 bootstrap startups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ cn(inter.className, 'bg-slate-900') }>{children}</body>
    </html>
  );
}
