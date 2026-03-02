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
    // Only 6-8 dots
    const count = 6 + Math.floor(Math.random() * 3);
    return [...Array(count)].map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 10 + Math.random() * 8, // 10-18s
      delay: Math.random() * 5,
      opacity: 0.12 + Math.random() * 0.08, // Subtle visibility
      size: Math.random() > 0.5 ? 'w-1.5 h-1.5' : 'w-2 h-2',
      color: Math.random() > 0.5 ? 'bg-gold-400/30' : 'bg-white/15',
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
