import Image from "next/image";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import { projects } from "../../data/portfolio";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container-px">
        <SectionHeading
          eyebrow="04 — Projects"
          title="Selected work"
          description="A selection of platforms and applications I've designed and built end to end."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 0.08}>
              <article className="card card-hover group h-full overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    quality={90}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 font-mono text-xs text-accent backdrop-blur">
                    {project.type}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
