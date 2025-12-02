import "../styles/globals.css";
import React from "react";

export const metadata = {
  title: "Shaik Arman Ali — Portfolio",
  description:
    "Personal portfolio of Shaik Arman Ali — Computer Science student & Software Engineer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen relative overflow-x-hidden">
          {/* background blobs */}
          <div
            className="gradient-blob blob-cyan left-[-120px] top-[-120px] animate-blob"
            style={{ zIndex: 0 }}
          />
          <div
            className="gradient-blob blob-purple right-[-120px] bottom-[-120px] animate-blob"
            style={{ zIndex: 0, animationDelay: "2s" }}
          />
          {children}
        </div>
      </body>
    </html>
  );
}
