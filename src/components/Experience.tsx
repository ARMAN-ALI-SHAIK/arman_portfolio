"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "NIT University",
    location: "Rajasthan, India",
    period: "2022 - 2026",
    grade: "7.1/10",
    status: "Current",
    highlights: [
      "Specialized in Software Engineering and Data Structures",
      "Active member of the Computer Science Society",
      "Treasurer of Marksmen NU Club",
    ],
    icon: "🎓",
    color: "from-cyan-500 to-blue-500",
  },
  {
    degree: "Intermediate (Class XII) - TS BIE",
    institution: "Sri Nalanda Jr College",
    location: "Telangana, India",
    period: "2020 - 2022",
    grade: "95.5%",
    highlights: [
      "Mathematics, Physics, Chemistry (MPC)",
      "Top 5% of the graduating class",
      "School Student Council Member",
    ],
    icon: "📚",
    color: "from-purple-500 to-pink-500",
  },
  {
    degree: "Secondary School Certificate (Class X) - TS SSC",
    institution: "Regina Carmeli Convent High School",
    location: "Telangana, India",
    period: "2019 - 2020",
    grade: "10.0",
    highlights: [
      "School Topper in Mathematics",
      "Participated in State-level Science Olympiad",
      "Won Elocution Competitions",
      "Asst. House Captain",
    ],
    icon: "🏫",
    color: "from-emerald-500 to-teal-500",
  },
];

export default function Experience() {
  return (
    <div className="max-w-6xl mx-auto">
      <SectionHeader
        title="Education"
        subtitle="My academic journey and achievements in computer science and technology"
      />

      <div className="relative mt-12">
        {/* Vertical timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-emerald-500 transform md:-translate-x-1/2" />

        {/* Timeline items */}
        <div className="space-y-12">
          {educationData.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              } items-center gap-8`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 ring-4 ring-slate-900 z-10" />

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2" />

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full md:w-1/2 ml-8 md:ml-0"
              >
                <div className="glass-card p-6 rounded-2xl hover:bg-white/10 transition-all group relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  {/* Status badge */}
                  {edu.status && (
                    <span className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
                      {edu.status}
                    </span>
                  )}

                  {/* Icon and degree */}
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl">{edu.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all">
                        {edu.degree}
                      </h3>
                      <p className="text-sm text-emerald-400 font-medium mt-1">
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  {/* Location and period */}
                  <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <span className="text-purple-400">📍</span>
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-purple-400">📅</span>
                      {edu.period}
                    </span>
                  </div>

                  {/* Grade */}
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-lg text-sm font-semibold">
                      <span>🏆</span>
                      {edu.grade}
                    </span>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-xs font-semibold text-cyan-400 mb-2 uppercase tracking-wide">
                      Key Highlights:
                    </h4>
                    <ul className="space-y-1.5">
                      {edu.highlights.map((highlight, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.2 + j * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2 text-sm text-slate-300"
                        >
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Academic Focus */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 glass-card p-8 rounded-2xl text-center"
      >
        <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-3">
          Academic Focus
        </h3>
        <p className="text-slate-300 max-w-3xl mx-auto">
          Pursuing advanced coursework in Machine Learning, Cloud Computing, and
          Full-Stack Development
        </p>
      </motion.div>
    </div>
  );
}
