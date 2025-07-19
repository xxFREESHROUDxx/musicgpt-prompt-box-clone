import type { Metadata, Viewport } from "next";
import "@/assets/globals.css";
import { ReactNode } from "react";
import { GradientBackground } from "@/components/common/gradient-background";
import { ToastContainer } from "@/components/common/toast/toast-container";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/Geist[wght].woff2",
  weight: "100 900",
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MusicGPT",
  description: "Create music with AI",
};

export const viewport: Viewport = {
  themeColor: "#16191C",
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
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${geistSans.variable} font-sans`}>
        <ToastContainer>
          <GradientBackground />
          {children}
        </ToastContainer>
      </body>
    </html>
  );
}
