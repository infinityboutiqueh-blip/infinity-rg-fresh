import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infinity RG",
  description: "Smart property solutions for landlords & investors",
  icons: {
    icon: "/favicon-new.ico",
    shortcut: "/favicon-new-32x32.png",
    apple: "/apple-touch-icon-new.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-new.ico" sizes="any" />
        <link rel="icon" href="/favicon-new-32x32.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon-new.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
