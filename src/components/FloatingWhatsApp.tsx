import React, { useState } from 'react';
import { WHATSAPP_NUMBERS, getGeneralWhatsAppUrl } from '../utils/whatsapp';
import { X, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './Navbar';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Popover Selector when opened */}
      {isOpen && (
        <div className="mb-3 bg-white/95 backdrop-blur-xl p-4 rounded-3xl shadow-2xl border border-pink-200 w-72 animate-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between border-b border-pink-100 pb-2 mb-3">
            <div className="flex items-center gap-1.5 text-xs font-bold text-pink-950">
              <Sparkles className="w-4 h-4 text-brand-500" />
              <span>Select WhatsApp Contact</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-pink-500 hover:bg-pink-100"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            <a
              href={getGeneralWhatsAppUrl(WHATSAPP_NUMBERS.primary.display)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-950 text-xs font-semibold border border-emerald-200 transition-colors"
            >
              <div>
                <span className="block font-bold text-emerald-800">Primary Orders</span>
                <span className="text-[11px] text-emerald-600">{WHATSAPP_NUMBERS.primary.display}</span>
              </div>
              <WhatsAppIcon className="w-5 h-5 fill-emerald-600" />
            </a>

            <a
              href={getGeneralWhatsAppUrl(WHATSAPP_NUMBERS.secondary.display)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-950 text-xs font-semibold border border-emerald-200 transition-colors"
            >
              <div>
                <span className="block font-bold text-emerald-800">Customer Support</span>
                <span className="text-[11px] text-emerald-600">{WHATSAPP_NUMBERS.secondary.display}</span>
              </div>
              <WhatsAppIcon className="w-5 h-5 fill-emerald-600" />
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Contact on WhatsApp"
        className="relative group p-4 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 text-white shadow-pink-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-500 rounded-full border-2 border-white animate-ping" />
        <WhatsAppIcon className="w-7 h-7 fill-current" />
      </button>

    </div>
  );
};
