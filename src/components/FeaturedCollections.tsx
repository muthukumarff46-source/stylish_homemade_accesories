import React from 'react';
import { CATEGORIES } from '../data/products';
import { ArrowRight, Sparkles } from 'lucide-react';

export const FeaturedCollections: React.FC = () => {
  return (
    <section id="collections" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background soft pink glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-100/80 text-brand-700 text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Categories</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-pink-950 tracking-tight">
            Made to Make You <span className="text-gradient-pink">Shine ✨</span>
          </h2>
          <p className="mt-3 text-base text-pink-800/80">
            Handcrafted luxury pieces tailored for every occasion and hairstyle.
          </p>
        </div>

        {/* 4 Premium Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href="#shop"
              className="group relative rounded-3xl overflow-hidden glass-card p-3 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-pink-glow border-white/70"
            >
              {/* Image Container with Zoom */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-pink-100">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-pink-950/70 via-pink-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Badge Count */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-pink-900 shadow-sm">
                  {cat.itemCount}+ Items
                </div>

                {/* Card Title & Desc on Image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif text-xl font-bold tracking-wide drop-shadow-sm">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-pink-100/90 line-clamp-2 mt-1 font-light">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Bottom Explore Link */}
              <div className="px-2 pb-2 flex items-center justify-between text-sm font-semibold text-brand-600 group-hover:text-brand-700">
                <span>Explore Collection</span>
                <div className="w-8 h-8 rounded-full bg-brand-100 group-hover:bg-brand-500 group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
