"use client";
import { useEffect, useState } from "react";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";
import Footer from "../components/shared/footer";
import InvertedWaveBackground from "../components/shared/header";

import Styles from "@/src/css/style.module.css";

import useDetectScroll, { Direction } from "@smakss/react-scroll-direction";
import React from "react";

import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";

export default function Home() {
  const router = useRouter();
  const [screenWidth, setScreenWidth] = useState(0);

  const [isSignedIn, setIsSignedIn] = useState(auth.currentUser !== null);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  onAuthStateChanged(auth, () => {
    if (auth.currentUser) {
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
  });

  const { scrollDir } = useDetectScroll();

  const handleOnClick = () => {
    router.push("/interest-form");
  };

  useEffect(() => {
    if (scrollDir === Direction.Down)
      window.scrollTo({ top: 1000, behavior: "smooth" });
    if (scrollDir === Direction.Up) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [scrollDir]);
  return (
    <main className='overflow-hidden min-h-screen'>
      {/* TODO: account for resizing screen */}
      <InvertedWaveBackground
        isSignedIn={isSignedIn}
        screenWidth={screenWidth}
      />
      <div className='h-screen flex justify-center items-center flex-col'>
        <h1
          className={`md:w-1/3 text-center text-6xl font-bold leading-relaxed ${Styles["text-shadow-big"]}`}
        >
          Get Ready <p className='text-3xl'>FOR</p> QHacks 2025!
        </h1>
        <a
          onClick={() => {
            window.scrollTo({ top: 1000, behavior: "smooth" });
          }}
          className='bottom-10 absolute'
        >
          <BsChevronDoubleDown size={100} className='justify-self-end' />
        </a>
      </div>
      <div className='h-screen flex justify-between items-center w-screen flex-col'>
        <a
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className='top-10 relative justify-self-start'
        >
          <BsChevronDoubleUp size={100} />
        </a>
        <div className='md:w-1/3 text-center flex justify-center flex-col px-3'>
          <h1
            className={`text-center text-4xl font-bold leading-relaxed ${Styles["text-shadow-big"]}`}
          >
            Come Join Us!
          </h1>
          <p className='text-xl py-5'>
            Interested in joining? Click the button below to pre-register!
          </p>
          <button
            onClick={handleOnClick}
            className={`mt-3 shadow-[0_0_20px_1px_rgb(255,255,255)] bg-blue-900 py-3 rounded-lg border border-[#ffd24d] hover:text-[#ff4040] font-bold`}
          >
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            I'm Interested!
          </button>
        </div>
        <div className='justify-self-end w-full'>
          <Footer />
        </div>
      </div>
    </main>
  );
}
