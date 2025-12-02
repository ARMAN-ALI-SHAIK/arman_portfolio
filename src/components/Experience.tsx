"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

const items = [
  {
    role: "Software Engineering Intern",
    company: "Example Co.",
    dates: "Jun 2024 - Aug 2024",
    bullets: [
      "Worked on full-stack features",
      "Improved API performance",
      "Built UI components",
    ],
  },
  {
    role: "Undergraduate Student",
    company: "University",
    dates: "2021 - Present",
    bullets: [
      "Pursuing B.Tech in Computer Science",
      "Coursework: Data Structures, AI, Databases",
    ],
  },
];

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto">
      <SectionHeader title="Experience & Education" />
      <div className="relative">
        <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500 opacity-30" />

        <div className="space-y-6 pl-8">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass-card p-4 rounded-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">{it.role}</h4>
                  <p className="text-sm text-slate-300">{it.company}</p>
                </div>
                <span className="text-sm text-slate-400">{it.dates}</span>
              </div>
              <ul className="mt-3 list-disc list-inside text-slate-300">
                {it.bullets.map((b, j) => (
                  <li key={j} className="text-sm">
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
