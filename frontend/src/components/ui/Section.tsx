import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  variant?: 'default' | 'dark' | 'light' | 'gradient';
}

export function Section({
  id,
  children,
  className = '',
  containerClassName = '',
  variant = 'default'
}: SectionProps) {
  const variants = {
    default: "bg-navy-950",
    light: "bg-navy-900/50",
    dark: "bg-navy-950",
    gradient: "bg-gradient-to-b from-navy-950 to-navy-900"
  };

  return (
    <section id={id} className={`py-24 md:py-32 relative ${variants[variant]} ${className}`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  align = 'center',
  className = ''
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
}) {
  const alignments = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto"
  };

  return (
    <div className={`max-w-3xl mb-16 md:mb-24 ${alignments[align]} ${className}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 text-white"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl text-slate-400 leading-relaxed font-light"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
