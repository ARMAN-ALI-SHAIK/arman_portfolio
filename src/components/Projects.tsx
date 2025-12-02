"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Employee Retention Prediction",
    desc: "A full-stack employee management and attrition monitoring platform using MERN stack, Tailwind CSS, and ShadCN UI, integrated with a Flask ML microservice (Scikit-learn + SHAP).",
    tech: ["React", "Node.js", "MongoDB", "Jenkins", "Docker"],
    github: "https://github.com/Morningstar-08/employee360",
    image: "/projects/employee360.jpg",
  },
  {
    title: "FITNUS – Fitness Tracking System",
    desc: "A fitness tracker with IoT devices (Arduino IDE) and a web dashboard using HTML, CSS, and Python to monitor workout history.",
    tech: ["HTML", "CSS", "Python", "Arduino IDE", "MySQL"],
    github: "https://github.com/ARMAN-ALI-SHAIK/AimingFitNUs",
    image: "/projects/fitnus.png",
  },
  {
    title: "TABY – Collaborative Virtual Pet Web Game",
    desc: "Browser-based real-time co-parenting game using HTML, CSS, JavaScript, Node.js, and MySQL, featuring secure login, co-parenting, pet emotion tracking, and an infinite inventory system.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"],
    github: "https://github.com/potatohoo/Taby-game",
    image: "/projects/taby.jpg",
  },
  {
    title: "R & D Project: Scalable Intrusion Detection Solutions",
    desc: "Developed a hybrid Intrusion Detection System for cloud environments using Machine Learning and Deep Learning (CNN, LSTM, SAE) with ensemble classifiers. Achieved 98.5% accuracy on the CSE-CIC-IDS2018 dataset.",
    tech: ["Python", "Scikit-learn", "TensorFlow", "PyTorch", "Keras"],
    github: "#",
    paper: "/papers/intrusion_detection.docx",
    image: "/projects/randd.png",
  },
];

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto">
      <SectionHeader
        title="Featured Projects"
        subtitle="A showcase of my latest work and technical achievements"
      />

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl overflow-hidden hover:bg-white/5 transition-all group"
          >
            <div className="aspect-video bg-gradient-to-br from-cyan-500/10 to-purple-600/10 relative overflow-hidden">
              {/* Placeholder for project image */}
              <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                <span className="text-4xl">📁</span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-semibold text-xl mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all">
                {p.title}
              </h3>
              <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 bg-white/5 rounded-full text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {p.github && p.github !== "#" && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 rounded-lg glass-card hover:bg-white/10 transition-all"
                  >
                    View Code
                  </a>
                )}
                {p.paper && (
                  <a
                    href={p.paper}
                    className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 hover:shadow-neon-cyan transition-all"
                    download
                  >
                    Download Paper
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <a
          href="https://github.com/ARMAN-ALI-SHAIK"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold hover:shadow-neon-cyan transition-all"
        >
          View All Projects
        </a>
      </motion.div>
    </div>
  );
}
