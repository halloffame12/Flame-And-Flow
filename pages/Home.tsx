
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sword, Zap, Shield, ChevronRight, Cpu, Layers, Radio, Smartphone, Activity, Star, Eye } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import AIBlueprintGenerator from '../components/AIBlueprintGenerator';

const Home: React.FC = () => {
  const stats = [
    { label: 'LEGENDS DEPLOYED', value: '150+', icon: Sword, color: 'text-orange-500' },
    { label: 'ALLIES SECURED', value: '80+', icon: Shield, color: 'text-cyan-400' },
    { label: 'MASTERY LEVEL', value: '45+', icon: Zap, color: 'text-yellow-500' },
  ];

  const pillars = [
    { 
      title: 'POWER // RENGOKU', 
      desc: 'We engineer systems that act with overwhelming speed and scalability. No bottlenecks, only performance.', 
      icon: Sword, 
      accent: 'bg-orange-600' 
    },
    { 
      title: 'BALANCE // TANJIRO', 
      desc: 'Merging beautiful visuals with robust architecture. Cinematic motion meets deterministic logic.', 
      icon: Activity, 
      accent: 'bg-cyan-500' 
    },
    { 
      title: 'PRECISION // AKAZA', 
      desc: 'Sharp, intense attention to detail. Every line of code serves a purpose. Every pixel is intentional.', 
      icon: Star, 
      accent: 'bg-purple-600' 
    }
  ];

  const servicePreview = [
    { title: 'Web Development', desc: 'SPA/SSR high-end web applications.', icon: Layers, version: 'V2.5' },
    { title: 'AI Integration', desc: 'Custom ML & Gemini real-time systems.', icon: Cpu, version: 'V1.0' },
    { title: 'Real-Time Tech', desc: 'Socket-driven low latency platforms.', icon: Radio, version: 'V3.2' },
    { title: 'Mobile Solutions', desc: 'Native-speed Flutter experiences.', icon: Smartphone, version: 'V4.0' }
  ];

  return (
    <div className="w-full">
      {/* Cinematic Hero */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-orange-600/5 rounded-full blur-[100px] md:blur-[150px] animate-pulse" />
          <div className="absolute top-1/3 left-1/3 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 md:px-6 py-2 rounded-sm mb-8 md:mb-12 backdrop-blur-md reveal">
            <span className="w-1.5 h-1.5 bg-orange-500 shadow-[0_0_10px_#ff4d00]" />
            <span className="text-[8px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.4em] text-gray-400 uppercase">Studio Protocol // Active</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-[10rem] font-anime font-black text-white tracking-tighter leading-[0.9] md:leading-[0.85] mb-6 md:mb-8 reveal">
            FORGING DIGITAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-600 drop-shadow-[0_0_20px_rgba(234,88,12,0.3)]">
              LEGENDS
            </span>
          </h1>

          <p className="text-sm md:text-xl lg:text-2xl font-bold text-gray-400 max-w-3xl mx-auto mb-10 md:mb-16 uppercase tracking-[0.1em] md:tracking-[0.15em] leading-relaxed reveal px-4">
            "Engineered Scalability. Cinematic Visuals. <br className="hidden md:block" />
            <span className="text-white italic">The bridge between code and storytelling."</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 reveal">
            <NavLink 
              to="/contact" 
              className="w-full sm:w-auto group relative px-8 md:px-12 py-5 md:py-6 bg-orange-600 text-white font-black tracking-[0.2em] overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(234,88,12,0.3)]"
            >
              <span className="relative z-10 text-xs md:text-sm">INITIATE PROJECT</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </NavLink>
            <NavLink 
              to="/portfolio" 
              className="w-full sm:w-auto flex items-center justify-center gap-3 text-white font-black tracking-[0.2em] hover:text-orange-500 transition-colors py-4 md:py-6 uppercase border-b border-transparent hover:border-orange-500 text-xs md:text-sm"
            >
              OUR REIGN <ChevronRight className="w-4 h-4" />
            </NavLink>
          </div>
        </div>

        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 reveal hidden sm:flex">
          <div className="w-px h-10 md:h-16 bg-gradient-to-b from-orange-500 to-transparent" />
        </div>
      </section>

      {/* Philosophy Pillars */}
      <section className="py-20 md:py-32 bg-[#050505] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="OUR CORE BREATHS" title="POWER × BALANCE × PRECISION" align="center" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-16 md:mt-24">
            {pillars.map((pillar, i) => (
              <div key={i} className="group relative bg-[#0a0a0a] border border-white/5 p-8 md:p-12 hover:border-white/10 transition-all duration-700 reveal">
                <div className={`w-12 h-12 md:w-14 md:h-14 ${pillar.accent} rounded-sm flex items-center justify-center mb-6 md:mb-8 rotate-3 group-hover:rotate-12 transition-transform shadow-lg`}>
                  <pillar.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-anime font-black text-white mb-4 md:mb-6 uppercase tracking-tighter">{pillar.title}</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed uppercase tracking-wider font-bold">
                  {pillar.desc}
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-600 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Manifestation Section */}
      <section className="bg-black py-20 md:py-32 relative border-y border-white/5">
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-600/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
        <AIBlueprintGenerator />
      </section>

      {/* Stats Breakdown */}
      <section className="py-16 md:py-24 bg-[#030303]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-16">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group reveal">
                <div className="mb-6 md:mb-8 p-5 md:p-6 bg-white/5 border border-white/10 relative">
                   <stat.icon className={`w-6 h-6 md:w-8 md:h-8 ${stat.color} relative z-10`} />
                   <div className="absolute inset-0 bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-500" />
                </div>
                <div className="text-5xl md:text-6xl font-anime font-black text-white mb-2 md:mb-4 tracking-tighter">{stat.value}</div>
                <div className="text-[10px] md:text-xs font-black tracking-[0.3em] md:tracking-[0.4em] text-gray-600 uppercase italic">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Preview Grid */}
      <section className="py-24 md:py-40 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16 md:mb-24 reveal">
            <div className="max-w-2xl">
              <span className="text-orange-500 text-[10px] md:text-xs font-black tracking-[0.4em] uppercase mb-4 block">// STUDIO CAPABILITIES</span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-anime font-black text-white leading-tight md:leading-none uppercase">Technical <br /> Mastery</h2>
            </div>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs md:text-sm max-w-sm lg:text-right">
              From deterministic logic to cinematic visuals, our stack is optimized for survival and scale.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {servicePreview.map((service, i) => (
              <div key={i} className="glass p-8 md:p-10 group hover:bg-white/5 transition-all duration-500 reveal">
                <div className="flex justify-between items-start mb-10 md:mb-12">
                  <service.icon className="w-8 h-8 md:w-10 md:h-10 text-orange-500 group-hover:text-white transition-colors" />
                  <span className="text-[9px] font-black text-gray-700 tracking-widest">{service.version}</span>
                </div>
                <h4 className="text-lg md:text-xl font-black text-white mb-4 uppercase tracking-tighter">{service.title}</h4>
                <p className="text-gray-500 text-[10px] md:text-xs font-bold leading-relaxed tracking-wider uppercase mb-8">
                  {service.desc}
                </p>
                <NavLink to="/services" className="text-[9px] md:text-[10px] font-black tracking-[0.3em] text-orange-500 flex items-center gap-2 group-hover:text-white transition-colors uppercase">
                  Explore Intel <ChevronRight className="w-3 h-3" />
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Works Snip - Synchronized with Portfolio */}
      <section className="py-24 md:py-40 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="BATTLE LOGS" title="FEATURED ARTIFACT" align="center" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 mt-16 md:mt-20">
            <div className="relative group overflow-hidden reveal bg-[#0a0a0a] border border-white/5">
              <img 
                src="https://i.postimg.cc/HWyk9mDZ/anonchatweb.png" 
                alt="AnonChat Live" 
                className="w-full aspect-video grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 object-cover opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12">
                <span className="text-orange-500 text-[9px] md:text-[10px] font-black tracking-[0.4em] uppercase mb-3 block">WEB DEVELOPMENT // PROTOCOL 01</span>
                <h3 className="text-3xl md:text-4xl font-anime font-black text-white uppercase tracking-tighter">AnonChat Live</h3>
                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
                  <a href="https://anonchatweb.netlify.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-[10px] font-black tracking-widest uppercase hover:bg-orange-600 hover:text-white transition-all">
                    MANIFEST ARTIFACT <Eye size={16} />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-10 md:space-y-14">
               <div className="glass p-8 md:p-12 border-l-4 border-orange-600 reveal">
                  <h4 className="text-xl md:text-2xl font-black text-white mb-6 uppercase tracking-tighter italic leading-snug">"ENGINEERING ANONYMITY AT THE SPEED OF LIGHT."</h4>
                  <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] md:text-sm leading-relaxed mb-10">
                    We delivered a production-ready anonymous real-time chat platform. Zero registration, low-latency Socket.IO architecture, and cinematic UI design.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {['Node.js', 'Socket.IO', 'React', 'Tailwind', 'Vite'].map(t => (
                      <span key={t} className="text-[8px] md:text-[9px] font-black border border-white/10 px-3 py-1.5 text-gray-500 uppercase tracking-widest bg-white/5">{t}</span>
                    ))}
                  </div>
               </div>
               <NavLink to="/portfolio" className="inline-block w-full text-center px-12 py-6 border border-white/10 text-white font-black tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all reveal text-xs md:text-sm shadow-xl">
                 VIEW FULL BATTLE ARCHIVE
               </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 md:py-60 bg-[#050505] text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-orange-600/5 rounded-full blur-[80px] md:blur-[150px]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 reveal">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-anime font-black text-white mb-8 md:mb-12 uppercase tracking-tighter">
            READY FOR <br />
            <span className="text-orange-500">TRANSCENDENCE?</span>
          </h2>
          <p className="text-gray-400 font-bold tracking-[0.1em] md:tracking-[0.2em] uppercase max-w-xl mx-auto mb-10 md:mb-16 italic text-xs md:text-base">
            "Your vision deserves a system that survives the future."
          </p>
          <NavLink 
            to="/contact" 
            className="inline-block w-full sm:w-auto px-12 md:px-20 py-6 md:py-8 bg-white text-black font-black tracking-[0.3em] md:tracking-[0.5em] uppercase hover:bg-orange-600 hover:text-white transition-all shadow-[0_0_50px_rgba(255,255,255,0.1)] text-xs md:text-sm"
          >
            INITIATE PROTOCOL
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Home;
