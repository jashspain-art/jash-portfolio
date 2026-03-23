"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

export default function Footer() {
  const { contact, navigator } = portfolioConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgb(var(--border))] bg-[rgb(var(--bg-secondary)/0.5)]">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-sm font-semibold text-[rgb(var(--text))]">{navigator.name}</p>
          <p className="text-xs text-[rgb(var(--text-muted))] mt-0.5">{navigator.role}</p>
        </div>

        <div className="flex items-center gap-4">
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer"
            className="p-2 rounded-lg text-[rgb(var(--text-muted))] hover:text-[rgb(var(--accent))] hover:bg-[rgb(var(--accent)/0.1)] transition-all">
            <Linkedin size={16} />
          </a>
          <a href={`mailto:${contact.email}`}
            className="p-2 rounded-lg text-[rgb(var(--text-muted))] hover:text-[rgb(var(--accent))] hover:bg-[rgb(var(--accent)/0.1)] transition-all">
            <Mail size={16} />
          </a>
        </div>

        <p className="text-xs text-[rgb(var(--text-muted))]">
          © {year} {navigator.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
