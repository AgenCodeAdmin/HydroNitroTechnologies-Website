
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { SEO } from '@/components/SEO';
import FooterSection from '@/components/FooterSection';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, ArrowLeft, Terminal, Cpu, Code2, Globe2, Sparkles, Layers, ShieldCheck, Zap } from 'lucide-react';

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
    <div ref={ref} className={`transition-all duration-[1000ms] transform ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
      {children}
    </div>
  );
};

const CustomDevelopmentPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const capabilities = [
    { title: "Enterprise SaaS", desc: "Scalable cloud architectures built for high-concurrency and global performance.", icon: <Cpu className="w-6 h-6" /> },
    { title: "Bespoke E-commerce", desc: "Custom checkout flows and product engines that break free from template limits.", icon: <Globe2 className="w-6 h-6" /> },
    { title: "Internal Workflow Tools", desc: "Automate your manufacturing or retail ops with specialized internal software.", icon: <Terminal className="w-6 h-6" /> },
    { title: "Interactive UI/UX", desc: "Physics-based animations and micro-interactions that captivate luxury audiences.", icon: <Sparkles className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 overflow-x-hidden">
      <SEO 
        title="Custom Software & Web Development Agency in Bangalore, Mangaluru | Hydro Nitro Technologies LLP"
        description="Top-tier custom software development, mobile apps, and scalable web platforms for B2B and B2C brands across Bangalore, Mysore, Mangaluru, Davanagere, Hubli, and Shivamogga."
        keywords="custom software development bangalore, web development agency mysore, bespoke software solutions mangaluru, mobile app development hubli, web portals shivamogga, tech solutions davanagere, hydro nitro technologies llp tech, custom software development company, hire dedicated software developers, custom enterprise software solutions, software development outsourcing cost, offshore software development team, custom app development services, saas product development company, legacy software modernization services, generative AI development services, custom web application development agency"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Custom Software & Web Development",
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
      <div className="fixed top-4 left-0 right-0 z-[100] flex justify-center px-4">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-20 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Massive Watermark */}
        <div className="absolute top-10 right-[-10%] text-[25vw] font-black text-slate-50 select-none leading-none z-0 tracking-tighter opacity-90">CUSTOM</div>

        <div className="relative z-10">
          <Link to="/woc-plans" className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-8 hover:translate-x-[-4px] transition-transform">
            <ArrowLeft className="w-3 h-2 mr-2" /> Back to Plans
          </Link>
          
          <div className="space-y-2">
            <h1 className="font-heading text-[28vw] sm:text-[12vw] lg:text-[12rem] font-black tracking-tighter text-slate-900 leading-[0.8] uppercase transform scale-x-[1] sm:scale-x-10 origin-left inline-block w-full">
              BEYOND <br />
              <span className="text-blue-600 italic font-black text-[18vw] sm:text-[12vw] tracking-[0.05em]">THE WHEEL</span>
            </h1>
            <div className="bg-blue-600 h-2 w-32 rounded-full mt-6" />
          </div>
          
          <div className="mt-12 max-w-4xl">
             <Reveal delay={200}>
                <h2 className="font-heading text-6xl md:text-6xl font-black text-slate-800 mb-6 tracking-tight leading-[0.9] uppercase">
                  Engineered Without Limits
                </h2>
                <div className="text-sm md:text-xl font-black uppercase tracking-[0.5em] text-blue-600">Dream • Build • Inspire</div>
             </Reveal>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 border-t border-slate-50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 space-y-12">
            <Reveal>
              <div className="font-sans font-medium text-slate-700 leading-snug text-2xl md:text-4xl space-y-10 tracking-tight">
                <p className="border-l-8 border-blue-600 pl-10">
                  Standard solutions have <strong>boundaries.</strong> We don't.
                </p>
                <p className="text-slate-500 text-lg md:text-2xl leading-relaxed max-w-2xl font-normal">
                  When your vision exceeds the capacity of our WOC tiers, we initiate bespoke development. 
                  A white-glove engineering service for brands that require specialized digital DNA.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5 bg-slate-900 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
             <Code2 className="w-16 h-16 text-blue-400 mb-8" />
             <h3 className="text-3xl font-heading font-black mb-6 tracking-tighter uppercase italic">The Elite Protocol.</h3>
             <ul className="space-y-4">
                {["Full Architecture Design", "Dedicated Core Team", "Custom Tech Stack", "Private Beta Testing", "Deployment Support"].map((item, i) => (
                  <li key={i} className="flex items-center text-sm font-bold uppercase tracking-widest text-slate-300">
                    <Check className="w-4 h-4 mr-3 text-blue-500" /> {item}
                  </li>
                ))}
             </ul>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-16 px-2 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-50 rounded-[3rem] my-8 sm:my-16">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="font-heading text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-none">
              SPECIALIZED <span className="text-blue-600">DNA.</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-xl font-medium px-4">
              We translate complex business logic into seamless digital experiences.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {capabilities.map((item, idx) => (
            <Reveal key={idx} delay={idx * 150}>
              <div className="p-12 h-full rounded-[3.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 hover:bg-blue-600 transition-all duration-500 group">
                <div className="mb-10 p-5 bg-slate-50 rounded-2xl w-fit text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 shadow-inner">
                  {item.icon}
                </div>
                <h3 className="font-heading text-3xl font-black mb-6 tracking-tighter uppercase group-hover:text-white transition-colors duration-500">{item.title}</h3>
                <p className="text-slate-500 text-lg font-medium leading-relaxed group-hover:text-blue-50 transition-colors duration-500">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Final CTA Section - FIXED BUTTON ALLIGNMENT & RESPONSIVE SCALING */}
      <section className="py-24 px-4 text-center bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <Reveal>
            <h2 className="font-heading text-5xl md:text-[10rem] font-black mb-12 tracking-[-0.05em] text-slate-900 leading-[0.8] uppercase">
              START YOUR <br/> <span className="text-blue-600 italic">LEGACY.</span>
            </h2>
            <p className="text-lg md:text-2xl text-slate-500 mb-20 font-bold uppercase tracking-[0.3em] max-w-3xl mx-auto leading-tight px-4">
              Connect with our lead architects to discuss your bespoke project requirements.
            </p>
            
            <div className="flex justify-center w-full px-4">
              <Button asChild size="lg" className="h-16 md:h-24 w-full md:w-auto px-10 md:px-20 rounded-full bg-slate-900 text-white text-base md:text-2xl font-black uppercase tracking-[0.2em] md:tracking-[0.3em] hover:bg-blue-600 transition-all duration-700 shadow-[0_30px_100px_rgba(37,99,235,0.3)] active:scale-95 group">
                <Link to="/#contact" className="flex items-center justify-center">
                  INITIATE BESPOKE BUILD <ArrowRight className="ml-4 md:ml-8 w-6 h-6 md:w-10 md:h-10 transition-transform group-hover:translate-x-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
        <div className="absolute bottom-0 right-0 opacity-[0.05] font-heading text-[25vw] font-black translate-y-[40%] select-none pointer-events-none tracking-tighter text-blue-600">BESPOKE</div>
      </section>

      <FooterSection />
    </div>
  );
};

export default CustomDevelopmentPage;
