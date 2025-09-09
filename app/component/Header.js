"use client";
import Navbar from "./NavBar";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <>
      <motion.div
        className="w-full md:flex md:justify-center hidden"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "linear", delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h2 className="uppercase tracking-[20px] font-thin p-5">
          Digital Transformation Agency
        </h2>
      </motion.div>
      <Navbar />
    </>
  );
};

export default Header;
