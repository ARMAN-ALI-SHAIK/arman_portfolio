"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

export default function About() {
  const highlights = [
    { icon: "🎓", title: "GPA", value: "7.1/10" },
    { icon: "📅", title: "Year", value: "4th" },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <SectionHeader title="About Me" />

      <div className="grid lg:grid-cols-1 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-2xl"
        >
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Hello! I'm{" "}
              <span className="text-white font-semibold">Shaik Arman Ali</span>,
              a passionate Computer Science student with a deep love for
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
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-lg"
              >
                <span className="text-2xl">{h.icon}</span>
                <div>
                  <div className="text-xs text-slate-400">{h.title}</div>
                  <div className="text-sm font-semibold">{h.value}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
