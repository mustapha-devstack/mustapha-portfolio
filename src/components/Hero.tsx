"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative px-6"
    >
      {/* Glass card */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass p-10 max-w-2xl mx-auto shadow-2xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-5xl font-extrabold mb-4"
        >
          Hi, I’m <span className="text-blue-400">Mustapha Kasim</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-xl font-light mb-6"
        >
          Full-Stack Software Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="text-gray-300 mb-8"
        >
          I build scalable, performant web applications with modern
          technologies like Next.js, Node.js, and cloud platforms.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="flex gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-600 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
