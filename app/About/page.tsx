"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
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
              About Our Medical Center
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Delivering compassionate healthcare with excellence for over 20
              years
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Meet Our Leadership
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experienced professionals dedicated to your health
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Dr. Sarah Johnson",
              position: "Medical Director",
              bio: "Board-certified with 25 years of experience in healthcare administration.",
              image: "/images/doctor1.jpg",
            },
            {
              name: "Dr. Michael Chen",
              position: "Chief of Surgery",
              bio: "Pioneer in minimally invasive surgical techniques with numerous awards.",
              image: "/images/doctor2.jpg",
            },
            {
              name: "Dr. Priya Patel",
              position: "Head of Research",
              bio: "Leading our clinical research initiatives to advance medical science.",
              image: "/images/doctor3.jpg",
            },
          ].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600">{member.bio}</p>
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
