/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily:{
      rsfregular: ["sf-rounded-regular", "mono"],
      rsfbold: ["sf-rounded-bold", "mono"],
      rsfheavy: ["sf-rounded-heavy", "mono"],
      rsfsemibold: ["sf-rounded-semibold", "mono"],
      rsfmedium: ["sf-rounded-medium", "mono"],
    },
    extend: {},
  },
  plugins: [],
}
