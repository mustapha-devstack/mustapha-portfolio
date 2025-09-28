"use client";

import { motion } from "framer-motion";

const education = [
  {
    school: "Air Force Institute of Technology (AFIT)",
    degree: "B.Eng Mechatronics Engineering",
    period: "2024 – Present",
    details:
      "Studying core engineering concepts while focusing on software, embedded systems, and IoT applications.",
  },
  {
    school: "Self-Learning & Online Courses",
    degree: "Full-Stack Development",
    period: "2022 – Present",
    details:
      "Completed courses in Next.js, React, Node.js, and cloud platforms. Built real-world projects to strengthen skills.",
  },
  {
    school: "Certifications",
    degree: "Various Bootcamps & Workshops",
    period: "Ongoing",
    details:
      "Participated in hackathons, coding challenges, and online certifications to stay updated with modern technologies.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6 py-20"
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-blue-400 mb-12"
      >
        Education
      </motion.h2>

      {/* Timeline */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.3 } },
        }}
        viewport={{ once: true }}
        className="flex flex-col gap-10 max-w-3xl w-full"
      >
        {education.map((edu, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, x: index % 2 === 0 ? -80 : 80 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glass p-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
          >
            <h3 className="text-2xl font-semibold text-blue-300 mb-1">
              {edu.school}
            </h3>
            <p className="text-gray-200 font-medium">{edu.degree}</p>
            <p className="text-gray-400 text-sm mb-3">{edu.period}</p>
            <p className="text-gray-300">{edu.details}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
