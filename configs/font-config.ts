import { Inter, Roboto } from "next/font/google";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-Roboto",
});

export const inter = Inter({
  weight: ["500"],
  subsets: ["latin"],
  variable: "--font-inter",

  display: "swap",
});
