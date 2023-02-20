/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'my_bg' : "url('../../public/assets/worldmap.png')",

      },
      fontFamily: {
        "Calibri": ["Calibri"]
      }
    },
  },
  plugins: [],
}
