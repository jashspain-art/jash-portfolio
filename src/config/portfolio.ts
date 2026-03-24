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

export type Locale = "en" | "hi" | "es" | "fr" | "it" | "de";

export const portfolioConfig = {
  common: {
    name: "Jash Navin Thakkar",
    email: "jash.spain@gmail.com",
    phone: "+34 674565736",
    linkedin: "https://www.linkedin.com/in/jash-thakkar-325852330",
    socials: [
      { icon: Linkedin, href: "https://www.linkedin.com/in/jash-thakkar-325852330", label: "LinkedIn" },
      { icon: Mail, href: "mailto:jash.spain@gmail.com", label: "Email" }
    ],
    skills: {
      ai: ["GPT-4", "LangChain", "Automation", "Data-Driven Growth"],
      business: ["Sales Strategy", "Lead Generation", "Client Acquisition", "Operations"],
      tools: ["Vercel", "Next.js", "Python", "CRM Systems"],
      leadership: ["Team Management", "Negotiation", "Public Speaking", "Strategic Planning"]
    },
    languages: [
      { name: "English", level: "Professional" },
      { name: "Hindi", level: "Native" },
      { name: "Spanish", level: "Conversational" },
      { name: "French", level: "Basic" },
      { name: "Italian", level: "Basic" },
      { name: "German", level: "Basic" }
    ],
  },
  locales: {
    en: {
      name: "Jash Navin Thakkar",
      role: "Business & AI Growth",
      hero: {
        headline: "Building AI-driven growth systems and scalable businesses",
        subtext: "Business development professional with 5+ years of experience in sales, customer acquisition, and operations, now combining AI and data-driven strategies to drive growth.",
        cta: {
          projects: "View Projects",
          resume: "Download Resume",
          contact: "Contact Me"
        }
      },
      about: {
        title: "About Me",
        content: `I am a business development and growth-focused professional with over 5 years of experience across real estate and retail sectors. My expertise lies in generating leads, managing sales pipelines, improving conversion rates, and building long-term client relationships. Currently, I am pursuing a Master’s in Digital Marketing & Analytics at Toulouse Business School in Barcelona, where I am integrating data-driven strategies with my hands-on sales experience. I am actively transitioning into leveraging AI for business growth, automation, and scalable systems, particularly in sales, outreach, and marketing optimization. My long-term goal is to build impactful, AI-powered businesses.`,
        highlights: {
          experience: "5+ Years Experience",
          education: "MSc Digital Marketing",
          location: "Based in Barcelona"
        }
      },
      experience: {
        title: "Experience",
        items: [
          {
            title: "Retail Manager",
            company: "Vodafone Outlet (India)",
            period: "2023 – 2024",
            description: ["Led day-to-day retail operations", "Improved customer retention", "Optimized inventory planning"]
          },
          {
            title: "Sales Executive",
            company: "Daksha Real Estate (India)",
            period: "2019 – 2023",
            description: ["Managed full sales pipeline", "Negotiated high-value deals", "Market research & lead gen"]
          }
        ]
      },
      education: {
        title: "Education",
        items: [
          { degree: "MSc Digital Marketing & Analytics", school: "TBS Barcelona", period: "2025–2026" },
          { degree: "MSc International Management", school: "University of Limerick", period: "2024–2025" }
        ]
      },
      skills: {
        title: "Skills & Tools",
        ai: "AI & Automation",
        business: "Business Strategy",
        tools: "Tools",
        leadership: "Leadership"
      },
      projects: {
        title: "Featured Projects",
        categories: { all: "All", ai: "AI", business: "Business" },
        items: [
          {
            title: "AI Business Growth Suite",
            description: "A comprehensive toolset for automating sales outreach and optimizing lead conversion using GPT-4.",
            category: "AI",
            tech: ["Next.js", "OpenAI", "Tailwind"],
            links: { github: "#", demo: "#" }
          },
          {
            title: "Real Estate Analytics",
            description: "Data-driven platform for tracking market trends and predicting property value increases.",
            category: "Business",
            tech: ["Python", "Pandas", "React"],
            links: { github: "#", demo: "#" }
          }
        ]
      },
      contact: {
        title: "Get in Touch",
        subtitle: "Have a project in mind or just want to say hi? Feel free to reach out!",
        form: { name: "Name", email: "Email", message: "Message", send: "Send Message", success: "Message Sent!" }
      }
    },
    hi: {
      name: "जश नवीन ठक्कर",
      role: "बिज़नेस और AI ग्रोथ",
      hero: {
        headline: "AI-आधारित विकास प्रणालियाँ और स्केलेबल व्यवसाय बनाना",
        subtext: "बिक्री, ग्राहक अधिग्रहण और संचालन में 5+ वर्षों के अनुभव के साथ बिज़नेस डेवेलपमेंट प्रोफेशनल, अब विकास को गति देने के लिए AI और डेटा-आधारित रणनीतियों को जोड़ रहा हूँ।",
        cta: {
          projects: "प्रोजेक्ट्स देखें",
          resume: "रिज्यूमे डाउनलोड करें",
          contact: "संपर्क करें"
        }
      },
      about: {
        title: "मेरे बारे में",
        content: `मैं रियल एस्टेट और रिटेल क्षेत्रों में 5 वर्षों से अधिक के अनुभव के साथ बिज़नेस डेवेलपमेंट और विकास-केंद्रित पेशेवर हूँ। मेरी विशेषज्ञता लीड उत्पन्न करने, सेल्स पाइपलाइन प्रबंधित करने, कन्वर्ज़न दर में सुधार करने और दीर्घकालिक ग्राहक संबंध बनाने में है। वर्तमान में, मैं बार्सिलोना के टूलूज़ बिजनेस स्कूल से डिजिटल मार्केटिंग और एनालिटिक्स में मास्टर कर रहा हूँ। मैं सक्रिय रूप से बिज़नेस ग्रोथ और ऑटोमेशन के लिए AI का लाभ उठाने की दिशा में आगे बढ़ रहा हूँ। मेरा दीर्घकालिक लक्ष्य प्रभावशाली, AI-संचालित व्यवसाय बनाना है।`,
        highlights: {
          experience: "5+ साल का अनुभव",
          education: "MSc डिजिटल मार्केटिंग",
          location: "बार्सिलोना में स्थित"
        }
      },
      experience: {
        title: "अनुभव",
        items: [
          {
            title: "रिटेल मैनेजर",
            company: "वोडाफोन आउटलेट (भारत)",
            period: "2023 – 2024",
            description: ["दैनिक रिटेल संचालन का नेतृत्व किया", "ग्राहक प्रतिधारण में सुधार", "इन्वेंट्री योजना का अनुकूलन"]
          },
          {
            title: "सेल्स एग्जीक्यूटिव",
            company: "दक्षा रियल एस्टेट (भारत)",
            period: "2019 – 2023",
            description: ["पूर्ण सेल्स पाइपलाइन प्रबंधित की", "उच्च-मूल्य सौदों की बातचीत", "मार्केट रिसर्च और लीड जनरेशन"]
          }
        ]
      },
      education: {
        title: "शिक्षा",
        items: [
          { degree: "MSc डिजिटल मार्केटिंग और एनालिटिक्स", school: "TBS बार्सिलोना", period: "2025–2026" },
          { degree: "MSc इंटरनेशनल मैनेजमेंट", school: "यूनिवर्सिटी ऑफ लिमरिक", period: "2024–2025" }
        ]
      },
      skills: {
        title: "कौशल और उपकरण",
        ai: "AI और ऑटोमेशन",
        business: "बिज़नेस रणनीति",
        tools: "उपकरण",
        leadership: "नेतृत्व"
      },
      projects: {
        title: "चुनिंदा प्रोजेक्ट्स",
        categories: { all: "सभी", ai: "AI", business: "बिज़नेस" },
        items: [
          {
            title: "AI बिज़नेस ग्रोथ सुइट",
            description: "GPT-4 का उपयोग करके सेल्स आउटरीच को ऑटोमेट करने और लीड कन्वर्ज़न को ऑप्टिमाइज़ करने के लिए एक व्यापक टूलसेट।",
            category: "AI",
            tech: ["Next.js", "OpenAI", "Tailwind"],
            links: { github: "#", demo: "#" }
          },
          {
            title: "रियल एस्टेट एनालिटिक्स",
            description: "बाजार के रुझानों को ट्रैक करने और संपत्ति के मूल्य में वृद्धि की भविष्यवाणी करने के लिए डेटा-संचालित प्लेटफॉर्म।",
            category: "बिज़नेस",
            tech: ["Python", "Pandas", "React"],
            links: { github: "#", demo: "#" }
          }
        ]
      },
      contact: {
        title: "संपर्क करें",
        subtitle: "कोई प्रोजेक्ट दिमाग में है या बस नमस्ते कहना चाहते हैं? बेझिझक संपर्क करें!",
        form: { name: "नाम", email: "ईमेल", message: "संदेश", send: "संदेश भेजें", success: "संदेश भेज दिया गया!" }
      }
    },
    es: {
      name: "Jash Navin Thakkar",
      role: "Crecimiento de Negocios y IA",
      hero: {
        headline: "Creando sistemas de crecimiento impulsados por IA y negocios escalables",
        subtext: "Profesional de desarrollo de negocios con más de 5 años de experiencia en ventas, ahora combinando IA y estrategias basadas en datos para impulsar el desarrollo.",
        cta: {
          projects: "Ver Proyectos",
          resume: "Descargar CV",
          contact: "Contáctame"
        }
      },
      about: {
        title: "Sobre Mí",
        content: `Soy un profesional centrado en el desarrollo de negocios con más de 5 años de experiencia. Mi especialidad es generar leads, gestionar pipelines de ventas y construir relaciones a largo plazo con clientes. Actualmente curso un Máster en Marketing Digital y Analítica en Toulouse Business School en Barcelona. Mi objetivo es construir negocios impactantes impulsados por IA.`,
        highlights: {
          experience: "5+ Años de Experiencia",
          education: "MSc Marketing Digital",
          location: "Basado en Barcelona"
        }
      },
      experience: {
        title: "Experiencia",
        items: [
          {
            title: "Gerente de Tienda",
            company: "Vodafone Outlet (India)",
            period: "2023 – 2024",
            description: ["Liderazgo de operaciones diarias", "Mejora de retención de clientes", "Optimización de inventario"]
          }
        ]
      },
      education: {
        title: "Educación",
        items: [
          { degree: "MSc Marketing Digital y Analítica", school: "TBS Barcelona", period: "2025–2026" }
        ]
      },
      skills: {
        title: "Habilidades y Herramientas",
        ai: "IA y Automatización",
        business: "Estrategia de Negocios",
        tools: "Herramientas",
        leadership: "Liderazgo"
      },
      projects: {
        title: "Proyectos Destacados",
        categories: { all: "Todos", ai: "IA", business: "Negocios" },
        items: [
          {
            title: "Suite de Crecimiento IA",
            description: "Herramientas para automatizar ventas y optimizar conversión usando GPT-4.",
            category: "IA",
            tech: ["Next.js", "OpenAI", "Tailwind"],
            links: { github: "#", demo: "#" }
          }
        ]
      },
      contact: {
        title: "Contacto",
        subtitle: "¿Tienes un proyecto en mente? ¡Escríbeme!",
        form: { name: "Nombre", email: "Correo", message: "Mensaje", send: "Enviar Mensaje", success: "¡Enviado!" }
      }
    },
    fr: {
      name: "Jash Navin Thakkar",
      role: "Croissance Business & IA",
      hero: {
        headline: "Construire des systèmes de croissance pilotés par l'IA",
        subtext: "Professionnel du développement commercial avec plus de 5 ans d'expérience, combinant l'IA et les stratégies basées su rles données.",
        cta: {
          projects: "Voir les Projets",
          resume: "Télécharger CV",
          contact: "Me Contacter"
        }
      },
      about: {
        title: "À Propos",
        content: `Professionnel axé sur le développement commercial avec plus de 5 ans d'expérience. Actuellement en Master en Marketing Digital & Analytics à TBS Barcelone.`,
        highlights: {
          experience: "5+ Ans d'Expérience",
          education: "MSc Marketing Digital",
          location: "Basé à Barcelone"
        }
      },
      experience: {
        title: "Expérience",
        items: [
          {
            title: "Directeur de Magasin",
            company: "Vodafone Outlet (Inde)",
            period: "2023 – 2024",
            description: ["Direction des opérations quotidiennes", "Optimisation des stocks"]
          }
        ]
      },
      education: {
        title: "Éducation",
        items: [
          { degree: "MSc Marketing Digital & Analytics", school: "TBS Barcelone", period: "2025–2026" }
        ]
      },
      skills: {
        title: "Compétences",
        ai: "IA & Automatisation",
        business: "Stratégie Business",
        tools: "Outils",
        leadership: "Leadership"
      },
      projects: {
        title: "Projets",
        categories: { all: "Tout", ai: "IA", business: "Business" },
        items: [
          {
            title: "Suite de Croissance IA",
            description: "Outils pour automatiser les ventes et optimiser la conversion.",
            category: "IA",
            tech: ["Next.js", "GPT-4"],
            links: { github: "#", demo: "#" }
          }
        ]
      },
      contact: {
        title: "Contact",
        subtitle: "Un projet ? Contactez-moi !",
        form: { name: "Nom", email: "Email", message: "Message", send: "Envoyer", success: "Envoyé !" }
      }
    },
    it: {
      name: "Jash Navin Thakkar",
      role: "Crescita Business & IA",
      hero: {
        headline: "Costruire sistemi di crescita guidati dall'IA",
        subtext: "Professionista dello sviluppo aziendale con oltre 5 anni di esperienza, che unisce IA e strategie basate sui dati.",
        cta: {
          projects: "Vedi Progetti",
          resume: "Scarica CV",
          contact: "Contattami"
        }
      },
      about: {
        title: "Su di Me",
        content: `Professionista focalizzato sullo sviluppo del business con oltre 5 anni di esperienza. Attualmente frequenta il Master in Marketing Digitale & Analytics presso la TBS di Barcellona.`,
        highlights: {
          experience: "5+ Anni di Esperienza",
          education: "MSc Marketing Digitale",
          location: "Sede a Barcellona"
        }
      },
      experience: {
        title: "Esperienza",
        items: [
          {
            title: "Responsabile Retail",
            company: "Vodafone Outlet (India)",
            period: "2023 – 2024",
            description: ["Gestione operazioni quotidiane", "Ottimizzazione inventario"]
          }
        ]
      },
      education: {
        title: "Formazione",
        items: [
          { degree: "MSc Marketing Digitale & Analytics", school: "TBS Barcellona", period: "2025–2026" }
        ]
      },
      skills: {
        title: "Competenze",
        ai: "IA & Automazione",
        business: "Strategia Aziendale",
        tools: "Strumenti",
        leadership: "Leadership"
      },
      projects: {
        title: "Progetti",
        categories: { all: "Tutti", ai: "IA", business: "Business" },
        items: [
          {
            title: "Suite Crescita IA",
            description: "Strumenti per l'automazione delle vendite e l'ottimizzazione.",
            category: "IA",
            tech: ["Next.js", "OpenAI"],
            links: { github: "#", demo: "#" }
          }
        ]
      },
      contact: {
        title: "Contatti",
        subtitle: "Hai un progetto? Scrivimi!",
        form: { name: "Nome", email: "Email", message: "Messaggio", send: "Invia", success: "Inviato!" }
      }
    },
    de: {
      name: "Jash Navin Thakkar",
      role: "Business & KI-Wachstum",
      hero: {
        headline: "KI-gesteuerte Wachstumssysteme aufbauen",
        subtext: "Business Development Professional mit über 5 Jahren Erfahrung, der KI und datengesteuerte Strategien kombiniert.",
        cta: {
          projects: "Projekte sehen",
          resume: "Lebenslauf laden",
          contact: "Kontakt"
        }
      },
      about: {
        title: "Über Mich",
        content: `Business Development Professional mit über 5 Jahren Erfahrung. Aktuell Masterstudium in Digital Marketing & Analytics an der TBS Barcelona.`,
        highlights: {
          experience: "5+ Jahre Erfahrung",
          education: "MSc Digital Marketing",
          location: "Sitz in Barcelona"
        }
      },
      experience: {
        title: "Erfahrung",
        items: [
          {
            title: "Retail Manager",
            company: "Vodafone Outlet (Indien)",
            period: "2023 – 2024",
            description: ["Leitung des täglichen Betriebs", "Lageroptimierung"]
          }
        ]
      },
      education: {
        title: "Bildung",
        items: [
          { degree: "MSc Digital Marketing & Analytics", school: "TBS Barcelona", period: "2025–2026" }
        ]
      },
      skills: {
        title: "Fähigkeiten",
        ai: "KI & Automatisierung",
        business: "Unternehmensstrategie",
        tools: "Tools",
        leadership: "Führung"
      },
      projects: {
        title: "Projekte",
        categories: { all: "Alle", ai: "KI", business: "Business" },
        items: [
          {
            title: "KI-Wachstums-Suite",
            description: "Automatisierung von Vertrieb und Lead-Optimierung.",
            category: "KI",
            tech: ["Next.js", "OpenAI"],
            links: { github: "#", demo: "#" }
          }
        ]
      },
      contact: {
        title: "Kontakt",
        subtitle: "Hast du ein Projekt? Melde dich!",
        form: { name: "Name", email: "E-mail", message: "Nachricht", send: "Senden", success: "Gesendet!" }
      }
    }
  }
};
