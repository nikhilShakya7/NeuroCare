"use client";
import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

interface Neurology {
  id: number;
  title: string;
  description1: string;
  description2: string;
  description3: string;
  image: {
    url: string;
  };
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const lineVariants: Variants = {
  hidden: { scaleX: 0, transformOrigin: "left" },
  visible: {
    scaleX: 1,
    transformOrigin: "left",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
    },
  },
};

const Page = () => {
  const [content, setContent] = useState<Neurology[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/neurosurgeries?populate=*`)
      .then((response) => response.json())
      .then((data) => {
        const formattedContent = data.data.map((service: any) => ({
          id: service.id,
          title: service.title,
          description1: service.description1,
          description2: service.description2,
          description3: service.description3,
          /* image: {
            url: service.image?.formats?.medium.url || service.image?.url || "",
          },*/
        }));
        setContent(formattedContent);
      })
      .catch((error) => console.error("Failed to fetch neurologies:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {content.map((service) => (
          <div
            key={service.id}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            {/* Text Content - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="order-1 lg:order-none"
            >
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="space-y-8 md:space-y-10"
              >
                <div className="space-y-5">
                  <motion.h1
                    variants={itemVariants}
                    className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight"
                  >
                    {service.title}
                  </motion.h1>

                  <motion.div
                    variants={lineVariants}
                    className="w-24 h-1.5 bg-blue-600 rounded-full"
                  />
                </div>

                <motion.div
                  variants={textVariants}
                  className="prose prose-lg max-w-none text-gray-600 space-y-6"
                >
                  <motion.p variants={itemVariants}>
                    {service.description1}
                  </motion.p>
                  <motion.p variants={itemVariants}>
                    {service.description2}
                  </motion.p>
                  <motion.p variants={itemVariants}>
                    {service.description3}
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Image - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="order-0 lg:order-none"
            >
              <div className="relative w-full h-[300px] sm:h-[500px] rounded-xl overflow-hidden shadow-2xl group">
                <img
                  src="/images"
                  alt="Neurology Department"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
