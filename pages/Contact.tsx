import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { Mail, MapPin, Globe, Send, Shield, Zap, Terminal, Activity, Instagram, Linkedin, Phone } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("xkogevln");
  if (state.succeeded) {
    return (
      <div className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="MANIFESTO" title="INITIATE THE MISSION" />
        
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 mt-16 md:mt-24">
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-16 reveal">
              <div>
                <p className="text-gray-400 text-base md:text-xl leading-relaxed mb-12 uppercase tracking-widest font-bold">
                  Ready to transcend the ordinary? Describe your vision and we will engineer its digital manifestation.
                  <span className="text-orange-500 block mt-4 italic">"The protocol starts here."</span>
                </p>
              
                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 bg-[#0a0a0a] border border-white/10 flex items-center justify-center group-hover:border-orange-500 transition-all duration-500 shadow-lg">
                      <Mail className="w-5 h-5 text-gray-500 group-hover:text-orange-500" />
                    </div>
                    <div>
                      <div className="text-[8px] font-black text-gray-600 tracking-[0.4em] uppercase mb-1 italic">ENCRYPTED COMMS</div>
                      <a href="mailto:flameflowstudio@gmail.com" className="text-white font-black text-sm md:text-base tracking-wider uppercase hover:text-orange-500 transition-colors">flameflowstudio@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 bg-[#0a0a0a] border border-white/10 flex items-center justify-center group-hover:border-cyan-500 transition-all duration-500 shadow-lg">
                      <Phone className="w-5 h-5 text-gray-500 group-hover:text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-[8px] font-black text-gray-600 tracking-[0.4em] uppercase mb-1 italic">SECURE VOICE</div>
                      <div className="text-white font-black text-sm md:text-base tracking-wider uppercase">+91 94732 95260</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 bg-[#0a0a0a] border border-white/10 flex items-center justify-center group-hover:border-purple-500 transition-all duration-500 shadow-lg">
                      <Linkedin className="w-5 h-5 text-gray-500 group-hover:text-purple-500" />
                    </div>
                    <div>
                      <div className="text-[8px] font-black text-gray-600 tracking-[0.4em] uppercase mb-1 italic">PROFESSIONAL NODE</div>
                      <a href="https://www.linkedin.com/company/flame-flow-studio" target="_blank" rel="noopener noreferrer" className="text-white font-black text-sm md:text-base tracking-wider uppercase hover:text-purple-500 transition-colors">LINKEDIN // FlameAndFlow</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 bg-[#0a0a0a] border border-white/10 flex items-center justify-center group-hover:border-pink-500 transition-all duration-500 shadow-lg">
                      <Instagram className="w-5 h-5 text-gray-500 group-hover:text-pink-500" />
                    </div>
                    <div>
                      <div className="text-[8px] font-black text-gray-600 tracking-[0.4em] uppercase mb-1 italic">VISUAL FEED</div>
                      <a href="https://www.instagram.com/flameflow.studio/" target="_blank" rel="noopener noreferrer" className="text-white font-black text-sm md:text-base tracking-wider uppercase hover:text-pink-500 transition-colors">INSTAGRAM // FLAMEFLOW.STUDIO</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="glass p-10 border-orange-500/10 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-5">
                   <Shield size={100} />
                 </div>
                 <h4 className="text-[10px] font-black tracking-[0.5em] text-white uppercase mb-6 flex items-center gap-3">
                   <Terminal size={14} className="text-orange-500" /> MISSION PROTOCOL
                 </h4>
                 <ul className="space-y-4 text-[9px] md:text-[10px] font-bold tracking-widest text-gray-500 uppercase leading-relaxed">
                   <li>1. Receipt of Manifesto Objectives</li>
                   <li>2. Preliminary Architecture Feasibility</li>
                   <li>3. Strategic Intel Gathering Call</li>
                   <li>4. Artifact Deployment Strategy</li>
                 </ul>
              </div>
            </div>
            {/* Form Column */}
            <div className="lg:col-span-7 reveal">
              <div className="bg-[#0a0a0a] border border-white/5 p-8 md:p-16 relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-600 via-cyan-500 to-transparent" />
              
                <div className="mb-12">
                   <h3 className="text-3xl font-anime font-black text-white uppercase tracking-tighter mb-4">MISSION INITIATED</h3>
                   <p className="text-gray-600 text-[10px] font-black tracking-widest uppercase italic">Transmission received and protocol engaged</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-8 pt-6">
                   <div className="w-16 h-16 rounded-full border border-orange-500/20 flex items-center justify-center animate-pulse">
                      <Send size={24} className="text-orange-500" />
                   </div>
                   <div className="text-center">
                     <p className="text-white font-black text-lg uppercase tracking-wider mb-2">TRANSMISSION CONFIRMED</p>
                     <p className="text-gray-600 text-[10px] font-black tracking-widest uppercase italic">Your manifesto has been enlisted. Stand by for strategic response.</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="MANIFESTO" title="INITIATE THE MISSION" />
      
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 mt-16 md:mt-24">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-16 reveal">
            <div>
              <p className="text-gray-400 text-base md:text-xl leading-relaxed mb-12 uppercase tracking-widest font-bold">
                Ready to transcend the ordinary? Describe your vision and we will engineer its digital manifestation.
                <span className="text-orange-500 block mt-4 italic">"The protocol starts here."</span>
              </p>
            
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-[#0a0a0a] border border-white/10 flex items-center justify-center group-hover:border-orange-500 transition-all duration-500 shadow-lg">
                    <Mail className="w-5 h-5 text-gray-500 group-hover:text-orange-500" />
                  </div>
                  <div>
                    <div className="text-[8px] font-black text-gray-600 tracking-[0.4em] uppercase mb-1 italic">ENCRYPTED COMMS</div>
                    <a href="mailto:flameflowstudio@gmail.com" className="text-white font-black text-sm md:text-base tracking-wider uppercase hover:text-orange-500 transition-colors">flameflowstudio@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-[#0a0a0a] border border-white/10 flex items-center justify-center group-hover:border-cyan-500 transition-all duration-500 shadow-lg">
                    <Phone className="w-5 h-5 text-gray-500 group-hover:text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-[8px] font-black text-gray-600 tracking-[0.4em] uppercase mb-1 italic">SECURE VOICE</div>
                    <div className="text-white font-black text-sm md:text-base tracking-wider uppercase">+91 94732 95260</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-[#0a0a0a] border border-white/10 flex items-center justify-center group-hover:border-purple-500 transition-all duration-500 shadow-lg">
                    <Linkedin className="w-5 h-5 text-gray-500 group-hover:text-purple-500" />
                  </div>
                  <div>
                    <div className="text-[8px] font-black text-gray-600 tracking-[0.4em] uppercase mb-1 italic">PROFESSIONAL NODE</div>
                    <a href="https://www.linkedin.com/in/sumit-chauhan-a4ba98325/" target="_blank" rel="noopener noreferrer" className="text-white font-black text-sm md:text-base tracking-wider uppercase hover:text-purple-500 transition-colors">LINKEDIN // SUMIT CHAUHAN</a>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-[#0a0a0a] border border-white/10 flex items-center justify-center group-hover:border-pink-500 transition-all duration-500 shadow-lg">
                    <Instagram className="w-5 h-5 text-gray-500 group-hover:text-pink-500" />
                  </div>
                  <div>
                    <div className="text-[8px] font-black text-gray-600 tracking-[0.4em] uppercase mb-1 italic">VISUAL FEED</div>
                    <a href="https://www.instagram.com/flameflow.studio/" target="_blank" rel="noopener noreferrer" className="text-white font-black text-sm md:text-base tracking-wider uppercase hover:text-pink-500 transition-colors">INSTAGRAM // FLAMEFLOW.STUDIO</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass p-10 border-orange-500/10 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-5">
                 <Shield size={100} />
               </div>
               <h4 className="text-[10px] font-black tracking-[0.5em] text-white uppercase mb-6 flex items-center gap-3">
                 <Terminal size={14} className="text-orange-500" /> MISSION PROTOCOL
               </h4>
               <ul className="space-y-4 text-[9px] md:text-[10px] font-bold tracking-widest text-gray-500 uppercase leading-relaxed">
                 <li>1. Receipt of Manifesto Objectives</li>
                 <li>2. Preliminary Architecture Feasibility</li>
                 <li>3. Strategic Intel Gathering Call</li>
                 <li>4. Artifact Deployment Strategy</li>
               </ul>
            </div>
          </div>
          {/* Form Column */}
          <div className="lg:col-span-7 reveal">
            <div className="bg-[#0a0a0a] border border-white/5 p-8 md:p-16 relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-600 via-cyan-500 to-transparent" />
            
              <div className="mb-12">
                 <h3 className="text-3xl font-anime font-black text-white uppercase tracking-tighter mb-4">ENLIST YOUR VISION</h3>
                 <p className="text-gray-600 text-[10px] font-black tracking-widest uppercase italic">Secure end-to-end transmission protocol v4.2</p>
              </div>
              <form className="space-y-12" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3 group/field">
                    <label className="text-[9px] font-black text-gray-600 tracking-[0.4em] uppercase group-focus-within/field:text-orange-500 transition-colors italic">IDENTITY TAG</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="ENTER NAME..."
                      className="w-full bg-transparent border-b border-white/10 pb-4 focus:border-orange-500 outline-none text-white transition-all placeholder:text-gray-800 font-black text-lg uppercase tracking-widest"
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                      className="text-[9px] text-red-500 font-black tracking-wider uppercase mt-1"
                    />
                  </div>
                  <div className="space-y-3 group/field">
                    <label className="text-[9px] font-black text-gray-600 tracking-[0.4em] uppercase group-focus-within/field:text-orange-500 transition-colors italic">COMMS CHANNEL</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="ENTER EMAIL..."
                      className="w-full bg-transparent border-b border-white/10 pb-4 focus:border-orange-500 outline-none text-white transition-all placeholder:text-gray-800 font-black text-lg uppercase tracking-widest"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="text-[9px] text-red-500 font-black tracking-wider uppercase mt-1"
                    />
                  </div>
                </div>
                <div className="space-y-3 group/field">
                  <label className="text-[9px] font-black text-gray-600 tracking-[0.4em] uppercase group-focus-within/field:text-orange-500 transition-colors italic">MANIFESTO OBJECTIVES</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={6}
                    placeholder="DESCRIBE THE LEGENDARY IDEA IN DETAIL..."
                    className="w-full bg-transparent border-b border-white/10 pb-4 focus:border-orange-500 outline-none text-white transition-all placeholder:text-gray-800 font-black text-lg uppercase tracking-widest resize-none"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-[9px] text-red-500 font-black tracking-wider uppercase mt-1"
                  />
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-6">
                   <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center animate-pulse">
                        <Activity size={16} className="text-orange-500" />
                     </div>
                     <span className="text-[9px] font-black text-gray-700 tracking-[0.2em] uppercase">TRANSMISSION READY</span>
                   </div>
                   <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full md:w-auto px-16 py-6 bg-white text-black font-black tracking-[0.4em] uppercase hover:bg-orange-600 hover:text-white transition-all flex items-center justify-center gap-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    SEND TRANSMISSION <Send size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
