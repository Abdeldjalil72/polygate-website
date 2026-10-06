import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setFormSent(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-polygate-gold-100/60 border border-polygate-gold-300 text-polygate-gold-700 text-xs font-bold tracking-widest uppercase mb-3">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-polygate-navy-900 tracking-tight">
            CONNECT WITH <span className="gold-gradient-text">POLYGATE</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Speak directly with our polymer scientists and regional sales directors for technical formulations, sample shipments, or plant visits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-xl bg-polygate-navy-900 text-polygate-gold-400 flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-polygate-navy-900 uppercase tracking-wide">
                  Management & Compounding Facilities
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  P.C. No. 36 / 37 / 38 Industrial Zone A6, 10th of Ramadan City, Egypt.
                </p>
                <span className="text-[11px] text-polygate-gold-600 font-semibold block mt-1">
                  Global Maritime Export via Alexandria & Port Said
                </span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-xl bg-polygate-navy-900 text-polygate-gold-400 flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-polygate-navy-900 uppercase tracking-wide">
                  Corporate & Commercial Emails
                </h4>
                <div className="text-xs text-slate-600 mt-1 space-y-1">
                  <div>
                    <span className="font-semibold text-slate-800">Sales Inquiries: </span>
                    <a href="mailto:sales@polygate.com" className="hover:text-polygate-gold-600 underline">
                      sales@polygate.com
                    </a>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-800">Technical R&D: </span>
                    <a href="mailto:tech@polygate.com" className="hover:text-polygate-gold-600 underline">
                      tech@polygate.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-xl bg-polygate-navy-900 text-polygate-gold-400 flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-polygate-navy-900 uppercase tracking-wide">
                  Telephone & Export Desk
                </h4>
                <div className="text-xs text-slate-600 mt-1 space-y-1">
                  <div>Toll Free / WhatsApp: <a href="tel:+18005827659" className="font-semibold text-slate-800 hover:text-polygate-gold-600">+1 (800) 582-POLY</a></div>
                  <div>Headquarters: <a href="tel:+201020707777" className="font-semibold text-slate-800 hover:text-polygate-gold-600">+20 10 2070 7777</a></div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-xl bg-polygate-navy-900 text-polygate-gold-400 flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-polygate-navy-900 uppercase tracking-wide">
                  Operating Hours
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  Sunday - Thursday: 08:00 AM - 18:00 PM (GMT+2)<br />
                  24/7 Automated RFQ Processing & Dispatch
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold font-display text-polygate-navy-900 mb-1">
              Send an Inquiry to POLYGATE
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Fill in your inquiry details below. Our customer engineering desk replies within 24 hours.
            </p>

            {formSent ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-base text-emerald-900">Message Transmitted!</h4>
                <p className="text-xs text-emerald-700">
                  Thank you for reaching out. A POLYGATE technical consultant will respond to your registered email shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-polygate-gold-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@corp.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-polygate-gold-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Subject / Product Area *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sample request for HFFR 601 sheathing compound"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-polygate-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Inquiry Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details regarding your target processing equipment, quantities, or technical requirements..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-polygate-gold-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-bold text-xs text-polygate-navy-950 gold-gradient-bg shadow-sm hover:brightness-110 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
