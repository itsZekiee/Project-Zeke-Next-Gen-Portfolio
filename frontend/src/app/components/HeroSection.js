"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { HiArrowDown } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import ParticleField from "./ParticleField";

const socials = [
  { icon: FaGithub, href: "https://github.com/itsZekiee", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/zekieee2004/", label: "LinkedIn" },
  { icon: FaEnvelope, href: "mailto:habee2004@gmail.com", label: "Email" },
];

const profileDetails = [
  ["Role", "Front-End / Full-Stack Developer"],
  ["Focus", "Secure, scalable, animated web experiences"],
  ["Cybersecurity", "Web Penetration • Blue Hat • A1SBERG"],
  ["Email", "habee2004@gmail.com"],
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 bg-white/70 dark:bg-black" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-transparent to-cyan-500/10 dark:from-blue-500/12 dark:to-cyan-500/14" />

      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.45) 1px, transparent 1px)",
          backgroundSize: "54px 54px",
        }}
      />

      <ParticleField />

      <motion.div
        className="absolute top-24 left-[-5rem] w-80 h-80 rounded-full bg-blue-500/20 dark:bg-blue-500/30 blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, -35, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-16 right-[-6rem] w-[26rem] h-[26rem] rounded-full bg-cyan-500/20 dark:bg-cyan-500/30 blur-3xl"
        animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.2fr_0.8fr] gap-14 items-center">
        <div className="text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 dark:bg-blue-500/10 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
              Z Developers Ph • Open to opportunities
            </span>
          </motion.div>

          {/* Introductory Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-sm md:text-base uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400 mb-4 font-semibold"
          >
            Front-End Developer • Full-Stack Builder • Blue Hat
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.95]"
          >
            <span className="text-slate-900 dark:text-white">Hi, I&apos;m </span>
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent animate-shimmer">
              ZEKE
            </span>
          </motion.h1>

          {/* Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 mb-8 h-10"
          >
            <TypeAnimation
              sequence={[
                "Building modern interfaces.",
                1800,
                "Engineering secure web platforms.",
                1800,
                "Shipping responsive mobile experiences.",
                1800,
                "Competing in university CTFs.",
                1800,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-mono"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            I&apos;m <span className="font-semibold text-blue-600 dark:text-blue-400">Niel Ezequiel Dungao</span>, a 4th year BS Information Technology student with <span className="text-blue-500 font-semibold">6 years of front-end experience</span>. I design immersive web experiences, build full-stack products, and bring a cybersecurity mindset to every project.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-12"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Work
            </motion.a>
            <motion.a
              href="mailto:habee2004@gmail.com"
              className="px-8 py-3.5 border border-blue-500/30 text-blue-700 dark:text-blue-300 font-semibold rounded-full hover:bg-blue-500/5 dark:hover:bg-blue-500/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact ZEKE
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="flex items-center justify-center lg:justify-start gap-5"
          >
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="glass-strong section-ring rounded-[2rem] p-8 lg:p-10 shadow-2xl shadow-blue-500/10">
            <div className="flex items-center justify-between gap-4 mb-8">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-blue-500 font-semibold">Identity</p>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Z Developers Ph</h2>
              </div>
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
            </div>

            <div className="grid gap-4">
              {profileDetails.map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-blue-500/10 bg-white/70 dark:bg-slate-950/60 px-5 py-4 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mb-1">{label}</p>
                  <p className="text-sm md:text-base font-medium text-slate-900 dark:text-white">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-slate-950 text-slate-200 p-5 font-mono text-sm overflow-hidden">
              <p><span className="text-cyan-400">const</span> profile = {'{'}</p>
              <p className="ml-4"><span className="text-slate-500">alias:</span> <span className="text-emerald-400">&quot;ZEKE&quot;</span>,</p>
              <p className="ml-4"><span className="text-slate-500">brand:</span> <span className="text-emerald-400">&quot;Z Developers Ph&quot;</span>,</p>
              <p className="ml-4"><span className="text-slate-500">stack:</span> <span className="text-emerald-400">[&quot;React&quot;, &quot;Next.js&quot;, &quot;Laravel&quot;, &quot;Kotlin&quot;]</span>,</p>
              <p className="ml-4"><span className="text-slate-500">mindset:</span> <span className="text-emerald-400">&quot;Build it. Secure it. Ship it.&quot;</span></p>
              <p>{'}'};</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <HiArrowDown className="text-blue-500/50 text-2xl" />
      </motion.div>
    </section>
  );
}
