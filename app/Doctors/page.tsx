"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
interface Doctor {
  name: string;
  image: string;
  bio: string;
  id: number;
  specialty: string;
}

const DoctorsPage = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  useEffect(() => {
    fetch("http://localhost:1337/api/doctors-pages")
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data.data);
      })
      .catch((error) => console.error("Error fetching doctors:", error));
  }, []);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
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

      {/* Doctors Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {doctors.map((doctor) => (
          <motion.div
            key={doctor.id}
            variants={item}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-64 w-full">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
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
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-20 bg-blue-600 rounded-xl p-8 text-center text-white"
      >
        <h2 className="text-2xl font-bold mb-4">
          Ready to Book an Appointment?
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Our team is here to provide you with exceptional care. Schedule your
          visit today.
        </p>
        <Link
          href="/appointment"
          className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300"
        >
          Book Now
        </Link>
      </motion.div>
    </div>
  );
};
export default DoctorsPage;
