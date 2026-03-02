import { useState, useEffect, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function BackgroundDots() {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 🚫 Completely disable on mobile or reduced motion
  if (isMobile || prefersReducedMotion) return null;

  // Generate dots only once
  const dots = useMemo(() => {
    const count = 20; // Stable count (not random every render)

    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 95}%`,
      left: `${Math.random() * 95}%`,
      duration: 14 + Math.random() * 8, // 14–22s slow movement
      delay: Math.random() * 5,
      size: Math.random() > 0.5 ? "w-2 h-2" : "w-2.5 h-2.5",
      color: Math.random() > 0.5 ? "bg-gold-400" : "bg-white",
      opacity: 0.25 + Math.random() * 0.15, // 0.25–0.40
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className={`absolute ${dot.size} ${dot.color} rounded-full`}
          style={{
            top: dot.top,
            left: dot.left,
            opacity: dot.opacity,
          }}
          animate={{
            y: [0, -20, 0],
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