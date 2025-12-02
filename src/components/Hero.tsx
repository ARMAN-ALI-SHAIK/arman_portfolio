"use client";
import React from "react";
import { motion } from "framer-motion";
import ThreeAvatar from "./ThreeAvatar";

const stats = [
  { label: "Projects Completed", value: "10+" },
  { label: "Year", value: "4th" },
  { label: "Technologies", value: "10+" },
];

export default function Hero() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="max-w-xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Shaik Arman Ali
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed">
              Computer Science Student & Full-Stack Developer
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Building innovative solutions with modern technologies
              </span>
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="/Shaik_Arman_Ali_CV.pdf"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-sm font-semibold hover:shadow-neon-cyan transition-all"
                download
              >
                Download CV
              </a>
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 rounded-lg glass-card text-sm font-semibold hover:bg-white/10 transition-all"
              >
                View Projects
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="glass-card p-4 rounded-lg text-center"
                >
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="w-full max-w-2xl mx-auto relative h-[520px] md:h-[640px]">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-full blur-3xl" />
            <div className="relative w-full h-full glass-card rounded-3xl p-6 neon-border">
              <ThreeAvatar />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
