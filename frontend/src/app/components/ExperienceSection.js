"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { HiBriefcase, HiAcademicCap } from "react-icons/hi";
import { FaShieldAlt, FaGithub, FaGlobe } from "react-icons/fa";

const timeline = [
  {
    type: "work",
    title: "Front-End Developer",
    org: "Freelance / Personal Projects",
    period: "2020 — Present",
    desc: "Building responsive, modern web applications using React, Next.js, Angular, and Tailwind CSS. Focused on polished UX, animation systems, accessibility, and performance optimization.",
    tags: ["React", "Next.js", "Angular", "Tailwind CSS"],
  },
  {
    type: "work",
    title: "Full-Stack Developer",
    org: "Secure Vote Ph",
    period: "2023 — Present",
    desc: "Designed and developed Secure Vote Ph, a secure election platform combining a modern front end with backend systems, database workflows, and secure application flows.",
    tags: ["Laravel", "PHP", "MySQL", "PostgreSQL", "Security"],
    links: [
      { label: "Domain", href: "https://securevoteph.com", icon: FaGlobe },
      { label: "GitHub", href: "https://github.com/itsZekiee/Secure-Vote-Ph.git", icon: FaGithub },
    ],
  },
  {
    type: "work",
    title: "Mobile App Developer",
    org: "Academic & Personal Projects",
    period: "2020 — 2022",
    desc: "Developed Android applications using Android Studio with Kotlin and Java, while also building software solutions with C#, .NET, and Java for academic and personal use cases.",
    tags: ["Kotlin", "Android Studio", "C#", ".NET", "Java"],
  },
  {
    type: "ctf",
    title: "Blue Hat — CTF Competitor",
    org: "A1SBERG • PUPSMB",
    period: "Active",
    desc: "Member of A1SBERG, a PUPSMB organization built to compete in CTF competitions. Serving as Blue Hat with specialization in Web Penetration, threat analysis, and practical web exploitation techniques.",
    tags: ["Web Penetration", "OWASP", "Burp Suite", "CTF", "Blue Hat"],
  },
  {
    type: "education",
    title: "BS Information Technology",
    org: "4th Year Student",
    period: "2022 — 2026",
    desc: "Pursuing a Bachelor of Science in Information Technology with a strong focus on software development, database systems, web engineering, and cybersecurity fundamentals.",
    tags: ["Software Engineering", "Web Development", "Cybersecurity"],
  },
];

const iconMap = {
  work: HiBriefcase,
  education: HiAcademicCap,
  ctf: FaShieldAlt,
};

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-slate-50/60 dark:bg-slate-950/40" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-blue-500 tracking-wider uppercase">
            // Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-3">
            Experience &{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A blend of product development, secure software engineering, mobile work, and competitive cybersecurity experience.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-cyan-400/50 to-transparent" />

          {timeline.map((item, i) => {
            const Icon = iconMap[item.type];
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
                className={`relative flex items-start mb-12 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 ring-4 ring-white dark:ring-slate-950 z-10" />

                {/* Content card */}
                <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="glass-strong section-ring p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-400/10">
                        <Icon className="text-blue-500" size={18} />
                      </div>
                      <span className="text-xs font-mono text-blue-500 bg-blue-500/5 dark:bg-blue-500/10 px-3 py-1 rounded-full">
                        {item.period}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-blue-500 font-medium mb-3">{item.org}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {item.desc}
                    </p>

                    {item.links ? (
                      <div className="flex flex-wrap gap-3 mb-4">
                        {item.links.map(({ label, href, icon: LinkIcon }) => (
                          <Link
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border border-blue-500/20 text-blue-600 dark:text-blue-300 hover:bg-blue-500/5 dark:hover:bg-blue-500/10 transition-colors"
                          >
                            <LinkIcon size={12} />
                            {label}
                          </Link>
                        ))}
                      </div>
                    ) : null}

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
