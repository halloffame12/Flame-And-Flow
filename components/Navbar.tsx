
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Flame } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when menu is open to prevent background movement
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const links = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'PROCESS', path: '/process' },
    { name: 'PORTFOLIO', path: '/portfolio' },
    { name: 'PRICING', path: '/pricing' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <>
      {/* Primary Nav Bar */}
      <nav 
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-700 ${
          scrolled || isOpen ? 'bg-black/95 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
          <NavLink to="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
            <div className="relative">
              <Flame className="w-7 h-7 md:w-8 md:h-8 text-orange-500 group-hover:scale-125 transition-all duration-500 group-hover:text-white" />
              <div className="absolute inset-0 bg-orange-600/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-sm font-anime font-black text-white tracking-widest hidden sm:inline">FLAME <span className="text-orange-500">&</span> FLOW</span>
            <span className="text-sm font-anime font-black text-white tracking-widest sm:hidden">F&F</span>
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {links.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `text-[10px] font-black tracking-[0.4em] transition-all hover:text-orange-500 uppercase ${
                    isActive ? 'text-orange-500' : 'text-gray-400'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink to="/contact" className="bg-white hover:bg-orange-600 text-black hover:text-white px-8 py-3 rounded-none text-[10px] font-black tracking-[0.3em] transition-all shadow-xl uppercase">
              Initiate
            </NavLink>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            className="lg:hidden text-white p-2 relative z-[1100]" 
            aria-label="Toggle Menu" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-8 h-8 text-orange-500" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Solid Background, Highest Z-index */}
      <div className={`lg:hidden fixed inset-0 bg-[#030303] z-[999] transition-all duration-500 flex flex-col items-center justify-center ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Animated Background Decoration */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-600 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-600 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 flex flex-col gap-8 sm:gap-10 items-center justify-center w-full px-8 text-center max-h-screen overflow-y-auto py-20">
          {links.map((link, i) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: `${isOpen ? i * 50 : 0}ms` }}
              className={({ isActive }) => 
                `text-4xl sm:text-5xl font-anime font-black transition-all transform tracking-tighter uppercase ${
                  isOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                } ${isActive ? 'text-orange-500 scale-110' : 'text-white hover:text-orange-500'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          
          <div className={`h-1 w-24 bg-orange-600 mt-6 transition-all duration-700 ${isOpen ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`} />
          
          <div className={`transition-all duration-700 delay-300 text-center ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <p className="text-gray-500 font-bold uppercase tracking-[0.3em] text-[10px] italic">
              FLAME & FLOW STUDIO
            </p>
            <p className="text-gray-700 font-bold uppercase tracking-[0.2em] text-[8px] mt-2">
              IIT PATNA HQ // GLOBAL REACH
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
