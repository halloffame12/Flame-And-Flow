
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Process from './pages/Process';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';

const AppContent: React.FC = () => {
  const location = useLocation();

  // Reveal animation logic
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll(".reveal");
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 120;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    };
    window.addEventListener("scroll", reveal);
    reveal(); // Check on load
    return () => window.removeEventListener("scroll", reveal);
  }, [location.pathname]);

  // Smooth scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const socialLinks = [
    { label: '𝕏', url: 'https://x.com/' },
    { label: 'Li', url: 'https://www.linkedin.com/in/sumit-chauhan-a4ba98325/' },
    { label: 'Ig', url: 'https://instagram.com/' },
    { label: 'Gh', url: 'https://github.com/halloffame12' },
  ];

  const archiveLinks = [
    { label: 'Legacy Home', path: '/' },
    { label: 'Our Origin', path: '/about' },
    { label: 'Battle Artifacts', path: '/portfolio' },
    { label: 'Core Intel', path: '/services' },
    { label: 'Cost Protocol', path: '/pricing' },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#030303] selection:bg-orange-500 selection:text-white">
      {/* Global Background Particles/Effects */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(255,77,0,0.12),transparent_70%)]" />
      </div>

      <Navbar />

      <main className="relative z-10 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/process" element={<Process />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="bg-black/80 border-t border-white/5 py-16 md:py-24 px-6 relative z-10 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-anime font-black tracking-tighter text-white">
              FLAME <span className="text-orange-500">&</span> FLOW
            </h2>
            <p className="text-gray-500 mt-6 text-xs md:text-sm uppercase tracking-widest font-bold max-w-sm leading-relaxed">
              Engineering high-performance digital artifacts for visionary founders and elite enterprises worldwide. No shortcuts. Just precision.
            </p>
            <div className="mt-10 flex gap-6">
              {socialLinks.map(social => (
                <a 
                  key={social.label} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 rounded-none border border-white/10 flex items-center justify-center hover:bg-orange-600 hover:border-orange-600 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <span className="text-sm font-black group-hover:text-white transition-colors">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] font-black tracking-[0.4em] text-white uppercase mb-8 italic">// ARCHIVE MAP</h4>
            <ul className="space-y-4 text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">
              {archiveLinks.map(link => (
                <li key={link.label}>
                  <Link 
                    to={link.path} 
                    className="hover:text-orange-500 transition-colors block py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black tracking-[0.4em] text-white uppercase mb-8 italic">// MISSION COMMS</h4>
            <ul className="space-y-4 text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase leading-relaxed">
              <li>HQ: NEW DELHI / REMOTE WORLD</li>
              <li>
                <a href="mailto:sumitchauhan10062004@gmail.com" className="hover:text-orange-500 transition-colors lowercase">
                  COMMS: sumitchauhan10062004@gmail.com
                </a>
              </li>
              <li>OPS: 24/7 SECURE MONITORING</li>
              <li className="pt-4 flex items-center gap-2 text-orange-500 uppercase">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse shadow-[0_0_8px_#ff4d00]" />
                AVAILABLE FOR DEPLOYMENT
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-16 mt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-600 text-[9px] font-black tracking-[0.5em] uppercase text-center md:text-left">
            &copy; {new Date().getFullYear()} FLAME & FLOW STUDIO. FORGED WITH FIRE.
          </div>
          <div className="text-gray-600 text-[9px] font-black tracking-[0.5em] uppercase flex items-center gap-2">
            <span className="w-1 h-1 bg-green-500 animate-pulse rounded-full" /> ALL SYSTEMS OPERATIONAL
          </div>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
