import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Terminal } from "lucide-react";

const titles = [
  "Executive - Project Management",
  "Agile Delivery Coordinator",
  "Enterprise Banking Solutions",
  "Cybersecurity Project Specialist",
  "Project Coordinator",
  "Agile Coordinator",
  "Delivery Analyst",
  "PMO Analyst",
  "Product Operations",
];

export function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % titles.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* background grid + glow */}
      <div aria-hidden className="absolute inset-0 grid-bg" />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 size-[600px] rounded-full opacity-40 blur-[120px]"
        style={{ background: "var(--gradient-neon)" }}
      />
      {/* floating particles */}
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute size-1 rounded-full bg-primary/60"
            initial={{
              x: `${(i * 53) % 100}%`,
              y: `${(i * 37) % 100}%`,
              opacity: 0,
            }}
            animate={{
              y: [`${(i * 37) % 100}%`, `${((i * 37) % 100) - 15}%`],
              opacity: [0, 0.8, 0],
            }}
            transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-6xl px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono text-muted-foreground mb-8"
        >
          <Terminal className="size-3.5 text-primary" />
          <span>~/ available for select engagements</span>
          <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse-glow" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95] text-balance"
        >
          Shridhar <span className="neon-text">Segdar</span>
          <br />
          <span className="text-muted-foreground text-3xl sm:text-4xl md:text-5xl font-normal">
            shipping enterprise delivery,
            <br className="hidden sm:block" /> securely &amp; on time.
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 h-9 flex items-center gap-3 font-mono text-sm md:text-base"
        >
          <span className="text-primary">{">"}</span>
          <span className="text-muted-foreground">role:</span>
          <motion.span
            key={idx}
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="text-foreground"
          >
            {titles[idx]}
          </motion.span>
          <span className="inline-block w-2 h-5 bg-primary animate-pulse-glow" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 max-w-xl text-muted-foreground text-base md:text-lg leading-relaxed"
        >
          Project Management executive driving Agile execution across enterprise banking and
          cybersecurity programs — coordinating cross-functional teams from banking
          and secure workflows to overseas dashboard and payments solutions delivery.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href="/resume/Shridhar_Segdar.pdf"
            download="Shridhar_Segdar.pdf"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition neon-glow"
          >
            <Download className="size-4" /> Download Resume
          </a>
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-full glass-strong gradient-border font-medium text-sm hover:bg-white/5 transition"
          >
            View Projects <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm text-muted-foreground hover:text-foreground transition"
          >
            <Mail className="size-4" /> Contact Me
          </a>
        </motion.div>
      </div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono tracking-[0.3em] text-muted-foreground uppercase"
      >
        scroll
      </motion.div>
    </section>
  );
}
