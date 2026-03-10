import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Z Developers Ph | ZEKE Portfolio",
  description:
    "Portfolio of Niel Ezequiel Dungao (ZEKE) — 4th year BS Information Technology student, front-end developer, full-stack builder, and cybersecurity competitor.",
  keywords: [
    "Z Developers Ph",
    "ZEKE",
    "Niel Ezequiel Dungao",
    "Front-End Developer",
    "Full-Stack Developer",
    "Cybersecurity",
    "Next.js Portfolio",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
