import { motion } from "framer-motion";
import { Section } from "./Section";
import { Counter } from "./Counter";

const stats = [
  { value: 15, suffix: "+", label: "Projects Coordinated" },
  { value: 12, suffix: "+", label: "Teams Managed" },
  { value: 100, suffix: "+", label: "Enterprise Deliveries" },
  { value: 80, suffix: "+", label: "Agile Sprints" },
];

const pillars = [
  "Agile project execution",
  "Cross-functional coordination",
  "Stakeholder management",
  "Enterprise banking solutions",
  "Security & PKI systems",
  "Jira & sprint management",
  "Delivery planning",
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>Building delivery rhythm for <span className="neon-text">complex enterprise programs</span>.</>}
      intro="A Project Manager translating ambiguity into shippable plans — bridging engineering, security, compliance and business stakeholders across regulated banking environments."
    >
      <div className="grid lg:grid-cols-5 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 glass-strong gradient-border rounded-2xl p-8"
        >
          <h3 className="font-display text-xl mb-6">Where I add weight</h3>
          <ul className="grid sm:grid-cols-2 gap-3">
            {pillars.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 text-sm"
              >
                <span className="size-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--neon)]" />
                <span className="text-foreground/90">{p}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-8 pt-6 border-t border-white/5 font-mono text-xs text-muted-foreground leading-relaxed">
            <span className="text-primary">$</span> philosophy --print
            <br />
            <span className="text-foreground/80">
              "Programs ship when the smallest details — dependencies, handoffs,
              risk owners — are visible to everyone, on time, every sprint."
            </span>
          </div>
        </motion.div>

        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass gradient-border rounded-2xl p-5 hover:bg-white/[0.04] transition"
            >
              <div className="font-display text-3xl md:text-4xl font-semibold neon-text">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs text-muted-foreground leading-snug">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
