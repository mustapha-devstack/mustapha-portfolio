"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Next.js", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🌐" },
  { name: "Express", icon: "🚀" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "TypeScript", icon: "📘" },
  { name: "Git & GitHub", icon: "🔧" },
  { name: "Docker", icon: "🐳" },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
        Skills
      </motion.h2>

      {/* Skills Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glass p-6 flex flex-col items-center justify-center rounded-xl shadow-lg hover:scale-105 transition"
          >
            <span className="text-3xl mb-3">{skill.icon}</span>
            <p className="font-semibold text-gray-200">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
