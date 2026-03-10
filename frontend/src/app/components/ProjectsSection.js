"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiLaravel, SiFirebase, SiTailwindcss, SiPhp } from "react-icons/si";
import { FaShieldAlt } from "react-icons/fa";

const projects = [
  {
    title: "Secure Vote Ph",
    desc: "A secure election platform focused on trustworthy digital voting workflows, modern UI patterns, and security-aware full-stack engineering.",
    gradient: "from-blue-700 via-blue-500 to-cyan-400",
    tags: [
      { name: "Laravel", icon: SiLaravel },
      { name: "PHP", icon: SiPhp },
      { name: "Security", icon: FaShieldAlt },
    ],
    github: "https://github.com/itsZekiee/Secure-Vote-Ph.git",
    live: "https://securevoteph.com",
    featured: true,
  },
  {
    title: "Zeke WebFolio",
    desc: "A personal portfolio crafted to present ZEKE&apos;s development story with polished UI, modern motion, and a clean professional identity.",
    gradient: "from-indigo-600 via-blue-500 to-cyan-500",
    tags: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    github: "https://github.com/itsZekiee/Zeke-WebFolio.git",
    live: null,
    featured: true,
  },
  {
    title: "A1SBERG Official Website",
    desc: "The official website for A1SBERG, designed to represent the organization&apos;s competitive CTF identity and strengthen its online presence.",
    gradient: "from-slate-800 via-blue-800 to-cyan-500",
    tags: [
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Community", icon: FaShieldAlt },
    ],
    github: "https://github.com/ishammy/A1SBERG-Website.git",
    live: null,
    featured: false,
  },
  {
    title: "Beyond The Grind",
    desc: "A concept-driven digital experience showcasing frontend craftsmanship through storytelling, branding, and responsive visual design.",
    gradient: "from-violet-600 via-fuchsia-500 to-pink-500",
    tags: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "Firebase", icon: SiFirebase },
    ],
    github: "https://github.com/itsZekiee/Beyond-The-Grind.git",
    live: null,
    featured: false,
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-white/70 dark:bg-black" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-blue-500 tracking-wider uppercase">
            // Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-3">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Selected work spanning civic tech, personal branding, community platforms, and creative product experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.18 + i * 0.14 }}
              className="group relative rounded-[1.75rem] overflow-hidden glass-strong section-ring hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
            >
              <div className={`h-52 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 20% 80%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                />
                <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-slate-950/20 transition-colors" />
                <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                  {project.featured ? "Featured Build" : "Project Showcase"}
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                  <p className="text-sm text-white/80 max-w-md">{project.desc}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.name}
                      className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300"
                    >
                      <tag.icon size={12} />
                      {tag.name}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-blue-600 transition-colors"
                  >
                    <FaGithub size={14} />
                    View Repository
                  </Link>
                  {project.live ? (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 text-blue-600 dark:text-blue-300 px-4 py-2 text-sm font-medium hover:bg-blue-500/5 dark:hover:bg-blue-500/10 transition-colors"
                    >
                      <FaExternalLinkAlt size={12} />
                      Live Site
                    </Link>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
