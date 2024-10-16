/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'fs-lg': '28px',
        'fs-xl': '32px',
        'fs-2xl': '40px',
        'fs-3xl': '52px',
        'fs-4xl': '64px',
      },
      colors: {
        customBlack: '#1B1A19',
        customlightgray: '#4D5566',
        customGray: '#594F43',
        customcream: '#C4C4C4',
      },
      fontFamily: {
        eczar: ['Eczar', 'sans-serif'],
        worksans: ['Work Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}