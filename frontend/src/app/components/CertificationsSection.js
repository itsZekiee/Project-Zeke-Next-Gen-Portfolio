"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { FaAward, FaExternalLinkAlt, FaShieldAlt, FaMedal } from "react-icons/fa";

const badgeLinks = [
  {
    title: "Introduction to Packet Tracer",
    issuer: "Cisco",
    description:
      "Cisco verifies the earner of this badge has knowledge and skills to create digital models of IP Networks and IoT Systems using Cisco Packet Tracer.",
    href: "https://www.credly.com/badges/2225ce9a-f1d2-4cb0-bf0d-a388ad777168/public_url",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    description:
      "Cisco verifies the earner of this badge successfully completed the Introduction to Cybersecurity course, covering cyber threats, vulnerabilities, detection, defense, and cybersecurity career pathways.",
    href: "https://www.credly.com/badges/f4482bf3-a97e-4a54-8450-17100a9b4b62/public_url",
  },
];

const achievements = [
  "3rd Runner Up – HackForGov 2024 (Region 3)",
  "5th Runner Up – Trend University CTF 2024 (Preliminary Round)",
  "15th Runner Up – Trend University CTF 2024 (Finals)",
  "7th Runner Up – HackForGov Cyber Challenge 2023 (Regional Qualifying Round)",
  "Top 100 – University CTF 2024: Binary Badlands (Ranked 100th out of 1,128 participants)",
];

export default function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-slate-50/50 dark:bg-slate-950/50" />
      <div className="absolute top-10 left-0 w-80 h-80 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-blue-500 tracking-wider uppercase">
            // Certifications & Badges
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-3">
            Certifications &{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Badges
            </span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Industry badges and CTF placements that reflect both practical security knowledge and competitive performance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6">
          <div className="grid gap-6">
            {badgeLinks.map((badge, index) => (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + index * 0.12 }}
                className="glass-strong section-ring rounded-[1.5rem] p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 text-white shadow-lg shadow-blue-500/20">
                    <FaAward size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[0.2em] text-blue-500 font-semibold mb-2">Issued by {badge.issuer}</p>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{badge.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{badge.description}</p>
                    <Link
                      href={badge.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-300 hover:bg-blue-500/5 dark:hover:bg-blue-500/10 transition-colors"
                    >
                      View Badge
                      <FaExternalLinkAlt size={12} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="glass-strong section-ring rounded-[1.75rem] p-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 to-blue-600 text-white">
                <FaShieldAlt size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-blue-500 font-semibold">Competitive Highlights</p>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">CTF Achievements</h3>
              </div>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.35 + index * 0.08 }}
                  className="flex items-start gap-3 rounded-2xl border border-blue-500/10 bg-white/60 dark:bg-slate-950/50 px-4 py-4"
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                    <FaMedal size={14} />
                  </span>
                  <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

