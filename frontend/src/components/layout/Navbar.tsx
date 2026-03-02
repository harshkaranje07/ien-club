import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Rocket } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
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
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  const shouldAnimate = !prefersReducedMotion && !isMobile;

  const navClass = scrolled 
    ? `bg-navy-950/80 backdrop-blur-md border-b border-white/10 shadow-sm py-3` 
    : `bg-navy-950/40 backdrop-blur-md border-b border-white/10 py-5`;

  const linkClass = 'text-slate-200 hover:text-gold-400 transition-colors duration-300 tracking-wide';

  const logoTextClass = 'text-white';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${navClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`rounded-lg flex items-center justify-center overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] bg-white border border-white/10 shadow-sm ${scrolled ? 'h-9 w-9' : 'h-10 w-10'}`}>
              <img 
                src="/logo.png" 
                alt="IEN Logo" 
                className="w-full h-full object-contain p-1"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/ien/48/48';
                }}
              />
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
                  className={`relative py-2 text-sm font-medium transition-colors group ${linkClass} ${isActive ? 'text-gold-400' : ''}`}
                >
                  {link.name}
                  <span className={`absolute left-0 bottom-0 w-full h-[1px] bg-gold-500 origin-left transition-transform duration-300 ease-out ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                </Link>
              );
            })}

            {/* Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown(true)}
              onMouseLeave={() => setActiveDropdown(false)}
            >
              <button className={`relative flex items-center gap-1 text-sm font-medium transition-colors py-2 group ${linkClass} ${location.pathname.startsWith('/divisions') ? 'text-gold-400' : ''}`}>
                Divisions <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown ? 'rotate-180' : ''}`} />
                <span className={`absolute left-0 bottom-0 w-full h-[1px] bg-gold-500 origin-left transition-transform duration-300 ease-out ${activeDropdown || location.pathname.startsWith('/divisions') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-72"
                  >
                    <div className={`backdrop-blur-xl rounded-xl shadow-2xl border overflow-hidden p-2 bg-navy-950/95 border-white/10`}>
                      {divisions.map((div) => (
                        <Link
                          key={div.name}
                          to={div.path}
                          className={`block p-4 rounded-lg transition-all duration-300 group hover:bg-white/5`}
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
                  className={`relative py-2 text-sm font-medium transition-colors group ${linkClass} ${isActive ? 'text-gold-400' : ''}`}
                >
                  {link.name}
                  <span className={`absolute left-0 bottom-0 w-full h-[1px] bg-gold-500 origin-left transition-transform duration-300 ease-out ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                </Link>
              );
            })}

            <Link
              to="/ciil/ennovatex"
              className={`relative flex items-center gap-3 px-4 py-2 transition-all duration-300 group ml-2 ${
                location.pathname === '/ciil/ennovatex'
                  ? 'bg-gold-500/5 rounded-lg'
                  : ''
              }`}
            >
              <span className={`w-1.5 h-1.5 bg-gold-500 rounded-full ${shouldAnimate ? 'animate-pulse' : ''} shrink-0`} />
              <div className="flex flex-col">
                <span className="text-[8px] leading-none tracking-[0.2em] uppercase text-gold-500/60 font-bold mb-1">
                  CIIL Presents
                </span>
                <span className="text-gold-400 font-bold text-sm leading-none group-hover:text-gold-300 transition-colors">
                  ENNOVATE’X
                </span>
              </div>
              <span className={`absolute left-0 bottom-0 w-full h-[1px] bg-gold-500 origin-left transition-transform duration-300 ease-out ${location.pathname === '/ciil/ennovatex' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`md:hidden backdrop-blur-md border-b bg-navy-900/95 border-white/10`}
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
                  <span className="w-2 h-2 bg-gold-500 rounded-full shrink-0" />
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
