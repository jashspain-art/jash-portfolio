"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Send, CheckCircle } from "lucide-react";
import Section, { SectionHeading } from "@/components/Section";
import { portfolioConfig } from "@/config/portfolio";

export default function Contact() {
  const { contact } = portfolioConfig;
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
    { icon: Linkedin, label: "LinkedIn", value: "jash-thakkar", href: contact.linkedin },
  ];

  return (
    <Section id="contact">
      <SectionHeading title="Get In Touch" subtitle="Contact" />

      <div className="grid md:grid-cols-2 gap-12">
        {/* Info */}
        <div className="space-y-6">
          <p className="text-[rgb(var(--text-muted))] leading-relaxed">
            Whether you want to discuss business opportunities, collaboration, or just say hello — I&apos;d love to hear from you.
          </p>

          <div className="space-y-4">
            {socials.map(({ icon: Icon, label, value, href }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-[rgb(var(--card))] border border-[rgb(var(--card-border))] hover:border-[rgb(var(--accent)/0.4)] hover:shadow-md transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-[rgb(var(--accent)/0.1)] text-[rgb(var(--accent))] group-hover:bg-[rgb(var(--accent)/0.2)] transition-colors">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs text-[rgb(var(--text-muted))]">{label}</p>
                  <p className="text-sm font-medium text-[rgb(var(--text))] group-hover:text-[rgb(var(--accent))] transition-colors">
                    {value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {sent ? (
            <div className="h-full flex flex-col items-center justify-center gap-4 p-8 rounded-2xl bg-[rgb(var(--card))] border border-[rgb(var(--accent)/0.3)]">
              <CheckCircle size={40} className="text-[rgb(var(--accent))]" />
              <h3 className="text-lg font-semibold text-[rgb(var(--text))]">Message Sent!</h3>
              <p className="text-sm text-[rgb(var(--text-muted))] text-center">
                Thanks for reaching out. I&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id}>
                  <label className="block text-xs font-medium text-[rgb(var(--text-muted))] mb-2">
                    {label}
                  </label>
                  <input
                    type={type}
                    required
                    placeholder={placeholder}
                    value={form[id as "name" | "email"]}
                    onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[rgb(var(--card))] border border-[rgb(var(--card-border))] text-sm text-[rgb(var(--text))] placeholder:text-[rgb(var(--text-muted)/0.6)] focus:outline-none focus:border-[rgb(var(--accent))] focus:ring-1 focus:ring-[rgb(var(--accent)/0.3)] transition-all"
                  />
                </div>
              ))}
              <div>
                <label className="block text-xs font-medium text-[rgb(var(--text-muted))] mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="What's on your mind?"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[rgb(var(--card))] border border-[rgb(var(--card-border))] text-sm text-[rgb(var(--text))] placeholder:text-[rgb(var(--text-muted)/0.6)] focus:outline-none focus:border-[rgb(var(--accent))] focus:ring-1 focus:ring-[rgb(var(--accent)/0.3)] transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[rgb(var(--accent))] hover:bg-[rgb(var(--accent-hover))] text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-[rgb(var(--accent)/0.25)] hover:shadow-[rgb(var(--accent)/0.4)] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Send size={14} />
                )}
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </Section>
  );
}
