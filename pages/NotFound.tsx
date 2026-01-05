
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShieldAlert, ChevronLeft, Flame } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] animate-pulse" />
      
      <div className="relative z-10">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-red-600/10 border border-red-500/20 rounded-full mb-12">
          <ShieldAlert className="w-12 h-12 text-red-500" />
        </div>
        
        <h1 className="text-7xl md:text-9xl font-anime font-black text-white mb-4 tracking-tighter">
          404
        </h1>
        <div className="text-red-500 text-[10px] font-black tracking-[0.5em] uppercase mb-8 italic">
          PROTOCOL CORRUPTED // PATH NOT FOUND
        </div>
        
        <p className="text-gray-400 text-sm md:text-lg max-w-md mx-auto mb-12 font-bold uppercase tracking-widest leading-relaxed">
          The coordinates you've entered lead to a void. The digital spirit in this region has vanished.
        </p>
        
        <NavLink 
          to="/" 
          className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 text-[10px] font-black tracking-[0.3em] uppercase hover:bg-orange-600 hover:text-white transition-all shadow-xl"
        >
          <ChevronLeft size={16} /> RETURN TO SANCTUARY
        </NavLink>
      </div>

      <div className="absolute bottom-10 left-10 opacity-10">
        <Flame size={120} className="text-red-500" />
      </div>
    </div>
  );
};

export default NotFound;
