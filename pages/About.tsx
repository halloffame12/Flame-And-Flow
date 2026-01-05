
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { Cpu, Layout, Code, Zap, Briefcase, Award, Shield, Target, Globe, Server, Terminal, Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="THE ORIGIN" title="BIRTH OF FLAME & FLOW" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 mb-32 items-center reveal">
          <div className="lg:col-span-7 text-lg md:text-xl text-gray-400 leading-relaxed font-medium uppercase tracking-wide">
            <p className="mb-8">
              Flame & Flow Studio was created to bridge engineering excellence with visual storytelling. We don’t chase trends — we build systems that scale and endure.
            </p>
            <p className="mb-8">
              Our mission is to empower founders and enterprises with digital artifacts that are not just tools, but legendary experiences. We combine the intensity of high-performance logic with the fluidity of cinematic design.
            </p>
            <div className="flex flex-wrap gap-4 mt-12">
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3">
                <Shield className="w-5 h-5 text-orange-500" />
                <span className="text-[10px] font-black tracking-widest text-white">SECURE CORE</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3">
                <Target className="w-5 h-5 text-cyan-400" />
                <span className="text-[10px] font-black tracking-widest text-white">PRECISION UI</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="glass p-10 border-orange-500/20 group hover:bg-orange-600/10 transition-colors">
              <h3 className="text-orange-500 text-5xl font-anime font-black mb-2 group-hover:scale-110 transition-transform">01</h3>
              <p className="text-[10px] font-black tracking-[0.3em] text-white">POWER</p>
            </div>
            <div className="glass p-10 border-cyan-500/20 mt-12 group hover:bg-cyan-600/10 transition-colors">
              <h3 className="text-cyan-400 text-5xl font-anime font-black mb-2 group-hover:scale-110 transition-transform">02</h3>
              <p className="text-[10px] font-black tracking-[0.3em] text-white">BALANCE</p>
            </div>
          </div>
        </div>

        {/* Founder 1: Sumit Chauhan */}
        <div className="mb-40 reveal">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-cyan-500 rounded-sm blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <img 
                  src="https://i.postimg.cc/rwjfhvrk/sumitc.png" 
                  alt="Sumit Chauhan" 
                  className="relative rounded-sm w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700 border border-white/5 bg-[#0a0a0a]" 
                />
                <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-md px-4 py-2 border border-white/10">
                   <span className="text-[9px] font-black text-orange-500 tracking-[0.4em] uppercase">Core Architect</span>
                </div>
              </div>
              <div className="mt-10">
                <h3 className="text-4xl md:text-5xl font-anime font-black text-white uppercase tracking-tighter">Sumit Chauhan</h3>
                <p className="text-gray-500 font-bold tracking-[0.3em] text-[10px] mt-4 uppercase leading-relaxed">IIT Patna Student | Web Dev, Full-Stack & AI Researcher</p>
                <div className="flex gap-4 mt-6">
                  <a href="https://github.com/halloffame12" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-500 transition-colors"><Github size={20} /></a>
                  <a href="https://www.linkedin.com/in/sumit-chauhan-a4ba98325/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-500 transition-colors"><Linkedin size={20} /></a>
                  <a href="https://sumitchauhandev.netlify.app" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-500 transition-colors"><ExternalLink size={20} /></a>
                  <a href="mailto:sumitchauhan10062004@gmail.com" className="text-gray-500 hover:text-orange-500 transition-colors"><Mail size={20} /></a>
                </div>
                <div className="text-[9px] font-black text-gray-600 tracking-widest mt-4 uppercase">Direct Comms: +91 7678331501</div>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-16">
              <div className="glass p-12 border-l-4 border-orange-600">
                <h4 className="text-2xl font-black mb-8 flex items-center gap-4 text-white uppercase tracking-tighter">
                  <Cpu className="text-orange-500 w-8 h-8" /> The Core Logic
                </h4>
                <div className="space-y-6 text-gray-400 font-bold uppercase tracking-wider text-sm leading-relaxed">
                   <p>I am Sumit Chauhan, currently a student at IIT Patna. I am a Web Developer, Full-Stack Engineer, and AI/ML researcher specializing in building ultra-scalable digital ecosystems.</p>
                   <p>At IIT Patna, I explore the synergy between deterministic code and probabilistic learning models. My core expertise lies in crafting high-performance web applications and mobile platforms using Flutter and modern frameworks like React and Node.js.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                  {['Web Development', 'Full-Stack', 'AI/ML Research', 'System Design'].map(skill => (
                    <div key={skill} className="bg-white/5 p-4 border border-white/5 text-[9px] font-black text-center text-white uppercase tracking-tighter">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/5 p-10 border border-white/10 hover:border-orange-500/40 transition-all group">
                  <div className="w-16 h-16 bg-orange-500/10 rounded-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <Layout className="text-orange-500 w-8 h-8" />
                  </div>
                  <h5 className="text-xl font-black text-white mb-6 uppercase tracking-tighter italic">Web & Mobile Frontier</h5>
                  <p className="text-gray-500 text-xs font-bold leading-relaxed tracking-widest uppercase">
                    I build cinematic cross-platform applications and web platforms that perform at native speeds. My focus is on fluid motion and responsive architecture.
                  </p>
                </div>
                <div className="bg-white/5 p-10 border border-white/10 hover:border-cyan-500/40 transition-all group">
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <Code className="text-cyan-400 w-8 h-8" />
                  </div>
                  <h5 className="text-xl font-black text-white mb-6 uppercase tracking-tighter italic">AI Integration</h5>
                  <p className="text-gray-500 text-xs font-bold leading-relaxed tracking-widest uppercase">
                    From real-time chat protocols to complex AI pipelines, my work is driven by security, clean design, and future-ready architectural precision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Founder 2: Anmol Sah */}
        <div className="mb-40 reveal">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-start">
             <div className="lg:col-span-7 space-y-16 order-2 lg:order-1">
              <div className="glass p-12 border-l-4 border-cyan-500">
                <h4 className="text-2xl font-black mb-8 flex items-center gap-4 text-white uppercase tracking-tighter">
                  <Briefcase className="text-cyan-400 w-8 h-8" /> Strategic Backbone
                </h4>
                <p className="text-gray-400 text-sm md:text-lg font-bold uppercase tracking-wider leading-relaxed mb-10">
                  Anmol Sah, a student at IIT Patna, is the strategic lead for Flame & Flow Studio. He leads project planning, workflow optimization, and high-level business logic.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { label: 'Project Strategy', icon: Target },
                    { label: 'Ops Optimization', icon: Server },
                    { label: 'Client Relations', icon: Globe },
                    { label: 'Business Direction', icon: Briefcase }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-5 group">
                      <div className="w-12 h-12 bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                        <item.icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <span className="text-white font-black text-[10px] tracking-[0.2em] uppercase">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-12 bg-[#0a0a0a] border border-white/5 relative overflow-hidden text-right lg:text-left">
                <div className="absolute top-0 right-0 lg:left-0 lg:right-auto p-4 opacity-10">
                  <Terminal className="w-24 h-24 text-cyan-400" />
                </div>
                <h5 className="text-xl font-black text-white mb-6 uppercase tracking-tighter italic">Strategic Clarity</h5>
                <p className="text-gray-500 text-xs md:text-sm font-bold leading-relaxed tracking-widest uppercase mb-6">
                  His role ensures that every technical decision is aligned with the business's ultimate mission. He bridges the gap between client vision and engineered delivery.
                </p>
                <div className="h-1 w-24 bg-cyan-600 ml-auto lg:ml-0" />
              </div>
            </div>
            <div className="lg:col-span-5 lg:sticky lg:top-32 order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-purple-500 rounded-sm blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <img 
                  src="https://i.postimg.cc/jqH2Dm2c/Whats-App-Image-2026-01-05-at-15-42-54.jpg" 
                  alt="Anmol Sah" 
                  className="relative rounded-sm w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700 border border-white/5 bg-[#0a0a0a]" 
                />
                <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-md px-4 py-2 border border-white/10">
                   <span className="text-[9px] font-black text-cyan-400 tracking-[0.4em] uppercase">Strategic Lead</span>
                </div>
              </div>
              <div className="mt-10 lg:text-right">
                <h3 className="text-4xl md:text-5xl font-anime font-black text-white uppercase tracking-tighter">Anmol Kumar Sah</h3>
                <p className="text-gray-500 font-bold tracking-[0.3em] text-[10px] mt-4 uppercase">IIT Patna Student & Strategic Lead</p>
                <div className="flex gap-4 mt-6 lg:justify-end">
                  <a href="https://github.com/sahanmol" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-400 transition-colors"><Github size={20} /></a>
                  <a href="https://www.linkedin.com/in/anmol-kumar-sah-8355b1368" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-400 transition-colors"><Linkedin size={20} /></a>
                  <a href="mailto:anmol.gupta92k@gmail.com" className="text-gray-500 hover:text-cyan-400 transition-colors"><Mail size={20} /></a>
                </div>
                <div className="text-[9px] font-black text-gray-600 tracking-widest mt-4 uppercase">Direct Comms: +91 9473295260</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
