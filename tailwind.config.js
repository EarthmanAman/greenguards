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
        'carousel_1' : "url('../../public/assets/carousel_1_op.png')",
        'grey_map' : "url('../../public/assets/grey_map.png')",
        'vector_green' : "url('../../public/assets/vector_green.png')",

      },
      fontFamily: {
        "Calibri": ["Calibri"]
      }
    },
  },
  plugins: [],
}
