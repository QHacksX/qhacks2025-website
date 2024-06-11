import React from "react";
import Wave from "react-wavify";
import Image from "next/image";
import mlhTrustBadge from "../../../public/mlh-trust-badge-2025-gray.png"

const InvertedWaveBackground = () => {
  return (
    <div className="absolute top-0 h-screen w-full">
      <Image src={mlhTrustBadge} alt='Major League Hacking Trust Badge' className='absolute z-20 md:w-32 md:right-20 w-28 right-5  drop-shadow-[0_5px_10px_rgb(255,255,255)]'/>

      {/* Red Wave*/}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "50%",
          overflow: "hidden",
        }}
      >
        <Wave
          fill='#ff4040'
          paused={false}
          style={{ width: "100%", height: "40%", transform: "scaleY(-1)" }}
          options={{
            height: 40,
            amplitude: 21,
            speed: 0.15,
            points: 5,
          }}
        />
      </div>

      {/* Gold Wave */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "50%",
          overflow: "hidden",
        }}
      >
        <Wave
          fill='#ffd24d'
          paused={false}
          style={{ width: "100%", height: "28%", transform: "scaleY(-1)" }}
          options={{
            height: 40,
            amplitude: 20,
            speed: 0.12,
            points: 5,
          }}
        />
      </div>
      {/* Red Wave */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "50%",
          overflow: "hidden",
        }}
      >
        <Wave
          fill='#4040ff'
          paused={false}
          style={{ width: "100%", height: "20%", transform: "scaleY(-1)" }}
          options={{
            height: 40,
            amplitude: 20,
            speed: 0.12,
            points: 5,
          }}
        />
      </div>
    </div>
  );
};

export default InvertedWaveBackground;
