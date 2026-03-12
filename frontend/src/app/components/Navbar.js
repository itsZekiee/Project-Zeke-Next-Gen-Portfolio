"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Badges", href: "#certifications" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setMobileOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "glass-strong shadow-2xl shadow-blue-500/10 border-b border-blue-500/10"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
                <motion.a
                    href="#home"
                    onClick={(e) => handleNavClick(e, "#home")}
                    className="flex items-center gap-3"
                    whileHover={{ scale: 1.03 }}
                >
                    <div className="relative h-10 w-10 flex-shrink-0 rounded-full overflow-hidden ring-2 ring-blue-500/40 shadow-lg shadow-blue-500/20">
                        <Image
                            src="/assets/Z-Developers Logo (Circle).png"
                            alt="Z Developer PH Logo"
                            width={40}
                            height={40}
                            className="object-cover"
                            priority
                        />
                    </div>
                    <span className="hidden sm:block text-base md:text-lg font-bold text-white">
            Z Developer PH
          </span>
                </motion.a>

                <div className="hidden md:flex items-center gap-7">
                    {navLinks.map((link) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors relative group"
                            whileHover={{ y: -2 }}
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
                        </motion.a>
                    ))}
                </div>

                <div className="flex md:hidden items-center">
                    <button
                        onClick={() => setMobileOpen((open) => !open)}
                        aria-label="Toggle navigation"
                        className="p-2 text-slate-300"
                    >
                        {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass-strong border-t border-blue-500/10"
                    >
                        <div className="flex flex-col px-6 py-4 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="text-slate-300 hover:text-blue-400 transition-colors font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
