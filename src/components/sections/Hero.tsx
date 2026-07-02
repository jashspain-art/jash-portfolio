"use client";

import { motion } from "framer-motion";
import { Download, Mail, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

// Floating particle
function Particle({ x, y, delay }: { x: string; y: string; delay: number }) {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-[rgb(var(--accent)/0.4)]"
      style={{ left: x, top: y }}
      animate={{
        y: [0, -30, 0],
        opacity: [0, 1, 0],
        scale: [0.5, 1.5, 0.5],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

const PARTICLES = [
  { x: "15%", y: "60%", delay: 0 },
  { x: "25%", y: "40%", delay: 0.5 },
  { x: "75%", y: "55%", delay: 1 },
  { x: "85%", y: "35%", delay: 1.5 },
  { x: "60%", y: "70%", delay: 0.8 },
  { x: "40%", y: "25%", delay: 1.2 },
  { x: "90%", y: "65%", delay: 0.3 },
  { x: "10%", y: "30%", delay: 2 },
];

export default function Hero() {
  const { t } = useLanguage();
  const { hero } = t;
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Parallax mouse tracking for orbs
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 25 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.65, 
        ease: "easeOut" 
      } 
    },
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] flex flex-col items-center justify-center px-6 overflow-hidden py-20 bg-gradient-to-b from-[#050505] via-[#0b0c10]/20 to-[#050505]"
    >
      {/* ── Parallax Gradient Orbs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[rgb(var(--accent)/0.08)] rounded-full blur-3xl"
          style={{ x: (mousePos.x * -35) as any, y: (mousePos.y * -35) as any }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-[380px] h-[380px] bg-[rgb(var(--accent)/0.05)] rounded-full blur-3xl"
          style={{ x: (mousePos.x * 25) as any, y: (mousePos.y * 25) as any }}
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgb(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--accent)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ── Floating Particles ── */}
      <div className="absolute inset-0 pointer-events-none">
        {PARTICLES.map((p, i) => (
          <Particle key={i} {...p} />
        ))}
      </div>

      {/* ── Main Content ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center"
      >
        {/* Eyebrow badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgb(var(--accent)/0.3)] bg-[rgb(var(--accent)/0.06)] cursor-default transition-colors duration-300"
          >
            <span className="w-2 h-2 bg-[rgb(var(--accent))] rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-[rgb(var(--accent))] tracking-wide uppercase">
              Business Development • Strategic Partnerships
            </span>
          </motion.div>
        </motion.div>

        {/* Name — letter-by-letter reveal */}
        <h1 className="text-5xl md:text-8xl font-black text-white tracking-tight leading-none mb-6">
          {t.name.split(" ").map((word: string, wi: number) => (
            <span key={wi} className="inline-block mr-4">
              {word.split("").map((char: string, ci: number) => (
                <motion.span
                  key={ci}
                  className="inline-block bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
                  initial={{ opacity: 0, y: 15, rotateX: -60 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    delay: 0.2 + wi * 0.1 + ci * 0.03,
                    duration: 0.45,
                    ease: "easeOut",
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        {/* Headline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[rgb(var(--accent))] to-[#60a5fa] mb-6 leading-tight max-w-3xl"
        >
          {hero.headline}
        </motion.p>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-[rgb(var(--text-muted))] max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          {hero.subtext}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.button
            onClick={() => handleScroll("#projects")}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 bg-[rgb(var(--accent))] text-white shadow-lg shadow-[rgb(var(--accent)/0.25)] hover:bg-[rgb(var(--accent)/0.9)]"
          >
            {hero.cta.projects}
            <ChevronRight size={14} />
          </motion.button>

          <motion.a
            href="/Jash_Thakkar_Resume.png"
            download="Jash_Thakkar_Resume.png"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 bg-[rgb(var(--card))] border border-[rgb(var(--card-border))] text-[rgb(var(--text))] hover:border-[rgb(var(--accent)/0.5)] hover:bg-[rgb(var(--card-border))]"
          >
            <Download size={14} />
            {hero.cta.resume}
          </motion.a>

          <motion.button
            onClick={() => handleScroll("#contact")}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 border border-[rgb(var(--border))] text-[rgb(var(--text-muted))] hover:border-[rgb(var(--accent)/0.5)] hover:text-white"
          >
            <Mail size={14} />
            {hero.cta.contact}
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
