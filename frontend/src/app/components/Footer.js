"use client";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-200/50 dark:border-gray-800/50 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            {"<NED />"}
          </a>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-6">
            {["Home", "About", "Skills", "Experience", "Projects", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-4">
            {[
              { icon: FaGithub, href: "#" },
              { icon: FaLinkedin, href: "#" },
              { icon: FaTwitter, href: "#" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200/50 dark:border-gray-800/50 text-center">
          <p className="text-sm text-gray-400 dark:text-gray-500 flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Niel Ezequiel Dungao. Built with
            <FaHeart className="text-red-500 text-xs" />
            using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

