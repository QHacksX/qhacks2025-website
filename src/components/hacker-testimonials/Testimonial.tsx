import React from "react";
import { testimonials } from "@/src/data";

const Testimonials = () => {
  return (
    <div className=' text-white min-h-[70vh] flex flex-col justify-center items-center pb-20'>
      <h1 className='text-center mb-16 title'>
        Hackers <span className='gradient-title'>Testimonials</span>
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {testimonials.map((hacker, index) => (
          <div
            key={index}
            className='bg-brand-card-bg p-6 rounded-3xl text-center flex flex-col justify-between items-center'
          >
            <p className='text-lg mb-4'>"{hacker.testimonial}"</p>

            <div className='flex flex-col justify-center items-center'>
              <img
                src={`./testimonials/${index + 1}.svg`}
                className='pb-1 w-[40%]'
              />
              <span className='text-gray-400'>
                {hacker.name}, {hacker.year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
