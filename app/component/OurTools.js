"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const categories = [
  {
    title: "AI-Powered Business Optimization",
    desc: "Harness AI to automate, predict, and optimize operations",
    tools: [
      { name: "⚡Zapier AI", icon: "/images/tools/for-ai/zapia-logo.png" },
      {
        name: "🤖Microsoft Copilot",
        icon: "/images/tools/for-ai/Microsoft-Ai-Copilot.jpg",
      },
      {
        name: "🧠TensorFlow",
        icon: "/images/tools/for-ai/TensorFlow-logo.png",
      },
      { name: "⚙️UiPath", icon: "/images/tools/for-ai/UiPath-logo.png" },
      {
        name: "☁️Google Cloud AI",
        icon: "/images/tools/for-ai/google-ai-logo.png",
      },
    ],
  },
  {
    title: "Next-Gen Digital Experiences",
    desc: "Deliver seamless digital platforms for customers & employees",
    tools: [
      { name: "🌐Next.js", icon: "/images/tools/for-digital/nextjs.jpg" },
      {
        name: "🎨Tailwind CSS",
        icon: "/images/tools/for-digital/tailwindcss.png",
      },
      {
        name: "🛒Shopify",
        icon: "/images/tools/for-digital/shopify.jpg",
      },
      {
        name: "📅Calendly",
        icon: "/images/tools/for-digital/calendly.png",
      },
      {
        name: "📊HubSpot CRM",
        icon: "/images/tools/for-digital/hubspot.jpg",
      },
    ],
  },
  {
    title: "Enterprise-Grade Tech Modernization",
    desc: "Future-ready infrastructure, security, and scalability",
    tools: [
      {
        name: "☁️AWS",
        icon: "/images/tools/for-modern/aws.png",
      },
      {
        name: "🔷Microsoft Azure",
        icon: "/images/tools/for-modern/azure.jpg",
      },
      {
        name: "☁️Google",
        icon: "/images/tools/for-modern/google.jpg",
      },
      {
        name: "⛓️Polygon (Web3)",
        icon: "/images/tools/for-modern/polygon.png",
      },
      { name: "🔑Okta", icon: "/images/tools/for-modern/okta.jpg" },
    ],
  },
  {
    title: "Data as a Growth Engine",
    desc: "Turn raw data into actionable insights",
    tools: [
      { name: "📊Power BI", icon: "/images/tools/for-data/power-bi.webp" },
      {
        name: "📈Google Data Studio",
        icon: "/images/tools/for-data/google-data-studio.jpg",
      },
      { name: "❄️SnowFlake", icon: "/images/tools/for-data/snowflake.png" },
      {
        name: "🌀Apache Kafka",
        icon: "/images/tools/for-data/apache-kafka.webp",
      },
      {
        name: "🔍RapidMiner",
        icon: "/images/tools/for-data/rapidminer.png",
      },
    ],
  },
];

export default function ToolsSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Our Tools & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="rounded-2xl shadow shadow-gray-400 p-6 flex flex-col items-center"
            >
              <h3 className="text-xl font-semibold mb-2 text-center">
                {cat.title}
              </h3>
              <p className="text-gray-500 text-sm text-center mb-6">
                {cat.desc}
              </p>

              <div className="grid grid-cols-2 gap-4 w-full">
                {cat.tools.map((tool, j) => (
                  <motion.div
                    key={j}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center justify-center p-3 rounded-xl shadow-sm shadow-gray-400 cursor-pointer hover:shadow-md transition"
                  >
                    <Image
                      src={tool.icon}
                      width={40}
                      height={40}
                      alt={tool.name}
                    />
                    <p className="text-xs mt-2 font-medium text-center">
                      {tool.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
