/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'secondaryBlack': '#1C1B1F',
        "secondaryCyan": "#001C27",
        'totalWhite' : "#FFFFFF",
        "totalBlack" : "#000000",
        'primaryPurple' : "#BB6BD9",
        'secondaryGrey' : '#333333'
      },
    },
  },
  plugins: [],
}
