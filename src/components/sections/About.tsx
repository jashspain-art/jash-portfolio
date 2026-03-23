"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Zap } from "lucide-react";
import Section, { SectionHeading } from "@/components/Section";
import { portfolioConfig } from "@/config/portfolio";

const highlights = [
  { icon: Zap, label: "5+ Years Experience", sub: "Sales & Business Development" },
  { icon: GraduationCap, label: "MSc in Progress", sub: "Digital Marketing & Analytics" },
  { icon: MapPin, label: "Based in", sub: "Barcelona, Spain" },
];

export default function About() {
  const { about } = portfolioConfig;
  return (
    <Section id="about">
      <SectionHeading title="About Me" subtitle="My Story" />
      <div className="grid md:grid-cols-5 gap-12 items-start">
        {/* Text */}
        <div className="md:col-span-3 space-y-5">
          {about.content.split("\n\n").map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2 }}
              className="text-[rgb(var(--text-muted))] leading-relaxed text-base"
            >
              {para}
            </motion.p>
          ))}
        </div>

        {/* Highlights */}
        <div className="md:col-span-2 space-y-4">
          {highlights.map(({ icon: Icon, label, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.3 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-[rgb(var(--card))] border border-[rgb(var(--card-border))] hover:border-[rgb(var(--accent)/0.4)] transition-all group"
            >
              <div className="p-2.5 rounded-lg bg-[rgb(var(--accent)/0.1)] text-[rgb(var(--accent))] group-hover:bg-[rgb(var(--accent)/0.2)] transition-colors">
                <Icon size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold text-[rgb(var(--text))]">{label}</p>
                <p className="text-xs text-[rgb(var(--text-muted))]">{sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
