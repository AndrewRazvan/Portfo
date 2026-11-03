// All site copy lives here, in English and French.
// Keep ids and links language-independent so React keys stay stable on toggle.

export const RESUME_URL = "/Andrew_Ungureanu_Resume.pdf";

export const contact = {
  email: "andrewrazvanu@gmail.com",
  phone: "438-406-4068",
  phoneHref: "tel:+14384064068",
  linkedin: "https://www.linkedin.com/in/andrew-razvan-ungureanu-22b7402aa/",
  linkedinLabel: "andrew-razvan-ungureanu",
  github: "https://github.com/AndrewRazvan",
  githubLabel: "AndrewRazvan",
};

const experience = [
  {
    id: "hydro-quebec",
    company: "Hydro-Québec",
    location: "Montreal, QC",
    current: true,
    tags: ["C#", "WPF", "PKI", "Windows Server", "YubiKey"],
    en: {
      role: "Software Developer & Cybersecurity Intern",
      dates: "May 2025 – Present",
      bullets: [
        "Built a secure pre-production infrastructure from the ground up to support PKI deployment and testing.",
        "Contributed to the design and implementation of the Public Key Infrastructure (PKI) used across enterprise Windows Server environments.",
        "Built an in-house C# WPF application to manage cryptographic keys and certificates stored on YubiKeys, improving internal key lifecycle management.",
        "Worked with the cybersecurity and infrastructure teams to validate reliability, automate certificate operations, and harden identity management systems.",
      ],
    },
    fr: {
      role: "Stagiaire en développement logiciel et cybersécurité",
      dates: "mai 2025 – aujourd’hui",
      bullets: [
        "Mise en place, à partir de zéro, d’une infrastructure de préproduction sécurisée pour le déploiement et les tests de l’ICP.",
        "Contribution à la conception et à la mise en œuvre de l’infrastructure à clé publique (ICP) utilisée dans les environnements Windows Server de l’entreprise.",
        "Développement d’une application interne en C# WPF pour gérer les clés cryptographiques et les certificats stockés sur des YubiKey, améliorant la gestion du cycle de vie des clés.",
        "Collaboration avec les équipes de cybersécurité et d’infrastructure pour valider la fiabilité, automatiser les opérations sur les certificats et renforcer la gestion des identités.",
      ],
    },
  },
  {
    id: "desjardins",
    company: "Desjardins",
    location: "Montreal, QC",
    current: false,
    tags: ["Excel", "BlueMatrix", "MySQL", "Power BI"],
    en: {
      role: "Data Analyst Intern",
      dates: "Sept 2024 – Dec 2024",
      bullets: [
        "Developed automated data integration workflows from Excel to BlueMatrix and MySQL to Power BI, streamlining reporting and reducing manual errors.",
        "Cleaned and corrected critical internal databases, improving data accuracy and reliability.",
      ],
    },
    fr: {
      role: "Stagiaire analyste de données",
      dates: "sept. 2024 – déc. 2024",
      bullets: [
        "Développement de flux d’intégration de données automatisés d’Excel vers BlueMatrix et de MySQL vers Power BI, simplifiant la production de rapports et réduisant les erreurs manuelles.",
        "Nettoyage et correction de bases de données internes critiques, améliorant l’exactitude et la fiabilité des données.",
      ],
    },
  },
];

const projects = [
  {
    id: "aquascan",
    title: "AquaScan",
    featured: true,
    tags: ["React Native", "TypeScript", "Python", "AI/ML"],
    links: { code: "https://github.com/AndrewRazvan/PolyHacks2025" },
    en: {
      subtitle: "AI fish identification app",
      award: "1st Place · PolyHacks 2025",
      dates: "Jan 2025",
      description:
        "AI-powered mobile app that identifies fish species and checks real-time fishing regulations. Won 1st place and the $1,000 grand prize at PolyHacks 2025 (Polytechnique Montréal) with a 4-person team. I worked on AI model performance, API management, and database structure.",
    },
    fr: {
      subtitle: "Application d’identification de poissons par IA",
      award: "1re place · PolyHacks 2025",
      dates: "janv. 2025",
      description:
        "Application mobile propulsée par l’IA qui identifie les espèces de poissons et vérifie en temps réel la réglementation de pêche. 1re place et grand prix de 1 000 $ à PolyHacks 2025 (Polytechnique Montréal) en équipe de quatre. J’ai travaillé sur la performance du modèle d’IA, la gestion des API et la structure de la base de données.",
    },
  },
  {
    id: "linkup",
    title: "LinkUp",
    tags: ["React", "JavaScript", "Node.js", "WebSockets", "BERT"],
    links: {},
    en: {
      subtitle: "Live messaging application",
      dates: "Jan 2025 – May 2025",
      description:
        "Real-time messaging over WebSockets with private chats and cross-platform support, plus a BERT model I trained for AI-powered toxicity detection.",
    },
    fr: {
      subtitle: "Application de messagerie en direct",
      dates: "janv. 2025 – mai 2025",
      description:
        "Messagerie en temps réel par WebSockets avec conversations privées et prise en charge multiplateforme, ainsi qu’un modèle BERT que j’ai entraîné pour détecter la toxicité.",
    },
  },
  {
    id: "home-lab",
    title: "Home Lab",
    tags: ["Networking", "DNS", "NAS", "Docker", "Self-hosting"],
    links: {},
    en: {
      subtitle: "Self-hosted infrastructure",
      dates: "Feb 2026 – Present",
      description:
        "A full home lab with DNS filtering, NAS storage, and a separately segmented network, self-hosting multiple applications and services.",
    },
    fr: {
      title: "Laboratoire maison",
      subtitle: "Infrastructure autohébergée",
      dates: "févr. 2026 – aujourd’hui",
      description:
        "Un laboratoire maison complet avec filtrage DNS, stockage NAS et un réseau segmenté distinct, hébergeant plusieurs applications et services.",
    },
  },
  {
    id: "ethical-hacking",
    title: "Ethical Hacking",
    tags: ["TryHackMe", "Hack The Box", "OverTheWire"],
    links: {},
    en: {
      subtitle: "Offensive security practice",
      dates: "May 2025 – Present",
      description:
        "Ongoing practice of offensive security fundamentals and capture-the-flag challenges.",
    },
    fr: {
      title: "Piratage éthique",
      subtitle: "Pratique de la sécurité offensive",
      dates: "mai 2025 – aujourd’hui",
      description:
        "Pratique continue des fondamentaux de la sécurité offensive et de défis de type capture du drapeau (CTF).",
    },
  },
];

