"use client";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Footer() {
  return (
    <footer className='absolute bottom-0 h-auto w-full flex flex-row justify-center'>
      {/* LINKS */}
      <div
        className='
            flex flex-col text-white text-base xs:text-sm relative z-20 w-auto justify-between my-5'
      >
        <motion.a
          whileHover={{ fontWeight: "bold" }}
          className='  font-light'
          href='https://2024.qhacks.io/'
        >
          QHacks 2024
        </motion.a>
        <motion.a
          whileHover={{ fontWeight: "bold" }}
          className='font-light pr-3 hover:pr-0'
          href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf'
        >
          MLH Code of Conduct
        </motion.a>
      </div>

      <img src='./crown2.png' width={100} className='mx-[10%] z-20 ' />

      {/* SITE INFO */}
      <div className='flex flex-col pb-2 text-base xs:text-sm text-white z-20 w-auto justify-center'>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p className='font-light'>Queen's University</p>
        <p className='font-light'>99 University Ave, Kingston ON</p>
        <p className='font-light'>Copyright © 2025 QHacks</p>
      </div>
    </footer>
  );
}
