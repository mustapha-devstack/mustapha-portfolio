"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full flex flex-col items-center justify-center py-10 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Glass Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="glass w-[90%] max-w-4xl mx-auto p-6 rounded-2xl flex flex-col items-center text-center"
      >
        {/* Title */}
        <h3 className="text-2xl font-semibold text-blue-300 mb-4">
          Let’s Connect 🚀
        </h3>
        <p className="text-gray-300 mb-6">
          Open to collaborations, freelance projects, or just a friendly chat.  
          Reach out anytime!
        </p>

        {/* Social Icons */}
        <div className="flex space-x-6 mb-4">
          <a
            href="mailto:mustapha.devstack@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/mustapha-devstack"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://x.com/mustaphaDevFS"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Twitter className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-sm text-gray-400"
        >
          © {new Date().getFullYear()} Your Name. All Rights Reserved.
        </motion.p>
      </motion.div>
    </footer>
  );
}
