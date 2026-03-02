import React from 'react';
import { motion, Variants } from 'motion/react';
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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-navy-950 pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] md:h-[500px] bg-gradient-to-b from-navy-900/50 to-transparent pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 tracking-tight">
            {title}
          </h1>
          <div className="w-12 md:w-16 h-1 bg-gold-500/50 mx-auto mb-6 rounded-full" />
          {subtitle && (
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="text-slate-400 text-base max-w-3xl mx-auto mt-6 font-light leading-relaxed">
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
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-16 md:mb-24 flex justify-center"
          >
            <Card variant="glass-dark" className="max-w-md w-full p-8 border-white/5 bg-white/[0.02] shadow-sm text-center relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 hover:border-gold-500/30">
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
                Leadership
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-semibold text-white mb-2 tracking-tight">{highlightedMember.name}</h3>
              <p className="text-gold-400 font-medium mb-4">{highlightedMember.role}</p>
              <div className="w-12 h-[1px] bg-white/10 mx-auto my-5" />
              <p className="text-slate-400 text-sm font-light tracking-wide uppercase">{highlightedMember.designation}</p>
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
              <Card variant="glass-dark" className="h-full p-6 md:p-8 border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-gold-500/30 transition-all duration-300 group shadow-sm relative overflow-hidden hover:-translate-y-1">
                {/* Subtle hover glow */}
                <div className="absolute inset-0 bg-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                {/* Left accent line */}
                <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-gold-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex flex-col h-full relative z-10">
                  <h3 className="text-lg md:text-xl font-display font-semibold text-white mb-1 group-hover:text-gold-400 transition-colors tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-gold-400/90 text-sm font-medium mb-6">
                    {member.role}
                  </p>
                  <div className="mt-auto pt-5 border-t border-white/5">
                    <p className="text-slate-400 text-[10px] md:text-xs uppercase tracking-widest font-medium">
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
