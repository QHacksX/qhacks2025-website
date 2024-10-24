"use client";
import { useWindowSize } from "@/src/hooks/useWindowSize";
import "../../css/FaqStyle.css";
import { useEffect, useState, useMemo } from "react";

export default function Cloud() {
  const [isVisible, setIsVisible] = useState([false, false, false, false]);

  const dimensions = useWindowSize();

  // Memoizing cloud widths to avoid recalculating them on every render
  const cloudWidths = {
    cloudWidth1: Math.floor((dimensions.width ?? 0) * 0.6),
    cloudWidth2: Math.floor((dimensions.width ?? 0) * 0.4),
    cloudWidth3: Math.floor((dimensions.width ?? 0) * 0.5),
    cloudWidth4: Math.floor((dimensions.width ?? 0) * 0.2),
  };

  useEffect(() => {
    const handleScroll = () => {
      const tempVis = [...isVisible];

      // Looping through each cloud element
      for (let cloudNum = 0; cloudNum < 4; cloudNum++) {
        const element = document.getElementById(`animateOnScroll${cloudNum}`);

        if (element) {
          const rect = element.getBoundingClientRect();
          tempVis[cloudNum] =
            rect.top <=
            window.scrollY + window.innerHeight - cloudWidths.cloudWidth1;
        }
      }

      setIsVisible(tempVis);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  const renderCloud = (
    cloudNum: number,
    cloudWidth: number,
    translateX: number
  ) => (
    <img
      id={`animateOnScroll${cloudNum}`}
      className={`cloud z-50`}
      style={{
        transform: `translateX(${translateX}px)`,
        width: `${cloudWidth}px`,
      }}
      src={"/cloud.png"}
      alt='Cloud'
    />
  );

  return (
    <div className='w-full h-auto relative'>
      {renderCloud(
        0,
        cloudWidths.cloudWidth1,
        Math.floor(cloudWidths.cloudWidth1 * (isVisible[0] ? -0.1 : -0.8))
      )}
      {renderCloud(
        1,
        cloudWidths.cloudWidth2,
        Math.floor(
          (dimensions.width ?? 0) +
            cloudWidths.cloudWidth2 * (isVisible[1] ? -0.9 : 0.1)
        )
      )}

      {renderCloud(
        2,
        cloudWidths.cloudWidth3,
        Math.floor(cloudWidths.cloudWidth3 * (isVisible[2] ? -0.5 : -1))
      )}
      {renderCloud(
        3,
        cloudWidths.cloudWidth4,
        Math.floor(
          (dimensions.width ?? 0) +
            cloudWidths.cloudWidth4 * (isVisible[3] ? -0.5 : 0.1)
        )
      )}
    </div>
  );
}
