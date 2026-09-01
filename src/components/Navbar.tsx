import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, Heart, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen, setIsSearchOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Shop', href: '#shop' },
    { name: 'Collections', href: '#collections' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out px-4 sm:px-6 lg:px-8 ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div
          className={`max-w-7xl mx-auto rounded-full transition-all duration-500 ${
            isScrolled
              ? 'glass-panel bg-white/80 shadow-pink-glow py-2.5 px-6 border-pink-200/60'
              : 'bg-white/40 backdrop-blur-md py-3.5 px-6 sm:px-8 border border-white/60 shadow-sm'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-2 group cursor-pointer focus:outline-none"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-brand-500 to-rose-400 flex items-center justify-center text-white shadow-pink-500/30 shadow-md group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-pink-950 flex items-center gap-1">
                  Stylish <span className="text-gradient-pink font-extrabold">Handmade</span>
                  <span className="text-brand-500 text-xs animate-bounce">♡</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-brand-600 -mt-1">
                  Accessories
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-1.5 rounded-full text-sm font-medium text-pink-900 hover:text-brand-600 hover:bg-brand-50/80 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action Icons */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Search Toggle */}
              <button
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search Accessories"
                className="p-2.5 rounded-full text-pink-900 hover:text-brand-600 hover:bg-pink-100/60 transition-colors relative"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Shopping Bag Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                aria-label="Shopping Cart"
                className="p-2.5 rounded-full text-pink-900 hover:text-brand-600 hover:bg-pink-100/60 transition-colors relative group"
              >
                <ShoppingBag className="w-5 h-5 transition-transform group-hover:scale-110" />
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 transform translate-x-1 -translate-y-1 bg-gradient-to-r from-brand-500 to-rose-500 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm animate-bounce">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* WhatsApp Quick Link */}
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:brightness-105 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>WhatsApp</span>
              </a>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Mobile Menu"
                className="md:hidden p-2 rounded-xl text-pink-900 hover:bg-pink-100/60 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex justify-end">
          <div
            className="fixed inset-0 bg-pink-950/40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative w-4/5 max-w-sm bg-white/95 backdrop-blur-xl h-full shadow-2xl p-6 flex flex-col justify-between border-l border-pink-100 z-10 animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between border-b border-pink-100 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-brand-500 fill-brand-500" />
                  <span className="font-serif text-lg font-bold text-pink-950">Menu</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close Mobile Menu"
                  className="p-2 rounded-full hover:bg-pink-100 text-pink-900"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-2xl font-medium text-pink-900 hover:bg-brand-50 hover:text-brand-600 transition-all text-base flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <span className="text-brand-300">→</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="border-t border-pink-100 pt-6 space-y-3">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold py-3 rounded-2xl shadow-md text-sm"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current" />
                <span>Order on WhatsApp</span>
              </a>
              <p className="text-center text-xs text-pink-400 font-medium">
                Made with Love for Beautiful You ♡
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.461c-1.852 0-3.664-.498-5.263-1.442l-.377-.224-3.914 1.026 1.044-3.815-.246-.391c-1.036-1.648-1.585-3.555-1.585-5.508 0-5.635 4.585-10.22 10.225-10.22 2.73 0 5.297 1.063 7.228 2.996 1.93 1.932 2.99 4.498 2.99 7.227 0 5.636-4.585 10.22-10.22 10.22m0-22c-6.495 0-11.78 5.285-11.78 11.78 0 2.078.542 4.108 1.57 5.894l-1.666 6.084 6.226-1.633c1.724.939 3.67 1.433 5.65 1.433 6.495 0 11.78-5.285 11.78-11.78 0-3.147-1.226-6.105-3.454-8.333-2.228-2.228-5.186-3.454-8.333-3.454" />
  </svg>
);
