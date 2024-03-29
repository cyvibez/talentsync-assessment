/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/Component/**/*.{js,jsx,ts,tsx}",
    "./src/Pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      newFont: ['Inter', 'sans-serif']
    }
  },
  plugins: [],
}

