"use client";
import { useWindowSize } from "@/src/hooks/useWindowSize";
import { ContactForm } from "./contact";
import Dropdown from "./dropdown";

export default function Faq() {
  const size = useWindowSize();

  const bottomPadding = Math.floor(
    size.height == undefined ? 800 : size.height * 0.55
  );

  console.log(bottomPadding.toString());

  return (
    <div className=' text-black w-screen flex flex-col bg-brand-light-blue'>
      <div className='pt-10 bg-gradient-to-b from-black to-brand-light-blue w-full h-64' />
      <div className='bg-transparent absolute w-full items-center justify-center flex flex-col z-10 pt-64'>
        <h1 className='align-center  font-extrabold text-7xl py-12'>FAQ's</h1>
        <Dropdown />
        <ContactForm />
      </div>

      <div style={{ height: bottomPadding ? `${bottomPadding}px` : "400px" }} />
      <img
        src={"/pond-footer.png"}
        alt='Pond With Ducks'
        className='z-0 w-screen self-end place-self-end justify-self-end'
      />
    </div>
  );
}
