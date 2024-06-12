import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { RouteChangeListener } from "../components/shared/RouteChangeListener";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang='en' className='font-thin'>
      <body className={inter.className}>
        {children}
        <RouteChangeListener />
      </body>
    </html>
  );
}
