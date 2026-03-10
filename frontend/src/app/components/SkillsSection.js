"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  SiHtml5, SiCss, SiJavascript, SiPhp, SiLaravel, SiNextdotjs,
  SiReact, SiAngular, SiKotlin, SiMysql, SiPostgresql,
  SiFirebase, SiSupabase, SiDotnet, SiAndroidstudio, SiTailwindcss,
  SiGit
} from "react-icons/si";
import { FaJava, FaShieldAlt } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";

const categories = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Front-End" },
  { id: "backend", label: "Back-End" },
  { id: "mobile", label: "Mobile" },
  { id: "database", label: "Database" },
  { id: "tools", label: "Tools & Others" },
];

const skills = [
  { name: "HTML5", icon: SiHtml5, color: "#E34F26", cat: "frontend", level: 95 },
  { name: "CSS3", icon: SiCss, color: "#1572B6", cat: "frontend", level: 95 },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", cat: "frontend", level: 92 },
  { name: "React JS", icon: SiReact, color: "#61DAFB", cat: "frontend", level: 90 },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", cat: "frontend", level: 88 },
  { name: "Angular", icon: SiAngular, color: "#DD0031", cat: "frontend", level: 80 },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", cat: "frontend", level: 90 },
  { name: "PHP", icon: SiPhp, color: "#777BB4", cat: "backend", level: 85 },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20", cat: "backend", level: 83 },
  { name: "Java", icon: FaJava, color: "#007396", cat: "backend", level: 80 },
  { name: "C#", icon: TbBrandCSharp, color: "#239120", cat: "backend", level: 78 },
  { name: ".NET", icon: SiDotnet, color: "#512BD4", cat: "backend", level: 75 },
  { name: "C", icon: TbBrandCSharp, color: "#A8B9CC", cat: "backend", level: 70 },
  { name: "Kotlin", icon: SiKotlin, color: "#7F52FF", cat: "mobile", level: 78 },
  { name: "Android Studio", icon: SiAndroidstudio, color: "#3DDC84", cat: "mobile", level: 80 },
  { name: "MySQL", icon: SiMysql, color: "#4479A1", cat: "database", level: 88 },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", cat: "database", level: 82 },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28", cat: "database", level: 85 },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E", cat: "database", level: 80 },
  { name: "Git", icon: SiGit, color: "#F05032", cat: "tools", level: 90 },
  { name: "Cybersecurity", icon: FaShieldAlt, color: "#3B82F6", cat: "tools", level: 85 },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? skills
    : skills.filter((s) => s.cat === activeCategory);

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-white dark:bg-black" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-500/5 to-transparent dark:from-blue-500/10" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-mono text-blue-500 tracking-wider uppercase">
            // Tech Arsenal
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3">
            Skills &{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20"
                  : "bg-gray-100 dark:bg-gray-800/60 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700/60"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative flex flex-col items-center gap-3 p-5 rounded-xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 cursor-default"
            >
              {/* Glow effect on hover */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"
                style={{ background: `${skill.color}15` }}
              />

              <skill.icon
                size={36}
                style={{ color: skill.color }}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                {skill.name}
              </span>

              {/* Skill level bar */}
              <div className="w-full h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(to right, ${skill.color}, ${skill.color}88)` }}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.5 + i * 0.05 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

