import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";

const general = localFont({
  src: "../../public/fonts/GeneralSans-Variable.ttf",
});

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
          "relative h-full bg-neutral-50/50 font-sans antialiased",
          general.className,
        )}
      >
        <main className="relative flex min-h-screen flex-col">
          <div className="flex-1 flex-grow">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
