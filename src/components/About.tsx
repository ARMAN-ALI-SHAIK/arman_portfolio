"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

export default function About() {
  const highlights = [
    { title: "GPA", value: "7.1/10", color: "from-emerald-400 to-cyan-400" },
    { title: "Year", value: "4th", color: "from-cyan-400 to-blue-400" },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <SectionHeader title="About Me" />

      <div className="mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-4 text-slate-300 leading-relaxed text-base">
            <p>
              Hello! I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold">
                Shaik Arman Ali
              </span>
              , a passionate Computer Science student with a deep love for
              technology and innovation. Currently pursuing my B.Tech degree,
              I'm constantly exploring new technologies and pushing the
              boundaries of what's possible in software development.
            </p>
            <p>
              My journey in computer science began with a curiosity about how
              things work behind the scenes. This curiosity has evolved into a
              passion for creating efficient, scalable, and user-friendly
              solutions. I specialize in full-stack web development, with
              expertise in modern frameworks and emerging technologies.
            </p>
            <p>
              When I'm not coding, you can find me exploring the latest tech
              trends. I believe in continuous learning and staying ahead of the
              technological curve.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, y: -3 }}
                transition={{ type: "spring", stiffness: 400, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card px-8 py-6 rounded-xl hover:bg-white/10 cursor-pointer border border-white/5"
              >
                <div className="text-center">
                  <div
                    className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${h.color} mb-1`}
                  >
                    {h.value}
                  </div>
                  <div className="text-sm text-slate-400 uppercase tracking-wide">
                    {h.title}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
