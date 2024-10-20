import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoIosArrowRoundUp } from "react-icons/io";
import { motion } from 'framer-motion';


const Footer = () => {
  const talk="Let's Talk"

   const social=[
    {id:1,name:"Instagram",link:"https://www.instagram.com/nuwal_piyush/"},
    {id:2,name:"Linkedin",link:"https://www.linkedin.com/in/peyush-nuwal/"},
    {id:3,name:"Github",link:"https://github.com/peyush-nuwal"},
    {id: 4, name: "Gmail", link: "mailto:piyushnawal19@gmail.com"}

    
   ]
   gsap.registerPlugin(ScrollTrigger);


    // useEffect(() => {
    //    gsap.from('.backto',{
    //      y:"120%",
    //      scrollTrigger:{
    //       trigger:'.footer',
         
    //       start:'top 50%',
    //       toggleActions: "play reverse play reverse",
    //      }
    //    })
    //    gsap.from('.talk-span',{
    //     y:"100%",
    //     stagger:0.1,
    //     scrollTrigger:{
    //      trigger:'.footer',
       
    //      start:'40% 50%',
    //      toggleActions: "play reverse play reverse",
    //     }
    //   })
    //   gsap.from('.talk-h4',{
    //   opacity:0,
    //    duration:1,
    //    delay:0.5,
    //     scrollTrigger:{
    //      trigger:'.footer',
         
    //      start:'40% 50%',
    //      toggleActions: "play reverse play reverse",
    //     }
    //   })
    //   gsap.from('.pinky-fing',{
    //     y:"-100%",
    //      opacity:0,
    //     stagger:0.2,
    //       scrollTrigger:{
    //        trigger:'.footer',
           
    //        start:'60% 70%',
    //        toggleActions: "play reverse play reverse",
    //       }
    //     })
    // }, [])
    

   


  return (
    <footer className='footer h-[100vh] w-full relative px-3 md:px-12 pt-16 '>
     <div className='h-[10%] w-full flex items-center justify-end overflow-hidden'>
         <div className='backto foot-1 flex items-center text-xl gap-2 cursor-pointer'>Back to the Top 
          <div  className='w-12 md:w-16 h-12 md:h-16 bg-black text-white rounded-full flex items-center justify-center text-4xl overflow-hidden' >
            <motion.span initial={{y:"100%"}}  animate={{y:"-100%"}} transition={{duration: 1, repeat: Infinity}} className='inline-block'>

            <IoIosArrowRoundUp/>
            </motion.span>
          </div>
         </div>
     </div>
     <div className='h-[60%] flex flex-col items-center justify-center mt-4 relative'>
        <h4 className='talk-h4 text-xl md:text-3xl font-medium absolute top-48  md:top-12 left-10 md:left-32 leading-none '>Have a project in mind </h4>
        <h1 className='text-[20vw] font-medium overflow-hidden leading-none'>
            {talk.split('').map((c,idx)=>(
               <span key={idx} className='talk-span inline-flex leading-none text-offwhite'>{c}</span>
            ))}
        </h1>
     </div>

     <div className='w-full   flex flex-col md:flex-row   md:justify-between
      items-start md:items-center overflow-hidden  gap-10 md:gap-0'>
      <div className='w-2/3 md:w-fit  flex flex-wrap  md:flex-nowrap gap-2 flex-row items-start md:items-center'>
        {social.map((s,idx)=>(
          <a href={s.link} key={s.id} className='pinky-fing border-[1px] border-black px-5 md:px-7 py-2 md:py-4 text-xl rounded-full'>{s.name}</a>
        ))
          
        }
      </div>
            <h4 className='pinky-fing text-xl md:text-2xl h-full text-center w-full md:w-fit '>Created by peyush nuwal</h4>
     </div>
    </footer>
  )
}

export default Footer