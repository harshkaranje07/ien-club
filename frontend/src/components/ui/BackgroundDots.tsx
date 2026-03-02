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
    return [...Array(8)].map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 8 + Math.random() * 7, // 8-15s
      delay: Math.random() * 5,
      opacity: 0.15 + Math.random() * 0.1, // 0.15-0.25
      size: Math.random() > 0.5 ? 'w-1.5 h-1.5' : 'w-2 h-2',
      color: Math.random() > 0.5 ? 'bg-gold-400/40' : 'bg-white/20',
    }));
  }, []);

  const shouldAnimate = !prefersReducedMotion && !isMobile;

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className={`absolute ${dot.size} ${dot.color} rounded-full`}
          style={{
            top: dot.top,
            left: dot.left,
            opacity: dot.opacity,
          }}
          animate={shouldAnimate ? { 
            y: [0, -30, 0],
            opacity: [dot.opacity, dot.opacity * 1.5, dot.opacity]
          } : undefined}
          transition={shouldAnimate ? { 
            duration: dot.duration, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: dot.delay
          } : undefined}
        />
      ))}
    </div>
  );
}
