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
  const res = await fetch("http://localhost:1337/api/homepages?populate=*");
  const json = await res.json();

  return json.data[0];
}

const Page = async () => {
  const homepage = await fetchHomePageData();
  console.log({ homepage });
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden bg-gray-900">
        <div className="relative h-[60vh] sm:h-[70vh] md:h-screen md:max-h-[80vh] w-full">
          <img
            src="/images/hospital1.png"
            alt="Hospital Facility"
            className="h-full w-full object-cover object-center opacity-70"
          />

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 to-transparent">
            <div className="text-center px-4 sm:px-6 lg:px-8 w-full">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg mb-4 sm:mb-6">
                {homepage.heroTitle || "Modern Healthcare Facilities"}
              </h1>
              <p className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl text-white max-w-2xl mx-auto drop-shadow-md px-2 sm:px-0">
                {homepage.heroSubtitle ||
                  "State-of-the-art medical care in a compassionate environment"}
              </p>

              <button className="mt-6 sm:mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
          {/* Image Column - Order changes on mobile */}
          <div className="w-full lg:w-1/2 xl:w-2/5 order-2 lg:order-1">
            <img
              src="/images/founder.png"
              alt="Founder Portrait"
              className="w-full h-[500px] shadow-xl object-cover max-w-[500px] mx-auto"
            />
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-1/2 xl:w-3/5 order-1 lg:order-2">
            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-800 mb-4 sm:mb-6 md:mb-8 text-center lg:text-left">
              Words from the Founder
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mt-1 text-center lg:text-left">
              {/*Dr. John Smith*/}
              {homepage.founderName}
            </h2>
            <h3 className="text-base sm:text-lg md:text-xl text-blue-600 mb-4 sm:mb-6 text-center lg:text-left">
              {/*Visionary Leader in Healthcare*/}
              {homepage.founderPost}
            </h3>
            <p className="text-gray-600 mb-4 text-base sm:text-lg leading-relaxed sm:leading-loose">
              {/*"तीन दशकभन्दा बढीको चिकित्सा अनुभवसहित मैले यो संस्थाको स्थापना एक
              स्पष्ट उद्देश्यका साथ गरेको हुँ — अत्याधुनिक प्रविधिलाई व्यक्तिगत
              र सहानुभूति-आधारित उपचार सेवासँग जोड्ने। मेरो यात्रा मुटु
              शल्यक्रियामा नयाँ उपायहरू खोज्ने जोश र मानिसहरूको जीवनमा सकारात्मक
              परिवर्तन ल्याउने प्रतिबद्धताले भरिएको छ। तर सर्जरी र विज्ञानभन्दा
              पर, मैले सधैं नयाँ पुस्ताका स्वास्थ्यकर्मीहरूलाई शिक्षाद्वारा
              सक्षम बनाउने र समुदायमैत्री स्वास्थ्य प्रणाली विकास गर्ने विश्वास
              राखेको छु। हामी सँगै स्वास्थ्य सेवाको नयाँ परिभाषा बनाउँदैछौं।"*/}
              {homepage.founderWords}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mt-6">
              <span className="bg-blue-100 text-blue-800 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                Board Certified
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                30+ Years Experience
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
