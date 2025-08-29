// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infinity RG",
  description: "Smart property solutions for landlords & investors",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon-white.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
