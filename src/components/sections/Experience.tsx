"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, ChevronRight } from "lucide-react";
import Section, { SectionHeading } from "@/components/Section";
import { useLanguage } from "@/context/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();
  const { experience, education } = t;

  const isHindi = t.skills.title !== "Skills & Expertise";

  return (
    <Section id="experience">
      <SectionHeading title={`${experience.title} & ${education.title}`} subtitle={t.role} />

      <div className="grid md:grid-cols-2 gap-16">
        {/* Experience */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-[rgb(var(--accent)/0.1)] text-[rgb(var(--accent))]">
              <Briefcase size={16} />
            </div>
            <h3 className="text-lg font-semibold text-white">
              {isHindi ? "कार्य अनुभव" : "Work Experience"}
            </h3>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[rgb(var(--border))]" />

            <div className="space-y-8">
              {experience.items.map((item: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-7"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-2.5 w-3.5 h-3.5 rounded-full border-2 border-[rgb(var(--accent))] bg-[#050505]" />

                  <div className="p-5 rounded-xl bg-[rgb(var(--card))] border border-[rgb(var(--card-border))] hover:border-[rgb(var(--accent)/0.3)] hover:shadow-md transition-all group duration-300">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[rgb(var(--accent))] bg-[rgb(var(--accent)/0.1)] px-2.5 py-1 rounded-full">
                      {item.period}
                    </span>
                    <h4 className="mt-3 text-base font-bold text-white group-hover:text-[rgb(var(--accent))] transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[rgb(var(--text-muted))] mt-0.5 mb-3 font-semibold uppercase tracking-wider">
                      {item.company}
                    </p>
                    <ul className="space-y-2">
                      {item.description.map((point: string, j: number) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-[rgb(var(--text-muted))]">
                          <ChevronRight size={13} className="mt-1 text-[rgb(var(--accent))] flex-shrink-0" />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-[rgb(var(--accent)/0.1)] text-[rgb(var(--accent))]">
              <GraduationCap size={16} />
            </div>
            <h3 className="text-lg font-semibold text-white">
              {education.title}
            </h3>
          </div>

          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[rgb(var(--border))]" />
            <div className="space-y-6">
              {education.items.map((item: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-7"
                >
                  <div className="absolute left-0 top-2.5 w-3.5 h-3.5 rounded-full border-2 border-[rgb(var(--accent)/0.5)] bg-[#050505]" />
                  <div className="p-5 rounded-xl bg-[rgb(var(--card))] border border-[rgb(var(--card-border))] hover:border-[rgb(var(--accent)/0.3)] hover:shadow-md transition-all duration-300">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[rgb(var(--accent))] bg-[rgb(var(--accent)/0.1)] px-2.5 py-1 rounded-full">
                      {item.period}
                    </span>
                    <h4 className="mt-3 text-base font-bold text-white">
                      {item.degree}
                    </h4>
                    <p className="text-xs text-[rgb(var(--text-muted))] mt-0.5 font-semibold uppercase tracking-wider">
                      {item.school}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
