
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { Check, ArrowRight, ArrowLeft, Target, Lightbulb, Zap, ShieldCheck, Star } from 'lucide-react';

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

// Premium Reveal Wrapper
const Reveal = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
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
    <div ref={ref} className={`transition-all duration-[1000ms] transform ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}>
      {children}
    </div>
  );
};

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 overflow-x-hidden">
      <SEO 
        title="About Hydro Nitro Technologies LLP | Digital Architects in Karnataka"
        description="Hydro Nitro Technologies is an elite collective of engineers dedicated to retail and manufacturing digital mastery in Davanagere, Karnataka."
        keywords="about hydro nitro technologies llp, digital architects davanagere, tech agency karnataka, e-commerce experts hubli"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "Hydro Nitro Technologies LLP",
            "description": "Your Growth Architects in the Digital Arena."
          }
        }}
      />
      <div className="fixed top-4 left-0 right-0 z-[100] flex justify-center px-4">
        <Navbar />
      </div>

      {/* Hero Section - MOBILE FIRST 90vh & ELONGATED TEXT */}
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-20 pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        
        <div className="relative z-10 w-full">
          <Link to="/" className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-4 hover:translate-x-[-4px] transition-transform">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
          
          <div className="space-y-4 w-full flex flex-col items-start">
            {/* ELONGATED BOLD STATEMENT - MASSIVE ON MOBILE */}
            <h1 className="font-heading text-[28vw] sm:text-[12vw] lg:text-[12rem] font-black tracking-tighter text-slate-900 leading-[0.9] uppercase transform scale-x-[1.15] sm:scale-x-100 origin-left inline-block w-full">
              THE BRAND <br />
              <span className="text-blue-600 font-black ">DNA</span>
            </h1>
            <div className="bg-blue-600 h-2 w-[150px] max-w-[200px] rounded-full" />
          </div>
          
          <div className="mt-12 max-w-5xl">
             <Reveal delay={200}>
                <h2 className="font-heading text-5xl md:text-6xl font-black text-slate-800 mb-6 tracking-tight leading-[1] uppercase">
                  Hydro Nitro <br/> Technologies LLP
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="text-[15px] sm:text-base font-black uppercase tracking-[0.4em] text-blue-600 whitespace-nowrap">Dream • Build • Inspire</div>
                  <div className="hidden sm:block h-[1px] flex-grow bg-slate-100 sm:bg-blue-600" />
                </div>
             </Reveal>
          </div>
        </div>
      </section>

      {/* Narrative Section - SHORT & POWERFUL */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
            <Reveal>
              <div className="font-sans font-medium text-slate-700 leading-snug text-xl md:text-3xl space-y-6 tracking-tight">
                <p className="border-l-4 sm:border-l-8 border-blue-600 pl-6 sm:pl-10">
                  Your Growth Architects in the Digital Arena.
                </p>
                <p className="text-slate-500 text-base md:text-xl leading-relaxed max-w-2xl font-normal">
                  Hydro Nitro Technologies is an elite collective of engineers dedicated to retail and manufacturing mastery. 
                  We don't just build interfaces; we engineer the <span className="text-blue-600 font-bold">DNA of your success.</span>
                </p>
                <p className="text-blue-600 font-black text-[10px] sm:text-sm uppercase tracking-[0.3em]">
                  Your Vision, Engineered without limits.
                </p>
              </div>
            </Reveal>
            
            {/* Metrics */}
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
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                  alt="Brand Legacy" 
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

      {/* Brand Essence Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-950 rounded-[2.5rem] sm:rounded-[4rem] my-8 sm:my-16 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[100px]" />
        
        <div className="relative z-10 text-center mb-16">
          <Reveal>
            <h3 className="text-blue-400 text-[10px] font-black uppercase tracking-[0.5em] mb-4">Our Core Identity</h3>
            <h2 className="font-heading text-3xl md:text-8xl font-black tracking-tighter uppercase mb-4 leading-none">
              HYDRO NITRO <br/> <span className="text-blue-500 italic">TECHNOLOGIES LLP.</span>
            </h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full mb-4" />
            <p className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-500">Dream • Build • Inspire</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-12 relative z-10">
          {[
            { icon: <Target className="w-8 h-8" />, title: "PRECISION", desc: "Every pixel engineered for accuracy." },
            { icon: <Lightbulb className="w-8 h-8" />, title: "INNOVATION", desc: "We architect the digital algorithms that define trends." },
            { icon: <Zap className="w-8 h-8" />, title: "IMPACT", desc: "Measured by the scale of the success we generate." }
          ].map((item, idx) => (
            <Reveal key={idx} delay={idx * 150}>
              <div className="p-8 sm:p-12 h-full rounded-[2rem] sm:rounded-[3.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all duration-500 group">
                <div className="mb-6 sm:mb-10 p-4 bg-blue-600 rounded-xl w-fit group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                <h3 className="font-heading text-xl sm:text-3xl font-black mb-4 tracking-tighter uppercase">{item.title}</h3>
                <p className="text-slate-400 text-sm sm:text-lg font-medium leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 text-center bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <Reveal>
            <h2 className="font-heading text-5xl md:text-[10rem] font-black mb-8 tracking-tighter text-slate-900 leading-[0.8] uppercase">
              READY TO BE <br/> <span className="text-blue-600 italic uppercase">Memorable?</span>
            </h2>
            <p className="text-sm md:text-2xl text-slate-500 mb-12 font-bold uppercase tracking-[0.2em] max-w-3xl mx-auto leading-tight px-4">
              Initiate your transformation and join the elite ranks of WOC-powered brands.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 px-4 w-full">
              <Button asChild size="lg" className="h-16 w-full sm:w-auto px-12 rounded-full bg-slate-900 text-white text-sm font-black uppercase tracking-[0.2em] hover:bg-blue-600 transition-all duration-500 shadow-2xl active:scale-95 group">
                <Link to="/woc-plans" className="flex items-center justify-center">
                  Explore WOC <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-16 w-full sm:w-auto px-12 rounded-full border-4 border-slate-900 text-slate-900 text-sm font-black uppercase tracking-[0.2em] hover:bg-slate-900 hover:text-white transition-all duration-500">
                <Link to="/#contact" className="flex items-center justify-center">Book Strategy</Link>
              </Button>
            </div>
          </Reveal>
        </div>
        {/* RAISED Watermark */}
        <div className="absolute bottom-0 right-0 opacity-[0.12] font-heading text-[30vw] font-black translate-y-[5%] select-none pointer-events-none tracking-tighter text-blue-600">DNA</div>
      </section>

      <FooterSection />
    </div>
  );
};

export default AboutPage;
