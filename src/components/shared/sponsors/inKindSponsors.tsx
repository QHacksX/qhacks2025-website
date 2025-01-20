import { animate, motion, useMotionValue } from "framer-motion";
import SponsorBubble from "./sponsorBubble";
import { inKindSponsors } from "@/src/data/sponsors/sponsors_lists";
import useMeasure from "react-use-measure";
import { useEffect } from "react";

export default function InKindSponsors() {
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = width / 4 - inKindSponsors.length; // remember to change this to amount of sponsors

    controls = animate(xTranslation, [finalPosition, 0], {
      ease: "linear",
      duration: inKindSponsors.length * 4,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <div className='relative pt-10 justify-center items-center w-screen flex flex-col'>
      <div className='pb-10 z-40'>
        <h1 className='mb-3 text-white  mx-5 text-3xl md:text-5xl font-bold text-center'>
          Our Generous{" "}
          <span className='text-transparent text-3xl md:text-5xl bg-clip-text bg-gradient-to-r from-red-500 to-orange-600'>
            In-Kind Sponsors
          </span>
        </h1>
      </div>
      {/* <div className='bg-gradient-to-r from-black to-transparent via-black/20 w-[10%] h-full absolute left-0 z-20' />
      <div className='bg-gradient-to-r from-transparent to-black  via-black/20 w-[10%] h-full absolute right-0 z-20' /> */}
      <motion.div
        className='left-0 flex gap-4'
        ref={ref}
        style={{ x: xTranslation }}
      >
        {[
          ...inKindSponsors,
          ...inKindSponsors,
          ...inKindSponsors,
          ...inKindSponsors,
        ].map((sponsor, id) => (
          <SponsorBubble sponsor={sponsor} key={id} />
        ))}
      </motion.div>
    </div>
  );
}
