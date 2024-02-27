'use client';
import 'animate.css';
import Link from "next/link";
import Script from 'next/script';
import "./globals.scss";

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
      <body>
        <div className="text-center bg-fuchsia-300 cursor-pointer text-[15px] py-4">
          <Link href="https://tally.so/r/3y9Z4x">
            Hey 👋 I am working on UserItem every day to enhance it. Thanks for your understanding. <span className="underline">Feel free to submit any changes here.</span>
          </Link>
        </div>
        {children}
      </body>
      <Script data-domain="useritem.dev" src="https://plausible.io/js/script.js" />
    </html >
  );
}
