import React from 'react';
import { REVIEWS } from '../data/products';
import { Star, Quote, Sparkles } from 'lucide-react';

export const CustomerReviews: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-pink-100/40 to-transparent">
      {/* Ambient floaters */}
      <div className="absolute top-10 right-10 text-3xl opacity-30 animate-float-slow">💕</div>
      <div className="absolute bottom-10 left-10 text-3xl opacity-30 animate-float-medium">🌸</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Love Notes ♡</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-pink-950">
            Loved by <span className="text-gradient-pink">Pretty People</span>
          </h2>
          <p className="mt-2 text-pink-800/80 text-sm sm:text-base">
            See what our happy customers have to say about our handmade accessories.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="glass-card rounded-3xl p-6 flex flex-col justify-between hover:shadow-pink-glow transition-all duration-300 transform hover:-translate-y-1 relative border-white/80"
            >
              <div>
                {/* Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-brand-300/60" />
                </div>

                {/* Comment Text */}
                <p className="text-pink-950 font-medium text-sm sm:text-base leading-relaxed italic mb-4">
                  “{rev.comment}”
                </p>
              </div>

              {/* Author Details */}
              <div className="flex items-center gap-3 pt-4 border-t border-pink-100">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-brand-200"
                />
                <div>
                  <h4 className="font-serif font-bold text-pink-950 text-sm">
                    {rev.name}
                  </h4>
                  <p className="text-[11px] text-brand-600 font-semibold">
                    Happy Customer • {rev.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
