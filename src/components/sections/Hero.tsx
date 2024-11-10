"use client";
import ArrowIcon from "@/app/assets/arrow-right.svg"
import cogImage from "@/app/assets/cog.png"
import cylinderImage from "@/app/assets/cylinder.png"
import noodleImage from "@/app/assets/noodle.png"
import { motion,useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export  function Hero(){
  const heroRef = useRef(null);
  const  {scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end" , "end start"]
  })
  const translateY = useTransform(scrollYProgress, [0,1],[150,-150])

  return (
    <section ref={heroRef} className="flex justify-center pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)] overflow-x-clip">
      <div className="container w-screen">
        <div className="md:flex w-full items-center justify-between">
          <div className="md:w-[478px] text-center md:text-start">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
                Version 2.0 here
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Pathway to productivity
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Architecto asperiores tenetur aliquam amet quis tempore corporis maiores doloremque in. Pr
              aesentium quasi odio ea recusandae 
              debitis.
            </p>
            <div className="flex gap-1 items-center justify-center md:justify-normal mt-[30px]">
              <button className="px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight bg-black text-white ">Get for free</button>
              <button className="px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight text-black bg-transparent gap-1 ">
                <span>Learn more</span>
                <img src="/assets/arrow-right.svg" className="h-5 w-5"/>
              </button>
            </div>
          </div>
    
          <div className="mt-20 md:mt-0 md:h-[688px] md:flex-1 relative md:ml-20">
            <motion.img 
              src={"/assets/cog.png"}
              alt="cog Image" 
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0 "
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration:3,
                ease: "easeInOut",
              }}
            />
            <motion.img 
              src={"/assets/cylinder.png"} 
              width={220} 
              height={220} 
              alt="cyliner image"
              className="hidden md:block -top-8 -left-32 md:absolute"
              style={{
                
              }}
            />
            <motion.img 
            src={"/assets/noodle.png"} 
            width={220} 
            alt="noodle Image" 
            className="hidden absolute lg:block top-[524px] left-[448px] rotate-[30deg]" 
            style={{
              rotate: 50,
              translateY: translateY,
            }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
