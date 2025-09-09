"use client";
import { motion } from "framer-motion";
import { Cormorant_Garamond } from "next/font/google";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const comorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <div className={`text-center py-24 relative ${comorant.className}`}>
      <div>
        {/* First set of image */}
        <div className="absolute top-100 left-0 2xl:px-30 xl:px-17 xl:flex gap-5 justify-between w-full hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              ease: "linear",
              delay: 1.8,
            }}
            viewport={{ once: true }}
          >
            <Image
              src={"/images/landing_page/hero-4.jpg"}
              width={250}
              height={250}
              alt="hero-image-4"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              ease: "linear",
              delay: 1.2,
            }}
            viewport={{ once: true }}
          >
            <Image
              src={"/images/landing_page/hero-5.jpg"}
              width={250}
              height={250}
              alt="hero-image-1"
            />
          </motion.div>
        </div>
        {/* Second set of image */}
        <div className="absolute top-20 right-0 2xl:px-30 xl:px-17 xl:flex gap-5 justify-between w-full hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              ease: "linear",
            }}
            viewport={{ once: true }}
          >
            <Image
              src={"/images/landing_page/hero-2.jpg"}
              width={250}
              height={250}
              alt="hero-image-2"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              ease: "linear",
              delay: 0.6,
            }}
            viewport={{ once: true }}
          >
            <Image
              src={"/images/landing_page/hero-6.avif"}
              width={250}
              height={250}
              alt="hero-image-3"
            />
          </motion.div>
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl uppercase ">
          We Re
          <motion.span className="text-[#38b6ff]">
            <Typewriter
              words={[
                "Thynk", // "ReThynk your business"
                "Define", // "ReDefine your business"
                "Build", // "ReBuild your business"
                "Shape", // "ReShape your business"
                "Ignite", // "ReIgnite your business"
                "Charge", // "ReCharge your business"
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={3000}
            />
            <br />
            <span className=" text-black">Businesses</span>
          </motion.span>
          <br />
        </h1>
        <h6 className="text-sm mt-1 italic font-bold text-gray-400">
          Through Radical Digital Evolution
        </h6>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "linear", delay: 2.5 }}
        viewport={{ once: true }}
      >
        <Image
          src={"/images/landing_page/main-hero.jpg"}
          width={612}
          height={419}
          alt="hero-image-1"
          className="mx-auto my-0"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
