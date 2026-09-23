import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { 
  FaJava, 
  FaReact, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaGitAlt, 
  FaPython 
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiNextdotjs, 
  SiMongodb, 
  SiPostgresql 
} from 'react-icons/si';

const skills = [
  { name: 'Java', icon: FaJava },
  { name: 'React', icon: FaReact },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'JavaScript', icon: FaJsSquare },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'HTML5', icon: FaHtml5 },
  { name: 'CSS3', icon: FaCss3Alt },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Git', icon: FaGitAlt },
  { name: 'Python', icon: FaPython },
];

export default function Skills() {
  const repeated = [...skills, ...skills];

  const [dir, setDir] = useState(-1);
  const [active, setActive] = useState(false);

  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const touchY = useRef(null);

  const x = useMotionValue(0);

  // 1. Intersection Observer to detect when section is in view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting && entry.intersectionRatio > 0.1);
      },
      { threshold: 0.1 }
    );

    io.observe(el);

    return () => io.disconnect();
  }, []);

  // 2. Track scroll direction via mouse wheel and touch gestures
  useEffect(() => {
    if (!active) return;

    const onWheel = (e) => {
      setDir(e.deltaY > 0 ? -1 : 1);
    };

    const onTouchStart = (e) => {
      touchY.current = e.touches[0].clientY;
    };

    const onTouchMove = (e) => {
      if (touchY.current === null) return;
      const delta = e.touches[0].clientY - touchY.current;
      setDir(delta > 0 ? 1 : -1);
      touchY.current = e.touches[0].clientY;
    };

    window.addEventListener('wheel', onWheel);
    window.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchmove', onTouchMove);

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, [active]);

  // 3. Smooth animation loop across frames
  useEffect(() => {
    let id;
    let last = performance.now();
    const speed = 80;

    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;

      let next = x.get() + speed * dir * dt;
      const loop = (trackRef.current?.scrollWidth / 2) || 0;

      if (loop) {
        if (next <= -loop) {
          next += loop;
        } else if (next >= 0) {
          next -= loop;
        }
      }

      x.set(next);
      id = requestAnimationFrame(tick);
    };

    id = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(id);
  }, [dir, x]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative flex flex-col justify-center items-center w-full min-h-[50vh] pb-8 bg-black text-white overflow-hidden"
    >
      {/* Background Glow Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse delay-500" />
      </div>

      {/* Heading */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold mt-5 z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        My Skills
      </motion.h2>

      <motion.p
        className="mt-2 mb-8 text-white/90 text-base sm:text-lg z-10"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Modern Applications & Modern Technologies
      </motion.p>

      {/* Infinite Scrolling Track */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          ref={trackRef}
          style={{ x, whiteSpace: 'nowrap', willChange: 'transform' }}
          className="flex gap-10 text-6xl text-[#1cd8d2]"
        >
          {repeated.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                aria-label={s.name}
                title={s.name}
                className="flex flex-col items-center gap-2 min-w-[120px]"
              >
                <span className="hover:scale-125 transition-transform duration-300">
                  <Icon />
                </span>
                <p className="text-sm text-gray-300 font-normal">
                  {s.name}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}