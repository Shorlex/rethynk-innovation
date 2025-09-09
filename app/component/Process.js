"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Cormorant_Garamond } from "next/font/google";
import Button from "./Button";
import { useRouter } from "next/navigation";

const comorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin, 'italics"],
});

const Process = ({steps, title, body}) => {
  const [activeStep, setActiveStep] = useState(0);
  const route = useRouter()

  

  const progressValues = [0, 25, 50, 75, 100];

  const link = () => route.push('/our_process')

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "linear", delay: .3 }}
      viewport={{ once: true }}
      className="px-5 lg-px-24 py-12 lg:pt-48 lg:flex"
    >
      <div className="lg:w-1/2 lg:mb-0 mb-15 lg:px-10">
        <h1
          className={`${comorant.className} lg:text-6xl text-4xl lg:mb-6 font-thin italic`}
        >
          {title}
        </h1>
        <p className="text-xl mt-2 lg:w-90">
          {body}
        </p>
      </div>

      <div>
        <div className="relative mb-10">
          {/* Progress Bar */}
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
              initial={{ width: "0%" }}
              animate={{ width: `${progressValues[activeStep]}%` }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </div>

          {/* Steps */}
          <div className="flex justify-between relative -mt-7">
            {steps.map((step, index) => (
              <motion.button
                key={step.id}
                className={`flex flex-col items-center group cursor-pointer`}
                onClick={() => setActiveStep(index)}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className={`w-14 h-14 rounded-full flex items-center justify-center border-4 ${
                    index <= activeStep
                      ? "border-blue-500 bg-white shadow-lg"
                      : "border-gray-300 bg-gray-100"
                  }`}
                  animate={{
                    scale: index === activeStep ? 1.15 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  <span
                    className={
                      index <= activeStep ? "text-blue-500" : "text-gray-500"
                    }
                  >
                    {step.icon}
                  </span>
                </motion.div>
                <span
                  className={`mt-3 text-sm font-medium ${
                    index <= activeStep ? "text-gray-500" : "text-[#030018]"
                  }`}
                >
                  Phase {index + 1}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Content */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=" rounded-xl shadow shadow-gray-100"
        >
          <div className="flex items-start gap-6 relative overflow-hidden p-8">
            <span
              className={`${comorant.className} text-gray-600 opacity-30 absolute -top-30 left-0 text-[200px]`}
            >
              {steps[activeStep].id}
            </span>
            <div>
              <h2 className="text-2xl font-bold">{steps[activeStep].title}</h2>
              <p className="text-[#38b6ff] font-medium mb-4">
                {steps[activeStep].subtitle}
              </p>
              <p className=" leading-relaxed">{steps[activeStep].content}</p>
            </div>
          </div>
        </motion.div>
        <Button
          textOne={"Explore our process"}
          textTwo={"Learn More"}
          redirect={link}
        />
      </div>
    </motion.div>
  );
};

export default Process;
