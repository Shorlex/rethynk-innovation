"use client";
import { Cormorant_Garamond } from "next/font/google";
import AboutClient from "./AboutClient";
import Approach from "./Approach";
import SolutionDelivered from "./SolutionDelivered";
import Feedback from "./Feedback";

const comorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const PortfolioTemplate = ({ portfolio }) => {
  return (
    <section className="w-full min-h-[200vh]">
      {/* Hero Section */}
      <div className="w-full h-[80vh] relative">
        <div className="w-full h-full absolute top-0 left-0 bg-black/85 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={portfolio.bgVideo} type="video/webm" />
          <source src={portfolio.bgVideo} type="video/mp4" />
          {/* Fallback text */}
          Your browser does not support the video tag.
        </video>
        <div
          className={`z-10 relative flex justify-start items-end h-full p-10 ${comorant.className}`}
        >
          <div className="text-white uppercase">
            <h1 className="text-6xl  md:text-7xl lg:text-8xl">
              {portfolio.name}
            </h1>
            <p className="tracking-[10px] text-sm font-thin w-full lg:w-1/2 ml-3">
              {portfolio.tag}{" "}
            </p>
          </div>
        </div>
      </div>
      {/* About Client Section */}
      <AboutClient font={comorant.className} portfolio={portfolio} />
      {/* Approach Section */}
      <Approach font={comorant.className} portfolio={portfolio} />
      {/* Solution Delivered */}
      <SolutionDelivered portfolio={portfolio} />
      {/* Clients Feedback */}
      <Feedback portfolio={portfolio} />
    </section>
  );
};

export default PortfolioTemplate;
