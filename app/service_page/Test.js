"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollIndicatorPage() {
  const contentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start start", "end end"],
  });

  // Calculate both position and height
  const indicatorPosition = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  const indicatorHeight = "100px"; // Fixed height for moving indicator

  return (
    <div className="flex min-h-screen">
      {/* Sidebar with moving scroll indicator */}
      <div className=" w-16 relative">
        <div className="sticky top-12 h-[calc(100vh-6rem)] flex justify-center">
          <div className="w-[3px] bg-gray-300 dark:bg-gray-600 h-full relative">
            <motion.div
              className="w-[3px] bg-fuchsia-500 absolute left-1/2 -translate-x-1/2 rounded-full"
              style={{
                height: indicatorHeight,
                top: indicatorPosition,
                y: "-50%", // Centers the indicator on its position
              }}
            />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div ref={contentRef} className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">Scroll Progress Demo</h1>

        {[...Array(10)].map((_, i) => (
          <section key={i} className="mb-32">
            <h2 className="text-2xl font-semibold mb-4">Section {i + 1}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed
              auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
            </p>
            <div className="h-64 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg"></div>
          </section>
        ))}
      </div>
    </div>
  );
}
