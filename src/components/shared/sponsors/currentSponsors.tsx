import useMeasure from "react-use-measure";
import "../../../css/SponsorBubble.css";
import { animate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { currentSponsors } from "@/src/data/sponsors/sponsors_lists";
import SponsorCard from "./sponsorCard";
import SponsorCarousel from "../../sponsorCarousel";

export default function CurrentSponsors() {
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  const petaSponsors = currentSponsors.filter((items) => items.tier === "peta");
  const teraSponsors = currentSponsors.filter((items) => items.tier === "tera");
  const gigaSponsors = currentSponsors.filter((items) => items.tier === "giga");
  const megaSponsors = currentSponsors.filter((items) => items.tier === "mega");
  const kiloSponsors = currentSponsors.filter((item) => item.tier === "kilo");

  useEffect(() => {
    let controls;
    let finalPosition = -width / 4 - currentSponsors.length; // remember to change this to amount of sponsors

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: currentSponsors.length * 4,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <div className='pt-10 justify-center items-center w-screen flex flex-col'>
      <div className='pb-10 z-40'>
        <h1 className='align-center text-white text-3xl md:text-5xl mb-2 md:mb-0 font-bold text-center'>
          Honouring Our
          <span className='text-transparent text-3xl md:text-5xl bg-clip-text bg-gradient-to-r from-red-500 to-orange-600'>
            {" "}
            Current Sponsors
          </span>
        </h1>
      </div>
      <div className='pb-16'>
        {/*For Peta Sponsors*/}
        {petaSponsors.length > 0 ? (
          <>
            <div className='text-transparent text-center font-bold text-2xl md:text-4xl bg-clip-text bg-gradient-to-r from-red-500 to-orange-600 pt-6 pb-2'>
              Peta
            </div>
            <div className='flex justify-center flex-row flex-wrap items-center w-full px-10'>
              {petaSponsors.map((sponsor, idx) => {
                return (
                  <SponsorCard sponsor={sponsor} key={sponsor.name} idx={idx} />
                );
              })}
            </div>
          </>
        ) : null}

        {/*For Tera Sponsors*/}
        {teraSponsors.length > 0 ? (
          <>
            <div className='text-transparent text-center font-bold text-2xl md:text-4xl bg-clip-text bg-gradient-to-r from-red-500 to-orange-600 pt-6 pb-2'>
              Tera
            </div>
            <div className='flex justify-center flex-row flex-wrap items-center w-full px-10'>
              {teraSponsors.map((sponsor, idx) => (
                <SponsorCard
                  sponsor={sponsor}
                  key={sponsor.name}
                  idx={idx + petaSponsors.length}
                />
              ))}
            </div>
          </>
        ) : null}

        {/*Add Giga Sponsors here*/}
        {gigaSponsors.length > 0 ? (
          <>
            <div className='text-transparent text-center font-bold text-2xl md:text-4xl bg-clip-text bg-gradient-to-r from-red-500 to-orange-600 pt-6 pb-2'>
              Giga
            </div>
            <div className='flex justify-center flex-row flex-wrap items-center w-full px-10'>
              {gigaSponsors.map((sponsor, idx) => (
                <SponsorCard
                  sponsor={sponsor}
                  key={sponsor.name}
                  idx={idx + teraSponsors.length}
                />
              ))}
            </div>
          </>
        ) : null}

        {/*For Mega Sponsors*/}
        {megaSponsors.length > 0 ? (
          <>
            <div className='text-transparent text-center font-bold text-2xl md:text-4xl bg-clip-text bg-gradient-to-r from-red-500 to-orange-600 pt-6 pb-2'>
              Mega
            </div>
            <div className='flex justify-center flex-row flex-wrap items-center w-full px-10'>
              {megaSponsors.map((sponsor, idx) => (
                <SponsorCard
                  sponsor={sponsor}
                  key={sponsor.name}
                  idx={idx + gigaSponsors.length}
                />
              ))}
            </div>
          </>
        ) : null}

        {/*For Kilo Sponsors*/}
        {kiloSponsors.length > 0 ? (
          <>
            <div className='text-transparent text-center font-bold text-2xl md:text-4xl bg-clip-text bg-gradient-to-r from-red-500 to-orange-600 pt-6 pb-2'>
              Kilo
            </div>
            <div className='flex justify-center flex-row flex-wrap items-center w-full px-10'>
              {kiloSponsors.map((sponsor, idx) => (
                <SponsorCard
                  sponsor={sponsor}
                  key={sponsor.name}
                  idx={idx + megaSponsors.length}
                />
              ))}
            </div>
          </>
        ) : null}
      </div>

      {/* <div className='bg-gradient-to-r from-black to-transparent via-black/20 w-[10%] md:h-[300px] h-[400px] absolute left-0 z-20' />
      <div className='bg-gradient-to-r from-transparent to-black  via-black/20 w-[10%] md:h-[300px] h-[400px] absolute right-0 z-20' /> */}
      {/* <motion.div
        className='left-0 flex gap-4'
        ref={ref}
        style={{ x: xTranslation }}
      >

      </motion.div> */}
      <SponsorCarousel />
    </div>
  );
}
