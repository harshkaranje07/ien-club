import { useState, useEffect, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function BackgroundDots() {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Generate dots only once (prevents re-render shifting)
  const dots = useMemo(() => {
    return Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 90 + 5}%`,
      left: `${Math.random() * 90 + 5}%`,
      duration: 10 + Math.random() * 8, // 10–18s
      delay: Math.random() * 5,
      opacity: 0.25 + Math.random() * 0.15, // 0.25–0.40
      size: Math.random() > 0.5 ? "w-2 h-2" : "w-2.5 h-2.5",
      color:
        Math.random() > 0.5
          ? "bg-gold-400/60"
          : "bg-white/30",
    }));
  }, []);

  const shouldAnimate = !prefersReducedMotion && !isMobile;

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {dots.map((dot) =>
        shouldAnimate ? (
          <motion.div
            key={dot.id}
            className={`absolute ${dot.size} ${dot.color} rounded-full`}
            style={{
              top: dot.top,
              left: dot.left,
              opacity: dot.opacity,
            }}
            animate={{
              y: [-15, 15, -15],
              opacity: [dot.opacity, dot.opacity * 1.4, dot.opacity],
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: dot.delay,
            }}
          />
        ) : (
          <div
            key={dot.id}
            className={`absolute ${dot.size} ${dot.color} rounded-full`}
            style={{
              top: dot.top,
              left: dot.left,
              opacity: dot.opacity,
            }}
          />
        )
      )}
    </div>
  );
}