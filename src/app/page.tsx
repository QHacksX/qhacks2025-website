"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import Footer from "../components/shared/footer";

import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
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

  return (
    <main className='overflow-hidden relative'>
      <NavBar />
      <div className='h-screen flex justify-center items-center w-screen flex-col '>
        <h1 className='md:w-1/3 text-center text-6xl font-bold leading-relaxed'>
          Get Ready <p className='text-3xl'>for</p> <span>QHacks 2025</span>
        </h1>
      </div>
      <div className='flex justify-between items-center w-screen flex-col select-none'>
        <div className='w-[90%] md:w-[80%] lg:w-[70%]'>
          <TriColor />
          <div className='pt-20'>
            <GrowYourNetwork />
          </div>
          <PastSpeakers />
        </div>
        <div>
          <Faq />
        </div>
        <Footer />
      </div>
    </main>
  );
}
