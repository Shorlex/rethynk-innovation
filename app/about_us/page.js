// components/ReflectionCarousel.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/images/portfolio/SmartInteriors/desktop-view.png",
  "/images/portfolio/SmartInteriors/laptop-view.png",
  "/images/portfolio/SmartInteriors/tablet-view.png",
  "/images/portfolio/SmartInteriors/mobile-view.png",
];

export default function ReflectionCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // AutoPlay every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getPrevIndex = () => (currentIndex - 1 + images.length) % images.length;
  const getNextIndex = () => (currentIndex + 1) % images.length;

  return (
    <div className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient (like original mousemove effect) */}
      <div className="absolute inset-0 bg-gradient-radial from-neutral-800 to-black" />

      {/* Carousel */}
      <div className="relative w-[800px] h-[650px] flex items-center justify-center perspective-[1000px]">
        {images.map((src, index) => {
          let className =
            "absolute w-[400px] h-[300px] transition-all duration-700 ease-in-out";

          if (index === currentIndex) {
            className += " z-30 scale-100 translate-z-0";
          } else if (index === getPrevIndex()) {
            className +=
              " z-20 opacity-60 -translate-x-[350px] scale-90 rotate-y-45";
          } else if (index === getNextIndex()) {
            className +=
              " z-20 opacity-60 translate-x-[350px] scale-90 -rotate-y-45";
          } else {
            className += " opacity-0 -translate-z-[200px] scale-50 z-10";
          }

          return (
            <div key={index} className={className}>
              <Image
                src={src}
                alt={`Slide ${index}`}
                width={400}
                height={300}
                className="w-full h-full object-cover rounded-lg shadow-lg
                  [box-shadow:0_20px_40px_rgba(0,0,0,0.5)]
                  [--tw-box-reflect:below_10px_linear-gradient(transparent_0%,transparent_40%,rgba(0,0,0,0.8)_100%)]"
              />
            </div>
          );
        })}
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-10 flex gap-4 z-40">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full border-2 border-white/50 transition ${
              currentIndex === index
                ? "bg-white scale-125 shadow-lg animate-pulse"
                : "bg-white/30 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
