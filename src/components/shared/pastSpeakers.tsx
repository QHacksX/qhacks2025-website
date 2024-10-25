import React from "react";
import { speakers } from "@/src/data";

const PastSpeakers: React.FC = () => {
  return (
    <section className='bg-transparent text-white min-h-[70vh] flex flex-col items-center justify-center pb-20'>
      <div className='container mx-auto'>
        <h2 className='title text-center mb-16'>
          Past <span className='gradient-title'>Speakers</span>
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 bg-brand-card-bg rounded-3xl p-10'>
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
    </section>
  );
};

export default PastSpeakers;
