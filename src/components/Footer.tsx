import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 py-8 text-center text-sm text-slate-400">
      <div className="max-w-4xl mx-auto">
        <p>© {year} Shaik Arman Ali. All rights reserved.</p>
        <p className="mt-2">
          Built with Next.js, Tailwind CSS, and React Three Fiber
        </p>
      </div>
    </footer>
  );
}
