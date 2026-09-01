import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { getProductWhatsAppUrl } from '../utils/whatsapp';
import { Star, ShoppingBag, Eye, Heart } from 'lucide-react';
import { WhatsAppIcon } from './Navbar';

export const BestSellers: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { addToCart, setQuickViewProduct } = useCart();
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  const categories = [
    { key: 'all', label: 'All Products ✨' },
    { key: 'hair', label: 'Hair Accessories 🎀' },
    { key: 'bracelets', label: 'Bracelets 📿' },
    { key: 'earrings', label: 'Earrings 🌸' },
    { key: 'custom', label: 'Custom Sets 🎁' },
  ];

  return (
    <section id="shop" className="py-16 sm:py-24 bg-gradient-to-b from-transparent via-white/60 to-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-rose-100 text-rose-700 text-xs font-bold tracking-wider uppercase mb-3">
              <span>Best Sellers ♡</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-pink-950">
              Most Loved <span className="text-gradient-pink">Creations</span>
            </h2>
            <p className="mt-2 text-pink-800/80 text-sm sm:text-base">
              Hand-picked bestsellers crafted to make your daily style extra special.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setSelectedCategory(tab.key)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === tab.key
                    ? 'bg-gradient-to-r from-brand-500 to-rose-500 text-white shadow-pink-glow'
                    : 'glass-panel bg-white/70 text-pink-900 hover:bg-white hover:text-brand-600 border-pink-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product: Product) => (
            <div
              key={product.id}
              className="group relative glass-card rounded-3xl p-4 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-pink-lg border-white/80"
            >
              <div>
                {/* Product Image Box */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-pink-50 mb-4 cursor-pointer" onClick={() => setQuickViewProduct(product)}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-brand-700 shadow-sm border border-pink-100">
                      {product.badge}
                    </div>
                  )}

                  {/* Favorite Heart Button */}
                  <button
                    onClick={(e) => toggleFavorite(product.id, e)}
                    aria-label="Save Favorite"
                    className="absolute top-3 right-3 p-2 rounded-full glass-panel bg-white/80 text-pink-500 hover:scale-110 transition-transform shadow-sm"
                  >
                    <Heart className={`w-4 h-4 ${favorites[product.id] ? 'fill-brand-500 text-brand-500' : ''}`} />
                  </button>

                  {/* Quick View Overlay Button */}
                  <div className="absolute inset-0 bg-pink-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setQuickViewProduct(product);
                      }}
                      className="inline-flex items-center gap-1.5 bg-white/90 hover:bg-white text-pink-950 px-4 py-2 rounded-full text-xs font-bold shadow-md transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                    >
                      <Eye className="w-3.5 h-3.5 text-brand-500" />
                      <span>Quick View</span>
                    </button>
                  </div>
                </div>

                {/* Rating & Category */}
                <div className="flex items-center justify-between text-xs text-pink-600 mb-1.5 px-1">
                  <span className="font-semibold uppercase tracking-wider text-[10px] text-brand-600">
                    {product.categoryLabel}
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{product.rating}</span>
                    <span className="text-pink-400 font-normal">({product.reviewCount})</span>
                  </div>
                </div>

                {/* Product Title & Description */}
                <h3
                  onClick={() => setQuickViewProduct(product)}
                  className="font-serif text-lg sm:text-xl font-bold text-pink-950 hover:text-brand-600 cursor-pointer transition-colors px-1 line-clamp-1"
                >
                  {product.name}
                </h3>
                <p className="text-xs text-pink-800/70 mt-1 line-clamp-2 px-1 font-light">
                  {product.description}
                </p>

                {/* Price Display */}
                <div className="mt-3 px-1 flex items-baseline gap-2">
                  <span className="font-serif text-2xl font-bold text-brand-700">
                    ₹{product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xs text-pink-400 line-through">
                      ₹{product.originalPrice}
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                      SAVE ₹{product.originalPrice - product.price}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons: Add to Cart & WhatsApp */}
              <div className="grid grid-cols-2 gap-2.5 mt-5 pt-3 border-t border-pink-100/80">
                <button
                  onClick={() => addToCart(product)}
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-brand-50 hover:bg-brand-500 text-brand-700 hover:text-white font-semibold py-2.5 rounded-2xl text-xs transition-colors duration-300 border border-brand-200/60"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>

                <a
                  href={getProductWhatsAppUrl(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2.5 rounded-2xl text-xs shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Buy WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
