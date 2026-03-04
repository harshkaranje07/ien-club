import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { BackgroundLayer } from '../components/ui/BackgroundLayer';
import { StepIndicator } from '../components/ennovatex/StepIndicator';
import { LeaderStep } from '../components/ennovatex/LeaderStep';
import { TeamMembersStep } from '../components/ennovatex/TeamMembersStep';
import api from '../services/api';

export default function RegisterEnnovateX() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    teamName: '',
    leader: {
      fullName: '',
      email: '',
      phone: '',
      branch: '',
      year: '',
      college: ''
    },
    members: [] as any[]
  });

  const handleLeaderChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'teamName') {
      setFormData(prev => ({ ...prev, teamName: value }));
    } else if (name.startsWith('leader.')) {
      const field = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        leader: {
          ...prev.leader,
          [field]: value
        }
      }));
    }
  };

  const handleMemberChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { name, value } = e.target;
    const updatedMembers = [...formData.members];
    updatedMembers[index] = { ...updatedMembers[index], [name]: value };
    setFormData(prev => ({ ...prev, members: updatedMembers }));
  };

  const addMember = () => {
    if (formData.members.length < 4) {
      setFormData(prev => ({
        ...prev,
        members: [...prev.members, { fullName: '', email: '', phone: '', branch: '' }]
      }));
    }
  };

  const removeMember = (index: number) => {
    const updatedMembers = formData.members.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, members: updatedMembers }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      const payload = {
        teamName: formData.teamName,
        teamSize: formData.members.length + 1,
        leader: formData.leader,
        members: formData.members
      };

      await api.post('/ennovatex/register', payload);
      setStatus('success');
    } catch (error: any) {
      console.error('Registration Error:', error);
      setStatus('error');
      setErrorMessage(
        error.response?.data?.message || 
        'An error occurred during registration. Please try again later.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-navy-950 pt-24 md:pt-32 pb-20 md:pb-28 relative overflow-hidden antialiased">
      <BackgroundLayer />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 tracking-tight">
            Register for <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Ennovate'X</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Join the 3-day immersive entrepreneurial experience. Build your team, validate your idea, and pitch to investors.
          </p>
        </motion.div>

        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/5 border border-gold-500/30 rounded-3xl p-10 md:p-16 text-center backdrop-blur-md shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-transparent pointer-events-none" />
            <div className="w-24 h-24 rounded-full bg-gold-500/20 flex items-center justify-center mx-auto mb-8 relative z-10">
              <CheckCircle2 size={48} className="text-gold-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 relative z-10">
              Registration Successful 🎉
            </h2>
            <p className="text-lg text-slate-300 mb-8 relative z-10">
              Your team <strong className="text-gold-400">{formData.teamName}</strong> has been registered for ENNOVATE X.
              A confirmation email will be sent to the team leader shortly.
            </p>
            <button
              onClick={() => window.location.href = '/ciil/ennovatex'}
              className="px-8 py-4 bg-white/10 border border-white/20 text-white font-medium rounded-xl hover:bg-white/20 transition-colors relative z-10"
            >
              Return to Ennovate'X
            </button>
          </motion.div>
        ) : (
          <div className="relative">
            <StepIndicator currentStep={step} />

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-red-400"
              >
                <AlertCircle size={20} className="shrink-0 mt-0.5" />
                <p className="text-sm">{errorMessage}</p>
              </motion.div>
            )}

            <form onSubmit={(e) => e.preventDefault()}>
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <LeaderStep
                    key="step1"
                    formData={formData}
                    handleChange={handleLeaderChange}
                    handleNext={() => setStep(2)}
                  />
                )}
                
                {step === 2 && (
                  <TeamMembersStep
                    key="step2"
                    formData={formData}
                    handleChange={handleMemberChange}
                    addMember={addMember}
                    removeMember={removeMember}
                    handleBack={() => setStep(1)}
                    handleSubmit={handleSubmit}
                    loading={loading}
                  />
                )}
              </AnimatePresence>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
