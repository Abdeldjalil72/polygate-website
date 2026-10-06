import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';

interface CtaBannerProps {
  onOpenQuoteModal: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="bg-polygate-navy-950 py-12 px-4 border-t border-b border-polygate-navy-800 relative overflow-hidden">
      {/* Decorative Gold Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-24 bg-polygate-gold-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 text-center lg:text-left relative z-10">
        
        {/* Exact Elsewedy Banner Text */}
        <span className="text-2xl sm:text-3xl lg:text-4xl font-black font-display uppercase tracking-tight text-white">
          How can we help you today?
        </span>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-polygate-navy-950 gold-gradient-bg shadow-hero-btn hover:brightness-110 active:scale-95 transition-all cursor-pointer"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white border-2 border-polygate-gold-500/80 hover:bg-polygate-gold-500 hover:text-polygate-navy-950 transition-all cursor-pointer"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Request a Quote</span>
          </button>
        </div>

      </div>
    </section>
  );
};
