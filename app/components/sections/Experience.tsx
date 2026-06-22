import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import { experiences } from "../../data/portfolio";

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container-px">
        <SectionHeading
          eyebrow="02 — Experience"
          title="Where I've worked"
          description="Building and shipping production software across web and desktop platforms."
        />

        <div className="mt-12 space-y-6">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 0.08}>
              <article className="card card-hover p-6 sm:p-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white">
                      {exp.role}
                    </h3>
                    <p className="mt-1 text-accent">{exp.company}</p>
                    <p className="text-sm text-white/50">{exp.location}</p>
                  </div>
                  <span
                    className={`inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 font-mono text-xs ${
                      exp.current
                        ? "bg-accent/15 text-accent"
                        : "bg-white/5 text-white/60"
                    }`}
                  >
                    {exp.current && (
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    )}
                    {exp.period}
                  </span>
                </div>

                <ul className="mt-5 space-y-3">
                  {exp.highlights.map((point, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-white/70">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
