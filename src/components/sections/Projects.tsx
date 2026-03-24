"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Tag } from "lucide-react";
import Section, { SectionHeading } from "@/components/Section";
import { portfolioConfig } from "@/config/portfolio";
import { useLanguage } from "@/context/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();
  const { projects: projectsLocale } = t;
  const [active, setActive] = useState("All");

  const filtered = projectsLocale.items.filter(
    (p: any) => active === "All" || p.category === active || (active !== "All" && active === (projectsLocale.categories as any)[p.category.toLowerCase()])
  );

  return (
    <Section id="projects">
      <SectionHeading title={projectsLocale.title} subtitle={t.role} />

      {/* Filter Pills */}
      <div className="flex gap-3 mb-10 overflow-x-auto pb-2 scrollbar-hide">
        {Object.entries(projectsLocale.categories).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActive(key === "all" ? "All" : (label as string))}
            className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
              (key === "all" && active === "All") || active === label
                ? "text-white"
                : "text-[rgb(var(--text-muted))] hover:text-[rgb(var(--text))]"
            }`}
          >
            {((key === "all" && active === "All") || active === label) && (
              <motion.div
                layoutId="pill"
                className="absolute inset-0 bg-[rgb(var(--accent))] rounded-full"
                transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
              />
            )}
            <span className="relative z-10">{label as string}</span>
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project: any, i: number) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="group p-6 rounded-2xl bg-[rgb(var(--card))] border border-[rgb(var(--card-border))] hover:border-[rgb(var(--accent)/0.4)] hover:shadow-xl hover:shadow-[rgb(var(--accent)/0.06)] transition-all duration-300 flex flex-col"
            >
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="flex items-center gap-1.5 text-xs font-medium text-[rgb(var(--accent))] bg-[rgb(var(--accent)/0.1)] px-2.5 py-1 rounded-full">
                  <Tag size={11} />
                  {project.category}
                </span>
              </div>

              <h3 className="text-base font-semibold text-[rgb(var(--text))] mb-2 group-hover:text-[rgb(var(--accent))] transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-[rgb(var(--text-muted))] leading-relaxed flex-1 mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t: string) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-md bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] text-[rgb(var(--text-muted))] font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-[rgb(var(--text-muted))] hover:text-[rgb(var(--accent))] transition-colors font-medium"
                >
                  <Github size={14} />
                  GitHub
                </a>
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-[rgb(var(--text-muted))] hover:text-[rgb(var(--accent))] transition-colors font-medium"
                >
                  <ExternalLink size={14} />
                  Demo
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}
