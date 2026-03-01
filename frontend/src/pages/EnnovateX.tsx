import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "../components/ui/Button";

export default function EnnovateX() {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const days = [
    {
      title: "Day 1 — Ideate & Form",
      content:
        "Pitch ideas, audience voting, team formation, mentor allocation, validation."
    },
    {
      title: "Day 2 — Build & Validate",
      content:
        "MVP development, market research, structured workshops, keynote session."
    },
    {
      title: "Day 3 — Pitch & Scale",
      content:
        "Final pitch, Q&A, evaluation, awards, incubation selection."
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden pt-24 relative">

      {/* Background Glow */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        ${isMobile ? "w-[300px] h-[300px] blur-[40px]" : "w-[900px] h-[900px] blur-[120px]"} 
        bg-gold-500/10 rounded-full pointer-events-none`}
      />

      {/* Floating Particles (Desktop Only) */}
      {!isMobile && !shouldReduceMotion && (
        <div className="absolute inset-0">
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
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
              }}
            />
          ))}
        </div>
      )}

      {/* ================= HERO ================= */}
      <section className="relative z-10 text-center px-6 max-w-6xl mx-auto">

        <motion.h1
          animate={
            !isMobile && !shouldReduceMotion
              ? { y: [0, -6, 0] }
              : undefined
          }
          transition={
            !isMobile && !shouldReduceMotion
              ? { duration: 6, repeat: Infinity }
              : undefined
          }
          className="text-5xl md:text-8xl font-bold mb-6"
        >
          ENNOVATE
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-gold-500">
            ’X
          </span>
        </motion.h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
          A 3-Day Immersive Entrepreneurial Experience.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-24">
          <Button
            href="#register"
            size="lg"
            className="bg-gradient-to-r from-yellow-400 to-gold-500 text-black font-bold px-10 py-4"
          >
            Register Now
          </Button>

          <Button
            href="#flow"
            variant="glass"
            size="lg"
            className="border border-gold-500/40 text-gold-400"
          >
            View Structure
          </Button>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-20 border-t border-white/10 text-center px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          About <span className="text-gold-500">Ennovate’X</span>
        </h2>

        <p className="max-w-3xl mx-auto text-slate-400 text-lg leading-relaxed">
          Ennovate’X is a structured startup sprint that transforms students
          into founders. From idea validation to final pitch, participants
          experience the real startup journey.
        </p>
      </section>

      {/* ================= 3 DAY FLOW ================= */}
      <section id="flow" className="py-20 border-t border-white/10 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          3-Day Experience
        </h2>

        <div className="space-y-4">
          {days.map((day, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl bg-black"
            >
              <button
                onClick={() =>
                  setExpanded(expanded === index ? null : index)
                }
                className="w-full p-6 flex justify-between items-center text-left"
              >
                <span className="text-xl font-semibold">
                  {day.title}
                </span>
                <ChevronDown
                  className={`transition-transform ${
                    expanded === index ? "rotate-180 text-gold-400" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {expanded === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden px-6 pb-6 text-slate-400"
                  >
                    {day.content}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        id="register"
        className="py-24 border-t border-white/10 text-center px-6"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Registrations Open
        </h2>

        <p className="text-gold-400 mb-8">
          Limited Seats • Competitive Selection
        </p>

        <Button
          href="#"
          size="lg"
          className="bg-gradient-to-r from-yellow-400 to-gold-500 text-black font-bold px-12 py-6"
        >
          Register for Ennovate’X
        </Button>
      </section>

      {/* Footer Line */}
      <div className="border-t border-white/10 py-8 text-center text-gold-500/60 text-xs uppercase tracking-widest">
        Official Flagship Event Under CIIL – IEN PCCOE
      </div>
    </div>
  );
}