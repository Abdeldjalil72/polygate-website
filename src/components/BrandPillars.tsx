import React from 'react';
import { Globe, Handshake, TrendingUp, ShieldCheck } from 'lucide-react';
import { BRAND_PILLARS } from '../data/websiteData';

export const BrandPillars: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-8 h-8 text-polygate-gold-500 group-hover:scale-110 transition-transform duration-300" />;
      case 'Handshake':
        return <Handshake className="w-8 h-8 text-polygate-gold-500 group-hover:scale-110 transition-transform duration-300" />;
      case 'TrendingUp':
        return <TrendingUp className="w-8 h-8 text-polygate-gold-500 group-hover:scale-110 transition-transform duration-300" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 text-polygate-gold-500 group-hover:scale-110 transition-transform duration-300" />;
      default:
        return <ShieldCheck className="w-8 h-8 text-polygate-gold-500" />;
    }
  };

  return (
    <section id="pillars" className="bg-polygate-navy-950 py-16 border-b border-polygate-navy-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-polygate-navy-900 border border-polygate-gold-500/20 text-polygate-gold-400 text-xs font-semibold tracking-widest uppercase mb-3">
            Our Foundation
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight">
            THE FOUR CORE PILLARS OF <span className="gold-gradient-text">POLYGATE</span>
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            The guiding principles driving our compound precision, partnership model, and global manufacturing standards.
          </p>
        </div>

        {/* 4 Pillars Grid (matching reference) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRAND_PILLARS.map((pillar, index) => (
            <div
              key={index}
              className="group relative rounded-xl bg-gradient-to-b from-polygate-navy-900 to-polygate-navy-950 p-6 border border-polygate-navy-800 hover:border-polygate-gold-500/50 shadow-lg hover:shadow-gold-glow/20 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Pillar Number Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg bg-polygate-navy-950 border border-polygate-gold-500/20 group-hover:border-polygate-gold-500/50 transition-colors">
                  {getIcon(pillar.icon)}
                </div>
                <span className="font-mono text-xs font-bold text-polygate-gold-500/60 group-hover:text-polygate-gold-400">
                  0{index + 1}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold font-display text-white tracking-wider mb-1 group-hover:text-polygate-gold-400 transition-colors">
                  {pillar.title}
                </h3>
                <div className="text-xs font-semibold text-polygate-gold-500 mb-2.5">
                  {pillar.tagline}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Gold Indicator */}
              <div className="mt-5 pt-3 border-t border-polygate-navy-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="group-hover:text-slate-200 transition-colors">POLYGATE Standard</span>
                <span className="w-1.5 h-1.5 rounded-full bg-polygate-gold-500" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
