"use client";
import { useEffect, useState } from "react";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";
import Footer from "../components/shared/footer";
// import InvertedWaveBackground from "../components/shared/header";
import NavBar from '@/src/components/navbar/nav';
import dynamic from "next/dynamic";
import TriColor from "../components/tricolor/tricolor";

import useDetectScroll, { Direction } from "@smakss/react-scroll-direction";

import { useRouter } from "next/navigation";
// useSearchParams
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../firebase/config";
import Link from "next/link";
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

  // const [isSignedIn, setIsSignedIn] = useState(auth.currentUser !== null);
  // onAuthStateChanged(auth, () => {
  //   if (auth.currentUser) {
  //     setIsSignedIn(true);
  //   } else {
  //     setIsSignedIn(false);
  //   }
  // });

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

  const { scrollDir } = useDetectScroll();

  useEffect(() => {
    if (scrollDir === Direction.Down)
      window.scrollTo({ top: screenHeight, behavior: "smooth" });
    if (scrollDir === Direction.Up) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [scrollDir, screenHeight]);

  return (
    <main className='overflow-hidden'>
      <NavBar/>
      {/* TODO: account for resizing screen */}
      {/* <InvertedWaveBackground
        isSignedIn={isSignedIn}
        screenWidth={screenWidth}
      /> */}
      {/* text-shadow-big */}
      <div className='h-screen flex justify-center items-center w-screen flex-col '>
        <h1 className='md:w-1/3 text-center text-6xl font-bold leading-relaxed'> 
          Get Ready <p className='text-3xl'>for</p> <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-orange-800 via-brand-orange-500 to-tricolor-bright-red animate-gradient-xy">QHacks 2025</span>
        </h1>
        <div className='h-screen w-screen absolute -z-20'>
          <DonutScene x={0} y={0} radius={3} color='white' />
        </div>
        <a
          onClick={() => {
            window.scrollTo({ top: screenHeight, behavior: "smooth" });
          }}
          className='bottom-10 absolute'
        >
          <BsChevronDoubleDown size={100} className='justify-self-end' />
        </a>
      </div>
      <TriColor />
      <div className='h-screen flex justify-between items-center w-screen flex-col select-none'>
        <div className='h-screen w-screen absolute z-0'>
          <ManyDonutScene mobileView={screenWidth <= 600}/>
        </div>

        <a
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className='top-10 relative justify-self-start z-20'
        >
          <BsChevronDoubleUp size={100} />
        </a>
        <div className='md:w-1/3 text-center flex justify-center flex-col px-3 z-20'>
          <h1 className='text-center text-4xl font-bold leading-relaxed bg-clip-text text-transparent bg-gradient-to-r from-brand-orange-800 via-tricolor-yellow to-tricolor-bright-red animate-gradient-x'>
            Come Join Us!
          </h1>
          <p className='text-xl py-5 font-light'>
            Interested in joining? Click the button below to pre-register!
          </p>
          <Link
            href='/interest-form'
            className='mt-3 shadow-[0_0_20px_1px_rgb(255,255,255)] bg-blue-900 py-3 rounded-lg border border-[#ffd24d] font-light hover:font-semibold'
          >
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            I'm Interested!
          </Link>
        </div>
        <div className='justify-self-end w-full'>
          <Footer />
        </div>
      </div>
    </main>
  );
}
