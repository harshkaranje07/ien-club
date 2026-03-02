import { useState, useEffect, useMemo } from 'react';
import { motion, useReducedMotion } from 'motion/react';

export function BackgroundDots() {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const dots = useMemo(() => {
    // Increase number of background dots moderately (around 15–25 max) on desktop
    const count = 18 + Math.floor(Math.random() * 8);
    return [...Array(count)].map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 12 + Math.random() * 10, // 12-22s (even slower)
      delay: Math.random() * 5,
      opacity: 0.08 + Math.random() * 0.07, // Even more subtle visibility
      size: Math.random() > 0.5 ? 'w-1 h-1' : 'w-1.5 h-1.5', // Smaller dots
      color: Math.random() > 0.5 ? 'bg-gold-400/20' : 'bg-white/10',
    }));
  }, []);

  // Completely disable on mobile or if reduced motion is preferred
  if (isMobile || prefersReducedMotion) {
    return null;
  }

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
            y: [0, -40, 0],
            opacity: [dot.opacity, dot.opacity * 1.5, dot.opacity]
          }}
          transition={{ 
            duration: dot.duration, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: dot.delay
          }}
        />
      ))}
    </div>
  );
}
