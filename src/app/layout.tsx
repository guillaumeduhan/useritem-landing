
import { Inter } from "next/font/google";
import "./globals.scss";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UserItem',
  description: 'A fully customizable component to display your users.',
}


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <script defer data-domain="useritem.dev" src="https://plausible.io/js/script.js"></script>
    </html>
  );
}
