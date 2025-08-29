import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infinity RG",
  description: "Smart property solutions for landlords & investors",
  icons: {
    icon: "/favicon.ico", // ✅ This will use your favicon.ico
    shortcut: "/favicon.ico",
    apple: "/logo1-192.png", // ✅ iOS/Apple touch icon
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="192x192" href="/logo1-192.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
