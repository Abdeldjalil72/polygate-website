import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';
import { PRODUCTS } from '../data/websiteData';

interface HeaderProps {
  onOpenQuoteModal: (productCategory?: string) => void;
  onSelectProduct: (productId: string) => void;
  onSelectSector?: (sectorName: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal, onSelectProduct, onSelectSector }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [companyDropdown, setCompanyDropdown] = useState(false);
  const [solutionsDropdown, setSolutionsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-polygate-navy-950/95 backdrop-blur-md shadow-lg py-3 border-b border-polygate-navy-800'
          : 'bg-polygate-navy-950/60 backdrop-blur-sm py-4 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex-shrink-0 cursor-pointer">
          <Logo variant="dark" size="md" />
        </a>

        {/* Desktop Navigation Menu (Matching Elsewedy exact menu items) */}
        <nav className="hidden lg:flex items-center gap-7 text-[15px] font-semibold text-white tracking-wide uppercase">
          <a
            href="#hero"
            className="hover:text-polygate-gold-400 transition-colors py-2 active"
          >
            Home
          </a>

          {/* Company Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCompanyDropdown(true)}
            onMouseLeave={() => setCompanyDropdown(false)}
          >
            <a
              href="#about"
              className="flex items-center gap-1 hover:text-polygate-gold-400 transition-colors py-2"
            >
              <span>Company</span>
              <ChevronDown className="w-4 h-4 opacity-70" />
            </a>

            {companyDropdown && (
              <div className="absolute top-full left-0 w-64 bg-polygate-navy-900 border border-polygate-navy-700 rounded-xl shadow-2xl p-2 z-50 animate-fadeIn text-xs normal-case">
                <a
                  href="#about"
                  onClick={() => setCompanyDropdown(false)}
                  className="block p-3 rounded-lg hover:bg-polygate-navy-800 text-slate-200 hover:text-polygate-gold-400 transition-colors font-medium"
                >
                  <div className="font-bold text-sm text-white">About POLYGATE</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Heritage, backward integration & scale</div>
                </a>
                <a
                  href="#pillars"
                  onClick={() => setCompanyDropdown(false)}
                  className="block p-3 rounded-lg hover:bg-polygate-navy-800 text-slate-200 hover:text-polygate-gold-400 transition-colors font-medium"
                >
                  <div className="font-bold text-sm text-white">4 Core Brand Pillars</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Vision, Trust, Growth & Quality</div>
                </a>
              </div>
            )}
          </div>

          {/* Our Solutions Dropdown (Products & Sectors) */}
          <div
            className="relative"
            onMouseEnter={() => setSolutionsDropdown(true)}
            onMouseLeave={() => setSolutionsDropdown(false)}
          >
            <a
              href="#products"
              className="flex items-center gap-1 hover:text-polygate-gold-400 transition-colors py-2"
            >
              <span>Our Solutions</span>
              <ChevronDown className="w-4 h-4 opacity-70" />
            </a>

            {solutionsDropdown && (
              <div className="absolute top-full -left-12 w-96 bg-polygate-navy-900 border border-polygate-navy-700 rounded-xl shadow-2xl p-4 z-50 animate-fadeIn text-xs normal-case grid grid-cols-2 gap-4">
                <div>
                  <div className="font-bold text-polygate-gold-400 uppercase tracking-wider text-[11px] mb-2 pb-1 border-b border-polygate-navy-700">
                    Products
                  </div>
                  <div className="space-y-1">
                    {PRODUCTS.map((prod) => (
                      <button
                        key={prod.id}
                        onClick={() => {
                          onSelectProduct(prod.id);
                          setSolutionsDropdown(false);
                          const el = document.getElementById('products');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-full text-left py-1.5 px-2 rounded hover:bg-polygate-navy-800 text-slate-200 hover:text-polygate-gold-300 font-medium text-xs flex items-center justify-between"
                      >
                        <span>{prod.name}</span>
                        <ArrowUpRight className="w-3 h-3 opacity-60" />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="font-bold text-polygate-gold-400 uppercase tracking-wider text-[11px] mb-2 pb-1 border-b border-polygate-navy-700">
                    Sectors
                  </div>
                  <div className="space-y-1">
                    {['Packaging', 'Construction and Building', 'Consumer and Household', 'Agriculture'].map((sec) => (
                      <button
                        key={sec}
                        onClick={() => {
                          if (onSelectSector) onSelectSector(sec);
                          setSolutionsDropdown(false);
                          const el = document.getElementById('sectors');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-full text-left py-1.5 px-2 rounded hover:bg-polygate-navy-800 text-slate-200 hover:text-polygate-gold-300 font-medium text-xs flex items-center justify-between"
                      >
                        <span>{sec}</span>
                        <ArrowUpRight className="w-3 h-3 opacity-60" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <a
            href="#contact"
            className="hover:text-polygate-gold-400 transition-colors py-2"
          >
            Contact Us
          </a>
        </nav>

        {/* Right CTA Button: Get Quote */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => onOpenQuoteModal()}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-bold tracking-wide text-polygate-navy-950 gold-gradient-bg shadow-hero-btn hover:brightness-110 active:scale-95 transition-all duration-200 cursor-pointer uppercase"
          >
            Get Quote
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-polygate-navy-950 border-t border-polygate-navy-800 px-6 py-6 space-y-4">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-bold text-white uppercase"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-bold text-white uppercase"
          >
            Company
          </a>
          <div className="space-y-2 pl-3 border-l-2 border-polygate-gold-500">
            <span className="block text-xs font-bold uppercase text-polygate-gold-400">
              Products
            </span>
            {PRODUCTS.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  onSelectProduct(p.id);
                  setMobileMenuOpen(false);
                  const el = document.getElementById('products');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-left text-sm text-slate-300 hover:text-white"
              >
                • {p.name}
              </button>
            ))}
          </div>
          <a
            href="#sectors"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-bold text-white uppercase"
          >
            Sectors We Serve
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-bold text-white uppercase"
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
};
