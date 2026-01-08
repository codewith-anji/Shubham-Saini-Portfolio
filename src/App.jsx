import React from "react";
import Navbar from "./Navbar";

import Home from "./Navlinks/Home";
import Projects from "./Navlinks/Projects";
import About from "./Navlinks/About";
import Skills from "./Navlinks/Skills";
import Contact from "./Navlinks/Contact";
import { motion } from "framer-motion";
import Footer from "./Footer";
import HomeArrow from "./Navlinks/HomeArrow";

function App() {
  return (
    <div>
      <Navbar />

     

      <main>
  <section
    id="home">
    <Home />
</section>

       <motion.section
  initial={{ y: 80, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
>
 <About/>
</motion.section>

         <motion.section
         initial={{y:80,opacity:0}}
         whileInView={{y:0,opacity:1}}
         transition={{duration:0.8,ease:"easeOut"}}
         viewport={{once:true}}
          id="skills">
          <Skills/>
        </motion.section>


         <motion.section
          initial={{y:80, opacity:0}}
          whileInView={{y:0,opacity:1}}
          viewport={{once:true}}
          transition={{duration:0.8,ease:"easeOut"}}
         


         id="projects">
          <Projects/>
        </motion.section>

         <motion.section
         initial={{y:80,opacity:0}}
         whileInView={{y:0,opacity:1}}
         transition={{duration:0.8,ease:"easeOut"}}
         viewport={{once:true}}
         id="contact">
          <Contact/>
        </motion.section>
      </main>

  

     <HomeArrow/>
      <Footer/>

    </div>
  );
}

export default App;
