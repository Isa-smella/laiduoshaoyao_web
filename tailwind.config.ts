import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        petal: '#F9E7EE',
        cream: '#FFF8F1',
        leaf: '#DCEFD7',
        blossom: '#E97098',
        moss: '#689B6F'
      },
      boxShadow: {
        floaty: '0 20px 45px -24px rgba(233, 112, 152, 0.45)'
      },
      keyframes: {
        drift: {
          '0%': { transform: 'translate3d(0, 0, 0) rotate(0deg)', opacity: '0.95' },
          '100%': { transform: 'translate3d(-24px, 80px, 0) rotate(26deg)', opacity: '0' }
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' }
        }
      },
      animation: {
        drift: 'drift 6s linear infinite',
        bob: 'bob 5s ease-in-out infinite',
        shimmer: 'shimmer 8s ease infinite'
      }
    }
  },
  plugins: []
};

export default config;
