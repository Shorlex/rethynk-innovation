"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { Cormorant_Garamond } from "next/font/google";
import Button from "./Button";
import Projects from "./Projects";
import Process from "./Process";
import { useRouter } from "next/navigation";
import {
  Search,
  LayoutDashboard,
  Cpu,
  Settings,
  Zap,
  BarChart,
} from "lucide-react";
import OurTools from "./OurTools";

const comorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const steps = [
    {
      id: 1,
      icon: <Search className="w-10 h-10" />,
      title: "Discovery & Assessment",
      subtitle: "Laying the foundation for transformation",
      content:
        "We conduct comprehensive audits of your current digital infrastructure, identify pain points, and map out opportunities for AI and automation integration.",
    },
    {
      id: 2,
      icon: <LayoutDashboard className="w-10 h-10" />,
      title: "Strategic Roadmapping",
      subtitle: "Your blueprint for digital evolution",
      content:
        "Our team creates a phased implementation plan with clear milestones, ROI projections, and risk mitigation strategies tailored to your business objectives.",
    },
    {
      id: 3,
      icon: <Cpu className="w-10 h-10" />,
      title: "Technology Implementation",
      subtitle: "Seamless integration of cutting-edge solutions",
      content:
        "We deploy cloud architectures, AI tools, and data systems with minimal disruption to your operations, including staff training and change management.",
    },
    {
      id: 4,
      icon: <Settings className="w-10 h-10" />,
      title: "Optimization",
      subtitle: "Continuous improvement cycle",
      content:
        "Post-implementation, we refine systems based on real-world performance data, ensuring your digital infrastructure evolves with your needs.",
    },
    {
      id: 5,
      icon: <BarChart className="w-10 h-10" />,
      title: "Growth Scaling",
      subtitle: "Future-proof expansion",
      content:
        "We help scale your digital capabilities to support new markets, products, and business models with elastic, secure architectures.",
    },
  ];

const Portfolio = () => {
  const sectionRef = useRef();
  const [isActive, setIsActive] = useState(false);
  const route = useRouter();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const shouldBeActive = latest > 0.2 && latest < 0.9;
    setIsActive(shouldBeActive);
  });

  const link = () => route.push('/contact_us')

  return (
    <motion.section
      ref={sectionRef}
      className="relative  w-full py-24 px-5"
      initial={{ backgroundColor: "#ffffff", color: "#111111" }}
      animate={{
        backgroundColor: isActive ? "#030018" : "#ffffff",
        color: isActive ? "#ffffff" : "#111111",
        transition: { duration: 0.8 },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "linear", delay: 0.5 }}
        viewport={{ once: true }}
        className="xl:px-24"
      >
        <h2
          className={`${comorant.className} text-5xl lg:text-6xl xl:text-8xl uppercase italic`}
        >
          Strategic, Scalable & Experience-Led Digital Solutions
        </h2>
        <h4 className="text-2xl mt-5 w-4/5">
          Partner with a team that bridges cutting-edge design with business
          transformation. Whether you’re modernizing your brand, rebuilding your
          digital ecosystem, or reimagining customer journeys—we engineer
          experiences that accelerate growth.
        </h4>
        <p className="mt-5">
          We fuse aesthetic precision with functional intelligence, crafting
          interfaces and identities that are:
        </p>

        <ul className="mt-2">
          <li>
            ✔ Future-ready: Built to evolve with emerging tech (AI, Web3).
          </li>
          <li>✔ Performance-optimized: Data-driven designs that convert.</li>
          <li>
            ✔ On-brand everywhere: Consistent storytelling across all
            touchpoints.
          </li>
        </ul>

        <p className="mt-2">
          From startups to enterprises, we design human-centric digital
          futures—where every interaction strengthens your competitive edge.
        </p>
      </motion.div>
      <div className="xl:mx-24">
        <Button
          textOne={"Become a Client"}
          textTwo={"Let's Collaborate"}
          redirect={link}
        />
      </div>
      <Projects />
      <Process
        steps={steps}
        title={"Our Digital Transformation Framework"}
        body={
          "A proven 5-phase approach to modernize businesses across industries"
        }
      />
      <OurTools />
    </motion.section>
  );
};

export default Portfolio;
