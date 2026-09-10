/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#FDF8F3',
          100: '#F5EBE0',
          200: '#E8D5C4',
          300: '#D4B9A0',
          400: '#C4A484',
          500: '#B8956A',
          600: '#A67C52',
          700: '#8B6540',
          800: '#6F4F32',
          900: '#4A3320',
        },
        orange: {
          safety: '#FF6B00',
          bright: '#FF8533',
          dark: '#CC5500',
        },
        lavender: {
          DEFAULT: '#B8A8E8',
          light: '#D4CAFF',
          dark: '#8B7AC9',
        },
        black: {
          DEFAULT: '#0a0a0a',
          light: '#1a1a1a',
          medium: '#2a2a2a',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'mono-tiny': '0.625rem',
      },
      boxShadow: {
        'neo': '4px 4px 0px #0a0a0a',
        'neo-lg': '8px 8px 0px #0a0a0a',
        'neo-orange': '4px 4px 0px #FF6B00',
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(10, 10, 10, 0.08) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(10, 10, 10, 0.08) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid': '24px 24px',
      },
      animation: {
        'neo-pulse': 'neo-pulse 2s ease-in-out infinite',
        'grid-shift': 'grid-shift 20s linear infinite',
      },
      keyframes: {
        'neo-pulse': {
          '0%, 100%': {
            boxShadow: '4px 4px 0px #0a0a0a',
            transform: 'translate(0, 0)',
          },
          '50%': {
            boxShadow: '6px 6px 0px #FF6B00',
            transform: 'translate(-1px, -1px)',
          },
        },
        'grid-shift': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '24px 24px' },
        },
      },
    },
  },
  plugins: [],
}
