import { motion } from "framer-motion";
import SponsorBubble from "./sponsorBubble";
import { highlightedPrevSponsors } from "@/src/data/sponsors/sponsors_lists";

export default function PastSponsors() {
    let orbitDuration = 30;
    const midElement = Math.ceil(highlightedPrevSponsors.length / 2)
    const halvedPrevSponsors = {
        left: highlightedPrevSponsors.slice(0, midElement),
        right: highlightedPrevSponsors.slice(midElement)
    }

    return (
        <div className="relative pt-10 justify-center items-center w-screen flex flex-col">
            <div className="pb-10">
                <h1 className="mb-3 text-white  mx-5 text-3xl font-bold">
                    Some of Our{" "}
                    <span className="text-transparent text-3xl bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
                        Previous Sponsors
                    </span>
                </h1>
            </div>

                {/* Inner ring */}
                <motion.div className="absolute w-[500px] h-[500px] rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                        repeat: Infinity,
                        duration: orbitDuration, // Define duration for full rotation
                        ease: 'linear',
                    }}
                >
                    {halvedPrevSponsors.left.map((sponsor, i) => (<motion.div
                        key={sponsor.name}
                        className="absolute w-12 h-12 rounded-full"
                        style={{
                            top: '50%',
                            left: '50%',
                            transform: `rotate(${(i / halvedPrevSponsors.left.length) * 360}deg) translate(-50%, -50%) translateX(150px)`,
                            transformOrigin: '0 0',
                        }}
                    >
                        <SponsorBubble sponsor={sponsor} key={i} />
                    </motion.div>))}
                </motion.div>

                {/* Outer ring */}
                <motion.div className="absolute w-[900px] h-[900px] rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                        repeat: Infinity,
                        duration: orbitDuration + 15, // Define duration for full rotation
                        ease: 'linear',
                    }}
                >
                    {halvedPrevSponsors.right.map((sponsor, i) => (<motion.div
                        key={sponsor.name}
                        className="absolute w-150 h-150 rounded-full"
                        style={{
                            top: '50%',
                            left: '50%',
                            transform: `rotate(${(i / halvedPrevSponsors.right.length) * 360}deg) translate(50%, 50%) translateX(180px)`,
                            transformOrigin: '0 0',
                        }}
                    >
                        <SponsorBubble sponsor={sponsor} key={i} />
                    </motion.div>))}
                </motion.div>
            </div>
    )
}