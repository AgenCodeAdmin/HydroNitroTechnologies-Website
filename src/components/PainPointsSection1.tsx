
import React, { useCallback, useEffect, useState, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import * as LucideIcons from "lucide-react";
import { ArrowRight, ArrowLeft, Target, Check } from 'lucide-react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { PAIN_POINTS, PainPoint } from '@/lib/data/pain-points';

// Reveal Wrapper for individual card elements
const SlideReveal = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  return (
    <div 
      className="animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both"
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Component for Staggered Feature Entry (Inside Card)
const FeatureItem = ({ text, delay }: { text: string, delay: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setIsVisible(true), delay);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });
    if (itemRef.current) observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <li 
      ref={itemRef}
      className={`flex items-start text-[11px] font-bold leading-normal uppercase tracking-tight transition-all duration-700 transform
        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
      `}
    >
      <Check className="w-3.5 h-3.5 mr-3 mt-0.5 flex-shrink-0 text-blue-600 group-hover:text-white transition-colors duration-500" />
      <span className="text-slate-700 group-hover:text-blue-50 transition-colors duration-500">{text}</span>
    </li>
  );
};

const PainPointsSection1 = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, slidesToScroll: 1, align: 'center' }, 
    [Autoplay({ delay: 6000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const getIconComponent = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent ? <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-white transition-all duration-500 group-hover:scale-110" /> : null;
  };

  return (
    <section id="challenges" className="bg-white py-16 relative overflow-hidden">
      {/* Cinematic Header */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span>STRATEGIC INTELLIGENCE</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-heading font-black text-gray-900 mb-4 tracking-tighter uppercase leading-[0.9]">
            The Blueprint of <br/> <span className="text-blue-600 italic">Efficiency.</span>
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Carousel Engine */}
        <div className="relative w-full max-w-[1400px] mx-auto px-4 mt-16">
          {!isMobile && (
            <div className="absolute top-1/2 -left-4 -right-4 -translate-y-1/2 flex justify-between pointer-events-none z-20">
              <button onClick={scrollPrev} className="w-14 h-14 rounded-full bg-white border border-slate-100 shadow-xl flex items-center justify-center pointer-events-auto hover:bg-slate-900 hover:text-white transition-all duration-500 group active:scale-90">
                <ArrowLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
              </button>
              <button onClick={scrollNext} className="w-14 h-14 rounded-full bg-white border border-slate-100 shadow-xl flex items-center justify-center pointer-events-auto hover:bg-slate-900 hover:text-white transition-all duration-500 group active:scale-90">
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          )}

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y -ml-4">
              {PAIN_POINTS.map((pp, index) => (
                <div key={pp.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 py-6">
                  <div className="h-full px-2">
                    <div className="bg-white border border-slate-100 p-10 rounded-[2.5rem] h-full shadow-2xl shadow-slate-200/40 flex flex-col items-start text-left group hover:bg-blue-600 transition-all duration-700 relative overflow-hidden">
                      
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-1000" />

                      <SlideReveal delay={100}>
                        <div className="mb-8 p-5 bg-blue-50 rounded-2xl w-fit group-hover:bg-blue-500 group-hover:shadow-lg transition-all duration-500">
                          {getIconComponent(pp.icon)}
                        </div>
                      </SlideReveal>

                      <SlideReveal delay={200}>
                        <h3 className="font-heading text-2xl md:text-3xl font-black text-slate-900 group-hover:text-white mb-4 tracking-tighter uppercase leading-tight transition-colors duration-500">
                          {pp.title}
                        </h3>
                      </SlideReveal>

                      <SlideReveal delay={300}>
                        <p className="font-sans text-base md:text-lg text-slate-500 group-hover:text-blue-50 font-medium leading-relaxed transition-colors duration-500">
                          {pp.description}
                        </p>
                      </SlideReveal>

                      <div className="mt-auto pt-8 w-full">
                        <div className="h-[1px] w-12 bg-slate-100 group-hover:w-full group-hover:bg-white/30 transition-all duration-1000" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {isMobile && (
            <div className="flex justify-center gap-2 mt-6">
              {PAIN_POINTS.slice(0, Math.ceil(PAIN_POINTS.length / 3)).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-200" />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[30%] h-[30%] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-slate-50 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

export default PainPointsSection1;
