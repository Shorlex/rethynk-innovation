"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { Cormorant_Garamond } from "next/font/google";
import SolutionVisual from "./Visuals";
import Impacts from "./Impacts";

const comorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const SolutionDelivered = ({portfolio}) => {
  const sectionRef = useRef();
  const [isActive, setIsActive] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const shouldBeActive = latest > 0.2 && latest < 0.9;
    setIsActive(shouldBeActive);
  });

  return (
    <motion.section
      ref={sectionRef}
      className="relative  w-full py-24 px-5"
      initial={{ backgroundColor: "#ffffff", color: "#111111" }}
      animate={{
        backgroundColor: isActive ? "#030018" : "#ffffff",
        color: isActive ? "#ffffff" : "#111111",
        transition: { duration: 0.8 },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "linear", delay: 0.5 }}
        viewport={{ once: true }}
        className="xl:px-24"
      >
        <h2
          className={`${comorant.className} text-3xl lg:text-4xl xl:text-6xl uppercase italic`}
        >
          {portfolio.hilight}
        </h2>
          </motion.div>
          <SolutionVisual portfolio={portfolio} />
          <Impacts portfolio={portfolio} />
    </motion.section>
  );
};

export default SolutionDelivered;
