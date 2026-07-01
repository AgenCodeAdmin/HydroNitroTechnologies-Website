/**
 * BlogPostPage — AIO/GEO + SEO Hybrid Template
 * 
 * Renders programmatically generated blog posts with:
 * - Executive Summary block (directly citable by AI search engines)
 * - FAQPage JSON-LD schema (parsed by Perplexity, ChatGPT, Gemini)
 * - Article JSON-LD schema (parsed by Google)
 * - Entity-dense, semantically structured content
 */

import React, { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import { SEO } from '@/components/SEO';
import { getBlogPostBySlug } from '@/lib/blog-data';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User, MapPin, ChevronDown, ChevronUp, Zap, BookOpen } from 'lucide-react';

/** Collapsible FAQ Item Component */
const FAQAccordionItem = ({ question, answer, index }: { question: string; answer: string; index: number }) => {
  const [isOpen, setIsOpen] = useState(index === 0); // First FAQ open by default

  return (
    <div className="border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-bold text-slate-800 text-sm sm:text-base pr-4 uppercase tracking-tight">{question}</span>
        {isOpen 
          ? <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" /> 
          : <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
        }
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="px-6 pb-6 text-slate-600 font-medium leading-relaxed text-sm sm:text-base">
          {answer}
        </p>
      </div>
    </div>
  );
};

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Build FAQPage schema for AI search engines
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Build Article schema for Google
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "author": {
      "@type": "Organization",
      "name": post.author,
      "url": "https://hydronitro.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Hydro Nitro Technologies LLP",
      "url": "https://hydronitro.com"
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://hydronitro.com/blog/${post.slug}`
    },
    "about": {
      "@type": post.schemaType,
      "name": post.category,
      "provider": {
        "@type": "Organization",
        "name": "Hydro Nitro Technologies LLP"
      },
      "areaServed": {
        "@type": "City",
        "name": post.city
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 overflow-x-hidden">
      <SEO 
        title={post.title}
        description={post.description}
        keywords={post.keywords}
        jsonLd={articleSchema}
        additionalSchemas={[faqSchema]}
      />
      
      <div className="fixed top-4 left-0 right-0 z-[100] flex justify-center px-4">
        <Navbar />
      </div>

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <Link to="/blog" className="inline-flex items-center text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-8 hover:translate-x-[-4px] transition-transform">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Intelligence
        </Link>
        
        <article className="bg-white rounded-[2rem] shadow-xl p-8 sm:p-12 border border-slate-100">
          {/* Article Header */}
          <header className="mb-12 border-b border-slate-100 pb-10">
            <div className="flex flex-wrap gap-3 mb-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
              <span className="bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full">{post.category}</span>
              <span className="flex items-center bg-slate-50 px-3 py-1.5 rounded-full"><MapPin className="w-3 h-3 mr-1 text-blue-500" /> {post.city}</span>
              <span className="flex items-center bg-slate-50 px-3 py-1.5 rounded-full"><Calendar className="w-3 h-3 mr-1 text-slate-400" /> {formattedDate}</span>
            </div>
            
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-tight tracking-tighter uppercase mb-6">
              {post.title.split('|')[0]?.trim()} <br/>
              <span className="text-blue-600 italic text-2xl sm:text-3xl md:text-4xl">{post.title.split('|')[1]?.trim()}</span>
            </h1>
            
            <div className="flex items-center text-xs font-bold text-slate-500 uppercase tracking-widest">
              <User className="w-4 h-4 mr-2 text-blue-500" />
              Published by {post.author}
            </div>
          </header>

          {/* Article Body */}
          <div className="prose prose-slate prose-lg max-w-none">
            {post.content.map((block, index) => {
              switch (block.type) {
                // Executive Summary — the AIO power block
                case 'summary':
                  return (
                    <div key={index} className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 sm:p-10 rounded-[1.5rem] mb-10 relative overflow-hidden shadow-2xl">
                      <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/15 rounded-full blur-[60px]" />
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">
                          <Zap className="w-3.5 h-3.5" />
                          <span>Executive Summary</span>
                        </div>
                        <p className="text-white/90 font-medium leading-relaxed text-sm sm:text-base">
                          {block.text}
                        </p>
                      </div>
                    </div>
                  );

                case 'hero':
                  return (
                    <h2 key={index} className="text-2xl sm:text-3xl font-heading font-black text-slate-900 tracking-tighter uppercase mb-6 mt-8">
                      {block.text}
                    </h2>
                  );

                case 'h2':
                  return (
                    <h3 key={index} className="text-xl sm:text-2xl font-heading font-bold text-slate-800 tracking-tight uppercase mb-4 mt-10 border-l-4 border-blue-600 pl-4">
                      {block.text}
                    </h3>
                  );

                case 'p':
                  return (
                    <p key={index} className="text-slate-600 leading-relaxed mb-6 font-medium text-[15px]">
                      {block.text}
                    </p>
                  );

                case 'ul':
                  return (
                    <ul key={index} className="space-y-3 mb-8 bg-slate-50 p-6 sm:p-8 rounded-[1.5rem] border border-slate-100">
                      {block.items?.map((item, i) => (
                        <li key={i} className="flex items-start text-slate-700 font-bold text-sm sm:text-[15px]">
                          <span className="w-2 h-2 mt-2 mr-3 bg-blue-600 rounded-full flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  );

                case 'cta':
                  return (
                    <div key={index} className="mt-14 text-center bg-slate-900 p-10 sm:p-14 rounded-[2rem] text-white shadow-2xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] group-hover:bg-blue-600/40 transition-colors duration-700" />
                      <h4 className="relative z-10 text-lg sm:text-2xl font-heading font-black tracking-tighter uppercase mb-8 max-w-2xl mx-auto">
                        {block.text}
                      </h4>
                      <Button asChild size="lg" className="relative z-10 rounded-full h-14 px-10 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-widest text-xs transition-all shadow-lg hover:shadow-blue-500/25 active:scale-95">
                        <Link to="/#contact">Initiate Project</Link>
                      </Button>
                    </div>
                  );

                // FAQ Section — rendered for both humans and AI crawlers
                case 'faq-section':
                  return (
                    <div key={index} className="mt-14">
                      <div className="flex items-center gap-3 mb-8">
                        <BookOpen className="w-5 h-5 text-blue-600" />
                        <h3 className="text-xl sm:text-2xl font-heading font-black text-slate-900 tracking-tighter uppercase">
                          {block.text}
                        </h3>
                      </div>
                      <div className="space-y-3">
                        {post.faqs.map((faq, faqIdx) => (
                          <FAQAccordionItem 
                            key={faqIdx} 
                            question={faq.question} 
                            answer={faq.answer} 
                            index={faqIdx} 
                          />
                        ))}
                      </div>
                    </div>
                  );

                default:
                  return null;
              }
            })}
          </div>
        </article>
      </main>

      <FooterSection />
    </div>
  );
};

export default BlogPostPage;
