import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Users, Rocket, ShieldCheck, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const disableMotion = isMobile || shouldReduceMotion;

  return (
    <div className="overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-24">

        {/* Reduced Blur (mobile safe) */}
        {!isMobile && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                          w-[500px] h-[500px] bg-gold-500/10 blur-[40px] 
                          rounded-full pointer-events-none z-0" />
        )}

        {/* Watermark Bird (Desktop Only) */}
        {!disableMotion && (
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[5%] top-1/2 -translate-y-1/2 
                       w-[500px] opacity-[0.05] pointer-events-none hidden md:block"
          >
            <img
              src="/bird.png"
              alt=""
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-full object-contain"
            />
          </motion.div>
        )}

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">

          {/* Badge */}
          <motion.div
            initial={!disableMotion ? { opacity: 0, y: 10 } : undefined}
            animate={!disableMotion ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                       bg-white/5 border border-white/10 mb-8"
          >
            <span className="h-2 w-2 rounded-full bg-gold-500" />
            <span className="text-sm text-slate-300 tracking-wide uppercase">
              PCCOE Innovation Hub
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={!disableMotion ? { opacity: 0, y: 20 } : undefined}
            animate={!disableMotion ? { opacity: 1, y: 0 } : undefined}
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
            initial={!disableMotion ? { opacity: 0, y: 20 } : undefined}
            animate={!disableMotion ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10"
          >
            The central ecosystem for research, technology, and entrepreneurship at PCCOE.
            Turning bold ideas into impactful startups.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={!disableMotion ? { opacity: 0, y: 20 } : undefined}
            animate={!disableMotion ? { opacity: 1, y: 0 } : undefined}
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

      {/* ================= STATS ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          {stats.map((stat, index) => {
            const CardWrapper = disableMotion ? "div" : motion.div;

            return (
              <CardWrapper
                key={stat.label}
                {...(!disableMotion && {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, amount: 0.2 },
                  transition: { duration: 0.4, delay: index * 0.1 },
                })}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-400">
                  <stat.icon className="w-6 h-6" />
                </div>

                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {disableMotion ? (
                    <>
                      {stat.value}
                      {stat.suffix}
                    </>
                  ) : (
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      isDecimal={stat.isDecimal}
                    />
                  )}
                </div>

                <div className="text-xs md:text-sm text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </section>
    </div>
  );
}