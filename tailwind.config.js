/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px', // Extra small devices (iPhone SE, etc.)
      },
      colors: {
        'rewe-red': '#cc071e',
        'rewe-red-dark': '#a30518',
        'bio-green': '#4a7c23',
        'regional-blue': '#2563eb',
        'vegan-lime': '#84cc16',
      },
      spacing: {
        'safe-area-pb': 'env(safe-area-inset-bottom)',
      }
    },
  },
  plugins: [],
}
