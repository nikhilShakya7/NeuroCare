import ImageSlider from "@/Components/ImageSlider";
import SpecalitiesImageSlider from "@/Components/SpecilatiesImageSlider";
import React from "react";
import Image from "next/image";
type TFetchHomePageResponse = {
  heroTitle: string;
  heroSubtitle: string;
  founderName: string;
  founderWords: string;
  founderPost: string;
  id: number;
  documentId: string;
  speacialitiesText: string;
  teamContent: string;
  teamSection: string;
  heroImage: {
    url: string;
  };
  founderImage: {
    url: string;
  }[];
  teamImage: {
    url: string;
  }[];
};

export async function fetchHomePageData(): Promise<TFetchHomePageResponse> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/homepages?populate=*`
  );
  const json = await res.json();
  return json.data[0];
}

const Page = async () => {
  const homepage = await fetchHomePageData();

  const sectionPaddingY = "py-12 sm:py-16 md:py-20 lg:py-24";
  const sectionPaddingX = "px-4 sm:px-6 lg:px-8";
  const headingMarginBottom = "mb-6 sm:mb-8 md:mb-10";
  const paragraphMarginBottom = "mb-8 sm:mb-10 md:mb-12";
  const contentGap = "gap-6 sm:gap-8 md:gap-10";

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden bg-gray-600">
        <div className="relative h-[60vh] sm:h-[70vh] md:h-screen md:max-h-[90vh] w-full">
          <ImageSlider />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`text-center ${sectionPaddingX} w-full max-w-7xl`}>
              <h1
                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg ${headingMarginBottom}`}
              >
                {homepage.heroTitle || "Modern Healthcare Facilities"}
              </h1>
              <p
                className={`text-xl sm:text-2xl md:text-3xl text-white max-w-3xl mx-auto drop-shadow-md ${paragraphMarginBottom}`}
              >
                {homepage.heroSubtitle ||
                  "State-of-the-art medical care in a compassionate environment"}
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div
        className={`${sectionPaddingY} ${sectionPaddingX} max-w-7xl mx-auto`}
      >
        <div className={`flex flex-col lg:flex-row items-center ${contentGap}`}>
          {/* Image Column */}
          <div className="w-full lg:w-1/2 xl:w-2/5">
            <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={`${process.env.NEXT_PUBLIC_API_URL}${homepage.founderImage[0].url}`}
                alt={homepage.founderName}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className={`w-full lg:w-1/2 xl:w-3/5 space-y-6 sm:space-y-8`}>
            <div className="text-center lg:text-left">
              <h1
                className={`text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 ${headingMarginBottom}`}
              >
                Words from the Founder
              </h1>
              <div className="w-20 h-1 bg-blue-600 mx-auto lg:mx-0 mb-6 sm:mb-8"></div>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 text-center lg:text-left">
              {homepage.founderName}
            </h2>
            <h3 className="text-xl sm:text-2xl text-blue-600 text-center lg:text-left">
              {homepage.founderPost}
            </h3>

            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
              {homepage.founderWords}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm sm:text-base font-medium shadow-sm">
                Board Certified
              </span>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm sm:text-base font-medium shadow-sm">
                30+ Years Experience
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Specialties Section */}
      <div className={`bg-gray-50 ${sectionPaddingY}`}>
        <div className={`${sectionPaddingX} max-w-7xl mx-auto`}>
          <div className="text-center">
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 ${headingMarginBottom}`}
            >
              {homepage.speacialitiesText || "Our Specialties"}
            </h1>
          </div>
          <SpecalitiesImageSlider />
        </div>
      </div>

      {/* Team Section */}
      <div className={`bg-gray-50 ${sectionPaddingY}`}>
        <div className={`${sectionPaddingX} max-w-7xl mx-auto`}>
          <div className="text-center max-w-4xl mx-auto">
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 ${headingMarginBottom}`}
            >
              {homepage.teamSection}
            </h1>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed mb-10 sm:mb-12">
              {homepage.teamContent}
            </p>

            {/* Image Container */}
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px]  overflow-hidden mt-8 sm:mt-10 md:mt-12">
              <img
                src="/images/doctors2.png"
                //src={`${process.env.NEXT_PUBLIC_API_URL}${homepage.teamImage[0].url}`}
                className="h-100 w-full"
              />
              {/* Optional overlay */}
            </div>

            {/* Optional Team Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12 md:-mt-20">
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">
                  50+
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  Specialists
                </p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">
                  24/7
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  Availability
                </p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">
                  100%
                </p>
                <p className="text-gray-600 text-sm sm:text-base">Certified</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">
                  5000+
                </p>
                <p className="text-gray-600 text-sm sm:text-base">Patients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
