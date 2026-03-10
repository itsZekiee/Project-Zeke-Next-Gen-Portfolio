"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiLaravel, SiFirebase, SiKotlin, SiAngular, SiTailwindcss } from "react-icons/si";
import { FaShieldAlt } from "react-icons/fa";

const projects = [
  {
    title: "Next-Gen Portfolio",
    desc: "A modern, animated portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Features dark/light theme, particle animations, and smooth scroll navigation.",
    image: null,
    gradient: "from-blue-600 to-cyan-500",
    tags: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "E-Commerce Platform",
    desc: "Full-stack e-commerce application with product management, cart system, payment integration, and admin dashboard. Built with Laravel and React.",
    image: null,
    gradient: "from-purple-600 to-pink-500",
    tags: [
      { name: "Laravel", icon: SiLaravel },
      { name: "React", icon: SiReact },
      { name: "Firebase", icon: SiFirebase },
    ],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Android Task Manager",
    desc: "A native Android productivity app with task scheduling, notifications, and cloud sync. Built with Kotlin and Firebase for real-time data.",
    image: null,
    gradient: "from-green-500 to-emerald-600",
    tags: [
      { name: "Kotlin", icon: SiKotlin },
      { name: "Firebase", icon: SiFirebase },
    ],
    github: "#",
    live: null,
    featured: false,
  },
  {
    title: "CTF Challenge Platform",
    desc: "A web-based Capture The Flag platform for practicing cybersecurity challenges. Features challenge creation, score tracking, and leaderboards.",
    image: null,
    gradient: "from-red-500 to-orange-500",
    tags: [
      { name: "Angular", icon: SiAngular },
      { name: "Security", icon: FaShieldAlt },
    ],
    github: "#",
    live: null,
    featured: false,
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-white dark:bg-black" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-blue-500 tracking-wider uppercase">
            // Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
            A selection of projects showcasing my skills in web development, mobile apps, and cybersecurity.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className={`group relative rounded-2xl overflow-hidden bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 ${
                project.featured ? "md:row-span-1" : ""
              }`}
            >
              {/* Gradient header */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `radial-gradient(circle at 20% 80%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)`,
                    backgroundSize: "30px 30px",
                  }}
                />
                {/* Floating code decoration */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20 font-mono text-white text-sm">
                  <pre className="transform -rotate-6 scale-75">{`function build() {\n  return <Magic />;\n}`}</pre>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaGithub size={20} />
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaExternalLinkAlt size={18} />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.name}
                      className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800/60 text-gray-600 dark:text-gray-400"
                    >
                      <tag.icon size={12} />
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

