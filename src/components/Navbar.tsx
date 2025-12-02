"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full z-30 top-4">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="glass-card flex items-center justify-between py-3 px-4 rounded-xl backdrop-blur-md shadow-sm">
          <div className="flex items-center gap-4">
            <a href="#home" className="text-xl font-semibold tracking-tight">
              Arman
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm hover:text-white/90 transition"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/Shaik_Arman_Ali_CV.pdf"
              className="ml-2 inline-flex items-center px-3 py-1.5 rounded-md bg-gradient-to-r from-cyan-500 to-purple-600 text-sm font-medium shadow-neon-cyan"
              download
            >
              Download CV
            </a>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setOpen((v) => !v)}
              className="p-2 rounded-md glass-card"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile slide-in */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          className={`mt-3 md:hidden ${open ? "" : "pointer-events-none"}`}
        >
          <div className="glass-card rounded-xl p-4 space-y-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-base"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/Shaik_Arman_Ali_CV.pdf"
              className="block mt-2 text-sm font-medium bg-gradient-to-r from-cyan-500 to-purple-600 px-3 py-1 rounded-md"
              download
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
