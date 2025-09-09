"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Cormorant_Garamond } from "next/font/google";

const comorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"]
});

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      quote:
        "ReThynk transformed our legacy systems into AI-ready infrastructure in just 14 weeks. Their phased approach minimized disruption while delivering 40% efficiency gains.",
      author: "Qudus Afolabi",
      role: "CEO, HomeHive",
      avatar: "/images/landing_page/placeholder.jpg",
    },
    {
      quote:
        "We went from explaining our premium value to having clients reference our brand materials during consultations. ReThynk’s strategic approach delivered a 400% increase in qualified leads and positioned us as innovators.",
      author: "Esther Emmanuel",
      role: "President, SmartInteriors",
      avatar: "/images/landing_page/placeholder.jpg",
    },
    {
      quote:
        "ReThynk didn't just design a logo, they engineered our entire brand experience. Their 'Performance Redefined' concept helped us command premium pricing while making luxury car buying transparent and exciting.",
      author: "Abdulkadir Abdulrahman",
      role: "CEO, RAHNEE Elite Global Auto",
      avatar: "/images/landing_page/placeholder.jpg",
    },
    {
      quote:
        "Before Rethynk, our team was drowning in spreadsheets and missed orders. Now, automation handles the grunt work, and we’ve scaled our business without adding headcount. What used to take days happens in minutes—our operational efficiency has completely transformed. Rethynk didn’t just give us tools; they gave us time to focus on growth.",
      author: "Omar Neema",
      role: "Operations Head, UrbanTrend Retail",
      avatar: "/images/landing_page/placeholder.jpg",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (hovered) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => {
     if(intervalRef.current) clearInterval(intervalRef.current);
    }
  }, [testimonials.length, hovered]);

  return (
    <section className="w-full xl:p-24 py-24 px-5 overflow-hidden ">
      <div>
        {/* Heading with subtle animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2
            className={`text-4xl lg:text-5xl xl:text-6xl font-thin ${comorant.className}`}
          >
            Trusted by Innovators
          </h2>
          <p className="text-lg mt-5">
            Don't just take our word for it—here's what transformation partners
            say
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-white p-8 rounded-xl shadow-md max-w-4xl mx-auto min-h-70"
            >
              <Quote className="w-8 h-8 text-blue-500 mb-6 opacity-20" />
              <p className="text-gray-600">
                {testimonials[currentIndex].quote}
              </p>
              <div className="flex items-center mt-3">
                <div className="w-14 h-14 rounded-full bg-gray-100 overflow-hidden mr-4">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">
                    {testimonials[currentIndex].author}
                  </h4>
                  <p className="text-gray-600 text-sm italic">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={() => {
              if (intervalRef.current) clearInterval(intervalRef.current);
              prevTestimonial();
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={() => {
              if (intervalRef.current) clearInterval(intervalRef.current);
              nextTestimonial();
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === index ? "bg-blue-600" : "bg-gray-300"
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Conversion CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-medium text-gray-800 mb-4">
            Ready to experience transformation?
          </h3>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all">
            Schedule Free Strategy Session
          </button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Testimonials;
