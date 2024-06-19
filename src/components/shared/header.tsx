import React from "react";
import Wave from "react-wavify";
import Image from "next/image";
import mlhTrustBadge from "../../../public/mlh-trust-badge-2025-gray.png";
import crown from "../../../public/crown2.png";
import Link from "next/link";
import signOutUser from "@/src/firebase/auth/signout";
import MobileNav from "./mobileNav";

const InvertedWaveBackground = ({
  isSignedIn,
  screenWidth,
}: {
  isSignedIn: boolean;
  screenWidth: number;
}) => {
  return (
    <div className='absolute top-0 h-screen w-full'>
      {screenWidth > 700 ? (
        <Link
          href={isSignedIn ? "/" : "/signin"}
          onClick={() => {
            if (isSignedIn) {
              signOutUser();
            }
          }}
        >
          {/* <p className='hover:text-[#ffd24d] absolute z-20 font-bold text-2xl px-10 py-2 rounded-xl text-center top-6 bg-[#132f4c] drop-shadow-[0_5px_10px_rgb(255,255,255)] w-60 mr-auto ml-auto left-0 right-0'>
            {isSignedIn ? "Sign Out" : "Sign In"}
          </p> */}
        </Link>
      ) : (
        MobileNav({ isSignedIn: isSignedIn })
      )}

      <img
        src={"/mlh-trust-badge-2025-gray.png"}
        alt='Major League Hacking Trust Badge' /* drop-shadow-[0_5px_10px_rgb(255,255,255)] */
        className='absolute z-20 w-128 h-224 md:w-32 md:right-20 w-28 right-5 pb-20'
      />

      {screenWidth > 768 ? (
        <img
          color='transparent'
          src={"/crown2.png"}
          alt='Queens Crown' /* drop-shadow-[0_5px_10px_rgb(255,255,255)] */
          className='absolute z-20 w-128 h-111 md:w-32  w-28 right-5  pb-20 md:left-10 '
        />
      ): null}

      <div style={{
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        {/* Red Wave */}
        <div
          style={{
            flex: 1,
            height: "100%",
            overflow: "hidden",
          }}
        >
          <Wave
            fill='#ff4040'
            paused={false}
            style={{ width: "100%", height: "14%", transform: "scaleY(-1)" }}
            options={{
              height: 40,
              amplitude: 21,
              speed: 0.12,
              points: 5,
            }}
          />
        </div>
        {/* Gold Wave */}
        <div
          style={{
            flex: 1,
            height: "100%",
            overflow: "hidden",
          }}
        >
          <Wave
            fill='#ffd24d'
            paused={false}
            style={{ width: "100%", height: "20%", transform: "scaleY(-1)" }}
            options={{
              height: 40,
              amplitude: 20,
              speed: 0.08,
              points: 5,
            }}
          />
        </div>
        {/* Blue Wave */}
        <div
          style={{
            flex: 1,
            height: "100%",
            overflow: "hidden",
          }}
        >
          <Wave
            fill='#4040ff'
            paused={false}
            style={{ width: "100%", height: "14%", transform: "scaleY(-1)" }}
            options={{
              height: 40,
              amplitude: 20,
              speed: 0.08,
              points: 5,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default InvertedWaveBackground;
