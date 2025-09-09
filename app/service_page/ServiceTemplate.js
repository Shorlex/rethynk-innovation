"use client";
import { Cormorant_Garamond } from "next/font/google";
import Problem from "./Problem";
import Solution from "./Solution";
import Impacts from "./Impacts";
import UseCases from "./Questions";

const comorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin, 'italics"],
});

const ServiceTemplate = ({ service }) => {
  // const bg = "/images/landing_page/for-ai.jpg"

  return (
    <section className="w-full min-h-[200vh">
      {/* Hero Section */}
      <div
        className="w-full h-[80vh] flex justify-start items-end bg-center bg-cover relative mb-24"
        style={{
          backgroundImage: `url(${service.image})`,
        }}
      >
        <div className="bg-gradient-to-r from-white to-transparent w-full h-full absolute top-0 left-0"></div>
        <div className={`z-10 m-10 ${comorant.className}`}>
          <h1 className="text-6xl md:text-7xl lg:text-8xl uppercase">
            {service.title}
          </h1>
          <p className="uppercase tracking-[10px] text-sm text-gray-500 font-thin w-90 ml-3">
            {service.tag}{" "}
          </p>
        </div>
      </div>
      {/* Problem we solve */}
      <Problem service={service} />
      {/* Solutions we offer */}
      <Solution service={service} />
      {/* Real Impact – Results Our Clients See */}
      <Impacts service={service} />
      {/* Use Cases – Tailored to Your Industry */}
      <UseCases service={service} />
    </section>
  );
};

export default ServiceTemplate;
