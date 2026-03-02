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
  const baseStyles = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 ease-out rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-1";
  
  const variants = {
    primary: "bg-gradient-to-r from-gold-400 to-gold-600 text-navy-950 font-bold shadow-sm hover:shadow-md",
    secondary: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 shadow-sm",
    outline: "border border-gold-500/50 text-gold-400 hover:border-gold-500 hover:text-navy-950 hover:bg-gold-500",
    ghost: "text-slate-300 hover:text-gold-400 hover:bg-white/5",
    glass: "bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 shadow-sm hover:border-gold-500/30"
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
    if (href.startsWith('/#')) {
      return (
        <Link 
          to={href} 
          className={combinedClassName}
          onClick={(e) => {
            if (window.location.pathname === '/') {
              e.preventDefault();
              const targetId = href.substring(2);
              const element = document.getElementById(targetId);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                window.history.pushState(null, '', href);
              }
            }
          }}
        >
          {content}
        </Link>
      );
    }
    if (href.startsWith('#')) {
      return (
        <a 
          href={href} 
          className={combinedClassName}
          onClick={(e) => {
            e.preventDefault();
            const targetId = href.substring(1);
            const element = document.getElementById(targetId);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
              window.history.pushState(null, '', href);
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
