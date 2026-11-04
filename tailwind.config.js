/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        espresso: '#24160F',
        cream: '#F1E5D7',
        sand: '#DCC9B4',
        terracotta: '#AD4E2A',
        honey: '#E2A93F',
        clay: '#C4713D',
        sage: {
          DEFAULT: '#80916A',
          light: '#BFCB9C',
        },
        latte: '#D5C4B2',
        creamlight: '#F6EFE4',
        line: '#3A2A20',
        mocha: '#8A6A54',
        whatsapp: '#25D366',
        dark: {
          bg: '#0E0A07',
          surface: '#12100C',
          card: '#1C1613',
          line: '#2E241D',
          text: '#F6EFE4',
          text2: '#BFAE9D',
          muted: '#A8927F',
          accent: '#C4572F',
          accentText: '#DA7C4F',
          highlight: '#E2A93F',
        },
      },
      fontFamily: {
        display: ['Anton', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: 'rgba(0, 0, 0, 0.08) 0 4px 12px -2px',
        medium: 'rgba(0, 0, 0, 0.16) 0 12px 24px -4px',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
