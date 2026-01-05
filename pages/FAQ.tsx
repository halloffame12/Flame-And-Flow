
import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'HOW LONG DOES A LEGENDARY PROJECT TAKE?',
      a: 'Typically, a full-scale digital ecosystem takes between 4 to 12 weeks depending on the architectural complexity. We prioritize precision over rush.'
    },
    {
      q: 'DO YOU PROVIDE POST-LAUNCH SUPPORT?',
      a: 'Yes. Our systems are built to endure. We offer maintenance retainers and performance profiling to ensure your project scales as your audience grows.'
    },
    {
      q: 'CAN YOU INTEGRATE CUSTOM AI MODELS?',
      a: 'Absolutely. Founder Sumit specializes in bridging AI/ML logic into production-ready web and mobile applications.'
    },
    {
      q: 'WHICH FRAMEWORKS DO YOU MASTER?',
      a: 'Our primary stack includes React for Web and Flutter for Mobile, backed by robust cloud infrastructures and real-time socket protocols.'
    },
    {
      q: 'DO YOU WORK WITH STARTUPS OR ENTERPRISES?',
      a: 'Both. We specialize in high-growth startups requiring rapid manifestation and enterprises seeking digital modernization with cinematic visuals.'
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle subtitle="KNOWLEDGE BASE" title="COMMON QUERIES" align="center" />
        
        <div className="mt-20 space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border border-white/10 transition-all duration-500 ${
                openIndex === idx ? 'bg-white/5 border-orange-500/30' : 'bg-transparent hover:border-white/20'
              }`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-8 text-left"
              >
                <div className="flex items-center gap-6">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                    openIndex === idx ? 'border-orange-500 bg-orange-500 text-white' : 'border-white/10 text-gray-500'
                  }`}>
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <span className={`text-sm font-black tracking-widest uppercase transition-colors ${
                    openIndex === idx ? 'text-white' : 'text-gray-400'
                  }`}>
                    {faq.q}
                  </span>
                </div>
                {openIndex === idx ? <Minus className="w-5 h-5 text-orange-500" /> : <Plus className="w-5 h-5 text-gray-600" />}
              </button>

              <div className={`overflow-hidden transition-all duration-500 ${
                openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-20 pb-8 text-gray-400 text-lg leading-relaxed italic">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-orange-600/10 border border-orange-500/20 text-center rounded-sm">
          <p className="text-orange-500 font-bold tracking-widest uppercase mb-4 text-xs">Still have questions?</p>
          <a href="#/contact" className="text-white font-anime font-black text-xl hover:text-orange-500 transition-colors">
            TRANSMIT YOUR QUESTION DIRECTLY &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
