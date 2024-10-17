import { Inter } from "next/font/google";
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  AnimatePresence,
  useInView,
} from "framer-motion";
import Link from "next/link";
import signOutUser from "@/src/firebase/auth/signout";

export default function MobileNav({ isSignedIn }: { isSignedIn: boolean }) {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <motion.nav className='w-auto absolute top-0 left-0 justify-between p-4 rounded-br-xl bg-[#132f4c]  text-white z-10'>
      <div className='flex items-center'>
        <motion.div
          initial={false}
          animate={{ color: isExpanded ? "#FBBF24" : "#ffffff" }}
          className='block text-white hover:text-gray-400 focus:outline-none'
          onClick={() => setExpanded(!isExpanded)}
          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          <svg
            className='h-6 w-6 fill-current'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M4 6H20V8H4V6ZM4 12H20V14H4V12ZM4 18H20V20H4V18Z'
            />
          </svg>
        </motion.div>
      </div>
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <motion.div>
              <motion.span className='block mx-4 py-2'>
                {/* <Link
                  href={isSignedIn ? "/" : "/signin"}
                  onClick={() => {
                    if (isSignedIn) {
                      signOutUser();
                    }
                  }}
                >
                  <p className='hover:text-[#ffd24d]  font-bold text-2xl  drop-shadow-[0_1px_10px_rgb(255,255,255)] '>
                    {isSignedIn ? "Sign Out" : "Sign In"}
                  </p>
                </Link> */}
              </motion.span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
