import { motion } from "framer-motion";
// import './index.css';

const Waves = () =>{

    return (
        <div className="hidden md:flex">
            <div className='absolute top-0 w-screen'>
                <motion.div
                    className="absolute w-[120%] overflow-hidden top-0"
                    initial={{ x: "0%" }} 
                    animate={{ x: "-13%" }} 
                    exit={{ x: "18%" }}
                    whileHover="hover"
                    // variants={speeds}
                    transition={{ duration: 13, repeat: Infinity, ease: "easeOut", repeatType: "reverse"  }} // Animation duration and easing
                >
                    <img className='w-full h-[50vh]  trnasform object-fill' src="Design4.png" alt="Golden Wave Header"></img>
                </motion.div>
            </div>
        </div>
        
    )
}


export default Waves;