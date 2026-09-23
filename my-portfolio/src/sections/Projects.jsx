import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

import photo1 from "../assets/photo1.png";
import photo2 from "../assets/photo2.png";
import photo3 from "../assets/photo3.png";

const useIsMobile = (query = "(max-width: 639px)") => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }

    return false;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(query);

    const handleChange = (event) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [query]);

  return isMobile;
};

export default function Projects() {
  const isMobile = useIsMobile();
  const sectionRef = useRef(null);

  const projects = [
    {
      title: "Forever",
      description: "Modern e-commerce experience",
      link: "",
      bgColor: "#0D4D3D",
      image: isMobile ? photo1 : img1,
    },
    {
      title: "QuickChat",
      description: "Real-time communication platform",
      link: "",
      bgColor: "#071426",
      image: isMobile ? photo2 : img2,
    },
    {
      title: "AI Code Reviewer",
      description: "AI-powered code analysis tool",
      link: "",
      bgColor: "#1D0D4D",
      image: isMobile ? photo3 : img3,
    },
  ];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    // Divide scroll progress into equal parts
    const index = Math.min(
      Math.floor(value * projects.length),
      projects.length - 1
    );

    setActiveIndex(index);
  });

  const activeProject = projects[activeIndex];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative text-white"
      style={{
        height: `${projects.length * 100}vh`,
        backgroundColor: activeProject.bgColor,
        transition: "background-color 500ms ease",
      }}
    >
      {/* Background Glow */}
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            activeIndex === 0
              ? "radial-gradient(circle at 50% 35%, rgba(0,255,180,0.14), transparent 50%)"
              : activeIndex === 1
              ? "radial-gradient(circle at 50% 35%, rgba(0,150,255,0.14), transparent 50%)"
              : "radial-gradient(circle at 50% 35%, rgba(150,80,255,0.16), transparent 50%)",
        }}
      />

      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Top Header */}
        <div className="absolute top-6 sm:top-8 left-0 w-full px-6 sm:px-10 flex justify-between items-center z-50">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-white/50">
            Selected Work
          </span>

          <span className="text-xs sm:text-sm text-white/50">
            {String(activeIndex + 1).padStart(2, "0")}
            <span className="mx-1">/</span>
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        {/* Main Content */}
        <div className="h-full w-full flex flex-col items-center justify-center px-4 sm:px-6">

          {/* Heading */}
          <h2 className="absolute top-16 sm:top-14 md:top-16 text-3xl sm:text-4xl md:text-5xl font-bold z-40">
            My Work
          </h2>

          {/* Project */}
          <div className="w-full max-w-[1200px] flex items-center justify-center">

            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.title}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -35,
                }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                }}
                className="w-full flex flex-col items-center"
              >

                {/* Label */}
                <p className="text-[9px] sm:text-xs uppercase tracking-[0.35em] text-white/45 mb-2">
                                  {/*   Featured Project */}
                </p>

                {/* Title */}
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic font-semibold text-center leading-tight">
                  {activeProject.title}
                </h3>

                {/* Description */}
                <p className="mt-1 text-xs sm:text-sm md:text-base text-white/55 text-center">
                  {activeProject.description}
                </p>

                {/* Image */}
                <motion.div
                  whileHover={!isMobile ? { scale: 1.015 } : {}}
                  transition={{ duration: 0.35 }}
                  className="
                    relative
                    mt-4
                    sm:mt-5
                    w-[90%]
                    sm:w-[84%]
                    md:w-[78%]
                    lg:w-[72%]
                    h-[38vh]
                    sm:h-[41vh]
                    md:h-[44vh]
                    lg:h-[45vh]
                    overflow-hidden
                    rounded-xl
                    sm:rounded-2xl
                    shadow-[0_25px_70px_rgba(0,0,0,0.5)]
                  "
                >
                  <motion.img
                    src={activeProject.image}
                    alt={activeProject.title}
                    loading="lazy"
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                    className="w-full h-full object-cover"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10 pointer-events-none" />
                </motion.div>

                {/* Button */}
                <motion.a
                  href={activeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${activeProject.title} project`}
                  whileHover={
                    !isMobile
                      ? {
                          scale: 1.06,
                          y: -3,
                        }
                      : {}
                  }
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                    group
                    mt-4
                    sm:mt-5
                    inline-flex
                    items-center
                    gap-3
                    px-6
                    sm:px-7
                    py-2.5
                    sm:py-3
                    rounded-full
                    bg-white
                    text-black
                    text-xs
                    sm:text-sm
                    md:text-base
                    font-semibold
                    shadow-xl
                    transition-all
                    duration-300
                  "
                >
                  <span>View Project</span>

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </motion.a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-4 sm:bottom-6 flex flex-col items-center text-white/40 z-40">
            <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.3em]">
              Scroll
            </span>

            <motion.span
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-sm sm:text-base"
            >
              ↓
            </motion.span>
          </div>
        </div>
      </div>
    </section>
  );
}