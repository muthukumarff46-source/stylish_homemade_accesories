import React from 'react';
import { Heart, Sparkles, Award, ShieldCheck } from 'lucide-react';

export const AboutBrand: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 relative">
              
              {/* Main Image 1 */}
              <div className="relative rounded-3xl overflow-hidden glass-card p-2 transform -rotate-2 hover:rotate-0 transition-transform duration-500 shadow-pink-lg">
                <img
                  src="/images/hero_showcase.jpg"
                  alt="Crafting Handmade Accessories"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />
              </div>

              {/* Image 2 */}
              <div className="relative rounded-3xl overflow-hidden glass-card p-2 transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-pink-lg translate-y-6">
                <img
                  src="/images/pearl_bracelet.jpg"
                  alt="Handmade Pink Pearl Bracelet"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />
              </div>

              {/* Floating Center Badge */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 glass-panel bg-white/95 p-4 rounded-2xl shadow-xl text-center border-brand-200 z-20">
                <div className="w-10 h-10 rounded-full bg-brand-500 text-white flex items-center justify-center mx-auto mb-1 shadow-md">
                  <Heart className="w-5 h-5 fill-white" />
                </div>
                <span className="font-serif text-sm font-bold text-pink-950 block">100% Artisan</span>
                <span className="text-[10px] text-brand-600 font-semibold uppercase">Handcrafted</span>
              </div>

            </div>
          </div>

          {/* Right Column: Brand Story Narrative */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-100/90 text-brand-700 text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Story ♡</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-pink-950 leading-tight">
              Small Details.{' '}
              <span className="text-gradient-pink">Big Beauty.</span>
            </h2>

            <div className="space-y-4 text-pink-800/90 text-base sm:text-lg font-normal leading-relaxed">
              <p className="border-l-4 border-brand-400 pl-4 py-1 italic bg-brand-50/50 rounded-r-xl">
                “Every accessory we create is more than just a piece of fashion. It is carefully handmade with love, creativity, and attention to detail. From delicate pearls to beautiful bows, each piece is created to add a little more beauty to your everyday style.”
              </p>
              <p className="text-sm sm:text-base">
                Founded with a passion for modern aesthetic accessories, our small-business studio designs custom pieces that reflect your unique flair. Whether you are dressing up for a special celebration or adding sweet charm to your routine, we craft each piece with precision and love.
              </p>
            </div>

            {/* Key Stats / Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-pink-200/60">
              <div className="p-3 rounded-2xl bg-white/60 backdrop-blur-sm border border-pink-100 text-center">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-brand-600 block">5,000+</span>
                <span className="text-xs text-pink-800 font-medium">Orders Delivered</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/60 backdrop-blur-sm border border-pink-100 text-center">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-brand-600 block">4.9★</span>
                <span className="text-xs text-pink-800 font-medium">Customer Rating</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/60 backdrop-blur-sm border border-pink-100 text-center">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-brand-600 block">100%</span>
                <span className="text-xs text-pink-800 font-medium">Made by Hand</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
