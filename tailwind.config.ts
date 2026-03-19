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
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-lato)', 'sans-serif'],
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
    },
  },
  plugins: [],
};

export default config;
