import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, ShieldCheck, Link as LinkIcon, Calendar, Users, TrendingUp, ChevronRight, Rocket, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Section, SectionHeader } from '../components/ui/Section';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';
import { IEN_CORE_LEADERSHIP } from '../constants/teamData';

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
    bgLight: 'bg-blue-500/10',
    textPrimary: 'text-blue-400',
    borderHover: 'hover:border-blue-500/50',
    shadowHover: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]'
  },
  {
    id: 'ipr',
    name: 'IPR',
    fullName: 'Intellectual Property Rights',
    desc: 'Guiding and supporting the filing of patents, copyrights, and trademarks for novel ideas.',
    icon: ShieldCheck,
    color: 'from-purple-600 to-pink-500',
    bgLight: 'bg-purple-500/10',
    textPrimary: 'text-purple-400',
    borderHover: 'hover:border-purple-500/50',
    shadowHover: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]'
  },
  {
    id: 'ciil',
    name: 'CIIL',
    fullName: 'Center for Innovation & Industry Linkage',
    desc: 'Bridging the gap between academia and industry through collaborative projects.',
    icon: LinkIcon,
    color: 'from-emerald-600 to-teal-500',
    bgLight: 'bg-emerald-500/10',
    textPrimary: 'text-emerald-400',
    borderHover: 'hover:border-emerald-500/50',
    shadowHover: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]'
  },
];

const highlights = [
  { title: 'AeroDrone AI', category: 'Startup', desc: 'Autonomous drone navigation system for agricultural monitoring.', img: 'https://picsum.photos/seed/drone/800/600' },
  { title: 'Smart Vending', category: 'Patent', desc: 'IoT-enabled smart vending machine with predictive restocking.', img: 'https://picsum.photos/seed/iot/800/600' },
  { title: 'EcoPlast', category: 'Research', desc: 'Biodegradable alternative to single-use plastics derived from algae.', img: 'https://picsum.photos/seed/eco/800/600' },
];

