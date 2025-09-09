"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { Cormorant_Garamond } from "next/font/google";
import Button from "./Button";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const comorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin, 'italics"],
});

const Footer = () => {
  const sectionRef = useRef();
  const [isActive, setIsActive] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

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
   {
     id: 4,
     link: "Web",
     path: "/web",
   },
   {
     id: 5,
     link: "Tech",
     path: "/cloud",
   },
   {
     id: 6,
     link: "Data",
     path: "/branding",
   },
   {
     id: 7,
     link: "AI/ML",
     path: "/ui_ux",
   },
 ];

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const shouldBeActive = latest > 0.3 && latest < 0.9;
    setIsActive(shouldBeActive);
    console.log(shouldBeActive);
  });

  const path = "https://cal.com/abubakar-abdulkadir-jaqpvc";

  const blank = () => window.open(path, "_blank", "noopener,noreferrer");

  return (
    <motion.footer
      ref={sectionRef}
      className="relative  w-full pt-24 px-5"
      initial={{ backgroundColor: "#ffffff", color: "#111111" }}
      animate={{
        backgroundColor: isActive ? "#030018" : "#ffffff",
        color: isActive ? "#ffffff" : "#111111",
        transition: { duration: 0.8 },
      }}
    >
      <div className="xl:px-24 w-full lg:w-[900px]">
        <h2
          className={`${comorant.className} text-5xl lg:text-6xl xl:text-8xl uppercase italic`}
        >
          Ready to transform your business?
        </h2>
        <h4 className="text-2xl mt-5 w-4/5">
          Get customized answers to your specific challenges in a 30-minute
          strategy session.
        </h4>
      </div>
      <div className="xl:mx-24">
        <Button
          textOne={"Schedule Free Consultation"}
          textTwo={"Contact Us"}
          redirect={blank}
          // path={"https://cal.com/abubakar-abdulkadir-jaqpvc"}
        />
      </div>
      <hr className="my-10 text-gray-800"></hr>
      <div className="px-5 lg:px-24">
        <div className="md:flex md:justify-between md:items-center">
          <div>
            <Image
              src={"/images/logo_dark.png"}
              width={300}
              height={300}
              alt="logo_dark"
            />
          </div>
          <div className="flex gap-5 justify-center mt-10 lg:mt-0">
            <FaXTwitter
              size={24}
              className="cursor-pointer hover:text-gray-400"
            />
            <FaLinkedin
              size={24}
              className="cursor-pointer hover:text-gray-400"
            />
            <FaGithub
              size={24}
              className="cursor-pointer hover:text-gray-400"
            />
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <div
            className={`mt-10 lg:ml-10 ${comorant.className} lg:text-3xl text-xl`}
          >
            <h6>Call/Text</h6>
            <Link
              href={"tel:+2349035632364"}
              className="hover:text-gray-400 relative group mb-5"
            >
              +2349035632364
              <span
                className="absolute left-0 bottom-0 h-[.5px] text-gray-500 bg-current 
                  transform origin-left transition-all duration-300 
                  scale-x-0 group-hover:scale-x-100 w-full"
              ></span>
            </Link>
            <br></br>
            <Link
              href={"mailto:info@rethynkinnovation.com"}
              className="hover:text-gray-400 relative group"
            >
              info@rethynkinnovation.com
              <span
                className="absolute left-0 bottom-0 h-[.5px] text-gray-500 bg-current 
                  transform origin-left transition-all duration-300 
                  scale-x-0 group-hover:scale-x-100 w-full"
              ></span>
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link key={item.id} href={item.path} className="hover:text-gray-400">
                <span className="relative group">
                  {item.link}
                  <span
                    className="absolute left-0 bottom-0 h-[.5px] text-gray-500 bg-current 
                  transform origin-left transition-all duration-300 
                  scale-x-0 group-hover:scale-x-100 w-full"
                  ></span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full">
        <p className="text-center text-sm text-gray-600 italic">
          &copy; {new Date().getFullYear()} ReThynk Innovation
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
