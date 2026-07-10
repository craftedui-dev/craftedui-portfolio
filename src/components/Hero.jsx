/* export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-slate-50 leading-tight">
        Lead Front-End Engineer crafting scalable 
        <span className="text-indigo-400">React and Angular</span>{" "} applications with  
        <span className="text-indigo-400">Azure</span> and{" "} 
        <span className="text-indigo-400">AI-powered experiences </span> and{" "} 
        driven by UI architecture and design-system thinking.
      </h2>

      <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
        I build modern, high‑performance web applications using React, TypeScript,
        Node.js, .NET Core, Azure, and intelligent UI workflows powered by Generative‑AI.
      </p>

      <a
        href="#projects"
        className="mt-10 inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
      >
        View My Work
      </a>
    </section>
  );
} */
/* 
export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 text-center">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50">
        Hi, I&apos;m <span className="text-indigo-400">Priyarani Remani</span>.
        <br className="hidden sm:block" />
        Senior Frontend Engineer crafting scalable React experiences with{" "}
        <span className="text-indigo-400">Azure</span> and{" "}
        <span className="text-indigo-400">AI‑powered UI</span>.
      </h1>

      <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
        I build modern, high‑performance web applications using React, TypeScript,
        Node.js, .NET Core, Azure, and intelligent UI workflows powered by
        Generative‑AI. My focus is on clean architecture, scalable UI systems, and
        cloud‑ready delivery.
      </p>

      <a
        href="#projects"
        className="mt-10 inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
      >
        View My Work
      </a>
    </section>
  );
} */
import { motion } from "framer-motion";
import avatar from "../assets/avatar.png";

export default function Hero() {
  return (
    <section className="relative max-w-6xl mx-auto px-6 py-32 text-center bg-gradient-to-b from-slate-900/40 via-slate-900 to-slate-950">

      {/* Avatar with animated glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex justify-center mb-10"
      >
        {/* Soft animated glow */}
        <motion.div
          initial={{ opacity: 0.4, scale: 0.9 }}
          animate={{ opacity: [0.4, 0.7, 0.4], scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-48 h-48 rounded-full bg-indigo-500/30 blur-3xl"
        />

        {/* Avatar image */}
        <img
          src={avatar}
          alt="Priyarani Remani avatar"
          className="relative w-40 h-40 rounded-full shadow-xl border-4 border-indigo-500/40"
        />
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50"
      >
        Hi, I&apos;m <span className="text-indigo-400">Priyarani Remani</span>.
        <br className="hidden sm:block" />
        <span className="text-indigo-400">Lead Front-End Engineer  </span>{" crafting scalable digital experiences through "}
        <span className="text-indigo-400">UI Architecture, Design Systems</span>{", "}React, Angular, Azure and  {" "}
        <span className="text-indigo-400">AI-powered solutions</span>.
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto"
      >
        I build modern, high‑performance web applications using React, Angular, TypeScript,
        Node.js, .NET Core, Azure, and intelligent UI workflows powered by
        Generative‑AI. My focus is on clean architecture, scalable UI systems, and
        cloud‑ready delivery.
      </motion.p>

      {/* CTA Button */}
      <motion.a
        href="#projects"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.35, ease: "easeOut" }}
        className="mt-10 inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
      >
        View My Work
      </motion.a>
    </section>
  );
}



