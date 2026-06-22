import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import { skillGroups, featuredStack } from "../../data/portfolio";

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container-px">
        <SectionHeading
          eyebrow="03 — Skills"
          title="My technical toolkit"
          description="The languages, frameworks and tools I reach for to design, build and ship software."
        />

        {/* featured stack icons */}
        <Reveal className="mt-10">
          <div className="card grid grid-cols-3 gap-px overflow-hidden p-px sm:grid-cols-4 lg:grid-cols-6">
            {featuredStack.map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="flex flex-col items-center gap-2 bg-surface/60 px-3 py-6 text-center transition-colors hover:bg-white/5"
              >
                <Icon className="text-3xl text-accent" />
                <span className="text-xs text-white/60">{name}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* grouped skills */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={(i % 2) * 0.08}>
              <div className="card card-hover h-full p-6">
                <h3 className="font-mono text-sm uppercase tracking-wider text-accent">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
