import { Product, CartItem, ContactFormData } from '../types';

export const WHATSAPP_NUMBERS = {
  primary: {
    display: '7904334528',
    clean: '917904334528',
    name: 'Primary Orders'
  },
  secondary: {
    display: '6381792401',
    clean: '916381792401',
    name: 'Customer Support'
  }
};

const formatPhone = (phoneDisplay: string) => {
  if (phoneDisplay.includes('6381792401')) return WHATSAPP_NUMBERS.secondary.clean;
  return WHATSAPP_NUMBERS.primary.clean;
};

/**
 * Default general WhatsApp click handler as requested:
 * "Hi, I’m interested in your handmade accessories. I would like to know more about your products."
 */
export const getGeneralWhatsAppUrl = (phone: string = WHATSAPP_NUMBERS.primary.display) => {
  const number = formatPhone(phone);
  const text = encodeURIComponent(
    "Hi, I'm interested in your handmade accessories. I would like to know more about your products."
  );
  return `https://wa.me/${number}?text=${text}`;
};

/**
 * WhatsApp order URL for a single product
 */
export const getProductWhatsAppUrl = (product: Product, phone: string = WHATSAPP_NUMBERS.primary.display) => {
  const number = formatPhone(phone);
  const text = encodeURIComponent(
    `Hi! ♡ I would like to order the *${product.name}* (Price: ₹${product.price}). Please let me know the availability and payment details.`
  );
  return `https://wa.me/${number}?text=${text}`;
};

/**
 * WhatsApp checkout for Cart Items
 */
export const getCartWhatsAppUrl = (items: CartItem[], total: number, phone: string = WHATSAPP_NUMBERS.primary.display) => {
  const number = formatPhone(phone);
  let orderList = items.map((item, idx) => `${idx + 1}. ${item.product.name} (x${item.quantity}) - ₹${item.product.price * item.quantity}`).join('\n');
  
  const message = `Hi Stylish Handmade Accessories team! ♡\n\nI would like to place an order for:\n${orderList}\n\n*Total Amount:* ₹${total}\n\nPlease confirm availability and delivery details. Thank you!`;
  
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};

/**
 * Custom order request via WhatsApp
 */
export const getCustomOrderWhatsAppUrl = (idea: string = '', accessoryType: string = 'Custom Set', phone: string = WHATSAPP_NUMBERS.primary.display) => {
  const number = formatPhone(phone);
  const message = `Hi! ♡ I would like to request a *Custom Handmade Order*!\n\n*Type:* ${accessoryType}\n*Idea/Details:* ${idea || 'I have a custom accessory design in mind.'}\n\nCould we discuss the design, colors, and pricing?`;
  
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};

/**
 * Contact form enquiry redirected to WhatsApp
 */
export const getEnquiryWhatsAppUrl = (data: ContactFormData, phone: string = WHATSAPP_NUMBERS.primary.display) => {
  const number = formatPhone(phone);
  const message = `Hi Stylish Handmade Accessories! ♡\n\n*New Website Inquiry*\n*Name:* ${data.name}\n*Phone:* ${data.phone}\n*Looking For:* ${data.lookingFor}\n*Message:* ${data.message}`;
  
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};
