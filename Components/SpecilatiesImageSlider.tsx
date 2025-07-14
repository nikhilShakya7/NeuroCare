"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

type TFetchSpeacilities = {
  specialitiesTitle: string;
  speacialitiesTitle1: string;
  specalitiesTitle2: string;
  SpecalitiesTitle3: string;
  SpeacilitiesDescription1: string;
  SpecalitiesDescription2: string;
  SpecalitiesDescription3: string;
};
const SpecalitiesImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [specialities, setSpecialities] = useState<TFetchSpeacilities | null>(
    null
  );

  useEffect(() => {
    const fetchSpecialities = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/homepages?populate=*`
        );
        const json = await res.json();
        const homepage = json?.data?.[0];
        setSpecialities(homepage);
      } catch {
        console.log("error");
      }
    };
    fetchSpecialities();
  }, []);

  const slides = [
    {
      id: 1,
      url: "/images/hospital1.png",
      alt: "Hospital Facility",
      title: specialities?.speacialitiesTitle1,
      description: specialities?.SpeacilitiesDescription1,
    },
    {
      id: 2,
      url: "/images/room1.jpg",
      alt: "Patient Room",
      title: specialities?.specalitiesTitle2,
      description: specialities?.SpecalitiesDescription2,
    },
    {
      id: 3,
      url: "/images/medical.jpg",
      alt: "Medical Laboratory",
      title: specialities?.SpecalitiesTitle3,
      description: specialities?.SpecalitiesDescription3,
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
    <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] group">
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
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center px-4 sm:px-6 lg:px-8 w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {slides[currentIndex].title}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white max-w-2xl mx-auto">
              {slides[currentIndex].description}
            </p>
          </div>
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="hidden sm:block absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-all duration-300 z-10"
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

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white w-6" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecalitiesImageSlider;
