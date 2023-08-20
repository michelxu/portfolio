/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montse': ['Montserrat', 'sans-serif'] // Ensure fonts with spaces have " " surrounding it.
      },
      colors: {
        //https://coolors.co/002029-00303d-004052-005066-00607a
        'primary': '#002029',
        'gunmetal': '#00303d',
        'midnight': {
          500: '#004052',
          400: '#005066',
          300: '#00607A',
        },
      },
    },
  },
  plugins: [],
}

