// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infinity RG",
  description: "Smart property solutions for landlords & investors",
  icons: {
    icon: "/favicon.ico", // 👈 this must match your file in /public
    shortcut: "/favicon.ico",
    apple: "/logo1-192.png", // for mobile devices
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
S