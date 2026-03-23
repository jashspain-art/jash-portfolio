"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, User, Bot, Loader2 } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

type Message = {
  role: "user" | "bot";
  content: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Hi! I'm Jash's AI assistant. Ask me anything about his experience, projects, or background!" },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response based on portfolio data
    setTimeout(() => {
      const response = generateResponse(userMsg);
      setMessages((prev) => [...prev, { role: "bot", content: response }]);
      setIsTyping(false);
    }, 1000);
  };

  const generateResponse = (query: string): string => {
    const q = query.toLowerCase();
    
    if (q.includes("experience") || q.includes("work") || q.includes("job")) {
      return `Jash has over 5 years of experience in business development and sales across the real estate and retail sectors. He worked as a Retail Manager at Vodafone and a Sales Executive at Daksha Real Estate.`;
    }
    if (q.includes("project") || q.includes("build")) {
      return `Jash has worked on several interesting projects, including an AI Outreach Automation System, an AI Job Hunting Assistant, and a LinkedIn Lead Generation Workflow.`;
    }
    if (q.includes("skill") || q.includes("tool") || q.includes("stack")) {
      const allSkills = [...portfolioConfig.skills.ai, ...portfolioConfig.skills.business].slice(0, 5).join(", ");
      return `Jash is skilled in AI automation, Prompt Engineering, Business Development, Sales Strategy, and Lead Generation. Some tools he uses include ${allSkills}.`;
    }
    if (q.includes("education") || q.includes("study") || q.includes("school")) {
      return `Jash is currently pursuing an MSc in Digital Marketing & Analytics at Toulouse Business School in Barcelona. He also holds an MSc in International Management from the University of Limerick.`;
    }
    if (q.includes("contact") || q.includes("email") || q.includes("linkedin")) {
      return `You can reach Jash at ${portfolioConfig.contact.email} or connect with him on LinkedIn: ${portfolioConfig.contact.linkedin}`;
    }
    if (q.includes("football") || q.includes("captain") || q.includes("hobby")) {
      return `Jash was a football captain, highlighting his strong leadership and teamwork skills!`;
    }
    
    return "That's a great question! Jash is a growth-focused professional bridging the gap between business and AI. Feel free to ask about his specific projects, work history, or education!";
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[rgb(var(--accent))] text-white shadow-lg shadow-[rgb(var(--accent)/0.3)] hover:shadow-[rgb(var(--accent)/0.5)] transition-all"
      >
        <MessageSquare size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-6 z-50 w-[350px] md:w-[400px] h-[500px] bg-[rgb(var(--card))] border border-[rgb(var(--card-border))] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-[rgb(var(--accent))] text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Jash's AI Assistant</h3>
                  <p className="text-[10px] opacity-80">Ask me anything!</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-lg transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-[rgb(var(--bg-secondary)/0.3)]"
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === "user" ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === "user" 
                      ? "bg-[rgb(var(--accent))] text-white rounded-tr-none" 
                      : "bg-[rgb(var(--card))] border border-[rgb(var(--card-border))] text-[rgb(var(--text))] rounded-tl-none shadow-sm"
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-[rgb(var(--card))] border border-[rgb(var(--card-border))] p-3 rounded-2xl rounded-tl-none flex gap-1 items-center">
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1 h-1 bg-[rgb(var(--text-muted))] rounded-full" />
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1 h-1 bg-[rgb(var(--text-muted))] rounded-full" />
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1 h-1 bg-[rgb(var(--text-muted))] rounded-full" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-[rgb(var(--card-border))] bg-[rgb(var(--card))]">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ask a question..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  className="w-full pl-4 pr-12 py-3 rounded-xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--card-border))] text-sm focus:outline-none focus:border-[rgb(var(--accent))] transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="absolute right-2 top-1.5 p-1.5 rounded-lg bg-[rgb(var(--accent))] text-white disabled:opacity-50 transition-all"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
