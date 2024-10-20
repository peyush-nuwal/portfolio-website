import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { img } from 'framer-motion/client';

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
 
  const tech=[
    {id:1,img:'mongodb.svg'},
    {id:2,img:'express.svg'},
    {id:3,img:'react.svg'},
    {id:4,img:'node.svg'},
    {id:5,img:'typescript.svg'},
    
  ]
  const about_text='I’m Peyush Nuwal, a dedicated MERN stack developer passionate about creating innovative web applications that enhance user experience. With expertise in frontend and backend technologies, I aim to leverage technology for meaningful impact in the digital landscape.'

  useEffect(() => {
   
   gsap.from('.about-title span',{
    y:"100%",
   
    stagger:0.1,
    scrollTrigger:{
      trigger:'.about',
      start: "10% 25%",
      
      toggleActions: "play reverse play reverse",
    }
   })
   gsap.from('.p-span',{
    y:"100%",
   
    stagger:0.1,
    scrollTrigger:{
      trigger:'.about',
      start: "15% 25%",
     
      toggleActions: "play reverse play reverse",
    }
   })
   gsap.to('.line-1',{
    width:"100%",
   
    stagger:0.1,
    scrollTrigger:{
      trigger:'.about',
      start: "15% 25%",
     
      toggleActions: "play reverse play reverse",
    }
   })
   gsap.from('.tech-title span',{
    y:"100%",
   
    stagger:0.1,
    scrollTrigger:{
      trigger:'.tech',
      start: "10% 60%",
    
      toggleActions: "play reverse play reverse",
    }
   })

   gsap.to('.line-2',{
    width:"100%",
   
    stagger:0.1,
    scrollTrigger:{
      trigger:'.tech',
      start: "10% 60%",
    
      toggleActions: "play reverse play reverse",
    }
   })
   gsap.from('.tech-img',{
   
    opacity:0,
    stagger:0.1,
    scrollTrigger:{
      trigger:'.tech',
      start: "10% 60%",
  
      toggleActions: "play reverse play reverse",
    }
   })
  }, [])
  
  return (
    <div className='about w-full min-h-screen   pt-[10%] px-5 md:px-28'>
     <div className='w-full   overflow-hidden '>
       <h1 className='about-title text-5xl md:text-7xl font-medium overflow-hidden'> 
        {['A', 'b', 'o', 'u', 't', '\u00A0', 'm', 'e'].map((c, idx) => (
            <span key={idx} className='  inline-block'>{c}</span>
          ))}
        
        </h1>
        <div className='line-1 w-0 h-[2px] rounded-full bg-black'></div>
     </div>

     <div className='ml-2 md:ml-[15%] w-full md:w-[85%] mt-6  flex flex-wrap'>
      {about_text.split(' ').map((word,idx)=>(
      <p key={idx} className='pr-2 text-3xl md:text-5xl overflow-hidden'>
        <span className='p-span inline-block '>{word}</span>
      </p>
     ))}</div>

     <div className='tech w-full h-1/2 mt-[5%] '>
     <h1 className='tech-title text-5xl md:text-7xl  font-medium overflow-hidden'> 
        {['T', 'e', 'c', 'h',  '\u00A0', 's', 't','a','c',"k"].map((c, idx) => (
            <span key={idx} className='  inline-block'>{c}</span>
          ))}
        </h1>
        <div className='line-2 w-0 h-[2px] rounded-full bg-black'></div>
          <div className='flex justify-center items-center gap-2 mt-20 md:mt-10'>{tech.map((i,idx)=>(
             <img key={i.id} src={i.img} alt="" className='tech-img w-12 md:w-20  h-12md:h-20 '/>
          ))}</div>
     </div>
    </div>
  )
}

export default About