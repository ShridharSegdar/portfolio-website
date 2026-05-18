export function Footer() {
  return (
    <footer className="border-t border-white/5 mt-10">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground font-mono">
        <div>© {new Date().getFullYear()} Shridhar Segdar — Project Manager</div>
        <div className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse-glow" />
          all systems shipping
        </div>
      </div>
    </footer>
  );
}
