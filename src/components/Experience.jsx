import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Experience = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.from('.experience-title span',{
      y:"100%",
     
      stagger:0.1,
      scrollTrigger:{
        trigger:'.experience',
        start: "10% 25%",
    
        toggleActions: "play reverse play reverse",
      }
     })


     gsap.to('.exp-bar',{
      height:"100%",
     
      
      scrollTrigger:{
        trigger:'.experience',
        start: "10% 50%",
      
        scrub:true,
        end: 'center 40%',
        toggleActions: "play reverse play reverse",
      }
     })
     gsap.from('.exp-dot',{
      opacity:0,
     
      scrollTrigger:{
        trigger:'.experience',
        start: "35% 50%",
        
        scrub:true,
        end: 'center 40%',
        toggleActions: "play reverse play reverse",
      }
     })
     gsap.from('.company',{
      opacity:0,
     
      scrollTrigger:{
        trigger:'.experience',
        start: "35% 50%",
       
        scrub:true,
        end: 'center 40%',
        toggleActions: "play reverse play reverse",
      }
     })
  }, [])
  

  return (
    <div className='experience w-full h-screen  pt-[5%] px-3 md:px-10'>
       <h1 className='experience-title text-5xl md:text-7xl font-medium overflow-hidden'> 
        {['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n','c','e'].map((c, idx) => (
            <span key={idx} className='  inline-block'>{c}</span>
          ))}
         
        </h1>
      <div className='flex h-[70vh] gap-5 relative' >
      <div className='exp-bar w-[2px] h-0 rounded-full bg-black  mt-5 ml-[5%] relative'>
          <div className='exp-dot absolute top-[25%] left-1/2  -translate-x-1/2 w-3 h-3 bg-black rounded-full '/> 
        </div>
        <div className='company absolute top-[27%] left-[15%] md:left-[7%] h-fit '>
          <h3 className='text-2xl md:text-3xl'>Marknox <span className='text-xl'> (2024 - present)</span></h3>
          <p className=' md:text-lg'> i will join soon cause they gonna hire me</p>
        </div>
      </div>
    </div>
  )
}

export default Experience