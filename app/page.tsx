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
  team: {
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

  const sectionPadding = "py-16 md:py-20 lg:py-24";
  const containerPadding = "px-6 sm:px-8 lg:px-10";
  const maxWidth = "max-w-7xl mx-auto";
  const headingMargin = "mb-8 md:mb-10";
  const paragraphMargin = "mb-8 md:mb-10";
  const contentGap = "gap-10 md:gap-12";
  const buttonPadding = "px-8 py-3";

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden bg-gray-600">
        <div className="relative h-[60vh] sm:h-[70vh] md:h-screen md:max-h-[90vh] w-full">
          <ImageSlider />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={`text-center ${containerPadding} w-full ${maxWidth}`}
            >
              <h1
                className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white ${headingMargin}`}
              >
                {homepage.heroTitle || "Modern Healthcare Facilities"}
              </h1>
              <p
                className={`text-xl sm:text-2xl text-white max-w-3xl mx-auto ${paragraphMargin}`}
              >
                {homepage.heroSubtitle ||
                  "State-of-the-art medical care in a compassionate environment"}
              </p>
              <button
                className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-lg transition-all duration-300 ${buttonPadding}`}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className={`${sectionPadding} ${containerPadding} ${maxWidth}`}>
        <div className={`flex flex-col lg:flex-row items-center ${contentGap}`}>
          {/* Image Column */}
          <div className="w-full lg:w-1/2 xl:w-2/5">
            <div className="relative w-full h-[400px] sm:h-[500px] rounded-xl overflow-hidden shadow-lg">
              <img
                src={`${process.env.NEXT_PUBLIC_API_URL}${homepage.founderImage[0].url}`}
                alt={homepage.founderName}
                className="w-full h-full object-cover  hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className={`w-full lg:w-1/2 xl:w-3/5 space-y-6 md:space-y-8`}>
            <div className="text-center lg:text-left">
              <h1
                className={`text-3xl md:text-4xl font-bold text-gray-800 ${headingMargin}`}
              >
                Words from the Founder
              </h1>
              <div className="w-20 h-1 bg-blue-600 mx-auto lg:mx-0 mb-6 md:mb-8"></div>
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center lg:text-left">
              {homepage.founderName}
            </h2>
            <h3 className="text-xl md:text-2xl text-blue-600 text-center lg:text-left">
              {homepage.founderPost}
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed">
              {homepage.founderWords}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                Board Certified
              </span>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                30+ Years Experience
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Specialties Section */}
      <div className={`bg-gray-50 ${sectionPadding}`}>
        <div className={`${containerPadding} ${maxWidth}`}>
          <div className="text-center mb-12 md:mb-16">
            <h1
              className={`text-4xl md:text-5xl font-bold text-gray-800 ${headingMargin}`}
            >
              {homepage.speacialitiesText || "Our Specialties"}
            </h1>
          </div>
          <SpecalitiesImageSlider />
        </div>
      </div>

      {/* Team Section */}
      <div className={`${sectionPadding} ${containerPadding} ${maxWidth}`}>
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <h1
            className={`text-4xl md:text-5xl font-bold text-gray-800 ${headingMargin}`}
          >
            {homepage.teamSection}
          </h1>
          <p
            className={`text-gray-600 text-lg leading-relaxed ${paragraphMargin}`}
          >
            {homepage.teamContent}
          </p>
        </div>

        <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] mb-12 md:mb-16">
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px]">
            <img
              src={`${process.env.NEXT_PUBLIC_API_URL}${homepage.team[0].url}`}
              alt="Team"
              className="w-full h-full object-cover   "
            />
          </div>
        </div>

        {/* Stats container */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center  hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <p className="text-3xl md:text-4xl font-bold text-blue-600">
                50+
              </p>
              <p className="text-gray-600">Specialists</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center  hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <p className="text-3xl md:text-4xl font-bold text-blue-600">
                24/7
              </p>
              <p className="text-gray-600">Availability</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center  hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <p className="text-3xl md:text-4xl font-bold text-blue-600">
                100%
              </p>
              <p className="text-gray-600">Certified</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center  hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <p className="text-3xl md:text-4xl font-bold text-blue-600">
                5000+
              </p>
              <p className="text-gray-600">Patients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
