export interface Product {
  id: string;
  name: string;
  category: 'hair' | 'bracelets' | 'earrings' | 'custom';
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  description: string;
  badge?: string;
  isBestSeller?: boolean;
  isNew?: boolean;
  features?: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  itemCount: number;
  categoryKey: 'hair' | 'bracelets' | 'earrings' | 'custom';
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
}

export interface Review {
  id: string;
  name: string;
  location?: string;
  comment: string;
  rating: number;
  productName?: string;
  date?: string;
  avatar?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  likes: number;
}

export interface ContactFormData {
  name: string;
  phone: string;
  lookingFor: string;
  message: string;
}
