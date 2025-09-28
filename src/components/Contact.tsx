"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center p-8 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Contact Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="glass p-10 rounded-2xl max-w-2xl w-full text-center"
      >
        <h2 className="text-4xl font-bold mb-6">📬 Get in Touch</h2>
        <p className="text-lg text-gray-300 mb-8">
          I’d love to connect! Whether it’s about projects, collaboration, or opportunities—drop me a message.  
        </p>

        {/* Contact Form */}
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-white/10 text-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-white/10 border text-gray-300 border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            placeholder="Your Message"
            className="w-full h-36 p-3 rounded-lg bg-white/10 border text-gray-300 border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition-all"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
