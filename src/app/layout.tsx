import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import React from "react";
import { RouteChangeListener } from "../components/shared/RouteChangeListener";

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "QHacks",
  description: "QHacks 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='font-thin overflow-x-hidden'>
      <body className={openSans.className}>
        {children}
        <RouteChangeListener />
      </body>
    </html>
  );
}
