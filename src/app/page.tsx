"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";
import Footer from "../components/shared/footer";
import InvertedWaveBackground from "../components/shared/header";

import useDetectScroll, { Direction } from "@smakss/react-scroll-direction";
import React from "react";

import { onAuthStateChanged } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { auth } from "../firebase/config";
import Faq from "../components/faq";
import NavBar from "../components/navbar/nav";
const DonutScene = dynamic(
  () => import("../components/shared/3d-models/donut"),
  { ssr: false }
);

const ManyDonutScene = dynamic(
  () => import("../components/shared/3d-models/manyDonuts"),
  { ssr: false }
);

export default function Home() {
  const router = useRouter();

  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);

  const [isSignedIn, setIsSignedIn] = useState(auth.currentUser !== null);

  onAuthStateChanged(auth, () => {
    if (auth.currentUser) {
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateWidth = () => {
        setScreenWidth(window.innerWidth);
        setScreenHeight(window.innerHeight);
      };

      updateWidth();

      window.addEventListener("resize", updateWidth);

      // Cleanup event listener on unmount
      return () => {
        window.removeEventListener("resize", updateWidth);
      };
    }
  }, []);

  return (
    <main className='overflow-hidden'>
      <NavBar />
      {/* text-shadow-big */}
      <div className='h-screen flex justify-center items-center w-screen flex-col '>
        <h1 className='md:w-1/3 text-center text-6xl font-bold leading-relaxed'>
          Get Ready <p className='text-3xl'>for</p>{" "}
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-brand-orange-800 via-brand-orange-500 to-tricolor-bright-red animate-gradient-xy'>
            QHacks 2025
          </span>
        </h1>
        <div className='h-screen w-screen absolute -z-20'>
          <DonutScene x={0} y={0} radius={3} color='white' />
        </div>
        <a
          onClick={() => {
            window.scrollTo({ top: screenHeight, behavior: "smooth" });
          }}
          className='bottom-10 absolute'
        ></a>
      </div>
      <div className='flex justify-between items-center w-screen flex-col select-none'>
        <a
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className='top-10 relative justify-self-start z-20'
        ></a>

        <div>
          <Faq />
        </div>
      </div>
    </main>
  );
}
