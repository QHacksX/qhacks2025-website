"use client";
import { useWindowSize } from "@/src/hooks/useWindowSize";
import { ContactForm } from "./contact";
import Dropdown from "./dropdown";
import Cloud from "./cloud";
import "../../css/FaqStyle.css";

export default function Faq() {
  return (
    <div className=' text-black w-screen flex flex-col bg-brand-light-blue'>
      <div className='pt-10 bg-gradient-to-b from-black to-brand-light-blue w-full h-64' />
      <div className='absolute'>
        <Cloud />
      </div>
      <div className='bg-transparent w-full items-center justify-center flex flex-col '>
        <h1 className='align-center font-extrabold text-7xl py-12 z-20 md:pt-72' id="faq">
          FAQ's
        </h1>
        <Dropdown />
        <ContactForm />
      </div>

      <img
        src={"/pond-footer.png"}
        alt='Pond With Ducks'
        className='z-20 w-screen self-end place-self-end justify-self-end'
      />

      <div className='relative z-0'>
        <img
          src={"/cloud-background.png"}
          alt='Cloud Background'
          className='z-0 w-screen absolute right-0 left-0 bottom-0'
        />
      </div>
    </div>
  );
}
