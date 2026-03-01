import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { AnimatePresence } from 'framer-motion';
import { PageTransition } from './PageTransition';
import { IntroAnimation } from '../ui/IntroAnimation';
import { useState } from 'react';

export function Layout() {
  const location = useLocation();
  const [introComplete, setIntroComplete] = useState(
    () => sessionStorage.getItem('ien_intro_seen') === 'true'
  );
  
  return (
    <div className="min-h-screen flex flex-col font-sans bg-navy-950 text-slate-300 selection:bg-gold-500/30">
      {!introComplete && <IntroAnimation onComplete={() => setIntroComplete(true)} />}
      
      <div className="fixed inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 z-[-1]" />
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow relative z-0">
          <AnimatePresence mode="wait">
            <PageTransition key={location.pathname}>
              <Outlet />
            </PageTransition>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </div>
  );
}
