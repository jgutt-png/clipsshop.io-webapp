/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#6900ff',
        primary: '#6900ff',
        secondary: '#8f3fff',
        'clipshop-purple': {
          DEFAULT: '#6900ff',
          dark: '#5700d6',
          light: '#8f3fff',
          subtle: '#f5f0ff'
        }
      },
      keyframes: {
        slideRight: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(4px)' },
        },
        buttonPulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02) translateY(-1px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        slideRight: 'slideRight 0.8s ease-in-out infinite',
        buttonPulse: 'buttonPulse 2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
