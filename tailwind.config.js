/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        BgColor: '#fbf9f3',
        BgGolden: '#AB7442',

      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'loop-scroll': 'loop-scroll 20s linear infinite',
        'bg-fade-out': 'bg-fade-out 0.2s ease-in-out forwards',
        'bg-fade-in': 'bg-fade-in 0.2s ease-in forwards',
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'bg-fade-out': {
          '0%': { backgroundColor: '#AB7442' }, // Initial color
          '100%': { backgroundColor: 'transparent' }, // Final color (white)
        },
        'bg-fade-in': {
          '0%': { backgroundColor: 'transparent' }, // Final color (white)
          '100%': { backgroundColor: '#AB7442' }, // Initial color
        },
      },
      boxShadow: {
        custom: '0 0 20px 0 rgba(0, 0, 0, .20)',
      },
    },
  },
  plugins: [],
}