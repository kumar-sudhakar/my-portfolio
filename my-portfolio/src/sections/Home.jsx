import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaXTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import ParticlesBackground from "../components/ParticlesBackground";
import avatar from "../assets/avator.png";

export default function Home() {
  const roles = useMemo(() => ["Web Developer", "Software Developer"], []);

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typewriter Effect Logic
  useEffect(() => {
    const current = roles[index];

    const timeout = setTimeout(
      () => {
        if (!deleting && subIndex < current.length) {
          setSubIndex((v) => v + 1);
        } else if (!deleting && subIndex === current.length) {
          setTimeout(() => setDeleting(true), 1200);
        } else if (deleting && subIndex > 0) {
          setSubIndex((v) => v - 1);
        } else if (deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((p) => (p + 1) % roles.length);
        }
      },
      deleting ? 40 : 60
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  // Social Links
  const socials = [
    {
      icon: <FaXTwitter />,
      label: "X",
      href: "https://x.com/Sudhakarku36854",
    },
    {
      icon: <FaLinkedinIn />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sudhakar-kumar-a23268349",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      href: "https://github.com/kumar-sudhakar",
    },
  ];

  // Glow Variants for Social Icons
  const glowVariants = {
    initial: {
      scale: 1,
      y: 0,
      filter: "drop-shadow(0px 0px 0px rgba(0,0,0,0))",
    },
    hover: {
      scale: 1.2,
      y: -3,
      filter:
        "drop-shadow(0px 8px 13px rgba(13, 88, 204, 0.9)) drop-shadow(0px 8px 16px rgba(16, 185, 129, 0.8))",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
    tap: {
      scale: 0.95,
      y: 0,
      transition: { duration: 0.08 },
    },
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen bg-black overflow-hidden"
    >
      {/* Background Particles */}
      <ParticlesBackground />

      {/* Background Gradient Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-Left Blob */}
        <div className="absolute -top-32 -left-32 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse" />

        {/* Bottom-Right Blob */}
        <div className="absolute bottom-0 right-0 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse [animation-delay:500ms]" />
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2">

        {/* Left Column */}
        <div className="flex flex-col justify-center h-full text-center lg:text-left relative">
          <div className="w-full lg:pr-24 mx-auto max-w-[48rem]">

            {/* Typewriter Role */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-3 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white tracking-wide min-h-[1.6em]"
            >
              <span>{roles[index].substring(0, subIndex)}</span>
              <span className="inline-block w-[2px] h-[1em] ml-1 bg-white animate-pulse align-middle" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg"
            >
              Hello, I'm <br />

              <span className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl lg:whitespace-nowrap">
                Sudhakar Kumar
              </span>
            </motion.h1>

            {/* Subtext Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-5 text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              I transform complex ideas into seamless, high-impact digital
              experiences, building modern, scalable, and high-performance web
              applications that deliver meaningful results.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-5"
            >
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-full font-medium text-base text-white bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] shadow-lg hover:scale-105 transition-all"
              >
                View My Work
              </a>

              <a
                href="/Resume.pdf"
                download
                className="px-5 py-2.5 rounded-full font-medium text-base text-black bg-white hover:bg-gray-200 shadow-lg hover:scale-105 transition-all"
              >
                My Resume
              </a>
            </motion.div>

            {/* Social Icons */}
            <div className="mt-8 flex gap-5 text-xl md:text-2xl justify-center lg:justify-start">
              {socials.map(({ icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  variants={glowVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="text-gray-300"
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative hidden lg:block">

          {/* Avatar Behind Glow */}
          <div
            className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              right: "10px",
              width: "min(22vw, 410px)",
              height: "min(40vw, 760px)",
              borderRadius: "50%",
              filter: "blur(38px)",
              opacity: 0.32,
              background:
                "conic-gradient(from 0deg, #1cd8d2, #00bf8f, #302b63, #1cd8d2)",
            }}
          />

          {/* Avatar Image */}
          <motion.img
            src={avatar}
            alt="Sudhakar Kumar"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="absolute top-1/2 -translate-y-1/2 object-contain select-none pointer-events-none"
            style={{
              right: "-30px",
              width: "min(45vw, 780px)",
              maxHeight: "90vh",
            }}
          />
        </div>
      </div>
    </section>
  );
}
