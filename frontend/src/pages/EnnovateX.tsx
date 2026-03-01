import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Users, Target, Lightbulb, Rocket, Presentation, Award, CheckCircle2, ChevronDown, Zap, ShieldCheck, Briefcase, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Section } from '../components/ui/Section';

const eventFlow = [
  {
    day: 'DAY 1',
    title: 'IDEATE & FORM',
    desc: 'A day of discovery where ideas are spoken aloud and teams form around belief.',
    points: [
      'Idea pitching (60–90 seconds)',
      'Audience voting',
      'Idea shortlisting',
      'Team formation',
      'Mentor onboarding',
      'Problem validation'
    ],
    outcome: '~20–25 startup teams formed',
    icon: Lightbulb
  },
  {
    day: 'DAY 2',
    title: 'BUILD & VALIDATE',
    desc: 'Sharpen thinking through execution, exposure, and expert insight.',
    points: [
      'MVP Development',
      'Customer discovery',
      'Market validation',
      'Structured workshop session',
      'Entrepreneur keynote',
      'Live Q&A'
    ],
    outcome: 'Execution + Exposure + Expert Guidance',
    icon: Rocket
  },
  {
    day: 'DAY 3',
    title: 'PITCH & SCALE',
    desc: 'A day where stories meet substance and effort meets evaluation.',
    points: [
      'Pitch deck refinement',
      'Mock pitching sessions',
      '5-minute final pitch + Q&A',
      'Evaluation by judges',
      'Awards & recognition'
    ],
    outcome: 'Top startups ready for incubation & mentorship',
    icon: Presentation
  }
];

const gains = [
  'Real Startup Ecosystem Exposure',
  'Networking with Founders & Investors',
  'Incubation & Mentorship Continuity',
  'Investor Visibility',
  'Market Validation Experience',
  'Confidence in Execution',
  'Industry-Level Feedback'
];

const whyMatters = [
  'Problem-first thinking',
  'Team synergy',
  'Mentor-driven corrections',
  'Real-world pitching exposure',
  'Market feasibility focus'
];

const faqs = [
  {
    q: 'Do I need a startup idea beforehand?',
    a: 'No, you can join a team whose idea you believe in during the Day 1 pitching and voting session. If you have an idea, you can pitch it and form a team around it.'
  },
  {
    q: 'Can I participate individually?',
    a: 'Ennovate’X is a team-based event. You must form or join a team of 4–5 members on Day 1 to proceed to the next stages.'
  },
  {
    q: 'What happens after the event?',
    a: 'Top performing teams will be selected for incubation support, continuous mentorship, and potential funding opportunities through CIIL and our partner networks.'
  },
  {
    q: 'Is there mentorship after Day 3?',
    a: 'Yes, selected startups will receive ongoing mentorship to help them build their MVP, acquire early customers, and prepare for seed funding.'
  },
  {
    q: 'Are certificates provided?',
    a: 'Yes, all participants who complete the 3-day immersive experience will receive a certificate of participation, and winning teams will receive special recognition.'
  }
];

