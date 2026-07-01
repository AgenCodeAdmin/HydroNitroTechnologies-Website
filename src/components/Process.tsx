
import React, { useState, useEffect, useRef } from 'react';
import { Compass, ShieldCheck } from 'lucide-react';
import { PROCESS_DATA, ProcessStage } from '@/lib/data/process';

// Component for individual process stage
const StageCard = ({ stage, index }: { stage: ProcessStage, index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.3 });
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className="relative flex flex-col items-center lg:items-start group px-4 lg:px-6 h-full">
      {/* Index Number Area */}
      <div className="relative z-10 mb-10 text-center lg:text-left w-full lg:pl-2">
        {/* HIGH-INTENSITY BLUE AURA GLOW */}
        <div className={`absolute top-1/2 left-1/2 lg:left-12 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-blue-600/40 rounded-full blur-[70px] transition-all duration-[2000ms]
          ${isVisible ? 'opacity-100 scale-110' : 'opacity-0 scale-75'}
        `} />

        <div className={`text-8xl md:text-[9rem] font-heading font-black transition-all duration-1000 leading-none relative z-10
          ${isVisible ? 'text-blue-600 opacity-100 scale-100' : 'text-slate-100 opacity-50 scale-90'}
        `}>
          0{index + 1}
        </div>
      </div>

      {/* Content Card - LEFT-ALIGNED DESKTOP & WIDE BOX */}
      <div className={`relative z-10 transition-all duration-1000 delay-300 transform w-full flex-grow
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}>
        <div className="lg:p-2 transition-all duration-500 h-full">
          <h3 className="font-heading text-xl md:text-2xl font-black text-slate-900 mb-4 tracking-tighter uppercase leading-tight text-center lg:text-left">
            {stage.title}
          </h3>
          {/* FIXED: Wider box and sharper text size */}
          <p className="font-sans text-[13px] md:text-[15px] text-slate-500 font-medium leading-relaxed max-w-[350px] mx-auto text-justify lg:text-left lg:mx-0">
            {stage.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Process = () => {
  return (
    <section id="process-v2" className="bg-white py-32 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        
        {/* Header - Cinematic Style */}
        <div className="text-center mb-32">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <Compass className="w-3 h-3" />
            <span>The Sovereign Method</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-heading font-black text-gray-900 mb-4 tracking-tighter uppercase leading-[0.9]">
            ENGINEERING YOUR <br/> <span className="text-blue-600 italic">SUCCESS STORY.</span>
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Timeline Grid - WIDE-FLOW ALIGNMENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-y-24 lg:gap-y-0 lg:gap-x-2 items-start">
          {PROCESS_DATA.map((stage, index) => (
            <StageCard 
              key={stage.id} 
              stage={stage} 
              index={index} 
            />
          ))}
        </div>
      </div>

      {/* Background Watermark */}
      <div className="absolute bottom-[-5%] right-0 opacity-[0.03] font-heading text-[25vw] font-black leading-none pointer-events-none select-none text-blue-600 uppercase">FLOW</div>
    </section>
  );
};

export default Process;
