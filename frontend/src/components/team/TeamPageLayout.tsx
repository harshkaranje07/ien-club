import React from 'react';
import { motion, Variants } from 'framer-motion';
import { TeamMember } from '../../constants/teamData';
import { Card } from '../ui/Card';

interface TeamPageLayoutProps {
  title: string;
  subtitle?: string;
  description?: string;
  members: TeamMember[];
  highlightedMember?: TeamMember;
  children?: React.ReactNode;
}

export const TeamPageLayout = React.memo(function TeamPageLayout({ title, subtitle, description, members, highlightedMember, children }: TeamPageLayoutProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-navy-950 pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] md:h-[500px] bg-gradient-to-b from-gold-900/10 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-20"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 tracking-tight uppercase">
            {title}
          </h1>
          <div className="w-16 md:w-24 h-1 bg-gold-500 mx-auto mb-6" />
          {subtitle && (
            <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto font-light">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="text-slate-300 text-sm md:text-md max-w-3xl mx-auto mt-6 font-light leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>

        {/* Custom Content */}
        {children && (
          <div className="mb-16 md:mb-24">
            {children}
          </div>
        )}

        {/* Highlighted Member (e.g., CEO for CIIL) */}
        {highlightedMember && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 md:mb-16 flex justify-center"
          >
            <Card variant="tech" className="max-w-md w-full p-6 md:p-8 border-gold-500/30 bg-white/5 sm:backdrop-blur-md shadow-md text-center">
              <div className="inline-block px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-bold tracking-widest uppercase mb-4">
                Leadership
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-1">{highlightedMember.name}</h3>
              <p className="text-gold-500 font-medium mb-2">{highlightedMember.role}</p>
              <div className="w-12 h-px bg-gold-500/30 mx-auto my-4" />
              <p className="text-slate-300 text-sm italic">{highlightedMember.designation}</p>
            </Card>
          </motion.div>
        )}

        {/* Members Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {members.filter(m => !m.isHighlight).map((member, index) => (
            <motion.div key={`${member.name}-${index}`} variants={itemVariants}>
              <Card variant="glass-dark" className="h-full p-6 md:p-8 border-white/10 hover:border-gold-500/40 transition-all duration-300 group bg-white/5 sm:backdrop-blur-md shadow-sm">
                <div className="flex flex-col h-full">
                  <h3 className="text-lg md:text-xl font-display font-bold text-white mb-1 group-hover:text-gold-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gold-500/90 text-sm font-medium mb-4">
                    {member.role}
                  </p>
                  <div className="mt-auto pt-4 border-t border-white/10">
                    <p className="text-slate-400 text-[10px] md:text-xs uppercase tracking-widest font-bold">
                      {member.designation}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
});
