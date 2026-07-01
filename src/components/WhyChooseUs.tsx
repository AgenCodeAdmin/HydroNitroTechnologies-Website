
import React, { useState, useEffect, useRef } from 'react';
import parse from 'html-react-parser';
import { ArrowRight, ShieldCheck, Target } from 'lucide-react';
import { WHY_CHOOSE_US_DATA } from '@/lib/data/why-choose-us';

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="why-choose-us" className="bg-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header - Cinematic Style */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <Target className="w-3 h-3" />
            <span>The Competitive Edge</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-heading font-black text-gray-900 mb-4 tracking-tighter uppercase leading-[0.9]">
            Why Partner with <br/> <span className="text-blue-600 italic">The Elite.</span>
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Dynamic Pillars - STATIC PERFORMANCE */}
          <div className="lg:col-span-6 space-y-4">
            {WHY_CHOOSE_US_DATA.map((item, idx) => (
              <div 
                key={item.id}
                onMouseEnter={() => !window.matchMedia("(max-width: 1024px)").matches && setActiveIndex(idx)}
                onClick={() => setActiveIndex(idx)}
                className={`relative rounded-[2.5rem] cursor-pointer transition-all duration-500 border group overflow-hidden
                  ${activeIndex === idx 
                    ? 'bg-slate-900 border-blue-500/50 shadow-2xl lg:translate-x-4' 
                    : 'bg-white border-slate-100 hover:border-blue-200'}
                `}
              >
                <div className="flex flex-col h-full">
                  {/* PADDED TEXT BLOCK */}
                  <div className="p-8 pb-6">
                    <div className="flex items-start gap-6">
                      {/* Digital Index */}
                      <div className={`font-heading text-xl font-black ${activeIndex === idx ? 'text-blue-500' : 'text-slate-200'}`}>
                        0{idx + 1}
                      </div>
                      
                      <div className="flex-1">
                        <h3 className={`text-2xl font-heading font-bold mb-3 tracking-tight transition-colors duration-500
                          ${activeIndex === idx ? 'text-white' : 'text-slate-900'}
                        `}>
                          {item.heading}
                        </h3>
                        
                        <div className={`overflow-hidden transition-all duration-500 ${activeIndex === idx ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                          <div className="text-slate-400 font-sans text-sm md:text-base leading-relaxed">
                            {parse(item.description)}
                          </div>
                        </div>
                      </div>

                      <div className={`mt-1 transition-transform duration-500 ${activeIndex === idx ? 'rotate-90 text-blue-500' : 'text-slate-300'}`}>
                        <ArrowRight size={24} />
                      </div>
                    </div>
                  </div>

                  {/* ZERO-PADDING IMAGE BLOCK (Mobile Only) */}
                  <div className={`lg:hidden transition-all duration-700 overflow-hidden ${activeIndex === idx ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <img 
                      src={item.image_url} 
                      alt={item.heading} 
                      className="w-full h-auto object-cover border-t border-slate-800 shadow-2xl"
                    />
                    <div className="h-[1px] w-full bg-blue-500/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Visual Stage (Desktop Only) */}
          <div className="lg:col-span-6 relative h-[500px] md:h-[650px] hidden lg:block">
            <div className="absolute inset-0 bg-blue-600/5 rounded-[4rem] blur-3xl" />
            
            {WHY_CHOOSE_US_DATA.map((item, idx) => (
              <div 
                key={item.id}
                className={`absolute inset-0 transition-all duration-1000 transform
                  ${activeIndex === idx 
                    ? 'opacity-100 translate-x-0 scale-100 rotate-0 visible' 
                    : 'opacity-0 translate-x-12 scale-95 rotate-2 invisible'}
                `}
              >
                <div className="relative h-full w-full group">
                  <div className="absolute -inset-4 bg-blue-600/10 rounded-[4rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <img 
                    src={item.image_url} 
                    alt={item.heading}
                    className="h-full w-full object-cover rounded-[3.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.1)] border-8 border-white"
                  />
                  
                  {/* Quality Seal */}
                  <div className="absolute bottom-10 -left-10 bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl border border-white/10 animate-in fade-in zoom-in duration-700">
                    <ShieldCheck className="w-10 h-10 text-blue-400 mb-4" />
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] leading-tight">Precision <br/> Engineering.</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Background Watermark */}
      <div className="absolute bottom-[-5%] left-0 opacity-[0.03] font-heading text-[25vw] font-black leading-none pointer-events-none select-none text-blue-600 uppercase">CHOOSE</div>
    </section>
  );
};

export default WhyChooseUs;
