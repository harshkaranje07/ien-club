import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<"div"> {
  variant?: 'default' | 'glass' | 'glass-dark' | 'gradient' | 'tech';
  gradientColor?: string;
}

export const Card = React.memo(function Card({
  children,
  variant = 'default',
  gradientColor = 'from-navy-800 to-navy-600',
  className = '',
  ...props
}: CardProps) {
  const baseStyles = "rounded-3xl overflow-hidden transition-all duration-300";
  
  const variants = {
    default: "bg-navy-900 border border-white/5 shadow-sm hover:shadow-md",
    glass: "bg-white/5 backdrop-blur-sm sm:backdrop-blur-md border border-white/10 shadow-sm hover:bg-white/10",
    'glass-dark': "bg-navy-900/40 backdrop-blur-sm sm:backdrop-blur-md border border-white/10 shadow-sm hover:border-white/20 hover:bg-navy-900/60",
    gradient: `bg-gradient-to-br ${gradientColor} text-white shadow-md`,
    tech: "bg-navy-900/40 backdrop-blur-sm sm:backdrop-blur-md border border-white/10 shadow-sm hover:shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:border-gold-500/30 relative overflow-hidden group"
  };

  return (
    <motion.div
      whileHover={{ y: -3 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
});
