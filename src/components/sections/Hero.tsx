"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

export default function Hero() {
  const { hero } = portfolioConfig;

  const handleScroll = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(href, "_blank");
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[rgb(var(--accent)/0.08)] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[rgb(var(--accent)/0.05)] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgb(var(--accent)/0.4)] bg-[rgb(var(--accent)/0.08)] mb-8"
        >
          <span className="w-2 h-2 bg-[rgb(var(--accent))] rounded-full animate-pulse" />
          <span className="text-xs font-medium text-[rgb(var(--accent))] tracking-wide">
            Open to Opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl font-bold text-[rgb(var(--text))] tracking-tight leading-none mb-6"
        >
          {hero.name}
        </motion.h1>

        {/* Headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl md:text-2xl font-semibold text-[rgb(var(--accent))] mb-5 leading-tight"
        >
          {hero.headline}
        </motion.p>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-base md:text-lg text-[rgb(var(--text-muted))] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {hero.subtext}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {hero.cta.map((btn) => (
            <button
              key={btn.label}
              onClick={() => handleScroll(btn.href)}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                btn.variant === "primary"
                  ? "bg-[rgb(var(--accent))] text-white hover:bg-[rgb(var(--accent-hover))] shadow-lg shadow-[rgb(var(--accent)/0.25)] hover:shadow-[rgb(var(--accent)/0.4)]"
                  : btn.variant === "secondary"
                  ? "bg-[rgb(var(--card))] border border-[rgb(var(--border))] text-[rgb(var(--text))] hover:border-[rgb(var(--accent)/0.5)] hover:text-[rgb(var(--accent))]"
                  : "border border-[rgb(var(--border))] text-[rgb(var(--text-muted))] hover:border-[rgb(var(--accent)/0.5)] hover:text-[rgb(var(--accent))]"
              }`}
            >
              {btn.label === "Download Resume" && <Download size={14} />}
              {btn.label === "Contact Me" && <Mail size={14} />}
              {btn.label}
            </button>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[rgb(var(--text-muted))]"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
