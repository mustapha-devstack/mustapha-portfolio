"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with Next.js, Tailwind CSS, and Framer Motion to showcase my work.",
    image: "/projects/portfolio.jpg",
    demo: "https://premuim-porfolio.vercel.app/",
    gumroad: "https://mustaphakasim.gumroad.com/l/portfolio",
  },
  {
    title: "E-Commerce Store",
    description:
      "A full-featured Next.js e-commerce store with cart, checkout, and product management.",
    image: "/projects/ecommerce.jpg",
    demo: "https://ecommerce-store-sigma-taupe.vercel.app/",
    gumroad: "https://mustaphakasim.gumroad.com/l/pucait",
  },
  {
    title: "Landing Page (Lauchify)",
    description:
      "A clean SaaS landing page starter built with Next.js and Tailwind for quick launches.",
    image: "/projects/landing.jpg",
    demo: "https://launchify-landing-page.vercel.app/",
    gumroad: "https://mustaphakasim.gumroad.com/l/landing-page",
  },
  {
    title: "Appwave Startup Landing",
    description:
      "A premuim startup landing page with Next.js (App Router).",
    image: "/projects/startup.jpg",
    demo: "https://appwave-startup-landing.vercel.app/",
    gumroad: "https://mustaphakasim.gumroad.com/l/appwave-nextjs-starter",
  },
  {
    title: "Premuim Funnel",
    description:
      "A modern premuim funnel built with Next.js, Tailwind CSS, and lucide react.",
    image: "/projects/1.jpg",
    demo: "https://creatify-funnel-template.vercel.app",
    gumroad: "https://mustaphakasim.gumroad.com/l/xliphg",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
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
        Projects
      </motion.h2>

      {/* Projects Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="glass p-6 rounded-xl shadow-lg hover:scale-105 transition flex flex-col justify-between"
          >
            {/* Project Image */}
            <div className="mb-4 rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>

            {/* Project Info */}
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-blue-300">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-6">{project.description}</p>
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-auto">
              <a
                href={project.demo}
                target="_blank"
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg transition"
              >
                Live Demo
              </a>
              <a
                href={project.gumroad}
                target="_blank"
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-600 transition"
              >
                Gumroad
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
