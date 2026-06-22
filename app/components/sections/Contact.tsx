"use client";

import { useState, type FormEvent } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import Socials from "../Socials";
import { profile } from "../../data/portfolio";

const contactInfo = [
  { icon: <FiMail />, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: <FiPhone />, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: <FiMapPin />, label: "Location", value: profile.location },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section">
      <div className="container-px">
        <SectionHeading
          eyebrow="06 — Contact"
          title="Let's work together"
          description="Have a project in mind or just want to say hello? Send me a message and I'll get back to you."
          align="center"
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-[1fr_1.2fr]">
          {/* info */}
          <Reveal className="flex flex-col gap-4">
            {contactInfo.map((item) => {
              const content = (
                <div className="card card-hover flex items-center gap-4 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-lg text-accent">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-white/50">
                      {item.label}
                    </p>
                    <p className="truncate text-white">{item.value}</p>
                  </div>
                </div>
              );
              return item.href ? (
                <a key={item.label} href={item.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}

            <div className="card flex items-center justify-between p-5">
              <span className="text-sm text-white/60">Find me online</span>
              <Socials />
            </div>
          </Reveal>

          {/* form */}
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="card flex h-full flex-col gap-4 p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm text-white/60">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-accent"
                    placeholder="Your name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm text-white/60">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-accent"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <label htmlFor="message" className="text-sm text-white/60">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="flex-1 resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-accent"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-accent-hover"
              >
                Send message <FiSend />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
