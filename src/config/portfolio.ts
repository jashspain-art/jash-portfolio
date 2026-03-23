import { 
  Briefcase, 
  GraduationCap, 
  Layout, 
  Mail, 
  MapPin, 
  Phone, 
  Linkedin, 
  Github, 
  ExternalLink,
  Code,
  Zap,
  TrendingUp,
  MessageSquare
} from "lucide-react";

export const portfolioConfig = {
  navigator: {
    name: "Jash Navin Thakkar",
    role: "Business & AI Growth",
  },
  hero: {
    name: "Jash Navin Thakkar",
    headline: "Building AI-driven growth systems and scalable businesses",
    subtext: "Business development professional with 5+ years of experience in sales, customer acquisition, and operations, now combining AI and data-driven strategies to drive growth.",
    cta: [
      { label: "View Projects", href: "#projects", variant: "primary" },
      { label: "Download Resume", href: "/resume.pdf", variant: "secondary" },
      { label: "Contact Me", href: "#contact", variant: "outline" }
    ],
  },
  about: {
    title: "About Me",
    content: `I am a business development and growth-focused professional with over 5 years of experience across real estate and retail sectors. My expertise lies in generating leads, managing sales pipelines, improving conversion rates, and building long-term client relationships.

Currently, I am pursuing a Master’s in Digital Marketing & Analytics at Toulouse Business School in Barcelona, where I am integrating data-driven strategies with my hands-on sales experience.

I am actively transitioning into leveraging AI for business growth, automation, and scalable systems, particularly in sales, outreach, and marketing optimization. My long-term goal is to build impactful, AI-powered businesses.`,
  },
  experience: [
    {
      title: "Retail Manager",
      company: "Vodafone Outlet (India)",
      period: "Dec 2023 – Sep 2024",
      description: [
        "Led day-to-day retail operations ensuring high customer satisfaction",
        "Improved customer retention through targeted service upgrades",
        "Optimized inventory planning and stock flow",
        "Enhanced in-store sales processes and conversion rates"
      ]
    },
    {
      title: "Sales Executive",
      company: "Daksha Real Estate (India)",
      period: "Feb 2019 – Nov 2023",
      description: [
        "Managed full sales pipeline from lead generation to deal closure",
        "Matched clients with high-value investment opportunities",
        "Conducted market research to refine targeting strategies",
        "Negotiated deals and handled documentation",
        "Built long-term client relationships driving repeat business"
      ]
    },
    {
      title: "Pre-Sales Executive",
      company: "Epinet (India)",
      period: "Prior to 2019",
      description: [
        "Qualified inbound and outbound leads",
        "Managed CRM systems and tracked customer interactions",
        "Supported sales funnel optimization",
        "Scheduled meetings and improved conversion efficiency"
      ]
    }
  ],
  education: [
    {
      degree: "MSc Digital Marketing & Analytics",
      school: "Toulouse Business School – Barcelona",
      period: "2025–2026"
    },
    {
      degree: "MSc International Management & Global Business",
      school: "University of Limerick – Ireland",
      period: "2024–2025"
    },
    {
      degree: "Bachelor of Business Administration",
      school: "D.Y. Patil School of Management – India",
      period: "2020–2023"
    }
  ],
  skills: {
    ai: [
      "AI tools for automation and workflows",
      "Prompt engineering",
      "Python (Learning)",
      "R (Learning)",
      "Google Analytics (Learning)"
    ],
    business: [
      "Business Development & Sales Strategy",
      "Lead Generation & Qualification",
      "Customer Acquisition & Retention",
      "Growth Marketing Fundamentals",
      "CRM Management & Funnel Optimization",
      "Market Research & Competitive Analysis"
    ],
    tools: [
      "HubSpot (Learning)",
      "Microsoft Excel (Intermediate)",
      "CRM Systems",
      "Google Workspace"
    ],
    leadership: [
      "Communication & Persuasion",
      "Negotiation & Client Handling",
      "Relationship Building",
      "Strategic Thinking",
      "Team Leadership (Former Football Captain)",
      "Problem Solving & Adaptability"
    ]
  },
  projects: [
    {
      title: "AI Outreach Automation System",
      description: "Automated cold outreach system using AI to personalize messaging and optimize response rates.",
      tech: ["Node.js", "OpenAI API", "HubSpot"],
      category: "AI",
      links: { github: "#", demo: "#" }
    },
    {
      title: "AI Job Hunting Assistant",
      description: "A tool that parses job descriptions and tailors resumes/cover letters using LLMs.",
      tech: ["Python", "Streamlit", "GPT-4"],
      category: "AI",
      links: { github: "#", demo: "#" }
    },
    {
      title: "LinkedIn Lead Generation Workflow",
      description: "Semi-automated workflow for identifying and engaging high-intent prospects on LinkedIn.",
      tech: ["Sales Navigator", "PhantomBuster", "AI Filtering"],
      category: "Business",
      links: { github: "#", demo: "#" }
    }
  ],
  languages: [
    { name: "Hindi", level: "Native" },
    { name: "English", level: "Advanced" },
    { name: "Spanish", level: "Learning" }
  ],
  contact: {
    email: "jash.spain@gmail.com",
    phone: "+34 674565736",
    linkedin: "https://www.linkedin.com/in/jash-thakkar-325852330",
    address: "Barcelona, Spain"
  }
};
