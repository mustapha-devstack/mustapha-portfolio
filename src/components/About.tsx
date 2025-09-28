"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="glass max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-10 items-center shadow-2xl"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="glass p-2 rounded-full w-56 h-56 flex items-center justify-center overflow-hidden shadow-lg">
            <img
              src="/avatar.webp" // put your photo in public/profile.jpg
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-blue-400">About Me</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            I’m a <span className="text-blue-400">Full-Stack Software Developer</span> 
            passionate about building scalable web applications and solving 
            real-world problems with technology. With experience in 
            <strong> Next.js, Node.js, React, and cloud platforms</strong>, I focus 
            on creating efficient, user-friendly solutions.
          </p>
          <p className="text-gray-400 leading-relaxed mb-6">
            I enjoy working across the stack — from designing smooth front-end 
            interfaces to architecting robust back-end systems. I’m always 
            learning, experimenting, and pushing boundaries.
          </p>
          <motion.a
            href="#skills"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg transition"
          >
            View Skills
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
