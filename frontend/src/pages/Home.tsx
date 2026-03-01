import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../components/ui/Button";

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const [mouseX, setMouseX] = useState(0);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Desktop mouse parallax
  useEffect(() => {
    if (isMobile) return;

    const handleMove = (e: MouseEvent) => {
      const move = (e.clientX / window.innerWidth - 0.5) * 40;
      setMouseX(move);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [isMobile]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white pt-24">

      {/* ================= BACKGROUND GLOW ================= */}
      <motion.div
        animate={
          !isMobile && !shouldReduceMotion
            ? { scale: [1, 1.1, 1] }
            : undefined
        }
        transition={
          !isMobile && !shouldReduceMotion
            ? { duration: 10, repeat: Infinity }
            : undefined
        }
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        ${isMobile ? "w-[300px] h-[300px] blur-[50px]" : "w-[900px] h-[900px] blur-[140px]"} 
        bg-gold-500/10 rounded-full pointer-events-none`}
      />

      {/* ================= FLOATING PARTICLES (DESKTOP ONLY) ================= */}
      {!isMobile && !shouldReduceMotion && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{ y: [0, -40, 0] }}
              transition={{
                duration: 8 + Math.random() * 10,
                repeat: Infinity,
              }}
            />
          ))}
        </div>
      )}

      {/* ================= FLOATING WATERMARK LOGO ================= */}
      {!isMobile && (
        <motion.img
          src="/bird.png"
          alt=""
          style={{ x: mouseX }}
          animate={
            !shouldReduceMotion ? { y: [-10, 10, -10] } : undefined
          }
          transition={
            !shouldReduceMotion
              ? { duration: 8, repeat: Infinity }
              : undefined
          }
          className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[600px] opacity-10 pointer-events-none"
        />
      )}

      {/* ================= HERO CONTENT ================= */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6"
        >
          Engineering the Future of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
            Innovation
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10"
        >
          The central innovation ecosystem of PCCOE —
          building startups, empowering creators, shaping futures.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button
            href="/divisions"
            size="lg"
            icon={<ArrowRight size={18} />}
          >
            Explore Divisions
          </Button>

          <Button
            href="/ciil/ennovatex"
            variant="glass"
            size="lg"
          >
            ENNOVATE’X
          </Button>
        </motion.div>
      </section>
    </div>
  );
}