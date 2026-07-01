import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import { SEO } from '@/components/SEO';
import { blogPosts } from '@/lib/blog-data';
import { MapPin, ArrowRight } from 'lucide-react';

const BlogIndexPage = () => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cities = Array.from(new Set(blogPosts.map(post => post.city))).sort();
  
  const filteredPosts = selectedCity 
    ? blogPosts.filter(post => post.city === selectedCity)
    : blogPosts;

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 overflow-x-hidden">
      <SEO 
        title="Digital Intelligence & Insights | Hydro Nitro Technologies LLP"
        description="Explore the latest insights on custom software development, digital marketing, and business automation in Bangalore, Mangaluru, Hubli, and across Karnataka."
        keywords="digital agency blog karnataka, business automation insights bangalore, custom software development news hubli, digital marketing trends mangaluru"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Hydro Nitro Digital Intelligence",
          "publisher": {
            "@type": "Organization",
            "name": "Hydro Nitro Technologies LLP"
          }
        }}
      />
      
      <div className="fixed top-4 left-0 right-0 z-[100] flex justify-center px-4">
        <Navbar />
      </div>

      {/* Header */}
      <section className="pt-40 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
        <h1 className="relative z-10 font-heading text-5xl sm:text-7xl lg:text-9xl font-black tracking-tighter text-slate-900 leading-[0.85] uppercase mb-6">
          DIGITAL <br/> <span className="text-blue-600 italic">INTELLIGENCE</span>
        </h1>
        <p className="relative z-10 max-w-2xl mx-auto text-lg sm:text-xl text-slate-500 font-medium px-4">
          Strategic insights and operational blueprints for businesses dominating the digital arena across Karnataka.
        </p>
      </section>

      {/* Filter */}
      <section className="px-4 pb-10 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-wrap justify-center gap-3">
          <button 
            onClick={() => setSelectedCity(null)}
            className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.15em] transition-all ${
              selectedCity === null 
                ? 'bg-slate-900 text-white shadow-lg' 
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Karnataka
          </button>
          {cities.map(city => (
            <button 
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`flex items-center px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.15em] transition-all ${
                selectedCity === city 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <MapPin className="w-3 h-3 mr-2 opacity-70" />
              {city}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="px-4 pb-32 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.slug}`}
              className="group bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all duration-500 flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-wrap gap-2 mb-6 text-[9px] font-black uppercase tracking-[0.2em]">
                <span className="bg-slate-900 text-white px-3 py-1 rounded-full">{post.category}</span>
                <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full">{post.city}</span>
              </div>
              
              <h2 className="relative z-10 font-heading text-2xl font-bold tracking-tight text-slate-900 mb-4 group-hover:text-blue-600 transition-colors uppercase line-clamp-3">
                {post.title}
              </h2>
              
              <p className="relative z-10 text-sm text-slate-500 font-medium mb-8 line-clamp-3">
                {post.description}
              </p>
              
              <div className="relative z-10 mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  Read Protocol
                </span>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default BlogIndexPage;
