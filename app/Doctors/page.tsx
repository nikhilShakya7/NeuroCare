"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ImageData {
  url: string;
}

interface Doctor {
  id: number;
  name: string;
  image: ImageData[] | null;
  bio: string;
  specialty: string;
}

const DoctorsPage = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/doctors-pages?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        const formattedDoctors = data.data.map((doctor: any) => ({
          id: doctor.id,
          name: doctor.name,
          image: doctor.image
            ? doctor.image.map((img: any) => ({
                url: img.url,
              }))
            : null,
          bio: doctor.bio,
          specialty: doctor.specialty,
        }));
        setDoctors(formattedDoctors);
      })
      .catch((error) => console.error("Error fetching doctors:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Our Medical Specialists
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Meet our team of highly qualified doctors dedicated to your health and
          wellbeing.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {doctors.map((doctor) => (
          <motion.div
            key={doctor.id}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-64 w-full">
              {doctor.image?.[0]?.url ? (
                <Image
                  src={`http://localhost:1337${doctor.image[0].url}`}
                  alt={doctor.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              ) : (
                <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {doctor.name}
              </h3>
              <p className="text-blue-600 font-medium mb-3">
                {doctor.specialty}
              </p>
              <p className="text-gray-600 mb-4">{doctor.bio}</p>
              <Link
                href={`/doctors/${doctor.id}`}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
              >
                View Profile
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsPage;
