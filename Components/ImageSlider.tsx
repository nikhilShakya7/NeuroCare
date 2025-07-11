"use client";
import React, { useState } from "react";
import Image from "next/image";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      url: "/images/hospital1.png",
      alt: "Hospital Facility",
    },
    {
      id: 2,
      url: "/images/room1.jpg",
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
    <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[90vh] group">
      {/* Slide Image */}
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={slides[currentIndex].url}
          alt={slides[currentIndex].alt}
          fill
          className="object-cover object-center transition-opacity duration-500"
          priority
        />
        {/* Overlay */}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
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
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
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
      </button>
    </div>
  );
};

export default ImageSlider;
