"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3, FaJs, FaReact, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "About me",
  description:
    "Experienced in information systems engineering and Java development, fluent in Arabic, English, and French. Available for freelance work.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Tarek Goufa",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+213) 792 215 387",
    },
    {
      fieldName: "Experience",
      fieldValue: "2 Years",
    },
    {
      fieldName: "Email",
      fieldValue: "Tarek.goufa10@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Arabic, English, French",
    },
  ],
};

const experience = {
  icon: "",
  title: "My experience",
  description:
    "Passionate and skilled professional with extensive experience in information systems engineering and Java development, dedicated to delivering effective digital solutions.",
  items: [
    {
      company: "Entreprise d'Appui au Développement du Numérique (EADN)",
      position: "Senior information systems engineer",
      duration: "Dec 2022 - present",
    },
    {
      company: "DG Software",
      position: "Java developer",
      duration: "Mai 2022 - Aug 2022",
    },
  ],
};

const education = {
  icon: "",
  title: "My education",
  description:
    "Strong educational background in information systems engineering and computer systems.",
  items: [
    {
      institution: "Abdelhamid Ibn Badis University",
      degree: "Master in Information Systems Engineering",
      duration: "2018 - 2020",
    },
    {
      institution: "Abdelhamid Ibn Badis University",
      degree: "Bachelor of computer system",
      duration: "2015 - 2018",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Proficient in various technologies and methodologies related to information systems engineering and software development.",
  skillList: [
    "Java",
    "JavaScript",
    "Java EE",
    "Spring Boot",
    "Java Swing",
    "PrimeFaces",
    "JSF",
    "Next.js",
    "React",
    "Bootstrap",
    "Tailwind css",
    "Docker",
    "HTML/CSS",
    "C",
    "UML",
    "Android",
    "Rest API",
    "Scrum Method",
    "Git",
    "iReport",
    "Microservices",
    "Kafka",
    "Eureka",
    "Resilience4j",
  ],
};

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-start justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          className="flex flex-col xl:flex-row gap-[60px]"
          defaultValue={"experience"}
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about_me">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[100%] w-full">
            <TabsContent className="w-full" value="experience">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[100%] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ul className="grid grid-cols-1 gap-[30px]">
                  {experience.items.map((experience, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-slate-900 py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">
                          {experience.duration}
                        </span>
                        <h3 className="text-xl text-center lg:text-left">
                          {experience.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{experience.company}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent className="w-full" value="education">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[100%] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ul className="grid grid-cols-1 gap-[30px]">
                  {education.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-slate-900 py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent className="w-full" value="skills">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[100%] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[10px]">
                  {skills.skillList.map((item, index) => {
                    return (
                      <li
                        className="bg-gray-800 flex items-center gap-3 px-2 w-fit rounded-xl"
                        key={index}
                      >
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p>{item}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              className="w-full text-center xl:text-left"
              value="about_me"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[100%] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[100%] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-stretch justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
