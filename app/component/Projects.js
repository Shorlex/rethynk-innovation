"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { our_work } from "../data/portfolioDB";

// const projects = [
//   {
//     id: 1,
//     name: "Smart Interiors",
//     image: "/images/portfolio/SmartInteriors.png",
//     path: "",
//     middle: false,
//     delay: 0.6,
//   },
//   {
//     id: 2,
//     name: "Lumenave",
//     image: "/images/portfolio/LUMENAVE_International.png",
//     path: "",
//     middle: true,
//     delay: 1.2,
//   },
//   {
//     id: 3,
//     name: "Zahls",
//     image: "/images/portfolio/Zahls Payments.png",
//     path: "",
//     middle: false,
//     delay: 1.8,
//   },
//   {
//     id: 4,
//     name: "InteriorsByKaffy",
//     image: "/images/portfolio/InteriorsByKaffy.png",
//     path: "",
//     middle: false,
//     delay: 2.4,
//   },
//   {
//     id: 5,
//     name: "Echoes of Africa",
//     image: "/images/portfolio/Echoes-of-Africa.png",
//     path: "",
//     middle: true,
//     delay: 3,
//   },
//   {
//     id: 6,
//     name: "Home Hive",
//     image: "/images/portfolio/HomeHive.png",
//     path: "",
//     middle: false,
//     delay: 3.6,
//   },
// ];



const Projects = () => {
  return (
    <div className="py-10 w-full min-h-screen flex flex-wrap justify-center gap-10 xl:gap-5">
      {our_work.map((item) => (
        <Link
          key={item.id}
          href={`/portfolio/${item.slug}`}
          className={`w-[400px] h-[300px] ${
            item.middle ? "mt-20" : "mt-0"
          } hover:text-gray-400 relative group`}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="w-full h-9/10 relative mb-2"
          >
            <Image src={item.image} fill alt={item.name} />
          </motion.div>
          <span className="relative">
            {item.name}
            <span
              className="absolute left-0 bottom-0 h-[.5px] text-gray-500 bg-current 
                  transform origin-left transition-all duration-300 
                  scale-x-0 group-hover:scale-x-100 w-full"
            ></span>
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Projects;
