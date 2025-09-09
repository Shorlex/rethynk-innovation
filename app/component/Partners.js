"use client"
import { Cormorant_Garamond } from "next/font/google";
import Image from "next/image";
import {motion} from "framer-motion"

const comorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const partners = [
    "/images/partners/africa.png",
    "/images/partners/palette-pattern.png",
    "/images/partners/home-hive.png",
    "/images/partners/fibrance.png",
    "/images/partners/rahnee.png",
    "/images/partners/Smart.png",
]

const Partners = () => {
  return (
    <section className="w-full xl:p-24 py-24 px-5 ">
      <div className="lg:w-3/4 w-full">
        <h2
          className={`text-4xl lg:text-5xl xl:text-6xl font-thin  ${comorant.className}`}
        >
          Strategic Partners in Digital Transformation
        </h2>
        <p className="mt-5">
          From disruptive startups to global enterprises, we architect digital
          experiences that drive results. Our end-to-end creative and technical
          services—spanning strategic branding, conversion-optimized web
          platforms, and scalable digital systems—are tailored for organizations
          ready to outperform.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-3 mt-10 ">
        {partners.map((item, i) => (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "linear", delay: i*0.4 }}
            viewport={{ once: true }}
            key={i}
            className="w-[200px] h-[200px] even:mt-20 border border-gray-300 rounded shadow-xl flex justify-center items-center"
          >
            <Image
              src={item}
              width={150}
              height={150}
              alt={`partner ${i}`}
              className="grayscale-100"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
