"use client";
import React from "react";
import { motion } from "framer-motion";

/*
  Simplified animated background - lighter on performance
  Uses CSS gradients with subtle motion animations
*/
export default function AnimatedHeroBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030318] via-[#070824] to-[#0b0720]" />

      {/* Animated gradient overlays - much simpler */}
      <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [-100, -80, -100],
          y: [-100, -120, -100],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [100, 120, 100],
          y: [100, 80, 100],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Minimal floating particles - reduced from 36 to 12 */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 3,
              height: 3,
              left: `${(i * 47) % 100}%`,
              top: `${(i * 61) % 100}%`,
              background: i % 2 ? "#06b6d4" : "#7c3aed",
            }}
            animate={{
              y: [0, i % 2 ? -15 : 15, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8 + (i % 4),
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
