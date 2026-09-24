import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alex Morgan",
    role: "Startup Founder",
    review:
      "Sudhakar did a great job turning our idea into a clean and responsive website. He understood the requirements quickly and delivered a smooth user experience.",
  },
  {
    name: "Daniel Wilson",
    role: "Business Owner",
    review:
      "Working with Sudhakar was a great experience. He was professional, responsive, and paid close attention to every detail throughout the project.",
  },
  {
    name: "Michael Carter",
    role: "Product Manager",
    review:
      "Sudhakar built a modern and responsive web application for our project. His development skills and problem-solving approach really stood out.",
  },
  {
    name: "Emily Johnson",
    role: "Startup Owner",
    review:
      "I was impressed by Sudhakar's ability to understand our requirements and turn them into a polished website. The final result was clean, fast, and easy to use.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold mb-16"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        What People Say
      </motion.h2>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl w-full">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name + i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: -1 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center transform transition duration-500"
          >
            {/* Dummy Avatar */}
            <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/30 mb-4 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-10 h-10 text-white/60"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
              </svg>
            </div>

            {/* Review */}
            <p className="text-gray-200 italic mb-4">
              "{t.review}"
            </p>

            {/* Name */}
            <h3 className="text-lg font-semibold">{t.name}</h3>

            {/* Role */}
            <p className="text-sm text-gray-400">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}