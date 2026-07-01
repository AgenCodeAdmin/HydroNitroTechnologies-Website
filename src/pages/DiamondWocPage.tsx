
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { Check, ArrowRight, ArrowLeft, Brain, Settings, Cpu, Heart, LineChart, Star, ShieldCheck } from 'lucide-react';

// Precision Numeric Animation
const AnimateNumber = ({ 
  start,
  end, 
  duration = 1500, 
  suffix = "", 
  prefix = "",
  isPrice = false,
  mode = "up"
}: { 
  start?: number,
  end: number, 
  duration?: number, 
  suffix?: string, 
  prefix?: string,
  isPrice?: boolean,
  mode?: "up" | "down"
}) => {
  const [count, setCount] = useState(mode === "up" ? 0 : (start || end + 5000));
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number | null = null;
    const startVal = mode === "up" ? (start || 0) : (start || end + 5000);
    const endVal = end;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      if (progress >= 1) {
        setCount(endVal);
        return;
      }
      const easeOutQuint = 1 - Math.pow(1 - progress, 5);
      let current;
      if (mode === "up") {
        current = Math.floor(startVal + (endVal - startVal) * easeOutQuint);
      } else {
        current = Math.ceil(startVal - (startVal - endVal) * easeOutQuint);
      }
      setCount(current);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, start, duration, mode]);

  return (
    <div ref={containerRef} className="inline-block tabular-nums">
      {prefix}{isPrice ? count.toLocaleString('en-IN') : count}{suffix}
    </div>
  );
};

// Premium Reveal Wrapper
const Reveal = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
    >
      {children}
    </div>
  );
};

const DiamondWocPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const eliteFeatures = [
    { title: "Behavioral Intelligence", desc: "Advanced tracking to understand exactly how your customers browse.", icon: <Brain className="w-6 h-6 text-blue-600" /> },
    { title: "Predictive AI Engine", desc: "Automated recommendations based on real-time user behavior.", icon: <Cpu className="w-6 h-6 text-blue-600" /> },
    { title: "Wishlist Heart-Beat", desc: "Engage customers with 'save for later' and return-to-cart logic.", icon: <Heart className="w-6 h-6 text-blue-600" /> },
    { title: "Master Control Center", desc: "Ultimate administrative power over blogs, reviews, and global content.", icon: <Settings className="w-6 h-6 text-blue-600" /> }
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 overflow-x-hidden">
      <SEO 
        title="Diamond WOC Plan | Elite E-Commerce Architecture in Karnataka"
        description="The ultimate e-commerce architecture for elite brands. The Diamond WOC Plan offers bespoke development, AI insights, and unparalleled performance."
        keywords="elite e-commerce website, diamond woc plan, enterprise e-commerce development karnataka, luxury digital storefront bangalore, hydro nitro technologies llp diamond, custom ecommerce website development, hire ecommerce developers, headless ecommerce architecture benefits, b2b ecommerce platform development, custom shopify web development agency, magento custom ecommerce development, custom online storefront builder price, ecommerce payment gateway integration services, secure multi vendor ecommerce website development, custom web design for online retail store"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Diamond WOC Plan",
          "description": "Elite e-commerce architecture and custom development for top-tier B2C brands.",
          "offers": {
            "@type": "Offer",
            "price": "29999",
            "priceCurrency": "INR"
          }
        }}
      />
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="absolute -top-10 -left-10 text-[35vw] font-black text-slate-50 select-none leading-none z-0 tracking-tighter opacity-50">
          03
        </div>

        <div className="relative z-10">
          <Link to="/woc-plans" className="inline-flex items-center text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-8 hover:translate-x-[-4px] transition-transform">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Matrix
          </Link>
          
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-slate-900 mb-8 leading-[0.85] animate-in fade-in slide-in-from-bottom-10 duration-1000">
            THE LUXURY <br />
            <span className="text-blue-600 italic uppercase">Ecosystem.</span>
          </h1>
          
          <div className="flex flex-col md:flex-row gap-12 items-start md:items-center mt-12 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <div className="flex-1">
              <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl">
                The Diamond WOC is the ultimate digital DNA for market leaders. 
                A complete high-tech ecosystem for absolute sector dominance.
              </p>
            </div>
            <div className="flex-shrink-0 bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-blue-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Star className="w-20 h-20 fill-blue-500 text-blue-500" />
              </div>
              <div className="text-[0.6rem] font-black uppercase tracking-[0.3em] text-blue-400 mb-2">The Elite Investment</div>
              <div className="relative inline-block w-fit mb-1 opacity-50 text-lg line-through decoration-red-500">₹37,000</div>
              <div className="text-4xl md:text-6xl font-heading font-black">
                <AnimateNumber start={37000} end={29999} prefix="₹" isPrice={true} mode="down" />
              </div>
              <div className="text-[0.6rem] font-bold text-slate-400 mt-1 uppercase tracking-widest">/ YEAR</div>
            </div>
          </div>
        </div>
      </section>

      {/* Anatomy Section - Reduced Void Space */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-900 rounded-[3rem] my-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <h2 className="font-heading text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">
            Anatomy of <span className="text-blue-400">Intelligence.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium">
            Beyond just a catalogue, the Diamond tier provides data-driven insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {eliteFeatures.map((f, i) => (
            <Reveal key={i} delay={i * 150}>
              <div className="bg-slate-800/50 p-10 h-full rounded-[2rem] border border-slate-700 shadow-2xl hover:border-blue-500/50 transition-all duration-500 group">
                <div className="mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">{f.icon}</div>
                <h3 className="font-heading text-xl font-bold mb-4 tracking-tight">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Unlimited Section - Increased Mobile Infinity Visibility */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center relative">
        <div className="flex-1 relative animate-in fade-in slide-in-from-left-10 duration-1000 z-10">
          <div className="text-[50vw] lg:text-[25vw] font-black text-blue-600/5 absolute -top-20 -left-10 leading-none select-none pointer-events-none">∞</div>
          <h2 className="font-heading text-5xl md:text-7xl font-black tracking-tighter leading-none mb-8 relative z-10 uppercase">
            INFINITE <br /> SCALE.
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed mb-10 relative z-10 font-medium">
            Diamond WOC removes all barriers with **Unlimited Product Capacity**.
          </p>
          <div className="flex flex-wrap items-center gap-12 relative z-10">
            <div className="group transition-transform hover:scale-105 duration-300">
              <div className="text-5xl font-black font-heading text-blue-600 italic">∞</div>
              <div className="text-[0.65rem] font-black uppercase tracking-widest text-slate-400">Products Capacity</div>
            </div>
            <div className="h-12 w-[1px] bg-slate-200 hidden sm:block" />
            <div className="group transition-transform hover:scale-105 duration-300">
              <div className="text-5xl font-black font-heading text-blue-600">10X</div>
              <div className="text-[0.65rem] font-black uppercase tracking-widest text-slate-400">Elite Value</div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-slate-900 rounded-[3.5rem] p-12 overflow-hidden shadow-2xl relative min-h-[500px] flex items-center justify-center animate-in fade-in slide-in-from-right-10 duration-1000 group">
           <LineChart className="w-64 h-64 text-blue-600/20 absolute -bottom-10 -right-10 transform rotate-6" />
           <div className="relative z-10 text-center px-4">
              <div className="bg-blue-600 text-white px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] inline-block mb-8 shadow-xl">Ultimate DNA</div>
              <h3 className="text-white font-heading text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase leading-[0.9]">Empire <br/> Engineering.</h3>
              <p className="text-slate-400 text-lg font-medium max-w-sm mx-auto">Advanced infrastructure for high-volume luxury brands.</p>
           </div>
        </div>
      </section>

      {/* CTA Bridge */}
      <section className="py-40 px-4 text-center bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        <div className="max-w-4xl mx-auto relative z-10 px-4">
          <h2 className="font-heading text-5xl md:text-8xl font-black mb-10 tracking-tighter uppercase italic leading-[0.85] animate-in slide-in-from-bottom-10 duration-1000">Build Your Empire.</h2>
          <div className="flex justify-center w-full">
            <Button asChild size="lg" className="h-16 md:h-20 w-full md:w-auto px-10 md:px-16 rounded-full bg-blue-600 text-white text-base md:text-xl font-black uppercase tracking-[0.2em] hover:bg-blue-500 transition-all duration-500 shadow-[0_0_80px_rgba(37,99,235,0.5)] active:scale-95 group">
              <Link to="/#contact" className="flex items-center justify-center">
                Claim Diamond WOC <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* WOC Integrity Promise Section */}
      <section className="py-20 px-4 text-center border-t border-slate-50 bg-white">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex justify-center items-center space-x-2 text-slate-400">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em]">WOC Integrity Promise</span>
          </div>
          <p className="text-[10px] md:text-sm text-slate-500 leading-relaxed font-bold px-4 tracking-tight uppercase">
            Professional development and engineering fees apply as per the selected WOC plan. 
            Operational infrastructure costs are handled independently for maximum transparency.
          </p>
          <Link to="/terms/woc" className="inline-block text-[10px] font-black text-blue-600 border-b-2 border-blue-600/20 hover:border-blue-600 transition-all pb-1 uppercase tracking-widest">
            VIEW WOC PLAN TERMS & CONDITIONS
          </Link>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default DiamondWocPage;