const hackathons = [
  {
    id: "conuhacks-viii",
    title: "FitnessCheck AI",
    event: "ConUHacks VIII",
    links: {
      demo: "https://www.youtube.com/watch?v=P1QSf3GHF8o",
      devpost: "https://devpost.com/software/fitnesscheck-ai",
    },
    en: { description: "Real-time exercise form tracking with OpenCV and MediaPipe." },
    fr: { description: "Suivi en temps réel de la posture d’exercice avec OpenCV et MediaPipe." },
  },
  {
    id: "polyhacks-2024",
    title: "Safe & Sound",
    event: "PolyHacks 2024",
    links: {
      code: "https://github.com/AndrewRazvan/PolyHacks2024",
      demo: "https://www.youtube.com/watch?v=Q5OLDDagAJg",
      devpost: "https://devpost.com/software/safe-and-sound-zms5nj",
    },
    en: { description: "Sound level monitor that warns about unsafe noise exposure." },
    fr: { description: "Moniteur de niveau sonore qui avertit en cas d’exposition à un bruit dangereux." },
  },
];

// Items are a plain string when the name is the same in both languages
const skills = [
  { id: "languages", en: "Languages", fr: "Langages", items: ["Java", "C#", "TypeScript", "JavaScript", "Python", "HTML", "CSS"] },
  {
    id: "ai",
    en: "AI & LLM",
    fr: "IA et LLM",
    items: [
      { en: "Generative AI", fr: "IA générative" },
      { en: "Large Language Models", fr: "Grands modèles de langage" },
      { en: "Retrieval-Augmented Generation", fr: "Génération augmentée (RAG)" },
      { en: "Prompt Engineering", fr: "Ingénierie de prompts" },
      "TensorFlow",
    ],
  },
  {
    id: "frameworks",
    en: "Frameworks & Platforms",
    fr: "Frameworks et plateformes",
    items: ["React", "React Native", "Spring Boot", "Node.js", "Express", "Android"],
  },
  {
    id: "data",
    en: "Data & Infra",
    fr: "Données et infrastructure",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Azure", "Docker", "Terraform", "Pulsar", { en: "REST APIs", fr: "API REST" }],
  },
  { id: "tools", en: "Tools", fr: "Outils", items: ["Git", "GitHub", "GitLab", "Claude Code", "Codex", "Jira", "Confluence", "Linux"] },
  {
    id: "methods",
    en: "Methods & QA",
    fr: "Méthodes et assurance qualité",
    items: [
      "Agile",
      "Scrum",
      "CI/CD",
      "SDLC",
      { en: "Unit Testing", fr: "Tests unitaires" },
      { en: "Integration Testing", fr: "Tests d’intégration" },
      { en: "End-to-End Testing", fr: "Tests de bout en bout" },
      { en: "Test Automation", fr: "Automatisation des tests" },
      "Playwright",
      "Jest",
    ],
  },
  { id: "spoken", en: "Spoken", fr: "Langues parlées", items: [{ en: "French", fr: "Français" }, { en: "English", fr: "Anglais" }] },
];

