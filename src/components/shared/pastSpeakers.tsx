import React from "react";
import { speakers } from "@/src/data";
import dynamic from "next/dynamic";
import { Carousel } from "react-responsive-carousel";
import { useWindowSize } from "@/src/hooks/useWindowSize";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const PastSpeakers: React.FC = () => {
  const size = useWindowSize();

  const DonutScene = dynamic(() => import("./3d-models/donut"), { ssr: false });
  return (
    <section className='bg-transparent text-white min-h-[70vh] flex flex-col items-center justify-center pb-20 relative w-[100vw] z-40'>
      <div className='absolute inset-0 z-0'>
        <DonutScene
          x={(size.width ?? 0) < 650 ? 4 : 5}
          y={0}
          radius={3}
          color='white'
        />
      </div>
      <div className='w-[90%] md:w-[80%] lg:w-[70%] '>
        <div className='container mx-auto'>
          <h2 className='title text-center mb-16'>
            Past <span className='gradient-title'>Speakers</span>
          </h2>
          <div className='grid-cols-1 md:grid-cols-3 gap-8 bg-brand-card-bg/80 rounded-3xl p-10 relative hidden sm:grid'>
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className=' text-center flex flex-col justify-center items-center '
              >
                <img className='pb-2' src={speaker.src} />
                <p className='text-xl font-semibold'>{speaker.name}</p>
                <p className='text-sm text-gray-400'>{speaker.role}</p>
              </div>
            ))}
          </div>

          <div className='flex sm:hidden w-full h-auto bg-brand-card-bg/80 rounded-3xl p-10 z-40'>
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
              autoPlay={true}
              showArrows={false}
              showIndicators={false}
              className='relative z-30'
            >
              {speakers.map((speaker, index) => {
                return (
                  <div
                    key={index}
                    className='text-center flex flex-col justify-center items-center z-40 w-2/3'
                  >
                    <img
                      className='pb-2 h-auto object-contain'
                      src={speaker.src}
                    />
                    <p className='text-xl font-semibold'>{speaker.name}</p>
                    <p className='text-sm text-gray-400'>{speaker.role}</p>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastSpeakers;
