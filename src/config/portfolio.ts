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
    email: "thakkar.j2812@gmail.com",
    phone: "+91 9819241893",
    linkedin: "https://www.linkedin.com/in/jash-thakkar-955573400",
    socials: [
      { icon: Linkedin, href: "https://www.linkedin.com/in/jash-thakkar-955573400", label: "LinkedIn" },
      { icon: Mail, href: "mailto:thakkar.j2812@gmail.com", label: "Email" }
    ],
    skills: {
      business: ["Business Development", "Strategic Partnerships", "B2B Sales", "Client Acquisition", "Lead Generation", "CRM", "Consultative Selling", "Negotiation", "Relationship Management"],
      generative_ai: ["ChatGPT", "Claude"],
      ai_development: ["CTO.new", "Antigravity", "OpenCode"],
      website_development: ["AI-assisted Website Development", "Responsive Web Design", "HTML/CSS Fundamentals"],
      deployment: ["GitHub", "Vercel"],
      ai_applications: ["Prompt Engineering", "Business Research", "Proposal Writing", "Sales Presentations", "Sales Collateral", "Business Documentation", "Content Creation"],
      digital_marketing: ["SEO Fundamentals", "Content Strategy", "Digital Analytics"],
      productivity: ["Microsoft Excel", "Canva", "Google Workspace"]
    },
    languages: [
      { name: "English", level: "Fluent" },
      { name: "Hindi", level: "Fluent" },
      { name: "Gujarati", level: "Fluent" }
    ],
  },
  locales: {
    en: {
      name: "Jash Navin Thakkar",
      role: "Business Development • Strategic Partnerships • AI-Enabled Growth",
      hero: {
        headline: "Business Development • Strategic Partnerships • AI-Enabled Growth",
        subtext: "Helping businesses grow through strategic partnerships, AI-assisted website development, and digital innovation.",
        cta: {
          projects: "View My Work",
          resume: "Download Resume",
          contact: "Let's Connect"
        }
      },
      about: {
        title: "About Me",
        content: `Business Development professional with 5+ years of experience across B2B sales, client acquisition, partnerships, and entrepreneurship. Currently driving growth at Billoxy while building AI-assisted websites and using Generative AI for research, proposals, presentations, sales collateral, and business documentation. Internationally educated with Master's degrees from Spain and Ireland.`,
        highlights: {
          experience: "5+ Years Experience",
          education: "2 Master's Degrees",
          location: "Navi Mumbai, India (Open to Relocation)"
        }
      },
      experience: {
        title: "Experience",
        items: [
          {
            title: "Business Development & Strategic Partnership Specialist",
            company: "Billoxy",
            period: "Jun 2026 – Present",
            description: [
              "Drive B2B acquisition across SMEs, Chartered Accountants, tax consultants, and financial advisors.",
              "Manage the full sales cycle from prospecting and demos to onboarding and relationship management.",
              "Develop strategic partnerships to expand market reach and support business growth."
            ]
          },
          {
            title: "Freelance AI Website Developer",
            company: "Self-Employed",
            period: "2026 – Present",
            description: [
              "Design and develop responsive business websites using CTO.new, Antigravity and OpenCode.",
              "Deploy websites with GitHub and Vercel while applying responsive design and SEO best practices.",
              "Collaborate directly with clients from requirements gathering through final delivery."
            ]
          },
          {
            title: "Business Operations & Sales Executive",
            company: "JT Ventures",
            period: "Dec 2023 – Sep 2024",
            description: [
              "Managed franchise operations, customer engagement, and sales activities.",
              "Improved lead conversion through consultative selling and streamlined operations."
            ]
          },
          {
            title: "Business Development Executive",
            company: "Daksha Real Estate",
            period: "Feb 2019 – Nov 2023",
            description: [
              "Managed client acquisition and generated 12–15 qualified leads monthly.",
              "Built long-term relationships with clients, brokers, and stakeholders."
            ]
          },
          {
            title: "Pre-Sales Executive",
            company: "Epinet",
            period: "Contract",
            description: [
              "Qualified leads, scheduled appointments, and supported CRM pipeline management."
            ]
          }
        ]
      },
      education: {
        title: "Education",
        items: [
          { degree: "MSc Digital Marketing & Analytics", school: "Toulouse Business School, Barcelona", period: "2025–2026" },
          { degree: "MSc International Management & Global Business", school: "University of Limerick, Ireland", period: "2024–2025" },
          { degree: "BBA", school: "D.Y. Patil School of Management, Navi Mumbai", period: "2020–2023" }
        ]
      },
      skills: {
        title: "Skills & Expertise",
        business: "Business Strategy",
        generative_ai: "Generative AI",
        ai_development: "AI Development",
        website_development: "Website Development",
        deployment: "Deployment",
        ai_applications: "AI Applications",
        digital_marketing: "Digital Marketing",
        productivity: "Productivity"
      },
      projects: {
        title: "Featured Work",
        categories: { all: "All", product: "Product Concept", dev: "Website Development" },
        items: [
          {
            title: "PartnerOS",
            description: "AI-powered CRM concept focused on lead management, partnership management, sales pipeline tracking and business growth.",
            category: "Product Concept",
            tech: ["ChatGPT", "Claude", "CTO.new", "Antigravity", "OpenCode", "GitHub", "Vercel"],
            links: { demo: "https://partneros-crm.vercel.app" }
          },
          {
            title: "Kayzad Advertising",
            description: "Modern business website designed and developed using AI-assisted development tools with responsive design and business-focused user experience.",
            category: "Website Development",
            tech: ["ChatGPT", "CTO.new", "Antigravity", "OpenCode", "GitHub", "Vercel"],
            links: { demo: "https://kayzadadvertising.com" }
          },
          {
            title: "Daksha Real Estate",
            description: "Professional real estate website designed with a clean interface, responsive layout and business-focused presentation.",
            category: "Website Development",
            tech: ["ChatGPT", "CTO.new", "Antigravity", "OpenCode", "GitHub", "Vercel"],
            links: { demo: "https://daksharealestate.com" }
          },
          {
            title: "Personal Portfolio",
            description: "Professional portfolio showcasing Business Development, Strategic Partnerships, AI-assisted website development and featured projects.",
            category: "Website Development",
            tech: ["ChatGPT", "Claude", "CTO.new", "Antigravity", "OpenCode", "GitHub", "Vercel"],
            links: { demo: "https://jash-portfolio.vercel.app" }
          }
        ]
      },
      contact: {
        title: "Get in Touch",
        subtitle: "Have an opportunity, proposal, or project in mind? Let's connect!",
        form: { name: "Name", email: "Email", message: "Message", send: "Send Message", success: "Message Sent!" }
      }
    },
    hi: {
      name: "जश नवीन ठक्कर",
      role: "बिज़नेस डेवेलपमेंट • रणनीतिक साझेदारी • AI-संचालित विकास",
      hero: {
        headline: "बिज़नेस डेवेलपमेंट • रणनीतिक साझेदारी • AI-संचालित विकास",
        subtext: "रणनीतिक साझेदारियों, AI-सहायता प्राप्त वेबसाइट विकास और डिजिटल नवाचार के माध्यम से व्यवसायों को बढ़ने में मदद करना।",
        cta: {
          projects: "मेरा काम देखें",
          resume: "रिज्यूमे डाउनलोड करें",
          contact: "संपर्क करें"
        }
      },
      about: {
        title: "मेरे बारे में",
        content: `B2B बिक्री, ग्राहक अधिग्रहण, साझेदारी और उद्यमिता में 5+ वर्षों के अनुभव के साथ बिज़नेस डेवेलपमेंट पेशेवर। वर्तमान में Billoxy में विकास को गति दे रहे हैं, साथ ही AI-सहायता प्राप्त वेबसाइटों का निर्माण कर रहे हैं और अनुसंधान, प्रस्तावों, प्रस्तुतियों, बिक्री संपार्श्विक और व्यावसायिक दस्तावेज़ीकरण के लिए Generative AI का उपयोग कर रहे हैं। स्पेन और आयरलैंड से मास्टर डिग्री के साथ अंतरराष्ट्रीय स्तर पर शिक्षित।`,
        highlights: {
          experience: "5+ साल का अनुभव",
          education: "2 मास्टर डिग्री",
          location: "नवी मुंबई, भारत (स्थानांतरण के लिए तैयार)"
        }
      },
      experience: {
        title: "अनुभव",
        items: [
          {
            title: "बिज़नेस डेवेलपमेंट और रणनीतिक साझेदारी विशेषज्ञ",
            company: "Billoxy",
            period: "जून 2026 – वर्तमान",
            description: [
              "SMEs, चार्टर्ड अकाउंटेंट, टैक्स सलाहकारों और वित्तीय सलाहकारों में B2B अधिग्रहण को बढ़ावा देना।",
              "संभावित ग्राहकों की खोज और डेमो से लेकर ऑनबोर्डिंग और संबंध प्रबंधन तक पूरे बिक्री चक्र को प्रबंधित करना।",
              "बाजार पहुंच बढ़ाने और व्यावसायिक विकास का समर्थन करने के लिए रणनीतिक साझेदारी विकसित करना।"
            ]
          },
          {
            title: "फ्रीलांस AI वेबसाइट डेवलपर",
            company: "स्व-नियोजित",
            period: "2026 – वर्तमान",
            description: [
              "CTO.new, Antigravity और OpenCode का उपयोग करके उत्तरदायी व्यावसायिक वेबसाइटों का डिज़ाइन और विकास करना।",
              "उत्तरदायी डिज़ाइन और SEO सर्वोत्तम प्रथाओं को लागू करते हुए GitHub और Vercel के साथ वेबसाइटों को तैनात करना।",
              "आवश्यकताओं को एकत्र करने से लेकर अंतिम डिलीवरी तक ग्राहकों के साथ सीधे सहयोग करना।"
            ]
          },
          {
            title: "बिजनेस ऑपरेशन्स और सेल्स एग्जीक्यूटिव",
            company: "JT Ventures",
            period: "दिसंबर 2023 – सितंबर 2024",
            description: [
              "फ्रेंचाइजी संचालन, ग्राहक जुड़ाव और बिक्री गतिविधियों की देखरेख की।",
              "परामर्शदात्री बिक्री और सुव्यवस्थित संचालन के माध्यम से लीड रूपांतरण में सुधार किया।"
            ]
          },
          {
            title: "बिजनेस डेवलपमेंट एग्जीक्यूटिव",
            company: "दक्षा रियल एस्टेट",
            period: "फरवरी 2019 – नवंबर 2023",
            description: [
              "ग्राहक अधिग्रहण प्रबंधित किया और प्रति माह 12-15 योग्य लीड उत्पन्न की।",
              "ग्राहकों, दलालों और हितधारकों के साथ मजबूत दीर्घकालिक संबंध बनाए।"
            ]
          },
          {
            title: "प्री-सेल्स एग्जीक्यूटिव",
            company: "एपीनेट",
            period: "अनुबंध",
            description: [
              "योग्य लीड, अपॉइंटमेंट शेड्यूलिंग और CRM पाइपलाइन प्रबंधन का समर्थन किया।"
            ]
          }
        ]
      },
      education: {
        title: "शिक्षा",
        items: [
          { degree: "MSc डिजिटल मार्केटिंग और एनालिटिक्स", school: "टूलूज़ बिजनेस स्कूल, बार्सिलोना", period: "2025–2026" },
          { degree: "MSc इंटरनेशनल मैनेजमेंट और ग्लोबल बिजनेस", school: "यूनिवर्सिटी ऑफ लिमरिक, आयरलैंड", period: "2024–2025" },
          { degree: "BBA", school: "डी.वाई. पाटिल स्कूल ऑफ मैनेजमेंट, नवी मुंबई", period: "2020–2023" }
        ]
      },
      skills: {
        title: "कौशल और विशेषज्ञता",
        business: "बिज़नेस रणनीति",
        generative_ai: "Generative AI",
        ai_development: "AI विकास",
        website_development: "वेबसाइट विकास",
        deployment: "तैनाती",
        ai_applications: "AI अनुप्रयोग",
        digital_marketing: "डिजिटल मार्केटिंग",
        productivity: "उत्पादकता"
      },
      projects: {
        title: "विशेष रुप से प्रदर्शित काम",
        categories: { all: "सभी", product: "उत्पाद अवधारणा", dev: "वेबसाइट विकास" },
        items: [
          {
            title: "PartnerOS",
            description: "लीड प्रबंधन, साझेदारी प्रबंधन, बिक्री पाइपलाइन ट्रैकिंग और व्यावसायिक विकास पर केंद्रित AI-संचालित CRM अवधारणा।",
            category: "उत्पाद अवधारणा",
            tech: ["ChatGPT", "Claude", "CTO.new", "Antigravity", "OpenCode", "GitHub", "Vercel"],
            links: { demo: "https://partneros-crm.vercel.app" }
          },
          {
            title: "Kayzad Advertising",
            description: "उत्तरदायी डिज़ाइन और व्यवसाय-केंद्रित उपयोगकर्ता अनुभव के साथ AI-सहायता प्राप्त विकास उपकरणों का उपयोग करके डिज़ाइन और विकसित की गई आधुनिक व्यावसायिक वेबसाइट।",
            category: "वेबसाइट विकास",
            tech: ["ChatGPT", "CTO.new", "Antigravity", "OpenCode", "GitHub", "Vercel"],
            links: { demo: "https://kayzadadvertising.com" }
          },
          {
            title: "Daksha Real Estate",
            description: "साफ इंटरफ़ेस, उत्तरदायी लेआउट और व्यवसाय-केंद्रित प्रस्तुति के साथ डिज़ाइन की गई पेशेवर रियल एस्टेट वेबसाइट।",
            category: "वेबसाइट विकास",
            tech: ["ChatGPT", "CTO.new", "Antigravity", "OpenCode", "GitHub", "Vercel"],
            links: { demo: "https://daksharealestate.com" }
          },
          {
            title: "Personal Portfolio",
            description: "बिज़नेस डेवलपमेंट, रणनीतिक साझेदारी, AI-सहायता प्राप्त वेबसाइट विकास और विशेष रुप से प्रदर्शित परियोजनाओं को प्रदर्शित करने वाला पेशेवर पोर्टफोलियो।",
            category: "वेबसाइट विकास",
            tech: ["ChatGPT", "Claude", "CTO.new", "Antigravity", "OpenCode", "GitHub", "Vercel"],
            links: { demo: "https://jash-portfolio.vercel.app" }
          }
        ]
      },
      contact: {
        title: "संपर्क करें",
        subtitle: "कोई अवसर, प्रस्ताव, या प्रोजेक्ट दिमाग में है? आइए जुड़ें!",
        form: { name: "नाम", email: "ईमेल", message: "संदेश", send: "संदेश भेजें", success: "संदेश भेज दिया गया!" }
      }
    },
    es: {
      name: "Jash Navin Thakkar",
      role: "Desarrollo de Negocios • Asociaciones Estratégicas • Crecimiento con IA",
      hero: {
        headline: "Desarrollo de Negocios • Asociaciones Estratégicas • Crecimiento con IA",
        subtext: "Ayudando a las empresas a crecer a través de asociaciones estratégicas, desarrollo de sitios web asistido por IA e innovación digital.",
        cta: {
          projects: "Ver mi trabajo",
          resume: "Descargar CV",
          contact: "Conectemos"
        }
      },
      about: {
        title: "Sobre Mí",
        content: `Profesional del Desarrollo de Negocios con más de 5 años de experiencia en ventas B2B, adquisición de clientes, asociaciones y emprendimiento. Actualmente impulsando el crecimiento en Billoxy mientras construyo sitios web asistidos por IA y utilizo IA Generativa para investigación, propuestas, presentaciones, material de ventas y documentación comercial. Educado internacionalmente con maestrías en España e Irlanda.`,
        highlights: {
          experience: "5+ Años de Experiencia",
          education: "2 Maestrías",
          location: "Navi Mumbai, India (Abierto a relocalización)"
        }
      },
      experience: {
        title: "Experiencia",
        items: [
          {
            title: "Especialista en Desarrollo de Negocios y Asociaciones Estratégicas",
            company: "Billoxy",
            period: "Jun 2026 – Presente",
            description: [
              "Impulsar la adquisición B2B en pymes, contadores públicos, asesores fiscales y asesores financieros.",
              "Gestionar el ciclo completo de ventas, desde la prospección y demostraciones hasta la incorporación y gestión de relaciones.",
              "Desarrollar asociaciones estratégicas para expandir el alcance del mercado y apoyar el crecimiento comercial."
            ]
          },
          {
            title: "Desarrollador de Sitios Web con IA Independiente",
            company: "Autónomo",
            period: "2026 – Presente",
            description: [
              "Diseñar y desarrollar sitios web comerciales receptivos utilizando CTO.new, Antigravity y OpenCode.",
              "Implementar sitios web con GitHub y Vercel aplicando diseño receptivo y mejores prácticas de SEO.",
              "Colaborar directamente con los clientes desde la recopilación de requisitos hasta la entrega final."
            ]
          },
          {
            title: "Ejecutivo de Operaciones Comerciales y Ventas",
            company: "JT Ventures",
            period: "Dic 2023 – Sep 2024",
            description: [
              "Supervisó las operaciones de franquicias, el compromiso del cliente y las actividades de ventas.",
              "Mejoró la conversión de clientes potenciales a través de ventas consultivas y operaciones simplificadas."
            ]
          },
          {
            title: "Ejecutivo de Desarrollo de Negocios",
            company: "Daksha Real Estate",
            period: "Feb 2019 – Nov 2023",
            description: [
              "Gestionó la adquisición de clientes y generó de 12 a 15 clientes potenciales calificados mensualmente.",
              "Construyó relaciones sólidas a largo plazo con clientes, corredores e interesados."
            ]
          },
          {
            title: "Ejecutivo de Pre-Ventas",
            company: "Epinet",
            period: "Contrato",
            description: [
              "Clientes potenciales calificados, programación de citas y apoyo en la gestión del flujo de CRM."
            ]
          }
        ]
      },
      education: {
        title: "Educación",
        items: [
          { degree: "MSc Digital Marketing & Analytics", school: "Toulouse Business School, Barcelona", period: "2025–2026" },
          { degree: "MSc International Management & Global Business", school: "University of Limerick, Irlanda", period: "2024–2025" },
          { degree: "BBA", school: "D.Y. Patil School of Management, Navi Mumbai", period: "2020–2023" }
        ]
      },
      skills: {
        title: "Habilidades y Especialidades",
        business: "Estrategia Comercial",
        generative_ai: "IA Generativa",
        ai_development: "Desarrollo de IA",
        website_development: "Desarrollo Web",
        deployment: "Despliegue",
        ai_applications: "Aplicaciones de IA",
        digital_marketing: "Marketing Digital",
        productivity: "Productividad"
      },
      projects: {
        title: "Trabajos Destacados",
        categories: { all: "Todos", product: "Concepto de Producto", dev: "Desarrollo Web" },
        items: [
          {
            title: "PartnerOS",
            description: "Concepto de CRM impulsado por IA enfocado en la gestión de leads, gestión de asociaciones, seguimiento de pipelines de ventas y crecimiento comercial.",
            category: "Concepto de Producto",
            tech: ["ChatGPT", "Claude", "CTO.new", "Antigravity", "OpenCode", "GitHub", "Vercel"],
            links: { demo: "https://partneros-crm.vercel.app" }
          },
          {
            title: "Kayzad Advertising",
            description: "Sitio web comercial moderno diseñado y desarrollado utilizando herramientas de desarrollo asistidas por IA con diseño receptivo y experiencia de usuario enfocada en el negocio.",
            category: "Desarrollo Web",
            tech: ["ChatGPT", "CTO.new", "Antigravity", "OpenCode", "GitHub", "Vercel"],
            links: { demo: "https://kayzadadvertising.com" }
          },
          {
            title: "Daksha Real Estate",
            description: "Sitio web inmobiliario profesional diseñado con una interfaz limpia, diseño receptivo y presentación enfocada en el negocio.",
            category: "Desarrollo Web",
            tech: ["ChatGPT", "CTO.new", "Antigravity", "OpenCode", "GitHub", "Vercel"],
            links: { demo: "https://daksharealestate.com" }
          },
          {
            title: "Personal Portfolio",
            description: "Portafolio profesional que muestra Desarrollo de Negocios, Asociaciones Estratégicas, desarrollo de sitios web asistido por IA y proyectos destacados.",
            category: "Desarrollo Web",
            tech: ["ChatGPT", "Claude", "CTO.new", "Antigravity", "OpenCode", "GitHub", "Vercel"],
            links: { demo: "https://jash-portfolio.vercel.app" }
          }
        ]
      },
      contact: {
        title: "Contacto",
        subtitle: "¿Tiene una propuesta, proyecto u oportunidad en mente? ¡Conectemos!",
        form: { name: "Nombre", email: "Email", message: "Mensaje", send: "Enviar Mensaje", success: "¡Enviado!" }
      }
    },
    fr: {
      name: "Jash Navin Thakkar",
      role: "Développement Commercial • Partenariats Stratégiques • Croissance par l'IA",
      hero: {
        headline: "Développement Commercial • Partenariats Stratégiques • Croissance par l'IA",
        subtext: "Aider les entreprises à croître grâce à des partenariats stratégiques, au développement de sites web assisté par l'IA et à l'innovation digitale.",
        cta: {
          projects: "Voir mes projets",
          resume: "Télécharger CV",
          contact: "Contactez-moi"
        }
      },
      about: {
        title: "À Propos",
        content: `Professionnel du Développement Commercial avec plus de 5 ans d'expérience dans les ventes B2B, l'acquisition de clients, les partenariats et l'entrepreneuriat. Actuellement responsable de la croissance chez Billoxy tout en créant des sites web assistés par l'IA et en utilisant l'IA Générative pour la recherche, les propositions, les présentations, le matériel de vente et la documentation commerciale. Diplômé à l'international avec des Masters obtenus en Espagne et en Irlande.`,
        highlights: {
          experience: "5+ Ans d'Expérience",
          education: "2 Masters",
          location: "Navi Mumbai, Inde (Mobile)"
        }
      },
      experience: {
        title: "Expérience",
        items: [
          {
            title: "Spécialiste en Développement Commercial & Partenariats Stratégiques",
            company: "Billoxy",
            period: "Juin 2026 – Présent",
            description: [
              "Piloter l'acquisition B2B auprès des PME, experts-comptables, conseillers fiscaux et financiers.",
              "Gérer l'ensemble du cycle de vente, de la prospection et des démos jusqu'à l'onboarding et la gestion des relations.",
              "Développer des partenariats stratégiques pour élargir la portée du marché et soutenir la croissance de l'entreprise."
            ]
          },
          {
            title: "Développeur de Sites Web IA Indépendant",
            company: "Auto-entrepreneur",
            period: "2026 – Présent",
            description: [
              "Concevoir et développer des sites web professionnels adaptatifs en utilisant CTO.new, Antigravity et OpenCode.",
              "Déployer des sites web avec GitHub et Vercel tout en appliquant le responsive design et les meilleures pratiques SEO.",
              "Collaborer directement avec les clients, du recueil des besoins jusqu'à la livraison finale."
            ]
          },
          {
            title: "Responsable des Opérations Commerciales & Ventes",
            company: "JT Ventures",
            period: "Déc 2023 – Sept 2024",
            description: [
              "Supervisé les opérations de franchise, l'engagement client et les activités de vente.",
              "Amélioré la conversion des leads grâce à des techniques de vente consultative et à la simplification des processus."
            ]
          },
          {
            title: "Responsable du Développement Commercial",
            company: "Daksha Real Estate",
            period: "Fév 2019 – Nov 2023",
            description: [
              "Géré l'acquisition de clients et généré 12 à 15 leads qualifiés par mois.",
              "Construit des relations solides et durables avec les clients, courtiers et partenaires clés."
            ]
          },
          {
            title: "Responsable Pré-Ventes",
            company: "Epinet",
            period: "Contrat",
            description: [
              "Qualification des leads, planification des rendez-vous et soutien à la gestion du pipeline CRM."
            ]
          }
        ]
      },
      education: {
        title: "Éducation",
        items: [
          { degree: "MSc Digital Marketing & Analytics", school: "Toulouse Business School, Barcelone", period: "2025–2026" },
          { degree: "MSc International Management & Global Business", school: "University of Limerick, Irlande", period: "2024–2025" },
          { degree: "BBA", school: "D.Y. Patil School of Management, Navi Mumbai", period: "2020–2023" }
        ]
      },
      skills: {
        title: "Compétences & Expertise",
        business: "Stratégie Commerciale",
        generative_ai: "IA Générative",
        ai_development: "Développement IA",
        website_development: "Développement Web",
        deployment: "Déploiement",
        ai_applications: "Applications de l'IA",
        digital_marketing: "Marketing Digital",
        productivity: "Productivity"
      },
      projects: {
        title: "Projets Phares",
        categories: { all: "Tous", product: "Concept Produit", dev: "Développement Web" },
        items: [
          {
            title: "PartnerOS",
            description: "Concept de CRM propulsé par l'IA axé sur la gestion des leads, des partenariats, le suivi du pipeline de ventes et la croissance commerciale.",
            category: "Concept Produit",
            tech: ["ChatGPT", "Claude", "CTO.new", "Antigravity", "OpenCode", "GitHub", "Vercel"],
            links: { demo: "https://partneros-crm.vercel.app" }
          },
          {
            title: "Kayzad Advertising",
            description: "Site web professionnel moderne conçu et développé avec des outils d'IA, offrant un design adaptatif et une expérience utilisateur orientée business.",
            category: "Développement Web",
            tech: ["ChatGPT", "CTO.new", "Antigravity", "OpenCode", "GitHub", "Vercel"],
            links: { demo: "https://kayzadadvertising.com" }
          },
          {
            title: "Daksha Real Estate",
            description: "Site web immobilier professionnel conçu avec une interface épurée, un affichage adaptatif et une présentation axée sur les affaires.",
            category: "Développement Web",
            tech: ["ChatGPT", "CTO.new", "Antigravity", "OpenCode", "GitHub", "Vercel"],
            links: { demo: "https://daksharealestate.com" }
          },
          {
            title: "Personal Portfolio",
            description: "Portfolio professionnel présentant le développement commercial, les partenariats stratégiques, la conception de sites web assistée par l'IA et divers projets.",
            category: "Développement Web",
            tech: ["ChatGPT", "Claude", "CTO.new", "Antigravity", "OpenCode", "GitHub", "Vercel"],
            links: { demo: "https://jash-portfolio.vercel.app" }
          }
        ]
      },
      contact: {
        title: "Contact",
        subtitle: "Un projet, un partenariat ou une opportunité à proposer ? Écrivez-moi !",
        form: { name: "Nom", email: "Email", message: "Message", send: "Envoyer", success: "Message envoyé !" }
      }
    },
    it: {
      name: "Jash Navin Thakkar",
      role: "Sviluppo del Business • Partnership Strategiche • Crescita con l'IA",
      hero: {
        headline: "Sviluppo del Business • Partnership Strategiche • Crescita con l'IA",
        subtext: "Aiutare le aziende a crescere attraverso partnership strategiche, sviluppo di siti web assistito da intelligenza artificiale e innovazione digitale.",
        cta: {
          projects: "Vedi i miei lavori",
          resume: "Scarica CV",
          contact: "Contattami"
        }
      },
      about: {
        title: "Su di Me",
        content: `Professionista dello Sviluppo del Business con oltre 5 anni di esperienza nelle vendite B2B, acquisizione clienti, partnership e imprenditorialità. Attualmente responsabile della crescita presso Billoxy, realizzando siti web assistiti da intelligenza artificiale e utilizzando l'IA generativa per ricerche, proposte, presentazioni, materiali di vendita e documentazione aziendale. Formazione internazionale con Master conseguiti in Spagna e Irlanda.`,
        highlights: {
          experience: "5+ Anni di Esperienza",
          education: "2 Master",
          location: "Navi Mumbai, India (Disponibile al trasferimento)"
        }
      },
      experience: {
        title: "Esperienza",
        items: [
          {
            title: "Specialista in Sviluppo Aziendale e Partnership Strategiche",
            company: "Billoxy",
            period: "Giu 2026 – Presente",
            description: [
              "Guidare l'acquisizione B2B tra PMI, commercialisti, consulenti fiscali e finanziari.",
              "Gestire l'intero ciclo di vendita dalla ricerca di clienti e demo fino all'onboarding e alla gestione delle relazioni.",
              "Sviluppare partnership strategiche per espandere la presenza sul mercato e supportare la crescita aziendale."
            ]
          },
          {
            title: "Sviluppatore di Siti Web IA Freelance",
            company: "Autonomo",
            period: "2026 – Presente",
            description: [
              "Progettare e sviluppare siti web aziendali reattivi utilizzando CTO.new, Antigravity e OpenCode.",
              "Distribuire siti web con GitHub e Vercel applicando design reattivo e migliori pratiche SEO.",
              "Collaborare direttamente con i clienti dalla raccolta dei requisiti fino alla consegna finale."
            ]
          },
          {
            title: "Responsabile Operazioni Commerciali & Vendite",
            company: "JT Ventures",
            period: "Dic 2023 – Set 2024",
            description: [
              "Supervisionato le attività retail, la gestione del personale e il coinvolgimento dei clienti.",
              "Migliorato le conversioni di vendita attraverso consulenza strategica e flussi operativi ottimizzati."
            ]
          },
          {
            title: "Responsabile Sviluppo Business",
            company: "Daksha Real Estate",
            period: "Feb 2019 – Nov 2023",
            description: [
              "Gestito l'acquisizione di clienti e generato 12-15 lead qualificati ogni mese.",
              "Costruito relazioni solide e durature con clienti, broker e stakeholder aziendali."
            ]
          },
          {
            title: "Responsabile Pre-Vendita",
            company: "Epinet",
            period: "Contratto",
            description: [
              "Qualificazione dei lead, pianificazione degli appuntamenti e supporto nella gestione del CRM pipeline."
            ]
          }
        ]
      },
      education: {
        title: "Formazione",
        items: [
          { degree: "MSc Digital Marketing & Analytics", school: "Toulouse Business School, Barcellona", period: "2025–2026" },
          { degree: "MSc International Management & Global Business", school: "University of Limerick, Irlanda", period: "2024–2025" },
          { degree: "BBA", school: "D.Y. Patil School of Management, Navi Mumbai", period: "2020–2023" }
        ]
      },
      skills: {
        title: "Competenze & Specializzazioni",
        business: "Strategia Aziendale",
        generative_ai: "IA Generativa",
        ai_development: "Sviluppo IA",
        website_development: "Sviluppo Web",
        deployment: "Distribuzione",
        ai_applications: "Applicazioni IA",
        digital_marketing: "Marketing Digitale",
        productivity: "Produttività"
      },
      projects: {
        title: "Lavori In Evidenza",
        categories: { all: "Tutti", product: "Concept di Prodotto", dev: "Sviluppo Web" },
        items: [
          {
            title: "PartnerOS",
            description: "Concept di CRM potenziato dall'IA focalizzato sulla gestione dei lead, partnership, tracciamento della pipeline di vendita e crescita del business.",
            category: "Concept di Prodotto",
            tech: ["ChatGPT", "Claude", "CTO.new", "Antigravity", "OpenCode", "GitHub", "Vercel"],
            links: { demo: "https://partneros-crm.vercel.app" }
          },
          {
            title: "Kayzad Advertising",
            description: "Sito web aziendale moderno progettato e sviluppato con strumenti di IA, con layout reattivo e ottimizzazione per conversioni commerciali.",
            category: "Sviluppo Web",
            tech: ["ChatGPT", "CTO.new", "Antigravity", "OpenCode", "GitHub", "Vercel"],
            links: { demo: "https://kayzadadvertising.com" }
          },
          {
            title: "Daksha Real Estate",
            description: "Sito web immobiliare professionale progettato con un'interfaccia pulita, layout reattivo e focus commerciale.",
            category: "Sviluppo Web",
            tech: ["ChatGPT", "CTO.new", "Antigravity", "OpenCode", "GitHub", "Vercel"],
            links: { demo: "https://daksharealestate.com" }
          },
          {
            title: "Personal Portfolio",
            description: "Portfolio professionale che presenta competenze in sviluppo business, partnership strategiche, sviluppo web con IA e progetti realizzati.",
            category: "Sviluppo Web",
            tech: ["ChatGPT", "Claude", "CTO.new", "Antigravity", "OpenCode", "GitHub", "Vercel"],
            links: { demo: "https://jash-portfolio.vercel.app" }
          }
        ]
      },
      contact: {
        title: "Contattami",
        subtitle: "Hai un'opportunità, una proposta o un progetto? Parliamone!",
        form: { name: "Nome", email: "Email", message: "Messaggio", send: "Invia Messaggio", success: "Messaggio inviato!" }
      }
    },
    de: {
      name: "Jash Navin Thakkar",
      role: "Geschäftsentwicklung • Strategische Partnerschaften • KI-gestütztes Wachstum",
      hero: {
        headline: "Geschäftsentwicklung • Strategische Partnerschaften • KI-gestütztes Wachstum",
        subtext: "Unterstützung von Unternehmen beim Wachstum durch strategische Partnerschaften, KI-unterstützte Website-Entwicklung und digitale Innovation.",
        cta: {
          projects: "Meine Arbeit",
          resume: "Lebenslauf laden",
          contact: "Kontakt aufnehmen"
        }
      },
      about: {
        title: "Über Mich",
        content: `Business Development Professional mit über 5 Jahren Erfahrung in B2B-Vertrieb, Kundenakquise, Partnerschaften und Unternehmertum. Aktuell treibe ich das Wachstum bei Billoxy voran, baue KI-gestützte Websites und nutze Generative KI für Analysen, Angebote, Präsentationen, Vertriebsmaterialien und Geschäftsdokumentationen. International ausgebildet mit Master-Abschlüssen aus Spanien und Irland.`,
        highlights: {
          experience: "5+ Jahre Erfahrung",
          education: "2 Master-Abschlüsse",
          location: "Navi Mumbai, Indien (Reisebereit)"
        }
      },
      experience: {
        title: "Erfahrung",
        items: [
          {
            title: "Spezialist für Geschäftsentwicklung & strategische Partnerschaften",
            company: "Billoxy",
            period: "Jun 2026 – Gegenwart",
            description: [
              "B2B-Kundenakquise bei KMUs, Wirtschaftsprüfern, Steuerberatern und Finanzberatern vorantreiben.",
              "Verantwortung für den gesamten Vertriebszyklus – von der Akquise und Demos bis hin zum Onboarding und Beziehungsmanagement.",
              "Entwicklung strategischer Partnerschaften zur Erschließung neuer Märkte und Unterstützung des Unternehmenswachstums."
            ]
          },
          {
            title: "Freiberuflicher KI-Website-Entwickler",
            company: "Selbstständig",
            period: "2026 – Gegenwart",
            description: [
              "Konzeption und Entwicklung moderner responsiver Unternehmens-Websites mit CTO.new, Antigravity und OpenCode.",
              "Veröffentlichung von Websites über GitHub und Vercel unter Anwendung bewährter Responsive-Design- und SEO-Richtlinien.",
              "Direkte Abstimmung und Zusammenarbeit mit Kunden von der Anforderungserfassung bis zur finalen Übergabe."
            ]
          },
          {
            title: "Spezialist für Geschäftsbetrieb & Vertrieb",
            company: "JT Ventures",
            period: "Dez 2023 – Sep 2024",
            description: [
              "Verantwortung für den Franchise-Betrieb, die Kundenbindung und vertriebliche Aktivitäten.",
              "Steigerung der Lead-Konversion durch beratenden Verkauf und optimierte betriebliche Abläufe."
            ]
          },
          {
            title: "Business Development Executive",
            company: "Daksha Real Estate",
            period: "Feb 2019 – Nov 2023",
            description: [
              "Kundenakquise und Generierung von monatlich 12-15 qualifizierten Leads.",
              "Aufbau langfristiger, vertrauensvoller Beziehungen zu Kunden, Maklern und wichtigen Partnern."
            ]
          },
          {
            title: "Pre-Sales Executive",
            company: "Epinet",
            period: "Vertrag",
            description: [
              "Qualifizierung von Leads, Terminvereinbarung und Unterstützung des CRM-Pipeline-Managements."
            ]
          }
        ]
      },
      education: {
        title: "Ausbildung",
        items: [
          { degree: "MSc Digital Marketing & Analytics", school: "Toulouse Business School, Barcelona", period: "2025–2026" },
          { degree: "MSc International Management & Global Business", school: "University of Limerick, Irland", period: "2024–2025" },
          { degree: "BBA", school: "D.Y. Patil School of Management, Navi Mumbai", period: "2020–2023" }
        ]
      },
      skills: {
        title: "Fähigkeiten & Kompetenzen",
        business: "Geschäftsstrategie",
        generative_ai: "Generative KI",
        ai_development: "KI-Entwicklung",
        website_development: "Website-Entwicklung",
        deployment: "Deployment",
        ai_applications: "KI-Anwendungen",
        digital_marketing: "Digitales Marketing",
        productivity: "Produktivität"
      },
      projects: {
        title: "Ausgewählte Arbeiten",
        categories: { all: "Alle", product: "Produktkonzept", dev: "Website-Entwicklung" },
        items: [
          {
            title: "PartnerOS",
            description: "KI-gestütztes CRM-Konzept mit Fokus auf Lead-Management, Partnerschaftsverwaltung, Vertriebs-Pipeline-Tracking und Geschäftswachstum.",
            category: "Produktkonzept",
            tech: ["ChatGPT", "Claude", "CTO.new", "Antigravity", "OpenCode", "GitHub", "Vercel"],
            links: { demo: "https://partneros-crm.vercel.app" }
          },
          {
            title: "Kayzad Advertising",
            description: "Moderne Unternehmens-Website, entworfen und entwickelt mit KI-Unterstützung, optimiert für ein herausragendes responsives Nutzererlebnis.",
            category: "Website-Entwicklung",
            tech: ["ChatGPT", "CTO.new", "Antigravity", "OpenCode", "GitHub", "Vercel"],
            links: { demo: "https://kayzadadvertising.com" }
          },
          {
            title: "Daksha Real Estate",
            description: "Professionelle Immobilien-Website mit einer übersichtlichen Benutzeroberfläche, responsivem Layout und geschäftsorientierter Präsentation.",
            category: "Website-Entwicklung",
            tech: ["ChatGPT", "CTO.new", "Antigravity", "OpenCode", "GitHub", "Vercel"],
            links: { demo: "https://daksharealestate.com" }
          },
          {
            title: "Personal Portfolio",
            description: "Professionelles Portfolio zur Präsentation von Geschäftsentwicklung, strategischen Partnerschaften, KI-unterstützter Website-Entwicklung und Projekten.",
            category: "Website-Entwicklung",
            tech: ["ChatGPT", "Claude", "CTO.new", "Antigravity", "OpenCode", "GitHub", "Vercel"],
            links: { demo: "https://jash-portfolio.vercel.app" }
          }
        ]
      },
      contact: {
        title: "Kontakt",
        subtitle: "Haben Sie ein Projekt, eine Partnerschaft oder ein Angebot? Melden Sie sich!",
        form: { name: "Name", email: "E-Mail", message: "Nachricht", send: "Nachricht senden", success: "Nachricht gesendet!" }
      }
    }
  }
};
