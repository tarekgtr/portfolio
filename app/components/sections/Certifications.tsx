import { FiAward } from "react-icons/fi";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import { certifications } from "../../data/portfolio";

const Certifications = () => {
  return (
    <section className="section pb-0">
      <div className="container-px">
        <SectionHeading eyebrow="05 — Certifications" title="Certifications" />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 0.08}>
              <div className="card card-hover flex h-full flex-col gap-4 p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-xl text-accent">
                  <FiAward />
                </div>
                <div>
                  <p className="font-mono text-xs text-accent">{cert.year}</p>
                  <p className="mt-1 font-medium text-white">{cert.name}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