export default function EnnovateX() {
  const [expandedDay, setExpandedDay] = useState<number | null>(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showDifferent, setShowDifferent] = useState(false);

  return (
    <div className="overflow-x-hidden relative bg-black min-h-screen pt-20 font-sans">
      {/* Base Gradient Layer */}
      <div className="absolute inset-0 bg-black z-0 pointer-events-none" />

      {/* Global Floating Particles */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute w-1 h-1 md:w-1.5 md:h-1.5 bg-gold-400/15 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ 
              y: [0, -60, 0],
              x: [0, 30, 0],
              opacity: [0.05, 0.2, 0.05]
            }}
            transition={{ 
              duration: 15 + Math.random() * 20, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-32">
        {/* Spotlight Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none z-0 mix-blend-screen" />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center mb-8"
          >
            <span className="text-[10px] md:text-xs text-gold-500/80 uppercase tracking-[0.3em] font-bold mb-2">A Flagship Initiative of</span>
            <span className="text-xs md:text-sm text-gold-400 uppercase tracking-widest font-medium">CIIL — Center for Innovation & Industry Linkage</span>
            <span className="text-[10px] md:text-xs text-gold-500/60 uppercase tracking-[0.3em] font-bold mt-2">IEN PCCOE</span>
            <div className="w-12 h-[1px] bg-gold-500/50 mt-4" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 relative"
          >
            <motion.h1 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="text-6xl md:text-8xl lg:text-[9rem] font-display font-bold tracking-tighter mb-6 leading-[1] relative z-10 group"
            >
              <span className="relative inline-block">
                <span className="text-white tracking-wide drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">ENNOVATE</span>
                <span className="bg-gradient-to-r from-yellow-400 via-gold-500 to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(212,175,55,0.35)]">’X</span>
                
                {/* Shimmer Sweep */}
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none mix-blend-overlay"
                />
              </span>
            </motion.h1>
            <h3 className="text-2xl md:text-3xl font-display font-light text-slate-300 tracking-[0.3em] uppercase mt-8">
              IEN Startup Fest
            </h3>
            <div className="h-[2px] w-[120px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-6" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-8 inline-block"
          >
            <p className="text-base md:text-lg text-gold-400 font-medium tracking-[0.2em] uppercase drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]">
              From Idea <span className="font-light opacity-70 mx-1">→</span> MVP <span className="font-light opacity-70 mx-1">→</span> Market <span className="font-light opacity-70 mx-1">→</span> Pitch <span className="font-light opacity-70 mx-1">→</span> Launch
            </p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
              className="absolute -bottom-3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent origin-left"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-[#d1d5db] max-w-2xl mx-auto mb-14 font-light leading-loose opacity-85"
          >
            A 3-Day Immersive Entrepreneurial Experience Designed to Transform Students into Startup Founders.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            <Button href="#register" size="lg" className="bg-gradient-to-r from-yellow-400 to-gold-500 text-black border-none hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 font-bold px-10 py-4">
              Register Now
            </Button>
            <Button href="#flow" variant="glass" size="lg" className="bg-black/20 border-gold-500/30 text-gold-400 hover:bg-gold-500/10 hover:border-gold-500/50 transition-all duration-300 px-10 py-4">
              View Event Structure
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-16 flex flex-col items-center gap-3 text-gold-500/50"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Scroll</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-gold-500/50 to-transparent relative overflow-hidden">
              <motion.div 
                animate={{ y: [0, 64, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full h-1/2 bg-gold-400"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CIIL Logical Hierarchy Section */}
      <Section className="relative z-20 pt-16 pb-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row gap-12 items-center"
          >
            {/* Structured Flow Visual */}
            <div className="flex flex-col items-center shrink-0">
              <div className="text-xs text-slate-400 tracking-widest uppercase font-bold">IEN PCCOE</div>
              <div className="w-[1px] h-8 bg-gradient-to-b from-slate-500 to-gold-500 my-2" />
              <div className="text-sm text-gold-400 tracking-widest uppercase font-bold">CIIL</div>
              <div className="w-[1px] h-8 bg-gradient-to-b from-gold-500 to-gold-300 my-2" />
              <div className="text-base text-white tracking-widest uppercase font-bold">Ennovate’X</div>
            </div>
            
            {/* Content */}
            <div className="border-l-2 border-gold-500/30 pl-8 relative">
              <div className="absolute -left-[2px] top-0 w-[2px] h-12 bg-gold-400" />
              <div className="absolute top-0 left-0 w-32 h-32 bg-gold-500/10 blur-[40px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 relative z-10">Powered by CIIL</h2>
              <h3 className="text-gold-500/80 text-sm md:text-base tracking-widest uppercase mb-6 relative z-10">Center for Innovation & Industry Linkage</h3>
              <p className="text-slate-400 font-light leading-relaxed relative z-10">
                Ennovate’X is conducted under CIIL, the innovation and industry collaboration wing of IEN PCCOE. CIIL focuses on bridging academia with industry, enabling real-world exposure, startup validation, and entrepreneurial mentorship.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* About Section */}
      <Section className="relative z-20 pt-24 pb-24 border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gold-500/5 blur-[150px] pointer-events-none mix-blend-screen z-0" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Ennovate’X</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-300 font-light leading-relaxed">
              <p>
                Ennovate’X is a 3-day immersive startup sprint designed to simulate the real-world entrepreneurial journey. Participants move from raw idea validation to structured pitch delivery under mentor supervision.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {[
                  '60–90 second idea pitching round',
                  'Real-time audience voting',
                  'Startup team formation (4–5 members)',
                  'Mentor allocation',
                  'MVP building',
                  'Validation workshops',
                  'Entrepreneur keynote',
                  'Final pitch to panel'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg p-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                    <span className="text-slate-200 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <button 
                  onClick={() => setShowDifferent(!showDifferent)}
                  className="flex items-center gap-2 text-gold-400 font-bold uppercase tracking-wider text-sm hover:text-gold-300 transition-colors"
                >
                  <ChevronRight className={`transition-transform duration-300 ${showDifferent ? 'rotate-90' : ''}`} size={18} />
                  What Makes It Different?
                </button>
                <AnimatePresence>
                  {showDifferent && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 pb-2 text-slate-400 text-base">
                        Unlike conventional hackathons that focus purely on coding, Ennovate’X is a holistic business building experience. It forces you to think about customer acquisition, market sizing, revenue models, and the actual feasibility of your idea before you write a single line of code. It's not just about building a product; it's about building a company.
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Eligibility Section */}
      <Section className="relative z-20 pt-12 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="bg-black border border-gold-500/40 rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(212,175,55,0.15)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white flex items-center gap-4">
                <ShieldCheck className="text-gold-400" size={36} />
                Eligibility Criteria
              </h2>
              <div className="flex flex-col items-end">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-sm font-bold tracking-wide shadow-[0_0_15px_rgba(212,175,55,0.2)] mb-2">
                  Limited Seats
                </span>
                <span className="text-xs text-slate-500 uppercase tracking-widest">Shortlisting After Day 1</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Only Undergraduate Students',
                'Engineering | Management | Design',
                'Team Size: 4–5 Members',
                'Open to early-stage ideas',
                'Cross-domain collaboration encouraged'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="text-gold-500 shrink-0 mt-0.5" size={20} />
                  <span className="text-lg text-slate-200 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* 3-Day Experience Timeline */}
      <Section id="flow" className="relative z-20 pt-24 pb-32 border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-gold-500/5 blur-[150px] pointer-events-none mix-blend-screen z-0" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              3-Day <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Experience</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {eventFlow.map((day, index) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${expandedDay === index ? 'bg-white/5 border-gold-500/40 shadow-[0_0_30px_rgba(212,175,55,0.1)]' : 'bg-black border-white/10 hover:border-white/20'}`}
              >
                <button 
                  onClick={() => setExpandedDay(expandedDay === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${expandedDay === index ? 'bg-gold-500 text-black' : 'bg-white/5 text-gold-400 border border-white/10'}`}>
                      <day.icon size={24} />
                    </div>
                    <div>
                      <div className="text-gold-400 font-bold tracking-widest text-sm mb-1">{day.day}</div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-white flex items-center gap-3">
                        {day.title}
                        {index === 2 && <Award className="text-gold-500" size={24} />}
                      </h3>
                    </div>
                  </div>
                  <ChevronDown className={`text-slate-400 transition-transform duration-300 ${expandedDay === index ? 'rotate-180 text-gold-400' : ''}`} size={24} />
                </button>

                <AnimatePresence>
                  {expandedDay === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 pt-2">
                        <div className="pl-0 md:pl-18">
                          <div className="relative pl-6 border-l-2 border-gold-500/30">
                            <ul className="space-y-4 mb-8">
                              {day.points.map((point, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-300 text-lg">
                                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0 mt-2.5" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="bg-black/50 border border-gold-500/20 rounded-xl p-4 inline-block">
                              <div className="text-xs text-gold-500/70 uppercase tracking-widest mb-1 font-bold">Outcome</div>
                              <div className="text-gold-400 font-medium text-lg">{day.outcome}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* What Students Gain */}
      <Section className="relative z-20 pt-24 pb-32 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              What You <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Gain</span> from Ennovate’X
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gains.map((gain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-black border border-white/10 rounded-2xl p-6 hover:border-gold-500/40 hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 mb-6 group-hover:bg-gold-500/10 group-hover:text-gold-400 group-hover:border-gold-500/30 transition-all duration-300">
                  <Zap size={20} />
                </div>
                <h3 className="text-xl font-semibold text-slate-200 group-hover:text-white transition-colors">{gain}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why Ennovate'X Matters */}
      <Section className="relative z-20 pt-24 pb-32 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="bg-black border border-white/10 rounded-3xl p-8 md:p-16 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />
            
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Why Ennovate’X Matters
            </h2>
            <p className="text-lg text-slate-400 font-light mb-10 max-w-3xl leading-relaxed">
              Unlike conventional hackathons, Ennovate’X focuses on structured startup validation, mentorship integration, and real pitch preparedness.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyMatters.map((matter, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-gold-500 rounded-full shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                  <span className="text-lg text-slate-200 font-medium">{matter}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="relative z-20 pt-24 pb-32 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-white/10 rounded-xl bg-black overflow-hidden hover:border-white/20 transition-colors"
              >
                <button 
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4"
                >
                  <span className={`text-lg font-medium transition-colors ${expandedFaq === index ? 'text-gold-400' : 'text-slate-200'}`}>
                    {faq.q}
                  </span>
                  <ChevronDown className={`text-slate-400 shrink-0 transition-transform duration-300 ${expandedFaq === index ? 'rotate-180 text-gold-400' : ''}`} size={20} />
                </button>
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-slate-400 text-base leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Registration CTA */}
      <section id="register" className="py-32 relative overflow-hidden bg-black border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center border border-gold-500/30 rounded-3xl p-12 md:p-16 bg-black shadow-[0_0_50px_rgba(212,175,55,0.1)]"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 tracking-tight">
            Registrations Open
          </h2>
          <p className="text-xl text-gold-400 font-medium mb-10 tracking-wide">
            Exclusively for Undergraduate Students.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-slate-300">
              <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
              <span>Limited seats</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
              <span>Competitive selection</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
              <span>Structured 3-Day immersive journey</span>
            </div>
          </div>

          <div className="relative inline-block">
            <Button href="#" size="lg" className="relative text-lg px-12 py-6 bg-gradient-to-r from-yellow-400 to-gold-500 text-black font-bold hover:brightness-110 shadow-[0_0_30px_rgba(212,175,55,0.4)] border-none transition-all duration-300 hover:scale-105">
              Register for Ennovate’X
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Footer Authority Line */}
      <div className="border-t border-white/5 py-8 text-center bg-black relative z-10">
        <p className="text-xs md:text-sm text-gold-500/60 uppercase tracking-widest font-medium">
          An Official Flagship Innovation Session Under CIIL – IEN PCCOE
        </p>
      </div>
    </div>
  );
}
