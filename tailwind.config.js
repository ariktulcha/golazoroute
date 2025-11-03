/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fifa-blue': {
          50: '#e6f0f8',
          100: '#cce1f1',
          200: '#99c3e3',
          300: '#66a5d5',
          400: '#4990c4',
          500: '#326295',
          600: '#2a5280',
          700: '#1f3d60',
          800: '#152840',
          900: '#0a1420',
        },
        'fifa-gold': {
          50: '#fdf8e8',
          100: '#faf0d1',
          200: '#f5e1a3',
          300: '#f0d275',
          400: '#d4b44e',
          500: '#B8860B',
          600: '#9a7109',
          700: '#735507',
          800: '#4d3805',
          900: '#261c02',
        },
        'fifa-dark': '#1a1a2e',
      },
      animation: {
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(50, 98, 149, 0.5)',
        'glow-gold': '0 0 20px rgba(184, 134, 11, 0.5)',
        'inner-lg': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.15)',
      },
    },
  },
  plugins: [],
}



