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
  title: "QHacks 2025",
  description: "Queen's University's annual hackathon is back for it's 10th iteration! Come pre-register for the event in February 2025 and join hundreds of applicants, meet tech companies, and have one of the best experiences ever!",
  keywords: ['QHacks', 'QHacks 2025', 'Queens Hackathon'],
  icons: '/crown2.png',
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
