"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioConfig } from "@/config/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "./features/LanguageSwitcher";

export default function Navbar() {
  const { t } = useLanguage();
  const navLinks = [
    { label: t.about.title.split(" ")[0], href: "#about" }, // "About"
    { label: t.experience.title, href: "#experience" },
    { label: t.projects.title.split(" ")[0], href: "#projects" }, // "Projects"
    { label: t.skills.title.split(" ")[0], href: "#skills" }, // "Skills"
    { label: t.contact.title.split(" ")[0], href: "#contact" }, // "Contact"
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgb(var(--bg)/0.85)] backdrop-blur-xl border-b border-[rgb(var(--border)/0.5)] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="text-sm font-semibold tracking-tight text-[rgb(var(--text))] hover:text-[rgb(var(--accent))] transition-colors"
        >
          {t.name}
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm text-[rgb(var(--text-muted))] hover:text-[rgb(var(--text))] transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-[rgb(var(--text-muted))] hover:text-[rgb(var(--text))] transition-all"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[rgb(var(--bg))] border-b border-[rgb(var(--border)/0.5)]"
          >
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-sm text-[rgb(var(--text-muted))] hover:text-[rgb(var(--text))] transition-colors py-2 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
