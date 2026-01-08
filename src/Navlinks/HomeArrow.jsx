import React from 'react'
import { FaArrowUp } from "react-icons/fa";
import { motion } from 'framer-motion';


function HomeArrow() {
  return (
    <motion.div animate={{y:[0,-10,0],opacity:1}} transition={{duration:0.8,ease:"easeInOut",repeat:Infinity}} onClick={()=>{document.getElementById("home").scrollIntoView({behavior:"smooth"})}} className='fixed bottom-10 right-5 rounded-full bg-blue-500 text-xl p-2 text-white'>
     < FaArrowUp />
    </motion.div>
  )
}

export default HomeArrow