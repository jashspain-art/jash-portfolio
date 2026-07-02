"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, Send, CheckCircle } from "lucide-react";
import Section, { SectionHeading } from "@/components/Section";
import { portfolioConfig } from "@/config/portfolio";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const { contact: contactLocale } = t;
  const { common: contact } = portfolioConfig;
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate send
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  const socials = [
    { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phone}` },
    { icon: Linkedin, label: "LinkedIn", value: "Jash Thakkar", href: contact.linkedin },
    { icon: MapPin, label: "Current Location", value: "Navi Mumbai, India (Open to Relocation)", href: "#" },
  ];

  return (
    <Section id="contact" className="py-20 bg-gradient-to-t from-[#050505] to-transparent">
      <SectionHeading title={contactLocale.title} subtitle={contactLocale.subtitle} />

      <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
        {/* Info Cards */}
        <div className="lg:col-span-2 space-y-4">
          <p className="text-[rgb(var(--text-muted))] leading-relaxed text-sm mb-6">
            {contactLocale.subtitle}
          </p>

          <div className="grid gap-4">
            {socials.map(({ icon: Icon, label, value, href }, i) => {
              const isLink = href !== "#";
              const CardWrapper = isLink ? motion.a : motion.div;
              
              return (
                <CardWrapper
                  key={label}
                  href={isLink ? href : undefined}
                  target={isLink && href.startsWith("http") ? "_blank" : undefined}
                  rel={isLink ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`flex items-center gap-4 p-5 rounded-2xl bg-[rgb(var(--card))] border border-[rgb(var(--card-border))] hover:border-[rgb(var(--accent)/0.35)] hover:shadow-md transition-all duration-300 group ${isLink ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  <div className="p-3 rounded-xl bg-[rgb(var(--accent)/0.08)] text-[rgb(var(--accent))] group-hover:bg-[rgb(var(--accent))] group-hover:text-white transition-all duration-300">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[rgb(var(--text-muted))]">{label}</p>
                    <p className="text-sm font-semibold text-white group-hover:text-[rgb(var(--accent))] transition-colors duration-300">
                      {value}
                    </p>
                  </div>
                </CardWrapper>
              );
            })}
          </div>
        </div>

        {/* Message Form */}
        <div className="lg:col-span-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="p-8 rounded-3xl bg-[rgb(var(--card))] border border-[rgb(var(--card-border))] hover:border-[rgb(var(--accent)/0.15)] transition-all duration-500 shadow-xl"
          >
            {sent ? (
              <div className="py-12 flex flex-col items-center justify-center gap-4 text-center">
                <div className="p-4 rounded-full bg-[rgb(var(--accent)/0.1)] text-[rgb(var(--accent))] animate-bounce">
                  <CheckCircle size={36} />
                </div>
                <h3 className="text-xl font-bold text-white mt-2">{contactLocale.form.success}</h3>
                <p className="text-sm text-[rgb(var(--text-muted))] max-w-[280px]">
                  Thank you for reaching out! I will get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[rgb(var(--text-muted))] uppercase tracking-wider mb-2">
                      {contactLocale.form.name}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={contactLocale.form.name}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-[rgb(var(--accent))] focus:ring-1 focus:ring-[rgb(var(--accent)/0.3)] transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[rgb(var(--text-muted))] uppercase tracking-wider mb-2">
                      {contactLocale.form.email}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-[rgb(var(--accent))] focus:ring-1 focus:ring-[rgb(var(--accent)/0.3)] transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[rgb(var(--text-muted))] uppercase tracking-wider mb-2">
                    {contactLocale.form.message}
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Briefly describe your proposal or inquiry..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-[rgb(var(--accent))] focus:ring-1 focus:ring-[rgb(var(--accent)/0.3)] transition-all duration-300 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[rgb(var(--accent))] hover:bg-[rgb(var(--accent)/0.95)] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 shadow-lg shadow-[rgb(var(--accent)/0.2)] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Send size={13} />
                  )}
                  {loading ? "Sending..." : contactLocale.form.send}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
