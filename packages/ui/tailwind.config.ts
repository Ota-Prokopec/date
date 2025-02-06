import type { Config } from 'tailwindcss';
import twAnimate from 'tailwindcss-animate';
import { content, plugin } from 'flowbite-react/tailwind';
import daisyui from 'daisyui';
import { heroui } from '@heroui/react';

export const tailwindConfig: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{ts,tsx}',
    '../../packages/ui/src/**/*.{ts,tsx}',
    '../../node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
    './index.html',
    content(),
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    screens: {
      'max-100': { max: '100px' },
      'max-200': { max: '200px' },
      'max-300': { max: '300px' },
      'max-400': { max: '400px' },
      'max-500': { max: '500px' },
      mobile: { max: '640px' },
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'scale-from-75-to-100': {
          from: { transform: 'scale(0.75)' },
          to: { transform: 'scale(1)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'scale-from-75-to-100': 'scale-from-75-to-100 0.15s ease-out',
      },
      colors: {
        darkModeBackgroundColor: '#030712ed',
        darkModeTextColor: 'white',
        lightModeBackgroundColor: 'white',
        lightModeTextColor: 'black',
      },
    },
  },

  plugins: [twAnimate, plugin(), daisyui, heroui()],
};

export default tailwindConfig;
