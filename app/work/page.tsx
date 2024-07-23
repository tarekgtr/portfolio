"use client";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";
import Image from "next/image";

const work = [
  {
    title: "Management and Monitoring System of Tourist Activities",
    description: "Fullstack web application",
    technologies: [
      "Java EE",
      "Jsf",
      "Java 17",
      "Primefaces 13",
      "liquibase",
      "Jasper Report",
      "keykloak",
      "Postgresql",
      "JAX-rs",
    ],
    image: "/assets/at.png",
    link: "https://github.com/andrei-alexandru/dg-production",
  },
  {
    title: "Management and Monitoring System of Craft Activities",
    description: "Front-end project",
    technologies: ["Next.js 13", "TypeScript", "Material UI"],
    image: "/assets/art.png",
    link: "https://github.com/andrei-alexandru/dg-production",
  },
  {
    title: "Portfolio",
    description: "Front-end project",
    technologies: ["Next.js 14", "TypeScript", "Shadcn UI", "Tailwind css"],
    image: "/assets/portfolio.png",
    link: "https://github.com/andrei-alexandru/dg-production",
  },
  {
    title: "Simple project microservices",
    description: "Back-end project employs a microservices architecture,",
    technologies: [
      "Java 17",
      "SpringBoot 2.7",
      "Spring Cloud",
      "Eureka",
      "Resilience4j",
      "Kafka",
      "Zipkin",
      "API gateway",
      "Keycloak",
      "Prometheus",
      "Grafana",
    ],
    image: "/assets/backend.svg",
    link: "https://github.com/andrei-alexandru/dg-production",
  },
  {
    title: "Registration-Token-Email-verification",
    description:
      "Back-end project for user registration, login, logout, generating token and mail sender (Real Email verification).",
    technologies: ["Java 17", "SpringBoot 2.7", "Java mail sender"],
    image: "/assets/backend.svg",
    link: "https://github.com/andrei-alexandru/dg-production",
  },
  {
    title: "DG Production",
    description: "Desktop application for managing production processes.",
    technologies: [
      "JavaFx",
      "Java 8",
      "MaterialFx",
      "Jasper Report",
      "css",
      "xml",
    ],
    image: "/assets/dgp.jpg",
    link: "https://github.com/andrei-alexandru/dg-production",
  },
  {
    title: "Stock management of mostaganem university",
    description: "Desktop application for managing production processes.",
    technologies: [
      "JavaFx",
      "Java 8",
      "MaterialFx",
      "Jasper Report",
      "css",
      "xml",
    ],
    image: "/assets/gsum.png",
    link: "https://github.com/andrei-alexandru/dg-production",
  },
];

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-start justify-center py-12 xl:py-0"
    >
      <div className="container my-10">
        <div className="flex flex-col mb-14 text-center xl:text-left">
          <h3 className="text-4xl mb-2">Work</h3>
          <p className="text-xl text-white/60 mx-auto xl:mx-0">
            Here is a collection of projects that I have worked on, showcasing
            my experience and skills across various domains and technologies.
          </p>
        </div>
        <div className="flex flex-wrap items-start justify-around w-[100%] h-[100%] gap-8">
          {work.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col w-[350px] h-fit items-start justify-center border border-accent/20 rounded-md hover:shadow-md hover:shadow-accent/50 transition-all p-2"
              >
                <div className="flex items-center justify-center w-[100%] ">
                  <div className="w-[320px] h-[200px] relative overflow-hidden rounded-md flex items-center justify-center">
                    <Image
                      src={item.image}
                      priority
                      quality={100}
                      alt=""
                      layout="fill"
                      className="absolute w-full h-full object-fill"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl my-3">{item.title}</h3>
                  <p className="text-white/60 leading-5 text-sm">
                    {item.description}
                  </p>
                  <ul className="flex flex-wrap gap-[5px] my-5">
                    {item.technologies.map((item, index) => {
                      return (
                        <li
                          className="bg-gray-800 flex items-center gap-3 px-2 w-fit rounded-xl"
                          key={index}
                        >
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-sm">{item}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
