"use client";
import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useAnimation,
  useMotionValueEvent,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Cormorant_Garamond } from "next/font/google";
import Process from "../component/Process";

const comorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin, 'italics"],
});

export default function Solution({ service }) {
  const sectionRef = useRef(null);
  const thumbHeight = 100; // Or however tall your scroll thumb is
  const [isActive, setIsActive] = useState(false);
  const indicatorRef = useRef(null);
  const { scrollYProgress: sectionBG } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });
  const { scrollYProgress: scrollBar } = useScroll({
    target: indicatorRef,
    offset: ["start center", "end center"],
  });
  const indicatorPosition = useTransform(scrollBar, [0, 1], ["0%", "94%"]);
  const indicatorHeight = "100px"; // Fixed height for moving indicator

  useMotionValueEvent(sectionBG, "change", (latest) => {
    const shouldBeActive = latest > 0.1 && latest < 1;
    setIsActive(shouldBeActive);
  });
  return (
    <motion.div
      ref={sectionRef}
      className="relative  w-full py-24 px-5"
      initial={{ backgroundColor: "#ffffff", color: "#111111" }}
      animate={{
        backgroundColor: isActive ? "#030018" : "#ffffff",
        color: isActive ? "#ffffff" : "#111111",
        transition: { duration: 0.8 },
      }}
    >
      {/* Headings */}
      <div className="relative pl-20 text-sm uppercase mb-6 tracking-[10px] font-thin">
        <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-16 h-px bg-gray-500"></span>
        {service.tag}
      </div>
      <h3
        className={`${comorant.className} text-5xl lg:text-6xl xl:text-8xl uppercase italic mb-5 pl-20`}
      >
        {service.solutionTitle}
      </h3>
      <p className=" max-w-4xl pl-20 mb-24">{service.solutionDesc}</p>

      {/* Scrollable Section */}
      <div ref={indicatorRef} className=" pl-10 relative min-h-screen">
        {/* Sidebar with moving scroll indicator */}
        <div className=" w-16 absolute left-0 top-0 h-full">
          <div className="sticky top-12 h-full flex justify-center">
            <div className="w-[1px] bg-[#38b6ff]/10 h-full relative">
              <motion.div
                className="w-[3px] bg-[#38b6ff] absolute left-1/2 top-0 -translate-x-1/2 rounded-full"
                style={{
                  height: indicatorHeight,
                  top: indicatorPosition,
                }}
              />
            </div>
          </div>
        </div>
        {service.solutionDetails.map((item, idx) => (
          <ScrollCard key={idx} index={idx} {...item} />
        ))}
      </div>
      <div className="w-full">
        <Process
          steps={service.processSteps}
          title={service.processTitle}
          body={service.processBody}
        />
      </div>
    </motion.div>
  );
}

function ScrollCard({ id, title, body, index, useCases }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 100 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative mb-32 pl-20"
    >
      <h5 className="absolute -left-10 top-6 text-sm">{id}</h5>
      <h3 className={`${comorant.className} text-3xl mb-5`}>{title}</h3>
      {/* <p className="text-base text-gray-400 max-w-sm mb-6">{text}</p> */}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4 list-disc"
      >
        <p>{body}</p>
        <div className="shadow-gray-600 shadow rounded-2xl p-2">
          <ul>
            <p className={`${comorant.className} italic text-xl`}>
              Use Cases – Tailored to Your Industry
            </p>
            {useCases.map((item) => (
              <li key={item.id} className="mt-2">
                {item.icon}
                <b>{item.title}: </b>
                {item.desc}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}
