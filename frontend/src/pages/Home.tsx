import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Users, Rocket, ShieldCheck, TrendingUp } from "lucide-react";
import { Button } from "../components/ui/Button";
import { AnimatedCounter } from "../components/ui/AnimatedCounter";

const stats = [
  { label: "Active Innovators", value: 1.2, suffix: "k+", isDecimal: true, icon: Users },
  { label: "Funded Projects", value: 150, suffix: "+", isDecimal: false, icon: Rocket },
  { label: "Patents Filed", value: 45, suffix: "+", isDecimal: false, icon: ShieldCheck },
  { label: "Startups Incubated", value: 12, suffix: "", isDecimal: false, icon: TrendingUp },
];

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const [mouseX, setMouseX] = useState(0);

  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  /* Desktop subtle mouse parallax */
  useEffect(() => {
    if (isMobile) return;

    const handleMove = (e: MouseEvent) => {
      const move = (e.clientX / window.innerWidth - 0.5) * 30;
      setMouseX(move);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [isMobile]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-24 overflow-hidden">

        {/* Floating Background Logo (Desktop Only) */}
        <motion.img
          src="/bird.png"
          alt=""
          style={!isMobile ? { x: mouseX } : undefined}
          animate={!isMobile && !shouldReduceMotion ? { scale: [1, 1.05, 1] } : undefined}
          transition={
            !isMobile && !shouldReduceMotion
              ? { duration: 12, repeat: Infinity, ease: "easeInOut" }
              : undefined
          }
          className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[600px] opacity-10 hidden md:block pointer-events-none"
        />

        {/* Soft Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/30 to-navy-950 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">

          {/* Badge */}
          <motion.div
            initial={!shouldReduceMotion ? { opacity: 0, y: 10 } : false}
            animate={!shouldReduceMotion ? { opacity: 1, y: 0 } : false}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <span className="h-2 w-2 rounded-full bg-gold-500 animate-pulse" />
            <span className="text-sm text-slate-300 tracking-wide uppercase">
              PCCOE Innovation Hub
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={!shouldReduceMotion ? { opacity: 0, y: 20 } : false}
            animate={!shouldReduceMotion ? { opacity: 1, y: 0 } : false}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Engineering the Future of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
              Innovation
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={!shouldReduceMotion ? { opacity: 0, y: 20 } : false}
            animate={!shouldReduceMotion ? { opacity: 1, y: 0 } : false}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10"
          >
            The central ecosystem for research, technology, and entrepreneurship at PCCOE.
            Turning bold ideas into impactful startups.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={!shouldReduceMotion ? { opacity: 0, y: 20 } : false}
            animate={!shouldReduceMotion ? { opacity: 1, y: 0 } : false}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button href="#divisions" size="lg" icon={<ArrowRight size={18} />}>
              Explore Divisions
            </Button>
            <Button href="/contact" variant="glass" size="lg">
              Join IEN
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-400">
                <stat.icon className="w-6 h-6" />
              </div>

              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {!isMobile ? (
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    isDecimal={stat.isDecimal}
                  />
                ) : (
                  <>
                    {stat.value}
                    {stat.suffix}
                  </>
                )}
              </div>

              <div className="text-xs md:text-sm text-slate-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}