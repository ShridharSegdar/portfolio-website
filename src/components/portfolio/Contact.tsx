import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { Instagram, Linkedin, Mail, Download, Send, Check } from "lucide-react";

const OWNER_EMAIL = "shridharsegdar1@gmail.com";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || `New message from ${form.name || "portfolio"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    // Open user's email client pre-filled to Shridhar's inbox
    window.location.href = `mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's plan your <span className="neon-text">next release</span>.</>}
      intro="Open to discussions around enterprise delivery, Agile coaching engagements, and security-program coordination."
    >
      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2 space-y-3">
          {[
            { Icon: Mail, label: "Email", value: OWNER_EMAIL, href: `mailto:${OWNER_EMAIL}` },
            { Icon: Linkedin, label: "LinkedIn", value: "/in/shridhar-segdar-5390651ab", href: "https://www.linkedin.com/in/shridhar-segdar-5390651ab/" },
            { Icon: Instagram, label: "Instagram", value: "@shredhaar", href: "https://www.instagram.com/shredhaar" },
            { Icon: Download, label: "Resume", value: "Download PDF", href: "/resume/Shridhar_Segdar.pdf" },
          ].map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              download={c.label === "Resume" ? "Shridhar_Segdar.pdf" : undefined}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group flex items-center gap-4 glass gradient-border rounded-2xl p-4 hover:bg-white/[0.04] transition"
            >
              <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:shadow-[0_0_16px_var(--neon)] transition">
                <c.Icon className="size-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{c.label}</div>
                <div className="text-sm font-medium truncate">{c.value}</div>
              </div>
              <span className="text-muted-foreground group-hover:text-primary transition">→</span>
            </motion.a>
          ))}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="lg:col-span-3 glass-strong gradient-border rounded-2xl p-7 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" type="text" placeholder="Your name" value={form.name} onChange={update("name")} required />
            <Field label="Email" type="email" placeholder="you@company.com" value={form.email} onChange={update("email")} required />
          </div>
          <Field label="Subject" type="text" placeholder="Project / engagement" value={form.subject} onChange={update("subject")} />
          <div>
            <label className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">
              Message
            </label>
            <textarea
              rows={5}
              required
              value={form.message}
              onChange={update("message")}
              placeholder="Tell me about the program, timelines, and stakeholders…"
              className="mt-2 w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary/50 focus:bg-white/[0.05] transition resize-none"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition neon-glow"
          >
            {sent ? (
              <><Check className="size-4" /> Opening your email app…</>
            ) : (
              <><Send className="size-4" /> Send message</>
            )}
          </button>
          <p className="text-[11px] text-muted-foreground font-mono">
            Submitting opens your email client pre-addressed to {OWNER_EMAIL}.
          </p>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  label, type, placeholder, value, onChange, required,
}: {
  label: string; type: string; placeholder: string;
  value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; required?: boolean;
}) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-2 w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary/50 focus:bg-white/[0.05] transition"
      />
    </div>
  );
}
