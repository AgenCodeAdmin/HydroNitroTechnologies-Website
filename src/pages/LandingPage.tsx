import React, { lazy, Suspense } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import { SEO } from '@/components/SEO';

const PainPointsSection1 = lazy(() => import('@/components/PainPointsSection1'));
const ServicesSection1 = lazy(() => import('@/components/ServicesSection1'));
const WhyChooseUs = lazy(() => import('@/components/WhyChooseUs'));
const Process = lazy(() => import('@/components/Process'));
const PricingSection = lazy(() => import('@/components/PricingSection'));
const ContactUsSection = lazy(() => import('@/components/ContactUsSection'));
const Faq = lazy(() => import('@/components/Faq'));
const FooterSection = lazy(() => import('@/components/FooterSection'));
const LogoCarouselSection = lazy(() => import('@/components/LogoCarouselSection'));

const SectionLoader = () => <div>Loading...</div>;

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Top E-Commerce Website & Automation Agency in Bangalore, Mysore, Mangaluru & Karnataka | Hydro Nitro Technologies LLP"
        description="Hydro Nitro Technologies LLP is Karnataka's premier digital agency specializing in high-performance e-commerce websites, business automation, and custom digital media solutions across Bangalore, Mysore, Mangaluru, Davanagere, Hubli, and Shivamogga."
        keywords="e-commerce website development bangalore, business automation mysore, digital marketing agency mangaluru, custom software development hubli, online catalog website davanagere, it company shivamogga, karnataka tech agency, hydro nitro technologies llp"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Hydro Nitro Technologies LLP",
          "url": "https://hydronitro.com",
          "telephone": "+917019573096",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Davanagere",
            "addressLocality": "Davanagere",
            "addressRegion": "Karnataka",
            "addressCountry": "IN"
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
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center">
        <Navbar />
      </div>
      <HeroSection />
      <Suspense fallback={<SectionLoader />}>
        <LogoCarouselSection />
        <PainPointsSection1 />
        <ServicesSection1 />
        <WhyChooseUs />
        <Process />
        {/* <ClientsSection /> */}
        {/* <PricingSection /> */}
        {/* <ReviewsSection /> */}
        <ContactUsSection />
        <FooterSection />
      </Suspense>
    </div>
  );
};

export default LandingPage;
