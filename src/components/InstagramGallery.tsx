import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/products';
import { GalleryItem } from '../types';
import { Heart, Instagram, X, Sparkles } from 'lucide-react';

export const InstagramGallery: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [likesCount, setLikesCount] = useState<Record<string, number>>({});

  const handleLike = (id: string, initialLikes: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikesCount((prev) => ({
      ...prev,
      [id]: (prev[id] || initialLikes) + 1,
    }));
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Instagram className="w-3.5 h-3.5" />
            <span>@stylish_handmade_accs</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-pink-950">
            Made With <span className="text-gradient-pink">Love ♡</span>
          </h2>
          <p className="mt-2 text-pink-800/80 text-sm sm:text-base">
            Behind the scenes, customer flatlays, and signature handcrafted accessories.
          </p>
        </div>

        {/* Pinterest / Instagram Style Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
          {GALLERY_ITEMS.map((item) => {
            const likes = likesCount[item.id] || item.likes;
            return (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="group relative rounded-3xl overflow-hidden glass-card cursor-pointer aspect-square shadow-sm hover:shadow-pink-lg transition-all duration-500 border-white/80"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Pink Glossy Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                  
                  {/* Top Category Badge */}
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase font-bold tracking-wider bg-white/30 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/40">
                      {item.category}
                    </span>
                    
                    {/* Heart Like Button */}
                    <button
                      onClick={(e) => handleLike(item.id, item.likes, e)}
                      className="p-2 rounded-full bg-white/20 hover:bg-brand-500 hover:text-white transition-colors"
                    >
                      <Heart className="w-4 h-4 fill-white" />
                    </button>
                  </div>

                  {/* Bottom Title & Likes */}
                  <div>
                    <h3 className="font-serif text-sm sm:text-base font-bold line-clamp-1">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-pink-200 mt-1">
                      <Heart className="w-3 h-3 fill-pink-300 text-pink-300" />
                      <span>{likes} likes</span>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-pink-950/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6 glass-panel border-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-pink-100 hover:bg-pink-200 text-pink-900 z-10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-pink-50">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-brand-600 tracking-wider">
                  {activeItem.category}
                </span>
                <h3 className="font-serif text-xl font-bold text-pink-950 mt-0.5">
                  {activeItem.title}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => handleLike(activeItem.id, activeItem.likes, e)}
                  className="flex items-center gap-1.5 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-xs font-bold hover:bg-brand-500 hover:text-white transition-colors"
                >
                  <Heart className="w-4 h-4 fill-current" />
                  <span>{likesCount[activeItem.id] || activeItem.likes}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
