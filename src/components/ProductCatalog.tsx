import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, X, Download, ShieldCheck, Box, Settings } from 'lucide-react';
import { PRODUCTS, Product } from '../data/websiteData';

interface ProductCatalogProps {
  selectedProductId: string;
  onSelectProduct: (id: string) => void;
  onOpenQuoteModal: (productCategory?: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onOpenQuoteModal,
}) => {
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(4); // Start at middle batch for seamless loop
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const isTransitioning = useRef(false);

  // Exact data from Elsewedy Polymers transformed to POLYGATE
  const baseCards = [
    {
      id: 'pvc-compounds',
      name: 'PVC Compounds',
      image: '/storage/products/pvc.jpg',
      descriptionHtml: (
        <>
          The story of POLYGATE begins with the legacy of industrial compounding, where cables have always been the flagship foundation. To ensure uncompromised quality and reliability, we took a bold step toward{' '}
          <strong>backward integration</strong>, compounding PVC in-house for cable production and advanced profiles since 1996.
        </>
      ),
      link: '/product?id=1',
      productData: PRODUCTS.find((p) => p.id === 'pvc-compounds') || PRODUCTS[0],
    },
    {
      id: 'masterbatch',
      name: 'Masterbatch',
      image: '/storage/products/masterbatch.jpg',
      descriptionHtml: (
        <>
          At POLYGATE, evolution is in our DNA. As our manufacturing and R&amp;D capabilities expanded, we ventured into{' '}
          <strong>masterbatch production</strong>—a natural progression driven by our commitment to innovation, pigment dispersion, and processing excellence.
        </>
      ),
      link: '/product?id=2',
      productData: PRODUCTS.find((p) => p.id === 'masterbatch') || PRODUCTS[1],
    },
    {
      id: 'special-compounds',
      name: 'Special Compounds',
      image: '/storage/products/special.jpg',
      descriptionHtml: (
        <>
          As the cables and infrastructure industry evolved, so did its challenges—higher safety standards, improved performance, and sustainability demands. At POLYGATE, we embraced this progression by developing{' '}
          <strong>specialized compounds</strong> (HFFR &amp; XLPE) that redefine reliability and fire safety.
        </>
      ),
      link: '/product?id=3',
      productData: PRODUCTS.find((p) => p.id === 'special-compounds') || PRODUCTS[2],
    },
    {
      id: 'pp-fibers',
      name: 'Polypropylene (PP) Fibers',
      image: '/storage/products/fibers.jpg',
      descriptionHtml: (
        <>
          In today’s competitive markets, strength and efficiency go hand in hand. That’s why POLYGATE developed{' '}
          <strong>Polypropylene (PP) fibers</strong>—a solution that not only enhances structural material performance but also{' '}
          <strong>reduces overall costs</strong> for our customers.
        </>
      ),
      link: '/product?id=4',
      productData: PRODUCTS.find((p) => p.id === 'pp-fibers') || PRODUCTS[3],
    },
  ];

  // Tripled array for infinite seamless looping
  const loopedCards = [...baseCards, ...baseCards, ...baseCards];
  const count = baseCards.length; // 4

  // Responsive itemsPerView listener
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setTransitionEnabled(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setTransitionEnabled(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    isTransitioning.current = false;
    // When we slide past the middle block (index 8+), wrap seamlessly back to middle
    if (currentIndex >= count * 2) {
      setTransitionEnabled(false);
      setCurrentIndex((prev) => prev - count);
    } else if (currentIndex < count) {
      setTransitionEnabled(false);
      setCurrentIndex((prev) => prev + count);
    }
  };

  // Re-enable transitions after reset
  useEffect(() => {
    if (!transitionEnabled) {
      const raf = requestAnimationFrame(() => {
        setTransitionEnabled(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [transitionEnabled]);

  const handleSimulatedDownload = (gradeCode: string) => {
    setDownloadSuccess(gradeCode);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 2000);
  };

  // Calculate percentage width of single card and total offset
  const cardWidthPercent = 100 / itemsPerView;
  const translateOffset = currentIndex * cardWidthPercent;

  return (
    <section id="product" className="featured-services section light-background py-20 bg-[#f4f9f7]/70 border-b border-slate-200 overflow-hidden">
      
      {/* Exact Elsewedy Section Title with Double Underline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="section-title">
          <h2>Product Range</h2>
        </div>

        {/* Carousel / Slider Container */}
        <div className="relative mt-8">
          
          {/* Overflow wrapper */}
          <div className="overflow-hidden w-full -mx-3 px-3 py-4">
            {/* Sliding Track with Smooth CSS Animation */}
            <div
              className={`flex ${
                transitionEnabled
                  ? 'transition-transform duration-600 ease-[cubic-bezier(0.25,1,0.5,1)]'
                  : ''
              }`}
              style={{
                transform: `translateX(-${translateOffset}%)`,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {loopedCards.map((card, idx) => (
                <div
                  key={`${card.id}-${idx}`}
                  style={{
                    flex: `0 0 ${cardWidthPercent}%`,
                    maxWidth: `${cardWidthPercent}%`,
                  }}
                  className="px-3 flex-shrink-0"
                >
                  <div className="service-card group bg-white rounded-2xl overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all duration-400 relative flex flex-col justify-between border border-transparent hover:border-polygate-gold-400 h-full">
                    
                    {/* Photo Box with Hover Zoom (Exact Elsewedy .icon-box) */}
                    <div className="relative h-[300px] w-full overflow-hidden bg-slate-100 flex items-center justify-center">
                      <img
                        src={card.image}
                        alt={card.name}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Floating Circular Arrow Link (Exact Elsewedy .arrow-link: slides in on hover) */}
                      <button
                        onClick={() => setActiveModalProduct(card.productData)}
                        className="arrow-link absolute w-10 h-10 rounded-full bg-white text-polygate-gold-600 shadow-md flex items-center justify-center transition-all duration-400 cursor-pointer -rotate-45 group-hover:top-4 group-hover:right-4 group-hover:rotate-0 group-hover:bg-polygate-gold-500 group-hover:text-polygate-navy-950 -top-12 -right-12"
                        title="Explore Specs"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Content Container (Exact Elsewedy .content: 380px flex-col) */}
                    <div className="content p-8 flex flex-col justify-between min-h-[340px] text-left">
                      <div>
                        <h4 className="text-[22px] font-bold font-display uppercase tracking-tight text-polygate-navy-900 group-hover:text-polygate-gold-600 transition-colors mb-3.5">
                          {card.name}
                        </h4>

                        <div className="text-slate-600 text-sm sm:text-[15px] leading-[1.65] font-normal mb-6">
                          <p>{card.descriptionHtml}</p>
                        </div>
                      </div>

                      {/* Pill Button (Exact Elsewedy .btn-cta) */}
                      <div className="pt-2">
                        <button
                          onClick={() => setActiveModalProduct(card.productData)}
                          className="btn-cta inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider text-polygate-navy-950 gold-gradient-bg shadow-[0_5px_20px_rgba(197,160,89,0.35)] hover:shadow-[0_8px_25px_rgba(197,160,89,0.5)] hover:translate-x-1.5 transition-all duration-300 cursor-pointer"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Swiper Navigation Buttons with Smooth Animation Triggers */}
          <div className="flex justify-end items-center gap-3 mt-6">
            <button
              onClick={prevSlide}
              className="swiper-nav-prev w-14 h-14 rounded-full bg-polygate-gold-500 hover:bg-polygate-gold-600 text-polygate-navy-950 flex items-center justify-center text-xl transition-all shadow-md active:scale-90 hover:scale-105 cursor-pointer"
              aria-label="Previous Products (Slide Left)"
            >
              <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
            </button>
            <button
              onClick={nextSlide}
              className="swiper-nav-next w-14 h-14 rounded-full bg-polygate-gold-500 hover:bg-polygate-gold-600 text-polygate-navy-950 flex items-center justify-center text-xl transition-all shadow-md active:scale-90 hover:scale-105 cursor-pointer"
              aria-label="Next Products (Slide Right)"
            >
              <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

        </div>

      </div>

      {/* Technical Specifications Modal (Triggered by Learn More) */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-polygate-navy-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-fadeIn">
            
            {/* Modal Header */}
            <div className="bg-polygate-navy-900 text-white p-6 border-b border-polygate-navy-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-polygate-gold-400 block mb-1">
                  Technical Specifications
                </span>
                <h3 className="text-2xl font-black font-display uppercase text-white">
                  {activeModalProduct.name}
                </h3>
              </div>

              <button
                onClick={() => setActiveModalProduct(null)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-polygate-navy-800 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6">
              <div className="text-sm text-slate-700 leading-relaxed">
                {activeModalProduct.fullOverview}
              </div>

              {/* Technical Highlights */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-polygate-navy-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-polygate-gold-600" />
                  <span>Key Technical Highlights</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalProduct.keyBenefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2 p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-700">
                      <span className="text-polygate-gold-600 font-bold">•</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Production Grades Table */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-polygate-navy-900 flex items-center gap-2">
                    <Box className="w-4 h-4 text-polygate-gold-600" />
                    <span>Production Grades</span>
                  </h4>
                  <span className="text-xs text-slate-500">Custom formulations available</span>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs text-slate-700">
                    <thead className="bg-slate-100 text-slate-800 uppercase font-bold text-[11px] border-b border-slate-200">
                      <tr>
                        <th className="px-4 py-3">Grade Code</th>
                        <th className="px-4 py-3">Grade Name</th>
                        <th className="px-4 py-3">Key Technical Property</th>
                        <th className="px-4 py-3">Applications</th>
                        <th className="px-4 py-3 text-right">Data Sheet</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white">
                      {activeModalProduct.grades.map((grade) => (
                        <tr key={grade.code} className="hover:bg-slate-50">
                          <td className="px-4 py-3 font-mono font-bold text-polygate-navy-900">
                            {grade.code}
                          </td>
                          <td className="px-4 py-3 font-medium text-slate-900">
                            {grade.name}
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            {grade.hardnessOrDensity || 'Standard Specification'}
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            {grade.applications}
                          </td>
                          <td className="px-4 py-3 text-right">
                            <button
                              onClick={() => handleSimulatedDownload(grade.code)}
                              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md font-semibold text-[11px] bg-slate-100 hover:bg-polygate-gold-100 hover:text-polygate-gold-700 text-slate-700 transition-colors cursor-pointer"
                            >
                              <Download className="w-3 h-3" />
                              <span>{downloadSuccess === grade.code ? 'TDS Ready!' : 'TDS (PDF)'}</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Processing & Packaging */}
              <div className="p-4 rounded-xl bg-polygate-navy-50/50 border border-polygate-navy-100 space-y-2 text-xs">
                <h4 className="font-bold uppercase tracking-wider text-polygate-navy-900 flex items-center gap-2 mb-2">
                  <Settings className="w-4 h-4 text-polygate-gold-600" />
                  <span>Processing & Packaging Parameters</span>
                </h4>
                <div>
                  <span className="font-semibold text-slate-800">Base Polymer: </span>
                  <span className="text-slate-600">{activeModalProduct.specifications.basePolymer}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-800">Processing Methods: </span>
                  <span className="text-slate-600">{activeModalProduct.specifications.processingMethod}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-800">Packaging: </span>
                  <span className="text-slate-600">{activeModalProduct.specifications.packagingOptions}</span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-slate-50 p-4 sm:px-8 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => setActiveModalProduct(null)}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
              >
                Close
              </button>

              <button
                onClick={() => {
                  const pName = activeModalProduct.name;
                  setActiveModalProduct(null);
                  onOpenQuoteModal(pName);
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-polygate-navy-950 gold-gradient-bg shadow-sm hover:brightness-110 cursor-pointer"
              >
                <span>Request Quote for {activeModalProduct.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
