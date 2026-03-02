import { useState, useEffect, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function BackgroundDots() {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024); // laptop+ only
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Disable on mobile or reduced motion
  if (isMobile || prefersReducedMotion) return null;

  const dots = useMemo(() => {
    const count = 22; // balanced density

    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 25 + Math.random() * 20, // very slow drift (25–45s)
      delay: Math.random() * 10,
      size: Math.random() > 0.6 ? "w-1.5 h-1.5" : "w-2 h-2",
      opacity: 0.15 + Math.random() * 0.1, // subtle 0.15–0.25
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className={`absolute ${dot.size} bg-white rounded-full`}
          style={{
            top: dot.top,
            left: dot.left,
            opacity: dot.opacity,
          }}
          animate={{
            x: [0, 15, -10, 0],
            y: [0, -10, 10, 0],
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