import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function BackgroundLayer() {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const shouldAnimate = !prefersReducedMotion && !isMobile;

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-[#020c1b]">
      
      {/* Base Radial Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(11,44,95,0.6)_0%,rgba(2,12,27,1)_100%)]" />

      {/* Desktop Premium Enhancements */}
      {!isMobile && (
        <>
          {/* Subtle Noise / Texture */}
          <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0id2hpdGUiLz48L3N2Zz4=')]" />

          {/* Blue Ambient Glow */}
          <motion.div
            className="absolute top-[-20%] left-[-15%] w-[45vw] h-[45vw] rounded-full bg-blue-600/8 blur-[70px]"
            animate={
              shouldAnimate
                ? { opacity: [0.35, 0.55, 0.35] }
                : { opacity: 0.4 }
            }
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Gold Accent Depth */}
          <motion.div
            className="absolute bottom-[-25%] right-[-15%] w-[55vw] h-[55vw] rounded-full bg-yellow-400/5 blur-[90px]"
            animate={
              shouldAnimate
                ? { opacity: [0.25, 0.45, 0.25] }
                : { opacity: 0.3 }
            }
            transition={{
              duration: 26,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />
        </>
      )}
    </div>
  );
}