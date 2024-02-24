'use client';
import 'animate.css';
import { Inter } from "next/font/google";
import Link from "next/link";
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
      <body className={inter.className}>
        <div className="text-center bg-fuchsia-300 cursor-pointer text-[15px] py-4">
          <Link href="https://tally.so/r/3y9Z4x">
            Hey 👋! I am working on it every day to enhance UserItem. Thanks for your understanding. <span className="underline">Feel free to submit any changes here.</span>
          </Link>
        </div>
        {children}
      </body>
      <script defer data-domain="useritem.dev" src="https://plausible.io/js/script.js"></script>
    </html >
  );
}
