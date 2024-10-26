import React from "react";
import { speakers } from "@/src/data";
import dynamic from "next/dynamic";

const PastSpeakers: React.FC = () => {
  const DonutScene = dynamic(() => import("./3d-models/donut"), { ssr: false });
  return (
    <section className='bg-transparent text-white min-h-[70vh] flex flex-col items-center justify-center pb-20 relative w-[100vw]'>
      <div className='absolute inset-0 z-0'>
        <DonutScene x={5} y={0} radius={3} color='white' />
      </div>
      <div className='w-[90%] md:w-[80%] lg:w-[70%]'>
        <div className='container mx-auto'>
          <h2 className='title text-center mb-16'>
            Past <span className='gradient-title'>Speakers</span>
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 bg-brand-card-bg/80 rounded-3xl p-10 relative'>
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
        </div>
      </div>
    </section>
  );
};

export default PastSpeakers;
