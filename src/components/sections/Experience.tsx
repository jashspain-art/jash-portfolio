"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, ChevronRight } from "lucide-react";
import Section, { SectionHeading } from "@/components/Section";
import { useLanguage } from "@/context/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();
  const { experience, education } = t;

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
            <h3 className="text-lg font-semibold text-[rgb(var(--text))]">Work Experience</h3>
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
                  transition={{ delay: i * 0.12 }}
                  className="relative pl-7"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-2 w-3.5 h-3.5 rounded-full border-2 border-[rgb(var(--accent))] bg-[rgb(var(--bg))]" />

                  <div className="p-5 rounded-xl bg-[rgb(var(--card))] border border-[rgb(var(--card-border))] hover:border-[rgb(var(--accent)/0.3)] transition-all group">
                    <span className="text-xs font-medium text-[rgb(var(--accent))] bg-[rgb(var(--accent)/0.1)] px-2.5 py-1 rounded-full">
                      {item.period}
                    </span>
                    <h4 className="mt-3 text-base font-semibold text-[rgb(var(--text))] group-hover:text-[rgb(var(--accent))] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-[rgb(var(--text-muted))] mt-0.5 mb-3">
                      {item.company}
                    </p>
                    <ul className="space-y-1.5">
                      {item.description.map((point: string, j: number) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-[rgb(var(--text-muted))]">
                          <ChevronRight size={14} className="mt-0.5 text-[rgb(var(--accent))] flex-shrink-0" />
                          {point}
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
            <h3 className="text-lg font-semibold text-[rgb(var(--text))]">Education</h3>
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
                  transition={{ delay: i * 0.12 }}
                  className="relative pl-7"
                >
                  <div className="absolute left-0 top-2 w-3.5 h-3.5 rounded-full border-2 border-[rgb(var(--accent)/0.5)] bg-[rgb(var(--bg))]" />
                  <div className="p-5 rounded-xl bg-[rgb(var(--card))] border border-[rgb(var(--card-border))] hover:border-[rgb(var(--accent)/0.3)] transition-all">
                    <span className="text-xs font-medium text-[rgb(var(--accent))] bg-[rgb(var(--accent)/0.1)] px-2.5 py-1 rounded-full">
                      {item.period}
                    </span>
                    <h4 className="mt-3 text-base font-semibold text-[rgb(var(--text))]">
                      {item.degree}
                    </h4>
                    <p className="text-sm text-[rgb(var(--text-muted))] mt-0.5">
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
