"use client";
import { motion } from "framer-motion";
import { Cormorant_Garamond } from "next/font/google";

const comorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const Feedback = ({ portfolio }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "linear", delay: 0.5 }}
      viewport={{ once: true }}
      className="flex items-center xl:px-24 lg:px-12 px-6 h-screen"
    >
      <div>
        <h2
          className={`${comorant.className} text-3xl lg:text-4xl xl:text-6xl italic`}
        >
          "{portfolio.feedback}"
        </h2>
        <div className="flex justify-end">
          <p className={`${comorant.className} text-2xl italic text-gray-500`}>
            <span>{portfolio.clientName}</span>
            <br></br>
            <span>{portfolio.clientRole}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Feedback;
