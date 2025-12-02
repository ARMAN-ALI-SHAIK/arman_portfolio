"use client";
import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
      setStatus("idle");
    }, 3000);
  }

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "armanshaik1947@gmail.com",
      href: "mailto:armanshaik1947@gmail.com",
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+91 8555051803",
      href: "tel:+918555051803",
    },
    { icon: "📍", label: "Location", value: "Hyderabad, India" },
  ];

  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/ARMAN-ALI-SHAIK",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/arman-ali-72b431253/",
      icon: "linkedin",
    },
    { name: "Twitter", url: "https://x.com/home", icon: "twitter" },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <SectionHeader
        title="Get In Touch"
        subtitle="Ready to collaborate? Let's discuss your next project or just say hello!"
      />

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            <p className="text-slate-300 mb-8">
              I'm always open to discussing new opportunities, interesting
              projects, or just having a chat about technology and innovation.
              Feel free to reach out!
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <span className="text-3xl">{info.icon}</span>
                  <div>
                    <div className="text-xs text-slate-400">{info.label}</div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm hover:text-cyan-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-sm">{info.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <h4 className="text-sm font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:bg-white/10 transition-all"
                    aria-label={social.name}
                  >
                    <span className="text-lg">
                      {social.icon === "github"
                        ? "💻"
                        : social.icon === "linkedin"
                        ? "💼"
                        : "🐦"}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <form
            onSubmit={handleSubmit}
            className="glass-card p-8 rounded-2xl space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>

            <div>
              <label className="text-sm font-medium block mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-500 focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="text-sm font-medium block mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-500 focus:outline-none transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="text-sm font-medium block mb-2">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold hover:shadow-neon-cyan transition-all"
              >
                Send Message
              </button>

              {status === "success" && (
                <p className="text-sm text-emerald-400 mt-3">
                  ✓ Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-rose-400 mt-3">
                  ✗ Please fill in all fields.
                </p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
