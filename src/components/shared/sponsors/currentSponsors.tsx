import useMeasure from "react-use-measure";
import "../../../css/SponsorBubble.css"
import SponsorBubble from "./sponsorBubble";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { currentSponsors } from "@/src/data/sponsors/sponsors_lists";

export default function CurrentSponsors() {
    let [ref, { width }] = useMeasure();
    const xTranslation = useMotionValue(0);

    useEffect(() => {
        let controls;
        let finalPosition = -width / 4 - currentSponsors.length; // remember to change this to amount of sponsors

        controls = animate(xTranslation, [0, finalPosition], {
            ease: "linear",
            duration: currentSponsors.length * 4,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0
        })

        return controls.stop;
    }, [xTranslation, width])

    return (
        <div className="pt-10 justify-center items-center w-screen flex flex-col">
            <div className="pb-10">
                <h1 className="align-center text-white text-3xl md:text-5xl mb-2 md:mb-0 font-bold ">
                    Honouring Our
                    <span className="text-transparent text-3xl md:text-5xl bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
                        {" "}
                        Current Sponsors
                    </span>
                </h1>
            </div>

            <motion.div className="left-0 flex gap-4" ref={ref} style={{x: xTranslation}}>
                {[...currentSponsors, ...currentSponsors, ...currentSponsors, ...currentSponsors].map((sponsor, id) => (
                    <SponsorBubble sponsor={sponsor} key={id} />
                ))}
            </motion.div>
        </div>
    );
}

