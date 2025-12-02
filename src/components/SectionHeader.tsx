"use client";
import React from "react";

export default function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold tracking-tight flex items-center gap-3">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">
          {title}
        </span>
      </h2>
      {subtitle && <p className="mt-2 text-slate-300 max-w-2xl">{subtitle}</p>}
    </div>
  );
}
