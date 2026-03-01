import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { Lightbulb, ShieldCheck, Rocket, Building2, ArrowRight } from 'lucide-react';

const TIMELINE_STEPS = [
  {
    icon: Lightbulb,
    title: "Idea Generation",
    description: "Students and faculty conceptualize innovative solutions to real-world problems.",
    color: "text-amber-400",
    bg: "bg-amber-400/10"
  },
  {
    icon: Building2,
    title: "IIC (Innovation Council)",
    description: "Nurturing ideas through mentorship, hackathons, and prototype development.",
    color: "text-blue-400",
    bg: "bg-blue-400/10"
  },
  {
    icon: ShieldCheck,
    title: "IPR Cell",
    description: "Securing intellectual property rights through patents, copyrights, and designs.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10"
  },
  {
    icon: Rocket,
    title: "CIIL (Incubation)",
    description: "Transforming prototypes into viable startups with funding and industry linkages.",
    color: "text-purple-400",
    bg: "bg-purple-400/10"
  },
  {
    icon: Building2,
    title: "Successful Startup",
    description: "Graduating as an independent, market-ready venture.",
    color: "text-gold-400",
    bg: "bg-gold-400/10"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-navy-950 pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] md:h-[500px] bg-gradient-to-b from-gold-900/10 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-20"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-3 md:mb-4 tracking-tight uppercase">
            About IEN
          </h1>
          <div className="w-16 md:w-24 h-1 bg-gold-500 mx-auto mb-4 md:mb-6" />
          <p className="text-slate-400 text-base md:text-lg max-w-3xl mx-auto font-light leading-relaxed px-4">
            The Innovation and Entrepreneurship Network (IEN) is the umbrella body at PCCOE, orchestrating a seamless ecosystem for innovation, intellectual property, and startup incubation.
          </p>
        </motion.div>

        {/* What is IEN? */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24"
        >
          <Card variant="glass-dark" className="p-6 md:p-12 border-white/10 bg-white/5 sm:backdrop-blur-md">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 md:mb-6 uppercase tracking-wider flex items-center">
              <span className="w-6 md:w-8 h-1 bg-gold-500 mr-3 md:mr-4"></span>
              What is IEN?
            </h2>
            <div className="space-y-4 md:space-y-6 text-slate-300 font-light leading-relaxed text-base md:text-lg">
              <p>
                The Innovation and Entrepreneurship Network (IEN) represents the strategic vision of Pimpri Chinchwad College of Engineering (PCCOE) to cultivate a robust, self-sustaining ecosystem of technological advancement and entrepreneurial success.
              </p>
              <p>
                As an overarching institutional framework, IEN integrates the efforts of three specialized divisions: the Institution's Innovation Council (IIC), the Intellectual Property Rights (IPR) Cell, and the Center for Innovation, Incubation and Linkages (CIIL). Together, they provide a comprehensive support structure that guides students and faculty from the inception of an idea to the establishment of a commercial enterprise.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* How They Work Together */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-8 md:mb-12 text-center uppercase tracking-wider">
            The Innovation Ecosystem
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card variant="tech" className="p-6 md:p-8 border-gold-500/20 bg-navy-900/50 hover:scale-[1.02] transition-transform duration-300">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 md:mb-6">
                <Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">1. Ideation (IIC)</h3>
              <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
                The IIC acts as the catalyst, fostering a culture of innovation through hackathons, workshops, and mentorship. It helps innovators refine their ideas and build initial prototypes.
              </p>
            </Card>

            <Card variant="tech" className="p-6 md:p-8 border-gold-500/20 bg-navy-900/50 hover:scale-[1.02] transition-transform duration-300">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 md:mb-6">
                <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">2. Protection (IPR)</h3>
              <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
                Once a prototype shows promise, the IPR Cell steps in to legally safeguard the innovation, assisting with patent searches, drafting, and filing to ensure intellectual assets are protected.
              </p>
            </Card>

            <Card variant="tech" className="p-6 md:p-8 border-gold-500/20 bg-navy-900/50 hover:scale-[1.02] transition-transform duration-300">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 md:mb-6">
                <Rocket className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">3. Incubation (CIIL)</h3>
              <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
                Protected innovations are then transitioned to CIIL, where they receive pre-incubation and incubation support, industry linkages, and access to funding to launch as successful startups.
              </p>
            </Card>
          </div>
        </motion.div>

        {/* Innovation Lifecycle Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-10 md:mb-16 text-center uppercase tracking-wider">
            Innovation Lifecycle
          </h2>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500/20 via-gold-500/50 to-gold-500/20 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 relative z-10">
              {TIMELINE_STEPS.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${step.bg} border border-white/10 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-105 transition-transform duration-300 shadow-sm sm:backdrop-blur-sm`}>
                    <step.icon className={`w-6 h-6 md:w-8 md:h-8 ${step.color}`} />
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-white mb-2 md:mb-3">{step.title}</h4>
                  <p className="text-xs md:text-sm text-slate-400 font-light leading-relaxed px-2">
                    {step.description}
                  </p>
                  
                  {/* Mobile Arrow */}
                  {index < TIMELINE_STEPS.length - 1 && (
                    <div className="lg:hidden my-4 md:my-6">
                      <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-gold-500/50" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
