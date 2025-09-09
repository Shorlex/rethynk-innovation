"use client";
import { Cormorant_Garamond } from "next/font/google";
import { motion } from "framer-motion";
import { FaQuestion } from "react-icons/fa6";

const comorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin, 'italics"],
});

const Questions = ({ service }) => {
  return (
    <section className="w-full xl:p-24 px-5">
      <div className="w-full flex items-center">
        <h2
          className={`text-4xl lg:text-5xl xl:text-6xl font-thin italic ${comorant.className}`}
        >
          Popular questions<br></br>preemptively answered.
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-10 mt-10 w-full ">
        {service.FAQs.map((item) => (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "linear", delay: item.id * 0.4 }}
            viewport={{ once: true }}
            key={item.id}
            className="w-[200px] h-[300px] even:mt-20 border border-gray-300 rounded shadow-xl p-5 relative"
          >
            <h5 className="mt-5 font-bold">{item.question}</h5>
            <h5 className="mt-5">{item.answer}</h5>
            <div className="absolute bottom-0 right-0 text-8xl opacity-10">
              <FaQuestion />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Questions;
