
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { ArrowRight, ArrowLeft, Instagram, Facebook, MessageCircle, Share2, Target, Zap, ShieldCheck, Heart, Check } from 'lucide-react';

// Precision Numeric Animation
const AnimateNumber = ({ end, suffix = "" }: { end: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number | null = null;
    const duration = 2000;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuint = 1 - Math.pow(1 - progress, 5);
      setCount(Math.floor(easeOutQuint * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, end]);

  return <div ref={ref} className="inline-block tabular-nums">{count}{suffix}</div>;
};

// Premium Reveal Wrapper for Scroll Animation
const Reveal = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Only unobserve if we want it to stay visible after one scroll
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`transition-all duration-[1000ms] transform ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

// Floating Icon Component
const FloatingIcon = ({ icon: Icon, color, size, top, left, delay, duration }: any) => (
  <div 
    className="absolute pointer-events-none opacity-[0.15] animate-float z-0"
    style={{ 
      top, left, 
      animationDelay: delay,
      animationDuration: duration
    }}
  >
    <Icon size={size} className={color} />
  </div>
);

const DigitalMediaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const capabilities = [
    { title: "Strategic Storytelling", desc: "Narrating your brand's heritage across platforms to build deep emotional equity.", icon: <Heart className="w-6 h-6" /> },
    { title: "High-ROI Advertising", desc: "Meta-ad ecosystems engineered to convert passive scrolls into aggressive sales.", icon: <Zap className="w-6 h-6" /> },
    { title: "Viral Content DNA", desc: "High-definition creative assets designed specifically for the Indian luxury market.", icon: <Share2 className="w-6 h-6" /> },
    { title: "Community Concierge", desc: "Elite engagement strategies that turn your followers into lifetime brand loyalists.", icon: <MessageCircle className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 overflow-x-hidden relative">
      <SEO 
        title="Digital Media Automation Agency in Bangalore & Mysore | Hydro Nitro Technologies LLP"
        description="Hydro Nitro Technologies LLP drives high-performance digital marketing, media automation, and branding for businesses in Bangalore, Mysore, Mangaluru, Davanagere, Hubli, and Shivamogga."
        keywords="digital media automation bangalore, digital marketing agency mysore, social media management mangaluru, performance marketing hubli, branding agency shivamogga, ad agency davanagere, hydro nitro technologies llp media, digital marketing agency near me, hire digital marketing services for small business, social media management packages price, b2b lead generation companies, seo services for local business, how to increase website traffic organically, google ads management agency cost, content marketing strategy for brand growth, best online marketing business solutions, digital marketing ROI calculator"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Digital Media & Performance Marketing",
          "provider": {
            "@type": "Organization",
            "name": "Hydro Nitro Technologies LLP"
          },
          "areaServed": [
            { "@type": "City", "name": "Bangalore" },
            { "@type": "City", "name": "Mysore" },
            { "@type": "City", "name": "Mangaluru" },
            { "@type": "City", "name": "Davanagere" },
            { "@type": "City", "name": "Hubli" },
            { "@type": "City", "name": "Shivamogga" }
          ]
        }}
      />
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-40px) rotate(5deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
          .animate-float {
            animation: float 10s ease-in-out infinite;
          }
        `}
      </style>

      <div className="fixed top-4 left-0 right-0 z-[100] flex justify-center px-4">
        <Navbar />
      </div>

      {/* Hero Section - Icons moved to Right */}
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-20 pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        
        {/* ALL Icons moved to the Right Half to balance text */}
        <FloatingIcon icon={Instagram} color="text-pink-500" size={120} top="10%" left="65%" delay="0s" duration="10s" />
        <FloatingIcon icon={Facebook} color="text-blue-600" size={150} top="55%" left="75%" delay="2s" duration="12s" />
        <FloatingIcon icon={MessageCircle} color="text-green-500" size={100} top="25%" left="85%" delay="1s" duration="9s" />
        <FloatingIcon icon={Share2} color="text-blue-400" size={180} top="65%" left="80%" delay="3s" duration="15s" />

        <div className="relative z-10 w-full">
          <Link to="/" className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-4 hover:translate-x-[-4px] transition-transform">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
          
          <div className="space-y-4 w-full flex flex-col items-start">
            <h1 className="font-heading text-[25vw] sm:text-[12vw] lg:text-[12rem] font-black tracking-tighter text-slate-900 leading-[0.75] uppercase transform scale-x-[1.15] sm:scale-x-100 origin-left inline-block w-full">
              MEDIA <br />
              <span className="text-blue-600 font-black italic">MASTERY.</span>
            </h1>
            <div className="bg-blue-600 h-2 w-[150px] max-w-[200px] rounded-full" />
          </div>
          
          <div className="mt-12 max-w-5xl">
             <Reveal delay={200}>
                <h2 className="font-heading text-4xl md:text-6xl font-black text-slate-800 mb-6 tracking-tight leading-[1] uppercase">
                  Command The <br/> Conversation.
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="text-[12px] sm:text-base font-black uppercase tracking-[0.4em] text-blue-600 whitespace-nowrap">Dream • Build • Inspire</div>
                  <div className="hidden sm:block h-[1px] flex-grow bg-slate-100 sm:bg-blue-600" />
                </div>
             </Reveal>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 border-t border-slate-50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
            <Reveal>
              <div className="font-sans font-medium text-slate-700 leading-snug text-xl md:text-3xl space-y-6 tracking-tight">
                <p className="border-l-4 sm:border-l-8 border-blue-600 pl-6 sm:pl-10">
                  Your Growth Architects in the Digital Arena.
                </p>
                <p className="text-slate-500 text-base md:text-xl leading-relaxed max-w-2xl font-normal">
                  In a world of noise, we engineer the <strong>signal.</strong> Hydro Nitro Technologies uses data-driven intelligence to ensure your luxury brand dominates the digital arena.
                </p>
                <p className="text-blue-600 font-black text-[10px] sm:text-sm uppercase tracking-[0.3em]">
                  Your Vision, Engineered without limits.
                </p>
              </div>
            </Reveal>
            
            <div className="flex justify-between items-end gap-4 sm:gap-16 pt-8 border-t border-slate-100">
               <div className="flex flex-col">
                  <div className="text-4xl md:text-7xl font-black font-heading text-slate-900 tracking-tighter leading-none"><AnimateNumber end={100} suffix="%" /></div>
                  <div className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.1em] text-blue-600 mt-2">Commitment</div>
               </div>
               <div className="flex flex-col">
                  <div className="text-4xl md:text-7xl font-black font-heading text-slate-900 tracking-tighter leading-none"><AnimateNumber end={24} suffix="/7" /></div>
                  <div className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.1em] text-blue-600 mt-2">Architecture</div>
               </div>
               <div className="flex flex-col">
                  <div className="text-4xl md:text-7xl font-black font-heading text-slate-900 tracking-tighter leading-none"><AnimateNumber end={0} suffix="%" /></div>
                  <div className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.1em] text-blue-600 mt-2">Compromise</div>
               </div>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <Reveal delay={200}>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                  alt="Media Mastery" 
                  className="relative w-full aspect-[4/5] object-cover rounded-[2rem] shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-slate-900 text-white p-5 sm:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] shadow-2xl border border-white/10 hidden md:block">
                   <ShieldCheck className="w-6 h-6 sm:w-12 sm:h-12 text-blue-400 mb-2 sm:mb-4" />
                   <div className="text-[8px] sm:text-xs font-black uppercase tracking-widest leading-tight">Elite Digital <br/> Excellence.</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Capabilities Grid - DARK THEME & PERSISTENT GLOW */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-50">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="font-heading text-4xl md:text-7xl font-black text-gray-900 mb-4 tracking-tighter uppercase leading-none">
              SOVEREIGN <span className="text-blue-600">DNA.</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg font-medium px-4">
              We engineer content that captures, engages, and converts at scale.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-2">
          {capabilities.map((item, idx) => (
            <Reveal key={idx} delay={idx * 150}>
              <div className="relative group rounded-[2.5rem] bg-slate-900 p-10 h-full border border-blue-500/20 shadow-2xl transition-all duration-500 overflow-hidden">
                
                {/* PERSISTENT SEMICIRCLE GLOW */}
                <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-blue-600/30 rounded-full blur-[60px]" />

                <div className="relative z-10">
                  <div className="mb-8 p-4 bg-blue-600 rounded-2xl w-fit shadow-lg shadow-blue-600/20">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6 text-white" })}
                  </div>
                  <h3 className="font-heading text-2xl font-black text-white mb-4 tracking-tighter uppercase leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm md:text-lg font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4 text-center bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <Reveal>
            <h2 className="font-heading text-5xl md:text-[10rem] font-black mb-10 tracking-tighter text-slate-900 leading-[0.8] uppercase">
              DOMINATE <br/> <span className="text-blue-600 italic uppercase">THE ARENA.</span>
            </h2>
            <p className="text-sm md:text-2xl text-slate-500 mb-12 font-bold uppercase tracking-[0.2em] max-w-3xl mx-auto leading-tight px-4">
              Initiate your digital sovereignty and command your market's attention.
            </p>
            
            <div className="flex justify-center w-full px-4">
              <Button asChild size="lg" className="h-16 md:h-24 w-full md:w-auto px-12 rounded-full bg-slate-900 text-white text-sm font-black uppercase tracking-[0.2em] hover:bg-blue-600 transition-all duration-500 shadow-2xl active:scale-95 group">
                <Link to="/#contact" className="flex items-center justify-center">
                  INITIATE BRAND SOVEREIGNTY <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
        <div className="absolute bottom-0 right-0 opacity-[0.12] font-heading text-[30vw] font-black translate-y-[5%] select-none pointer-events-none tracking-tighter text-blue-600 uppercase">MASTERY</div>
      </section>

      <FooterSection />
    </div>
  );
};

export default DigitalMediaPage;
