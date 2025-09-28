"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-5xl glass z-50 px-6 py-3 rounded-2xl flex items-center justify-between"
    >
      {/* Logo */}
      <a href="#hero" className="text-xl text-blue-400 font-bold tracking-wide">
        Mustapha Kasim
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        {navLinks.map((link, idx) => (
          <li key={idx}>
            <a
              href={link.href}
              className="text-white hover:text-purple-400 transition-colors"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 right-4 bg-black/70 backdrop-blur-lg p-4 rounded-xl flex flex-col space-y-4 md:hidden"
        >
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-white hover:text-purple-400 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
}
