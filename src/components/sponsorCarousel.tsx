"use client";

import React from "react";
import { sponsorBlurbs } from "../data/sponsors/sponsors_lists";
import { Carousel } from "react-responsive-carousel";
import { MdArrowRight } from "react-icons/md";

const SponsorCarousel = () => {
  return (
    <div className='flex w-screen justify-center'>
      <div className=' bg-brand-card-bg rounded-3xl w-[90%] h-full'>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          showArrows={true}
          showIndicators={true}
          className='h-full '
        >
          {sponsorBlurbs.map(({ link, logo, name, blurb }, index) => (
            <div
              key={index}
              className='sm:flex-wrap lg:flex  lg:justify-between items-center p-6 pb-10 h-full'
            >
              <div
                className='rounded-3xl lg:w-[50%] lg:h-full bg-white flex justify-center items-center overflow-hidden' // Ensuring each slide is full-width
              >
                <img
                  src={logo}
                  alt={`${name} logo`}
                  className={`  max-h-[300px]`}
                />
              </div>
              <div className='lg:w-[50%] lg:px-5 lg:py-0 py-3 flex flex-col justify-between lg:h-full '>
                <p className='text-left'>{blurb}</p>
                <a
                  href={link}
                  target='_null'
                  className='flex flex-row items-center'
                >
                  <p className='font-bold text-left underline z-40 lg:pt-0 pt-3'>
                    Explore {name}
                  </p>
                  <MdArrowRight />
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default SponsorCarousel;
