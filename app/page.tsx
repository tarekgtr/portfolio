import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "./components/ui/Socials";
import Photo from "./components/Photo";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Software developer</span>
            <h1 className="text-[48px] leading-snug">
              Hello I'm <br /> <span className="text-accent">Tarek Goufa</span>
            </h1>
            <p className="text-[18px] text-white max-w-[500px] mt-8">
              Passionate about software engineering and fullstack development.
              Committed to collaborative problem-solving and exceeding customer
              satisfaction. Let's innovate together.
            </p>
            <div className="flex flex-col xl:flex-row  gap-8 items-center mt-8">
              <a
                href="/assets/resume.pdf"
                download="resume.pdf"
                target="_blank"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="text-accent outline-accent border-accent bg-primary hover:bg-accent-hover hover:text-black rounded-full transition-all flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl ml-2" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