export default function Home() {
  return (
    <div className="overflow-hidden relative bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950">
      {/* Global Floating Dots */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden hidden md:block">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute w-1 h-1 bg-gold-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ 
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ 
              duration: 10 + Math.random() * 15, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Floating Event Banner - Removed as requested */}

      {/* Hero Section - Engineering Innovation Lab Vibe */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-24 md:pb-32 overflow-hidden">
        {/* Deep Navy Animated Gradient Background - Removed to let global gradient show */}
        
        {/* Soft Radial Glows for Depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-gold-500/10 blur-[100px] md:blur-[180px] rounded-full pointer-events-none z-0 mix-blend-screen" />
        <div className="hidden md:block absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-blue-500/10 blur-[180px] rounded-full pointer-events-none z-0 mix-blend-screen" />
        
        {/* Tech Grid Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-20 md:opacity-30 z-0 mix-blend-overlay" />
        
        {/* Faded Watermark Logo - Bird */}
        <motion.div 
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-10%] md:right-[5%] top-1/2 -translate-y-1/2 w-[400px] md:w-[900px] h-auto opacity-[0.04] md:opacity-[0.06] blur-[2px] z-0 pointer-events-none"
        >
          <img src="/bird.png" alt="" className="w-full h-auto object-contain" loading="lazy" />
        </motion.div>

        {/* Animated Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 hidden md:block">
          {[...Array(4)].map((_, i) => (
            <motion.div 
              key={i}
              className="absolute w-1.5 h-1.5 bg-gold-400/30 rounded-full"
              initial={{ 
                x: `${Math.random() * 100}vw`, 
                y: `${Math.random() * 100}vh`,
                opacity: Math.random() * 0.5 + 0.2
              }}
              animate={{ 
                y: [null, `${Math.random() * 100}vh`],
                x: [null, `${Math.random() * 100}vw`],
                opacity: [null, Math.random() * 0.5 + 0.2, 0]
              }}
              transition={{ 
                duration: 15 + Math.random() * 20, 
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* PCCOE College Logo - Top Left */}
        <motion.div 
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute top-24 md:top-32 left-4 md:left-12 lg:left-16 z-20 hidden sm:flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300"
        >
          <div className="flex items-center gap-2 bg-white/5 sm:backdrop-blur-md border border-white/10 p-1 pr-3 rounded-md shadow-sm">
            <img 
              src="/college.png" 
              alt="PCCOE Logo" 
              className="h-6 md:h-8 object-contain bg-white rounded-md p-1"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/pccoe/48/48';
              }}
            />
            <div className="flex flex-col">
              <span className="text-[8px] md:text-[10px] font-bold text-slate-300 tracking-wider uppercase leading-none">Pimpri Chinchwad</span>
              <span className="text-[8px] md:text-[10px] text-slate-500 tracking-widest uppercase leading-none mt-0.5">College of Engineering</span>
            </div>
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/5 border border-white/10 sm:backdrop-blur-md mb-6 md:mb-8 shadow-sm"
          >
            <span className="flex h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-gold-500 animate-pulse" />
            <span className="text-xs md:text-sm font-medium text-slate-300 tracking-wide uppercase">PCCOE Innovation Hub</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white mb-6 md:mb-8 leading-[1.1]"
          >
            Engineering the Future of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 bg-300% animate-gradient drop-shadow-sm">Innovation.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed font-light px-4"
          >
            The central nervous system for research, technology, and entrepreneurship at PCCOE. We turn bold ideas into disruptive startups.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 px-4"
          >
            <Button href="#divisions" size="lg" icon={<ArrowRight size={18} />} className="w-full sm:w-auto">
              Explore Divisions
            </Button>
            <Button href="/contact" variant="glass" size="lg" className="w-full sm:w-auto">
              Join IEN
            </Button>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
        >
          <span className="text-[10px] md:text-xs uppercase tracking-widest font-semibold">Scroll</span>
          <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-slate-400 to-transparent relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 48, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-gold-500"
            />
          </div>
        </motion.div>
        
        {/* Gradient transition to next section - Removed */}
      </section>

      {/* Stats Section */}
      <Section className="relative z-20 pt-16 md:pt-32 pb-16 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 relative z-10"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 text-gold-400 mb-4 md:mb-6 group-hover:scale-105 group-hover:bg-white/10 group-hover:border-gold-500/30 transition-all duration-300 shadow-sm relative">
                <div className="absolute inset-0 bg-gold-500/20 blur-lg md:blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <stat.icon className="w-6 h-6 md:w-8 h-8 relative z-10" />
              </div>
              <div className="text-3xl md:text-5xl font-display font-bold text-white mb-1 md:mb-2 tracking-tight">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isDecimal={stat.isDecimal} />
              </div>
              <div className="text-[10px] md:text-sm font-medium text-slate-400 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </motion.div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </Section>

      {/* Divisions Section */}
      <Section id="divisions" className="relative overflow-hidden pt-16 md:pt-24 pb-20 md:pb-32">
        {/* Background decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[400px] md:h-[600px] bg-gold-500/5 blur-[100px] md:blur-[150px] pointer-events-none mix-blend-screen z-0" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-20 text-center relative z-10 px-4"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 md:mb-6 drop-shadow-sm">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Innovation</span> Engine
          </h2>
          <p className="text-base md:text-xl text-slate-300 max-w-3xl mx-auto font-light">
            Three specialized divisions working in synergy to support the complete lifecycle of an idea—from conception to commercialization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10 relative z-10 px-4 md:px-0">
          {divisions.map((div, index) => (
            <motion.div
              key={div.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card variant="glass-dark" className={`relative h-full p-6 md:p-8 group transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-md border border-white/10 hover:border-gold-500/30 overflow-hidden`}>
                {/* Glow behind card content */}
                <div className={`absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-br ${div.color} flex items-center justify-center text-white mb-6 md:mb-10 shadow-sm group-hover:scale-105 transition-all duration-300`}>
                  <div.icon className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 md:mb-3">{div.name}</h3>
                <h4 className={`text-xs md:text-sm font-bold uppercase tracking-wider ${div.textPrimary} mb-4 md:mb-8 h-auto md:h-10`}>{div.fullName}</h4>
                <p className="text-slate-300 mb-6 md:mb-10 leading-relaxed text-base md:text-lg font-light">
                  {div.desc}
                </p>
                
                <div className="mt-auto pt-6 md:pt-8 border-t border-white/10">
                  <Link
                    to={`/divisions/${div.id}`}
                    className={`inline-flex items-center gap-2 font-semibold text-slate-300 group-hover:${div.textPrimary} transition-colors text-base md:text-lg`}
                  >
                    Explore Division <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Team Section */}
      <Section className="relative overflow-hidden pt-16 md:pt-24 pb-20 md:pb-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(11,44,95,0.1)_0%,transparent_70%)] pointer-events-none" />
        <div className="hidden md:block absolute top-1/2 right-0 w-[600px] h-[600px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-4 md:gap-6 relative z-10 px-4 md:px-0"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 md:mb-6 drop-shadow-sm">
              <span className="text-white">Core</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Leadership</span>
            </h2>
            <p className="text-base md:text-xl text-slate-300 font-light">
              The governing body driving innovation and entrepreneurship at PCCOE.
            </p>
          </div>
          <div className="flex">
            <Button href="/team" variant="glass" icon={<ChevronRight size={18} />} className="w-full md:w-auto justify-center">
              View Full Leadership
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10 px-4 md:px-0">
          {IEN_CORE_LEADERSHIP.slice(0, 3).map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="tech" className="group h-full p-6 md:p-8 hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-300 hover:shadow-md border border-white/5 hover:border-gold-500/20">
                <div className="flex flex-col h-full">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-1 md:mb-2 group-hover:text-gold-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-gold-500 font-medium text-xs md:text-sm mb-3 md:mb-4 uppercase tracking-wider">
                    {member.role}
                  </p>
                  <div className="mt-auto pt-3 md:pt-4 border-t border-white/5">
                    <p className="text-slate-400 text-[10px] md:text-xs uppercase tracking-widest font-bold">
                      {member.designation}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-gold-500/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none mix-blend-screen" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
        >
          <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-white/5 sm:backdrop-blur-md rounded-xl md:rounded-2xl border border-white/10 flex items-center justify-center text-white mb-6 md:mb-8 shadow-sm">
            <Zap className="w-8 h-8 md:w-10 md:h-10 text-gold-400" />
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 md:mb-8 tracking-tight">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500">Build the Future?</span>
          </h2>
          <p className="text-lg md:text-2xl text-slate-300 mb-8 md:mb-12 max-w-2xl mx-auto font-light">
            Join a community of builders, thinkers, and creators. Get access to mentorship, funding, and resources.
          </p>
          <div className="relative inline-block w-full sm:w-auto">
            <div className="absolute inset-0 bg-gold-500/20 blur-lg rounded-full animate-pulse hidden sm:block" />
            <Button href="/contact" size="lg" icon={<ArrowRight size={18} />} className="relative text-base md:text-lg px-8 md:px-10 py-4 md:py-5 w-full sm:w-auto justify-center">
              Apply to Incubator
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
