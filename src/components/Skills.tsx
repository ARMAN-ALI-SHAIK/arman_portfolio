"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["JavaScript", "Python", "SQL"],
    proficiency: 85,
    icon: "💻",
  },
  {
    title: "Frontend Development",
    skills: ["React.js", "HTML", "CSS", "Tailwind CSS"],
    proficiency: 87,
    icon: "🎨",
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "Python (Flask)"],
    proficiency: 89,
    icon: "⚙️",
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL"],
    proficiency: 91,
    icon: "🗄️",
  },
  {
    title: "Machine Learning",
    skills: ["Scikit-learn"],
    proficiency: 93,
    icon: "🤖",
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Docker",
      "Jenkins (CI/CD)",
      "Git & GitHub",
      "Postman",
      "Arduino IDE",
    ],
    proficiency: 95,
    icon: "🛠️",
  },
];

export default function Skills() {
  return (
    <div className="max-w-6xl mx-auto">
      <SectionHeader
        title="Skills & Technologies"
        subtitle="A comprehensive toolkit of modern technologies and programming languages"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, i) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, y: -8 }}
            transition={{ type: "spring", stiffness: 300, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-xl hover:bg-white/10 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{category.icon}</span>
              <h3 className="font-semibold text-lg">{category.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1 bg-white/5 rounded-full text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-4">
              <div className="flex justify-between text-xs text-slate-400 mb-2">
                <span>Proficiency</span>
                <span>{category.proficiency}%</span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${category.proficiency}%` }}
                  transition={{ duration: 1, delay: i * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
