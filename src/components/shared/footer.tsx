"use client";
import { Inter } from 'next/font/google';
import { useState } from 'react';
import { motion } from "framer-motion";
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Footer(){

    return(
        <footer className='pb-8 pt-20 bg-gradient-to-b from-black to-blue-900'>
          <div className='flex justify-center items-center py-5'>
            <a className='px-[3%] text-4xl ' href='https://www.instagram.com/qhacks24/'>
              <motion.i whileHover={{scale:1.2}} className="fab fa-instagram text-white"></motion.i>
            </a>
            <a className='px-[3%] text-4xl ' href='https://twitter.com/QHacks23'>
              <motion.i whileHover={{scale:1.2}} className="fab fa-twitter text-white"></motion.i>
            </a>
            <a className='px-[3%] text-4xl ' href='mailto:hello@qhacks.io'>
              <motion.i whileHover={{scale:1.2}} className="far fa-envelope text-white"></motion.i>
            </a>
            <a className='px-[3%] text-4xl ' href='https://www.facebook.com/QHacks/'>
              <motion.i whileHover={{scale:1.2}} className="fab fa-facebook text-white"></motion.i>
            </a>
            <a className='px-[3%] text-4xl ' href='https://www.linkedin.com/company/qhacks/'>
              <motion.i whileHover={{scale:1.2}} className="fab fa-linkedin text-white"></motion.i>
            </a>
          </div>

          {/* LINKS */}
          <div className='
            flex justify-center items-center text-white pb-2 py-4 md:py-2 text-base xs:text-sm relative z-20'>
            <motion.a whileHover={{fontWeight:'bold'}} className='px-5 md:px-[3%] text-center font-light' href='https://2024.qhacks.io/'>QHacks 2024</motion.a>
            {/* <motion.a whileHover={{fontWeight:'bold'}} className=' md:px-[3%] text-center' href='https://ghw.mlh.io/'>Local Hack Day</motion.a> */}
            {/* <motion.a whileHover={{fontWeight:'bold'}} className=' md:px-[3%] text-center' href='https://medium.com/@qhacks'>QHacks Blog</motion.a> */}
            {/* <motion.a whileHover={{fontWeight:'bold'}} className=' md:px-[3%] text-center' href='https://www.youtube.com/watch?v=a3Z7zEc7AXQ'>Hack Day Tips</motion.a> */}
            <motion.a whileHover={{fontWeight:'bold'}} className='px-5 md:px-[3%] text-center font-light' href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf'>MLH Code of Conduct</motion.a>
          </div>
          
          {/* SITE INFO */}
          <div className='flex justify-center items-center pb-2 text-base xs:text-sm text-white'>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className='px-2 lg:px-[2%] text-center font-light'>Queen's University</p>
            <p className='px-2 lg:px-[2%] text-center font-light'>99 University Ave, Kingston ON</p>
            <p className='px-2 lg:px-[2%] text-center font-light'>Copyright © 2025 QHacks</p>
          </div>
        </footer>
    );

}