"use client"
import ArrowRight from "@/app/assets/arrow-right.svg"
import starImage from "@/app/assets/star.png"
import springImage from "@/app/assets/spring.png"
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react";

export const CallToAction = () =>   {
  const sectionRef = useRef(null)
  
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const translateY = useTransform(scrollYProgress, [0,1],[150,-150]);
  return (
    <section ref={sectionRef} className="flex justify-center bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto relative">
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">Sign up for free</h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Tempora eligendi voluptates ea delectus unde, fugiat magnam
          </p>
          <motion.img 
            src={"/assets/star.png"} 
            alt="Star Image" 
            width={360} 
            className="absolute -left-[350px] -top-[370px] "
            style={{
              translateY
            }}
          />
          <motion.img 
          src={"/assets/spring.png"} 
          alt="Spring Image" 
          width={360}
          className="absolute -right-[331px] -top-[19px]"
          style={{
            translateY
          }}
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight bg-black text-white ">Get for free</button>
          <button className="px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight text-black bg-transparent">
            <span>Learn more</span>
            <img src="/assets/arrow-right.svg" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
