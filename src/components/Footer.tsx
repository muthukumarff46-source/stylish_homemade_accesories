import React from 'react';
import { Heart, Instagram, Facebook, Sparkles } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';
import { WhatsAppIcon } from './Navbar';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-transparent to-pink-100/80 pt-16 pb-12 border-t border-pink-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-pink-200/80">
          
          {/* Brand Info Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center shadow-md">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-serif text-xl sm:text-2xl font-bold text-pink-950">
                Stylish <span className="text-gradient-pink">Handmade</span>
              </span>
            </div>

            <p className="text-sm text-pink-800/80 max-w-sm leading-relaxed">
              Made with Love for Beautiful You ♡. Handcrafted premium fashion accessories designed to celebrate your unique elegance.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-white text-emerald-600 hover:bg-emerald-500 hover:text-white flex items-center justify-center shadow-sm transition-all duration-300 border border-pink-200"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white text-brand-600 hover:bg-brand-500 hover:text-white flex items-center justify-center shadow-sm transition-all duration-300 border border-pink-200"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white text-blue-600 hover:bg-blue-500 hover:text-white flex items-center justify-center shadow-sm transition-all duration-300 border border-pink-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-pink-950 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-pink-800">
              <li>
                <a href="#home" className="hover:text-brand-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-brand-600 transition-colors">
                  Shop Catalog
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-brand-600 transition-colors">
                  Featured Collections
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-600 transition-colors">
                  About Brand
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-brand-600 transition-colors">
                  Gallery & Customer Photos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-600 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-base font-bold text-pink-950 uppercase tracking-wider">
              WhatsApp Ordering
            </h4>
            <p className="text-xs text-pink-800 leading-relaxed">
              Order directly via WhatsApp for quick custom modifications, gift packaging, and express delivery across India!
            </p>
            <div className="text-xs font-semibold text-brand-700 bg-white/70 p-3 rounded-2xl border border-pink-200">
              📞 WhatsApp 1: 7904334528<br />
              📞 WhatsApp 2: 6381792401
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-pink-800/70 gap-4">
          <p>© 2026 Stylish Handmade Accessories. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-brand-500 fill-brand-500 inline" />
            <span>for modern fashion lovers</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
