"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Tag } from "lucide-react";
import Section, { SectionHeading } from "@/components/Section";
import { useLanguage } from "@/context/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();
  const { projects: projectsLocale } = t;
  const [active, setActive] = useState("All");

  const filtered = projectsLocale.items.filter(
    (p: any) => active === "All" || p.category === active || (active !== "All" && active === (projectsLocale.categories as any)[p.category.toLowerCase()])
  );

  // Map titles to local screenshot paths
  const getScreenshot = (title: string) => {
    const cleanTitle = title.toLowerCase().trim();
    if (cleanTitle.includes("partneros")) return "/images/partneros.png";
    if (cleanTitle.includes("daksha")) return "/images/daksha.png";
    if (cleanTitle.includes("kayzad")) return "/images/kayzad.png";
    if (cleanTitle.includes("portfolio")) return "/images/portfolio.png";
    return "/images/portfolio.png";
  };

  return (
    <Section id="projects">
      <SectionHeading title={projectsLocale.title} subtitle={t.role} />

      {/* Filter Pills */}
      <div className="flex gap-3 mb-12 overflow-x-auto pb-2 scrollbar-hide">
        {Object.entries(projectsLocale.categories).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActive(key === "all" ? "All" : (label as string))}
            className={`relative px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-all cursor-pointer whitespace-nowrap ${
              (key === "all" && active === "All") || active === label
                ? "text-white"
                : "text-[rgb(var(--text-muted))] hover:text-[rgb(var(--text))]"
            }`}
          >
            {((key === "all" && active === "All") || active === label) && (
              <motion.div
                layoutId="pill"
                className="absolute inset-0 bg-[rgb(var(--accent))] rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
              />
            )}
            <span className="relative z-10">{label as string}</span>
          </button>
        ))}
      </div>

      {/* Project Cards Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filtered.map((project: any, i: number) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-3xl bg-[rgb(var(--card))] border border-[rgb(var(--card-border))] hover:border-[rgb(var(--accent)/0.4)] shadow-lg hover:shadow-2xl hover:shadow-[rgb(var(--accent)/0.04)] transition-all duration-500 flex flex-col overflow-hidden"
            >
              {/* Screenshot Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-950 border-b border-[rgb(var(--card-border))]">
                <img
                  src={getScreenshot(project.title)}
                  alt={`${project.title} Website Preview`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Details */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-[rgb(var(--accent))] bg-[rgb(var(--accent)/0.1)] px-3 py-1.5 rounded-full border border-[rgb(var(--accent)/0.15)]">
                    <Tag size={10} />
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[rgb(var(--accent))] transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-sm text-[rgb(var(--text-muted))] leading-relaxed flex-1 mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t: string) => (
                    <span
                      key={t}
                      className="text-[11px] px-3 py-1 rounded-lg bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] text-[rgb(var(--text-muted))] font-medium group-hover:border-zinc-800 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Visit button */}
                {project.links && project.links.demo && (
                  <motion.a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 3 }}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold tracking-wide uppercase bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] text-white hover:bg-[rgb(var(--accent))] hover:border-[rgb(var(--accent))] hover:text-white transition-all duration-300"
                  >
                    Visit Website
                    <ExternalLink size={12} />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}
