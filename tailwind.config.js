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
      },
      keyframes: {
        slideRight: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(4px)' },
        },
        buttonPulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02) translateY(-1px)' },
        }
      },
      animation: {
        slideRight: 'slideRight 0.8s ease-in-out infinite',
        buttonPulse: 'buttonPulse 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
