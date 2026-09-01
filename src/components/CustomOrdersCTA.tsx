import React from 'react';
import { useCart } from '../context/CartContext';
import { getCustomOrderWhatsAppUrl } from '../utils/whatsapp';
import { Sparkles, Heart } from 'lucide-react';
import { WhatsAppIcon } from './Navbar';

export const CustomOrdersCTA: React.FC = () => {
  const { setIsCustomModalOpen } = useCart();

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-[2.5rem] bg-gradient-to-r from-brand-600 via-rose-500 to-brand-700 text-white p-8 sm:p-14 lg:p-16 shadow-2xl overflow-hidden border border-white/20">
          
          {/* Animated decorative graphics */}
          <div className="absolute top-4 left-6 text-4xl animate-float-slow opacity-60">🎀</div>
          <div className="absolute bottom-4 right-8 text-4xl animate-float-medium opacity-60">📿</div>
          <div className="absolute top-1/2 right-12 text-3xl animate-bounce opacity-40">✨</div>
          <div className="absolute top-10 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-bold tracking-wide">
              <Sparkles className="w-4 h-4 fill-white" />
              <span>Tailor-Made Accessories ♡</span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Have Something Special in Mind?
            </h2>

            {/* Text */}
            <p className="text-pink-100 text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed">
              Tell us your idea and we'll create a beautiful handmade accessory just for you. From custom colors to matching bridesmaid sets.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => setIsCustomModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-brand-700 hover:bg-brand-50 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all text-sm sm:text-base"
              >
                <Heart className="w-4 h-4 fill-brand-500 text-brand-500" />
                <span>Request Custom Order</span>
              </button>

              <a
                href={getCustomOrderWhatsAppUrl('I would like to discuss a custom handmade order.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all text-sm sm:text-base border border-emerald-400/50"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
