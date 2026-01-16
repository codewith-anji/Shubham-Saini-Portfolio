import React from "react";
import PortfolioLogo from "./assets/Portfolio Logo.png";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const NavLinks = [
  {
    LinkName: "Home",
    id:"home"
  },
  {
    LinkName: "About",
    id:"about",
  },
  {
    LinkName: "Skills",
    id: "skills",
  },
  {
    LinkName: "Projects",
    id: "projects",
  },
  {
    LinkName: "Contact",
    id: "contact",
  },
];






function Navbar() {
  let [popUp , setPopUp] = useState(false)

   function NavBarScroll(id){
       document.getElementById(id).scrollIntoView({
        behavior:"smooth"
       })
      setPopUp(prev => !prev)
   }


   function MobileNav(){
     setPopUp(prev => !prev)
   }

  return (
    <>
      <div className="flex sticky pr-3 top-0 bg-black/60 shadow-sm shadow-black w-full z-50 justify-between items-center  ">
        <div>
          <img
            className="w-25 sm:w-40"
            src={PortfolioLogo}
            alt="Site main logo"
          />
        </div>

        <div className="hidden lg:flex gap-16">
          {NavLinks.map((nav,i) => {
            return (
             
                <p
                onClick={()=>NavBarScroll(nav.id)}
                key={i}
                  className="text-gray-400 hover:text-white hover:border-b-2 transition duration-400 pb-1 hover:border-b-white text-lg font-medium "
                >
                  {nav.LinkName}
                </p>
              
            );
          })}
        </div>

<div>
   <div className={`  w-full bg-[#222] absolute top-12 left-0  z-10  flex-col  p-2 gap-8  ${popUp?"flex ":"hidden "}   `}>
      {NavLinks.map((ele,i)=>{
        return(
         <div key={i} onClick={()=>NavBarScroll(ele.id)} className ="cursor-pointer text-gray-300 font-medium flex justify-between items-center text-lg">
            <p>{ele.LinkName}</p>
       
         </div>
        )
      })} 
   </div>
 </div> 


   <div className="flex items-center gap-3">
          <a href="/Shubham_Saini_Frontend_CV.pdf" download className="text-white text-sm sm:text-md bg-blue-500 px-2 py-1 rounded-lg shadow-sm shadow-white cursor-pointer active:scale-75">
            Download CV
          </a>
          {
            <FaBars onClick={MobileNav} className="lg:hidden text-white text-2xl sm:text-3xl active:scale-75 cursor-pointer   " />
          }
        </div>
      </div>


    </>
  );
}

export default Navbar;
