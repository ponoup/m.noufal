import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ isDark, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Beranda', href: '#home' },
    { label: 'Get to know me⚡', href: '#about' },
    { label: 'Academic Skills🔥', href: '#skills' },
    { label: 'favorite songs🎵', href: '#projects' },
    { label: 'Get in Touch', href: 'https://wa.me/6285373819128' },
  ];

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(href, '_blank');
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? `backdrop-blur-xl 
               bg-gradient-to-r 
               from-[#020617]/95 via-[#0f172a]/95 to-[#1e293b]/95 
               border-b border-blue-500/20 
               shadow-[0_4px_30px_rgba(0,0,0,0.6)]`
            : `backdrop-blur-xl 
               bg-gradient-to-r 
               from-[#e2e8f0]/95 via-[#cbd5f5]/95 to-[#94a3b8]/95 
               border-b border-slate-400/30 
               shadow-[0_4px_20px_rgba(0,0,0,0.15)]`
          : isDark
          ? `bg-gradient-to-r 
             from-[#020617]/80 via-[#0f172a]/70 to-[#1e293b]/70`
          : `bg-gradient-to-r 
             from-[#f1f5f9]/80 via-[#e2e8f0]/80 to-[#cbd5f5]/70`
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* LOGO */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className={`text-xl md:text-2xl font-bold cursor-pointer ${
              isDark
                ? 'bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-400 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-blue-500 via-indigo-500 to-slate-500 bg-clip-text text-transparent'
            }`}
            whileHover={{ scale: 1.1 }}
          >
            Noufal's Portfolio
          </motion.a>

          {/* DESKTOP */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`relative font-medium transition-all ${
                  isDark
                    ? 'text-slate-200 hover:text-blue-400'
                    : 'text-slate-700 hover:text-blue-500'
                }`}
                whileHover={{ y: -2 }}
              >
                {item.label}

                <span
                  className={`absolute left-0 -bottom-1 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                    isDark ? 'bg-blue-400' : 'bg-blue-500'
                  }`}
                ></span>
              </motion.a>
            ))}

            {/* THEME BUTTON */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={`rounded-full ${
                isDark
                  ? 'text-slate-200 hover:bg-blue-400/20'
                  : 'text-slate-700 hover:bg-blue-200/40'
              }`}
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <Sun className="h-5 w-5 text-yellow-300" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Moon className="h-5 w-5 text-blue-500" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>

          {/* MOBILE */}
          <div className="flex items-center gap-2 md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDark ? (
                <Sun className="h-5 w-5 text-yellow-300" />
              ) : (
                <Moon className="h-5 w-5 text-blue-500" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={isDark ? 'text-white' : 'text-slate-700'}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden backdrop-blur-xl ${
              isDark
                ? 'bg-gradient-to-b from-[#020617]/95 to-[#1e293b]/90 border-t border-blue-500/20'
                : 'bg-gradient-to-b from-[#e2e8f0]/95 to-[#94a3b8]/90 border-t border-slate-400/30'
            }`}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`transition ${
                    isDark
                      ? 'text-slate-200 hover:text-blue-400'
                      : 'text-slate-700 hover:text-blue-500'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}