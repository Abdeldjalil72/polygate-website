import React, { useState } from 'react';
import { BROCHURES } from '../data/websiteData';
import { FileText, Download, CheckCircle, ArrowRight, Shield } from 'lucide-react';

export const BrochuresSection: React.FC = () => {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadedList, setDownloadedList] = useState<string[]>([]);

  const handleDownload = (id: string) => {
    setDownloadingId(id);
    setTimeout(() => {
      setDownloadingId(null);
      if (!downloadedList.includes(id)) {
        setDownloadedList([...downloadedList, id]);
      }
    }, 1200);
  };

  return (
    <section id="brochures" className="py-20 bg-polygate-navy-950 text-white border-b border-polygate-navy-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-polygate-navy-900 border border-polygate-gold-500/20 text-polygate-gold-400 text-xs font-bold tracking-widest uppercase mb-3">
            Technical Resource Center
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-white tracking-tight">
            DOWNLOAD CATALOGS & <span className="gold-gradient-text">TECHNICAL DATA</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Access certified product catalogs, extrusion processing manuals, compliance declarations, and material test reports.
          </p>
        </div>

        {/* Brochures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BROCHURES.map((brochure) => {
            const isDownloaded = downloadedList.includes(brochure.id);
            const isDownloading = downloadingId === brochure.id;

            return (
              <div
                key={brochure.id}
                className="rounded-2xl bg-gradient-to-b from-polygate-navy-900 to-polygate-navy-950 p-6 border border-polygate-navy-800 hover:border-polygate-gold-500/50 shadow-lg hover:shadow-gold-glow/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-3 rounded-xl bg-polygate-navy-950 border border-polygate-gold-500/20 text-polygate-gold-400">
                      <FileText className="w-6 h-6" />
                    </span>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded bg-polygate-navy-800 text-slate-300 border border-slate-700">
                      PDF • {brochure.size}
                    </span>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-polygate-gold-500 block mb-1">
                    {brochure.category}
                  </span>

                  <h3 className="text-lg font-bold font-display text-white mb-2 leading-snug">
                    {brochure.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {brochure.description}
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-3 pt-3 border-t border-polygate-navy-800">
                    <span>Release: {brochure.date}</span>
                    <span className="flex items-center gap-1 text-polygate-gold-400">
                      <Shield className="w-3 h-3" /> Certified Copy
                    </span>
                  </div>

                  <button
                    onClick={() => handleDownload(brochure.id)}
                    disabled={isDownloading}
                    className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isDownloaded
                        ? 'bg-emerald-900/80 text-emerald-200 border border-emerald-500/40'
                        : isDownloading
                        ? 'bg-polygate-navy-800 text-slate-300 animate-pulse'
                        : 'text-polygate-navy-950 gold-gradient-bg hover:brightness-110 shadow-sm'
                    }`}
                  >
                    {isDownloaded ? (
                      <>
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                        <span>Downloaded (Click to Re-download)</span>
                      </>
                    ) : isDownloading ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-polygate-gold-400 border-t-transparent rounded-full animate-spin" />
                        <span>Generating Secure Document...</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        <span>Download Technical PDF</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Compliance Notice */}
        <div className="mt-12 p-6 rounded-2xl bg-polygate-navy-900/60 border border-polygate-navy-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-polygate-gold-500/10 text-polygate-gold-400 flex-shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Need Customized Test Certificates or Regulatory Statements?</h4>
              <p className="text-xs text-slate-300">
                We supply batch-specific Certificate of Analysis (CoA), REACH SVHC declarations, and FDA food-contact compliance letters.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-polygate-navy-800 border border-slate-700 hover:border-polygate-gold-500 hover:text-polygate-gold-400 transition-colors"
          >
            <span>Contact Technical Compliance</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
