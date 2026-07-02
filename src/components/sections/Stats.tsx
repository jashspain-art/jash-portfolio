"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Section from "@/components/Section";
import { useLanguage } from "@/context/LanguageContext";

// Simple count up component that triggers when in view
function StatNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      const unsubscribe = rounded.on("change", setDisplay);
      return () => {
        controls.stop();
        unsubscribe();
      };
    }
  }, [isInView, count, rounded, value]);

  return (
    <span ref={ref} className="text-4xl md:text-6xl font-black text-white tracking-tight tabular-nums">
      {display}
      <span className="text-[rgb(var(--accent))]">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  const { t } = useLanguage();
  
  // Custom stats based on user specifications
  const statsList = [
    { value: 5, suffix: "+", label: "Years Experience" },
    { value: 2, suffix: "", label: "Master's Degrees" },
    { value: 3, suffix: "", label: "Countries Studied" },
    { value: 15, suffix: "+", label: "Qualified Leads Generated Monthly" }
  ];

  // If language is Hindi, translate labels
  const getLabel = (label: string) => {
    if (t.locales && t.locales.hi && t.skills.title !== "Skills & Expertise") {
      // Hindi translation helper
      if (label === "Years Experience") return "वर्षों का अनुभव";
      if (label === "Master's Degrees") return "मास्टर डिग्री";
      if (label === "Countries Studied") return "देशों में पढ़ाई";
      if (label === "Qualified Leads Generated Monthly") return "प्रति माह उत्पन्न योग्य लीड";
    }
    return label;
  };

  return (
    <Section id="stats" className="py-12 md:py-16 bg-[rgb(var(--card))] border-y border-[rgb(var(--card-border))]">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto px-6">
        {statsList.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-[rgb(var(--bg))/0.4] border border-[rgb(var(--card-border))] shadow-md hover:shadow-lg hover:border-[rgb(var(--accent)/0.2)] transition-all group duration-300"
          >
            <StatNumber value={stat.value} suffix={stat.suffix} />
            <span className="text-xs md:text-sm font-semibold text-[rgb(var(--text-muted))] mt-3 max-w-[150px] leading-snug group-hover:text-white transition-colors duration-300">
              {getLabel(stat.label)}
            </span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
