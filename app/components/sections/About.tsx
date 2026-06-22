import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import {
  education,
  languages,
  softSkills,
  profile,
} from "../../data/portfolio";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container-px">
        <SectionHeading
          eyebrow="01 — About"
          title="A bit about me"
          description={profile.summary}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {/* Education */}
          <Reveal className="card card-hover p-6 lg:col-span-2">
            <h3 className="font-display text-lg font-semibold text-white">
              Education
            </h3>
            <ul className="mt-5 space-y-5">
              {education.map((item) => (
                <li
                  key={item.degree}
                  className="border-l-2 border-accent/40 pl-4"
                >
                  <p className="font-medium text-white">{item.degree}</p>
                  <p className="text-sm text-white/60">
                    {item.school} · {item.location}
                  </p>
                  <p className="mt-1 font-mono text-xs text-accent">
                    {item.period}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Languages */}
          <Reveal delay={0.1} className="card card-hover p-6">
            <h3 className="font-display text-lg font-semibold text-white">
              Languages
            </h3>
            <ul className="mt-5 space-y-4">
              {languages.map((lang) => (
                <li key={lang.name} className="flex items-center justify-between">
                  <span className="text-white/80">{lang.name}</span>
                  <span className="font-mono text-xs text-white/50">
                    {lang.level}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Soft skills */}
        <Reveal delay={0.15} className="mt-6">
          <div className="card p-6">
            <h3 className="font-display text-lg font-semibold text-white">
              Soft skills
            </h3>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {softSkills.map((skill) => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
