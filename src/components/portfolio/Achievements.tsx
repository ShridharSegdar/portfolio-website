import { motion } from "framer-motion";
import { Section } from "./Section";
import { Counter } from "./Counter";
import { TrendingDown, Workflow, Landmark, AlertOctagon } from "lucide-react";

const items = [
  { Icon: TrendingDown, value: 20, suffix: "%", label: "Release delay reduction", note: "Through sprint discipline & dependency tracking." },
  { Icon: Workflow, value: 100, suffix: "%", label: "Agile transformation support", note: "Co-led adoption across delivery squads." },
  { Icon: Landmark, value: 8, suffix: "+", label: "Banking coordination programs", note: "Cross-team, cross-border execution." },
  { Icon: AlertOctagon, value: 30, suffix: "+", label: "Production incidents managed", note: "Triage, comms, RCA & post-mortem." },
];

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Impact"
      title={<>Outcomes that <span className="neon-text">shipped</span>.</>}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((it, i) => (
          <motion.div
            key={it.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -3 }}
            className="glass-strong gradient-border rounded-2xl p-6"
          >
            <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
              <it.Icon className="size-5" />
            </div>
            <div className="font-display text-3xl md:text-4xl font-semibold neon-text">
              <Counter to={it.value} suffix={it.suffix} />
            </div>
            <div className="mt-2 text-sm text-foreground/90">{it.label}</div>
            <div className="mt-1 text-xs text-muted-foreground">{it.note}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
