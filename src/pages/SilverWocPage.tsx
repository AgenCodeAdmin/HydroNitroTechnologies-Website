
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { Check, ArrowLeft, Layers, MousePointer2, Smartphone, Globe, ShieldCheck, ArrowRight } from 'lucide-react';

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

const SilverWocPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { title: "Architectural Landing Page", desc: "A high-conversion layout designed to tell your brand story with precision.", icon: <Globe className="w-6 h-6 text-blue-600" /> },
    { title: "Immersive About Page", desc: "Deep-dive into your heritage and craft to build instant customer trust.", icon: <Layers className="w-6 h-6 text-blue-600" /> },
    { title: "Quick-View Overlays", desc: "Elegant product popups that allow rapid browsing without leaving the page.", icon: <MousePointer2 className="w-6 h-6 text-blue-600" /> },
    { title: "WOC Studio Admin", desc: "A simplified, powerful dashboard to manage your catalogue with ease.", icon: <ShieldCheck className="w-6 h-6 text-blue-600" /> }
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 overflow-x-hidden">
      <SEO 
        title="Silver WOC Plan | Entry Level E-Commerce Website in Karnataka"
        description="Launch your B2C brand with the Silver WOC Plan by Hydro Nitro Technologies LLP. Affordable, high-performance e-commerce website development in Davanagere."
        keywords="affordable e-commerce website, silver woc plan, start e-commerce business karnataka, online catalog davanagere, basic digital storefront, custom ecommerce website development, hire ecommerce developers, headless ecommerce architecture benefits, b2b ecommerce platform development, custom shopify web development agency, magento custom ecommerce development, custom online storefront builder price, ecommerce payment gateway integration services, secure multi vendor ecommerce website development, custom web design for online retail store"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Silver WOC Plan",
          "description": "Essential e-commerce website development for emerging B2C brands.",
          "offers": {
            "@type": "Offer",
            "price": "9999",
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
          01
        </div>

        <div className="relative z-10">
          <Link to="/woc-plans" className="inline-flex items-center text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-8 hover:translate-x-[-4px] transition-transform">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Matrix
          </Link>
          
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-slate-900 mb-8 leading-[0.85] animate-in fade-in slide-in-from-bottom-10 duration-1000">
            THE SHOWROOM <br />
            <span className="text-blue-600 italic uppercase">Foundation.</span>
          </h1>
          
          <div className="flex flex-col md:flex-row gap-12 items-start md:items-center mt-12 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <div className="flex-1">
              <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl">
                The Silver WOC is engineered for brands moving from social media to a professional digital domain. 
                A lean, high-performance catalogue that prioritizes your products.
              </p>
            </div>
            <div className="flex-shrink-0 bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl">
              <div className="text-[0.6rem] font-black uppercase tracking-[0.3em] text-blue-400 mb-2">Starting Investment</div>
              <div className="relative inline-block w-fit mb-1 opacity-50">
                <span className="text-lg text-slate-400 font-bold line-through decoration-red-500 decoration-2 italic tracking-tighter">
                  ₹24,999
                </span>
              </div>
              <div className="text-4xl md:text-5xl font-heading font-black">
                <AnimateNumber start={24999} end={19999} prefix="₹" isPrice={true} mode="down" />
              </div>
              <div className="text-[0.6rem] font-bold text-slate-400 mt-1 uppercase tracking-widest">/ YEAR</div>
            </div>
          </div>
        </div>
      </section>

      {/* Anatomy Section - Reduced Void Space */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-50 rounded-[3rem] my-12 border border-slate-100">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <h2 className="font-heading text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">
            Anatomy of <span className="text-blue-600">Excellence.</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Every element of the Silver tier is optimized for speed, clarity, and conversion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <Reveal key={i} delay={i * 150}>
              <div className="bg-white p-10 h-full rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-100 transition-all duration-500 group">
                <div className="mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">{f.icon}</div>
                <h3 className="font-heading text-xl font-bold mb-4 tracking-tight">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Scalability Section - Increased Mobile Number Size */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center relative">
        <div className="flex-1 relative animate-in fade-in slide-in-from-left-10 duration-1000 z-10">
          <div className="text-[50vw] lg:text-[25vw] font-black text-blue-600/5 absolute -top-20 -left-10 leading-none select-none pointer-events-none">399</div>
          <h2 className="font-heading text-5xl md:text-7xl font-black tracking-tighter leading-none mb-8 relative z-10 uppercase">
            SCALABILITY <br /> BY DESIGN.
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed mb-10 relative z-10">
            The Silver WOC empowers your brand with a massive capacity of up to 399 Products. 
            This ensures your digital catalogue can grow as your inventory expands.
          </p>
          <div className="flex items-center space-x-8 relative z-10">
            <div>
              <div className="text-4xl font-black font-heading text-blue-600">
                <AnimateNumber end={399} />
              </div>
              <div className="text-[0.6rem] font-black uppercase tracking-widest text-slate-400">Products</div>
            </div>
            <div className="h-12 w-[1px] bg-slate-200" />
            <div>
              <div className="text-4xl font-black font-heading text-blue-600">100%</div>
              <div className="text-[0.6rem] font-black uppercase tracking-widest text-slate-400">Responsive</div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-slate-900 rounded-[3.5rem] p-12 overflow-hidden shadow-2xl relative min-h-[500px] flex items-center justify-center animate-in fade-in slide-in-from-right-10 duration-1000">
           <Smartphone className="w-64 h-64 text-blue-600/20 absolute -bottom-10 -right-10 transform rotate-12" />
           <div className="relative z-10 text-center">
              <div className="bg-blue-600/20 text-blue-400 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest inline-block mb-6">Mobile First</div>
              <h3 className="text-white font-heading text-4xl font-bold mb-6 tracking-tighter uppercase">Luxury in your pocket.</h3>
              <p className="text-slate-400">Every Silver WOC is architected to look stunning on high-end iPhones and Android devices alike.</p>
           </div>
        </div>
      </section>

      {/* CTA Bridge */}
      <section className="py-40 px-4 text-center bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="font-heading text-5xl md:text-8xl font-black mb-10 tracking-tighter uppercase italic leading-none animate-in slide-in-from-bottom-10 duration-1000">Ready to Launch?</h2>
          <p className="text-xl text-slate-400 mb-14 animate-in fade-in duration-1000 delay-300">Initiate your showroom foundation today and command your digital market.</p>
          <div className="flex justify-center w-full">
            <Button asChild size="lg" className="h-16 md:h-20 w-full md:w-auto px-10 md:px-16 rounded-full bg-blue-600 text-white text-base md:text-xl font-black uppercase tracking-[0.2em] hover:bg-blue-500 transition-all duration-500 shadow-[0_0_50px_rgba(37,99,235,0.3)] active:scale-95 group">
              <Link to="/#contact" className="flex items-center justify-center">
                Launch Silver WOC <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-2" />
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

export default SilverWocPage;
