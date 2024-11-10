"use client"
import acmeLogo from "@/app/assets/logo-acme.png"
import celestialLogo from "@/app/assets/logo-celestial.png"
import echoLogo from "@/app/assets/logo-echo.png"
import pulseLogo from "@/app/assets/logo-pulse.png"
import quantumLogo from "@/app/assets/logo-quantum.png"
import apexLogo from "@/app/assets/logo-apex.png"
import Image from "next/image";
import { motion} from "framer-motion"


export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div className="flex gap-14 flex-none pr-14" animate={{
            translateX: "-50%",
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
          >

            {/* First set of logos */}
            <Image src={acmeLogo} alt="Acme logo" className=" h-8 w-auto"/>
            <Image 
            src={quantumLogo}
            alt="Quantum Logo"
            className=" h-8 w-auto"
            />
            <Image src={echoLogo} alt="Echo Logo" className=" h-8 w-auto"/>
            <Image 
              src={celestialLogo}
              alt="Celestial Logo"
              className=" h-8 w-auto"
            />
            <Image 
              src={pulseLogo}
              alt="Pulse Logo"
              className=" h-8 w-auto"
            />
            <Image 
              src={apexLogo}
              alt="Apex Logo"
              className=" h-8 w-auto"
            />

            {/* Second set of logos  for animation*/}
            <Image src={acmeLogo} alt="Acme logo" className=" h-8 w-auto"/>
            <Image 
            src={quantumLogo}
            alt="Quantum Logo"
            className=" h-8 w-auto"
            />
            <Image src={echoLogo} alt="Echo Logo" className=" h-8 w-auto"/>
            <Image 
              src={celestialLogo}
              alt="Celestial Logo"
              className=" h-8 w-auto"
            />
            <Image 
              src={pulseLogo}
              alt="Pulse Logo"
              className=" h-8 w-auto"
            />
            <Image 
              src={apexLogo}
              alt="Apex Logo"
              className=" h-8 w-auto"
            />


          </motion.div>
        </div>
      </div>
    </div>
  );
};
