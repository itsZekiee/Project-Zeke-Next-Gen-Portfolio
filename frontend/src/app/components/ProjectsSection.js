"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaShieldAlt } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiLaravel, SiFirebase, SiTailwindcss, SiPhp } from "react-icons/si";

const projects = [
    {
        title: "Secure Vote Ph",
        image: "/assets/project-card(4).jpg",
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
        image: "/assets/Zeke WebFolio.png",
        desc: "A personal portfolio crafted to present ZEKE\u2019s development story with polished UI, modern motion, and a clean professional identity.",
        gradient: "from-indigo-600 via-blue-500 to-cyan-500",
        tags: [
            { name: "Next.js", icon: SiNextdotjs },
            { name: "React", icon: SiReact },
            { name: "Tailwind CSS", icon: SiTailwindcss },
        ],
        github: "https://github.com/itsZekiee/Zeke-WebFolio.git",
        live: "https://zeke-web-folio.vercel.app",
        featured: true,
    },
    {
        title: "A1SBERG Official Website",
        image: "/assets/A1S-Image.png",
        desc: "The official website for A1SBERG, the competitive CTF organization under PUPSMB, designed to strengthen its online presence and identity.",
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
        image: "/assets/Beyond The Grind Wallpaper.png",
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
            <div className="absolute inset-0 bg-black" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

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
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
                        Featured{" "}
                        <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
                    </h2>
                    <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
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
                            className="group relative rounded-[1.75rem] overflow-hidden glass-strong section-ring hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-500"
                        >
                            <div className={`h-56 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-55 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700 ease-in-out"
                                />
                                <div
                                    className="absolute inset-0 z-10 opacity-20"
                                    style={{
                                        backgroundImage:
                                            "radial-gradient(circle at 20% 80%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
                                        backgroundSize: "28px 28px",
                                    }}
                                />
                                <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                                <div className="absolute top-5 left-5 z-20 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md border border-white/10">
                                    {project.featured ? "\u2726 Featured Build" : "\u25C8 Project Showcase"}
                                </div>
                                <div className="absolute inset-x-0 bottom-0 z-20 p-6 text-white">
                                    <h3 className="text-2xl font-bold mb-1 drop-shadow-lg">{project.title}</h3>
                                    <p className="text-sm text-white/75 max-w-md leading-relaxed line-clamp-2">{project.desc}</p>
                                </div>
                            </div>

                            <div className="p-6 bg-slate-950/80">
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag.name}
                                            className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700/50"
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
                                        className="inline-flex items-center gap-2 rounded-full bg-slate-800 text-white px-4 py-2 text-sm font-medium hover:bg-blue-600 transition-colors border border-slate-700/50"
                                    >
                                        <FaGithub size={14} />
                                        View Repository
                                    </Link>
                                    {project.live && (
                                        <Link
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 text-blue-300 px-4 py-2 text-sm font-medium hover:bg-blue-500/10 transition-colors"
                                        >
                                            <FaExternalLinkAlt size={12} />
                                            Live Site
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
