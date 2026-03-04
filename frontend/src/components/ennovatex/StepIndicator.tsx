import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
}

export function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center mb-12">
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-center">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors duration-300 ${
            currentStep >= 1 ? 'border-gold-500 bg-gold-500/20 text-gold-400' : 'border-neutral-700 text-neutral-500'
          }`}>
            {currentStep > 1 ? <CheckCircle2 size={20} /> : <span className="font-bold">1</span>}
          </div>
          <span className={`text-xs mt-2 uppercase tracking-widest font-bold ${
            currentStep >= 1 ? 'text-gold-400' : 'text-neutral-500'
          }`}>
            Leader
          </span>
        </div>
        
        <div className={`w-16 md:w-24 h-[2px] mb-6 transition-colors duration-300 ${
          currentStep > 1 ? 'bg-gold-500' : 'bg-neutral-800'
        }`} />
        
        <div className="flex flex-col items-center">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors duration-300 ${
            currentStep >= 2 ? 'border-gold-500 bg-gold-500/20 text-gold-400' : 'border-neutral-700 text-neutral-500'
          }`}>
            {currentStep > 2 ? <CheckCircle2 size={20} /> : <span className="font-bold">2</span>}
          </div>
          <span className={`text-xs mt-2 uppercase tracking-widest font-bold ${
            currentStep >= 2 ? 'text-gold-400' : 'text-neutral-500'
          }`}>
            Team
          </span>
        </div>
      </div>
    </div>
  );
}
