
import React from 'react';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

interface FooterContent {
  company_name: string;
  company_address: string;
  links: Array<{ text: string; url: string }>;
  service_links: Array<{ text: string; url: string }>;
  social_media: {
    instagram?: string;
    facebook?: string;
    whatsapp?: string;
  };
}

const FooterSection = () => {
  const defaultContent: FooterContent = {
    company_name: 'HYDRO NITRO TECHNOLOGIES LLP',
    company_address: 'Engineering Elite Digital Storefronts.',
    links: [
      { text: 'About Us', url: '/about' },
      { text: 'Privacy Policy', url: '#privacy' }
    ],
    service_links: [
      { text: 'WOC Plans', url: '/woc-plans' },
      { text: 'Digital Media', url: '/digital-media' },
      { text: 'Automation', url: '/automation' },
      { text: 'Custom Development', url: '/custom-development' }
    ],
    social_media: {
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
      whatsapp: 'https://wa.me/1234567890'
    }
  };

  const content = defaultContent;

  return (
    <footer className="bg-white border-t border-slate-100 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          {/* Company Info */}
          <div className="text-center md:text-left space-y-6">
            <h3 className="font-heading text-2xl font-black text-slate-900 tracking-tighter uppercase">Hydro Nitro Technologies LLP</h3>
            <div className="text-slate-500 font-medium leading-relaxed max-w-xs mx-auto md:mx-0">
              Davanagere , Karanataka , India 💖
            </div>
          </div>

          {/* Links */}
          <div className="text-center md:text-left space-y-6">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Quick Access</h3>
            <ul className="space-y-4">
              {content.links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-slate-600 hover:text-blue-600 font-bold text-sm transition-colors duration-200 uppercase tracking-tight"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions / Services */}
          <div className="text-center md:text-left space-y-6">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Solutions</h3>
            <ul className="space-y-4">
              {content.service_links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-slate-600 hover:text-blue-600 font-bold text-sm transition-colors duration-200 uppercase tracking-tight"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-left space-y-6">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Connect</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {content.social_media.instagram && (
                <a href="https://www.instagram.com/hydro__nitro" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-50 text-slate-900 rounded-2xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
                  <Instagram size={20} />
                </a>
              )}
              {content.social_media.whatsapp && (
                <a href="https://wa.me/917019573096?text=Hello%20we%20run%20a%20business%20and%20we%20are%20interested%20in%20the%20digital%20service%20offered%20by%20Hydro%20Nitro%20.%20We%20would%20like%20to%20get%20a%20Strategy%20Call" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-50 text-slate-900 rounded-2xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
                  <MessageCircle size={20} />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-50 text-center relative">
          <p className="text-[0.6rem] font-black text-slate-300 uppercase tracking-[0.4em] mb-4 relative z-10">
            © HYDRO NITRO TECHNOLOGIES LLP
          </p>
          
          {/* THE MASTER WATERMARK - Google Labs Style */}
          <div className="relative mt-10 mb-[-2rem] select-none pointer-events-none overflow-hidden flex justify-center">
            {/* Mobile Version: High-Impact Vertical Stack */}
            <h2 className="lg:hidden font-heading text-[24vw] font-black text-slate-100/90 leading-[0.8] tracking-tighter uppercase whitespace-nowrap text-left transform scale-y-110">
              DREAM <br/> BUILD <br/> INSPIRE
            </h2>
            {/* Desktop Version: Cinematic Single Line */}
            <h2 className="hidden lg:block font-heading text-[12vw] font-black text-slate-100/90 leading-none tracking-tighter uppercase whitespace-nowrap text-center transform scale-y-110">
              DREAM BUILD INSPIRE
            </h2>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
