import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function BackgroundDots() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return null;

  const dots = useMemo(() => {
    const count = 16;

    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 35 + Math.random() * 15,
      delay: Math.random() * 10,
      size: Math.random() > 0.5 ? 5 : 7,
      opacity: 0.1 + Math.random() * 0.05,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden hidden lg:block">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute bg-white rounded-full"
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
            opacity: dot.opacity,
          }}
          animate={{
            x: [0, 20, -15, 0],
            y: [0, -15, 15, 0],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: dot.delay,
          }}
        />
      ))}
    </div>
  );
}