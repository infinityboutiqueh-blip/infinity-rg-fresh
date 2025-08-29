import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infinity RG",
  description: "Smart property solutions for landlords & investors",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },   // Default favicon
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",   // For iOS
    other: [
      { rel: "icon", url: "/android-chrome-192x192.png", sizes: "192x192" },
      { rel: "icon", url: "/android-chrome-512x512.png", sizes: "512x512" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
