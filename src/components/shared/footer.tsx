"use client";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Footer() {
  return (
    <footer className='md:absolute bottom-0 h-auto w-full flex flex-row justify-center radial-gradient-background md:bg-transparent font-bold'>
      {/* LINKS */}
      <div
        className='
            flex flex-row md:flex-col text-white text-base xs:text-sm relative z-20 md:w-auto justify-around md:justify-between my-5 w-full'
      >
        <motion.a
          whileHover={{ fontWeight: "bold" }}
          className='font-bold text-xs md:text-sm '
          href='https://qhacks.io/'
          target="_blank"
        >
          QHacks 2026
        </motion.a>
        <motion.a
          whileHover={{ fontWeight: "bold" }}
          className='font-bold pr-4 hover:pr-0 text-xs md:text-sm'
          href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf'
          target="_blank"
        >
          MLH Code of Conduct
        </motion.a>
      </div>

      <img src='./crown2.png' width={100} className='mx-[10%] z-20 hidden md:block' />

      {/* SITE INFO */}
      <div className='flex-col pb-2 text-base xs:text-sm text-white z-20 w-auto justify-center hidden md:flex'>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p className='font-bold text-[0.5rem] md:text-sm'>Queen's University</p>
        <p className='font-bold text-[0.5rem] md:text-sm'>99 University Ave, Kingston ON</p>
        <p className='font-bold text-[0.5rem] md:text-sm'>Copyright © 2025 QHacks</p>
      </div>
    </footer>
  );
}
