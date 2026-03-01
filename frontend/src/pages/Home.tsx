import { useState, useEffect, useMemo } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  ArrowRight,
  Lightbulb,
  ShieldCheck,
  Link as LinkIcon,
  Users,
  TrendingUp,
  Rocket,
  Zap
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Section } from '../components/ui/Section';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';

const stats = [
  { label: 'Active Innovators', value: 1.2, suffix: 'k+', isDecimal: true, icon: Users },
  { label: 'Funded Projects', value: 150, suffix: '+', isDecimal: false, icon: Rocket },
  { label: 'Patents Filed', value: 45, suffix: '+', isDecimal: false, icon: ShieldCheck },
  { label: 'Startups Incubated', value: 12, suffix: '', isDecimal: false, icon: TrendingUp },
];

const divisions = [
  {
    id: 'iic',
    name: 'IIC',
    fullName: 'Institution Innovation Council',
    desc: 'Fostering the culture of innovation and startup ecosystem among students and faculty.',
    icon: Lightbulb,
    color: 'from-blue-600 to-cyan-500',
    textPrimary: 'text-blue-400',
  },
  {
    id: 'ipr',
    name: 'IPR',
    fullName: 'Intellectual Property Rights',
    desc: 'Guiding and supporting patent, copyright, and trademark filing.',
    icon: ShieldCheck,
    color: 'from-purple-600 to-pink-500',
    textPrimary: 'text-purple-400',
  },
  {
    id: 'ciil',
    name: 'CIIL',
    fullName: 'Center for Innovation & Industry Linkage',
    desc: 'Bridging academia and industry through collaboration.',
    icon: LinkIcon,
    color: 'from-emerald-600 to-teal-500',
    textPrimary: 'text-emerald-400',
  },
];

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      }
    }
  }, [location]);

  const shouldAnimate = !prefersReducedMotion && !isMobile;

  // Stable particle positions (no re-randomizing every render)
  const particles = useMemo(() => {
    return Array.from({ length: 12 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 10 + Math.random() * 6,
      delay: Math.random() * 4,
    }));
  }, []);

  return (
    <div className="relative overflow-hidden bg-navy-950">

      {/* Static Radial Background (No repaint animation) */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(11,44,95,0.8)_0%,rgba(2,12,27,1)_100%)] opacity-40 pointer-events-none" />

      {/* Desktop Floating Dots */}
      {shouldAnimate && (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {particles.map((dot, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold-400/15 rounded-full"
              style={{ left: dot.left, top: dot.top }}
              animate={{ y: [0, -30, 0] }}
              transition={{
                duration: dot.duration,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: dot.delay,
              }}
            />
          ))}
        </div>
      )}

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-24 overflow-hidden">

        {/* Soft Glow */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gold-500/5 ${isMobile ? 'blur-[50px]' : 'blur-[100px]'} rounded-full pointer-events-none z-0`} />

        {/* Watermark Logo */}
        {shouldAnimate && (
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[300px] md:w-[700px] opacity-[0.04] pointer-events-none"
          >
            <img src="/bird.png" alt="" className="w-full object-contain" loading="lazy" />
          </motion.div>
        )}

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">

          <motion.h1
            initial={shouldAnimate ? { opacity: 0, y: 30 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Engineering the Future of{' '}
            <span className={`text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600 ${shouldAnimate ? 'bg-[length:200%_200%] animate-[gradientMove_8s_linear_infinite]' : ''}`}>
              Innovation.
            </span>
          </motion.h1>

          <motion.p
            initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10"
          >
            The central ecosystem for research, technology, and entrepreneurship at PCCOE.
          </motion.p>

          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button href="/#divisions" size="lg" icon={<ArrowRight size={18} />}>
              Explore Divisions
            </Button>
            <Button href="/contact" variant="glass" size="lg">
              Join Us
            </Button>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <Section className="pt-16 pb-24 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: shouldAnimate ? index * 0.1 : 0 }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-400">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  isDecimal={stat.isDecimal}
                />
              </div>
              <div className="text-xs md:text-sm text-slate-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* DIVISIONS */}
      <Section id="divisions" className="pt-16 pb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {divisions.map((div, index) => (
            <motion.div
              key={div.id}
              initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: shouldAnimate ? index * 0.1 : 0 }}
            >
              <Card className="p-6 border border-white/10 hover:border-gold-500/30 transition-all duration-300">
                <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${div.color} flex items-center justify-center`}>
                  <div.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{div.name}</h3>
                <h4 className={`${div.textPrimary} text-sm uppercase mb-4`}>
                  {div.fullName}
                </h4>
                <p className="text-slate-300 mb-6">{div.desc}</p>

                <Link
                  to={`/divisions/${div.id}`}
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  Explore Division <ArrowRight size={18} />
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="py-24 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Ready to Build the Future?
        </h2>
        <Button href="/contact" size="lg" icon={<ArrowRight size={18} />}>
          Apply to Incubator
        </Button>
      </section>
    </div>
  );
}