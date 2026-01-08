import React from 'react'
import { FiBriefcase } from "react-icons/fi";
import { FaCode } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2";
import ComponentHead from './ComponentHead';
import { motion } from 'framer-motion';


let MyInfo = [
  {
    icon:FiBriefcase,
    CardHeading:"Current Role",
    CardPara:"I'm currently working as an Intern at Brilica Services Private Limited, where I'm gaining hands-on experience in building real-world Mern-Stack web applications."

  },
    {
    icon: FaCode,
    CardHeading:"What I Do",
    CardPara:"I specialize in building responsive and interactive web applications using modern technologies like React, JavaScript, and CSS. I focus on creating seamless user experiences with clean code."

  },
    {
    icon:HiOutlineSparkles,
    CardHeading:"My Passion",
    CardPara:"I'm passionate about learning new technologies and creating solutions that make a difference. Every project is an opportunity to grow and deliver something amazing."

  },






]
const infoCard =[
  {
    content:"6+",
    para:"Project Completed"
  },
    {
    content:"5+",
    para:"Technologies"
  },
    {
    content:"Fresher",
    para:"Eager to Learn"
  },
    {
    content:"100%",
    para:"Dedication"
  },
]
let Heading = "Get To Know Me"
let paragraph ="A passionate developer with a love for creating beautiful, functional web applications"



function About() {
  return (
    <div className='bg-[#330019] flex justify-center items-center flex-col gap-10 pt-30'>
      <ComponentHead HeadContent={Heading} ParaContent={paragraph}/>



<div className='w-full flex items-center flex-col gap-10'>
    {MyInfo.map((card,i)=>{
    return(
      <motion.div key={i} initial={{x:-80,opacity:0}}  whileInView={{x:0,opacity:1}} transition ={{duration:0.2,ease:"easeOut"}}  viewport={{once:true}} className='flex flex-col gap-2 w-[90%] hover:scale-105 hover:translate-z-10 hover:shadow-xl hover:border-blue-300/40 transition duration-400 rounded-xl shadow-sm shadow-black border border-gray-800 bg-[#330019] p-2.5 '>
        <div className='flex gap-3 items-center '>
          <div className='bg-[#222] py-2 px-3 shadow-sm shadow-black hover:scale-105 hover:translate-z-10 rounded-lg border border-gray-800 '>
          {<card.icon className='text-xl text-gray-400'/>}
        </div>
        <h3 className='text-2xl font-semibold text-white'>{card.CardHeading}</h3>
        </div>

        <p className='text-blue-300 text-lg font-light'>{card.CardPara}</p>
      </motion.div>
    )
  })}
</div>


<div className='w-full flex flex-wrap justify-center p-5   items-center gap-10'>
  {infoCard.map((data,i)=>{
    return(
      <div key={i} className='flex flex-col w-full sm:w-[45%] hover:shadow-lg hover:border-blue-300 p-4  hover:scale-105 hover:translate-z-10 hover:duration-500  items-center border border-gray-800 rounded-lg shadow-sm shadow-black justify-center'>
        <p className='text-4xl lg:5xl font-bold text-blue-300 '>{data.content}</p>
        <p className='text-lg font-light text-blue-300'>{data.para}</p>
      </div>
    )
  })}
</div>







    </div>
  )
}

export default About