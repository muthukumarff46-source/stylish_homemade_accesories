import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import { Search, X, Star, ArrowRight } from 'lucide-react';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, setQuickViewProduct } = useCart();
  const [query, setQuery] = useState('');

  if (!isSearchOpen) return null;

  const results = query.trim() === ''
    ? PRODUCTS.slice(0, 4)
    : PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase()) ||
          p.categoryLabel.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 bg-pink-950/60 backdrop-blur-sm flex items-start justify-center pt-20 p-4">
      <div
        className="relative max-w-xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl glass-panel border-white p-6 animate-in slide-in-from-top-10 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsSearchOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full bg-pink-100 text-pink-900 hover:bg-pink-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative mb-6">
          <Search className="w-5 h-5 text-pink-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            autoFocus
            placeholder="Search hair bows, pearl bracelets, earrings..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-pink-50/80 border border-pink-200 text-pink-950 placeholder-pink-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
          />
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 block mb-3">
            {query.trim() === '' ? 'Popular Accessories' : `Search Results (${results.length})`}
          </span>

          <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-1">
            {results.map((prod) => (
              <div
                key={prod.id}
                onClick={() => {
                  setQuickViewProduct(prod);
                  setIsSearchOpen(false);
                }}
                className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-pink-100 hover:border-brand-300 hover:shadow-pink-glow cursor-pointer transition-all"
              >
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-14 h-14 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-serif font-bold text-pink-950 text-sm">
                    {prod.name}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-pink-600 mt-0.5">
                    <span className="font-bold text-brand-700">₹{prod.price}</span>
                    <span>•</span>
                    <span className="flex items-center text-amber-500 font-semibold">
                      <Star className="w-3 h-3 fill-current inline mr-0.5" />
                      {prod.rating}
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-brand-400" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
