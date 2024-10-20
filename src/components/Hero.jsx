import React, { useEffect } from 'react'
import gsap from 'gsap'
import { motion } from 'framer-motion'

const Hero = () => {
   useEffect(() => {
    const t1= gsap.timeline();
    
    gsap.from('.h3',{
      y:"100%",
      duration:0.5,
      stagger:0.3,
      delay:8.2
    })
      
    gsap.from('.img-container',{
      opacity:0,
      duration:1,
      stagger:0.2,
      delay:8.2
    })

   }, [])
   

  return (
    <section className='w-full h-screen  flex flex-col md:flex-row'>
      <div className='w-full md:w-[40%] ml-[10%] h-full  flex flex-col items-center justify-end md:justify-center '>
        <div className='w-full   overflow-hidden'>
           <h3 className='h3 text-2xl md:text-4xl font-medium tracking-wider'>Peyush nuwal</h3>
        </div>
        <div className='w-full h-auto md:h-16  overflow-hidden'>
           <h3 className='h3 text-4xl md:text-7xl font-semibold '>full stack devloper </h3>
        </div>
        <div className='w-full h-auto md:h-20   overflow-hidden'>
           <h3 className='h3 text-4xl md:text-7xl font-semibold '>and UI designer </h3>
        </div>

      </div>
      <div className='w-full md:w-[40%] h-full  flex items-center justify-center'>
         <div className='img-container w-4/5 h-4/5 overflow-hidden'>
         <img src="profile.png" alt=""  className='w-full h-full object-contain'/></div>
      </div>
      <motion.div initial={{y:0,opacity:1}} animate={{y:100 ,opacity:0}} transition={{duration: 2.5, repeat: Infinity}} className="scroll absolute bottom-32  left-5 md:left-10 text-xl">Scroll</motion.div>
    </section>
  )
}

export default Hero