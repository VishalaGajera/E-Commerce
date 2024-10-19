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
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        custom: '0 0 20px 0 rgba(0, 0, 0, .20)',
      },
    },
  },
  plugins: [],
}