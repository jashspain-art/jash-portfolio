"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, children, className = "" }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-6xl mx-auto px-6 py-24 ${className}`}
    >
      {children}
    </motion.section>
  );
}

export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-16">
      <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[rgb(var(--accent))]">
        {subtitle || title}
      </span>
      <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[rgb(var(--text))] tracking-tight">
        {title}
      </h2>
      <div className="mt-4 h-px w-16 bg-[rgb(var(--accent))]" />
    </div>
  );
}
