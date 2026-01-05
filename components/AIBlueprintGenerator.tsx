
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Terminal, ChevronRight, Loader2 } from 'lucide-react';

const AIBlueprintGenerator: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [blueprint, setBlueprint] = useState<string | null>(null);

  const generateBlueprint = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      // Corrected initialization to use process.env.API_KEY directly as per SDK requirements
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Act as Flame & Flow Studio's Lead Architect. Transform this project idea into a "Legendary Digital Blueprint" with anime-themed technical sections (e.g., "The Core Breath", "Visual Flow", "Scalable Spirit"). Be concise, technical, and cinematic. Idea: ${input}`,
      });
      // response.text is a property, not a method.
      setBlueprint(response.text || 'Mission failed. The energy was unstable.');
    } catch (error) {
      console.error(error);
      setBlueprint('The connection to the digital realm was interrupted.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-20 px-6">
      <div className="glass p-8 md:p-12 border-orange-500/20 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-600 to-cyan-500" />
        
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="text-orange-500 w-5 h-5 animate-pulse" />
          <span className="text-[10px] font-black tracking-[0.4em] text-gray-500 uppercase">AI ARCHITECT // VER 1.0</span>
        </div>

        <h3 className="text-3xl md:text-4xl font-anime font-black text-white mb-6 uppercase tracking-tighter">
          MANIFEST YOUR <span className="text-orange-500">VISION</span>
        </h3>
        
        <p className="text-gray-400 mb-8 max-w-xl">
          Enter your basic concept, and our AI Architect will engineer a legendary technical blueprint for your digital survival.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="A REAL-TIME CHAT FOR WEB3 WARRIORS..."
            className="flex-1 bg-white/5 border border-white/10 p-5 outline-none focus:border-orange-500 transition-all font-bold text-white uppercase tracking-widest placeholder:text-gray-700"
          />
          <button 
            onClick={generateBlueprint}
            disabled={loading}
            className="bg-white text-black px-10 py-5 font-black tracking-widest hover:bg-orange-600 hover:text-white transition-all flex items-center justify-center gap-3 disabled:opacity-50"
          >
            {loading ? <Loader2 className="animate-spin" /> : <Terminal className="w-5 h-5" />}
            {loading ? 'ANALYZING...' : 'GENERATE BLUEPRINT'}
          </button>
        </div>

        {blueprint && (
          <div className="bg-black/50 border border-white/5 p-8 relative animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                <span className="text-[10px] font-black tracking-widest text-orange-500 uppercase">BLUEPRINT TRANSMISSION RECEIVED</span>
                <button onClick={() => setBlueprint(null)} className="text-gray-600 hover:text-white transition-colors text-xs uppercase font-bold tracking-widest">Clear</button>
             </div>
             <div className="prose prose-invert max-w-none">
               <pre className="whitespace-pre-wrap font-mono text-sm text-gray-300 leading-relaxed">
                 {blueprint}
               </pre>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIBlueprintGenerator;
