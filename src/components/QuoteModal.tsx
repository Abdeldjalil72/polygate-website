import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, ShieldCheck, FileCheck } from 'lucide-react';
import { PRODUCTS, SECTORS } from '../data/websiteData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
  initialSector?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialProduct,
  initialSector,
}) => {
  const [productCategory, setProductCategory] = useState('');
  const [sector, setSector] = useState('');
  const [volume, setVolume] = useState('20 - 50 MT');
  const [incoterms, setIncoterms] = useState('CIF');
  const [destinationCountry, setDestinationCountry] = useState('');
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');

  useEffect(() => {
    if (initialProduct) {
      setProductCategory(initialProduct);
    } else {
      setProductCategory(PRODUCTS[0].name);
    }

    if (initialSector) {
      setSector(initialSector);
    } else {
      setSector(SECTORS[0].name);
    }
  }, [initialProduct, initialSector, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedTicket = 'PG-RFQ-' + Math.floor(100000 + Math.random() * 900000);
    setTicketNumber(generatedTicket);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-polygate-navy-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-fadeIn">
        
        {/* Modal Header */}
        <div className="bg-polygate-navy-900 text-white p-6 border-b border-polygate-navy-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-polygate-navy-800 border border-polygate-gold-500/30">
              <FileCheck className="w-5 h-5 text-polygate-gold-400" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                Request a Technical Quotation (RFQ)
              </h3>
              <p className="text-xs text-slate-300">
                Direct quotation from POLYGATE Commercial & Engineering Teams
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-polygate-navy-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black font-display text-polygate-navy-900">
                Quotation Request Received!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <span className="font-semibold text-slate-900">{fullName}</span> from{' '}
                <span className="font-semibold text-slate-900">{companyName || 'your enterprise'}</span>. Our commercial sales engineering desk will review your requirements and provide a formal price offer with technical data sheets.
              </p>

              <div className="inline-block p-3 rounded-xl bg-slate-100 border border-slate-200 font-mono text-sm font-bold text-polygate-navy-900">
                Tracking Reference: <span className="text-polygate-gold-600">{ticketNumber}</span>
              </div>

              <div className="pt-4 flex justify-center">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl font-bold text-sm text-white bg-polygate-navy-900 hover:bg-polygate-navy-800 transition-colors cursor-pointer"
                >
                  Close & Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Product & Application Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Product Line *
                  </label>
                  <select
                    value={productCategory}
                    onChange={(e) => setProductCategory(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-polygate-gold-500"
                  >
                    {PRODUCTS.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Application / Sector *
                  </label>
                  <select
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-polygate-gold-500"
                  >
                    {SECTORS.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name} ({s.sectorCategory})
                      </option>
                    ))}
                    <option value="Other">Other / Custom Compound</option>
                  </select>
                </div>
              </div>

              {/* Volume & Delivery Terms */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Estimated Volume *
                  </label>
                  <select
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-polygate-gold-500"
                  >
                    <option value="Sample / Pilot (1 - 5 MT)">Sample / Pilot (1 - 5 MT)</option>
                    <option value="Trial Container (10 - 20 MT)">Trial Container (10 - 20 MT)</option>
                    <option value="20 - 50 MT">20 - 50 MT</option>
                    <option value="50 - 200 MT">50 - 200 MT</option>
                    <option value="200+ MT (Annual Contract)">200+ MT (Annual Contract)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Incoterms *
                  </label>
                  <select
                    value={incoterms}
                    onChange={(e) => setIncoterms(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-polygate-gold-500"
                  >
                    <option value="FOB">FOB (Free on Board)</option>
                    <option value="CIF">CIF (Cost, Insurance & Freight)</option>
                    <option value="CFR">CFR (Cost and Freight)</option>
                    <option value="EXW">EXW (Ex-Works Factory)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Destination Port / Country *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rotterdam / Hamburg"
                    value={destinationCountry}
                    onChange={(e) => setDestinationCountry(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-polygate-gold-500"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-polygate-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Global Plastics Corp."
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-polygate-gold-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-polygate-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 555 123 4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-polygate-gold-500"
                  />
                </div>
              </div>

              {/* Technical Specifications Notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Specific Formulation Requirements or Target Standard
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Shore A hardness, flame retardant class (IEC 60332), TiO2 concentration, MFI parameters..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 bg-white text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-polygate-gold-500"
                />
              </div>

              {/* Security & Action */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-[11px] text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Confidential commercial offer under NDA available</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-bold text-xs text-polygate-navy-950 gold-gradient-bg shadow-sm hover:brightness-110 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit RFQ Request</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
