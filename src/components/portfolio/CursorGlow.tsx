import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[100] hidden md:block"
      animate={{ x: pos.x - 250, y: pos.y - 250, opacity: visible ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20, mass: 0.6 }}
      style={{
        width: 500,
        height: 500,
        background:
          "radial-gradient(circle, oklch(0.72 0.18 230 / 0.18), transparent 60%)",
        filter: "blur(40px)",
      }}
    />
  );
}
