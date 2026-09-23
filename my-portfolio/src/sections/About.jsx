import React from "react";
import { motion } from "framer-motion";
import Profile from "../assets/Profile.png";

const stats = [
  { label: "Experience", value: "1+ years" },
  { label: "Speciality", value: "Full Stack" },
  { label: "Focus", value: "Performance & UX" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden py-16 px-6 text-white flex items-center bg-black"
    >
      {/* =====================================
          NEON BACKGROUND
      ====================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Left Neon Glow */}
        <div
          className="
            absolute
            top-1/4
            -left-20
            w-[350px]
            h-[350px]
            rounded-full
            bg-gradient-to-r
            from-[#302b63]
            via-[#00bf8f]
            to-[#1cd8d2]
            opacity-20
            blur-[120px]
            animate-pulse
          "
        />

        {/* Right Neon Glow */}
        <div
          className="
            absolute
            bottom-1/4
            -right-20
            w-[350px]
            h-[350px]
            rounded-full
            bg-gradient-to-r
            from-[#302b63]
            via-[#00bf8f]
            to-[#1cd8d2]
            opacity-20
            blur-[120px]
            animate-pulse
            delay-500
          "
        />

        {/* Center subtle glow */}
        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[300px]
            h-[300px]
            rounded-full
            bg-[#00bf8f]
            opacity-5
            blur-[150px]
          "
        />
      </div>

      {/* =====================================
          MAIN CONTENT
      ====================================== */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">

        {/* =====================================
            PROFILE SECTION
        ====================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8"
        >

          {/* =====================================
              PROFILE IMAGE
          ====================================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 35px rgba(0, 191, 143, 0.25)",
            }}
            className="
              relative
              w-48
              h-56
              sm:w-56
              sm:h-64
              rounded-2xl
              overflow-hidden
              bg-neutral-900/70
              backdrop-blur-md
              flex-shrink-0
              border
              border-[#00bf8f]/30
              shadow-[0_0_25px_rgba(0,191,143,0.12)]
            "
          >
            <img
              src={Profile}
              alt="Sudhakar Kumar"
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* =====================================
              PROFILE DETAILS
          ====================================== */}
          <div className="w-full md:max-w-2xl text-center md:text-left">

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="
                text-3xl
                sm:text-4xl
                font-bold
                bg-clip-text
                text-transparent
                bg-gradient-to-r
                from-[#1cd8d2]
                via-[#00bf8f]
                to-[#302b63]
              "
            >
              Sudhakar Kumar
            </motion.h1>

            {/* Role */}
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl font-medium text-neutral-300 mt-1 mb-4"
            >
              Full Stack Developer
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="
                text-neutral-400
                text-sm
                sm:text-base
                leading-relaxed
                max-w-2xl
              "
            >
              I build scalable, modern applications with a strong focus on
              clean architecture, delightful UX, and performance. My toolkit
              spans JavaScript, React, Node.js, Express.js, MongoDB, Tailwind
              CSS, and REST APIs — bringing ideas to life from concept to
              production with robust APIs and smooth interfaces.
            </motion.p>

            {/* =====================================
                STATS
            ====================================== */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-6 max-w-lg mx-auto md:mx-0">
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + index * 0.1,
                  }}
                  whileHover={{
                    y: -5,
                    scale: 1.03,
                    boxShadow: "0 0 20px rgba(0, 191, 143, 0.15)",
                  }}
                  className="
                    bg-neutral-900/70
                    backdrop-blur-md
                    border
                    border-[#00bf8f]/20
                    rounded-xl
                    p-3
                    sm:p-4
                    text-center
                    transition-all
                  "
                >
                  <p className="text-xs text-neutral-400">
                    {item.label}
                  </p>

                  <p className="text-sm sm:text-base font-semibold text-white mt-1">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* =====================================
                ACTION BUTTONS
            ====================================== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start"
            >
              {/* View Projects */}
              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(0, 191, 143, 0.25)",
                }}
                whileTap={{ scale: 0.95 }}
                className="
                  px-5
                  py-2.5
                  rounded-lg
                  bg-gradient-to-r
                  from-[#1cd8d2]
                  to-[#00bf8f]
                  text-black
                  font-semibold
                  text-sm
                  transition
                "
              >
                View Projects
              </motion.a>

              {/* Contact */}
              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(0,191,143,0.6)",
                  boxShadow: "0 0 20px rgba(0,191,143,0.15)",
                }}
                whileTap={{ scale: 0.95 }}
                className="
                  px-5
                  py-2.5
                  rounded-lg
                  border
                  border-neutral-700
                  bg-neutral-900/60
                  text-white
                  font-medium
                  text-sm
                  transition
                "
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* =====================================
            ABOUT ME
        ====================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            mt-14
            border-t
            border-[#00bf8f]/20
            pt-8
            text-center
          "
        >
          <h3
            className="
              text-2xl
              sm:text-3xl
              font-bold
              mb-4
              bg-clip-text
              text-transparent
              bg-gradient-to-r
              from-[#1cd8d2]
              via-[#00bf8f]
              to-white
            "
          >
            About Me
          </h3>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            I'm a Software Developer, Content Creator, and Web Developer —
            passionate about building fast, resilient applications and
            sharing coding insights on Instagram and YouTube.
          </p>

          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed mt-3 max-w-3xl mx-auto">
            I love turning ideas into scalable, user-friendly products that
            make an impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}