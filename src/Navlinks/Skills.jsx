import React from 'react'
import { motion } from 'framer-motion'
import ComponentHead from './ComponentHead'



let Heading = "My Tech Skills"
let paragraph = "Technologies and tools I work with to bring ideas to life"



let chart=[{
   module:"HTML5",
   Persent:"90%",
},
{
   module:"CSS3",
   Persent:"85%",
},
{
   module:"JavaScript",
   Persent:"80%",
},
{
   module:"React",
   Persent:"85%",
},
{
   module:"State Management",
   Persent:"75%",
},

{
  module:"Responsive Design",
  Persent:"90%",
}
]

const TechCards = [{module:"HTML5"},{module:"CSS3"},{module:"javaScript"},{module:"React"},{module:"Redux"},{module:"Git"},{module:"Git Hub"},{module:"Tailwind Css"},{module:"Figma"},{module:"Responsive Design"},{module:"Framer Motion"}]







function Skills() {
  return (
    <div className='flex flex-col items-center justify-center pt-20  gap-10 '>
  
  <ComponentHead HeadContent={Heading} ParaContent={paragraph}/>




<div className='flex flex-col  w-[90%] justify-center gap-5  '>
  <p className='text-2xl text-white font-bold ' >Proficiency</p>



  {chart.map((data,i)=>{
    return(
      <div key={i} className='flex flex-col gap-3 '>
     <div className='w-full flex justify-between '>
      <p className='text-blue-300 font-medium'>{data.module}</p>
      <p className='text-blue-300 font-light '>{data.Persent}</p>
     </div>
     <div className='bg-blue-950 w-full h-2 rounded-lg'>
      <motion.div initial={{scaleX:0}} whileInView={{scaleX:1}} transition={{duration:0.8,
        ease:"easeInOut"}} viewport={{once:true}} className={` h-2 rounded-lg origin-left ${i===0?"bg-green-600 w-[90%]":i===1?"bg-blue-300 w-[85%]":i===2?"bg-yellow-400 w-[80%]":i===3? "bg-gray-300 w-[85%]":i===4?"bg-pink-400 w-[75%]":i===5?"bg-red-400 w-[90%]":"bg-none"}        `}>        
      </motion.div>
     </div>
  </div>
    )
  })}
</div>




<div className='w-[90%] flex flex-col items-start justify-center gap-4'>
  <p className='text-2xl font-bold text-white'>Technologies</p>
  <div className='flex flex-wrap   gap-4'>
   {TechCards.map((techCard,i)=>{
    return(
       <motion.p initial={{y:0,opacity:1}} whileHover={{y:-6,opacity:1}} transition={{duration:0.8 , ease:"easeOut"}}  key={i} className=' border text-lg  border-gray-300 text-gray-400 rounded-2xl py-0.5 px-4 cursor-alias hover:bg-blue-400 hover:text-white shadow-xl shadow-black  '>{techCard.module}</motion.p>
    )
   })}
  </div>
</div>


<div className='flex w-[90%]'>
 <div className='flex flex-col gap-2 w-full hover:scale-105 hover:translate-z-10 hover:shadow-xl hover:border-blue-300/40 transition duration-400 rounded-xl shadow-sm shadow-black border border-gray-800 bg-[#330019] p-2.5 '>
      
        
        <h3 className='text-xl font-semibold text-white'>Always Learning</h3>
        

        <p className='text-blue-300 text-md font-light'>I believe in continuous learning and staying updated with the latest trends in web development. Currently exploring advanced React patterns and state management solutions.</p>
      </div>
</div>


    </div>
  )
}

export default Skills