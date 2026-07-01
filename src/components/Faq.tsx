
import React, { useState } from 'react';
import { Button } from "./ui/button";
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQ_DATA } from '@/lib/data/faqs';

const FaqItem = ({ faq, isOpen, toggle }: { faq: any, isOpen: boolean, toggle: () => void }) => {
  return (
    <div 
      className={`group rounded-[2rem] border transition-all duration-500 mb-4 overflow-hidden
        ${isOpen ? 'bg-slate-900 border-blue-500/50 shadow-2xl scale-[1.01]' : 'bg-white border-slate-100 hover:border-blue-200'}
      `}
    >
      <button 
        onClick={toggle}
        className="w-full px-6 md:px-8 py-6 md:py-8 flex items-center justify-between text-left focus:outline-none"
      >
        <div className="flex items-center gap-4 md:gap-6">
          <div className={`transition-colors duration-500 ${isOpen ? 'text-blue-500' : 'text-slate-300'}`}>
            <HelpCircle className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <span className={`text-base md:text-xl font-heading font-black tracking-tight uppercase leading-tight transition-colors duration-500
            ${isOpen ? 'text-white' : 'text-slate-900'}
          `}>
            {faq.question}
          </span>
        </div>
        <div className={`transition-all duration-500 flex-shrink-0 ${isOpen ? 'rotate-180 text-blue-500' : 'text-slate-300'}`}>
          {isOpen ? <Minus size={20} className="md:w-6 md:h-6" /> : <Plus size={20} className="md:w-6 md:h-6" />}
        </div>
      </button>
      
      <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 md:px-8 pb-8 pt-0 md:ml-12">
          <div className="h-[1px] w-full bg-blue-500/20 mb-6" />
          <p className="font-sans text-sm md:text-lg text-slate-400 leading-relaxed font-medium whitespace-pre-wrap">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section id="faq-v2" className="bg-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header - Cinematic Style */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <MessageCircle className="w-3 h-3" />
            <span>Support Intelligence</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-heading font-black text-gray-900 mb-4 tracking-tighter uppercase leading-[0.9]">
            FREQUENTLY ASKED <br/> <span className="text-blue-600 italic">QUESTIONS.</span>
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-2 items-start">
          {FAQ_DATA.map((faq) => (
            <FaqItem 
              key={faq.id} 
              faq={faq} 
              isOpen={openId === faq.id}
              toggle={() => setOpenId(openId === faq.id ? null : faq.id)}
            />
          ))}
        </div>
      </div>

      {/* Watermark */}
      <div className="absolute top-[10%] right-[-5%] opacity-[0.03] font-heading text-[25vw] font-black leading-none pointer-events-none select-none text-blue-600 uppercase">INTEL</div>
    </section>
  );
};

export default Faq;
