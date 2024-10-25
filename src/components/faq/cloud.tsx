"use client";
import { useWindowSize } from "@/src/hooks/useWindowSize";
import "../../css/FaqStyle.css";
import { useEffect, useState } from "react";

export default function Cloud() {
  const [isVisible, setIsVisible] = useState([false, false, false, false]);

  const dimensions = useWindowSize();

  const cloudWidth1 = Math.floor((dimensions.width ?? 0) * 0.9);
  const cloudWidth2 = Math.floor((dimensions.width ?? 0) * 0.6);
  const cloudWidth3 = Math.floor((dimensions.width ?? 0) * 0.5);
  const cloudWidth4 = Math.floor((dimensions.width ?? 0) * 0.4);

  console.log(Math.floor(cloudWidth1 * 0.2));

  useEffect(() => {
    const handleScroll = () => {
      const tempVis = [...isVisible];

      for (var cloudNum = 0; cloudNum < 4; cloudNum++) {
        const element = document.getElementById(`animateOnScroll${cloudNum}`);

        const rect = element?.getBoundingClientRect();

        if (rect != undefined) {
          const isElementVisible =
            rect!.bottom <= window.scrollY + window.innerHeight - 1300;

          tempVis[cloudNum] = isElementVisible;
        }
      }
      setIsVisible(tempVis);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='w-screen'>
      <img
        id='animateOnScroll0'
        className={`cloud absolute mb-20 w-[${cloudWidth1}px] z-0`}
        style={{
          transform: `translateX(${Math.floor(
            cloudWidth1 * (isVisible[0] ? -0.1 : -0.5)
          )}px) translateY(-${cloudWidth1 * 0.2}px)`,
        }}
        src={"/cloud.png"}
        alt='Cloud'
      />
      <img
        id='animateOnScroll1'
        className={`cloud absolute w-[${cloudWidth2}px] z-0`}
        style={{
          transform: `translateX(${Math.floor(
            (dimensions.width ?? 0) + cloudWidth2 * (isVisible[0] ? -0.5 : 0.1)
          )}px) translateY(-${cloudWidth2 * 0.1}px)`,
        }}
        src={"/cloud.png"}
        alt='Cloud'
      />

      <img
        id='animateOnScroll2'
        className={`cloud absolute mb-20 w-[${cloudWidth3}px] z-10`}
        style={{
          transform: `translateX(${Math.floor(
            cloudWidth3 * (isVisible[2] ? -0.5 : -1)
          )}px) translateY(${cloudWidth1*0.2}px)`,
        }}
        src={"/cloud.png"}
        alt='Cloud'
      />
      <img
        id='animateOnScroll3'
        className={`cloud absolute w-[${cloudWidth4}px] z-10`}
        style={{
          transform: `translateX(${Math.floor(
            (dimensions.width ?? 0) + cloudWidth4 * (isVisible[3] ? -0.5 : 0.1)
          )}px) translateY(${cloudWidth1 * 0.25}px)`,
        }}
        src={"/cloud.png"}
        alt='Cloud'
      />
    </div>
  );
}
