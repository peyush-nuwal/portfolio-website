import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoIosArrowRoundForward } from "react-icons/io";
const Projects = () => {
  const projectImgRef=useRef()
  const projectRefs = useRef([]);
  gsap.registerPlugin(ScrollTrigger);

   const projects=[
    {id:1,title:"Rejouice Awwwards website",src:'/rejoice.png',link:"https://rejoice-nu.vercel.app/"},
    {id:2,title:"Obys agency ",src:'/obys.png',link:"https://peyush-nuwal.github.io/Obys/"},
    {id:3,title:"Traval",src:'/traval.png',link:"https://traval-three.vercel.app/"},
    {id:4,title:"Mason ",src:'/mason.png',link:"https://mason-eight.vercel.app/"},
    {id:5,title:"Otakumart ",src:'/otaku.png',link:"https://peyush-nuwal.github.io/Project-1/"},
  
  ]


  useEffect(() => {
    
    gsap.from('.projects-title span',{
      y:"100%",
     
      stagger:0.1,
      scrollTrigger:{
        trigger:'.projects',
        start: "10% 25%",
        
        toggleActions: "play reverse play reverse",
      }
     })

     gsap.to('.line-3',{
      width:"100%",
     
      stagger:0.1,
      scrollTrigger:{
        trigger:'.projects',
        start: "15% 25%",
       
        toggleActions: "play reverse play reverse",
      }
     })
     gsap.from('.project-item',{
      y:"300px",
      opacity:0,
     duration:1,
      stagger:0.2,
      scrollTrigger:{
        trigger:'.projects',
        start: "15% 25%",
      
        toggleActions: "play reverse play reverse",
      }
     })
     gsap.from('.a-tags',{
      x:"-300px",
      opacity:0,
     duration:1,
     delay:0.5,
      stagger:0.2,
      scrollTrigger:{
        trigger:'.projects',
        start: "90% 90%",
       
        toggleActions: "play reverse play reverse",
      }
     })
  }, [])

  useEffect(() => {
    projectRefs.current.forEach((projectElement, idx) => {
      const imageElement = projectElement.querySelector('.project-img');

      const onMouseMove = (e) => {
        const rect = projectElement.getBoundingClientRect();
        gsap.to(imageElement, {
          x: e.clientX - rect.left - 100, 
          y: e.clientY - rect.top - 75,
          opacity: 1, 
        });
      };

      projectElement.addEventListener('mouseenter', () => {
        gsap.to(imageElement, { opacity: 1 });

        
        projectElement.addEventListener('mousemove', onMouseMove);
      });

      projectElement.addEventListener('mouseleave', () => {
      
        gsap.to(imageElement, { opacity: 0 });
        
      
        projectElement.removeEventListener('mousemove', onMouseMove);
      });

      projectElement.addEventListener('click', () => {
        window.location.href = projects[idx].link;
      });
    });
  }, [projects]);
  
  
  return (
    <div className='projects w-full  lg:h-screen pt-[5%]  px-3 lg:px-10'> 
       <div className='w-full   overflow-hidden '>
       <h1 className='projects-title  text-5xl lg:text-7xl font-medium overflow-hidden'> 
        {['A', 'b', 'o', 'u', 't', '\u00A0', 'm', 'e'].map((c, idx) => (
            <span key={idx} className='  inline-block'>{c}</span>
          ))}
        
        </h1>
        <div className='line-3 w-0 h-[2px] rounded-full bg-black'></div>
     </div>


     <div className='divide-y-2 divide-zinc-300 mt-5 lg:mt-10 relative'>
      {projects.map((item,idx)=>(
       
          <div key={item.id} ref={(el) => (projectRefs.current[idx] = el)}  className='project-item text-3xl lg:text-5xl py-5  lg:py-7 px-1 lg:px-4 cursor-pointer hover:text-zinc-500 relative '>
            {item.title}
            <div  className='project-img opacity-0 w-[200px] h-[150px] bg-red-400 absolute top-0 left-0 overflow-hidden pointer-events-none z-[9999]' > 
              <img src={item.src} alt="" className='w-full h-full  object-cover object-center pointer-events-none'/>
            </div>
          </div>
        
       
      ))}

     </div>


     <a href="https://github.com/peyush-nuwal/" className='a-tags text-2xl font-medium hover:text-zinc-400 mt-10 flex items-center group hover:underline underline-offset-2 decoration-black decoration-solid '>See more projects here <span className='text-3xl -rotate-45 group-hover:rotate-0 transition-transform duration-300 '><IoIosArrowRoundForward/></span></a>
    </div>
  )
}

export default Projects