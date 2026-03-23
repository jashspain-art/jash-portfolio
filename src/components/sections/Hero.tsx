"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Download, Mail, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { portfolioConfig } from "@/config/portfolio";

// Animated counter
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, to, { duration: 2, delay: 1, ease: "easeOut" });
    const unsubscribe = rounded.on("change", setDisplay);
    return () => { controls.stop(); unsubscribe(); };
  }, [count, rounded, to]);

  return <span>{display}{suffix}</span>;
}

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

const STATS = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 3, suffix: "", label: "Countries Worked" },
  { value: 100, suffix: "+", label: "Deals Closed" },
];

export default function Hero() {
  const { hero } = portfolioConfig;
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
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(href, "_blank");
    }
  };

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 28 },
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
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* ── Parallax Gradient Orbs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[rgb(var(--accent)/0.07)] rounded-full blur-3xl"
          style={{ x: (mousePos.x * -40) as any, y: (mousePos.y * -40) as any }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-[380px] h-[380px] bg-[rgb(var(--accent)/0.05)] rounded-full blur-3xl"
          style={{ x: (mousePos.x * 30) as any, y: (mousePos.y * 30) as any }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
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
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Eyebrow badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgb(var(--accent)/0.4)] bg-[rgb(var(--accent)/0.08)] cursor-default"
          >
            <span className="w-2 h-2 bg-[rgb(var(--accent))] rounded-full animate-pulse" />
            <span className="text-xs font-medium text-[rgb(var(--accent))] tracking-wide">
              Open to Opportunities
            </span>
            <ChevronRight size={12} className="text-[rgb(var(--accent))]" />
          </motion.div>
        </motion.div>

        {/* Name — letter-by-letter reveal */}
        <div className="text-5xl md:text-7xl font-bold text-[rgb(var(--text))] tracking-tight leading-none mb-6">
          {hero.name.split(" ").map((word, wi) => (
            <span key={wi} className="inline-block mr-4">
              {word.split("").map((char, ci) => (
                <motion.span
                  key={ci}
                  className="inline-block"
                  initial={{ opacity: 0, y: 20, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    delay: 0.3 + wi * 0.12 + ci * 0.04,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </div>

        {/* Headline */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl font-semibold text-[rgb(var(--accent))] mb-5 leading-tight"
        >
          {hero.headline}
        </motion.p>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-[rgb(var(--text-muted))] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {hero.subtext}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          {hero.cta.map((btn, i) => (
            <motion.button
              key={btn.label}
              onClick={() => handleScroll(btn.href)}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 + (i * 0.1) }}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                btn.variant === "primary"
                  ? "bg-[rgb(var(--accent))] text-white shadow-lg shadow-[rgb(var(--accent)/0.3)] hover:shadow-[rgb(var(--accent)/0.5)]"
                  : btn.variant === "secondary"
                  ? "bg-[rgb(var(--card))] border border-[rgb(var(--border))] text-[rgb(var(--text))] hover:border-[rgb(var(--accent)/0.6)] hover:text-[rgb(var(--accent))]"
                  : "border border-[rgb(var(--border))] text-[rgb(var(--text-muted))] hover:border-[rgb(var(--accent)/0.5)] hover:text-[rgb(var(--accent))]"
              }`}
            >
              {btn.label === "Download Resume" && <Download size={14} />}
              {btn.label === "Contact Me" && <Mail size={14} />}
              {btn.label}
            </motion.button>
          ))}
        </motion.div>

        {/* ── Animated Stats ── */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {STATS.map(({ value, suffix, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 + (i * 0.15), duration: 0.5, ease: "backOut" }}
              whileHover={{ scale: 1.08 }}
              className="text-center cursor-default"
            >
              <div className="text-3xl md:text-4xl font-bold text-[rgb(var(--text))] tabular-nums">
                <Counter to={value} suffix={suffix} />
              </div>
              <div className="text-xs text-[rgb(var(--text-muted))] mt-1 tracking-wide">
                {label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
