import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        olive: '#6B7242',
        ash: '#8B8C85',
        cream: '#F5F0E8',
        charcoal: '#2D2D2D',
        sage: '#A3A88F',
        dark: '#0a0a0a',
        darker: '#111111',
        gold: '#D4AF8C',
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      lineHeight: {
        relaxed: '1.75',
        loose: '2',
      },
      maxWidth: {
        prose: '65ch',
      },
      spacing: {
        prose: '2.5rem',
      },
      boxShadow: {
        luxury: '0 20px 60px rgba(0, 0, 0, 0.5)',
        'luxury-lg': '0 40px 80px rgba(0, 0, 0, 0.6)',
        'luxury-hover': '0 30px 60px rgba(212, 175, 140, 0.2)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-up': 'fadeUpLuxury 0.7s ease-out forwards',
        'hero-zoom': 'heroZoom 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
};

export default config;
