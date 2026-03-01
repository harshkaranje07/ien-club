import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children?: React.ReactNode;
  className?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  icon,
  iconPosition = 'right',
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-to-r from-gold-400 to-gold-600 text-navy-950 font-bold shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] hover:scale-[1.03]",
    secondary: "bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 shadow-glass hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:scale-[1.03]",
    outline: "border-2 border-gold-500/50 text-gold-400 hover:border-gold-500 hover:text-navy-950 hover:bg-gold-500",
    ghost: "text-slate-300 hover:text-gold-400 hover:bg-white/5",
    glass: "bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-white/10 shadow-glass hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:border-gold-500/30 hover:scale-[1.03]"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg font-semibold"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </>
  );

  if (href) {
    if (href.startsWith('#')) {
      return (
        <a 
          href={href} 
          className={combinedClassName}
          onClick={(e) => {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          {content}
        </a>
      );
    }
    return (
      <Link to={href} className={combinedClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {content}
    </button>
  );
}
