import 'animate.css';
import { Suspense } from 'react';
import "./globals.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='dark'>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="A fully customizable component to display your users." />
        <title>UserItem by @codewithguillaume</title>
      </head>
      <body>
        <Suspense>{children}</Suspense>
      </body>
    </html >
  );
}
