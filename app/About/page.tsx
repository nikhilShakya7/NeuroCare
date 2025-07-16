"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
  title: string;
  description: string;
}
interface AboutContent {
  maintext: string;
  mainDescription: string;
  shortText1: string;
  storyText2: string;
  midtitle: string;
  middescription: string;
}

export default function AboutPage() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [pageContent, setPageContent] = useState<AboutContent | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/about-pages?populate=*`)
      .then((res) => res.json())
      .then((data) => setPageContent(data.data.attributes));
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/doctors-pages?populate=image`)
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
          title: doctor.title,
          description: doctor.description,
          bio: doctor.bio,
          specialty: doctor.specialty,
        }));
        setDoctors(formattedDoctors);
      })
      .catch((error) => console.error("Error fetching doctors:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 w-full">
        <Image
          src="/images/hospital1.png"
          alt="Our Hospital"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white px-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {pageContent?.maintext || "About Our Medical Center"}
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              {pageContent?.mainDescription ||
                "Delivering compassionate healthcare with excellence for over 20             years"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4 text-lg">
              Founded in 2002, our medical center began as a small clinic with a
              vision to provide world-class healthcare services to our
              community. What started with just three physicians has now grown
              into a state-of-the-art facility with over 50 specialists.
            </p>
            <p className="text-gray-600 mb-4 text-lg">
              We've remained committed to our core values of compassion,
              excellence, and innovation throughout our journey. Every year, we
              serve thousands of patients with personalized care tailored to
              their unique needs.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/hospital2.png"
              alt="Our hospital in early years"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guiding principles that shape everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Patient-Centered Care",
                description:
                  "We put our patients at the heart of every decision, ensuring personalized treatment plans.",
                icon: "❤️",
              },
              {
                title: "Medical Excellence",
                description:
                  "Our team maintains the highest standards through continuous learning and innovation.",
                icon: "🏆",
              },
              {
                title: "Community Focus",
                description:
                  "We're committed to improving health outcomes for everyone in our community.",
                icon: "🌍",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leaders</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Highly qualified professionals dedicated to your health
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.slice(0, 3).map((doctor) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-64 w-full">
                {doctor.image?.[0]?.url ? (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}${doctor.image[0].url}`}
                    alt={doctor.name}
                    fill
                    className="object-cover"
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
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Experience Our Care?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Schedule an appointment with one of our specialists today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg text-lg"
            >
              Book an Appointment
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
