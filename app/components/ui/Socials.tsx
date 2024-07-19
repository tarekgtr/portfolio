import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/tarekgtr",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/tarek-goufa/",
  },
];

const Socials = () => {
  return (
    <div className="flex gap-6 flex items-center justify-center">
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            target="_blank"
            className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
