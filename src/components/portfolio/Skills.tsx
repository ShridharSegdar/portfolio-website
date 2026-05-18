import { motion } from "framer-motion";
import { Section } from "./Section";
import { Kanban, GitBranch, Shield, Users, Code2, Sparkles } from "lucide-react";

const groups = [
  { Icon: Kanban, title: "Project Management", items: ["Jira", "Sprint Planning", "Roadmapping", "Risk Tracking"] },
  { Icon: GitBranch, title: "Agile & Scrum", items: ["Scrum", "Kanban", "Backlog Refinement", "Retrospectives"] },
  { Icon: Shield, title: "Enterprise Security", items: ["PKI", "SSL/TLS", "SFTP", "Security Workflows"] },
  { Icon: Users, title: "Collaboration", items: ["Confluence", "Notion", "Figma", "GitHub"] },
  { Icon: Code2, title: "Technical", items: ["SQL", "Python", "REST APIs", "Linux"] },
  { Icon: Sparkles, title: "AI Productivity", items: ["ChatGPT", "Gemini", "Notion AI", "ChatPRD", "Gamma"] },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={<>The <span className="neon-text">toolkit</span> behind the delivery.</>}
      intro="From sprint orchestration to security workflows — the stack I use to keep enterprise programs moving."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ y: -3 }}
            className="glass gradient-border rounded-2xl p-6 group"
          >
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:shadow-[0_0_18px_var(--neon)] transition">
                <g.Icon className="size-5" />
              </div>
              <h3 className="font-display text-lg">{g.title}</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {g.items.map((it) => (
                <span
                  key={it}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-foreground/85"
                >
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
