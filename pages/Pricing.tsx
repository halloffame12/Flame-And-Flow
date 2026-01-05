
import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { Check, ShieldCheck, Zap, Flame, Droplets, Sparkles, Clock, Database, Lock, Activity, AlertCircle, X, BarChart3 } from 'lucide-react';

const Pricing: React.FC = () => {
  const [errorVisible, setErrorVisible] = useState(false);

  const tiers = [
    {
      name: 'STARTER',
      theme: 'WATER // TANJIRO',
      price: '$199',
      period: 'EST. COST',
      desc: 'Balanced flow for startups and individuals.',
      color: 'text-cyan-400',
      borderColor: 'border-cyan-500/20',
      btn: 'bg-cyan-600 hover:bg-cyan-500 shadow-cyan-500/20',
      icon: Droplets,
      powerStats: { speed: '85%', shield: '70%', tech: '60%' },
      features: [
        'Cinematic Landing Page (Single)',
        'Fully Responsive Flow (Mobile/Tab/PC)',
        'Basic Scroll-Triggered Motion',
        'Secure Contact System Protocol',
        'Standard SEO & Meta-Architecture',
        '2 Rounds of Strategic Iteration',
        '30-Day Post-Launch Watch'
      ]
    },
    {
      name: 'PRO',
      theme: 'FLAME // RENGOKU',
      price: '$349',
      period: 'EST. COST',
      featured: true,
      desc: 'Intense performance for scaling enterprises.',
      color: 'text-orange-500',
      borderColor: 'border-orange-600/50',
      btn: 'bg-orange-600 hover:bg-orange-500 shadow-orange-600/40',
      icon: Flame,
      powerStats: { speed: '98%', shield: '95%', tech: '85%' },
      features: [
        'Full Multi-Page Digital Ecosystem',
        'Advanced Technical Architecture',
        'Custom 3D & Micro-interactions',
        'Gemini AI Assistant Integration',
        'Scalable CMS & Database Setup',
        'Performance & Speed Hardening',
        '6 Months Priority Technical Support',
        'Weekly Progress Logs & Syncs'
      ]
    },
    {
      name: 'ULTIMATE',
      theme: 'ENERGY // AKAZA',
      price: 'CUSTOM',
      period: 'MANIFESTO',
      desc: 'Absolute precision for legendary digital artifacts.',
      color: 'text-purple-500',
      borderColor: 'border-purple-500/20',
      btn: 'bg-purple-600 hover:bg-purple-500 shadow-purple-500/20',
      icon: Zap,
      powerStats: { speed: '100%', shield: '100%', tech: '100%' },
      features: [
        'Complex Full-Stack Web Applications',
        'Real-Time Low-Latency Socket Systems',
        'Deep Custom AI/ML Integrations',
        'Elite Security Penetration Testing',
        'Native iOS & Android Deployment',
        'White-Glove "Zero-Error" Engineering',
        'Lifetime Strategic Consultation',
        'Dedicated Mission Architect'
      ]
    }
  ];

  const comparison = [
    { trait: 'Visual Fidelity', starter: 'High', pro: 'Cinematic', ultimate: 'Legendary' },
    { trait: 'Mobile Sync', starter: 'Standard', pro: 'Fluid Native', ultimate: 'Ultra-Motion' },
    { trait: 'AI Capability', starter: 'None', pro: 'L1: Assistant', ultimate: 'L3: Full Integration' },
    { trait: 'Security Protocol', starter: 'SSL/Basic', pro: 'Hardened', ultimate: 'Military-Grade' },
    { trait: 'Latency Target', starter: '<2s', pro: '<0.8s', ultimate: '<0.3s' },
  ];

  const handleInitiate = (e: React.MouseEvent) => {
    e.preventDefault();
    setErrorVisible(true);
  };

  return (
    <div className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="THE COST OF POWER" title="TRANSPARENT PRICING" align="center" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mt-16 md:mt-24 items-stretch">
          {tiers.map((tier, idx) => (
            <div 
              key={idx} 
              className={`relative bg-[#080808] border p-10 md:p-14 flex flex-col transition-all duration-700 hover:-translate-y-4 group reveal h-full ${
                tier.featured ? `${tier.borderColor} z-10 lg:scale-105 shadow-[0_0_60px_rgba(234,88,12,0.15)]` : 'border-white/5'
              }`}
            >
              {tier.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-600 text-white text-[8px] font-black px-6 py-2 tracking-[0.4em] uppercase whitespace-nowrap z-20">
                  RECOMMENDED // ELITE TIER
                </div>
              )}

              <div className="mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <tier.icon className={`w-8 h-8 ${tier.color}`} />
                  <span className={`text-[10px] font-black tracking-[0.4em] uppercase ${tier.color}`}>
                    {tier.name}
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl md:text-6xl font-anime font-black text-white">{tier.price}</span>
                  <span className="text-[10px] font-black text-gray-600 tracking-widest uppercase">{tier.period}</span>
                </div>
                <div className="text-[9px] font-black text-gray-500 tracking-widest uppercase mb-8 italic">{tier.theme}</div>
                
                <div className="space-y-4 mb-10 bg-white/5 p-6 border border-white/5">
                   <div className="flex justify-between items-center mb-1">
                     <span className="text-[8px] font-black text-gray-500 tracking-widest uppercase">SPEED PROTOCOL</span>
                     <span className={`text-[8px] font-black ${tier.color}`}>{tier.powerStats.speed}</span>
                   </div>
                   <div className="h-1 bg-white/10 w-full">
                     <div className={`h-full ${tier.color.replace('text', 'bg')} transition-all duration-1000`} style={{ width: tier.powerStats.speed }} />
                   </div>
                   
                   <div className="flex justify-between items-center mb-1">
                     <span className="text-[8px] font-black text-gray-500 tracking-widest uppercase">SECURITY SHIELD</span>
                     <span className={`text-[8px] font-black ${tier.color}`}>{tier.powerStats.shield}</span>
                   </div>
                   <div className="h-1 bg-white/10 w-full">
                     <div className={`h-full ${tier.color.replace('text', 'bg')} transition-all duration-1000 delay-100`} style={{ width: tier.powerStats.shield }} />
                   </div>
                </div>

                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest leading-relaxed">
                  {tier.desc}
                </p>
              </div>

              <div className="space-y-5 mb-12 flex-1">
                <div className="text-[9px] font-black text-gray-700 tracking-[0.3em] uppercase mb-4 border-b border-white/5 pb-2">Artifact Deliverables</div>
                {tier.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-4 group/item">
                    <Check className={`w-4 h-4 mt-1 flex-shrink-0 ${tier.color} group-hover/item:scale-125 transition-transform`} />
                    <span className="text-gray-400 text-[11px] font-bold tracking-wider uppercase leading-tight group-hover/item:text-white transition-colors">{f}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-white/5">
                <button 
                  onClick={handleInitiate}
                  className={`block w-full py-5 text-[10px] font-black tracking-[0.4em] text-white text-center transition-all shadow-lg uppercase ${tier.btn}`}
                >
                  INITIATE PROJECT
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-40 reveal overflow-x-auto">
          <SectionTitle subtitle="DEEP INTEL" title="COMPARATIVE PROTOCOLS" align="center" />
          <table className="w-full mt-20 border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-[10px] font-black tracking-[0.4em] text-gray-500 uppercase italic">
                <th className="py-8 text-left">TRAIT // CORE</th>
                <th className="py-8 text-center text-cyan-400">STARTER</th>
                <th className="py-8 text-center text-orange-500">PRO</th>
                <th className="py-8 text-center text-purple-500">ULTIMATE</th>
              </tr>
            </thead>
            <tbody className="text-[10px] md:text-xs font-black tracking-widest uppercase">
              {comparison.map((row, i) => (
                <tr key={i} className="border-b border-white/5 group hover:bg-white/5 transition-colors">
                  <td className="py-8 text-white font-bold">{row.trait}</td>
                  <td className="py-8 text-center text-gray-500">{row.starter}</td>
                  <td className="py-8 text-center text-gray-300">{row.pro}</td>
                  <td className="py-8 text-center text-white">{row.ultimate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 reveal">
           {[
             { t: '99.9% UPTIME', d: 'Guaranteed survival of your digital legacy.', i: ShieldCheck },
             { t: 'SUB-1S LOAD', d: 'Engineered for instant manifestation.', i: Zap },
             { t: 'SEO ARCH', d: 'Optimized for global discovery.', i: BarChart3 },
             { t: 'SECURE CORE', d: 'Military-grade encryption standards.', i: Lock }
           ].map((feat, i) => (
             <div key={i} className="glass p-8 border-white/5 group hover:border-orange-500/30 transition-all">
                <feat.i className="w-8 h-8 text-orange-500 mb-6 group-hover:scale-110 transition-transform" />
                <h5 className="text-white font-black text-xs tracking-widest uppercase mb-4">{feat.t}</h5>
                <p className="text-gray-600 text-[10px] font-bold tracking-widest uppercase leading-relaxed">{feat.d}</p>
             </div>
           ))}
        </div>
      </div>

      {errorVisible && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={() => setErrorVisible(false)} />
          <div className="relative glass p-10 md:p-16 border-red-500/30 max-w-xl w-full text-center reveal active">
            <button 
              onClick={() => setErrorVisible(false)}
              className="absolute top-6 right-6 text-gray-500 hover:text-white"
            >
              <X size={24} />
            </button>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600/10 border border-red-500/20 rounded-full mb-8">
              <AlertCircle className="w-10 h-10 text-red-500" />
            </div>
            <h4 className="text-2xl font-anime font-black text-white mb-4 uppercase tracking-tighter">PROTOCOL INTERRUPTED</h4>
            <div className="text-red-500 text-[9px] font-black tracking-[0.4em] uppercase mb-6 italic italic">ERROR CODE: 0x80041001</div>
            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest leading-relaxed mb-10">
              Direct enlistment is currently unstable. Please transmit your vision through our primary contact portal to initiate the mission.
            </p>
            <a 
              href="#/contact" 
              onClick={() => setErrorVisible(false)}
              className="inline-block w-full bg-white text-black px-12 py-5 text-[10px] font-black tracking-[0.4em] uppercase hover:bg-red-600 hover:text-white transition-all shadow-xl"
            >
              ACCESS CONTACT PORTAL
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pricing;
