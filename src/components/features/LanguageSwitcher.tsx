"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Globe, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Locale } from "@/config/portfolio";

const LANGUAGES: { code: Locale; label: string; flag: string; short: string }[] = [
  { code: "en", label: "English", flag: "🇺🇸", short: "EN" },
  { code: "hi", label: "हिन्दी", flag: "🇮🇳", short: "HI" },
  { code: "es", label: "Español", flag: "🇪🇸", short: "ES" },
  { code: "fr", label: "Français", flag: "🇫🇷", short: "FR" },
  { code: "it", label: "Italiano", flag: "🇮🇹", short: "IT" },
  { code: "de", label: "Deutsch", flag: "🇩🇪", short: "DE" },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastLang, setToastLang] = useState("");
  const { locale, setLocale } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageSelect = (langCode: Locale, langLabel: string) => {
    setLocale(langCode);
    setIsOpen(false);
    
    // Gamification check
    const hasSwitched = localStorage.getItem("has-switched-lang");
    if (!hasSwitched && langCode !== "en") {
      setToastLang(langLabel);
      setShowToast(true);
      localStorage.setItem("has-switched-lang", "true");
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  const currentLang = LANGUAGES.find((l) => l.code === locale) || LANGUAGES[0];

  return (
    <>
      <div className="fixed top-24 right-6 z-50" ref={dropdownRef}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-[rgb(var(--card))] border border-[rgb(var(--accent)/0.3)] shadow-xl hover:shadow-[rgb(var(--accent)/0.5)] transition-all text-[rgb(var(--text))] backdrop-blur-md"
        >
          <Globe size={22} className="text-[rgb(var(--accent))]" />
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20, y: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 20, y: -20 }}
              className="absolute right-0 top-14 w-48 bg-[rgb(var(--bg)/0.85)] backdrop-blur-xl border border-[rgb(var(--border))] rounded-2xl shadow-2xl overflow-hidden py-2"
            >
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageSelect(lang.code, lang.label)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors hover:bg-[rgb(var(--accent)/0.1)] ${
                    locale === lang.code ? "text-[rgb(var(--accent))] font-semibold" : "text-[rgb(var(--text-muted))]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono opacity-50">{lang.short}</span>
                    {locale === lang.code && <Check size={14} />}
                  </div>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Gamification Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: "-50%" }}
            animate={{ opacity: 1, y: 20, x: "-50%" }}
            exit={{ opacity: 0, y: -50, x: "-50%" }}
            className="fixed top-0 left-1/2 z-[100] flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[rgb(var(--accent))] to-[#8b5cf6] text-white shadow-xl shadow-[rgb(var(--accent)/0.3)]"
          >
            <span className="text-xl">🔓</span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider opacity-90">Language Unlocked</p>
              <p className="text-sm font-medium">{toastLang} successfully equipped!</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
