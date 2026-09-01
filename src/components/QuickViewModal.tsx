import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { getProductWhatsAppUrl } from '../utils/whatsapp';
import { X, Star, ShoppingBag, Check } from 'lucide-react';
import { WhatsAppIcon } from './Navbar';

export const QuickViewModal: React.FC = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!quickViewProduct) return null;

  return (
    <div className="fixed inset-0 z-50 bg-pink-950/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl glass-panel border-white p-6 sm:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 p-2 rounded-full bg-pink-100 text-pink-900 hover:bg-pink-200 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          
          {/* Image */}
          <div className="aspect-square rounded-2xl overflow-hidden bg-pink-50 relative">
            <img
              src={quickViewProduct.image}
              alt={quickViewProduct.name}
              className="w-full h-full object-cover"
            />
            {quickViewProduct.badge && (
              <span className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-brand-700 shadow-sm">
                {quickViewProduct.badge}
              </span>
            )}
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div>
              <span className="text-xs uppercase font-bold text-brand-600 tracking-wider">
                {quickViewProduct.categoryLabel}
              </span>
              <h3 className="font-serif text-2xl font-bold text-pink-950 mt-1">
                {quickViewProduct.name}
              </h3>
              
              <div className="flex items-center gap-2 text-xs text-amber-500 font-bold mt-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span>{quickViewProduct.rating} ({quickViewProduct.reviewCount} reviews)</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-pink-800 leading-relaxed font-light">
              {quickViewProduct.description}
            </p>

            {quickViewProduct.features && (
              <ul className="space-y-1 text-xs text-pink-900">
                {quickViewProduct.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-brand-500" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="flex items-baseline gap-2 pt-2">
              <span className="font-serif text-3xl font-bold text-brand-700">
                ₹{quickViewProduct.price}
              </span>
              {quickViewProduct.originalPrice && (
                <span className="text-sm text-pink-400 line-through">
                  ₹{quickViewProduct.originalPrice}
                </span>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => {
                  addToCart(quickViewProduct, quantity);
                  setQuickViewProduct(null);
                }}
                className="w-full flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold py-3 rounded-2xl text-xs transition-colors shadow-md"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>

              <a
                href={getProductWhatsAppUrl(quickViewProduct)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-2xl text-xs transition-colors shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>Order WhatsApp</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
