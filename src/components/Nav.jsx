import { motion } from "framer-motion";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { IoIosArrowRoundForward } from "react-icons/io";
const Nav = () => {
  const buttonDivRef = useRef();
  const buttonRef = useRef();
  const navOption = ["Home", "About", "Experience",'Projects', "Contact"];

   const [showNav, setShowNav] = useState(false)
  const hoverVariants = {
    initial: { y: 0 },
    hover: {
      y: "-100%",
      transition: { duration: 0.3 },
    },
  };

 useEffect(() => {
  gsap.from(".nav-bar",{
  y:"-200%",
    delay:8,
    duration:2
  })
 }, [])
 
  

  useEffect(() => {
    const btn = buttonRef.current;
       
          btn.addEventListener("mouseenter", () => {
            gsap.to(buttonDivRef.current, {
              width: "100%",
              duration: 0.5,
            });
          });
          btn.addEventListener("mouseleave", () => {
            gsap.to(buttonDivRef.current, {
              width: "0",
              duration: 0.5,
            });
          });
        



        
  }, [showNav]);

  useEffect(() => {
    const t1= gsap.timeline();
    const t2= gsap.timeline();

  

    if(showNav){
      t1.to('.Nav', {
        height: "70vh",
        duration: 1,
        ease: "power2.out" 
      });
     
     
     
    } 
    else{
      t2.to('.Nav', {
        height: "0",
        duration: 1,
        ease: "power2.in"
      });    
    }

  }, [showNav]);
  
  return (
    <div className=" nav-bar fixed   left-0 top-0 z-[999999] w-full h-20  flex items-center justify-end px-12 ">
      <button onClick={()=>setShowNav(true)} className=" text-xl font-medium">Menu</button>
       
          <div className="Nav absolute h-0 top-0 left-0 w-full  bg-offwhite  overflow-hidden">
        <div className="w-full h-[90%] flex flex-col md:flex-row justify-end ">
          <button  onClick={()=>setShowNav(false)} className="text-xl font-medium absolute right-6 md:right-12 top-16 md:top-10">
            Close
          </button>
          <div className="nav-left  w-full md:w-1/2  h-1/2  md:h-[90%]  pl-3 md:pl-10 pt-20  ">
          <div className="w-3/6 md:w-2/5  h-2/3 bg-slate-900 ">
          <video src="https://prismic-io.s3.amazonaws.com/rejouice/3c8eec5e-c857-4fd3-9add-a9e6035a160c_RJ-2.0-Video+background+5_1+%281%29.mp4" autoPlay loop muted className=" w-full h-full object-contain objce"></video>
          </div>
          
          </div>
          <div className="nav-right w-1/2  md:h-full  pl-3 md:pl-10 pt-3 md:pt-20 ">
            <ul>
              {navOption.map((item, index) => (
                <motion.h1
                  key={index}
                  initial="initial"
                  whileHover="hover"
                  className=" text-4xl md:text-6xl font-medium h-[40px] md:h-[60px] mb-[2px] overflow-hidden"
                >
                  <motion.span
                    variants={hoverVariants}
                    className=" block h-full "
                  >
                    {item}
                  </motion.span>
                  <motion.span
                    initial={{ y: "100%" }}
                    variants={hoverVariants}
                    className="block h-full"
                  >
                    {item}
                  </motion.span>
                </motion.h1>
              ))}
            </ul>
            <button
              ref={buttonRef}
              className="relative border-2 border-black rounded-full px-3 md:px-6  md:py-1 overflow-hidden z-10 mt-4 bg-transparent"
            >
              <motion.h1
                initial="initial"
                whileHover="hover"
                className="text-2xl md:text-3xl font-medium h-10 mb-0 md:mb-[2px] overflow-hidden bg-transparent "
                whileTap={{ scale: 0.95 }}
              >
                <motion.span variants={hoverVariants} className="block h-full">
                  Home
                </motion.span>
                <motion.span
                  initial={{ y: "100%" }}
                  variants={hoverVariants}
                  className="inline-block h-full text-white"
                >
                  Home
                </motion.span>
              </motion.h1>
              <div
                ref={buttonDivRef}
                className= "hidden md:block bg-black w-0 h-full absolute top-0 left-0  -z-10"
              />
            </button>
          </div>
        </div>
        <div className=" w-full h-[10%]  bg-offwhite flex justify-end px-10 border-t-2 border-black overflow-hidden mt-2 md:mt-0 ">
          <a
            href="https://www.instagram.com/nuwal_piyush/"
            className="flex gap-1 items-center text-lg  mr-2 group hover:scale-[1.2] duration-500"
          >
            Instagram
            <span className="-rotate-45 group-hover:rotate-0 duration-500">
              <IoIosArrowRoundForward className="text-3xl " />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/peyush-nuwal/"
            className="flex gap-1 items-center text-lg mr-2 group hover:scale-[1.2] duration-500"
          >
            Linkedin
            <span className="-rotate-45 group-hover:rotate-0 duration-500">
              <IoIosArrowRoundForward className="text-3xl" />
            </span>
          </a>
          <a
            href="https://github.com/peyush-nuwal"
            className="flex gap-1 items-center text-lg mr-2 group hover:scale-[1.2] duration-500"
          >
            Github
            <span className="-rotate-45 group-hover:rotate-0 duration-500">
              <IoIosArrowRoundForward className="text-3xl" />
            </span>
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Nav;
