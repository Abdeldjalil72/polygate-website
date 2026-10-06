import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface SectorsSectionProps {
  onOpenQuoteModal: (category?: string, sector?: string) => void;
  selectedSectorCategory?: string;
}

interface SectorData {
  id: string;
  name: string;
  pinPos: { top: string; left: string };
  applications: { name: string; recommended: string }[];
}

export const SectorsSection: React.FC<SectorsSectionProps> = ({ onOpenQuoteModal, selectedSectorCategory }) => {
  const sectorsList: SectorData[] = [
    {
      id: 'packaging',
      name: 'Packaging',
      pinPos: { top: '60%', left: '64%' },
      applications: [
        { name: 'Food Packaging', recommended: 'Food-grade White MB' },
        { name: 'General Packaging', recommended: 'Slip & Anti-block Additives' },
        { name: 'Beverages', recommended: 'Bottle Cap Color MB' },
        { name: 'Cosmetics + Hygiene', recommended: 'Pearlescent & Glossy MB' },
        { name: 'Detergents + Chemical', recommended: 'ESCR HDPE Compounds' },
      ],
    },
    {
      id: 'construction',
      name: 'Construction and Building',
      pinPos: { top: '42%', left: '51%' },
      applications: [
        { name: 'Cables', recommended: 'PVC Cable Insulation, HFFR & XLPE' },
        { name: 'Pipes', recommended: 'Rigid PVC & UV Black MB' },
        { name: 'Fittings', recommended: 'High-Impact PVC Compounds' },
        { name: 'Tanks', recommended: 'Rotomolding Polyethylene' },
        { name: 'Water Stop', recommended: 'Flexible PVC Waterstop' },
        { name: 'Profiles', recommended: 'Window & Door Extrusion PVC' },
        { name: 'Ceiling', recommended: 'Suspended Ceiling Rigid PVC' },
        { name: 'Window + Gaskets', recommended: 'Weatherproof TPE & TPR' },
        { name: 'Artificial Grass', recommended: 'UV Stabilized PP & PE' },
        { name: 'Paint Bucket', recommended: 'Impact Copolymer PP' },
      ],
    },
    {
      id: 'consumer',
      name: 'Consumer and Household',
      pinPos: { top: '55%', left: '18%' },
      applications: [
        { name: 'Home Appliances', recommended: 'Flame Retardant Compounds' },
        { name: 'Plastic Furniture', recommended: 'UV Weatherproof PP' },
        { name: 'Cleaning Items', recommended: 'Vibrant Masterbatch' },
        { name: 'Dining Items', recommended: 'FDA Compliant Color MB' },
        { name: 'Toys', recommended: 'Phthalate-Free Safe Polymers' },
        { name: 'Sport Equipment', recommended: 'High-Modulus PP & TPE' },
        { name: 'Matts', recommended: 'Flexible PVC & TPE' },
        { name: 'Footwear', recommended: 'Compact & Expanded PVC' },
      ],
    },
    {
      id: 'agriculture',
      name: 'Agriculture',
      pinPos: { top: '13%', left: '8%' },
      applications: [
        { name: 'Irrigation Pipes', recommended: 'Black UV Masterbatch' },
        { name: 'Irrigation Hoses and systems', recommended: 'Flexible Anti-Kink PVC' },
        { name: 'Mulch Film', recommended: 'High Opacity Black MB' },
        { name: 'Plastic Net', recommended: 'UV Monofilament PP Fibers' },
        { name: 'Silage Bags', recommended: 'White/Black Multi-Layer MB' },
        { name: 'Greenhouses', recommended: 'Anti-Fog & Thermal Barrier MB' },
      ],
    },
  ];

  const [activeSector, setActiveSector] = useState<SectorData>(() => {
    if (selectedSectorCategory) {
      const found = sectorsList.find((s) => s.name.toLowerCase() === selectedSectorCategory.toLowerCase());
      if (found) return found;
    }
    return sectorsList[0]; // Default to Packaging, matching Elsewedy default
  });

  return (
    <section id="sectors" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Exact Elsewedy Section Title */}
        <div className="section-title">
          <h2>Sectors We Serve</h2>
        </div>

        {/* 4 Pill Filter Buttons (Exact Elsewedy layout) */}
        <div className="flex justify-center flex-wrap gap-3 mb-10">
          {sectorsList.map((sec) => {
            const isActive = sec.id === activeSector.id;
            return (
              <button
                key={sec.id}
                onClick={() => setActiveSector(sec)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'text-polygate-navy-950 gold-gradient-bg shadow-md ring-2 ring-polygate-gold-400'
                    : 'bg-white text-slate-700 border border-slate-300 hover:border-polygate-gold-500 hover:text-polygate-gold-600'
                }`}
              >
                {sec.name}
              </button>
            );
          })}
        </div>

        {/* Interactive Sectors Map Graphic (Exact Elsewedy .sectors-map-wrap) */}
        <div className="relative max-w-4xl mx-auto mb-12 rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50 p-2 sm:p-4">
          <div className="relative w-full">
            <img
              src="/sectors.png"
              alt="Sectors We Serve Map"
              className="w-full h-auto block select-none pointer-events-none"
            />

            {/* 4 Interactive Pins positioned accurately on the map */}
            {sectorsList.map((sec) => {
              const isActive = sec.id === activeSector.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => setActiveSector(sec)}
                  style={{ top: sec.pinPos.top, left: sec.pinPos.left }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-10"
                  title={sec.name}
                >
                  <div className="relative flex items-center justify-center">
                    {/* Animated Outer Pulse Ring */}
                    <div
                      className={`absolute w-8 h-8 rounded-full ${
                        isActive
                          ? 'bg-polygate-gold-500/40 pin-pulse'
                          : 'bg-polygate-navy-900/20 group-hover:bg-polygate-gold-400/30'
                      }`}
                    />

                    {/* Central Pin Dot */}
                    <div
                      className={`w-4 h-4 rounded-full border-2 transition-transform duration-200 ${
                        isActive
                          ? 'bg-polygate-gold-500 border-white scale-125 shadow-md'
                          : 'bg-polygate-navy-900 border-white group-hover:scale-110'
                      }`}
                    />

                    {/* Pin Label Tooltip / Badge */}
                    <span
                      className={`absolute top-6 whitespace-nowrap px-2.5 py-1 rounded-md text-[11px] font-bold shadow-md transition-all uppercase tracking-wider ${
                        isActive
                          ? 'bg-polygate-navy-900 text-polygate-gold-400 border border-polygate-gold-500/40 opacity-100'
                          : 'bg-white text-slate-700 border border-slate-200 opacity-90 group-hover:opacity-100'
                      }`}
                    >
                      {sec.name}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Sector Sub-Applications (Exact Elsewedy .sector-app-card grid) */}
        <div className="space-y-8 animate-fadeIn">
          
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-polygate-gold-600 block mb-1">
              Active Sector Showcase
            </span>
            <h3 className="text-2xl font-black font-display uppercase text-polygate-navy-900">
              Applications in <span className="text-polygate-gold-600">{activeSector.name}</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
            {activeSector.applications.map((app, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-polygate-gold-500 hover:shadow-md transition-all flex items-center gap-3 group"
              >
                <div className="w-7 h-7 rounded-full bg-polygate-gold-100 group-hover:bg-polygate-gold-500 text-polygate-gold-600 group-hover:text-polygate-navy-950 flex items-center justify-center flex-shrink-0 transition-colors">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm text-slate-800 group-hover:text-polygate-navy-900 leading-snug">
                    {app.name}
                  </div>
                  <div className="text-[10px] text-slate-400 group-hover:text-polygate-gold-600 line-clamp-1">
                    {app.recommended}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Centered CTA Button (Exact Elsewedy .btn-cta) */}
          <div className="text-center pt-4">
            <button
              onClick={() => onOpenQuoteModal(undefined, activeSector.name)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-polygate-navy-950 gold-gradient-bg shadow-md hover:brightness-110 active:scale-95 transition-all cursor-pointer"
            >
              <span>Learn More about {activeSector.name}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
