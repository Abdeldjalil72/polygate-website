import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const slides = [
    {
      id: 1,
      image: '/storage/home-slides/slide1.jpg',
      badge: 'Opening New Markets',
      title: 'ESTABLISHED TO LEAD',
      subtitle: 'HIGH-PERFORMANCE POLYMER COMPOUNDING',
      description:
        'POLYGATE delivers precision-engineered polymer solutions across global industries: PVC Compounds, Masterbatches, Special Compounds, and Structural PP Fibers.',
      ctaText: 'Explore More',
      ctaLink: '#about',
    },
    {
      id: 2,
      image: '/storage/products/masterbatch.jpg',
      badge: 'Color & Additive Science',
      title: 'MASTERBATCH SOLUTIONS',
      subtitle: 'MAXIMUM DISPERSION & COLOR BRILLIANCE',
      description:
        'High-concentration White, UV-stabilized Black, tailor-matched Colors, and functional Additives engineered for films, blow molding, and injection molding.',
      ctaText: 'Discover Masterbatch',
      ctaLink: '#products',
    },
    {
      id: 3,
      image: '/storage/products/special.jpg',
      badge: 'Critical Infrastructure',
      title: 'SPECIALTY COMPOUNDS',
      subtitle: 'LOW SMOKE ZERO HALOGEN (HFFR) & XLPE',
      description:
        'Engineered for mission-critical cable insulation, railway rolling stock, and transit infrastructure with zero smoke toxicity and high flame retardancy.',
      ctaText: 'View Special Compounds',
      ctaLink: '#products',
    },
    {
      id: 4,
      image: '/storage/products/fibers.jpg',
      badge: 'Civil Engineering Reinforcement',
      title: 'POLYPROPYLENE FIBERS',
      subtitle: 'SYNTHETIC CONCRETE REINFORCEMENT',
      description:
        '100% virgin polypropylene micro and macro fibers mitigating shrinkage cracking and dramatically increasing passive fire spalling resistance.',
      ctaText: 'Explore PP Fibers',
      ctaLink: '#products',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section id="hero" className="relative w-full h-[88vh] min-h-[600px] overflow-hidden bg-polygate-navy-950">
      
      {/* Slides Container */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image with Scale Animation */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              />
              {/* Authentic Dark Navy & Black Gradient Overlay (matching Elsewedy .overlay) */}
              <div className="absolute inset-0 bg-gradient-to-r from-polygate-navy-950/95 via-polygate-navy-950/80 to-polygate-navy-950/40" />
              <div className="absolute inset-0 bg-black/25" />
            </div>

            {/* Slide Content */}
            <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-8 flex items-center">
              <div className="max-w-2xl text-white space-y-5 pt-12">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-polygate-gold-500/20 border border-polygate-gold-500/40 text-polygate-gold-400 text-xs font-bold uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-polygate-gold-400 animate-pulse" />
                  <span>{slide.badge}</span>
                </div>

                {/* Subtitle */}
                <div className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-polygate-gold-400">
                  {slide.subtitle}
                </div>

                {/* Big Bold Headline (Exact Elsewedy Style) */}
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black font-display tracking-tight uppercase text-white leading-none">
                  {slide.title}
                </h1>

                {/* Description */}
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                  {slide.description}
                </p>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href={slide.ctaLink}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold tracking-wider uppercase text-polygate-navy-950 gold-gradient-bg shadow-hero-btn hover:brightness-110 transition-all cursor-pointer"
                  >
                    <span>{slide.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <button
                    onClick={onOpenQuoteModal}
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold tracking-wider uppercase text-white border-2 border-white/60 hover:border-polygate-gold-400 hover:text-polygate-gold-400 hover:bg-white/5 transition-all cursor-pointer"
                  >
                    <span>Get Quote</span>
                  </button>
                </div>

              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/40 hover:bg-polygate-gold-500 hover:text-polygate-navy-950 text-white flex items-center justify-center transition-all backdrop-blur-xs cursor-pointer border border-white/10"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/40 hover:bg-polygate-gold-500 hover:text-polygate-navy-950 text-white flex items-center justify-center transition-all backdrop-blur-xs cursor-pointer border border-white/10"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Pagination Dots (matching Swiper pagination) */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex items-center justify-center gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              index === currentSlide
                ? 'w-8 h-2.5 bg-polygate-gold-500'
                : 'w-2.5 h-2.5 bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
};
