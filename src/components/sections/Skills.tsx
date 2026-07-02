"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Brain, 
  Cpu, 
  Globe, 
  Send, 
  Zap, 
  Layers, 
  Sliders 
} from "lucide-react";
import Section, { SectionHeading } from "@/components/Section";
import { portfolioConfig } from "@/config/portfolio";
import { useLanguage } from "@/context/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();
  const { skills: skillsLocale } = t;
  const { skills, languages } = portfolioConfig.common;

  const categories = [
    { key: "business" as const, label: skillsLocale.business, icon: TrendingUp },
    { key: "generative_ai" as const, label: skillsLocale.generative_ai, icon: Brain },
    { key: "ai_development" as const, label: skillsLocale.ai_development, icon: Cpu },
    { key: "website_development" as const, label: skillsLocale.website_development, icon: Globe },
    { key: "deployment" as const, label: skillsLocale.deployment, icon: Send },
    { key: "ai_applications" as const, label: skillsLocale.ai_applications, icon: Zap },
    { key: "digital_marketing" as const, label: skillsLocale.digital_marketing, icon: Layers },
    { key: "productivity" as const, label: skillsLocale.productivity, icon: Sliders },
  ];

  return (
    <Section id="skills">
      <SectionHeading title={skillsLocale.title} subtitle={t.role} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
        {categories.map(({ key, label, icon: Icon }, ci) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.05 }}
            className="p-6 rounded-2xl bg-[rgb(var(--card))] border border-[rgb(var(--card-border))] hover:border-[rgb(var(--accent)/0.3)] transition-all duration-300 flex flex-col hover:shadow-md hover:shadow-[rgb(var(--accent)/0.02)]"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 rounded-lg bg-[rgb(var(--accent)/0.1)] text-[rgb(var(--accent))]">
                <Icon size={16} />
              </div>
              <h3 className="text-sm font-semibold text-white">{label || key}</h3>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
               {((skills as any)[key] || []).map((skill: string, i: number) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: ci * 0.02 + i * 0.02 }}
                  className="text-[11px] px-2.5 py-1.5 rounded-lg bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] text-[rgb(var(--text-muted))] hover:border-[rgb(var(--accent)/0.4)] hover:text-white transition-all cursor-default font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Languages */}
      <div className="mt-12 pt-6 border-t border-[rgb(var(--border))/0.4]">
        <h3 className="text-sm font-semibold text-white mb-6 flex items-center gap-2">
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
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[rgb(var(--card))] border border-[rgb(var(--card-border))] hover:border-[rgb(var(--accent)/0.3)] transition-all duration-300"
            >
              <span className="text-sm font-semibold text-white">{lang.name}</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[rgb(var(--accent))] bg-[rgb(var(--accent)/0.1)] px-2.5 py-1 rounded-full">
                {lang.level}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
