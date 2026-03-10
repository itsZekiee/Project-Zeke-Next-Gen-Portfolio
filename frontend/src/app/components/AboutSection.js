"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiCode, HiShieldCheck, HiDeviceMobile, HiAcademicCap } from "react-icons/hi";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: HiCode,
      title: "6+ Years Experience",
      desc: "Front-end development since 2020, building modern, responsive, and performant web applications.",
    },
    {
      icon: HiDeviceMobile,
      title: "Mobile Development",
      desc: "Experience in Android development using Android Studio and Kotlin for native mobile applications.",
    },
    {
      icon: HiShieldCheck,
      title: "Cybersecurity",
      desc: "Blue Hat specialist in Web Penetration Testing. Active CTF competitor at the university level.",
    },
    {
      icon: HiAcademicCap,
      title: "BS Information Technology",
      desc: "4th year student with strong foundation in software engineering, databases, and system design.",
    },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gray-50/50 dark:bg-gray-950/50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-blue-500 tracking-wider uppercase">
            // About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3">
            Who I{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Am
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: About text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative p-8 rounded-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50">
              {/* Decorative corner */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-blue-500/30 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyan-400/30 rounded-br-2xl" />

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-lg">
                I&apos;m <span className="text-blue-500 font-semibold">Niel Ezequiel Dungao</span>, a passionate
                developer who started coding at an early age. With 6 years in front-end development,
                I&apos;ve grown into a versatile engineer comfortable across the entire stack.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                My journey spans from crafting pixel-perfect UIs with React and Next.js, to building
                backend APIs with Laravel and Node.js, to developing native Android applications.
                I thrive on tackling complex problems and turning ideas into elegant solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Beyond development, I&apos;m deeply invested in <span className="text-blue-500 font-semibold">cybersecurity</span>.
                As the Blue Hat of my university&apos;s CTF team, I specialize in web penetration testing —
                because I believe the best developers also understand how to defend what they build.
              </p>

              {/* Code snippet decoration */}
              <div className="mt-6 p-4 rounded-lg bg-gray-900 dark:bg-black/60 font-mono text-sm border border-gray-800">
                <span className="text-blue-400">const</span>{" "}
                <span className="text-cyan-300">niel</span>{" "}
                <span className="text-white">=</span>{" "}
                <span className="text-yellow-300">{"{"}</span>
                <br />
                <span className="text-gray-500 ml-4">role:</span>{" "}
                <span className="text-green-400">&quot;Full-Stack Developer&quot;</span>,
                <br />
                <span className="text-gray-500 ml-4">experience:</span>{" "}
                <span className="text-orange-400">6</span>,
                <br />
                <span className="text-gray-500 ml-4">passion:</span>{" "}
                <span className="text-green-400">&quot;Building & Securing the Web&quot;</span>,
                <br />
                <span className="text-yellow-300">{"}"}</span>;
              </div>
            </div>
          </motion.div>

          {/* Right: Highlight cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="group p-6 rounded-xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-400/10 flex items-center justify-center mb-4 group-hover:from-blue-500/20 group-hover:to-cyan-400/20 transition-all">
                  <item.icon className="text-blue-500 text-xl" />
                </div>
                <h3 className="text-gray-900 dark:text-white font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

