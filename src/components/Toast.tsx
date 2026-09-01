import React from 'react';
import { useCart } from '../context/CartContext';
import { Sparkles } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom-5 duration-200">
      <div className="glass-panel-dark text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 text-xs sm:text-sm font-semibold border border-pink-300/40">
        <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
        <span>{toastMessage}</span>
      </div>
    </div>
  );
};
