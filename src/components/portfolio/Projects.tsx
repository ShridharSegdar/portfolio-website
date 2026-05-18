import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Section } from "./Section";
import { ArrowUpRight, X, Shield, Building2 } from "lucide-react";

type Project = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  Icon: typeof Shield;
  highlights: string[];
  metrics: { label: string; value: string }[];
  tech: string[];
};

const projects: Project[] = [
  {
    id: "snorkel",
    name: "SnorkelBXV5",
    category: "Enterprise Security Platform",
    tagline: "Secure B2B communication backbone with PKI, SSL/TLS and SFTP coordination.",
    Icon: Shield,
    highlights: [
      "Secure B2B communication channels",
      "PKI integration & certificate lifecycle",
      "SSL/TLS workflow orchestration",
      "SFTP coordination across partners",
      "Enterprise delivery coordination",
    ],
    metrics: [
      { label: "Release cadence", value: "Bi-weekly" },
      { label: "Partners onboarded", value: "3000+" },
      { label: "Uptime SLA", value: "99.95%" },
    ],
    tech: ["PKI", "SSL/TLS", "SFTP", "Jira", "Scrum", "Confluence"],
  },
  {
    id: "ipay",
    name: "I-PAY2CORP",
    category: "Enterprise Banking Platform",
    tagline: "Cross-functional Agile delivery for banking dashboards, with overseas onboarding & GenAI workflows.",
    Icon: Building2,
    highlights: [
      "Cross-functional team coordination",
      "Agile transformation support",
      "Dashboard delivery for banking ops",
      "Banking & government workflows",
      "Overseas coordination across timezones",
      "GenAI-powered project workflows",
    ],
    metrics: [
      { label: "Delay reduction", value: "20%" },
      { label: "Sprints shipped", value: "30+" },
      { label: "Stakeholders", value: "8 teams" },
    ],
    tech: ["Jira", "Agile", "Scrum", "Notion AI", "ChatPRD", "Gamma", "SQL"],
  },
];

export function Projects() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <Section
      id="projects"
      eyebrow="Featured Work"
      title={<>Programs I've <span className="neon-text">shipped</span>.</>}
      intro="Selected engagements across enterprise security and banking — every delivery owned end-to-end, from backlog to release."
    >
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <motion.button
            key={p.id}
            type="button"
            onClick={() => setOpen(p)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="text-left glass-strong gradient-border rounded-2xl p-7 group relative overflow-hidden"
          >
            <div
              aria-hidden
              className="absolute -top-24 -right-24 size-56 rounded-full opacity-0 group-hover:opacity-100 transition duration-700"
              style={{ background: "var(--gradient-neon)", filter: "blur(70px)" }}
            />
            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary">
                  <p.Icon className="size-3.5" /> {p.category}
                </div>
                <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition" />
              </div>
              <h3 className="mt-4 font-display text-2xl md:text-3xl">{p.name}</h3>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{p.tagline}</p>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {p.metrics.map((m) => (
                  <div key={m.label} className="rounded-xl bg-white/[0.03] border border-white/5 p-3">
                    <div className="font-display text-lg">{m.value}</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tech.slice(0, 5).map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary/90"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[80] bg-background/70 backdrop-blur-lg flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ type: "spring", damping: 24, stiffness: 240 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full max-h-[85vh] overflow-auto glass-strong gradient-border rounded-3xl p-8"
            >
              <button
                onClick={() => setOpen(null)}
                className="absolute top-4 right-4 size-9 rounded-full glass hover:bg-white/10 flex items-center justify-center"
                aria-label="Close"
              >
                <X className="size-4" />
              </button>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary">
                <open.Icon className="size-3.5" /> {open.category}
              </div>
              <h3 className="mt-3 font-display text-3xl">{open.name}</h3>
              <p className="mt-2 text-muted-foreground">{open.tagline}</p>

              <div className="mt-6">
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                  Highlights
                </div>
                <ul className="space-y-1.5">
                  {open.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm">
                      <span className="text-primary mt-0.5">›</span>
                      <span className="text-foreground/85">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {open.metrics.map((m) => (
                  <div key={m.label} className="rounded-xl bg-white/[0.03] border border-white/5 p-3">
                    <div className="font-display text-xl">{m.value}</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {open.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary/90"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
