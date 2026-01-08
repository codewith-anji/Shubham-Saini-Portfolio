import React from "react";
import ComponentHead from "./ComponentHead";

import { FaCircle } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useState } from "react";


let Heading = "Featured Work";
let paragraph =
  "A collection of projects that showcase my skills and passion for web development";

const FilterButton = ["All", "React", "JavaScript", "Frontend"];

const FeaturedCard = [
  {
    ProjectModule: "Frontend",
    CardIcon1: FaCircle,
    CardIcon2: "Featured",
    ProjectName: "E-Commerce Website",
    ProjectDescription:
      "A fully responsive e-commerce platform with product listings, shopping cart, and checkout functionality. Built with clean HTML and modern CSS techniques.",
    usedModule : ["Html","Css","Responsive Design"],
    link:"https://steady-choux-7f6bde.netlify.app/"
  },
   {
    ProjectModule: "JavaScript",
     CardIcon1: FaCircle,
     CardIcon2: "Featured",
     ProjectName: "Dynamic Todo List",
     ProjectDescription:
       "An interactive task management application with add, edit, delete, and filter functionality. Features local storage persistence and smooth animations.",
    usedModule : ["JavaScript","Html","Css", "Responsive Design"],
    link:"https://to-do-list-by-java-script.vercel.app/"

   },
   {
     ProjectModule: "React",
     CardIcon1: FaCircle,
     CardIcon2: "Featured",
     ProjectName: "Task Manager",
     ProjectDescription:
       "A comprehensive task management app built with React featuring state management, task categorization, priority levels, and progress tracking.",

  usedModule : ["React","State Management","Tailwind Css"],
  link:"https://task-manager-with-react-bay.vercel.app/"


   },
   {
   ProjectModule: "JavaScript",
     CardIcon1: FaCircle,
     CardIcon2: "Featured",
     ProjectName: "Calculator",
     ProjectDescription:
      "An interactive calculator application developed using JavaScript, featuring real-time calculations, intuitive UI, and responsive design for a seamless user experience across devices.",

 usedModule : ["JavaScript","CSS ","HTML"],
 link:"https://calculator-lyart-seven-96.vercel.app/"



  },
   {
     ProjectModule: "React",
     CardIcon1: FaCircle,
     CardIcon2: "Featured",
   ProjectName: "Usability Website",
     ProjectDescription:
      "A 6-page website focused on usability principles with intuitive navigation, accessible design, and optimized user experience patterns.",
   usedModule : ["React","State Management ","tailwind Css"],
   link:"https://usability-hub-website-p7hz.vercel.app/"
   },
   {
     ProjectModule: "React",
     CardIcon1: FaCircle,
     CardIcon2: "Featured",
     ProjectName: "Weather App",
     ProjectDescription:
       "A  weather application that fetches real-time data, displays forecasts, and features location-based weather updates with beautiful UI.",

     usedModule : ["React","State Management ","Api Integration"],
     link:"https://weather-app-xi-opal.vercel.app/"

   },
];

function Projects() {
  
  const [filter,setFilter]= useState(FeaturedCard)
  const [active,setActive]= useState("All")


  function filterCards(id){
    if(id === "All"){
       setFilter(FeaturedCard)
       return
    }
    let filterOtherCards = FeaturedCard.filter((card)=>{
        return id === card.ProjectModule
    })
    setFilter(filterOtherCards)
  }




  return (
    <div className="flex flex-col p-2 gap-5 pt-30">
      <ComponentHead HeadContent={Heading} ParaContent={paragraph} />

      <div className="flex flex-wrap justify-center gap-10">
        {FilterButton.map((btn,i) => {
          return (
            <button key={i} onClick={()=>{
            setActive(btn)
            filterCards(btn)}} className={`text-gray-400 border border-gray-400 py-1 px-5 rounded-xl cursor-pointer active:scale-75 hover:bg-blue-500 hover:text-white transition ${active=== btn?"bg-blue-500 text-white":"bg-transparent text-gray-400"}  duration-300` }>
              {btn}
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-5" >
        {filter.map((card,i) => {
          return (
             <div key={i} className="bg-transparent   rounded-lg hover:-translate-y-2 transition duration-500 hover:shadow-yellow-100/30 hover:shadow-2xl shadow-sm border border-gray-800 shadow-black w-100 flex flex-col gap-5 p-2">
                   <div className="flex flex-col gap-5 p-2">
              <div className="w-full flex justify-between items-center">
              
                  <span className="flex items-center gap-2">
                   <motion.span animate={{color:["#22222","#66666"]}} transition={{duration:1 , repeat:Infinity, repeatType:"reverse",ease:"linear"}}> {<card.CardIcon1  className="text-[9px]" />}</motion.span>
                    <p className="text-[12px] text-gray-400  ">{card.ProjectModule}</p>
                  </span>

                  <p className="text-[10px] border border-gray-400 text-white/60 rounded-lg bg-red-900  px-1.5 ">{card.CardIcon2}</p>
               
                </div>

                <h3 className="text-2xl text-white/70 font-bold">{card.ProjectName}</h3>
                <p className="text-sm text-gray-400 font-medium">{card.ProjectDescription}</p>

                <div className="flex gap-5">                  
                   {card.usedModule.map((btn,i)=>{
                    return(
                      <button key={i} className="border border-gray-400 py-px  px-3 rounded-2xl hover:bg-gray-400/30 text-[12px] text-gray-400  ">{btn}</button>
                    )
                   })}
                </div>
              
                  </div>

            <div className=" flex text-center h-px  rounded-xl bg-gray-400  "></div>

           <a href={card.link} target="_blank" className="flex gap-1 pl-3 text-gray-400 items-center text-sm cursor-pointer hover:text-blue-300 ">View Details <FaArrowRightLong className="pt-0.5 text-lg" /></a>

          
             </div>

            
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
