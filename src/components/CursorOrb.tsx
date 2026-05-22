import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorOrb() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 350, damping: 30, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 350, damping: 30, mass: 0.5 });
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setEnabled(window.matchMedia("(pointer: fine)").matches);
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement | null;
      setHover(!!t?.closest("a, button, [data-cursor='hover']"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full mix-blend-screen"
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
          width: hover ? 56 : 18,
          height: hover ? 56 : 18,
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--brand) 90%, transparent) 0%, color-mix(in oklab, var(--brand-3) 60%, transparent) 60%, transparent 75%)",
          boxShadow: "0 0 40px color-mix(in oklab, var(--brand) 60%, transparent)",
          transition: "width .2s ease, height .2s ease",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 rounded-full bg-foreground"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
}
