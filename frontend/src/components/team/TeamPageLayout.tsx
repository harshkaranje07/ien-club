import React, { useState, useEffect } from 'react';
import { motion, Variants, useReducedMotion } from 'framer-motion';
import { TeamMember } from '../../constants/teamData';
import { Card } from '../ui/Card';
import { BackgroundLayer } from '../ui/BackgroundLayer';

interface TeamPageLayoutProps {
  title: string;
  subtitle?: string;
  description?: string;
  members: TeamMember[];
  highlightedMember?: TeamMember;
  children?: React.ReactNode;
}

function TeamPageLayoutComponent({
  title,
  subtitle,
  description,
  members,
  highlightedMember,
  children
}: TeamPageLayoutProps) {

  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const shouldAnimate = !prefersReducedMotion;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.03 : 0.05
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: isMobile ? 12 : 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-navy-950 pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
      <BackgroundLayer />
      {/* rest of your JSX remains EXACTLY same */}
    </div>
  );
}

export default React.memo(TeamPageLayoutComponent);