import useMeasure from "react-use-measure";
import "../../../css/SponsorBubble.css"
import SponsorBubble from "./sponsorBubble";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export default function CurrentSponsors() {
    const sponsors = [
        "/crown2.png"
    ]

    let [ref, { width }] = useMeasure();
    const xTranslation = useMotionValue(0);

    const SPONORS_LENGTH_PLACEHOLDER = 1

    useEffect(() => {
        let controls;
        let finalPosition = -width / 2 - SPONORS_LENGTH_PLACEHOLDER; // remember to change this to amount of sponsors

        controls = animate(xTranslation, [0, finalPosition], {
            ease: "linear",
            duration: 25,
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

            <motion.div ref={ref} style={{x: xTranslation}}>
                {[...sponsors].map((sponsor) => (
                    <SponsorBubble sponsor={sponsor} />
                ))}
            </motion.div>
        </div>
    );
}