import React from 'react';
import { Logo } from './Logo';
import { ArrowUp, MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  onSelectProduct: (id: string) => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-polygate-navy-950 text-slate-300 relative border-t-2 border-polygate-gold-500/40">
      
      {/* Top Footer Section (Exact Elsewedy 3-Column Layout) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Footer About & Logo */}
          <div className="lg:col-span-5 space-y-5">
            <a href="#" className="inline-block">
              <Logo variant="dark" size="lg" />
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              POLYGATE specializes in sustainable polymer compounding and processing: PVC compounds, Masterbatch, Special compounds, and Polypropylene (PP) fibers.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-polygate-navy-900 border border-polygate-navy-800 hover:border-polygate-gold-500 hover:text-polygate-gold-400 flex items-center justify-center transition-colors text-white"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-polygate-navy-900 border border-polygate-navy-800 hover:border-polygate-gold-500 hover:text-polygate-gold-400 flex items-center justify-center transition-colors text-white"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-polygate-gold-500 pl-2">
              Useful Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-polygate-gold-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-polygate-gold-400 transition-colors">
                  About us
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-polygate-gold-400 transition-colors">
                  Product Range
                </a>
              </li>
              <li>
                <a href="#sectors" className="hover:text-polygate-gold-400 transition-colors">
                  Sectors We Serve
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Us (Exact Elsewedy layout) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-polygate-gold-500 pl-2">
              Contact Us
            </h4>
            
            <div className="text-xs space-y-2.5 text-slate-400 pt-1">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-polygate-gold-500 flex-shrink-0 mt-0.5" />
                <span>P.C. No. 36 / 37 / 38 Industrial Zone A6, 10th of Ramadan City, Egypt</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-polygate-gold-500 flex-shrink-0" />
                <span>Phone: <a href="tel:+18005827659" className="text-slate-200 hover:text-polygate-gold-400">+1 (800) 582-POLY</a> , <a href="tel:+201020707777" className="text-slate-200 hover:text-polygate-gold-400">+20 10 2070 7777</a></span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-polygate-gold-500 flex-shrink-0" />
                <span>Email: <a href="mailto:sales@polygate.com" className="text-slate-200 hover:text-polygate-gold-400">sales@polygate.com</a></span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-polygate-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © Copyright <strong className="text-white">POLYGATE Polymers</strong>. All Rights Reserved
          </div>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-polygate-navy-900 border border-polygate-navy-800 hover:border-polygate-gold-500 hover:text-polygate-gold-400 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
