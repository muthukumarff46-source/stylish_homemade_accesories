import React from 'react';
import { WHY_CHOOSE_US } from '../data/products';
import { Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Soft pink gradient backdrop panel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-brand-100/90 via-blush-100/70 to-pink-100/80 p-8 sm:p-12 lg:p-16 border border-pink-200/80 shadow-pink-lg relative overflow-hidden">
          
          {/* Background subtle sparkles graphics */}
          <div className="absolute top-6 right-8 text-3xl opacity-40 animate-pulse">✨</div>
          <div className="absolute bottom-6 left-8 text-2xl opacity-40 animate-float-slow">🎀</div>

          {/* Section Header */}
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 text-brand-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Promise ♡</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-pink-950">
              Why Choose <span className="text-gradient-pink">Stylish Handmade</span>
            </h2>
            <p className="mt-2 text-pink-800/80 text-sm sm:text-base">
              Crafted with heart, delivered with elegance.
            </p>
          </div>

          {/* 4 Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel bg-white/80 rounded-3xl p-6 text-center hover:bg-white transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-pink-glow border-pink-200/60 flex flex-col items-center justify-between"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-brand-400 to-rose-400 text-white text-2xl flex items-center justify-center mb-4 shadow-pink-500/20 shadow-md">
                  {item.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-pink-950 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-pink-800/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
