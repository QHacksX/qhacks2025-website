"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import Footer from "../components/shared/footer";
import InvertedWaveBackground from "../components/shared/header";
import { motion } from "framer-motion";
import useDetectScroll, { Direction } from "@smakss/react-scroll-direction";
import React from "react";
import Testimonial from "../components/hacker-testimonials/Testimonial";
import { useRouter, useSearchParams } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import Link from "next/link";
import { auth } from "../firebase/config";
import Faq from "../components/faq";
import NavBar from "../components/navbar/nav";
import TriColor from "../components/tricolor/tricolor";
import GrowYourNetwork from "../components/shared/growYourNetwork";
import PastSpeakers from "../components/shared/pastSpeakers";

export default function Home() {
  const router = useRouter();

  const [isSignedIn, setIsSignedIn] = useState(auth.currentUser !== null);

  onAuthStateChanged(auth, () => {
    if (auth.currentUser) {
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
  });

  const DonutScene = dynamic(
    () => import("../components/shared/3d-models/donut"),
    { ssr: false }
  );

  return (
    <main className='overflow-hidden relative'>
      <div className='radial-gradient-background'>
        <div className='h-screen flex flex-col justify-center items-center w-screen pt-40 '>
          <NavBar />

          <div className='z-0'>
            <div className='absolute inset-0'>
              <DonutScene x={4} y={2.5} radius={0.5} color='white' />
            </div>
            <div className='absolute inset-0'>
              <DonutScene x={-4} y={2} radius={1} color='white' />
            </div>
            <div className='absolute inset-0'>
              <DonutScene x={-4} y={-1.25} radius={0.75} color='white' />
            </div>
            <div className='absolute inset-0'>
              <DonutScene x={4} y={-0.75} radius={1.15} color='white' />
            </div>
          </div>

          <img
            src={"/qhacks_crown.svg"}
            alt='Queens Crown'
            // width={200}
            // height={100}
            className='w-1/2 md:w-1/3 lg:w-1/4 h-auto min-w-[150px]'
          />
          <h1 className='text-center text-4xl md:text-5xl lg:text-7xl font-extrabold font-montserrat leading-relaxed mt-2 md:mt-4'>
            QHACKS
          </h1>
          <p className='md:w-3/5 lg:w-1/3 text-center text-xl mt-4'>
            Get ready to innovate and make a difference! Join QHacks, the
            ultimate hackathon experience.
          </p>
          <p className='font-bold text-[#E2A022] pt-5'>
            In-person! [add dates]
          </p>

          <motion.button
            className='w-3/5 md:w-1/3 lg:w-1/5 p-3 mt-4 font-bold text-xl text-white bg-red-500 rounded-full z-20'
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Register Here
          </motion.button>

          <p className='md:w-1/2 lg:w-1/4 text-center text-lg mt-2 z-20'>
            Already have an account?{" "}
            <a
              href='/signin'
              className='text-blue-500 hover:text-blue-700 z-20'
            >
              Log in
            </a>
          </p>

          <div className='flex items-center justify-center space-x-6 mt-4 z-20'>
            <Link href=''>
              <img
                src={"/tiktok_logo.svg"}
                alt='Tiktok'
                width={40}
                height={40}
                className='w-10 h-10'
              />
            </Link>
            <Link href='https://www.instagram.com/qhacksx/'>
              <img
                src={"/ig_logo.svg"}
                alt='Instagram'
                width={40}
                height={40}
                className='w-10 h-10'
              />
            </Link>
            <Link href='https://www.facebook.com/QHacks/'>
              <img
                src={"/facebook_logo.svg"}
                alt='Facebook'
                width={40}
                height={40}
                className='w-10 h-10'
              />
            </Link>
          </div>
        </div>
        <div className='flex justify-center items-center w-screen flex-col select-none'>
          <div className='w-[90%] md:w-[80%]'>
            <TriColor />
          </div>

          <div className='pt-20 relative justify-center flex flex-col items-center w-screen'>
            <div className='absolute inset-0 z-20'>
              <DonutScene x={-8} y={1} radius={2} color='white' />
            </div>
            <div className='w-[90%] md:w-[80%]'>
              <GrowYourNetwork />

              <PastSpeakers />
            </div>
          </div>
        </div>
      </div>

      <Faq />

      <Footer />
    </main>
  );
}
