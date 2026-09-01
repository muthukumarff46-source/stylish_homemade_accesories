import React, { useState } from 'react';
import { Phone, Instagram, Send, Sparkles, CheckCircle } from 'lucide-react';
import { WHATSAPP_NUMBERS, getEnquiryWhatsAppUrl } from '../utils/whatsapp';
import { useCart } from '../context/CartContext';
import { WhatsAppIcon } from './Navbar';

export const ContactSection: React.FC = () => {
  const { showToast } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    lookingFor: 'Hair Accessories',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      showToast('Please fill in your Name and Phone Number ♡');
      return;
    }

    setSubmitted(true);
    showToast('Enquiry sent! Opening WhatsApp to send your message...');

    // Open WhatsApp with pre-filled enquiry after brief pause
    setTimeout(() => {
      const url = getEnquiryWhatsAppUrl(formData);
      window.open(url, '_blank');
    }, 800);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get in Touch ♡</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-pink-950">
            Let's Create Something <span className="text-gradient-pink">Beautiful ♡</span>
          </h2>
          <p className="mt-2 text-pink-800/80 text-sm sm:text-base">
            We are always here to help you pick or customize the perfect handmade accessories.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 border-white/80">
              <h3 className="font-serif text-xl font-bold text-pink-950 border-b border-pink-100 pb-3">
                Direct Contact Channels
              </h3>

              {/* WhatsApp Card 1 */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white/80 border border-pink-100 hover:border-pink-300 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <WhatsAppIcon className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-brand-600 uppercase block">Primary WhatsApp</span>
                    <span className="font-bold text-pink-950 text-base">{WHATSAPP_NUMBERS.primary.display}</span>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBERS.primary.clean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold transition-all shadow-sm"
                >
                  Chat
                </a>
              </div>

              {/* WhatsApp Card 2 */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white/80 border border-pink-100 hover:border-pink-300 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <WhatsAppIcon className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-brand-600 uppercase block">Secondary WhatsApp</span>
                    <span className="font-bold text-pink-950 text-base">{WHATSAPP_NUMBERS.secondary.display}</span>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBERS.secondary.clean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold transition-all shadow-sm"
                >
                  Chat
                </a>
              </div>

              {/* Action Buttons: Phone & Instagram */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${WHATSAPP_NUMBERS.primary.display}`}
                  className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-pink-100 text-pink-900 hover:bg-brand-500 hover:text-white font-semibold text-xs transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Us</span>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-pink-100 text-pink-900 hover:bg-brand-500 hover:text-white font-semibold text-xs transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
              </div>

            </div>

            {/* Timings / Location Box */}
            <div className="p-6 rounded-3xl glass-panel bg-white/60 text-xs text-pink-800 space-y-1 text-center">
              <p className="font-bold text-pink-950 text-sm">📍 Indian Small Business Brand</p>
              <p>Operating Hours: Mon - Sat (10:00 AM - 8:00 PM IST)</p>
              <p className="text-brand-600 font-semibold">Worldwide Delivery & Express Shipping Available ♡</p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-10 border-white/80">
              <h3 className="font-serif text-2xl font-bold text-pink-950 mb-2">
                Send us a Message
              </h3>
              <p className="text-xs sm:text-sm text-pink-800/80 mb-6">
                Fill out the quick form below and we will get back to you immediately on WhatsApp.
              </p>

              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
                  <h4 className="font-serif text-2xl font-bold text-pink-950">Thank You! ♡</h4>
                  <p className="text-sm text-pink-800 max-w-md mx-auto">
                    Your enquiry has been received. If WhatsApp didn't open automatically, please click below.
                  </p>
                  <a
                    href={getEnquiryWhatsAppUrl(formData)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-500 text-white font-bold px-6 py-3 rounded-full text-sm shadow-md hover:bg-emerald-600 transition-colors"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current" />
                    <span>Open WhatsApp Now</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-pink-900 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/90 border border-pink-200 text-pink-950 placeholder-pink-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-pink-900 mb-1">Phone Number (WhatsApp) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/90 border border-pink-200 text-pink-950 placeholder-pink-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-pink-900 mb-1">What are you looking for?</label>
                    <select
                      value={formData.lookingFor}
                      onChange={(e) => setFormData({ ...formData, lookingFor: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/90 border border-pink-200 text-pink-950 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
                    >
                      <option value="Hair Accessories">Hair Accessories (Bows, Clips)</option>
                      <option value="Bracelets">Handmade Pearl Bracelets</option>
                      <option value="Earrings">Floral Clay Earrings</option>
                      <option value="Custom Order">Custom Design / Bridal Order</option>
                      <option value="Gift Box">Gift Box / Bulk Order</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-pink-900 mb-1">Message</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us your preferences, colors, or date needed..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/90 border border-pink-200 text-pink-950 placeholder-pink-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-500 to-rose-500 hover:from-brand-600 hover:to-rose-600 text-white font-bold py-4 rounded-2xl shadow-pink-lg transition-all duration-300 hover:shadow-pink-glow text-sm sm:text-base"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Enquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
