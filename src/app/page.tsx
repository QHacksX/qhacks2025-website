"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";
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
import Image from "next/image"; // Importing Image component

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

      return () => {
        window.removeEventListener("resize", updateWidth);
      };
    }
  }, []);

  return (
    <main className='overflow-hidden'>
      <div className='h-screen flex flex-col justify-center items-center w-screen pt-24'>
        <div className='absolute inset-0 -z-20'>
          <DonutScene x={4} y={2.5} radius={0.5} color='white' />
        </div>
        <div className='absolute inset-0 -z-20'>
          <DonutScene x={-4} y={2} radius={1} color='white' />
        </div>
        <div className='absolute inset-0 -z-20'>
          <DonutScene x={-4} y={-1.25} radius={0.75} color='white' />
        </div>
        <div className='absolute inset-0 -z-20'>
          <DonutScene x={4} y={-0.75} radius={1.15} color='white' />
        </div>

        <img
          src={"/qhacks_crown.svg"}
          alt='Queens Crown'
          width={200}
          height={100}
          className='w-1/2 md:w-1/3 lg:w-1/4 h-auto absolute top-24 md:top-20 min-w-[150px]'
        />
        <h1 className='text-center text-4xl md:text-5xl lg:text-7xl font-extrabold font-montserrat leading-relaxed mt-2 md:mt-4'>
          QHACKS
        </h1>
        <p className='md:w-3/5 lg:w-1/3 text-center text-xl mt-4'>
          Get ready to innovate and make a difference! Join QHacks, the ultimate
          hackathon experience.
        </p>
        <p className='font-bold text-[#E2A022] pt-5'>In-person! [add dates]</p>

        <motion.button
          className='w-3/5 md:w-1/3 lg:w-1/5 p-3 mt-4 font-bold text-xl text-white bg-red-500 rounded-full'
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Register Here
        </motion.button>

        <p className='md:w-1/2 lg:w-1/4 text-center text-lg mt-2'>
          Already have an account?{" "}
          <a href='/signin' className='text-blue-500 hover:text-blue-700'>
            Log in
          </a>
        </p>

        <div className='flex items-center justify-center space-x-6 mt-4'>
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



      <div className='h-screen flex justify-between items-center w-screen flex-col select-none'>


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
            href='/application-form'
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
