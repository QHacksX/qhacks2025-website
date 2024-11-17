"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import Footer from "../components/shared/footer";
import { motion } from "framer-motion";

import React from "react";
import Testimonial from "../components/hacker-testimonials/Testimonial";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import Link from "next/link";
import { auth } from "../firebase/config";
import Faq from "../components/faq";
import NavBar from "../components/shared/navbar/nav";
import TriColor from "../components/tricolor/tricolor";
import GrowYourNetwork from "../components/shared/growYourNetwork";
import PastSpeakers from "../components/shared/pastSpeakers";
import PartneringCard from "../components/partnershipCard";
import Waves from "../components/waves";
import signOutUser from "../firebase/auth/signout";
import CurrentSponsors from "../components/shared/sponsors/currentSponsors";
import PastSponsors from "../components/shared/sponsors/pastSponsors";
import { useWindowSize } from "../hooks/useWindowSize";

import { checkOrFetchApplicationStatus } from "../firebase/userData";
import { boolean } from "yup";

export default function Home() {
  const router = useRouter();

  const size = useWindowSize();

  const [isSignedIn, setIsSignedIn] = useState(auth.currentUser !== null);

  const [hasApplication, setHasApplication] = useState(false);

  useEffect(() => {
    checkOrFetchApplicationStatus(false).then((res) =>
      setHasApplication(res && typeof res === "boolean" ? res : false)
    );
  }, []);

    onAuthStateChanged(auth, () => {
      if (auth.currentUser) {
        setIsSignedIn(true);
      } else {
        setIsSignedIn(false);
      }
      checkOrFetchApplicationStatus(false).then((res) =>
        // False flag does not retrieve the application, but can return null
        // We check if res !== null and is of type boolean, then we setHasApplication(res)
        // Otherwise, it is set to false (i.e. function returned null)
        setHasApplication(res && typeof res === "boolean" ? res : false)
      );
  });

  const DonutScene = dynamic(
    () => import("../components/shared/3d-models/donut"),
    { ssr: false }
  );

  return (
    <main className='overflow-hidden relative'>
      <NavBar />

      <div className='radial-gradient-background pb-28' id='home'>
        <div className='h-screen flex flex-col justify-center items-center w-screen pt-40 '>
          <Waves />

          {(size.width ?? 0) < 650 ? (
            <div className='z-0'>
              <div className='absolute inset-0'>
                <DonutScene x={-1.5} y={2.5} radius={0.5} color='white' />
              </div>
              <div className='absolute inset-0'>
                <DonutScene x={2} y={-2} radius={1} color='white' />
              </div>
            </div>
          ) : (
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
          )}

          <img
            src={"/qhacks_crown.svg"}
            alt='Queens Crown'
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
            In-person! January 24th-26th, 2025
          </p>

          {/* <motion.button
            className='w-3/5 md:w-1/3 lg:w-1/5 p-3 mt-4 font-bold text-xl text-white bg-red-500 rounded-full z-20'
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            // onClick={() => router.push("/application-form")}
          >
            Applications Open Soon!
          </motion.button> */}

          <motion.button
            className='w-3/5 md:w-1/3 lg:w-1/5 p-3 mt-4 font-bold text-xl text-white bg-red-500 rounded-full z-20'
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => router.push("/application-form")}
          >
            { hasApplication ? "Update Application" : "Register Here" }
          </motion.button>

          {isSignedIn ? (
            <p
              className='text-blue-500 hover:text-blue-700  mt-2 z-20 hover:cursor-pointer'
              onClick={() => signOutUser()}
            >
              Log out
            </p>
          ) : (
            <p className='md:w-1/2 lg:w-1/4 text-center text-lg mt-2 z-20'>
              Already have an account?{" "}
              <a
                href='/signin'
                className='text-blue-500 hover:text-blue-700 z-20'
              >
                Log in
              </a>
            </p>
          )}

          <div className='flex items-center justify-center space-x-6 mt-4 z-20'>
            <Link href='https://www.tiktok.com/@qhacksx' target='_blank'>
              <img
                src={"/socials/tiktok_logo.svg"}
                alt='Tiktok'
                width={40}
                height={40}
                className='w-10 h-10'
              />
            </Link>
            <Link href='https://www.instagram.com/qhacksx/' target='_blank'>
              <img
                src={"/socials/ig_logo.svg"}
                alt='Instagram'
                width={40}
                height={40}
                className='w-10 h-10'
              />
            </Link>
          </div>
        </div>
        <div className='flex justify-center items-center w-screen flex-col select-none'>
          <div className='w-[90%] md:w-[80%] lg:w-[70%]' id='about'>
            <TriColor />
          </div>
          <div className='pt-20 relative justify-center flex flex-col items-center w-screen h-auto'>
            <PartneringCard />
          </div>
          <div className='pt-20 relative justify-center flex flex-col items-center w-screen h-auto'>
            <div className='absolute inset-0 z-10'>
              <DonutScene
                x={(size.width ?? 0) < 650 ? -3 : -8}
                y={(size.width ?? 0) < 650 ? -1 : 1}
                radius={2}
                color='white'
              />
            </div>

            <div className='w-[90%] md:w-[80%] lg:w-[70%] z-40'>
              <GrowYourNetwork />
            </div>
            <PastSpeakers />
            <div className='w-[90%] md:w-[80%] lg:w-[70%] z-40'>
              <Testimonial />
            </div>
          </div>
        </div>
        <div
          className='flex flex-col justify-around h-[100vh] relative'
          id='sponsors'
        >
          <CurrentSponsors />

          <PastSponsors />
        </div>
        <Faq />

        <Footer />
      </div>

      {/* TODO: Add back once headshots are done */}
      {/* <TeamSection /> */}
    </main>
  );
}
