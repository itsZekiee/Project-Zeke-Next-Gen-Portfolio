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
      desc: "Front-end development focused on responsive interfaces, polished UI systems, and performance-first builds.",
    },
    {
      icon: HiDeviceMobile,
      title: "Mobile Development",
      desc: "Hands-on Android development experience using Android Studio, Kotlin, Java, and practical product thinking.",
    },
    {
      icon: HiShieldCheck,
      title: "Cybersecurity",
      desc: "Blue Hat specializing in Web Penetration and competitive CTF problem solving with A1SBERG.",
    },
    {
      icon: HiAcademicCap,
      title: "BS Information Technology",
      desc: "4th year student building a strong foundation in software engineering, databases, and secure systems.",
    },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-slate-50/50 dark:bg-slate-950/50" />
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
            // About ZEKE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-3">
            Building With{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Design + Defense
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
            <div className="relative glass-strong section-ring p-8 rounded-[1.75rem]">
              {/* Decorative corner */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-blue-500/30 rounded-tl-[1.75rem]" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyan-400/30 rounded-br-[1.75rem]" />

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-lg">
                I&apos;m{" "}
                <span className="text-blue-500 font-semibold">
                  Niel Ezequiel Dungao
                </span>
                , also known as{" "}
                <span className="text-cyan-500 font-semibold">ZEKE</span>. I build
                modern digital experiences under the brand{" "}
                <span className="font-semibold text-slate-900 dark:text-white">
                  Z Developers Ph
                </span>
                , combining clean interface work with practical engineering depth.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                My work spans front-end development with React, Next.js, and
                Angular; backend development with PHP, Laravel, and databases; and
                mobile app development using Android Studio, Kotlin, and Java.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Beyond software development, I bring a cybersecurity mindset into
                the build process. As a Blue Hat competitor in{" "}
                <span className="text-blue-500 font-semibold">A1SBERG</span>, I
                focus on Web Penetration and competitive CTF problem solving—because
                strong systems should look great and stay secure.
              </p>

              {/* Code snippet decoration */}
              <div className="mt-6 p-4 rounded-2xl bg-slate-950 text-slate-200 font-mono text-sm border border-slate-800">
                <span className="text-blue-400">const</span>{" "}
                <span className="text-cyan-300">zeke</span>{" "}
                <span className="text-white">=</span>{" "}
                <span className="text-yellow-300">{"{"}</span>
                <br />
                <span className="text-slate-500 ml-4">brand:</span>{" "}
                <span className="text-green-400">&quot;Z Developers Ph&quot;</span>
                ,
                <br />
                <span className="text-slate-500 ml-4">role:</span>{" "}
                <span className="text-green-400">&quot;Front-End / Full-Stack Developer&quot;</span>
                ,
                <br />
                <span className="text-slate-500 ml-4">experience:</span>{" "}
                <span className="text-orange-400">6</span>,
                <br />
                <span className="text-slate-500 ml-4">mindset:</span>{" "}
                <span className="text-green-400">&quot;Build • Secure • Improve&quot;</span>
                ,
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
                className="group p-6 rounded-2xl glass-strong section-ring hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-400/10 flex items-center justify-center mb-4 group-hover:from-blue-500/20 group-hover:to-cyan-400/20 transition-all">
                  <item.icon className="text-blue-500 text-xl" />
                </div>
                <h3 className="text-slate-900 dark:text-white font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
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
