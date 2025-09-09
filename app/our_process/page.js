"use client";
import { Cormorant_Garamond } from "next/font/google";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const comorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const processes = [
  {
    id: 1,
    bg: "from-red-300",
    title: "Discovery & Assessment",
    subtitles: "Laying the foundation for transformation",
    delay: 0.1,
    even: false,
    process: [
      "In-depth audits: We analyze your current tech stack, workflows, and pain points using proprietary assessment frameworks.",
      "Competitive benchmarking: Compare your digital maturity against industry leaders.",
      "AI opportunity mapping: Identify 3–5 high-impact automation use cases specific to your business.",
    ],
    impact: "Client impact:",
    result: [
      "✅ Reduce operational blind spots with data-driven insights.",
      "✅ Prioritize initiatives with the highest ROI potential.",
    ],
  },
  {
    id: 2,
    bg: "from-blue-300",
    title: "Strategic Roadmapping",
    subtitles: "Your blueprint for digital evolution",
    delay: 0.2,
    even: true,
    process: [
      "Phased implementation plan: 12–24 month timeline with quarterly milestones.",
      "Risk mitigation: Anticipate adoption challenges with contingency planning.",
      "ROD (Return on Digital) projections: Financial modeling for each initiative.",
    ],
    impact: "Why it matters:",
    result: [
      "📈 83% of transformations fail without clear roadmaps (McKinsey).",
      "🛠️ We align technology with your business KPIs, not just IT goals.",
    ],
  },
  {
    id: 3,
    bg: "from-purple-300",
    title: " Technology Implementation",
    subtitles: "Seamless integration of cutting-edge solutions",
    delay: 0.3,
    even: false,
    process: [
      "Cloud & AI deployment: Migrate legacy systems to scalable architectures (AWS/Azure/GCP).",
      "Change management: Customized training programs for teams at all levels.",
      "Zero-downtime transitions: Our 'parallel runway' approach keeps operations running.",
    ],
    impact: "Featured capabilities:",
    result: [
      "🤖 AI-powered workflow automation.",
      "🔒 Enterprise-grade security compliance",
      "🌐 Hybrid cloud configurations",
    ],
  },
  {
    id: 4,
    bg: "from-amber-300",
    title: "Optimization",
    subtitles: "Continuous improvement cycle",
    delay: 0.4,
    even: true,
    process: [
      "Performance analytics: Real-time dashboards track system efficiency.",
      "Quarterly tuning: Adjust algorithms and workflows based on usage data.",
      "Cost optimization: Right-size cloud resources to avoid overspending.",
    ],
    impact: "Results you’ll see:",
    result: [
      "⚡ 30–50% faster process execution after 6 months",
      "💡 Proactive issue resolution before disruptions occur",
    ],
  },
  {
    id: 5,
    bg: "from-cyan-300",
    title: "Growth Scaling",
    subtitles: "Future-proof expansion",
    delay: 0.5,
    even: false,
    process: [
      "Elastic architectures: Automatically scale for demand spikes or new markets.",
      "Modular upgrades: Add new capabilities (IoT, blockchain) without re-platforming.",
      "Innovation partnerships: Access our ecosystem of AI and automation vendors.",
    ],
    impact: "Transformational outcomes:",
    result: [
      "🚀 Launch new digital products 60% faster.",
      "🌍 Support global teams with unified systems.",
    ],
  },
];

const ProcessItem = ({ item }) => {
  const controls = useAnimation();

  return (
    <motion.div
      initial={{ rotateX: 5, rotateY: -5, scale: 0.98 }}
      whileInView={{
        rotateX: 0,
        rotateY: 0,
        scale: 1.02,
      }}
      onViewportEnter={() =>
        controls.start({
          rotateX: 0,
          rotateY: 0,
          scale: 1.02,
        })
      }
      onViewportLeave={() =>
        controls.start({
          rotateX: 0,
          rotateY: 0,
          scale: 1.02,
        })
      }
      viewport={{ once: false, margin: "-100px 0px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`w-full md:w-9/10 mx-auto py-10 mt-10 bg-gradient-to-b ${item.bg} to-white flex flex-wrap justify-between gap-10 p-10 rounded-xl shadow-lg`}
    >
      <div className="relative">
        <span
          className={`${comorant.className} text-gray-600 opacity-10 absolute -top-30 -left-10 text-[200px]`}
        >
          {item.id}
        </span>
        <h3 className={`${comorant.className} text-4xl`}>{item.title}</h3>
        <p className="font-bold italic">{item.subtitles}</p>
      </div>
      <div className="xl:w-1/2 flex flex-col gap-5 justify-center">
        <ul>
          {item.process.map((list, i) => (
            <li key={i}>{list}</li>
          ))}
        </ul>
        <p>{item.impact}</p>
        <ul>
          {item.result.map((resultList, i) => (
            <li key={i}>{resultList}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const OurProcess = () => {
  return (
    <section className="w-full min-h-screen pb-24">
      {/* Hero */}
      <div
        className="w-full h-[80vh] flex justify-start items-end bg-top bg-cover relative"
        style={{
          backgroundImage: 'url("/images/contact_us/process-hero-bg.jpg")',
        }}
      >
        <div className="bg-gradient-to-t from-white to-transparent w-full h-full absolute top-0 left-0"></div>
        <div className={`z-10 lg:m-24 m-10 ${comorant.className}`}>
          <h1 className="text-6xl md:text-7xl lg:text-8xl uppercase">
            Our Process
          </h1>
          <p className="uppercase tracking-[10px] text-sm text-gray-500 font-thin w-90 ml-3">
            From Legacy Systems to Future-Ready Operations{" "}
          </p>
        </div>
      </div>

      {/* Process */}
      <div>
        <div className="w-full md:w-4/5 lg:w-3/5 mx-auto py-24 ">
          <h3 className={`text-center text-3xl ${comorant.className}`}>
            At ReThynk Innovation, we don’t just implement technology, we
            orchestrate end-to-end evolution. Our proven 5-phase methodology
            ensures your transformation delivers measurable ROI while minimizing
            disruption.
          </h3>
        </div>
        <div>
          {processes.map((item) => (
            <ProcessItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
