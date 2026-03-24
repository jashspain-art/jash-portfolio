"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const { email, linkedin } = portfolioConfig.common;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgb(var(--border))] bg-[rgb(var(--bg-secondary)/0.5)]">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-sm font-semibold text-[rgb(var(--text))]">{t.name}</p>
          <p className="text-xs text-[rgb(var(--text-muted))] mt-0.5">{t.role}</p>
        </div>

        <div className="flex items-center gap-4">
          <a href={linkedin} target="_blank" rel="noopener noreferrer"
            className="p-2 rounded-lg text-[rgb(var(--text-muted))] hover:text-[rgb(var(--accent))] hover:bg-[rgb(var(--accent)/0.1)] transition-all">
            <Linkedin size={16} />
          </a>
          <a href={`mailto:${email}`}
            className="p-2 rounded-lg text-[rgb(var(--text-muted))] hover:text-[rgb(var(--accent))] hover:bg-[rgb(var(--accent)/0.1)] transition-all">
            <Mail size={16} />
          </a>
        </div>

        <p className="text-xs text-[rgb(var(--text-muted))]">
          © {year} {t.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
