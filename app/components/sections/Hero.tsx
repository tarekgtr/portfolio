"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowDown, FiMapPin } from "react-icons/fi";
import Socials from "../Socials";
import { profile, featuredStack } from "../../data/portfolio";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* faint grid backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:42px_42px] [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]" />

      <div className="container-px relative grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for freelance & opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 font-display text-4xl font-bold leading-[1.1] text-white sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-4 font-display text-xl text-accent sm:text-2xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-accent-hover"
            >
              View my work
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </Link>
            <Socials className="ml-1" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-8 flex items-center gap-2 text-sm text-white/50"
          >
            <FiMapPin className="text-accent" /> {profile.location}
          </motion.div>
        </div>

        {/* portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 bg-surface">
            <Image
              src="/assets/photo.png"
              alt={profile.name}
              fill
              priority
              quality={100}
              className="object-cover"
            />
          </div>
          <div className="glass absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-2xl px-5 py-3 text-center">
            <p className="font-display text-2xl font-bold text-accent">
              {profile.yearsOfExperience}
            </p>
            <p className="text-xs text-white/60">Years experience</p>
          </div>
        </motion.div>
      </div>

      {/* marquee-ish stack strip */}
      <div className="absolute inset-x-0 bottom-6 hidden justify-center lg:flex">
        <div className="flex items-center gap-6 text-2xl text-white/30">
          {featuredStack.slice(0, 8).map(({ name, icon: Icon }) => (
            <span key={name} title={name} className="transition-colors hover:text-accent">
              <Icon />
            </span>
          ))}
          <Link href="#about" className="ml-2 text-accent" aria-label="Scroll to about">
            <FiArrowDown className="animate-float" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
