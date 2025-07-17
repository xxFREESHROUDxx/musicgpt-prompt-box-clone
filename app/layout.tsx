import type { Metadata, Viewport } from "next";
import { clsx } from "clsx";
import { inter, roboto } from "@/configs/font-config";
import "@/assets/globals.css";
import { ReactNode } from "react";
export const metadata: Metadata = {
  title: "MusicGPT",
  description: "Create music with AI",
};

export const viewport: Viewport = {
  themeColor: "#33a05a",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(roboto.className, roboto.variable, inter.variable)}>
        {children}
      </body>
    </html>
  );
}
