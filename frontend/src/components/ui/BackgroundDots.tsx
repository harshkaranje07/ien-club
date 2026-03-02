import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function BackgroundDots() {
  const prefersReducedMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      if (typeof window !== "undefined") {
        setIsDesktop(window.innerWidth >= 1024); // only laptop+
      }
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Do not render anything on mobile or reduced motion
  if (!isDesktop || prefersReducedMotion) return null;

  const dots = useMemo(() => {
    const count = 18; // balanced professional density

    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 30 + Math.random() * 20, // ultra slow drift
      delay: Math.random() * 10,
      size: Math.random() > 0.5 ? 6 : 8, // px values
      opacity: 0.12 + Math.random() * 0.08,
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute bg-white/60 rounded-full"
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