import React from 'react';
import { BRAND_PILLARS } from '../data/websiteData';
import { Globe, Handshake, TrendingUp, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const getPillarIcon = (icon: string) => {
    switch (icon) {
      case 'Globe':
        return <Globe className="w-6 h-6 text-polygate-gold-500" />;
      case 'Handshake':
        return <Handshake className="w-6 h-6 text-polygate-gold-500" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-polygate-gold-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-polygate-gold-500" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-polygate-gold-500" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Exact Elsewedy About Us 2-Column Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Narrative & Stats */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-polygate-gold-600 block">
              About Us
            </span>

            <h2 className="text-3xl sm:text-4xl font-black font-display text-polygate-navy-900 tracking-tight uppercase leading-tight">
              Transforming Ideas Into Reality Since 1996
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              POLYGATE specializes in sustainable polymer compounding and processing. We serve customers locally and globally, combining strong economic performance with environmental protection and social responsibility. Our portfolio spans PVC Compounds, Masterbatch, Special Compounds, and PP Fibers. Today, we’re recognized as a leading plastic compound manufacturer with deep expertise in PVC and special cable compounds.
            </p>

            {/* Exact 3 Stats Item Box */}
            <div className="pt-4 border-t border-slate-100">
              <div className="grid grid-cols-3 gap-4 text-left">
                <div className="border-r border-slate-200 pr-4">
                  <div className="text-3xl sm:text-4xl font-black font-display text-polygate-gold-600">
                    800+
                  </div>
                  <div className="text-xs sm:text-sm font-semibold uppercase text-slate-700 mt-1">
                    Employees
                  </div>
                </div>

                <div className="border-r border-slate-200 pr-4">
                  <div className="text-3xl sm:text-4xl font-black font-display text-polygate-gold-600">
                    5
                  </div>
                  <div className="text-xs sm:text-sm font-semibold uppercase text-slate-700 mt-1">
                    Factories
                  </div>
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl font-black font-display text-polygate-gold-600">
                    34+
                  </div>
                  <div className="text-xs sm:text-sm font-semibold uppercase text-slate-700 mt-1">
                    Export Markets
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#pillars"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-polygate-navy-900 hover:bg-polygate-navy-800 transition-colors shadow-sm"
              >
                Learn More About Company
              </a>
            </div>

          </div>

          {/* Right Column: Factory Image with Floating Sustainability Card */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Headquarters Photography (Authentic POLYGATE Facility) */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
                <img
                  src="/storage/about/about.jpg"
                  alt="POLYGATE Manufacturing Facilities"
                  className="w-full h-[400px] object-cover"
                />
              </div>

              {/* Floating Sustainability & Quality Card (Actual Badge from Elsewedy) */}
              <div className="absolute -bottom-8 -left-6 sm:-left-8 bg-white rounded-2xl shadow-xl p-4 sm:p-5 border border-slate-100 flex items-center gap-4 animate-bounce-subtle">
                <img
                  src="/sus.png"
                  alt="Sustainability and Quality"
                  className="h-16 sm:h-20 w-auto object-contain"
                />
                <div className="pr-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-polygate-gold-600">
                    Sustainable Compounding
                  </div>
                  <div className="text-sm font-black font-display text-polygate-navy-900">
                    ISO 9001 / 14001 / 45001
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Zero Toxic Emissions Standard
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Brand Pillars (From Your Reference Image: Vision, Trust, Growth, Quality) */}
        <div id="pillars" className="mt-20 pt-12 border-t border-slate-100">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-polygate-gold-600 block mb-1">
              Core Principles
            </span>
            <h3 className="text-2xl font-black font-display text-polygate-navy-900 uppercase">
              The Four Pillars of <span className="text-polygate-gold-600">POLYGATE</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRAND_PILLARS.map((p, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-polygate-gold-400 hover:shadow-md transition-all group"
              >
                <div className="p-3 rounded-lg bg-white shadow-xs inline-block mb-4 border border-slate-100 group-hover:scale-105 transition-transform">
                  {getPillarIcon(p.icon)}
                </div>
                <h4 className="text-sm font-black font-display uppercase tracking-wide text-polygate-navy-900 mb-1 group-hover:text-polygate-gold-600 transition-colors">
                  {p.title}
                </h4>
                <div className="text-xs font-bold text-polygate-gold-600 mb-2">
                  {p.tagline}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
