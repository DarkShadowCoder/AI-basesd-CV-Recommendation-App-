'use client'
import Image from "next/image";
import productImage from "@/app/assets/product-image.png"
import pyramidImage from "@/app/assets/pyramid.png"
import tubeImage from "@/app/assets/tube.png"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);

  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start end', "end start"]
  })

  const translateY = useTransform(scrollYProgress, [0,1], [150,-150])

  return (
    <section ref={sectionRef} className="flex justify-center bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">  Boost your productivity</div>
          </div> 
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">
            A more effective way to track progress
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
            Effortlessly turn your ideas into a fully functional, responsive,
            SaaS website in just minutes with this template.
          </p>
        </div>
        <div className="relative">
          <Image 
            src={productImage} 
            alt="Product Image" 
            className="mt-10" 
          />
          <motion.img
          src={pyramidImage.src}
          alt="pyramid Image"
          width={262}
          height={262}
          className="hidden absolute md:block -right-36 -top-32"
          style={{
            translateY
          }}
          />

          <motion.img 
          src={tubeImage.src}
          width={248}
          height={248}
          alt="Tube Image"
          className="hidden absolute md:block bottom-24 -left-36"
          style={{
            translateY
          }}
          />
        </div>
      </div>
    </section>
  );
};
