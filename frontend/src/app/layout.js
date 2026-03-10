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
  title: "Niel Ezequiel Dungao | Developer Portfolio",
  description:
    "Full-Stack Developer, Mobile App Developer, and Cybersecurity Enthusiast. 4th Year BS Information Technology student with 6 years of front-end development experience.",
  keywords: [
    "Niel Ezequiel Dungao",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Cybersecurity",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

