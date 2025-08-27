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
      <body className="bg-background text-foreground">{children}</body>
    </html>
  );
}
