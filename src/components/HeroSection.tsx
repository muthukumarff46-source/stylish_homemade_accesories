import React from 'react';
import { Sparkles, ArrowRight, Heart, Star } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';
import { WhatsAppIcon } from './Navbar';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-brand-300/30 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-rose-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel bg-white/70 border border-brand-200/80 shadow-pink-glow text-brand-700 text-xs sm:text-sm font-semibold tracking-wide animate-bounce">
              <Sparkles className="w-4 h-4 text-brand-500 fill-brand-300" />
              <span>Handcrafted with Love ♡</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-pink-950 leading-[1.15]">
              Beautiful{' '}
              <span className="text-gradient-pink relative inline-block">
                Accessories
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-brand-300/70"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 15 Q 50 0, 100 15"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              ,<br />
              Made Just for You.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-pink-800/80 max-w-xl font-normal leading-relaxed">
              Discover unique handmade accessories crafted with love, creativity, and attention to every little detail. From dainty pearls to sweet hair bows, elevate your everyday style.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
              <a
                href="#shop"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-500 via-rose-500 to-brand-600 text-white font-semibold px-8 py-4 rounded-full shadow-pink-lg hover:shadow-pink-glow transform hover:-translate-y-1 transition-all duration-300 group"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 glass-panel bg-white/80 hover:bg-white text-emerald-700 font-semibold px-7 py-4 rounded-full border border-emerald-200/80 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <WhatsAppIcon className="w-5 h-5 fill-emerald-600 group-hover:scale-110 transition-transform" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Social Proof Trust Badges */}
            <div className="pt-4 flex items-center gap-6 text-pink-900 text-xs sm:text-sm font-medium border-t border-pink-200/60 w-full justify-center lg:justify-start">
              <div className="flex items-center gap-1.5">
                <div className="flex -space-x-2">
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
                    alt="Customer"
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100"
                    alt="Customer"
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=100"
                    alt="Customer"
                  />
                </div>
                <div className="flex flex-col text-left ml-1">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-pink-950 font-bold text-xs">5,000+ Happy Buyers</span>
                </div>
              </div>

              <div className="h-8 w-px bg-pink-200" />

              <div className="flex items-center gap-1.5 text-pink-800">
                <span className="text-xl">🌸</span>
                <span>100% Handcrafted</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Composition with floating elements */}
          <div className="lg:col-span-6 relative flex justify-center">
            
            {/* Main Composition Container */}
            <div className="relative w-full max-w-lg aspect-square rounded-3xl p-4 sm:p-6 glass-card bg-white/50 border-white/80 shadow-pink-lg">
              
              {/* Central Featured Image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg group">
                <img
                  src="/images/hero_showcase.jpg"
                  alt="Handmade Luxury Accessories Showcase"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Glossy Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-pink-950/40 via-transparent to-transparent" />
                
                {/* Floating Tag over Image */}
                <div className="absolute bottom-4 left-4 right-4 glass-panel bg-white/85 p-3 sm:p-4 rounded-xl flex items-center justify-between border-white/60">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🎀</span>
                    <div>
                      <h4 className="font-serif font-bold text-pink-950 text-sm sm:text-base">Signature Collection</h4>
                      <p className="text-xs text-pink-700">Pearls • Bows • Floral Pins</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold bg-brand-100 text-brand-700 px-3 py-1 rounded-full border border-brand-200">
                    Handmade
                  </span>
                </div>
              </div>

              {/* FLOATING DECORATIVE ANIMATED ELEMENTS */}
              
              {/* Floating Pearl Badge Top Right */}
              <div className="absolute -top-4 -right-4 glass-panel bg-white/90 p-3 rounded-2xl shadow-lg border-white flex items-center gap-2 text-xs font-bold text-pink-900 animate-float-slow">
                <span className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-200 to-amber-400 shadow-inner" />
                <span>Real Pearls & Bows</span>
              </div>

              {/* Floating Heart Bottom Left */}
              <div className="absolute -bottom-5 -left-5 glass-panel bg-white/95 p-3 rounded-full shadow-lg border-white text-brand-500 animate-float-medium flex items-center justify-center">
                <Heart className="w-6 h-6 fill-brand-400" />
              </div>

              {/* Floating Flower Top Left */}
              <div className="absolute top-10 -left-6 bg-pink-100/90 text-pink-700 p-2.5 rounded-2xl shadow-md border border-pink-200 animate-float-reverse text-xl">
                🌸
              </div>

              {/* Floating Butterfly Right Center */}
              <div className="absolute top-1/2 -right-6 bg-pink-500 text-white p-2.5 rounded-full shadow-pink-glow animate-bounce text-lg">
                🦋
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
