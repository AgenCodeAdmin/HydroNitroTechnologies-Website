import React from 'react';
import { Button } from "@/components/ui/button";
import LightRays from "@/components/ui/light-rays";
import { useIsMobile } from "@/hooks/use-mobile";

const staticContent = {
  headline: "Transform Your Business with AI-Powered Digital Solutions",
  subheadline: "We collaborate with Businesses to attract customers, streamline operations, and build tools that scale.",
  cta_text: "Get a Strategy Call",
  cta_link: "https://wa.me/917019573096?text=Hello%20we%20run%20a%20business%20and%20we%20are%20interested%20in%20the%20digital%20service%20offered%20by%20Hydro%20Nitro%20.%20We%20would%20like%20to%20get%20a%20Strategy%20Call"
};

const HeroSection = () => {
  const isMobile = useIsMobile();
  const content = staticContent;

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900"
    >
      <LightRays
        raysOrigin="top-left"
        raysColor="#ffffff"
        raysSpeed={2}
        lightSpread={isMobile ? 120 : 100}
        rayLength={isMobile ? 24.0 : 5}
        saturation={isMobile ? 4.0 : 4.0}
        fadeDistance={isMobile ? 10.0 : 10.0}
        followMouse={true}
        mouseInfluence={1.5}
        noiseAmount={0.0}
        distortion={15}
        className="absolute top-0 left-0 w-full h-full"
      />

      <div className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full lg:w-3/3 mx-auto">
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-8 leading-tight bounce-animation max-w-full break-words">
            {content.headline}
          </h1>
          <div className="text-lg sm:text-xl md:text-2xl font-sans text-white/90 mb-8 mx-auto rise-Tanimation break-word px-4 tiptap-content">
            {content.subheadline}
          </div>
          <a href={content.cta_link} target="_blank" rel="noopener noreferrer">
            <Button className="glow-on-hover bg-blue-600 text-black text-lg px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
              {content.cta_text}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
