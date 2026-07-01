
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { WOC_TIERS } from '@/lib/data/woc-tiers';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Star, ShieldCheck, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import { SEO } from '@/components/SEO';

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
    <div ref={containerRef} className="inline-block">
      {prefix}{isPrice ? count.toLocaleString('en-IN') : count}{suffix}
    </div>
  );
};

// Component for Staggered Feature Entry
const FeatureItem = ({ text, delay, isDiamond }: { text: string, delay: number, isDiamond: boolean }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLLIElement>(null);

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
      <Check className={`w-3.5 h-3.5 mr-3 mt-0.5 flex-shrink-0 ${isDiamond ? 'text-blue-400' : 'text-blue-600'}`} />
      <span className={isDiamond ? 'text-slate-300' : 'text-slate-700'}>{text}</span>
    </li>
  );
};

const WocPlansPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 overflow-x-hidden">
      <SEO 
        title="WOC E-Commerce Plans | Web Online Catalogues in Karnataka"
        description="Choose from Silver, Gold, and Diamond WOC Plans. Get a high-performance e-commerce website designed for Indian B2C brands to multiply sales."
        keywords="e-commerce website pricing, online catalog website cost, e-commerce development agency karnataka, bespoke digital storefronts, hydro nitro technologies llp woc, custom ecommerce website development, hire ecommerce developers, headless ecommerce architecture benefits, b2b ecommerce platform development, custom shopify web development agency, magento custom ecommerce development, custom online storefront builder price, ecommerce payment gateway integration services, secure multi vendor ecommerce website development, custom web design for online retail store"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Web Online Catalogue (WOC) Plans",
          "description": "High-end e-commerce website development plans for B2C businesses.",
          "provider": {
            "@type": "Organization",
            "name": "Hydro Nitro Technologies LLP"
          }
        }}
      />
      <div className="fixed top-4 left-0 right-0 z-[100] flex justify-center px-4">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
          <Zap className="w-3 h-3 text-blue-600" />
          <span>The Web Online Catalogue (WOC) Series</span>
        </div>
        <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-slate-900 mb-8 leading-[0.85] animate-in fade-in slide-in-from-bottom-10 duration-1000 uppercase">
          BUILD TRUST. <br />
          <span className="text-blue-600 italic">Multiply Sales.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-2xl text-slate-500 font-medium px-4">
          In the Indian B2C market, a premium brand experience is the difference between a bounce and a checkout. Upgrade to a professional WOC storefront and put your retail business on autopilot.
        </p>
      </section>

      {/* Pricing Section - UNIFORM WIDTH & PERFECT ALIGNMENT */}
      <section className="px-4 pb-40 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 items-stretch">
          
          {WOC_TIERS.map((tier, index) => {
            const isGold = tier.id === 'gold';
            const isDiamond = tier.id === 'diamond';
            const isSilver = tier.id === 'silver';

            return (
              <div 
                key={tier.id}
                style={{ 
                  top: `${100 + (index * 20)}px`,
                  zIndex: (index + 1) * 10 
                }}
                className={`sticky lg:static group rounded-[2.5rem] lg:rounded-[3.5rem] transition-all duration-700 border flex flex-col mb-4 lg:mb-0 w-full
                  ${isDiamond 
                    ? 'bg-slate-900 text-white border-blue-500/50 shadow-2xl' 
                    : isGold 
                    ? 'bg-white border-slate-200 text-slate-900 shadow-xl'
                    : 'bg-slate-50 border-slate-200 text-slate-900 shadow-lg'}
                  
                  hover:shadow-[0_0_60px_rgba(37,99,235,0.1)]
                  origin-bottom
                `}
              >
                <div className="p-8 md:p-12 h-full flex flex-col relative">
                  {/* Badge Area - Perfectly horizontal across cards */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-50">
                    {isDiamond && (
                      <div className="bg-blue-600 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl flex items-center whitespace-nowrap min-h-[32px]">
                        <Star className="w-3 h-3 mr-2 fill-white" /> The Elite Standard
                      </div>
                    )}
                    {isGold && (
                      <div className="bg-slate-900 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl flex items-center whitespace-nowrap min-h-[32px]">
                        <Zap className="w-3 h-3 mr-2 text-blue-400" /> Best Seller
                      </div>
                    )}
                    {!isDiamond && !isGold && <div className="min-h-[32px]" />}
                  </div>

                  <div className="flex flex-col h-full relative mt-4">
                    {/* Header Area - Locked Height for Desktop Rhythm & One-Line Titles */}
                    <div className="mb-4 lg:min-h-[220px]">
                      <span className={`text-[0.6rem] font-black uppercase tracking-[0.2em] mb-2 block ${isDiamond ? 'text-blue-400' : 'text-slate-400'}`}>
                        {tier.tagline}
                      </span>
                      <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 tracking-tighter whitespace-nowrap overflow-hidden text-ellipsis">
                        {tier.name}
                      </h2>
                      
                      {/* Sub-header locked height */}
                      <div className="min-h-[40px] mb-4">
                        {tier.multiplier && (
                          <div className={`text-[0.6rem] font-bold px-3 py-1.5 rounded-xl ${isDiamond ? 'bg-blue-600/20 text-blue-400 border-blue-500/30' : 'bg-blue-600/10 text-blue-600 border-blue-600/10'} border uppercase tracking-tighter inline-block`}>
                            {tier.multiplier}
                          </div>
                        )}
                      </div>

                      <p className={`text-sm leading-relaxed font-medium ${isDiamond ? 'text-slate-400' : 'text-slate-500'}`}>
                        {tier.description}
                      </p>
                    </div>

                    {/* Pricing Area - Locked Height for Absolute Horizontal Line */}
                    <div className="mb-8 lg:min-h-[100px] flex flex-col justify-end">
                      <div className="relative inline-block w-fit mb-1 min-h-[24px]">
                        {tier.originalPrice && (
                          <span className="text-lg text-slate-500 font-bold line-through decoration-red-500 decoration-2 italic tracking-tighter opacity-60">
                            {tier.originalPrice}
                          </span>
                        )}
                      </div>
                      <div className="flex items-baseline">
                        <span className="text-4xl lg:text-5xl xl:text-6xl font-heading font-black tracking-tight">
                          <AnimateNumber 
                            start={tier.anchorPrice} 
                            end={tier.rawPrice} 
                            prefix="₹" 
                            isPrice={true} 
                            mode="down" 
                          />
                        </span>
                        <span className={`ml-2 text-[10px] font-black uppercase tracking-[0.2em] ${isDiamond ? 'text-slate-500' : 'text-slate-400'}`}>/ YEAR</span>
                      </div>
                    </div>

                    {/* Feature Content */}
                    <div className="flex-grow flex flex-col space-y-6">


                      <ul className="space-y-4 mb-10">
                        {tier.features.map((feature, fIdx) => (
                          <FeatureItem 
                            key={fIdx} 
                            text={feature} 
                            delay={fIdx * 50} 
                            isDiamond={isDiamond} 
                          />
                        ))}
                      </ul>
                    </div>

                    {/* CTA Area */}
                    <div className="mt-auto pt-6">
                      <Button asChild size="lg" className={`w-full rounded-[1.8rem] h-16 text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 active:scale-95 group
                        ${isDiamond 
                          ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-2xl' 
                          : 'bg-slate-900 hover:bg-slate-800 text-white shadow-lg'}
                      `}>
                        <Link to={isSilver ? "/woc/silver" : isGold ? "/woc/gold" : isDiamond ? "/woc/diamond" : "/#contact"} className="flex items-center justify-center">
                          {tier.ctaText} <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Custom Section */}
      <section className="py-24 md:py-40 px-4 sm:px-6 lg:px-8 text-center bg-slate-900 text-white overflow-hidden relative min-h-[60vh] flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        <div className="max-w-5xl mx-auto relative z-10 w-full px-4">
          <h2 className="font-heading text-5xl md:text-9xl font-black mb-10 tracking-tighter uppercase italic leading-[0.8]">
            Beyond <br className="md:hidden" /> The Wheel.
          </h2>
          <div className="max-w-3xl mx-auto mb-10 md:mb-14">
            <p className="text-base md:text-2xl text-slate-400 font-medium leading-relaxed">
              "Your Vision, Engineered Without Limits. <br className="hidden md:block" /> 
              Let's Build Your Digital Legacy."
            </p>
          </div>
          <Button asChild size="lg" className="h-16 md:h-20 w-full md:w-auto px-10 md:px-14 rounded-full bg-white text-slate-900 text-sm md:text-xl font-black uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-2xl shadow-white/10">
            <Link to="/custom-development">Custom Development</Link>
          </Button>
        </div>
        <div className="absolute bottom-0 right-0 opacity-[0.08] font-heading text-[28vw] sm:text-[20vw] font-black translate-y-[40%] translate-x-[5%] select-none pointer-events-none leading-none tracking-tighter text-blue-500">
          CUSTOM
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

export default WocPlansPage;
