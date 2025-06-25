import { motion } from "framer-motion";

export default function Waves() {
  return (
    <div className='hidden md:flex w-full pointer-events-none'>
      <img
        src={"/mlh-trust-badge-2026-blue.svg"}
        alt='Major League Hacking Trust Badge'
        className='absolute z-20 w-128 h-224 md:w-32 md:right-20 w-28 right-5 pb-20 drop-shadow-[0_5px_10px_rgb(255,255,255)] top-0'
      />
      <div className='absolute w-full -top-6 h-96 overflow-hidden'>
        <motion.div
          className='absolute w-[120%] top-0 h-full overflow-hidden object-fill'
          initial={{ x: "0%" }}
          animate={{ x: "-8%" }}
          exit={{ x: "15%" }}
          whileHover='hover'
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeOut",
            repeatType: "reverse",
          }} // Animation duration and easing
        >
          <img
            className='w-full absolute -top-6 rotate-180 transform object-fill'
            src='/waves/wave1.svg'
            alt=''
          ></img>
        </motion.div>
        <motion.div
          className='absolute w-[120%] top-0 h-full overflow-hidden'
          initial={{ x: "0%" }}
          animate={{ x: "-18%" }}
          exit={{ x: "18%" }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeOut",
            repeatType: "reverse",
          }} // Animation duration and easing
        >
          <img
            className='w-full absolute -top-6 rotate-180 transform object-fill'
            src='/waves/wave2.svg'
            alt=''
          ></img>
        </motion.div>
        <motion.div
          className='absolute w-[120%] top-0 h-full overflow-hidden'
          initial={{ x: "0%" }}
          animate={{ x: "18%" }}
          exit={{ x: "-18%" }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeOut",
            repeatType: "reverse",
          }} // Animation duration and easing
        >
          <img
            className='w-full absolute -top-6 rotate-180 transform object-fill'
            src='/waves/wave3.svg'
            alt=''
          ></img>
        </motion.div>
        <motion.div
          className='absolute w-[120%] top-0 h-full overflow-hidden'
          initial={{ x: "0%" }}
          animate={{ x: "-18%" }}
          exit={{ x: "18%" }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeOut",
            repeatType: "reverse",
          }} // Animation duration and easing
        >
          <img
            className='w-full absolute -top-6 rotate-180 transform object-fill'
            src='/waves/wave4.svg'
            alt=''
          ></img>
        </motion.div>
        <motion.div
          className='absolute w-[120%] top-0 h-full overflow-hidden'
          initial={{ x: "0%" }}
          animate={{ x: "18%" }}
          exit={{ x: "-18%" }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeOut",
            repeatType: "reverse",
          }} // Animation duration and easing
        >
          <img
            className='w-full absolute -top-6 rotate-180 transform object-fill'
            src='/waves/wave5.svg'
            alt=''
          ></img>
        </motion.div>
      </div>
    </div>
  );
}
