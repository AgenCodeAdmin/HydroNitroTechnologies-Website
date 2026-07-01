
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Code2, Cpu, Share2, ArrowRight, Zap } from 'lucide-react';

const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setIsVisible(true), delay);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`${className} transition-all duration-[1000ms] transform ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}>
      {children}
    </div>
  );
};

const ServicesSection1 = () => {
  return (
    <section id="offerings" className="bg-white py-24 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <Zap className="w-3 h-3" />
            <span>The Business Suite</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-heading font-black text-gray-900 mb-4 tracking-tighter uppercase leading-[0.9]">
            WHAT WE <br/> <span className="text-blue-600 italic text-4xl md:text-7xl">OFFER.</span>
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* BENTO GRID - INTENSE GLOW & CONTRAST */}
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[220px]">
          
          {/* 01. WOC PLANS - Dark Card, Blue Text */}
          <Reveal className="col-span-1 lg:col-span-1 row-span-2 order-1" delay={100}>
            <Link to="/woc-plans" className="group h-full block relative overflow-hidden rounded-[2rem] md:rounded-[3.5rem] bg-slate-900 text-blue-500 p-6 md:p-14 border border-blue-500/30 shadow-2xl hover:scale-[1.1] hover:z-[100] transition-all duration-500 transform-gpu origin-center">
              
              {/* Intensified Watermark */}
              <ShoppingBag className="absolute -bottom-10 -right-10 w-48 h-48 text-blue-600/20 transform -rotate-12 group-hover:scale-110 transition-transform duration-700" />
              
              {/* INTENSE PERSISTENT SEMICIRCLE GLOW (BOTTOM-RIGHT) */}
              <div 
                className="absolute bottom-0 right-0 w-64 h-64 opacity-100 transition-opacity duration-500 pointer-events-none rounded-full"
                style={{ background: 'radial-gradient(circle at bottom right, rgba(37,99,235,0.9) 0%, rgba(37,99,235,0.4) 40%, transparent 70%)', filter: 'blur(80px)' }}
              />

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="p-4 md:p-5 bg-blue-600 rounded-3xl w-fit shadow-xl hover:bg-white hover:text-blue-600 transition-colors">
                  <ShoppingBag className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-3xl md:text-6xl font-black tracking-tighter uppercase leading-none mb-4 text-blue-400">WOC <br/> PLANS</h3>
                  <p className="text-sm md:text-base text-blue-300 font-medium leading-tight max-w-[180px] md:max-w-xs">Premium online catalogues for your Jewelry or Luxury products. Direct inquiries & easy management.</p>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* 02. DIGITAL MEDIA - Light Card, Blue Icon/Text */}
          <Reveal className="col-span-1 lg:col-span-1 row-span-1 order-2" delay={200}>
            <Link to="/digital-media" className="group h-full block relative overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] bg-slate-50 border border-slate-100 p-6 md:p-10 shadow-xl hover:bg-blue-600 hover:scale-[1.1] hover:z-[100] transition-all duration-500 transform-gpu origin-center">
              
              {/* Intensified Watermark */}
              <Share2 className="absolute -top-10 -right-10 w-32 h-32 text-blue-600/10 group-hover:text-white/20 transition-colors duration-500" />
              
              {/* INTENSE SEMICIRCLE GLOW (BOTTOM-RIGHT) */}
              <div 
                className="absolute bottom-0 right-0 w-64 h-64 opacity-100 transition-opacity duration-500 pointer-events-none rounded-full"
                style={{ background: 'radial-gradient(circle at bottom right, rgba(37,99,235,0.9) 0%, rgba(37,99,235,0.4) 40%, transparent 70%)', filter: 'blur(80px)' }}
              />

              <div className="relative z-10 flex flex-col h-full justify-between items-start">
                <div className="p-4 md:p-5 bg-white rounded-2xl group-hover:bg-slate-900 transition-colors w-fit shadow-md">
                  <Share2 className="w-6 h-6 md:w-8 md:h-8 text-blue-600 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl md:text-4xl font-black text-slate-900 group-hover:text-white tracking-tighter uppercase leading-none">DIGITAL MEDIA</h3>
                  <p className="text-xs md:text-base text-slate-500 group-hover:text-blue-50 font-medium leading-tight">Dominate the Digital World with professional ads and bring real customers.</p>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* 03. AUTOMATION */}
          <Reveal className="col-span-1 lg:col-span-1 row-span-1 order-3 lg:order-3" delay={300}>
            <Link to="/automation" className="group h-full block relative overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] bg-slate-100 border border-slate-200 p-6 md:p-12 shadow-xl hover:bg-blue-600 hover:scale-[1.1] hover:z-[100] transition-all duration-500 transform-gpu origin-center">
              
              {/* Intensified Watermark */}
              <Cpu className="absolute -bottom-10 -right-10 w-32 h-32 text-blue-600/10 group-hover:text-white/20 transition-colors duration-500" />
              
              {/* INTENSE SEMICIRCLE GLOW (BOTTOM-RIGHT) */}
              <div 
                className="absolute bottom-0 right-0 w-64 h-64 opacity-100 transition-opacity duration-500 pointer-events-none rounded-full"
                style={{ background: 'radial-gradient(circle at bottom right, rgba(37,99,235,0.9) 0%, rgba(37,99,235,0.4) 40%, transparent 70%)', filter: 'blur(80px)' }}
              />

              <div className="relative z-10 flex flex-tcol h-full justify-between items-start">
                <div className="p-4 md:p-5 bg-white rounded-2xl group-hover:bg-slate-900 transition-colors w-fit shadow-md">
                  <Cpu className="w-6 h-6 md:w-8 md:h-8 text-blue-600 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl md:text-4xl font-black text-slate-900 group-hover:text-white tracking-tighter uppercase leading-none">AUTOMATION</h3>
                  <p className="text-xs md:text-base text-slate-500 group-hover:text-blue-50 font-medium leading-tight">Stop wasting time. We build AI tools that handle your orders and daily tasks.</p>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* 04. CUSTOM DEVELOPMENT */}
          <Reveal className="col-span-2 lg:col-span-2 row-span-1 order-4" delay={400}>
            <Link to="/custom-development" className="group h-full block relative overflow-hidden rounded-[2rem] md:rounded-[3.5rem] bg-white border border-slate-100 p-6 md:p-14 shadow-2xl hover:bg-slate-900 hover:scale-[1.1] hover:z-[100] transition-all duration-500 transform-gpu origin-center">
              
              <Code2 className="absolute top-1/2 -right-10 -translate-y-1/2 w-64 h-64 text-slate-900/10 group-hover:text-white/10 transition-colors duration-500" />
              
              <div 
                className="absolute -bottom-32 -left-32 w-96 h-96 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(circle at bottom left, rgba(37,99,235,0.9) 0%, rgba(37,99,235,0.4) 40%, transparent 70%)', filter: 'blur(50px)' }}
              />

              <div className="relative z-10 flex items-center justify-between h-full w-full">
                <div className="flex items-center gap-6 md:gap-12">
                  <div className="p-5 md:p-8 bg-slate-50 group-hover:bg-blue-600 rounded-[2rem] transition-all shadow-inner">
                    <Code2 className="w-6 h-6 md:w-10 md:h-10 text-blue-600 group-hover:text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-heading text-xl md:text-5xl font-black text-slate-900 group-hover:text-white tracking-tighter uppercase leading-none mb-2">CUSTOM DEVELOPMENT</h3>
                    <p className="text-[10px] md:text-base text-blue-600 group-hover:text-blue-400 font-black uppercase tracking-[0.3em]">Unique software built for your specific business needs.</p>
                  </div>
                </div>
                <div className="hidden md:flex w-16 h-16 rounded-full border border-slate-100 group-hover:bg-blue-600 group-hover:border-blue-600 items-center justify-center transition-all shadow-xl">
                  <ArrowRight className="w-8 h-8 text-slate-300 group-hover:text-white transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </Link>
          </Reveal>

        </div>
      </div>

      {/* Sovereign Watermark */}
      <div className="absolute bottom-[-5%] left-0 opacity-[0.03] font-heading text-[25vw] font-black leading-none pointer-events-none select-none text-blue-600 uppercase">SUITE</div>
    </section>
  );
};

export default ServicesSection1;
