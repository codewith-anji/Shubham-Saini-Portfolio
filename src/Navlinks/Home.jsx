import React from "react";
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { motion } from "framer-motion";

import shubhamImg from "../assets/Shubham-image.png";

function Home() {
  return (
    <div>
      <section
        className="relative lg:pb-15 w-full  bg-linear-to-br
  from-[#0f0f0f]
  via-[#111827]
  to-[#000000] overflow-hidden flex flex-col  lg:flex-row lg:justify-around items-center gap-20 lg:gap-0 "
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
        linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
      `,
            backgroundSize: "60px 60px",
          }}
        />

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex  flex-col gap-8   relative top-10 text-white"
        >
          <h1 className="text-4xl font-bold bg-linear-to-r from-blue-300 via-pink-400 to-white bg-clip-text text-transparent text-center lg:text-left">
            Hello World
          </h1>
          <p
            className="  font-bold   bg-linear-to-r from-blue-200 via-blue-300 to-white
  bg-clip-text text-transparent text-5xl text-center lg:text-left p-1 "
          >
            I'm Shubham Saini
          </p>
          <p className="text-pink-300 font-medium text-xl sm:text-2xl text-center lg:text-left ">
            Frontend Developer & React Enthusiast
          </p>

          <div className="text-pink-300 text-lg sm:text-xl text-center lg:text-left ">
            Currently an intern at{" "}
            <span className="text-yellow-100 p-1 ">
              Brilica Services Pvt Ltd ,
            </span>{" "}
            crafting beautiful and <br />
            interactive web experiences with modern technologies.
          </div>

          <div className="flex gap-5 items-center justify-center lg:justify-start">
            <a
              href="https://github.com/codewith-anji"
              target="_blank"
              className="bg-[#222] hover:translate-z-10 transition duration-300 border border-transparent rounded-md hover:border active:scale-75 hover:scale-105  hover:border-yellow-100 hover:rounded-md"
            >
              <FiGithub className="p-1 text-gray-300 cursor-pointer  text-4xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/shubham-saini-0786b7374/
"
              target="_blank"
           
              className="bg-[#222] rounded-lg  hover:border border border-transparent  hover:border-yellow-100 active:scale-75 hover:scale-105 hover:translate-z-10 cursor-pointer transition duration-300 hover:rounded-md"
            >
              <LuLinkedin className="p-1 text-gray-300  text-4xl" />
            </a>
            <a  className="bg-[#222] rounded-lg active:scale-75  hover:border cursor-pointer border border-transparent  hover:border-yellow-100 hover:rounded-md hover:scale-105 hover:translate-z-10  transition duration-300">
              <MdOutlineMail className="p-1 text-gray-300  text-4xl" />
            </a>
          </div>

          <div className="flex gap-8 justify-center lg:justify-start ">
            <button
              onClick={() => {
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-gray-300 font-medium py-2 px-4 rounded-lg active:scale-75 hover:scale-105 hover:translate-z-10 transition duration-300 cursor-pointer  text-black"
            >
              View Projects
            </button>
            <button
              onClick={() => {
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className="border border-blue-300 cursor-pointer hover:border-yellow-100 hover:scale-105 hover:translate-z-10 active:scale-75 transition duration-300 px-4 py-2 rounded-lg"
            >
              Get In Touch
            </button>
          </div>
        </motion.div>

        <div className="relative w-80 h-80 flex items-center justify-center">
          <div className="animate-scale-in">
            <div className="relative w-80 h-80 animate-float">
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-green-700 animate-spin-slow"></div>

              <img
                src={shubhamImg}
                className="w-full h-full rounded-full object-cover object-top bg-white"
                alt="Shubham_Image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
