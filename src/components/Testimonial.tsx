"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Jane Doe",
    role: "Project Manager, TechCorp",
    feedback:
      "Working with you was fantastic. Your ability to handle both front-end and back-end tasks made our project smooth and efficient.",
    avatar: "/avatar1.jpg",
  },
  {
    name: "John Smith",
    role: "CTO, StartupX",
    feedback:
      "A highly skilled full-stack developer! You delivered clean, scalable solutions and always brought fresh ideas to the table.",
    avatar: "/avatar2.jpg",
  },
  {
    name: "Sarah Lee",
    role: "Freelance Client",
    feedback:
      "I loved the website you built for my business. It’s modern, fast, and exactly what I wanted. Great communication throughout!",
    avatar: "/avatar3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 py-20"
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-blue-400 mb-12"
      >
        Testimonials
      </motion.h2>

      {/* Testimonials Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.25 } },
        }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl"
      >
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="glass p-6 rounded-xl shadow-lg hover:scale-105 transition flex flex-col"
          >
            {/* Avatar */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-600">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-300">{t.name}</h3>
                <p className="text-gray-400 text-sm">{t.role}</p>
              </div>
            </div>

            {/* Feedback */}
            <p className="text-gray-300 leading-relaxed">{t.feedback}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
