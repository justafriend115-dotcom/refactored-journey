/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Gold palette
        gold: {
          50: '#FFFAE0',
          100: '#FFF4C2',
          200: '#FFE987',
          300: '#FFD740',
          400: '#FFC107',
          500: '#FFD700',
          600: '#FFA500',
          700: '#B8860B',
          800: '#8B6508',
          900: '#6B4E06',
        },
        // Charcoal palette
        charcoal: {
          50: '#F5F5F5',
          100: '#E0E0E0',
          200: '#CCCCCC',
          300: '#B3B3B3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4D4D4D',
          800: '#333333',
          900: '#1a1a1a',
          950: '#0d0d0d',
        },
        // Grey palette
        grey: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
        primary: '#FFD700',
        secondary: '#FFA500',
        accent: '#FFC107',
        danger: '#ef4444',
        warning: '#FFA500',
        dark: {
          bg: '#1a1a1a',
          card: '#333333',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(255, 215, 0, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(255, 215, 0, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FFD740, #FFD700, #B8860B)',
        'charcoal-gradient': 'linear-gradient(180deg, #1a1a1a, #333333)',
        'ornate-pattern': 'repeating-linear-gradient(45deg, rgba(255, 215, 0, 0.05) 0px, rgba(255, 215, 0, 0.05) 2px, transparent 2px, transparent 10px)',
      },
      boxShadow: {
        'gold': '0 0 20px rgba(255, 215, 0, 0.3)',
        'gold-lg': '0 0 40px rgba(255, 215, 0, 0.4)',
        'gold-xl': '0 0 60px rgba(255, 215, 0, 0.5)',
        'ornate': 'inset 0 0 20px rgba(255, 215, 0, 0.1), 0 4px 20px rgba(0, 0, 0, 0.3)',
      },
      screens: {
        'xs': '475px',
        'sm-mobile': '640px',
      },
    },
  },
  plugins: [],
}
