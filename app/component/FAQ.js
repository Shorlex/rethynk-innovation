"use client";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Cormorant_Garamond } from "next/font/google";
import { useRouter } from "next/navigation";
import Link from "next/link";

const comorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin, 'italics"],
});

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const route = useRouter()

  const faqs = [
    {
      question: "What's the first step in our digital transformation journey?",
      answer:
        "We begin with a complimentary Discovery Audit where we analyze your current tech stack, identify inefficiencies, and map out a 90-day action plan with clear KPIs. Most clients see immediate opportunities for 20-30% efficiency gains from this initial assessment.",
    },
    {
      question:
        "How do you ensure our team adopts new technologies successfully?",
      answer:
        "Our Change Acceleration Program includes: 1) Department-specific training 2) AI-powered knowledge bases 3) On-demand support during rollout. 92% of our clients achieve full adoption within the first 60 days.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "While our framework works across sectors, we have deep expertise in healthcare (HIPAA-compliant systems), financial services (AI fraud detection), and manufacturing (IoT automation). That said, we've successfully transformed businesses in 14+ industries.",
    },
    {
      question: "Can we phase the transformation to align with our budget?",
      answer:
        "Absolutely. Our roadmap includes milestone-based implementation options. For example, you might start with workflow automation (3-6 week ROI), then scale to AI tools. We'll align investments with your cash flow priorities.",
    },
    {
      question: "How do you measure the success of our transformation?",
      answer:
        "We track both operational metrics (process speed, error rates) and business outcomes (customer acquisition cost, LTV). Every client receives a real-time dashboard showing ROI across 12+ KPIs, updated weekly.",
    },
  ];

  return (
    <section className="px-5 lg:px-24 pt-24">
      <div className="xl:flex xl:gap-10 justify-between">
        <div className="xl:w-1/2 w-full xl:flex xl:flex-col justify-center">
          <h2
            className={`${comorant.className} text-5xl lg:text-6xl uppercase italic`}
          >
            Your Digital Transformation Questions
          </h2>
          <p className={`text-2xl mt-5 ${comorant.className}`}>
            Clear answers to help you make confident decisions about your
            business evolution
          </p>
        </div>

        <div className="w-full xl:w-1/2">
          <motion.div
            className="space-y-4 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border-b border-gray-200 pb-4"
                whileHover={{ x: 5 }}
              >
                <button
                  className="flex justify-between items-center w-full text-left py-4 cursor-pointer"
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-${index}`}
                >
                  <h3
                    className={`text-lg font-medium ${comorant.className} md:text-xl`}
                  >
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-600 transition-transform ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      id={`faq-${index}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        transition: { duration: 0.3, ease: "easeInOut" },
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                        transition: { duration: 0.2, ease: "easeInOut" },
                      }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 pb-4">{faq.answer}</p>
                      {index === 0 && (
                        <Link
                          className="text-blue-600 font-medium text-sm hover:underline"
                          href={"https://cal.com/abubakar-abdulkadir-jaqpvc"}
                          target="_blank"
                          onClick={(e) => {
                            e.stopPropagation();
                            // route.push(
                            //   "https://cal.com/abubakar-abdulkadir-jaqpvc"
                            // );
                            // Add your calendar booking logic here
                          }}
                        >
                          Book Your Free Audit →
                        </Link>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* <motion.div
        className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl text-center border border-gray-100 shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-xl font-bold mb-3">
          Ready to transform your business?
        </h3>
        <p className="mb-6 max-w-md mx-auto text-gray-600">
          Get customized answers to your specific challenges in a 30-minute
          strategy session.
        </p>
        <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-md transition-all">
          Schedule Free Consultation
        </button>
      </motion.div> */}
    </section>
  );
};

export default FAQ;
