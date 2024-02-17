'use client';
import { Inter } from "next/font/google";
import "./globals.scss";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="A fully customizable component to display your users." />
        <title>UserItem by @codewithguillaume</title>
      </head>
      <body className={inter.className}>{children}</body>
      <script defer data-domain="useritem.dev" src="https://plausible.io/js/script.js"></script>
    </html>
  );
}
