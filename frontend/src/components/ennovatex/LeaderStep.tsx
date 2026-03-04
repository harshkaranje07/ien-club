import React from 'react';
import { motion } from 'framer-motion';

interface LeaderStepProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleNext: () => void;
}

export function LeaderStep({ formData, handleChange, handleNext }: LeaderStepProps) {
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.teamName.trim()) newErrors.teamName = 'Team Name is required';
    if (!formData.leader.fullName.trim()) newErrors.fullName = 'Leader Name is required';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.leader.email.trim() || !emailRegex.test(formData.leader.email)) {
      newErrors.email = 'Valid Email is required';
    }
    
    const phoneRegex = /^\d{10}$/;
    if (!formData.leader.phone.trim() || !phoneRegex.test(formData.leader.phone)) {
      newErrors.phone = 'Valid 10-digit Phone is required';
    }
    
    if (!formData.leader.college.trim()) newErrors.college = 'College is required';
    if (!formData.leader.branch.trim()) newErrors.branch = 'Branch/Program is required';
    if (!formData.leader.year.trim()) newErrors.year = 'Year is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onNextClick = () => {
    if (validate()) {
      handleNext();
    }
  };

  const inputClass = "w-full p-4 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-all placeholder:text-neutral-600";
  const errorClass = "text-red-400 text-xs mt-1 ml-1";

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="space-y-6"
    >
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
        <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-gold-500/20 text-gold-400 flex items-center justify-center text-sm">1</span>
          Team Information
        </h3>
        
        <div>
          <label className="block text-sm font-medium text-neutral-400 mb-2">Team Name *</label>
          <input
            type="text"
            name="teamName"
            value={formData.teamName}
            onChange={handleChange}
            placeholder="Enter your team name"
            className={inputClass}
          />
          {errors.teamName && <p className={errorClass}>{errors.teamName}</p>}
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
        <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-gold-500/20 text-gold-400 flex items-center justify-center text-sm">2</span>
          Leader Details
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">Full Name *</label>
            <input
              type="text"
              name="leader.fullName"
              value={formData.leader.fullName}
              onChange={handleChange}
              placeholder="Leader's full name"
              className={inputClass}
            />
            {errors.fullName && <p className={errorClass}>{errors.fullName}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">Email Address *</label>
            <input
              type="email"
              name="leader.email"
              value={formData.leader.email}
              onChange={handleChange}
              placeholder="Leader's email"
              className={inputClass}
            />
            {errors.email && <p className={errorClass}>{errors.email}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">Phone Number *</label>
            <input
              type="tel"
              name="leader.phone"
              value={formData.leader.phone}
              onChange={handleChange}
              placeholder="10-digit phone number"
              maxLength={10}
              className={inputClass}
            />
            {errors.phone && <p className={errorClass}>{errors.phone}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">College *</label>
            <input
              type="text"
              name="leader.college"
              value={formData.leader.college}
              onChange={handleChange}
              placeholder="College name"
              className={inputClass}
            />
            {errors.college && <p className={errorClass}>{errors.college}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">Branch / Program *</label>
            <input
              type="text"
              name="leader.branch"
              value={formData.leader.branch}
              onChange={handleChange}
              placeholder="e.g., Computer Engineering, MBA"
              className={inputClass}
            />
            {errors.branch && <p className={errorClass}>{errors.branch}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">Year of Study *</label>
            <select
              name="leader.year"
              value={formData.leader.year}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="" disabled>Select Year</option>
              <option value="First Year">First Year</option>
              <option value="Second Year">Second Year</option>
              <option value="Third Year">Third Year</option>
              <option value="Final Year">Final Year</option>
            </select>
            {errors.year && <p className={errorClass}>{errors.year}</p>}
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <button
          type="button"
          onClick={onNextClick}
          className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-gold-500 text-black font-bold rounded-xl hover:scale-105 transition-transform shadow-[0_0_20px_rgba(212,175,55,0.3)]"
        >
          Next Step
        </button>
      </div>
    </motion.div>
  );
}
