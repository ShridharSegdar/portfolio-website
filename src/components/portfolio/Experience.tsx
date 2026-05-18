import { motion } from "framer-motion";
import { Section } from "./Section";
import { Briefcase } from "lucide-react";

const roles = [
  {
    company: "Odyssey Technologies",
    role: "Junior Executive — Project Management",
    period: "July 2023 — Present",
    summary:
      "Driving Agile execution across enterprise security and banking deliveries — owning sprint planning, backlog hygiene, dependencies and release coordination.",
    responsibilities: [
      "Agile execution & sprint planning",
      "Stakeholder & vendor management",
      "Jira backlog and dependency tracking",
      "Release coordination across teams",
      "Enterprise security workflows (PKI / SSL / SFTP)",
    ],
    achievements: [
      "Reduced release delays by 20% via sprint discipline",
      "Coordinated overseas banking dashboard rollout",
      "Owned PKI delivery handoffs end-to-end",
    ],
    tech: ["Jira", "Confluence", "Scrum", "PKI", "SSL/TLS", "SFTP", "GitHub", "Figma", "Excel", "WinSCP", "A/B Testing", "API testing", "SQL"],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>A timeline of <span className="neon-text">delivery</span>.</>}
      intro="From sprint zero to production rollout — coordinating engineering, security and business teams across regulated environments."
    >
      <div className="relative pl-6 md:pl-10">
        {/* spine */}
        <div className="absolute left-2 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-white/10 to-transparent" />
        {roles.map((r, i) => (
          <motion.article
            key={r.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative mb-10 group"
          >
            <span className="absolute -left-[26px] md:-left-[34px] top-6 size-3 rounded-full bg-primary shadow-[0_0_18px_var(--neon)]" />
            <div className="glass-strong gradient-border rounded-2xl p-6 md:p-8 transition group-hover:bg-white/[0.04]">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 text-primary text-xs font-mono tracking-widest uppercase">
                    <Briefcase className="size-3.5" />
                    {r.period}
                  </div>
                  <h3 className="mt-2 font-display text-xl md:text-2xl">{r.role}</h3>
                  <p className="text-muted-foreground text-sm">{r.company}</p>
                </div>
              </div>

              <p className="mt-5 text-foreground/85 leading-relaxed">{r.summary}</p>

              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                    Responsibilities
                  </div>
                  <ul className="space-y-1.5 text-sm">
                    {r.responsibilities.map((x) => (
                      <li key={x} className="flex gap-2">
                        <span className="text-primary mt-0.5">›</span>
                        <span className="text-foreground/85">{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                    Achievements
                  </div>
                  <ul className="space-y-1.5 text-sm">
                    {r.achievements.map((x) => (
                      <li key={x} className="flex gap-2">
                        <span className="text-primary mt-0.5">+</span>
                        <span className="text-foreground/85">{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {r.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
