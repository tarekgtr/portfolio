import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { socials } from "../data/portfolio";

const iconMap: Record<string, JSX.Element> = {
  GitHub: <FaGithub />,
  LinkedIn: <FaLinkedin />,
};

const Socials = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socials.map((item) => (
        <Link
          key={item.name}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.name}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-lg text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent"
        >
          {iconMap[item.name]}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
