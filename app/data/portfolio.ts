import type { IconType } from "react-icons";
import {
  FaJava,
  FaJs,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaJenkins,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiApachekafka,
  SiKeycloak,
} from "react-icons/si";

export const profile = {
  name: "Tarek Goufa",
  role: "Senior Software Engineer",
  tagline: "Full Stack Software Engineer",
  location: "Algiers, Algeria",
  email: "Tarek.goufa10@gmail.com",
  phone: "+213 792 215 387",
  website: "https://tarek-goufa.vercel.app",
  resume: "/assets/resume.pdf",
  available: true,
  summary:
    "Full stack software engineer with 3+ years of experience building robust web and desktop applications. Advanced expertise in Java/Spring Boot on the back-end and React/Next.js on the front-end. Comfortable in Agile/Scrum environments, Docker containerization and microservices architectures — rigorous, quality-driven and a continuous learner.",
  yearsOfExperience: "3+",
};

export const socials = [
  { name: "GitHub", url: "https://github.com/tarekgtr", handle: "tarekgtr" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/tarek-goufa/",
    handle: "tarek-goufa",
  },
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    role: "Full Stack Software Engineer",
    company: "Entreprise d'Appui au Développement du Numérique (EADN)",
    location: "Algiers",
    period: "Dec 2022 — Present",
    current: true,
    highlights: [
      "Built a complete web platform for the Tourism Activities Management & Monitoring System for the Ministry of Tourism and Handicrafts.",
      "Designed and developed a Handicraft Activities Management & Monitoring platform for the same ministry.",
      "Owned the full development lifecycle (front-end and back-end) as the lead full stack developer.",
      "Applied the Scrum methodology to ensure efficient project management and on-time delivery.",
    ],
  },
  {
    role: "Java Developer",
    company: "DG Software",
    location: "Tlemcen",
    period: "May 2022 — Aug 2022",
    highlights: [
      "Developed a desktop application for a Production Management System.",
      "Designed and implemented a modern, responsive UI with Material Design.",
      "Applied the Scrum methodology to ensure on-time delivery.",
    ],
  },
];

export type Education = {
  degree: string;
  school: string;
  location: string;
  period: string;
};

export const education: Education[] = [
  {
    degree: "Master in Information Systems Engineering",
    school: "Abdelhamid Ibn Badis University",
    location: "Mostaganem",
    period: "2018 — 2020",
  },
  {
    degree: "Bachelor in Computer Science & Information Systems",
    school: "Abdelhamid Ibn Badis University",
    location: "Mostaganem",
    period: "2015 — 2018",
  },
];

export type Project = {
  title: string;
  type: string;
  description: string;
  technologies: string[];
  image: string;
};

export const projects: Project[] = [
  {
    title: "Tourism Activities Management System",
    type: "Full Stack Web Platform",
    description:
      "Secure, scalable platform with dynamic reporting for the Ministry of Tourism, covering the management and monitoring of tourist activities.",
    technologies: [
      "Java EE 8",
      "Java 17",
      "JSF PrimeFaces 14",
      "PostgreSQL",
      "Liquibase",
      "Jasper Reports",
      "Keycloak",
      "JAX-RS",
    ],
    image: "/assets/at.png",
  },
  {
    title: "Handicraft Activities Management System",
    type: "Full Stack Web Platform",
    description:
      "Full stack platform with a modern Next.js interface and a robust Java back-end for managing and monitoring handicraft activities.",
    technologies: [
      "Next.js 13",
      "Material UI 5",
      "Java EE 8",
      "Java 17",
      "Keycloak",
      "PostgreSQL",
      "JAX-RS",
    ],
    image: "/assets/art.png",
  },
  {
    title: "Client Data Collection System",
    type: "Back-end · Hotel Establishments",
    description:
      "Back-end service for collecting client data from hotel establishments, with secure gRPC communication over mTLS and Keycloak-based authentication & authorization.",
    technologies: ["Spring Boot 3.5", "gRPC", "mTLS", "Keycloak"],
    image: "/assets/backend.svg",
  },
  {
    title: "Microservices Platform",
    type: "Back-end · Microservices",
    description:
      "Back-end project built on a microservices architecture with service discovery, resilience, event streaming and full observability through distributed tracing and metrics.",
    technologies: [
      "Java 17",
      "Spring Boot 2.7",
      "Spring Cloud",
      "Eureka",
      "API Gateway",
      "Resilience4j",
      "Kafka",
      "Zipkin",
      "Keycloak",
      "Prometheus",
      "Grafana",
    ],
    image: "/assets/backend.svg",
  },
  {
    title: "DG Production",
    type: "Desktop Application",
    description:
      "N-tier desktop application for managing production processes, with integrated reporting and a Material Design interface.",
    technologies: ["JavaFX", "Java 8", "Material Design", "JasperReport", "XML"],
    image: "/assets/dgp.jpg",
  },
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Java", "JavaScript", "C", "HTML/CSS", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "Spring Boot",
      "Java EE",
      "JSF PrimeFaces",
      "Java Swing",
      "JavaFX",
      "Next.js",
      "React",
      "Material UI",
    ],
  },
  {
    category: "Architecture & Patterns",
    items: ["Microservices", "REST API", "gRPC", "N-tier", "CI/CD"],
  },
  {
    category: "DevOps & Tools",
    items: [
      "Docker",
      "Jenkins",
      "Git",
      "Kafka",
      "Eureka",
      "Resilience4j",
      "Keycloak",
      "Liquibase",
      "iReport / Jasper",
    ],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB"],
  },
  {
    category: "Methods",
    items: ["Scrum / Agile", "UML"],
  },
];

export const featuredStack: { name: string; icon: IconType }[] = [
  { name: "Java", icon: FaJava },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: FaReact },
  { name: "JavaScript", icon: FaJs },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Docker", icon: FaDocker },
  { name: "Kafka", icon: SiApachekafka },
  { name: "Keycloak", icon: SiKeycloak },
  { name: "Jenkins", icon: FaJenkins },
  { name: "Git", icon: FaGitAlt },
];

export const softSkills = [
  "Problem Solving",
  "Adaptability",
  "Critical Thinking",
  "Attention to Detail",
  "Communication",
  "Teamwork",
  "Time Management",
  "Creativity",
  "Continuous Learning",
  "Resilience",
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Advanced (B2/C1)" },
  { name: "French", level: "Advanced (B2/C1)" },
];

export const certifications = [
  { year: "2024", name: "Docker Training Course" },
  { year: "2023", name: "M001: MongoDB Basics" },
  { year: "2021", name: "Java Enterprise Edition 8" },
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
