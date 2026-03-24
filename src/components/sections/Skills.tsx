"use client";

import { motion } from "framer-motion";
import { Cpu, TrendingUp, Wrench, Users } from "lucide-react";
import Section, { SectionHeading } from "@/components/Section";
import { portfolioConfig } from "@/config/portfolio";
import { useLanguage } from "@/context/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();
  const { skills: skillsLocale } = t;
  const { skills, languages } = portfolioConfig.common;

  const categories = [
    { key: "ai" as const, label: skillsLocale.ai, icon: Cpu },
    { key: "business" as const, label: skillsLocale.business, icon: TrendingUp },
    { key: "tools" as const, label: skillsLocale.tools, icon: Wrench },
    { key: "leadership" as const, label: skillsLocale.leadership, icon: Users },
  ];

  return (
    <Section id="skills">
      <SectionHeading title={skillsLocale.title} subtitle={t.role} />

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {categories.map(({ key, label, icon: Icon }, ci) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.1 }}
            className="p-6 rounded-2xl bg-[rgb(var(--card))] border border-[rgb(var(--card-border))] hover:border-[rgb(var(--accent)/0.3)] transition-all"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 rounded-lg bg-[rgb(var(--accent)/0.1)] text-[rgb(var(--accent))]">
                <Icon size={16} />
              </div>
              <h3 className="text-sm font-semibold text-[rgb(var(--text))]">{label}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
               {(skills as any)[key].map((skill: string, i: number) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: ci * 0.05 + i * 0.04 }}
                  className="text-xs px-3 py-1.5 rounded-lg bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] text-[rgb(var(--text-muted))] hover:border-[rgb(var(--accent)/0.4)] hover:text-[rgb(var(--text))] transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Languages */}
      <div>
        <h3 className="text-sm font-semibold text-[rgb(var(--text))] mb-5 flex items-center gap-2">
          <span className="text-lg">🌍</span> {portfolioConfig.locales.en.skills.title === skillsLocale.title ? "Languages" : (skillsLocale as any).languages || "Languages"}
        </h3>
        <div className="flex flex-wrap gap-4">
          {languages.map((lang: any, i: number) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[rgb(var(--card))] border border-[rgb(var(--card-border))] hover:border-[rgb(var(--accent)/0.3)] transition-all"
            >
              <span className="text-base font-semibold text-[rgb(var(--text))]">{lang.name}</span>
              <span className="text-xs text-[rgb(var(--accent))] bg-[rgb(var(--accent)/0.1)] px-2 py-0.5 rounded-full">
                {lang.level}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
