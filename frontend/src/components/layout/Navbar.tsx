import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";

const divisions = [
  { name: "IIC", path: "/divisions/iic", desc: "Institution Innovation Council" },
  { name: "IPR", path: "/divisions/ipr", desc: "Intellectual Property Rights" },
  { name: "CIIL", path: "/divisions/ciil", desc: "Center for Innovation & Industry Linkage" },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Events", path: "/events" },
  { name: "Team", path: "/team" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);
  const location = useLocation();

  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(false);
  }, [location]);

  const navClass = scrolled
    ? "bg-navy-900/90 border-b border-white/10 py-3"
    : "bg-navy-900/80 border-b border-white/10 py-5";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${navClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* ================= LOGO SECTION ================= */}
          <Link to="/" className="flex items-center gap-3">

            {/* IEN Logo */}
            <img
              src="/logo.png"
              alt="IEN Logo"
              className={`transition-all duration-300 ${
                scrolled ? "h-9 w-9" : "h-10 w-10"
              }`}
              loading="eager"
            />

            {/* Divider */}
            <div className="w-[1px] h-6 bg-white/20" />

            {/* PCCOE Logo */}
            <img
              src="/college.png"
              alt="PCCOE Logo"
              className={`transition-all duration-300 ${
                scrolled ? "h-9 w-9" : "h-10 w-10"
              }`}
              loading="eager"
            />

            {/* Text */}
            <span
              className={`font-bold text-white transition-all duration-300 ${
                scrolled ? "text-lg" : "text-xl"
              }`}
            >
              IEN <span className="text-gold-500">PCCOE</span>
            </span>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-semibold transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Divisions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown(true)}
              onMouseLeave={() => setActiveDropdown(false)}
            >
              <button className="flex items-center gap-1 text-sm font-semibold text-slate-300 hover:text-white">
                Divisions <ChevronDown size={14} />
              </button>

              <AnimatePresence>
                {activeDropdown && (
                  <motion.div
                    initial={!isMobile ? { opacity: 0, y: 10 } : undefined}
                    animate={!isMobile ? { opacity: 1, y: 0 } : undefined}
                    exit={!isMobile ? { opacity: 0, y: 10 } : undefined}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-3 w-64 bg-navy-900 border border-white/10 rounded-lg shadow-lg p-2"
                  >
                    {divisions.map((div) => (
                      <Link
                        key={div.name}
                        to={div.path}
                        className="block p-3 rounded-md hover:bg-white/5 transition"
                      >
                        <div className="font-semibold text-white">
                          {div.name}
                        </div>
                        <div className="text-xs text-slate-400">
                          {div.desc}
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Button href="/exams" variant="glass" size="sm">
              Exams Portal
            </Button>
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE NAV ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={!isMobile ? { opacity: 0, height: 0 } : undefined}
            animate={!isMobile ? { opacity: 1, height: "auto" } : undefined}
            exit={!isMobile ? { opacity: 0, height: 0 } : undefined}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-navy-900 border-b border-white/10"
          >
            <div className="px-4 py-6 space-y-4">

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-white font-semibold"
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-4">
                <Button href="/exams" className="w-full">
                  Exams Portal
                </Button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}