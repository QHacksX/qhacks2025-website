"use client";
import { useEffect, useState } from "react";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";

import useDetectScroll, {
  Axis,
  Direction,
} from "@smakss/react-scroll-direction";

export default function Home() {
  const { scrollDir } = useDetectScroll();

  useEffect(() => {
    if (scrollDir === Direction.Down)
      window.scrollTo({ top: 1000, behavior: "smooth" });
    if (scrollDir === Direction.Up) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [scrollDir]);
  return (
    <main className='overflow-hidden'>
      <div className='h-screen flex justify-center items-end pb-10'>
        <a
          onClick={() => {
            window.scrollTo({ top: 1000, behavior: "smooth" });
          }}
        >
          <BsChevronDoubleDown size={100} />
        </a>
      </div>
      <div className='h-screen flex justify-center items-start pt-10'>
        <a
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <BsChevronDoubleUp size={100} />
        </a>
      </div>
    </main>
  );
}
