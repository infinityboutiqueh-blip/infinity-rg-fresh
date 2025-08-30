export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Correct favicon */}
        <link rel="icon" href="/favicon-white.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon-white.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon-new.png" />
      </head>
      <body>{children}</body>
    </html>
  );
  

}
