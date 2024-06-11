// "use client";
// import { useEffect, useState } from "react";
// import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";
// import Footer from "../components/shared/footer";
// import "@/src/css/style.css";

// import useDetectScroll, {
//   Axis,
//   Direction,
// } from "@smakss/react-scroll-direction";

// export default function Home() {
//   const { scrollDir } = useDetectScroll();

//   useEffect(() => {
//     if (scrollDir === Direction.Down)
//       window.scrollTo({ top: 1000, behavior: "smooth" });
//     if (scrollDir === Direction.Up) {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   }, [scrollDir]);
//   return (
//     <main className='overflow-hidden'>
//       <div className='h-screen flex justify-center items-center flex-col'>
//         <h1 className='md:w-1/3 text-center text-6xl font-bold leading-relaxed text-shadow-big'>
//           Get Ready <p className='text-3xl'>FOR</p> QHacks 2025!
//         </h1>
//         <a
//           onClick={() => {
//             window.scrollTo({ top: 1000, behavior: "smooth" });
//           }}
//           className='bottom-10 absolute'
//         >
//           <BsChevronDoubleDown size={100} className='justify-self-end' />
//         </a>
//       </div>
//       <div className='h-screen flex justify-center items-start'>
//         <a
//           onClick={() => {
//             window.scrollTo({ top: 0, behavior: "smooth" });
//           }}
//           className='top-10 relative'
//         >
//           <BsChevronDoubleUp size={100} />
//         </a>
//       </div>

//       <Footer />
//     </main>
//   );
// }
