/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'MyFont': ['"My Font"', 'serif'], // Ensure fonts with spaces have " " surrounding it.
        'montse': ['Montserrat', 'sans-serif'] // Ensure fonts with spaces have " " surrounding it.
      },
    },
  },
  plugins: [],
}

