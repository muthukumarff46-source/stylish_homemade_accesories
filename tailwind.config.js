/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff5f7',
          100: '#fde8ef',
          200: '#fbcfe0',
          300: '#f8a5c4',
          400: '#f46d9c',
          500: '#ec4899', // Hot Pink primary
          600: '#db2777', // Rich Pink
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
          950: '#500727',
        },
        blush: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f472b6',
        },
        pearl: {
          DEFAULT: '#fff5f8',
          pure: '#ffffff',
          soft: '#faf5f7',
          border: '#fbcfe8',
        },
        roseGold: {
          light: '#fecdd3',
          DEFAULT: '#fb7185',
          dark: '#e11d48',
        },
        champagne: {
          light: '#fef3c7',
          DEFAULT: '#fde68a',
          gold: '#f59e0b',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        cursive: ['"Sacramento"', 'cursive'],
      },
      boxShadow: {
        'pink-glow': '0 0 25px -5px rgba(236, 72, 153, 0.3)',
        'pink-lg': '0 20px 40px -15px rgba(219, 39, 119, 0.25)',
        'pearl-card': '0 10px 30px -10px rgba(131, 24, 67, 0.08)',
        'glossy': '0 8px 32px 0 rgba(236, 72, 153, 0.15)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-reverse': 'floatReverse 5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(3deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(10px) rotate(-3deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
