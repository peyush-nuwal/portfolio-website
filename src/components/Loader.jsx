import React, { useEffect, useState } from "react";
import gsap from "gsap";

const Loader = () => {
  const [counterValue, setCounterValue] = useState(0);

  useEffect(() => {
    gsap.to(
      { value: 0 },
      {
        value: 100,
        duration: 5,
        ease: "power2.inOut",
        onUpdate: function () {
          setCounterValue(Math.floor(this.targets()[0].value)); //
        },
      }
    );
    gsap.to('.bar',{
      width:0,
   
      duration: 5,
        ease: "power2.inOut",
    })
    gsap.to('.loader-bar-1',{
        rotate:90,
        y:-50,
        duration:0.5,
        delay:6
    })
    gsap.to('.loader-bar-2',{
     x:-75,
      y:75,
      duration:0.5,
      delay:6
  })
  gsap.to('.loader-bar-1',{
  scale:40,
    rotate:-45,
    duration:2,
    delay:7
})
  
gsap.to('.Loader',{
  display:"none",
     delay:7.5
 })

  }, []);

  return (
    <div className="Loader w-full h-full bg-black fixed top-0 left-0 z-[9999999] text-white flex items-center justify-center">
      <div>
        <div className="loader-bar absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-[300px] h-[50px] flex ">
          <div className="loader-bar-1 relative bg-white w-[200px]"></div>
          <div className="loader-bar-2 relative bg-white w-[100px]"></div>
          <div className="bar absolute top-0 right-0 h-[50px] w-full bg-[rgb(80,80,80)] "></div>
        </div>
      </div>

      <div className="counter fixed bottom-8 left-8 md:bottom-16 md:left-16 text-[70px] md:text-[100px] font-normal pointer-events-none select-none">
        {String(counterValue).padStart(3, "0")}
      </div>
    </div>
  );
};

export default Loader;
