
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { Search, PenTool, Terminal, ShieldCheck, Rocket, Zap, ChevronRight, Activity, Cpu, Layers } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      title: 'Vision Mapping',
      subtitle: 'PHASE // 01',
      desc: 'Understanding your unique story and engineering requirements to create a bulletproof product strategy.',
      icon: Search,
      color: 'from-orange-600 to-orange-400',
      tasks: ['Project Scoping & Audit', 'Competitive Analysis', 'Architecture Blueprinting', 'Tech-Stack Selection']
    },
    {
      title: 'Cinematic Strategy',
      subtitle: 'PHASE // 02',
      desc: 'Crafting high-end visual experiences and intuitive user flows. We merge aesthetics with function.',
      icon: PenTool,
      color: 'from-cyan-600 to-cyan-400',
      tasks: ['UI/UX Wireframing', 'Visual Prototype Design', 'Cinematic Motion Strategy', 'Design System Creation']
    },
    {
      title: 'Battle Phase',
      subtitle: 'PHASE // 03',
      desc: 'High-intensity development cycles. We transform code into a living, scaling digital artifact.',
      icon: Terminal,
      color: 'from-purple-600 to-purple-400',
      tasks: ['Agile Development Sprints', 'Full-Stack Engineering', 'API & Database Integration', 'Real-Time Sync Setup']
    },
    {
      title: 'Elite Hardening',
      subtitle: 'PHASE // 04',
      desc: 'Rigorous performance profiling and security testing to ensure your legend stands the test of time.',
      icon: ShieldCheck,
      color: 'from-yellow-600 to-yellow-400',
      tasks: ['Load Testing & Optimization', 'Cross-Device QA', 'Security Penetration Checks', 'SEO & Performance Audit']
    },
    {
      title: 'Manifestation',
      subtitle: 'PHASE // 05',
      desc: 'The final deployment. Your product is live, optimized, and ready to scale globally.',
      icon: Rocket,
      color: 'from-green-600 to-green-400',
      tasks: ['Production Deployment', 'CDN & Cache Hardening', 'Post-Launch Monitoring', 'Scale Training & Documentation']
    }
  ];

  return (
    <div className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="OUR BATTLE PLAN" title="THE FLOW OF CREATION" align="center" />
        
        <div className="relative mt-24 md:mt-40 space-y-24 md:space-y-40">
          {/* Animated Central Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500 via-cyan-500 via-purple-500 via-yellow-500 to-transparent -translate-x-1/2 opacity-20" />

          {steps.map((step, idx) => (
            <div key={idx} className={`reveal relative flex flex-col lg:flex-row items-center gap-12 md:gap-20 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Text Side */}
              <div className="flex-1 text-center lg:text-left order-2 lg:order-none">
                <span className="text-[10px] font-black tracking-[0.5em] text-gray-600 uppercase mb-4 block">{step.subtitle}</span>
                <h3 className="text-4xl md:text-5xl font-anime font-black text-white mb-8 uppercase tracking-tighter">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-lg leading-relaxed mb-12 uppercase tracking-wider font-bold italic">
                  "{step.desc}"
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {step.tasks.map((task, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-4 group hover:bg-white/10 transition-colors">
                       <Zap className="w-3 h-3 text-orange-500" />
                       <span className="text-[9px] md:text-[10px] font-black text-gray-300 uppercase tracking-widest">{task}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Icon Side (Timeline Center) */}
              <div className="relative z-10 w-24 h-24 md:w-32 md:h-32 flex-shrink-0 order-1 lg:order-none group">
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-full blur-2xl opacity-20 animate-pulse`} />
                <div className="absolute -inset-1 bg-white/10 rounded-full scale-0 group-hover:scale-105 transition-transform duration-500" />
                <div className={`w-full h-full bg-black border-2 border-white/20 rounded-full flex items-center justify-center relative shadow-[0_0_50px_rgba(0,0,0,0.5)] z-20 group-hover:border-white transition-all`}>
                  <step.icon className="w-8 h-8 md:w-12 md:h-12 text-white" />
                </div>
                {/* Visual Branch Decoration */}
                <div className={`hidden lg:block absolute top-1/2 w-20 h-px bg-gradient-to-r ${idx % 2 === 0 ? 'from-white/20 to-transparent -right-20' : 'from-transparent to-white/20 -left-20'} -translate-y-1/2`} />
              </div>

              {/* Empty Space for layout */}
              <div className="flex-1 hidden lg:block" />
            </div>
          ))}
        </div>

        {/* Closing Battle Summary */}
        <div className="mt-60 reveal">
           <div className="relative glass p-12 md:p-20 overflow-hidden border-orange-500/20 max-w-5xl mx-auto text-center">
              <div className="absolute top-0 left-0 w-20 h-20 bg-orange-600/10 blur-3xl rounded-full" />
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-cyan-600/10 blur-3xl rounded-full" />
              
              <div className="relative z-10">
                <span className="text-[10px] font-black tracking-[0.5em] text-orange-500 uppercase mb-8 block">// THE FINAL MANIFESTATION</span>
                <h4 className="text-4xl md:text-6xl font-anime font-black text-white mb-10 uppercase tracking-tighter">SURVIVAL <br className="md:hidden" /> THROUGH <span className="text-orange-500">PRECISION</span></h4>
                <p className="text-gray-400 text-sm md:text-xl font-bold uppercase tracking-widest leading-relaxed max-w-3xl mx-auto mb-16">
                  Our battle plan is designed to eliminate uncertainty and maximize impact. From the first line of code to the final deployment, we ensure your legend is built on a foundation of pure engineering power.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <a href="#/contact" className="w-full sm:w-auto px-16 py-6 bg-white text-black font-black tracking-[0.3em] uppercase hover:bg-orange-600 hover:text-white transition-all text-xs">
                    ENLIST YOUR VISION
                  </a>
                  <a href="#/portfolio" className="w-full sm:w-auto px-16 py-6 border border-white/10 text-white font-black tracking-[0.3em] uppercase hover:bg-white/10 transition-all text-xs flex items-center justify-center gap-3">
                    SEE THE RESULTS <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
           </div>
        </div>

        {/* Process Visual Icons */}
        <div className="mt-40 flex flex-wrap justify-center gap-12 md:gap-24 reveal opacity-20 grayscale">
          <Activity className="w-12 h-12 text-white" />
          <Cpu className="w-12 h-12 text-white" />
          <Layers className="w-12 h-12 text-white" />
          <Terminal className="w-12 h-12 text-white" />
          <Rocket className="w-12 h-12 text-white" />
        </div>
      </div>
    </div>
  );
};

export default Process;
