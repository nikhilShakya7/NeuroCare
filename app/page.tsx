import ImageSlider from "@/Components/ImageSlider";
import React from "react";

type TFetchHomePageResponse = {
  heroTitle: string;
  heroSubtitle: string;
  founderName: string;
  founderWords: string;
  founderPost: string;
  id: number;
  documentId: string;
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

const Page = async () => {
  const homepage = await fetchHomePageData();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden bg-gray-600">
        <div className="relative h-[60vh] sm:h-[70vh] md:h-screen md:max-h-[90vh] w-full">
          <ImageSlider />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4 sm:px-6 lg:px-8 w-full">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg mb-6">
                {homepage.heroTitle || "Modern Healthcare Facilities"}
              </h1>
              <p className="mt-4 text-xl sm:text-2xl md:text-3xl text-white max-w-3xl mx-auto drop-shadow-md">
                {homepage.heroSubtitle ||
                  "State-of-the-art medical care in a compassionate environment"}
              </p>
              <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 xl:gap-20">
          {/* Image Column */}
          <div className="w-full lg:w-1/2 xl:w-2/5">
            <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/founder.png"
                alt="Founder Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-1/2 xl:w-3/5 space-y-6">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                Words from the Founder
              </h1>
              <div className="w-20 h-1 bg-blue-600 mx-auto lg:mx-0 mb-6"></div>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 text-center lg:text-left">
              {homepage.founderName}
            </h2>
            <h3 className="text-xl sm:text-2xl text-blue-600 text-center lg:text-left">
              {homepage.founderPost}
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed">
              {homepage.founderWords}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                Board Certified
              </span>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                30+ Years Experience
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Specialties Section */}
      <div className="bg-gray-50 py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12">
            Our Specialties
          </h1>
          {/* Add specialties content here */}
        </div>
      </div>

      {/* Room Showcase */}
      <div className="relative w-full overflow-hidden">
        <div className="relative h-[50vh] sm:h-[70vh] w-full">
          <img
            src="/images/room1.jpg"
            alt="Hospital Room"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center px-6">
              High Class Patient Rooms
            </h2>
          </div>
        </div>
      </div>

      {/* Additional Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
        <div className="bg-white p-8 sm:p-10 rounded-xl shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Additional Information
          </h2>
          <p className="text-gray-600 text-lg">Your content goes here...</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
