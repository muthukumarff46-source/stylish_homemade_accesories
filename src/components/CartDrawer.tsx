import React from 'react';
import { useCart } from '../context/CartContext';
import { getCartWhatsAppUrl } from '../utils/whatsapp';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './Navbar';

export const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  if (!isCartOpen) return null;

  const freeShippingThreshold = 999;
  const progressPercent = Math.min(100, (totalPrice / freeShippingThreshold) * 100);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-pink-950/40 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white/95 backdrop-blur-2xl shadow-2xl border-l border-pink-100 flex flex-col justify-between p-6 z-10 animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div>
            <div className="flex items-center justify-between border-b border-pink-100 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-brand-500" />
                <h3 className="font-serif text-xl font-bold text-pink-950">
                  Your Bag ({totalItems})
                </h3>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-full hover:bg-pink-100 text-pink-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress Indicator */}
            <div className="bg-brand-50 p-3 rounded-2xl border border-brand-100 mb-4 text-xs">
              <div className="flex justify-between font-medium text-pink-900 mb-1.5">
                <span>
                  {totalPrice >= freeShippingThreshold ? (
                    <span className="text-emerald-600 font-bold">🎉 You qualify for FREE Shipping!</span>
                  ) : (
                    <span>Add ₹{freeShippingThreshold - totalPrice} more for FREE Shipping</span>
                  )}
                </span>
                <span>{Math.round(progressPercent)}%</span>
              </div>
              <div className="w-full h-2 bg-pink-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-brand-500 to-rose-500 transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Item List */}
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-pink-100 text-brand-500 flex items-center justify-center mx-auto text-2xl">
                  🎀
                </div>
                <h4 className="font-serif font-bold text-pink-950 text-lg">Your bag is empty</h4>
                <p className="text-xs text-pink-700 max-w-xs mx-auto">
                  Explore our handcrafted bows, pearl bracelets, and clay earrings to add some beauty!
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="inline-flex items-center gap-2 bg-brand-500 text-white text-xs font-bold px-6 py-3 rounded-full shadow-md"
                >
                  <span>Start Shopping</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-1">
                {cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-pink-100 shadow-sm"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-serif font-bold text-pink-950 text-sm line-clamp-1">
                        {item.product.name}
                      </h4>
                      <p className="text-xs font-bold text-brand-600">
                        ₹{item.product.price}
                      </p>

                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 rounded-full bg-pink-100 hover:bg-pink-200 text-pink-900"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-pink-950 min-w-[1.25rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 rounded-full bg-pink-100 hover:bg-pink-200 text-pink-900"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="p-2 text-pink-400 hover:text-rose-600 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Subtotal & WhatsApp Checkout */}
          {cart.length > 0 && (
            <div className="border-t border-pink-100 pt-4 space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-pink-800 font-medium">Subtotal</span>
                <span className="font-serif text-xl font-bold text-brand-700">₹{totalPrice}</span>
              </div>

              <a
                href={getCartWhatsAppUrl(cart, totalPrice)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-4 rounded-2xl shadow-lg transition-all text-sm"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current" />
                <span>Checkout on WhatsApp</span>
              </a>

              <p className="text-[11px] text-center text-pink-500">
                ♡ Items will be confirmed directly on WhatsApp with your preferences.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
