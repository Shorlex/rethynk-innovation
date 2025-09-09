"use client";
import { Cormorant_Garamond } from "next/font/google";
import { motion } from "framer-motion";

const comorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin, 'italics"],
});

const Impacts = ({service}) => {
  return (
    <section className="w-full xl:p-24 px-5 xl:flex">
      <div className="xl:w-1/3 w-full flex items-center">
        <h2
          className={`text-4xl lg:text-5xl xl:text-6xl font-thin italic ${comorant.className}`}
        >
          {service.impactTitle}
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-3 mt-10 xl:w-2/3 w-full ">
        {service.impactDetails.map((item) => (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "linear", delay: item.id * 0.4 }}
            viewport={{ once: true }}
            key={item.id}
            className="w-[200px] h-[200px] even:mt-20 border border-gray-300 rounded shadow-xl p-5"
          >
            <h2 className="text-6xl">{ item.icon }</h2>
            <h5 className="mt-5">{ item.body }</h5>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Impacts;
