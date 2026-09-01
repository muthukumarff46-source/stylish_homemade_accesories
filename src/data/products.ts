import { Product, Category, Review, GalleryItem } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'cat-1',
    name: 'Hair Accessories',
    description: 'Delicate satin hair bows, pearl clips & butterfly pins',
    image: '/images/hair_accessories_cat.jpg',
    itemCount: 24,
    categoryKey: 'hair',
  },
  {
    id: 'cat-2',
    name: 'Bracelets',
    description: 'Handcrafted freshwater pearl & charm bracelets',
    image: '/images/pearl_bracelet.jpg',
    itemCount: 18,
    categoryKey: 'bracelets',
  },
  {
    id: 'cat-3',
    name: 'Earrings',
    description: 'Artisan floral polymer clay & pearl dangle earrings',
    image: '/images/floral_earrings.jpg',
    itemCount: 30,
    categoryKey: 'earrings',
  },
  {
    id: 'cat-4',
    name: 'Custom Accessories',
    description: 'Personalized sets & tailor-made handmade creations',
    image: '/images/hero_showcase.jpg',
    itemCount: 12,
    categoryKey: 'custom',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Pearl Bow Hair Clip',
    category: 'hair',
    categoryLabel: 'Hair Accessories',
    price: 299,
    originalPrice: 399,
    rating: 4.9,
    reviewCount: 42,
    image: '/images/hair_accessories_cat.jpg',
    description: 'Exquisite oversized ribbon hair clip with hand-strung pearl accents. Crafted for soft, elegant styling.',
    badge: 'Bestseller ♡',
    isBestSeller: true,
    features: ['Satin ribbon finish', 'Non-slip alligator clip', 'Hand-sewn pearls', 'Lightweight & comfortable']
  },
  {
    id: 'prod-2',
    name: 'Floral Handmade Earrings',
    category: 'earrings',
    categoryLabel: 'Earrings',
    price: 349,
    originalPrice: 449,
    rating: 5.0,
    reviewCount: 56,
    image: '/images/floral_earrings.jpg',
    description: 'Handcrafted polymer clay floral drop earrings with lustrous pearl details. Anti-tarnish & hypoallergenic.',
    badge: 'Artisan Pick ✨',
    isBestSeller: true,
    features: ['Hand-molded petals', 'Hypoallergenic posts', 'Ultra-lightweight', 'Glossy protective varnish']
  },
  {
    id: 'prod-3',
    name: 'Pink Pearl Bracelet',
    category: 'bracelets',
    categoryLabel: 'Bracelets',
    price: 399,
    originalPrice: 499,
    rating: 4.8,
    reviewCount: 38,
    image: '/images/pearl_bracelet.jpg',
    description: 'Hand-woven pink freshwater pearl bracelet featuring a dainty 18k rose-gold plated bow charm.',
    badge: 'Trending 💕',
    isBestSeller: true,
    features: ['Natural glass pearls', 'Adjustable extension chain', '18k rose gold plated charm', 'Gift pouch included']
  },
  {
    id: 'prod-4',
    name: 'Elegant Hair Bow',
    category: 'hair',
    categoryLabel: 'Hair Accessories',
    price: 249,
    originalPrice: 329,
    rating: 4.9,
    reviewCount: 29,
    image: '/images/hair_bow.jpg',
    description: 'Classic dusty pink satin statement hair bow clip. Adds a touch of romantic elegance to any hairstyle.',
    badge: 'Classic ♡',
    isBestSeller: true,
    features: ['Premium double-faced satin', 'French barrette clasp', 'Wrinkle-resistant', 'Soft glossy finish']
  },
  {
    id: 'prod-5',
    name: 'Butterfly Hair Clip',
    category: 'hair',
    categoryLabel: 'Hair Accessories',
    price: 279,
    originalPrice: 350,
    rating: 4.7,
    reviewCount: 31,
    image: '/images/butterfly_clip.jpg',
    description: 'Handmade iridescent resin butterfly clip adorned with miniature pearl sparkles and gold details.',
    badge: 'Cute ✨',
    isBestSeller: true,
    features: ['3D hand-poured resin', 'Shimmering iridescent wings', 'Sturdy grip clip', 'Perfect for half-up styles']
  },
  {
    id: 'prod-6',
    name: 'Custom Pearl Set',
    category: 'custom',
    categoryLabel: 'Custom Accessories',
    price: 799,
    originalPrice: 999,
    rating: 5.0,
    reviewCount: 64,
    image: '/images/hero_showcase.jpg',
    description: 'Complete handmade luxury box set: Matching Pearl Hair Bow, Pink Pearl Bracelet, and Floral Earrings.',
    badge: 'Luxury Box 🎁',
    isBestSeller: true,
    features: ['3 matching handcrafted pieces', 'Custom color customization', 'Satin gift box with bow', 'Personalized greeting card']
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Ananya S.',
    location: 'Chennai',
    comment: 'Absolutely beautiful! The finishing and quality were amazing. Looks so aesthetic in person! ♡',
    rating: 5,
    productName: 'Pink Pearl Bracelet',
    date: '2 days ago',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'rev-2',
    name: 'Priya R.',
    location: 'Bangalore',
    comment: 'Loved the handmade bracelet. It looked even prettier in person. The packaging was so cute too!',
    rating: 5,
    productName: 'Pearl Bow Hair Clip',
    date: '1 week ago',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'rev-3',
    name: 'Diya K.',
    location: 'Mumbai',
    comment: 'Such a cute collection. Perfect for gifting! Ordered custom hair bows for my sister\'s birthday.',
    rating: 5,
    productName: 'Custom Pearl Set',
    date: '2 weeks ago',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'rev-4',
    name: 'Meera V.',
    location: 'Hyderabad',
    comment: 'The floral earrings are so lightweight and comfortable. Ordering on WhatsApp was super smooth!',
    rating: 5,
    productName: 'Floral Handmade Earrings',
    date: '3 weeks ago',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Handmade Pink Pearl Bracelet Close-up',
    category: 'Bracelets',
    image: '/images/pearl_bracelet.jpg',
    likes: 248
  },
  {
    id: 'gal-2',
    title: 'Custom Ribbon Packaging & Gift Box',
    category: 'Packaging',
    image: '/images/hero_showcase.jpg',
    likes: 312
  },
  {
    id: 'gal-3',
    title: 'Floral Polymer Clay Earring Crafting',
    category: 'Handmade Work',
    image: '/images/floral_earrings.jpg',
    likes: 189
  },
  {
    id: 'gal-4',
    title: 'Satin Pearl Hair Bow in Hair',
    category: 'Customer Photo',
    image: '/images/hair_bow.jpg',
    likes: 420
  },
  {
    id: 'gal-5',
    title: 'Shimmering Butterfly Hair Clip Details',
    category: 'Hair Accessories',
    image: '/images/butterfly_clip.jpg',
    likes: 195
  },
  {
    id: 'gal-6',
    title: 'Signature Hair Accessories Collection',
    category: 'Hair Accessories',
    image: '/images/hair_accessories_cat.jpg',
    likes: 380
  }
];

export const WHY_CHOOSE_US = [
  {
    icon: '♡',
    title: 'Handmade with Love',
    description: 'Every piece is carefully handcrafted with passion, patience, and artisan skill.'
  },
  {
    icon: '✦',
    title: 'Unique Designs',
    description: 'Exclusive designs crafted to make your individual style stand out beautifully.'
  },
  {
    icon: '♢',
    title: 'Premium Quality',
    description: 'Made with high-grade pearls, non-tarnish metals, and durable satin ribbons.'
  },
  {
    icon: '♡',
    title: 'Made for You',
    description: 'Custom colors, sizes, and personalized designs available on request.'
  }
];
