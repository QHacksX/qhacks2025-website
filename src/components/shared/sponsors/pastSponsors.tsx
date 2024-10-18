import { motion } from "framer-motion";
import SponsorBubble from "./sponsorBubble";

export default function PastSponsors() {
    let orbitDuration = 30;
    const sponsors = [
        "/crown2.png"
    ]

    return (
        <div className="pt-10 justify-center items-center w-screen flex flex-col">
            <div className="pb-10">
                <h1 className="mb-3 text-white  mx-5 text-3xl md:text-5xl font-bold">
                    Highlighting Our{" "}
                    <span className="text-transparent text-3xl md:text-5xl bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
                        Previous Sponsors
                    </span>
                </h1>
            </div>

            <motion.div className="absolute w-[300px] h-[300px] rounded-full"
                style={{ border: '2px dashed rgba(255, 255, 255, 0.5)' }}
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: orbitDuration, // Define duration for full rotation
                    ease: 'linear',
                }}
            >
                {[...sponsors].map((sponsor) => (
                    <SponsorBubble sponsor={sponsor} />
                ))}
            </motion.div>
        </div>
    )
}