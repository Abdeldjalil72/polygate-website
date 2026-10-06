/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        polygate: {
          navy: {
            950: '#060F22',
            900: '#0B1B3D',
            850: '#0E224D',
            800: '#122754',
            700: '#1C376F',
            600: '#284E94',
            100: '#E6EDF8',
            50: '#F0F5FA',
          },
          gold: {
            700: '#8A6726',
            600: '#A68038',
            500: '#C5A059',
            400: '#D9B46F',
            300: '#ECCF8E',
            200: '#F5E4B8',
            100: '#FAF4E6',
            50: '#FDFBEE',
          },
        },
      },
      fontFamily: {
        sans: ['"Barlow"', 'system-ui', 'sans-serif'],
        heading: ['"Barlow"', 'sans-serif'],
        display: ['"Barlow"', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(197, 160, 89, 0.4)',
        'service-card': '0 0 25px rgba(0, 0, 0, 0.08)',
        'hero-btn': '0 8px 20px -4px rgba(197, 160, 89, 0.5)',
      },
    },
  },
  plugins: [],
};
