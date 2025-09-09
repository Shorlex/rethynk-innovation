"use client";
import { Cormorant_Garamond } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";

const comorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const services = [
  {
    id: 1,
    title: "AI-Powered Business Optimization",
    desc: "Automate repetitive tasks, predict customer needs, and make smarter decisions—all with AI tools tailored to your business.",
    list: [
      "Chatbots that handle 24/7 customer inquiries",
      "AI-driven inventory forecasting to cut waste",
      "Automated invoicing and document processing",
    ],
    image: "/images/landing_page/service-1.webp",
    even: false,
    delay: 0,
  },
  {
    id: 2,
    title: "Next-Gen Digital Experiences",
    desc: "Websites and apps that don’t just impress—they convert. We build fast, intuitive digital platforms designed to engage customers and drive sales.",
    list: [
      "Mobile-friendly sites with seamless checkout",
      "Interactive product demos (AR/3D)",
      "Membership portals for loyal customers",
    ],
    image: "/images/landing_page/service-2.webp",
    even: true,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Enterprise-Grade Tech Modernization",
    desc: "Ditch slow, outdated systems. We upgrade your tech to be faster, safer, and easier to use—so your business runs smoothly at any scale.",
    list: [
      "Cloud-based tools accessible from anywhere",
      "Blockchain/DLT integration for transparency",
      "Bulletproof security to protect customer data",
    ],
    image: "/images/landing_page/service-3.webp",
    even: false,
    delay: 1.2,
  },
  {
    id: 4,
    title: "Data as a Growth Engine",
    desc: "Turn numbers into actionable strategies. We help you track what matters, spot trends, and make decisions that grow revenue.",
    list: [
      "Dashboards showing real-time sales performance",
      "Customer behavior insights to refine marketing",
      "Automated reports (no more spreadsheet headaches)",
    ],
    image: "/images/landing_page/service-4.webp",
    even: true,
    delay: 1.8,
  },
];

const About = () => {
  return (
    <section className="w-full  px-6 lg:px-24 lg:py-15">
      <div className="block lg:flex justify-between">
        <div className="w-full lg:w-1/2 mb-3">
          <h2
            className={`${comorant.className} text-4xl md:text-5xl lg:text-6xl`}
          >
            We Engineer Digital Alchemy That Transforms Brands Into Legends
          </h2>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-20 flex items-center">
          <p className="text-lg">
            At ReThynk, we fuse strategy, innovation, and technology to catalyze
            metamorphosis. From disruptive brand identities to AI-powered
            digital ecosystems, we architect experiences that don’t just
            elevate—they redefine industries.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 lg:gap-6 xl:gap-10 justify-center xl:justify-between mt-10 xl:mt-20">
        {services.map((item) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "linear", delay: item.delay }}
            viewport={{ once: true }}
            key={item.id}
            className={`lg:w-[300px] w-[200px] p-2 lg:p-5 h-[300px] lg:h-[500px] shadow-xl rounded-xl border-[.5px] border-gray-200 relative
         ${item.even ? "xl:mt-20" : "xl:mt-0"} `}
          >
            <h3 className={`${comorant.className} text-2xl font-bold`}>
              {item.title}
            </h3>
            <p className="mt-4">{item.desc}</p>
            <ul className="mt-4 hidden lg:block">
              {item.list.map((list, i) => (
                <li key={i} className="flex gap-1 mt-1">
                  <span className="text-red-500">✔</span>
                  <span>{list}</span>
                </li>
              ))}
            </ul>
            <Image
              src={item.image}
              width={100}
              height={100}
              alt={item.title}
              className="opacity-15 absolute bottom-2 right-2"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
