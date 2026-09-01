import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { getCustomOrderWhatsAppUrl } from '../utils/whatsapp';
import { X, Sparkles, Send } from 'lucide-react';
import { WhatsAppIcon } from './Navbar';

export const CustomOrderModal: React.FC = () => {
  const { isCustomModalOpen, setIsCustomModalOpen } = useCart();
  const [accessoryType, setAccessoryType] = useState('Custom Hair Bow Set');
  const [idea, setIdea] = useState('');

  if (!isCustomModalOpen) return null;

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getCustomOrderWhatsAppUrl(idea, accessoryType);
    window.open(url, '_blank');
    setIsCustomModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-pink-950/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        className="relative max-w-lg w-full bg-white rounded-3xl overflow-hidden shadow-2xl glass-panel border-white p-6 sm:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsCustomModalOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full bg-pink-100 text-pink-900 hover:bg-pink-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mx-auto mb-2">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-pink-950">
            Request Custom Accessory
          </h3>
          <p className="text-xs text-pink-800 font-light mt-1">
            Let's bring your dream design to life! Customize colors, lengths, and embellishments.
          </p>
        </div>

        <form onSubmit={handleCustomSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-pink-900 mb-1">Accessory Category</label>
            <select
              value={accessoryType}
              onChange={(e) => setAccessoryType(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-white border border-pink-200 text-pink-950 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
            >
              <option value="Custom Hair Bow Set">Custom Satin Hair Bow Set</option>
              <option value="Pearl Bracelet Combo">Handmade Pearl Bracelet Set</option>
              <option value="Bridal Floral Earrings">Bridal Floral Clay Earrings</option>
              <option value="Full Gift Hamper">Complete Custom Gift Box</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-pink-900 mb-1">Describe Your Idea / Preferences</label>
            <textarea
              rows={4}
              placeholder="e.g. I need 3 matching blush pink bows with gold pearl charms for my bridesmaids..."
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-white border border-pink-200 text-pink-950 placeholder-pink-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold py-4 rounded-2xl shadow-lg hover:from-emerald-600 hover:to-teal-700 transition-all text-sm"
          >
            <WhatsAppIcon className="w-5 h-5 fill-current" />
            <span>Discuss & Order on WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
};
