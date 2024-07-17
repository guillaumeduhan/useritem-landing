'use client';
import 'animate.css';
import { Outfit } from 'next/font/google';
import Script from 'next/script';
import { Suspense } from 'react';
import "./globals.scss";
const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
})


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
      <body className={outfit.className}>
        <div className="py-1 text-center bg-fuchsia-400">
        </div>
        <Suspense>{children}</Suspense>
      </body>
      <Script data-domain="useritem.dev" src="https://plausible.io/js/script.js" />
    </html >
  );
}
