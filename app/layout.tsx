// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Infinity RG",
  description: "Smart property solutions for landlords & investors",
  icons: {
    icon: [
      { url: "/favicon-white.ico" },               // Standard
      { url: "/favicon-white.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-new-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/apple-touch-icon-new.png", sizes: "180x180" }, // iOS homescreen
    ],
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest", // PWA support
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
