import { Analytics } from "@vercel/analytics/react";

import type { Metadata } from "next";
import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";

import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";

// const general = localFont({
//   src: "../../public/fonts/GeneralSans-Variable.ttf",
// });

export const metadata: Metadata = {
  title: "Thilina R.",
  description: "My Digital ID",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "relative h-full bg-background text-foreground antialiased",
          GeistSans.className,
        )}
      >
        <main className="relative flex min-h-screen flex-col">
          <div className="flex-1 flex-grow">{children}</div>
          <Footer />
        </main>
        <Analytics />
      </body>
    </html>
  );
}
