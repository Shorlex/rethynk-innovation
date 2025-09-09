"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { our_services } from "../data/servicesDB";

const navItems = [
  {
    id: 1,
    link: "Home",
    path: "/",
  },
  {
    id: 2,
    link: "Our Process",
    path: "/our_process",
  },
  {
    id: 3,
    link: "Contact Us",
    path: "/contact_us",
  },
];


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  return (
    <>
      {/* Hamburger/X Button */}
      <div
        className={`flex justify-between w-full p-5 md:py-2 md:px-24 sticky top-0 transition-colors duration-500 ${
          isOpen ? "bg-transparent" : "bg-white delay-1500"
        }  z-50`}
      >
        <div>
          <Image
            src={"/images/logo_light.png"}
            width={150}
            height={150}
            alt="logo"
            onClick={() => router.push("/")}
            className={`transition-opacity duration-500 cursor-pointer ${
              isOpen
                ? "opacity-0 lg:delay-400"
                : "opacity-100 delay-500 lg:delay-200"
            }`}
          />
        </div>
        <button
          className="p-2 h-9 mt-4 cursor-pointer border rounded border-black shadow shadow-gray-500 hover:shadow-white flex justify-center items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg width="20" height="20" viewBox="0 0 23 23">
            <motion.path
              fill="transparent"
              strokeWidth="3"
              stroke={isOpen ? "#38b6ff" : "black"}
              strokeLinecap="round"
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
              animate={isOpen ? "open" : "closed"}
            />
            <motion.path
              fill="transparent"
              strokeWidth="3"
              stroke={isOpen ? "#38b6ff" : "black"}
              strokeLinecap="round"
              d="M 2 9.423 L 20 9.423"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              animate={isOpen ? "open" : "closed"}
              transition={{ duration: 0.1 }}
            />
            <motion.path
              fill="transparent"
              strokeWidth="3"
              stroke={isOpen ? "#38b6ff" : "black"}
              strokeLinecap="round"
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
              animate={isOpen ? "open" : "closed"}
            />
          </svg>
        </button>
      </div>

      {/* Full-screen Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0  z-40 bg-cover bg-center"
            initial={{ clipPath: "circle(0px at calc(100% - 0px) 0px)" }}
            animate={{
              clipPath: `circle(2000px at calc(100% - 40px) 40px)`,
            }}
            exit={{
              clipPath: "circle(0px at calc(100% - 0px) 0px)",
            }}
            transition={{ type: "spring", stiffness: 40, damping: 20 }}
          >
            <div className="bg-[#030018] h-screen w-full relative">
              <motion.div
                className="w-full h-screen absolute top-0 left-0 bg-cover bg-no-repeat"
                style={{
                  backgroundImage: "url('/images/landing_page/nav-bg.png')",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 3 }}
              ></motion.div>
              <motion.div className="flex absolute h-screen px-24 items-center justify-center lg:mt-0 mt-28">
                <motion.ul
                  className="flex flex-col gap-8 font-thin"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 1 }}
                >
                  {our_services.map((item) => (
                    <motion.li
                      key={item.id}
                      className="text-white"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 50, opacity: 0 }}
                      transition={{ delay: 0.6 * item.id }}
                    >
                      <a
                        href={`/services/${item.slug}`}
                        className="relative group hover:text-gray-400"
                      >
                        <span>{item.tag}</span>
                        <br></br>
                        <span className="text-4xl mb-2">{item.title}</span>
                        <span
                          className="absolute left-0 bottom-0 h-[.5px] text-gray-500 bg-current 
                  transform origin-left transition-all duration-300 
                  scale-x-0 group-hover:scale-x-100 w-full"
                        ></span>
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>
                <div></div>
              </motion.div>
              <motion.ul
                className="h-full flex flex-col lg:items-center lg:justify-center p-24 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
              >
                {navItems.map((item) => (
                  <motion.li
                    key={item.id}
                    className="text-3xl font-thin"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{ delay: 0.2 * item.id }}
                  >
                    <a
                      href={item.path}
                      className="text-white relative group hover:text-gray-400"
                    >
                      {item.link}
                      <span
                        className="absolute left-0 bottom-0 h-[.5px] text-gray-500 bg-current 
                  transform origin-left transition-all duration-300 
                  scale-x-0 group-hover:scale-x-100 w-full"
                      ></span>
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
