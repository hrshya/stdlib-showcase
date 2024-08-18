/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'grey' : '#ecebe8',
        'amber' : '#E6FB2D'
      }
    },
  },
  plugins: [],
}