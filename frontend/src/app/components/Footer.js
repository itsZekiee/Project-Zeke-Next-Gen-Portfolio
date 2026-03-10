"use client";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

const footerLinks = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Certifications",
  "Contact",
];
const socials = [
  { icon: FaGithub, href: "https://github.com/itsZekiee", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/zekieee2004/", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-blue-500/10 bg-white/60 dark:bg-black/60 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 text-white font-bold">
              Z
            </span>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Z Developers Ph
            </span>
          </a>

          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => {
              const target =
                link === "Certifications"
                  ? "#certifications"
                  : `#${link.toLowerCase()}`;
              return (
                <a
                  key={link}
                  href={target}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(target)?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  {link}
                </a>
              );
            })}
          </div>

          <div className="flex gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-500/10 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-500 flex items-center justify-center gap-1 flex-wrap">
            © {new Date().getFullYear()} Niel Ezequiel Dungao. Crafted with
            <FaHeart className="text-red-500 text-xs" />
            by ZEKE using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
