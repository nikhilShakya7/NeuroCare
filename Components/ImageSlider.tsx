"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type TFetchHomePageResponse = {
  heroImage: {
    url: string;
  };
};

export async function fetchHomePageData(): Promise<TFetchHomePageResponse> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/homepages?populate=*`
  );
  const json = await res.json();
  return json.data[0];
}

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      url: "/images/hospital.jpg",
      alt: "Hospital Facility",
    },
    {
      id: 2,
      url: "/images/interior.jpg",
      alt: "Patient Room",
    },
    {
      id: 3,
      url: "/images/hospital3.jpg",
      alt: "Medical Laboratory",
    },
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[90vh] group overflow-hidden">
      {/* Slide Image with animation */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[currentIndex].id}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6 }}
            className="absolute top-0 left-0 w-full h-full"
          >
            <Image
              src={slides[currentIndex].url}
              alt={slides[currentIndex].alt}
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Left Arrow */}
      <motion.button
        onClick={prevSlide}
        whileHover={{ scale: 1.1 }}
        className="hidden sm:block absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/20 text-white p-2 rounded-full hover:bg-black/50 transition-all duration-300 z-10"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </motion.button>

      {/* Right Arrow */}
      <motion.button
        onClick={nextSlide}
        whileHover={{ scale: 1.1 }}
        className="hidden sm:block absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-all duration-300 z-10"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </motion.button>
    </div>
  );
};

export default ImageSlider;
