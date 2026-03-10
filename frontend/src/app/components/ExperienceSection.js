"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiBriefcase, HiAcademicCap } from "react-icons/hi";
import { FaShieldAlt } from "react-icons/fa";

const timeline = [
  {
    type: "work",
    title: "Front-End Developer",
    org: "Freelance / Personal Projects",
    period: "2020 — Present",
    desc: "Building responsive, modern web applications using React, Next.js, Angular, and Tailwind CSS. Delivering pixel-perfect UIs with smooth animations and optimized performance.",
    tags: ["React", "Next.js", "Angular", "Tailwind CSS"],
  },
  {
    type: "work",
    title: "Full-Stack Developer",
    org: "Various Projects",
    period: "2022 — Present",
    desc: "Extended into backend development with Laravel (PHP), Node.js, and database management. Building complete web solutions from frontend to deployment.",
    tags: ["Laravel", "PHP", "MySQL", "PostgreSQL", "Firebase"],
  },
  {
    type: "work",
    title: "Mobile App Developer",
    org: "Academic & Personal Projects",
    period: "2023 — Present",
    desc: "Developing native Android applications using Android Studio with Kotlin and Java. Building software solutions with C#, .NET, and Java.",
    tags: ["Kotlin", "Android Studio", "C#", ".NET", "Java"],
  },
  {
    type: "ctf",
    title: "Blue Hat — CTF Competitor",
    org: "University CTF Team",
    period: "Active",
    desc: "Specializing in Web Penetration Testing as the team's Blue Hat. Competing in university-level Capture The Flag competitions, identifying and exploiting web vulnerabilities.",
    tags: ["Web Pentesting", "OWASP", "Burp Suite", "CTF"],
  },
  {
    type: "education",
    title: "BS Information Technology",
    org: "University (4th Year)",
    period: "2022 — 2026",
    desc: "Pursuing a Bachelor's degree in Information Technology with focus on software engineering, web development, and cybersecurity.",
    tags: ["Software Engineering", "Web Dev", "Cybersecurity"],
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
      <div className="absolute inset-0 bg-gray-50/50 dark:bg-gray-950/50" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6">
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3">
            Experience &{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-cyan-400/50 to-transparent" />

          {timeline.map((item, i) => {
            const Icon = iconMap[item.type];
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className={`relative flex items-start mb-12 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 ring-4 ring-white dark:ring-gray-950 z-10" />

                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="p-6 rounded-xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 hover:border-blue-500/20 dark:hover:border-blue-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-400/10">
                        <Icon className="text-blue-500" size={18} />
                      </div>
                      <span className="text-xs font-mono text-blue-500 bg-blue-500/5 dark:bg-blue-500/10 px-3 py-1 rounded-full">
                        {item.period}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-blue-500 font-medium mb-3">{item.org}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                      {item.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800/60 text-gray-600 dark:text-gray-400"
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