const ui = {
  en: {
    skip: "Skip to content",
    nav: {
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
      resume: "Resume",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      language: "Language",
    },
    hero: {
      status: "Currently interning at Hydro-Québec",
      role: "Software developer with a focus on security",
      intro:
        "I’m a software engineering co-op student at Concordia University. I build secure, reliable systems, from enterprise PKI tooling at Hydro-Québec to an award-winning AI app at PolyHacks 2025. Off the keyboard, I play varsity soccer for the Concordia Stingers.",
      resume: "Download resume",
      contact: "Get in touch",
      photoAlt: "Andrew Ungureanu playing soccer for the Concordia Stingers",
    },
    sections: {
      experience: { eyebrow: "experience", title: "Where I’ve worked" },
      projects: { eyebrow: "projects", title: "Things I’ve built" },
      skills: { eyebrow: "skills", title: "Tools I work with" },
      education: { eyebrow: "education", title: "Education" },
      contact: {
        eyebrow: "contact",
        title: "Let’s work together",
        lead: "Have an opportunity, a project, or just want to talk shop? My inbox is open.",
      },
    },
    current: "Current",
    hackathonsTitle: "Earlier hackathons",
    links: { code: "Code", demo: "Demo", devpost: "Devpost" },
    education: {
      school: "Concordia University",
      degree: "Bachelor of Engineering, Software Engineering Co-op",
      dates: "Sept 2023 – May 2027",
      location: "Montreal, QC",
      bullets: [
        "Member of the Institute for Co-operative Education",
        "Varsity soccer player, Concordia Stingers",
      ],
      coursesTitle: "Relevant courses",
      courses: [
        "Data Structures and Algorithms",
        "Object-Oriented Programming (Java I & II)",
        "Web Development",
        "Principles of Programming Languages",
        "Software Architecture",
        "Software Requirements and Deployment",
        "Software Management",
        "Measurement and Quality Control",
      ],
    },
    contactLinks: { email: "Email", copy: "Copy email", copied: "Copied!", phone: "Phone" },
    footer: { built: "Designed and built by Andrew Ungureanu", top: "Back to top" },
  },
  fr: {
    skip: "Aller au contenu",
    nav: {
      experience: "Expérience",
      projects: "Projets",
      skills: "Compétences",
      education: "Formation",
      contact: "Contact",
      resume: "CV",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      language: "Langue",
    },
    hero: {
      status: "En stage chez Hydro-Québec",
      role: "Développeur logiciel axé sur la sécurité",
      intro:
        "Je suis étudiant en génie logiciel au programme Co-op de l’Université Concordia. Je conçois des systèmes sécurisés et fiables, des outils d’ICP d’entreprise chez Hydro-Québec à une application d’IA primée à PolyHacks 2025. Hors du clavier, je joue au soccer universitaire avec les Stingers de Concordia.",
      resume: "Télécharger le CV (anglais)",
      contact: "Me contacter",
      photoAlt: "Andrew Ungureanu jouant au soccer avec les Stingers de Concordia",
    },
    sections: {
      experience: { eyebrow: "expérience", title: "Mon parcours professionnel" },
      projects: { eyebrow: "projets", title: "Mes réalisations" },
      skills: { eyebrow: "compétences", title: "Mes outils" },
      education: { eyebrow: "formation", title: "Formation" },
      contact: {
        eyebrow: "contact",
        title: "Travaillons ensemble",
        lead: "Une occasion, un projet, ou simplement envie de discuter techno? Ma boîte de réception est ouverte.",
      },
    },
    current: "En cours",
    hackathonsTitle: "Hackathons précédents",
    links: { code: "Code", demo: "Démo", devpost: "Devpost" },
    education: {
      school: "Université Concordia",
      degree: "Baccalauréat en génie logiciel, programme Co-op",
      dates: "sept. 2023 – mai 2027",
      location: "Montréal, QC",
      bullets: [
        "Membre de l’Institut d’enseignement coopératif",
        "Joueur de soccer universitaire, Stingers de Concordia",
      ],
      coursesTitle: "Cours pertinents",
      courses: [
        "Structures de données et algorithmes",
        "Programmation orientée objet (Java I et II)",
        "Développement Web",
        "Principes des langages de programmation",
        "Architecture logicielle",
        "Exigences et déploiement logiciels",
        "Gestion de projets logiciels",
        "Mesure et contrôle de la qualité",
      ],
    },
    contactLinks: { email: "Courriel", copy: "Copier le courriel", copied: "Copié!", phone: "Téléphone" },
    footer: { built: "Conçu et réalisé par Andrew Ungureanu", top: "Retour en haut" },
  },
};

// Merge shared data with the strings for one language
export const getContent = (lang) => ({
  ...ui[lang],
  experience: experience.map(({ en, fr, ...rest }) => ({ ...rest, ...(lang === "fr" ? fr : en) })),
  projects: projects.map(({ en, fr, ...rest }) => ({ ...rest, ...(lang === "fr" ? fr : en) })),
  hackathons: hackathons.map(({ en, fr, ...rest }) => ({ ...rest, ...(lang === "fr" ? fr : en) })),
  skills: skills.map(({ id, en, fr, items }) => ({
    id,
    label: lang === "fr" ? fr : en,
    items: items.map((item) => (typeof item === "string" ? { id: item, label: item } : { id: item.en, label: item[lang] })),
  })),
});
