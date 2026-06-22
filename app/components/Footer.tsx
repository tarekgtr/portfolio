import Link from "next/link";
import Socials from "./Socials";
import { navLinks, profile } from "../data/portfolio";

const Footer = () => {
  return (
    <footer className="border-t border-white/10">
      <div className="container-px flex flex-col items-center gap-8 py-12 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <Link href="#top" className="font-display text-lg font-bold text-white">
            Tarek<span className="text-accent">.gt</span>
          </Link>
          <p className="mt-2 text-sm text-white/50">
            {profile.role} · {profile.location}
          </p>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-white/60 transition-colors hover:text-accent"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <Socials />
      </div>
      <div className="border-t border-white/5 py-5">
        <p className="container-px text-center text-xs text-white/40">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &
          Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
