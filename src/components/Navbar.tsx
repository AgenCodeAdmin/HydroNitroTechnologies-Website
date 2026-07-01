
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useUserRole } from '@/hooks/use-user-role';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { role, loading: roleLoading } = useUserRole();
  const [isHeroSection, setIsHeroSection] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      if (heroSection) {
        const heroSectionHeight = heroSection.offsetHeight;
        const isHero = window.scrollY < heroSectionHeight - 50;
        setIsHeroSection(isHero);
      } else {
        setIsHeroSection(false);
      }
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'WOC Plans', id: 'woc-plans', path: '/woc-plans', isNew: true },
    { label: 'About Us', id: 'about-page', path: '/about' },
    { label: 'What We Offer', id: 'services' },
    { label: 'Intelligence', id: 'blog', path: '/blog' },
    { label: 'Why Choose Us', id: 'accordion' },
    { label: 'Get In Touch', id: 'contact-us' },
  ];

  if (!roleLoading && (role === 'admin' || role === 'editor')) {
    navLinks.push({ label: 'Admin Dashboard', id: 'admin-dashboard', path: '/admin/dashboard' });
  }

  const getTextColor = () => isHeroSection ? 'text-white' : 'text-black';

  return (
    <div className="relative w-[95%] max-w-7xl">
      <nav
        className={`w-full z-50 px-6 py-4 transition-all duration-500 rounded-2xl
          ${isScrolled ? 'backdrop-blur-xl bg-white/10 shadow-lg border border-white/20' : 'bg-transparent'}
        `}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">HN</span>
            </div>
            <span className={`font-heading font-black text-lg tracking-tighter uppercase ${getTextColor()}`}>
              HYDRO NITRO TECHNOLOGIES LLP
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.path ? (
                <Link
                  key={link.id}
                  to={link.path}
                  className={`nav-link ${getTextColor()} hover:text-blue-500 px-3 py-2 rounded-md text-sm font-bold transition-all duration-300 relative flex items-center gap-1`}
                >
                  {link.label}
                  {link.isNew && (
                    <span className="bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-black uppercase tracking-tighter">New</span>
                  )}
                </Link>
              ) : (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`nav-link ${getTextColor()} hover:text-blue-500 px-3 py-2 rounded-md text-sm font-bold transition-all duration-300`}
                >
                  {link.label}
                </button>
              )
            ))}
          </div>

          <div className="md:hidden z-50">
            <button
              className={`${getTextColor()} hover:text-blue-600 transition-colors duration-200`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full md:hidden">
          <div className="backdrop-blur-xl bg-white/90 m-4 rounded-lg shadow-2xl border border-slate-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                link.path ? (
                  <Link
                    key={link.id}
                    to={link.path}
                    className="text-gray-900 hover:text-blue-600 flex items-center justify-between px-3 py-3 rounded-md text-base font-black uppercase tracking-widest w-full text-left transition-colors duration-200"
                  >
                    <span>{link.label}</span>
                    {link.isNew && (
                      <span className="bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-full font-black uppercase tracking-tighter">New</span>
                    )}
                  </Link>
                ) : (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-900 hover:text-blue-600 block px-3 py-3 rounded-md text-base font-black uppercase tracking-widest w-full text-left transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                )
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
