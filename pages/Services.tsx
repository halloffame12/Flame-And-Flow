
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { Globe, Cpu, Radio, Smartphone, CheckCircle2, ChevronRight, Layers, PenTool, Zap, Activity } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      id: 'web',
      title: 'Website Design & Development',
      version: 'VER: 2.5.0',
      description: 'Engineering ultra-scalable web ecosystems from complex business tools to high-end portfolio platforms.',
      details: 'We specialize in Single Page Applications (SPA), Server-Side Rendering (SSR), and fully optimized architectures that handle high traffic with ease.',
      icon: Globe,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
      features: ['Portfolio Websites', 'Business Ecosystems', 'Landing Pages', 'SPA Architecture', 'SEO Optimization', 'CI/CD Integration'],
      accent: 'orange'
    },
    {
      id: 'ai',
      title: 'AI & Real-Time Integration',
      version: 'VER: 2.5.0',
      description: 'Intelligent systems that automate, predict, and scale using custom ML models and real-time logic.',
      details: 'Bridging the gap between deterministic software and probabilistic learning. We integrate computer vision, predictive modeling, and live processing.',
      icon: Cpu,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-400/10',
      features: ['Custom ML Models', 'Computer Vision (OpenCV)', 'Predictive Modeling', 'Process Automation', 'Gemini API Integration', 'Smart Dashboards'],
      accent: 'cyan'
    },
    {
      id: 'realtime',
      title: 'Real-Time Communication',
      version: 'VER: 2.5.0',
      description: 'Low-latency platforms engineered for instant human and data interaction across the globe.',
      details: 'Leveraging Socket.IO, WebRTC, and custom messaging protocols to build platforms like AnonChat with native-like responsiveness.',
      icon: Radio,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      features: ['Instant Messaging', 'Video Conferencing', 'Live Analytics', 'Socket.IO / WebRTC', 'Low Latency Protocols', 'Secure E2EE'],
      accent: 'purple'
    },
    {
      id: 'mobile',
      title: 'Custom Mobile Solutions',
      version: 'VER: 2.5.0',
      description: 'Cross-platform excellence using Flutter & Dart to deliver native performance and cinematic UI.',
      details: 'We build high-end Android and iOS applications with fluid motion, offline-first design, and deep hardware integration.',
      icon: Smartphone,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
      features: ['Flutter / Dart Native', 'Offline Sync Design', 'Smooth UI Animations', 'Native API Access', 'Cross-Platform Performance', 'Store Deployment'],
      accent: 'yellow'
    }
  ];

  const designServices = [
    { title: 'UI/UX Design', icon: PenTool, desc: 'Cinematic visual interfaces focused on user flow.' },
    { title: 'Interactive Animations', icon: Activity, desc: 'Scroll-triggered storytelling and micro-interactions.' },
    { title: 'Performance Profiling', icon: Zap, desc: 'Rigorous optimization for sub-second load times.' }
  ];

  return (
    <div className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="OUR INTEL" title="CORE ENGINEERING STACK" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 reveal">
          {services.map((service) => (
            <div key={service.id} className="group relative bg-[#0a0a0a] border border-white/5 p-8 md:p-12 overflow-hidden hover:border-white/10 transition-all duration-700">
              <div className={`absolute top-0 right-0 p-6 font-mono text-[9px] font-black tracking-widest ${service.color} opacity-40 uppercase`}>
                {service.version}
              </div>

              <div className={`w-16 h-16 md:w-20 md:h-20 ${service.bgColor} rounded-sm flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500`}>
                <service.icon className={`w-8 h-8 md:w-10 md:h-10 ${service.color}`} />
              </div>

              <h3 className="text-3xl md:text-4xl font-anime font-black text-white mb-6 uppercase tracking-tighter group-hover:text-orange-500 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 text-sm md:text-lg mb-4 font-bold uppercase tracking-wider leading-relaxed">
                {service.description}
              </p>
              
              <p className="text-gray-600 text-[10px] md:text-xs font-bold leading-relaxed tracking-widest uppercase mb-12">
                {service.details}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 md:gap-y-6 mb-12 pb-12 border-b border-white/5">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className={`w-4 h-4 ${service.color}`} />
                    <span className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-[0.15em]">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${service.bgColor.replace('/10', '/100')} animate-ping`} />
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">SYSTEMS OPTIMIZED</span>
                </div>
                <NavLink to="/contact" className="w-full sm:w-auto text-center bg-white text-black px-10 py-4 text-[10px] font-black tracking-[0.3em] uppercase hover:bg-orange-600 hover:text-white transition-all flex items-center justify-center gap-3">
                  INITIATE PROJECT <ChevronRight className="w-4 h-4" />
                </NavLink>
              </div>

              {/* Decorative background glow */}
              <div className={`absolute -bottom-20 -right-20 w-60 h-60 ${service.bgColor} blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
            </div>
          ))}
        </div>

        {/* Supplementary Services Section */}
        <div className="mt-40 reveal">
          <SectionTitle subtitle="AUGMENTED SKILLS" title="ADDITIONAL PROTOCOLS" align="center" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
             {designServices.map((ds, i) => (
               <div key={i} className="glass p-12 text-center group border-white/5 hover:border-white/20 transition-all">
                  <div className="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-orange-600/20 transition-colors">
                    <ds.icon className="w-8 h-8 text-gray-400 group-hover:text-orange-500 transition-colors" />
                  </div>
                  <h4 className="text-xl font-black text-white mb-4 uppercase tracking-tighter italic">{ds.title}</h4>
                  <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase leading-relaxed">
                    {ds.desc}
                  </p>
               </div>
             ))}
          </div>
        </div>

        {/* Tech Logo Cloud Replacement (Text Based) */}
        <div className="mt-40 border-t border-white/5 pt-20 text-center reveal">
           <span className="text-[10px] font-black tracking-[0.4em] text-gray-600 uppercase mb-12 block">OUR TECHNICAL ARSENAL</span>
           <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-40">
             {['REACT', 'FLUTTER', 'DART', 'TYPESCRIPT', 'NODE.JS', 'SOCKET.IO', 'POSTGRES', 'FIREBASE', 'GCP', 'DOCKER', 'KUBERNETES', 'GEMINI AI'].map(tech => (
               <span key={tech} className="text-sm md:text-xl font-anime font-black tracking-widest text-white grayscale hover:grayscale-0 hover:text-orange-500 transition-all cursor-default">
                 {tech}
               </span>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
