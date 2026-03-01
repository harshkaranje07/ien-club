import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';

const divisions = [
  { name: 'IIC', path: '/divisions/iic', desc: 'Institution Innovation Council' },
  { name: 'IPR', path: '/divisions/ipr', desc: 'Intellectual Property Rights' },
  { name: 'CIIL', path: '/divisions/ciil', desc: 'Center for Innovation & Industry Linkage' },
];

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Events', path: '/events' },
  { name: 'Team', path: '/team' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(false);
  }, [location]);

  const navClass = scrolled 
    ? 'bg-navy-900/70 backdrop-blur-xl border-b border-white/10 shadow-lg py-3' 
    : 'bg-navy-900/60 backdrop-blur-xl border-b border-white/10 shadow-md py-6';

  const linkClass = 'text-slate-200 hover:text-white';

  const logoTextClass = 'text-white';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${navClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="flex items-center gap-3">
              <div className={`rounded-full flex items-center justify-center overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] bg-white border border-slate-200 shadow-sm group-hover:shadow-md ${scrolled ? 'h-10 w-10' : 'h-11 w-11'}`}>
                <img 
                  src="/logo.png" 
                  alt="IEN Logo" 
                  className="w-full h-full object-contain p-1"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/ien/48/48';
                  }}
                />
              </div>
              <div className={`w-[1px] transition-all duration-500 ${scrolled ? 'h-6 bg-slate-300' : 'h-8 bg-white/20'}`} />
              <div className={`rounded-full flex items-center justify-center overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] bg-white border border-slate-200 shadow-sm group-hover:shadow-md ${scrolled ? 'h-10 w-10' : 'h-11 w-11'}`}>
                <img 
                  src="/college.png" 
                  alt="PCCOE Logo" 
                  className="w-full h-full object-contain p-1"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/pccoe/48/48';
                  }}
                />
              </div>
            </div>
            <span className={`font-display font-bold tracking-tight transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${logoTextClass} ${scrolled ? 'text-lg' : 'text-xl'}`}>
              IEN <span className="text-gold-500">PCCOE</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, 2).map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative py-2 text-sm font-semibold transition-colors group ${linkClass} ${isActive ? 'text-white' : ''}`}
                >
                  {link.name}
                  <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-gold-500 origin-left transition-transform duration-300 ease-out ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                  <span className={`absolute inset-0 bg-gold-400/20 blur-md rounded-full -z-10 opacity-0 transition-opacity duration-300 ${isActive ? 'opacity-50' : 'group-hover:opacity-100'}`} />
                </Link>
              );
            })}

            {/* Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown(true)}
              onMouseLeave={() => setActiveDropdown(false)}
            >
              <button className={`relative flex items-center gap-1 text-sm font-semibold transition-colors py-2 group ${linkClass} ${location.pathname.startsWith('/divisions') ? 'text-white' : ''}`}>
                Divisions <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown ? 'rotate-180' : ''}`} />
                <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-gold-500 origin-left transition-transform duration-300 ease-out ${activeDropdown || location.pathname.startsWith('/divisions') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                <span className={`absolute inset-0 bg-gold-400/20 blur-md rounded-full -z-10 opacity-0 transition-opacity duration-300 ${activeDropdown || location.pathname.startsWith('/divisions') ? 'opacity-50' : 'group-hover:opacity-100'}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-72"
                  >
                    <div className={`backdrop-blur-xl rounded-2xl shadow-2xl border overflow-hidden p-2 ring-1 bg-navy-900/95 border-white/10 ring-white/5`}>
                      {divisions.map((div) => (
                        <Link
                          key={div.name}
                          to={div.path}
                          className={`block p-4 rounded-xl transition-all duration-300 group hover:bg-white/5`}
                        >
                          <div className={`font-display font-bold transition-colors mb-1 text-white group-hover:text-gold-400`}>
                            {div.name}
                          </div>
                          <div className={`text-xs leading-relaxed text-slate-400`}>{div.desc}</div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(2).map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative py-2 text-sm font-semibold transition-colors group ${linkClass} ${isActive ? 'text-white' : ''}`}
                >
                  {link.name}
                  <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-gold-500 origin-left transition-transform duration-300 ease-out ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                  <span className={`absolute inset-0 bg-gold-400/20 blur-md rounded-full -z-10 opacity-0 transition-opacity duration-300 ${isActive ? 'opacity-50' : 'group-hover:opacity-100'}`} />
                </Link>
              );
            })}

            <Link
              to="/ciil/ennovatex"
              className={`relative flex items-center gap-3 px-4 py-2 transition-all duration-300 group ml-2 ${
                location.pathname === '/ciil/ennovatex'
                  ? 'bg-gold-500/10 rounded-md shadow-[0_0_20px_rgba(212,175,55,0.15)]'
                  : ''
              }`}
            >
              <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(212,175,55,0.6)] shrink-0" />
              <div className="flex flex-col">
                <span className="text-[9px] leading-none tracking-widest uppercase text-gold-500/70 font-bold mb-1">
                  CIIL Presents
                </span>
                <span className="text-gold-400 font-bold text-sm leading-none group-hover:text-gold-300 transition-colors group-hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]">
                  ENNOVATE’X
                </span>
              </div>
              <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-gold-500 origin-left transition-transform duration-300 ease-out ${location.pathname === '/ciil/ennovatex' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </Link>

            <div className="flex items-center gap-4 ml-2">
              <Button href="/exams" variant="glass" size="sm">
                Exams Portal
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors text-white`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden backdrop-blur-xl border-b overflow-hidden bg-navy-900/95 border-white/10`}
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block text-base font-semibold text-white`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="py-2">
                <div className="text-xs font-bold text-gold-500 uppercase tracking-wider mb-3">Divisions</div>
                <div className={`space-y-3 pl-4 border-l-2 border-white/10`}>
                  {divisions.map((div) => (
                    <div key={div.name}>
                      <Link
                        to={div.path}
                        className={`block text-base font-semibold text-white`}
                      >
                        {div.name} <span className={`text-xs font-normal ml-2 text-slate-400`}>{div.desc}</span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block text-base font-semibold text-white`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="py-2">
                <Link
                  to="/ciil/ennovatex"
                  className="flex items-center gap-3 p-3 bg-gold-500/10 rounded-lg border border-gold-500/20"
                >
                  <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-gold-500/80 font-bold mb-0.5">CIIL Presents</span>
                    <span className="text-gold-400 font-bold text-base">ENNOVATE’X</span>
                  </div>
                </Link>
              </div>

              <div className="pt-4">
                <Button href="/exams" variant="primary" className="w-full">
                  Online Exams Portal
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
