import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";


const general = localFont({
  src: "../public/fonts/GeneralSans-Variable.ttf",
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
      <body className={general.className + " bg-neutral-100"}>{children}</body>
    </html>
  );
}
